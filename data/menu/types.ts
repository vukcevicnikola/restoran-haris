import type { StaticImageData } from "next/image"
import type { Locale } from "next-intl"
import { it } from "@/data/menu/translations/it"
import { ru } from "@/data/menu/translations/ru"
import { tr } from "@/data/menu/translations/tr"

export type L = Record<Locale, string>

// A text the client sent in Montenegrin only: English stays Montenegrin
// until it is translated here (search for it to find what is left), and the
// other languages come from the dictionaries in translations/
export function untranslated(me: string): L {
  return { me, en: me, it: it[me] ?? me, ru: ru[me] ?? me, tr: tr[me] ?? me }
}

// The Montenegrin and English texts the client sent, and the Italian,
// Russian and Turkish from the dictionaries in translations/ (a text missing
// from one shows in Montenegrin; `npm run i18n:check` lists those)
export function meEn(me: string, en: string): L {
  return { me, en, it: it[me] ?? me, ru: ru[me] ?? me, tr: tr[me] ?? me }
}

export type Dish = {
  // The number printed next to the dish (pizzas, salads, crepes, pancakes,
  // waffles). Not shown on the site (user, 2026-10-19); the import sorts
  // numbered dishes by it.
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
  // A line about the category. Not shown since 2026-10-19 (the cards show
  // only the name); the owner's proposals are kept for now.
  description: L
  // Signature dishes, by their Montenegrin name, named in the page's
  // description for search engines (2 or more; otherwise a general one)
  highlights?: string[]
  // A dish from the category, cut out of the printed menu
  image: StaticImageData
  // The photo has a transparent background: shown whole, without the round
  // crop
  transparent?: boolean
  // Missing until the client sends the category's dishes
  sections?: MenuSection[]
}
