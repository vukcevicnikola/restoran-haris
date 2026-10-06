import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageHeading } from "@/components/layout/page-heading"
import { CategoryCard } from "@/components/menu/category-card"
import { categories } from "@/data/menu"
import { site } from "@/data/site"

// QR code target: never rename, move or remove this route.
// The overview: one card per category, each opening /meni/[category].
export default async function MenuPage({
  params,
}: PageProps<"/[locale]/meni">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("menu")

  return (
    <main className="pb-16 md:pb-24">
      <PageHeading>{t("title", { name: site.fullName })}</PageHeading>
      {/* Two columns from md, three from lg. Wrapping flex instead of a grid,
          so a last row that is not full (5 cards = 3 + 2) is centred */}
      <ul className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-4 px-4 md:mt-14 md:gap-6">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </main>
  )
}
