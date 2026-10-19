import type { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { AboutIntro } from "@/components/sections/about-intro"
import { Hero } from "@/components/sections/hero"
import { MenuPreview } from "@/components/sections/menu-preview"

// TODO more home sections (gallery, contact CTA)
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <main>
      <Hero />
      <AboutIntro />
      <MenuPreview />
    </main>
  )
}
