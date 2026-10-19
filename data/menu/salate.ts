import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import salate1 from "@/public/images/menu/salate/salate-1.webp"
import salate6 from "@/public/images/menu/salate/salate-6.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const salateSections: MenuSection[] = [
  {
    id: "salate",
    title: meEn("Salate", "Salads"),
    dishes: [
      {
        number: 1,
        name: meEn('"Hari\'s" specijal', '"Hari\'s" special'),
        description: meEn(
          "Njeguška pršuta, mocarela, iceberg, rukola, jagode, zelena jabuka, lješnik, suvo grožđe, vinegret sos",
          "Parma prosciutto, mozzarella, iceberg, rocket, strawberries, green apple, hazelnut, raisins, vinaigrette sauce"
        ),
        price: 10.8,
        image: salate1,
        transparent: true,
      },
      {
        number: 2,
        name: meEn("Grčka salata", "Greek salad"),
        description: meEn(
          "Paradajz, krastavac, paprika, crveni luk, feta sir, masline, origano, maslinovo ulje",
          "Tomato, cucumber, pepper, red onion, feta cheese, olives, oregano, olive oil"
        ),
        price: 8.4,
        noPork: true,
      },
      {
        number: 3,
        name: meEn("Cezar salata", "Caesar salad"),
        description: meEn(
          "Miks salata, krastavac, krutoni, pileći file, pančeta, parmezan, cezar sos, paradajz",
          "Mix salads, cucumber, croutons, chicken fillet, bacon, parmesan, caesar sauce, tomato"
        ),
        price: 9.8,
      },
      {
        number: 4,
        name: meEn("Tuna salata", "Tuna salad"),
        description: meEn(
          "Miks salata, posni majonez, kukuruz, kisjeli krastavac, paradajz, crveni luk, tunjevina",
          "Mix salad, egg-free mayoNaisse, corn, pickles, tomato, red onion, tuna"
        ),
        price: 9.8,
        noPork: true,
      },
      {
        number: 5,
        name: meEn("Salata", "Salad"),
        description: meEn(
          "Rukola, iceberg, čeri, pesto sos, mocarela",
          "Rocket, iceberg, cherries, pesto sauce, mozzarella"
        ),
        price: 8.6,
        noPork: true,
      },
      {
        number: 6,
        name: meEn("Burrata i paradajz", "Burrata and tomato"),
        description: meEn(
          "Burata, aceto balzamiko, njeguška pršuta, paradajz, hljebčići",
          "Burrata, aceto balsamic, parma prosciutto, tomato, bread"
        ),
        price: 10.8,
        image: salate6,
        transparent: true,
      },
    ],
  },
]
