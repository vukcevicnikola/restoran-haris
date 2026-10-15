import type { StaticImageData } from "next/image"
import type { Locale } from "next-intl"

export type L = Record<Locale, string>

// The Montenegrin text in every language. Dishes use it until the
// translations are done: search for it to find what is left to translate.
export function untranslated(me: string): L {
  return { me, en: me, it: me, ru: me, tr: me }
}

export type Dish = {
  name: L
  // The ingredients, as on the printed menu
  description: L
  // EUR
  price: number
  // The plate as cut out of the printed menu: 900px wide, any height
  image: StaticImageData
}

// A group of dishes inside a category, like "Posni sendviči" in Posni meni
export type MenuSection = {
  // id of the section's heading, unique on the page
  id: string
  title: L
  dishes: Dish[]
}

export type MenuCategory = {
  // URL segment, the same in every language: /meni/dorucak, /en/menu/dorucak
  slug: string
  title: L
  // One line under the name on the /meni card
  description: L
  // Round crop of a dish on a plate, seen from above
  image: StaticImageData
  // Missing until the client sends the category's dishes
  sections?: MenuSection[]
}
