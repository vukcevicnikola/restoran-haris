import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"

// TODO about content (written by the owner, Montenegrin first)
export default async function AboutPage({
  params,
}: PageProps<"/[locale]/o-nama">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("about")

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="text-4xl">{t("title")}</h1>
    </main>
  )
}
