import type { StaticImageData } from "next/image"
import type { Locale } from "next-intl"

export type L = Record<Locale, string>

// The Montenegrin text in every language. Dishes use it until the
// translations are done: search for it to find what is left to translate.
export function untranslated(me: string): L {
  return { me, en: me, it: me, ru: me, tr: me }
}

// The Montenegrin and English texts the client sent; the other languages use
// the Montenegrin one until they are translated
export function meEn(me: string, en: string): L {
  return { me, en, it: me, ru: me, tr: me }
}

export type Dish = {
  // The number printed next to the dish (pizzas, salads, crepes, pancakes,
  // waffles): guests order the sweet crepes by it, as they have no name
  number?: number
  name: L
  // The ingredients, where the printed menu has them
  description?: L
  // The "choose a flavour" list, where the printed menu has one
  flavors?: L[]
  // EUR
  price: number
  // The printed menu has the "NO PORK" badge on it
  noPork?: boolean
  // Cut out of the printed menu, any size; some items have none
  image?: StaticImageData
  // The photo has a transparent background: shown without a frame
  transparent?: boolean
}

// A group of dishes inside a category, like "Posni sendviči" in Posni meni
export type MenuSection = {
  // id of the section's heading, unique on the page. For sections from the
  // client's JSON menus, it is the category id there.
  id: string
  title: L
  // A photo for the whole section, for one whose items have none
  image?: StaticImageData
  dishes: Dish[]
}

export type MenuCategory = {
  // URL segment, the same in every language: /meni/dorucak, /en/menu/dorucak
  slug: string
  title: L
  // One line under the name on the /meni card
  description: L
  // A dish from the category, cut out of the printed menu
  image: StaticImageData
  // The photo has a transparent background: shown whole, without the round
  // crop
  transparent?: boolean
  // Missing until the client sends the category's dishes
  sections?: MenuSection[]
}
