import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"

// TODO address, hours and map from data/site.ts
export default async function ContactPage({
  params,
}: PageProps<"/[locale]/kontakt">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("contact")

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="text-4xl">{t("title")}</h1>
    </main>
  )
}
