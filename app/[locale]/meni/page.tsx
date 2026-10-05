import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"

// QR code target: never rename, move or remove this route.
// TODO category chips and items from data/menu.ts
export default async function MenuPage({
  params,
}: PageProps<"/[locale]/meni">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("menu")

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 md:py-24">
      <h1 className="text-4xl">{t("title")}</h1>
    </main>
  )
}
