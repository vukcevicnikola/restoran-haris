import type { MetadataRoute } from "next"
import { galleryPhotos } from "@/data/gallery"
import { categories } from "@/data/menu"
import type { MenuCategory } from "@/data/menu/types"
import { site } from "@/data/site"
import { routing } from "@/i18n/routing"
import { type Href, languageAlternates, localizedUrl } from "@/lib/seo"

// /sitemap.xml: every page in every language, each with its hreflang
// alternates, and the photos on it (the gallery's, the category's dishes)
// for image search. New pages go here too (CLAUDE.me, section 5).

const lastModified = new Date()

const pages = (href: Href, priority: number, images?: string[]) =>
  routing.locales.map((locale) => ({
    url: localizedUrl(locale, href),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
    alternates: { languages: languageAlternates(href) },
    ...(images && { images }),
  }))

const dishPhotos = (category: MenuCategory) => [
  ...new Set(
    (category.sections ?? [])
      .flatMap((s) => [s.image, ...s.dishes.map((d) => d.image)])
      .filter((image) => image !== undefined)
      .map((image) => site.url + image.src)
  ),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages("/", 1, [`${site.url}/og/home.jpg`]),
    ...pages("/meni", 0.9),
    ...categories.flatMap((category) =>
      pages(
        { pathname: "/meni/[category]", params: { category: category.slug } },
        0.8,
        dishPhotos(category)
      )
    ),
    ...pages(
      "/galerija",
      0.6,
      galleryPhotos.map((photo) => site.url + photo.image.src)
    ),
    ...pages("/o-nama", 0.6),
    ...pages("/kontakt", 0.7),
  ]
}
