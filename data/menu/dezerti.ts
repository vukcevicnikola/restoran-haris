import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import bananaSplit from "@/public/images/menu/dezerti/banana-split.webp"
import cokoKup from "@/public/images/menu/dezerti/coko-kup.webp"
import cookiesKup from "@/public/images/menu/dezerti/cookies-kup.webp"
import djecjiKup from "@/public/images/menu/dezerti/djecji-kup.webp"
import dubaiJagodaKup from "@/public/images/menu/dezerti/dubai-jagoda-kup.webp"
import dubaiMalinaKup from "@/public/images/menu/dezerti/dubai-malina-kup.webp"
import jagodeSaSlagom from "@/public/images/menu/dezerti/jagode-sa-slagom.webp"
import karamelaKup from "@/public/images/menu/dezerti/karamela-kup.webp"
import pistaciMalinaKup from "@/public/images/menu/dezerti/pistaci-malina-kup.webp"
import visnjaVanilaKup from "@/public/images/menu/dezerti/visnja-vanila-kup.webp"
import vocnaSalata from "@/public/images/menu/dezerti/vocna-salata.webp"
import vocniKup from "@/public/images/menu/dezerti/vocni-kup.webp"

// From the client's menu, CG_Haris_slatka_karta_FINAL_10_2026.pdf
// (October 2026), via scripts/import-menu.ts; the photos are cut out of the
// same PDF. Texts and prices are exactly as printed. The section ids are
// the category ids in the JSON.
export const dezertiSections: MenuSection[] = [
  {
    id: "kup",
    title: meEn("Kup", "Cup"),
    dishes: [
      {
        name: meEn("Višnja vanila kup", "Cherry vanilla cup"),
        description: meEn(
          "Višnje, sladoled vanila, plazma",
          "Cherries, vanilla ice cream, plazma"
        ),
        price: 5.2,
        image: visnjaVanilaKup,
        transparent: true,
      },
      {
        name: meEn("Pistaći malina kup", "Pistachio raspberry cup"),
        description: meEn(
          "Sladoled pistaći, čokolada pistaći, malina, slatki kornet",
          "Pistachio ice cream, pistachio chocolate, raspberry, sweet cornet"
        ),
        price: 5.2,
        image: pistaciMalinaKup,
        transparent: true,
      },
      {
        name: meEn("Dubai malina kup", "Dubai raspberry cup"),
        description: meEn(
          "Kadaif, maline, pistaći čokolada, vanila sladoled",
          "Kadaif, raspberries, pistachio chocolate, vanilla ice cream"
        ),
        price: 5.6,
        image: dubaiMalinaKup,
        transparent: true,
      },
      {
        name: meEn("Dubai jagoda", "Dubai strawberry cup"),
        description: meEn(
          "Kadaif, jagode, mliječna čokolada, vanila sladoled",
          "Kadaif, strawberries, milk chocolate, vanilla ice cream"
        ),
        price: 5.6,
        image: dubaiJagodaKup,
        transparent: true,
      },
      {
        name: meEn("Cookies kup", "Cookies cup"),
        description: meEn(
          "Cookies sladoled, cookies keks, bueno čokolada, banane",
          "Cookies ice cream, cookies biscuit, bueno chocolate, bananas"
        ),
        price: 5.6,
        image: cookiesKup,
        transparent: true,
      },
      {
        name: meEn("Karamela kup", "Caramel cup"),
        description: meEn(
          "Sladoled karamela, jagode, banane, toping karamela, karamelizovani kikiriki",
          "Caramel ice cream, strawberries, bananas, caramel topping, caramelized peanuts"
        ),
        price: 5.6,
        image: karamelaKup,
        transparent: true,
      },
      {
        name: meEn("Čoko kup", "Choco cup"),
        description: meEn(
          "Ferrero sladoled, bueno, mliječna i crna čokolada, cookies keks, šlag, čoko kuglice, roler",
          "Ferrero ice cream, bueno, milk and dark chocolate, cookies biscuit, whipped cream, choco balls, wafer roll"
        ),
        price: 6.4,
        image: cokoKup,
        transparent: true,
      },
      {
        name: meEn("Dječiji kup", "Kids cup"),
        description: meEn(
          "Sladoled vanila, sladoled jagoda, oreo, šlag, šarene mrvice, kornet",
          "Vanilla ice cream, strawberry ice cream, oreo, whipped cream, sprinkles, cone"
        ),
        price: 3.4,
        image: djecjiKup,
        transparent: true,
      },
      {
        name: meEn("Voćni kup", "Fruit cup"),
        price: 6.2,
        image: vocniKup,
        transparent: true,
      },
    ],
  },
  {
    id: "desert",
    title: meEn("Desert", "Dessert"),
    dishes: [
      {
        name: meEn("Jagode sa šlagom", "Strawberries with whipped cream"),
        price: 4.8,
        image: jagodeSaSlagom,
        transparent: true,
      },
      {
        name: meEn(
          "Voćna salata med i orasi",
          "Fruit salad with honey and walnuts"
        ),
        price: 6.6,
        image: vocnaSalata,
        transparent: true,
      },
      {
        name: meEn("Voćna salata", "Fruit salad"),
        price: 6.2,
        image: vocnaSalata,
        transparent: true,
      },
      {
        name: meEn("Banana split", "Banana split"),
        description: meEn(
          "Sladoled jagoda, sladoled vanila, sladoled ferero, banana, jagode, šlag",
          "Strawberry ice cream, vanilla ice cream, ferrero ice cream, banana, strawberries, whipped cream"
        ),
        price: 6.4,
        image: bananaSplit,
        transparent: true,
      },
    ],
  },
]
