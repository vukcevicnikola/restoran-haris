import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageHeading } from "@/components/layout/page-heading"

// TODO photos of the place and the food (from the client)
export default async function GalleryPage({
  params,
}: PageProps<"/[locale]/galerija">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("gallery")

  return (
    <main className="pb-16 md:pb-24">
      <PageHeading>{t("title")}</PageHeading>
    </main>
  )
}
