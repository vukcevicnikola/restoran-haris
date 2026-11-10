import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { AboutIntro } from "@/components/sections/about-intro"
import { Hero } from "@/components/sections/hero"
import { MenuPreview } from "@/components/sections/menu-preview"
import { PlacePhotos } from "@/components/sections/place-photos"
import { JsonLd } from "@/components/seo/json-ld"
import { site } from "@/data/site"
import { pageMetadata } from "@/lib/seo"
import { restaurant, website } from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = (await params).locale as Locale
  const t = await getTranslations({ locale, namespace: "meta.home" })
  return pageMetadata({
    locale,
    href: "/",
    title: t("title", { name: site.fullName }),
    description: t("description", { name: site.fullName, street: site.street }),
    image: "/og/home.jpg",
    absolute: true,
  })
}

// TODO more home sections (contact CTA)
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale
  setRequestLocale(locale)
  const t = await getTranslations("home.gallery")
  const tMeta = await getTranslations("meta.home")
  const description = tMeta("description", {
    name: site.fullName,
    street: site.street,
  })

  return (
    <main>
      <JsonLd data={[restaurant(locale, description), website(locale)]} />
      <Hero />
      <AboutIntro />
      <MenuPreview />
      {/* "Iz našeg restorana": moments with guests and the desserts. No top
          padding: the menu preview above ends with its own. */}
      <PlacePhotos
        title={t("title")}
        photos={[
          "guestDelightedStrawberryCrepe",
          "pancakeTowerWaffleConePlate",
          "pistachioCreamPressDessertGuest",
          "threeFriendsLaughingTable",
        ]}
        className="pb-16 md:pb-24"
      />
    </main>
  )
}
