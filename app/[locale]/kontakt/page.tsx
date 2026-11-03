import { ArrowUpRightIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageHeading } from "@/components/layout/page-heading"
import { SocialLinks } from "@/components/layout/social-links"
import { PlacePhotos } from "@/components/sections/place-photos"
import { JsonLd } from "@/components/seo/json-ld"
import { site } from "@/data/site"
import { localizedUrl, pageMetadata } from "@/lib/seo"
import { breadcrumbs, restaurant } from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/kontakt">): Promise<Metadata> {
  const locale = (await params).locale as Locale
  const t = await getTranslations({ locale, namespace: "meta.contact" })
  return pageMetadata({
    locale,
    href: "/kontakt",
    title: t("title"),
    description: t("description", { name: site.fullName, street: site.street }),
    image: "/og/contact.jpg",
  })
}

const blockHeading = "text-2xl"
const textLink =
  "rounded-sm font-semibold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-secondary-foreground"

// The address with a link to Google Maps, the phone (once the client gives
// it, data/site.ts) and the social buttons, beside a Google map of the
// place; then a few photos of the place. All text in Lora.
// TODO opening hours (site.hours)
export default async function ContactPage({
  params,
}: PageProps<"/[locale]/kontakt">) {
  const locale = (await params).locale as Locale
  setRequestLocale(locale)
  const t = await getTranslations("contact")
  const tNav = await getTranslations("nav")
  const tMeta = await getTranslations("meta.home")

  const address = `${site.street}, ${site.city}`
  // What Google Maps looks up: the name, so it lands on the business, and
  // the address. The embed needs no API key
  const query = encodeURIComponent(`${site.fullName}, ${address}`)

  return (
    <main className="pb-16 md:pb-24">
      {/* The restaurant's details here too: this is the page for its
          address (and phone and hours, once data/site.ts has them) */}
      <JsonLd
        data={[
          restaurant(
            locale,
            tMeta("description", { name: site.fullName, street: site.street })
          ),
          breadcrumbs([
            { name: site.fullName, url: localizedUrl(locale, "/") },
            { name: tNav("contact"), url: localizedUrl(locale, "/kontakt") },
          ]),
        ]}
      />
      <PageHeading>{t("title")}</PageHeading>
      {/* The details beside the map from md, above it on phones */}
      <div className="mx-auto mt-8 grid max-w-7xl gap-10 px-4 md:mt-10 md:grid-cols-[2fr_3fr] md:gap-12">
        <div className="space-y-8 font-heading text-lg md:text-xl">
          <section>
            <h2 className={blockHeading}>{t("address")}</h2>
            <p className="mt-3 flex gap-3">
              <MapPinIcon className="mt-1 size-5 shrink-0 text-primary" />
              <span>
                {site.street}
                <br />
                {site.city}, {t("country")}
              </span>
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textLink} mt-3 ml-8 inline-flex items-center gap-1 text-base md:text-lg`}
            >
              {t("directions")}
              <ArrowUpRightIcon aria-hidden className="size-4" />
            </a>
          </section>
          {site.phone && (
            <section>
              <h2 className={blockHeading}>{t("phone")}</h2>
              <p className="mt-3 flex gap-3">
                <PhoneIcon className="mt-1 size-5 shrink-0 text-primary" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className={textLink}
                >
                  {site.phone}
                </a>
              </p>
            </section>
          )}
          <section>
            <h2 className={blockHeading}>{t("follow")}</h2>
            <SocialLinks className="mt-4" />
          </section>
        </div>
        <iframe
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          title={t("map", { name: site.fullName, address })}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-4/3 w-full rounded-3xl border-0 bg-muted md:aspect-auto md:h-full md:min-h-96"
        />
      </div>
      {/* Windows, the bar, a table under the greenery and one by the mural */}
      <PlacePhotos
        photos={[
          "diningRoomCurtains",
          "barCounterLongView",
          "tableSettingHangingGreenery",
          "tableOilBottlesMural",
        ]}
        className="pt-16 md:pt-24"
      />
    </main>
  )
}
