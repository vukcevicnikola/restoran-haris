import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import burgeriBurger1 from "@/public/images/menu/burgeri/burgeri-burger-1.webp"
import burgeriBurger2 from "@/public/images/menu/burgeri/burgeri-burger-2.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const burgeriSections: MenuSection[] = [
  {
    id: "burgeri",
    title: meEn("Burgeri", "Burgers"),
    dishes: [
      {
        name: meEn("Burger 1", "Burger"),
        description: meEn(
          "Penkejk, juneće meso, iceberg, burger sos, paradajz, pomfrit, čedar sir",
          "Pancake, beef, iceberg, burger sauce, tomato, french fries, cheddar cheese"
        ),
        price: 9,
        noPork: true,
        image: burgeriBurger1,
        transparent: true,
      },
      {
        name: meEn("Burger 2", "Burger"),
        description: meEn(
          "Penkejk, juneće meso, iceberg, crveni luk, majonez, BBQ, pomfrit, čedar sir",
          "Pancake, beef, iceberg, red onion, mayonnaise, BBQ, french fries, cheddar cheese"
        ),
        price: 9,
        noPork: true,
        image: burgeriBurger2,
        transparent: true,
      },
    ],
  },
]
