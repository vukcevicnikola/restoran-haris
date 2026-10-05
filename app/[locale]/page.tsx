import type { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/sections/hero"

// TODO more home sections (about, gallery, contact CTA)
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <main>
      <Hero />
    </main>
  )
}
