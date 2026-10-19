import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import pica6 from "@/public/images/menu/pica/pica-6.webp"
import pica8 from "@/public/images/menu/pica/pica-8.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const picaSections: MenuSection[] = [
  {
    id: "pica",
    title: meEn("Pica", "Pizza"),
    dishes: [
      {
        number: 1,
        name: meEn("Giardino", "Giardino"),
        description: meEn(
          "Pelat, pančeta, feta sir, pečurke, čeri paradajz, pizza sir",
          "Pomodori pelati, bacon, feta cheese, mushrooms, cherry tomato, pizza cheese"
        ),
        price: 10.4,
      },
      {
        number: 2,
        name: meEn("Fileti di polo", "Fileti di polo"),
        description: meEn(
          "Pelat, pileći file, pančeta, pečurke, mocarela, čeri paradajz, pizza sir",
          "Pomodori pelati, chicken fillet, bacon, mushrooms, mozzarella, cherry tomato, pizza cheese"
        ),
        price: 10.6,
      },
      {
        number: 3,
        name: meEn("Specijal", "Special"),
        description: meEn(
          "Pelat, šunka, pančeta, kobasica, pečurke, rukola, pizza sir",
          "Pomodori pelati, ham, bacon, sausage, mushrooms, rocket, pizza cheese"
        ),
        price: 12,
      },
      {
        number: 4,
        name: meEn("Margarita", "Margharita"),
        description: meEn(
          "Pelat, čeri paradajz, maslinovo ulje, pizza sir",
          "Pomodori pelati, cherry tomato, olive oil, pizza cheese"
        ),
        price: 9.6,
        noPork: true,
      },
      {
        number: 6,
        name: meEn("Mortadela", "Mortadella"),
        description: meEn(
          "Mortadela, pavlaka, pizza sir, čeri paradajz, sos od pistaća, burata",
          "Mortadella, sour cream, pizza cheese, cherry tomatoes, pistachio sauce, burrata"
        ),
        price: 16.8,
        image: pica6,
        transparent: true,
      },
      {
        number: 7,
        name: meEn("Prosciutto & Burrata", "Prosciutto & Burrata"),
        description: meEn(
          "Pelat, čeri paradajz, pizza sir, njeguška pršuta, burata",
          "Pomodori pelati, cherry tomato, pizza cheese, parma prosciutto, burrata"
        ),
        price: 15.8,
      },
      {
        number: 8,
        name: meEn("Montenegro pica", "Montenegro pizza"),
        description: meEn(
          "Pelat, čeri paradajz, pizza sir, kulen, svinjska pršuta, feta sir",
          "Pomodori pelati, cherry tomato, pizza cheese, kulen, pork prosciutto, feta cheese"
        ),
        price: 11.8,
        image: pica8,
        transparent: true,
      },
    ],
  },
]
