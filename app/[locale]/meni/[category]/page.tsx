import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { CategoryPanel } from "@/components/menu/category-panel"
import { DishBrowser } from "@/components/menu/dish-browser"
import { JsonLd } from "@/components/seo/json-ld"
import { categories, getCategory } from "@/data/menu"
import type { MenuCategory } from "@/data/menu/types"
import { site } from "@/data/site"
import { Link } from "@/i18n/navigation"
import { localizedUrl, pageMetadata } from "@/lib/seo"
import { breadcrumbs, menuCategory } from "@/lib/structured-data"

// Only the categories in data/menu.ts exist; any other slug is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ category: slug }))
}

// The category's signature dishes (data/menu/index.ts), in this language
function highlightedDishes(category: MenuCategory, locale: Locale) {
  const dishes = (category.sections ?? []).flatMap((s) => s.dishes)
  return (category.highlights ?? []).flatMap((me) => {
    const dish = dishes.find((d) => d.name.me === me)
    return dish ? [dish.name[locale]] : []
  })
}

const href = (slug: string) => ({
  pathname: "/meni/[category]" as const,
  params: { category: slug },
})

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/meni/[category]">): Promise<Metadata> {
  const { locale: param, category: slug } = await params
  const locale = param as Locale
  const category = getCategory(slug)
  if (!category) return {}
  const t = await getTranslations({ locale, namespace: "meta.category" })
  const name = category.title[locale]
  const dishes = highlightedDishes(category, locale)
  const values = { category: name, name: site.fullName }
  return pageMetadata({
    locale,
    href: href(slug),
    title: t("title", { category: name }),
    description:
      dishes.length >= 2
        ? t("descriptionDishes", { ...values, dishes: dishes.join(", ") })
        : t("description", values),
    image: `/og/menu/${slug}.jpg`,
  })
}

// A category page: a dark panel with the name, sticky chips that pick a
// section, then that section's grid of dish cards. A category without dishes
// yet shows only the panel with a note.
export default async function MenuCategoryPage({
  params,
}: PageProps<"/[locale]/meni/[category]">) {
  const { locale: param, category: slug } = await params
  const locale = param as Locale
  setRequestLocale(locale)
  const category = getCategory(slug)
  if (!category) notFound()
  const t = await getTranslations("menu.category")
  const tNav = await getTranslations("nav")
  const structuredData = [
    menuCategory(locale, category),
    breadcrumbs([
      { name: site.fullName, url: localizedUrl(locale, "/") },
      { name: tNav("menu"), url: localizedUrl(locale, "/meni") },
      { name: category.title[locale], url: localizedUrl(locale, href(slug)) },
    ]),
  ]

  const heading = (
    <>
      <Link
        href="/meni"
        className="inline-flex items-center gap-2 rounded-sm font-heading font-semibold text-brand-peach underline-offset-4 hover:underline"
      >
        <ArrowLeftIcon aria-hidden className="size-4" />
        {t("back")}
      </Link>
      <h1 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl">
        {category.title[locale]}
      </h1>
    </>
  )

  return (
    <main className="pb-16 md:pb-24">
      <JsonLd data={structuredData} />
      {category.sections ? (
        // Only this page's language goes to the browser
        <DishBrowser
          sections={category.sections.map((section) => ({
            id: section.id,
            title: section.title[locale],
            image: section.image,
            dishes: section.dishes.map((dish) => ({
              name: dish.name[locale],
              description: dish.description?.[locale],
              flavors: dish.flavors?.map((flavor) => flavor[locale]),
              price: dish.price,
              noPork: dish.noPork,
              image: dish.image,
              transparent: dish.transparent,
            })),
          }))}
        >
          {heading}
        </DishBrowser>
      ) : (
        <CategoryPanel>
          {heading}
          <p className="mt-8 text-brand-cream/85">{t("empty")}</p>
        </CategoryPanel>
      )}
    </main>
  )
}
