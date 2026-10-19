import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import potaziPotazKarfiol from "@/public/images/menu/potazi/potazi-potaz-karfiol.webp"
import potaziPotazSargarepa from "@/public/images/menu/potazi/potazi-potaz-sargarepa.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const potaziSections: MenuSection[] = [
  {
    id: "potazi",
    title: meEn("Potaži", "Cream soups"),
    dishes: [
      {
        name: meEn("Potaž šargarepa", "Carrot cream soup"),
        description: meEn(
          "Šargarepa, krompir, luk, začini, grčki jogurt, krutoni, susam",
          "Carrot, potato, onion, spices, greek yoghurt, croutons, sesame"
        ),
        price: 5,
        noPork: true,
        image: potaziPotazSargarepa,
        transparent: true,
      },
      {
        name: meEn("Potaž karfiol", "Cauliflower cream soup"),
        description: meEn(
          "Karfiol, krompir, luk, začini, ulje od tartufa, grčki jogurt, lješnik",
          "Cauliflower, potato, onion, spices, truffle oil, greek yoghurt, hazelnut"
        ),
        price: 5.8,
        noPork: true,
        image: potaziPotazKarfiol,
        transparent: true,
      },
    ],
  },
]
