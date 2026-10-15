import { ArrowLeftIcon } from "lucide-react"
import { notFound } from "next/navigation"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { CategoryPanel } from "@/components/menu/category-panel"
import { DishBrowser } from "@/components/menu/dish-browser"
import { categories, getCategory } from "@/data/menu"
import { Link } from "@/i18n/navigation"

// Only the categories in data/menu.ts exist; any other slug is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ category: slug }))
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
      {category.sections ? (
        // Only this page's language goes to the browser
        <DishBrowser
          sections={category.sections.map((section) => ({
            id: section.id,
            title: section.title[locale],
            dishes: section.dishes.map((dish) => ({
              name: dish.name[locale],
              description: dish.description[locale],
              price: dish.price,
              image: dish.image,
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
