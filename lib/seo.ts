import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { site } from "@/data/site"
import { getPathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"

// A page's internal href: "/meni", or a pathname with params for the
// category pages
export type Href = Parameters<typeof getPathname>[0]["href"]

// Used for <html lang> and hreflang links
export const hreflang: Record<Locale, string> = {
  me: "sr-Latn-ME",
  en: "en",
  it: "it",
  ru: "ru",
  tr: "tr",
}

// og:locale. English is en_GB, as the site's English is British (the UK flag).
export const ogLocale: Record<Locale, string> = {
  me: "sr_ME",
  en: "en_GB",
  it: "it_IT",
  ru: "ru_RU",
  tr: "tr_TR",
}

// "/meni" in "me" -> https://restoranharis.com/meni
// "/meni" in "en" -> https://restoranharis.com/en/menu
export function localizedUrl(locale: Locale, href: Href) {
  const path = getPathname({ locale, href })
  return site.url + (path === "/" ? "" : path)
}

// The page in every language, by hreflang code, and x-default (Montenegrin,
// the language without a prefix)
export function languageAlternates(href: Href) {
  return {
    ...Object.fromEntries(
      routing.locales.map((l) => [hreflang[l], localizedUrl(l, href)])
    ),
    "x-default": localizedUrl(routing.defaultLocale, href),
  }
}

// A page's metadata: title, description, canonical and hreflang links, and
// the share card. Every page sets all of it, as Next replaces a nested field
// like openGraph whole instead of merging it with the layout's. `title` goes
// through the layout's template ("%s | Hari's Creperie") unless `absolute`.
// `image` is a 1200x630 file in public/og (scripts/generate-seo-images.ts).
export function pageMetadata({
  locale,
  href,
  title,
  description,
  image,
  absolute = false,
}: {
  locale: Locale
  href: Href
  title: string
  description: string
  image: string
  absolute?: boolean
}): Metadata {
  const url = localizedUrl(locale, href)
  const fullTitle = absolute ? title : `${title} | ${site.fullName}`
  const images = [{ url: image, width: 1200, height: 630, alt: fullTitle }]
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(href) },
    openGraph: {
      type: "website",
      siteName: site.fullName,
      locale: ogLocale[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
      url,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  }
}
