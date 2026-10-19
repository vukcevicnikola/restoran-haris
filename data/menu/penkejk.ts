import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import penkejk60 from "@/public/images/menu/penkejk/penkejk-60.webp"
import penkejk61 from "@/public/images/menu/penkejk/penkejk-61.webp"
import penkejk62 from "@/public/images/menu/penkejk/penkejk-62.webp"
import penkejk63 from "@/public/images/menu/penkejk/penkejk-63.webp"
import penkejk64 from "@/public/images/menu/penkejk/penkejk-64.webp"
import penkejk65 from "@/public/images/menu/penkejk/penkejk-65.webp"
import penkejk66 from "@/public/images/menu/penkejk/penkejk-66.webp"
import penkejk67 from "@/public/images/menu/penkejk/penkejk-67.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const penkejkSections: MenuSection[] = [
  {
    id: "penkejk",
    title: meEn("Penkejk", "Pancakes"),
    dishes: [
      {
        number: 60,
        name: meEn("Mliječna čokolada", "Milk chocolate"),
        price: 5.6,
        image: penkejk60,
        transparent: true,
      },
      {
        number: 61,
        name: meEn(
          "Vanilla krem, jagode, mliječna čokolada",
          "Vanilla cream, strawberries, milk chocolate"
        ),
        price: 10.4,
        image: penkejk61,
        transparent: true,
      },
      {
        number: 62,
        name: meEn(
          "Bueno namaz, krem vanila, krem čokolada, cookies keks, bueno čokolada, mliječna čokolada, kinder jaje",
          "Bueno cream, vanilla cream, chocolate cream, cookies, bueno chocolate, milk chocolate, kinder egg"
        ),
        price: 13.2,
        image: penkejk62,
        transparent: true,
      },
      {
        number: 63,
        name: meEn("Javorov sirup, orašasti plodovi", "Maple syrup, nuts"),
        price: 9.2,
        image: penkejk63,
        transparent: true,
      },
      {
        number: 64,
        name: meEn(
          "Pistaći čokolada, bijela čokolada, maline",
          "Pistachio chocolate, white chocolate, raspberries"
        ),
        price: 9.8,
        image: penkejk64,
        transparent: true,
      },
      {
        number: 65,
        name: meEn(
          "Crna čokolada, kikiriki puter, banana",
          "Dark chocolate, peanut butter, banana"
        ),
        price: 9.2,
        image: penkejk65,
        transparent: true,
      },
      {
        number: 66,
        name: meEn(
          "Malina namaz, jagode, sladoled jagoda, bijela čokolada, crna čokolada, kornet",
          "Raspberry cream, strawberries, strawberry ice cream, white chocolate, dark chocolate, cone"
        ),
        price: 12.8,
        image: penkejk66,
        transparent: true,
      },
      {
        number: 67,
        name: meEn('"Hari\'s" Specijal penkejk', '"Hari\'s" Special pancake'),
        description: meEn(
          "Pistaći čokolada, bijela čokolada, maline, nar, pistaći sladoled, pistaći, kornet, šećer u prahu",
          "Pistachio chocolate, white chocolate, raspberries, pomogranate, pistachio ice cream, pistachios, cone, powdered sugar"
        ),
        price: 13.4,
        image: penkejk67,
        transparent: true,
      },
    ],
  },
]
