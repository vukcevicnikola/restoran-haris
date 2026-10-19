import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import slaneKrepe72 from "@/public/images/menu/slane-krepe/slane-krepe-72.webp"
import slaneKrepe77 from "@/public/images/menu/slane-krepe/slane-krepe-77.webp"
import slaneKrepe79 from "@/public/images/menu/slane-krepe/slane-krepe-79.webp"
import slaneKrepe81 from "@/public/images/menu/slane-krepe/slane-krepe-81.webp"
import slaneKrepe82 from "@/public/images/menu/slane-krepe/slane-krepe-82.webp"
import slaneKrepe83 from "@/public/images/menu/slane-krepe/slane-krepe-83.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const slaneKrepeSections: MenuSection[] = [
  {
    id: "slane-krepe",
    title: meEn("Slane krepe", "Salty crepes"),
    dishes: [
      {
        number: 70,
        name: meEn("Šunka, gauda", "Ham, gouda cheese"),
        price: 7.4,
      },
      {
        number: 71,
        name: meEn(
          "Pančeta, šunka, gauda, pečurke, paradajz, sos od senfa",
          "Bacon, ham, gouda cheese, mushrooms, tomato, mustard sauce"
        ),
        price: 10,
      },
      {
        number: 72,
        name: meEn(
          "Pavlaka, mortadela, iceberg, pistaći sos, gauda",
          "Sour cream, mortadella, iceberg, pistachio sauce, gouda cheese"
        ),
        price: 13.4,
        image: slaneKrepe72,
        transparent: true,
      },
      {
        number: 73,
        name: meEn(
          "Pileći file, gauda, kukuruz, pileća salata, susam",
          "Chicken fillet, goude cheese, corn, chicken salad, sesame"
        ),
        price: 10.8,
        noPork: true,
      },
      {
        number: 74,
        name: meEn(
          "Mocarela, pileći file, sušeni paradajz, miks salata",
          "Mozzarella, chicken fillet, dried tomato, mix salad"
        ),
        price: 10.2,
        noPork: true,
      },
      {
        number: 75,
        name: meEn(
          "Pileći file, pečurke, gauda, rukola, tartar sos",
          "Chicken fillet, mushrooms, gouda cheese, rocket, tartar sauce"
        ),
        price: 10.8,
        noPork: true,
      },
      {
        number: 77,
        name: meEn('Specijal "Hari\'s"', 'Special "Hari\'s"'),
        description: meEn(
          "Cjepkana svinjetina, gauda, pečurke, pančeta, paprika, paradajz, sos od senfa, miks zelenih salata, pomfrit",
          "Chopped pork, gouda cheese, mushrooms, bacon, pepper, tomato, mustard sauce, mix of green salads, french fries"
        ),
        price: 14.2,
        image: slaneKrepe77,
        transparent: true,
      },
      {
        number: 78,
        name: meEn("Grčka salata krepa", "Greek salad crepe"),
        description: meEn(
          "Feta sir, paradajz, krastavac, masline, paprika, crveni luk, origano, maslinovo ulje",
          "Feta cheese, tomato, cucumber, olives, pepper, red onion, oregano, olive oil"
        ),
        price: 9.6,
        noPork: true,
      },
      {
        number: 79,
        name: meEn("Zapečena krepa", "Oven crepe"),
        description: meEn(
          "Pileći file, gauda, kukuruz, paradajz, kajmak",
          "Chicken fillet, gouda cheese, corn, tomato, kaymak"
        ),
        price: 10.6,
        noPork: true,
        image: slaneKrepe79,
        transparent: true,
      },
      {
        number: 80,
        name: meEn("Zapečena krepa", "Oven crepe"),
        description: meEn(
          "Gauda, pileći file, kajmak, pavlaka, parmezan, susam, kisjeli krastavac",
          "Gouda cheese, chicken fillet, cream, sour cream, parmesan, sesame, pickles"
        ),
        price: 11.2,
        noPork: true,
      },
      {
        number: 81,
        name: meEn("Zapečena krepa", "Oven crepe"),
        description: meEn(
          "Gauda, pavlaka, juneće meso, kečap, koktel sos, čedar, čeri paradajz i crveni luk",
          "Gouda, sour cream, beef, ketchup, cocktail sauce, cedar, cherry tomatoes and red onion"
        ),
        price: 13.6,
        noPork: true,
        image: slaneKrepe81,
        transparent: true,
      },
      {
        number: 82,
        name: meEn("Grande Italiano", "Grande Italiano"),
        description: meEn(
          "Šunka, svinjska pršuta, kulen, sušeni paradajz, mocarela, pečena crvena paprika, rukola, vinegret sos, parmezan, pesto sos, med, zelena jabuka, pomorandža",
          "Ham, pork prosciutto, kulen, dried tomato, mozzarella, roasted red pepper, rocket, vinaigrette sauce, parmesan, pesto sauce, honey, green apple, orange"
        ),
        price: 13.8,
        image: slaneKrepe82,
        transparent: true,
      },
      {
        number: 83,
        name: meEn("Zapečena krepa", "Oven crepe"),
        description: meEn(
          "Cjepkana svinjetina, gauda, feta sir, tartar sos, pančeta, čeri",
          "Chopped pork, gouda cheese, feta cheese, tartar sauce, bacon, cherry tomatoes"
        ),
        price: 13.2,
        image: slaneKrepe83,
        transparent: true,
      },
      {
        number: 85,
        name: meEn("Italijanska krepa", "Italian crepe"),
        description: meEn(
          "Njeguška pršuta, gauda, čeri paradajz, rukola, vinegret sos",
          "Parma prosciutto, gouda, cherry tomato, rocket, vinaigrette sauce"
        ),
        price: 10.4,
      },
      {
        number: 86,
        name: meEn("Mediteranska krepa", "Mediteranian crepe"),
        description: meEn(
          "Pileći file, gauda, rukola, feta sir, ajvar",
          "Chicken fillet, gouda cheese, rocket, feta cheese, ajvar"
        ),
        price: 10.6,
        noPork: true,
      },
      {
        number: 87,
        name: meEn("Američka krepa", "American crepe"),
        description: meEn(
          "Cjepkana svinjetina, pančeta, paradajz, crni luk, BBQ sos, čedar sos",
          "Chopped pork, bacon, tomato, onion, BBQ sauce, cheddar sauce"
        ),
        price: 11.2,
      },
      {
        number: 88,
        name: meEn("Chicken cheese zapečena", "Chicken cheese oven crepe"),
        description: meEn(
          "Pileći file, krem sir, gauda, karamelizovani luk, čeri paradajz",
          "Chicken fillet, cream cheese, gouda cheese, caramelized onion, cherry tomato"
        ),
        price: 13.4,
        noPork: true,
      },
      {
        number: 89,
        name: meEn("Cheese pork zapečena", "Cheese pork oven crepe"),
        description: meEn(
          "Cjepkana svinjetina, gauda, čedar sir, karamelizovani luk, čeri paradajz",
          "Chopped pork, gouda cheese, cheddar cheese, caramelized onion, cherry tomato"
        ),
        price: 13.4,
      },
    ],
  },
]
