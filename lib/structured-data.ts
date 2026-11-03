import "server-only"
import type { Locale } from "next-intl"
import { type GalleryPhoto, galleryPhoto, galleryPhotos } from "@/data/gallery"
import { categories } from "@/data/menu"
import type { Dish, MenuCategory } from "@/data/menu/types"
import { site } from "@/data/site"
import { hreflang, localizedUrl } from "@/lib/seo"

// schema.org JSON-LD for search engines, rendered by <JsonLd>. Only facts
// from data/site.ts and the menu: the phone, hours and coordinates appear
// once they are filled there.

const absolute = (path: string) => site.url + path
const restaurantId = `${site.url}/#restaurant`
const context = "https://schema.org"

// From the cheapest to the dearest item on the menu, in whole euros, without
// Budi sam svoj šef: its add-ons (from €0.70) are not dishes on their own
function priceRange() {
  const prices = categories
    .filter((c) => c.slug !== "budi-sam-svoj-sef")
    .flatMap((c) => c.sections ?? [])
    .flatMap((s) => s.dishes)
    .map((d) => d.price)
  return `€${Math.floor(Math.min(...prices))}–${Math.ceil(Math.max(...prices))}`
}

const photoIds: GalleryPhoto["id"][] = [
  "strawberryPistachioCrepeChocolate",
  "burgerFriesBlackPlate",
  "diningRoomTiledFloor",
  "muralArchWallLamp",
]

// The restaurant itself, on the home and contact pages
export function restaurant(locale: Locale, description: string) {
  return {
    "@context": context,
    "@type": "Restaurant",
    "@id": restaurantId,
    name: site.fullName,
    alternateName: site.name,
    url: localizedUrl(locale, "/"),
    description,
    logo: absolute("/logoharis.png"),
    image: [
      absolute("/og/home.jpg"),
      ...photoIds.map((id) => absolute(galleryPhoto(id).image.src)),
    ],
    servesCuisine: site.servesCuisine,
    priceRange: priceRange(),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressCountry: site.country,
    },
    hasMenu: localizedUrl(locale, "/meni"),
    // Only the Montenegrin Instagram: the Facebook page is the Belgrade
    // restaurant's, a different place
    sameAs: [site.social.instagram],
    ...(site.phone && { telephone: site.phone }),
    ...(site.geo.lat !== 0 && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
    }),
    ...(site.hours.length > 0 && {
      openingHours: site.hours.map((h) => `${h.days} ${h.open}-${h.close}`),
    }),
  }
}

export function website(locale: Locale) {
  return {
    "@context": context,
    "@type": "WebSite",
    url: site.url,
    name: site.fullName,
    alternateName: site.name,
    inLanguage: hreflang[locale],
    publisher: { "@id": restaurantId },
  }
}

// Home > ... > this page
export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

const categoryUrl = (locale: Locale, slug: string) =>
  localizedUrl(locale, {
    pathname: "/meni/[category]",
    params: { category: slug },
  })

// /meni: the menu and its categories, each with its own page
export function menu(locale: Locale, name: string) {
  return {
    "@context": context,
    "@type": "Menu",
    name,
    url: localizedUrl(locale, "/meni"),
    inLanguage: hreflang[locale],
    hasMenuSection: categories.map((c) => ({
      "@type": "MenuSection",
      name: c.title[locale],
      url: categoryUrl(locale, c.slug),
    })),
  }
}

const menuItem = (dish: Dish, locale: Locale) => ({
  "@type": "MenuItem",
  name: dish.name[locale],
  ...(dish.description && { description: dish.description[locale] }),
  ...(dish.image && { image: absolute(dish.image.src) }),
  offers: {
    "@type": "Offer",
    price: dish.price.toFixed(2),
    priceCurrency: "EUR",
  },
})

// A category page: its sections and every dish with its price
export function menuCategory(locale: Locale, category: MenuCategory) {
  return {
    "@context": context,
    "@type": "MenuSection",
    name: category.title[locale],
    url: categoryUrl(locale, category.slug),
    inLanguage: hreflang[locale],
    hasMenuSection: (category.sections ?? []).map((section) => ({
      "@type": "MenuSection",
      name: section.title[locale],
      hasMenuItem: section.dishes.map((dish) => menuItem(dish, locale)),
    })),
  }
}

// /galerija: every photo with its description
export function imageGallery(
  locale: Locale,
  name: string,
  caption: (id: GalleryPhoto["id"]) => string
) {
  return {
    "@context": context,
    "@type": "ImageGallery",
    name,
    url: localizedUrl(locale, "/galerija"),
    inLanguage: hreflang[locale],
    image: galleryPhotos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: absolute(photo.image.src),
      caption: caption(photo.id),
      width: photo.image.width,
      height: photo.image.height,
    })),
  }
}
