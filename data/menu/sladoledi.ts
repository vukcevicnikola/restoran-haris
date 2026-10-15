import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import sladoledCup from "@/public/images/menu/sladoledi/sladoled-cup.webp"

// From the client's menu, CG_Haris_slatka_karta_FINAL_10_2026.pdf
// (October 2026), via scripts/import-menu.ts; the photos are cut out of the
// same PDF. Texts and prices are exactly as printed. The section ids are
// the category ids in the JSON.
export const sladolediSections: MenuSection[] = [
  {
    id: "sladoled",
    title: meEn("Sladoled", "Ice Cream"),
    image: sladoledCup,
    dishes: [
      {
        name: meEn("Vanila", "Vanilla"),
        price: 2,
      },
      {
        name: meEn("Bueno", "Bueno"),
        price: 2.3,
      },
      {
        name: meEn("Ferrero", "Ferrero"),
        price: 2.3,
      },
      {
        name: meEn("Karamela", "Caramel"),
        price: 2.3,
      },
      {
        name: meEn("Cookies", "Cookies"),
        price: 2.3,
      },
      {
        name: meEn("Plazma", "Plazma"),
        price: 2.1,
      },
      {
        name: meEn("Banana", "Banana"),
        price: 2,
      },
      {
        name: meEn("Jagoda", "Strawberry"),
        price: 2,
      },
      {
        name: meEn("Pistać", "Pistachio"),
        price: 2.6,
      },
    ],
  },
]
