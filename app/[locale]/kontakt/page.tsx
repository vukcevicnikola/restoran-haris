import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageHeading } from "@/components/layout/page-heading"

// TODO address, hours and map from data/site.ts
export default async function ContactPage({
  params,
}: PageProps<"/[locale]/kontakt">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("contact")

  return (
    <main className="pb-16 md:pb-24">
      <PageHeading>{t("title")}</PageHeading>
    </main>
  )
}
