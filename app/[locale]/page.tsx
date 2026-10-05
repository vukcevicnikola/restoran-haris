import type { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { site } from "@/data/site"

// TODO home sections (hero, about, gallery, contact CTA)
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="text-4xl">{site.name}</h1>
    </main>
  )
}
