import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import slatkeKrepe1 from "@/public/images/menu/slatke-krepe/slatke-krepe-1.webp"
import slatkeKrepe10 from "@/public/images/menu/slatke-krepe/slatke-krepe-10.webp"
import slatkeKrepe11 from "@/public/images/menu/slatke-krepe/slatke-krepe-11.webp"
import slatkeKrepe12 from "@/public/images/menu/slatke-krepe/slatke-krepe-12.webp"
import slatkeKrepe13 from "@/public/images/menu/slatke-krepe/slatke-krepe-13.webp"
import slatkeKrepe14 from "@/public/images/menu/slatke-krepe/slatke-krepe-14.webp"
import slatkeKrepe15 from "@/public/images/menu/slatke-krepe/slatke-krepe-15.webp"
import slatkeKrepe16 from "@/public/images/menu/slatke-krepe/slatke-krepe-16.webp"
import slatkeKrepe17 from "@/public/images/menu/slatke-krepe/slatke-krepe-17.webp"
import slatkeKrepe18 from "@/public/images/menu/slatke-krepe/slatke-krepe-18.webp"
import slatkeKrepe19 from "@/public/images/menu/slatke-krepe/slatke-krepe-19.webp"
import slatkeKrepe2 from "@/public/images/menu/slatke-krepe/slatke-krepe-2.webp"
import slatkeKrepe20 from "@/public/images/menu/slatke-krepe/slatke-krepe-20.webp"
import slatkeKrepe21 from "@/public/images/menu/slatke-krepe/slatke-krepe-21.webp"
import slatkeKrepe22 from "@/public/images/menu/slatke-krepe/slatke-krepe-22.webp"
import slatkeKrepe23 from "@/public/images/menu/slatke-krepe/slatke-krepe-23.webp"
import slatkeKrepe24 from "@/public/images/menu/slatke-krepe/slatke-krepe-24.webp"
import slatkeKrepe25 from "@/public/images/menu/slatke-krepe/slatke-krepe-25.webp"
import slatkeKrepe26 from "@/public/images/menu/slatke-krepe/slatke-krepe-26.webp"
import slatkeKrepe27 from "@/public/images/menu/slatke-krepe/slatke-krepe-27.webp"
import slatkeKrepe28 from "@/public/images/menu/slatke-krepe/slatke-krepe-28.webp"
import slatkeKrepe3 from "@/public/images/menu/slatke-krepe/slatke-krepe-3.webp"
import slatkeKrepe4 from "@/public/images/menu/slatke-krepe/slatke-krepe-4.webp"
import slatkeKrepe5 from "@/public/images/menu/slatke-krepe/slatke-krepe-5.webp"
import slatkeKrepe6 from "@/public/images/menu/slatke-krepe/slatke-krepe-6.webp"
import slatkeKrepe7 from "@/public/images/menu/slatke-krepe/slatke-krepe-7.webp"
import slatkeKrepe8 from "@/public/images/menu/slatke-krepe/slatke-krepe-8.webp"
import slatkeKrepe9 from "@/public/images/menu/slatke-krepe/slatke-krepe-9.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const slatkeKrepeSections: MenuSection[] = [
  {
    id: "slatke-krepe",
    title: meEn("Slatke krepe", "Sweet crepes"),
    dishes: [
      {
        number: 1,
        name: meEn("Mliječna čokolada", "Milk chocolate"),
        price: 5,
        image: slatkeKrepe1,
        transparent: true,
      },
      {
        number: 2,
        name: meEn(
          "Mliječna čokolada, višnje, plazma",
          "Milk chocolate, cherries, plazma"
        ),
        price: 7.8,
        image: slatkeKrepe2,
        transparent: true,
      },
      {
        number: 3,
        name: meEn(
          "Bueno čokolada, krem vanila, maline",
          "Bueno chocolate, vanilla cream, raspberries"
        ),
        price: 8,
        image: slatkeKrepe3,
        transparent: true,
      },
      {
        number: 4,
        name: meEn(
          "Bueno čokolada, jagode, keks",
          "Bueno chocolate, strawberries, buiscuits"
        ),
        price: 8,
        image: slatkeKrepe4,
        transparent: true,
      },
      {
        number: 5,
        name: meEn(
          "Bijela čokolada, mliječna čokolada, oreo, banana, jagode",
          "White chocolate, milk chocolate, oreo, banana, strawberries"
        ),
        price: 9.4,
        image: slatkeKrepe5,
        transparent: true,
      },
      {
        number: 6,
        name: meEn(
          "Pistaći čokolada, krem limeta, sladoled pistaći",
          "Pistachio chocolate, lime cream, pistachio ice cream"
        ),
        price: 9.4,
        image: slatkeKrepe6,
        transparent: true,
      },
      {
        number: 7,
        name: meEn(
          "Bueno namaz, bueno čokolada, bueno sladoled, karamelizovani kikiriki, jagode",
          "Bueno cream, bueno chocolate, bueno ice cream, caramelized peanuts, strawberries"
        ),
        price: 10.6,
        image: slatkeKrepe7,
        transparent: true,
      },
      {
        number: 8,
        name: meEn(
          "Speculoos namaz, banana, speculoos keks, crna čokolada, mliječna čokolada",
          "Speculoos spread, banana, speculoos cookie, black chocolate, milk chocolate"
        ),
        price: 9.8,
        image: slatkeKrepe8,
        transparent: true,
      },
      {
        number: 9,
        name: meEn(
          "Fil od jabuke, krem sir, šećer u prahu, cimet, med, posni keks",
          "Apple purree, cream cheese, powdered sugar, cinamon, honey, digestive biscuit"
        ),
        price: 8.2,
        image: slatkeKrepe9,
        transparent: true,
      },
      {
        number: 10,
        name: meEn(
          "Mliječna čokolada, maline, plazma u mlijeku",
          "Milk chocolate, raspberries, Plazma with milk"
        ),
        price: 9.2,
        image: slatkeKrepe10,
        transparent: true,
      },
      {
        number: 11,
        name: meEn("Mille - Feuille", "Mille Feuille"),
        description: meEn(
          "Mille namaz, vanila krem, lisnato tijesto, malina, šećer u prahu",
          "Mille cream, vanilla cream, puff pastery, raspberries, powdered sugar"
        ),
        price: 11.2,
        image: slatkeKrepe11,
        transparent: true,
      },
      {
        number: 12,
        name: meEn(
          "Kokos, bijela čokolada, maline",
          "Coconut, white chocolate, raspberries"
        ),
        price: 8.2,
        image: slatkeKrepe12,
        transparent: true,
      },
      {
        number: 13,
        name: meEn(
          "Pistaći čokolada, maline",
          "Pistachio chocolate, raspberries"
        ),
        price: 9.2,
        image: slatkeKrepe13,
        transparent: true,
      },
      {
        number: 14,
        name: meEn("Dubai krepa", "Dupai crepe"),
        description: meEn(
          "Pistaći čokolada, mliječna čokolada, kadaif, pistaći",
          "Pistachio chocolate, milk chocolate, kadaif, pistachios"
        ),
        price: 11.8,
        image: slatkeKrepe14,
        transparent: true,
      },
      {
        number: 15,
        name: meEn(
          "Pistaći čokolada, bijela čokolada, plazma, višnje",
          "Pistachio chocolate, white chocolate, Plazma, cherries"
        ),
        price: 9.2,
        image: slatkeKrepe15,
        transparent: true,
      },
      {
        number: 16,
        name: meEn(
          "Malina namaz, banana, mliječna čokolada",
          "Raspberry cream, banana, milk chocolate"
        ),
        price: 9.2,
        image: slatkeKrepe16,
        transparent: true,
      },
      {
        number: 17,
        name: meEn(
          "Oreo u mlijeku, jagode, bueno čokolada",
          "Oreo in milk, strawberries, bueno chocolate"
        ),
        price: 8.2,
        image: slatkeKrepe17,
        transparent: true,
      },
      {
        number: 18,
        name: meEn("Čoko pasta", "Choco pasta"),
        description: meEn(
          "Mliječna čokolada, banana, čoko kuglice, višnje",
          "Milk chocolate, banana, choco balls, cherries"
        ),
        price: 9.4,
        image: slatkeKrepe18,
        transparent: true,
      },
      {
        number: 19,
        name: meEn("Crna čokolada, maline", "Dark chocolate, raspberries"),
        price: 9.2,
        image: slatkeKrepe19,
        transparent: true,
      },
      {
        number: 20,
        name: meEn("Krepa vrećica", "Pouch crepe"),
        description: meEn(
          "Bijela čokolada, mliječna čokolada, krem od vanile, krem od čokolade, čoko smoki, višnje",
          "White chocolate, milk chocolate, vanilla cream, chocolate cream, choco smoki, cherries"
        ),
        price: 10.2,
        image: slatkeKrepe20,
        transparent: true,
      },
      {
        number: 21,
        name: meEn("Dubai malina", "Dubai raspberry"),
        description: meEn(
          "Bijela čokolada, pistaći čokolada, kadaif, maline",
          "White chocolate, pistachio chocolate, kadaif, raspberries"
        ),
        price: 10.2,
        image: slatkeKrepe21,
        transparent: true,
      },
      {
        number: 22,
        name: meEn('Specijal "Hari\'s"', 'Special "Hari\'s"'),
        description: meEn(
          "Bueno namaz, krem vanila, banana, jagode,cookie keks, mliječna čokolada, bijela čokolada, čoko kuglice,karamelizovani kikiriki, štangla mliječne čokolade, vafel rolnice sa čokoladom",
          "Bueno chocolate, vanilla cream, banana, strawberries, cookie, milk chocolate, white chocolate, choco balls, caramelized peanut, piece of milk chocolate, chocolate stuffed cigarilo"
        ),
        price: 13.6,
        image: slatkeKrepe22,
        transparent: true,
      },
      {
        number: 23,
        name: meEn(
          "Krem od kokosa, maline, pistaći čokolada, bijela čokolada",
          "Coconut cream, raspberries, pistachio chocolate, white chocolate"
        ),
        price: 9.6,
        image: slatkeKrepe23,
        transparent: true,
      },
      {
        number: 24,
        name: meEn(
          "Crna čokolada, višnje, sladoled vanila",
          "Dark chocolate, cherries, vanilla ice cream"
        ),
        price: 9.2,
        image: slatkeKrepe24,
        transparent: true,
      },
      {
        number: 25,
        name: meEn("Coffee krepa", "Coffee crepe"),
        description: meEn(
          "Crna čokolada, Coffee krem, kakao, espresso, maline",
          "Black chocolate, Coffee cream, cocoa, espresso, raspberries"
        ),
        price: 9.2,
        image: slatkeKrepe25,
        transparent: true,
      },
      {
        number: 26,
        name: meEn(
          "Pistaći namaz, bijela čokolada, pistaći, pistaći sladoled",
          "Pistachio cream, white chocolate, pistachio, pistachio ice cream"
        ),
        price: 10.2,
        image: slatkeKrepe26,
        transparent: true,
      },
      {
        number: 27,
        name: meEn(
          "Bueno namaz, bueno čokolada, bijela čokolada, jagode",
          "Bueno cream, bueno chocolate, white chocolate, strawberries"
        ),
        price: 10.2,
        image: slatkeKrepe27,
        transparent: true,
      },
      {
        number: 28,
        name: meEn(
          "Malina namaz, jagode, pistaći, bijela čokolada, pistaći čokolada, kitkat",
          "Raspberry cream, strawberries, pistachios, white chocolate, pistachio chocolate, kitkat"
        ),
        price: 13.6,
        image: slatkeKrepe28,
        transparent: true,
      },
    ],
  },
]
