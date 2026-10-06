import { ArrowLeftIcon } from "lucide-react"
import { notFound } from "next/navigation"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageHeading } from "@/components/layout/page-heading"
import { categories, getCategory } from "@/data/menu"
import { Link } from "@/i18n/navigation"

// Only the categories in data/menu.ts exist; any other slug is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ category: slug }))
}

// TODO dishes of the category from data/menu.ts (name, description, price)
export default async function MenuCategoryPage({
  params,
}: PageProps<"/[locale]/meni/[category]">) {
  const { locale, category: slug } = await params
  setRequestLocale(locale as Locale)
  const category = getCategory(slug)
  if (!category) notFound()
  const t = await getTranslations("menu.category")

  return (
    <main className="pb-16 md:pb-24">
      <PageHeading>{category.title[locale as Locale]}</PageHeading>
      <div className="mx-auto mt-10 max-w-2xl px-4 md:mt-14">
        <Link
          href="/meni"
          className="inline-flex items-center gap-2 rounded-sm font-heading font-bold text-primary underline-offset-4 hover:underline"
        >
          <ArrowLeftIcon aria-hidden className="size-4" />
          {t("back")}
        </Link>
        <p className="mt-8 text-muted-foreground">{t("empty")}</p>
      </div>
    </main>
  )
}
