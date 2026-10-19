import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import slatkeVafle30 from "@/public/images/menu/slatke-vafle/slatke-vafle-30.webp"
import slatkeVafle31 from "@/public/images/menu/slatke-vafle/slatke-vafle-31.webp"
import slatkeVafle32 from "@/public/images/menu/slatke-vafle/slatke-vafle-32.webp"
import slatkeVafle33 from "@/public/images/menu/slatke-vafle/slatke-vafle-33.webp"
import slatkeVafle34 from "@/public/images/menu/slatke-vafle/slatke-vafle-34.webp"
import slatkeVafle35 from "@/public/images/menu/slatke-vafle/slatke-vafle-35.webp"
import slatkeVafle36 from "@/public/images/menu/slatke-vafle/slatke-vafle-36.webp"
import slatkeVafle37 from "@/public/images/menu/slatke-vafle/slatke-vafle-37.webp"
import slatkeVafle38 from "@/public/images/menu/slatke-vafle/slatke-vafle-38.webp"
import slatkeVafle39 from "@/public/images/menu/slatke-vafle/slatke-vafle-39.webp"
import slatkeVafle40 from "@/public/images/menu/slatke-vafle/slatke-vafle-40.webp"
import slatkeVafle41 from "@/public/images/menu/slatke-vafle/slatke-vafle-41.webp"
import slatkeVafle42 from "@/public/images/menu/slatke-vafle/slatke-vafle-42.webp"
import slatkeVafle43 from "@/public/images/menu/slatke-vafle/slatke-vafle-43.webp"
import slatkeVafle46 from "@/public/images/menu/slatke-vafle/slatke-vafle-46.webp"
import slatkeVafle47 from "@/public/images/menu/slatke-vafle/slatke-vafle-47.webp"
import slatkeVafle48 from "@/public/images/menu/slatke-vafle/slatke-vafle-48.webp"

// From the client's menu, main-menu-small.pdf, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.
export const slatkeVafleSections: MenuSection[] = [
  {
    id: "slatke-vafle",
    title: meEn("Slatke vafle", "Sweet waffles"),
    dishes: [
      {
        number: 30,
        name: meEn("Mliječna čokolada", "Milk chocolate"),
        price: 5.4,
        image: slatkeVafle30,
        transparent: true,
      },
      {
        number: 31,
        name: meEn(
          "Višnja, bueno čokolada, bueno sladoled",
          "Cherries, bueno chocolate bueno ice cream"
        ),
        price: 8.8,
        image: slatkeVafle31,
        transparent: true,
      },
      {
        number: 32,
        name: meEn(
          "Bijela čokolada, maline, cookies keks",
          "White chocolate, raspberries, cookies"
        ),
        price: 9.2,
        image: slatkeVafle32,
        transparent: true,
      },
      {
        number: 33,
        name: meEn(
          "Krem vanila, mliječna čokolada, jagode, orašasti plodovi",
          "Vanila cream, milk chocolate, strawberries, nuts"
        ),
        price: 9.8,
        image: slatkeVafle33,
        transparent: true,
      },
      {
        number: 34,
        name: meEn(
          "Mliječna čokolada, jagode, ferrero sladoled, oreo, smarties, čoko rolnice",
          "Milk chocolate, strawberries, ferrero ice cream, oreo smarties, choco rolls"
        ),
        price: 11.6,
        image: slatkeVafle34,
        transparent: true,
      },
      {
        number: 35,
        name: meEn(
          "Mliječna čokolada, jagode, vanila sladoled",
          "Milk chocolate, strawberries, vanilla ice cream"
        ),
        price: 9.4,
        image: slatkeVafle35,
        transparent: true,
      },
      {
        number: 36,
        name: meEn(
          "Svježe voće, vanila sladoled, mliječna čokolada",
          "Fresh fruits, vanilla ice cream, milk chocolate"
        ),
        price: 9.8,
        image: slatkeVafle36,
        transparent: true,
      },
      {
        number: 37,
        name: meEn(
          "Bijela čokolada, pistaći, maline, pistaći sladoled",
          "White chocolate, pistachios, raspberries, pistachio ice cream"
        ),
        price: 10.4,
        image: slatkeVafle37,
        transparent: true,
      },
      {
        number: 38,
        name: meEn(
          "Mliječna čokolada, malina namaz, maline, sladoled banana",
          "Milk chocolate, raspberry cream, raspberries, banana ice cream"
        ),
        price: 10.4,
        image: slatkeVafle38,
        transparent: true,
      },
      {
        number: 39,
        name: meEn(
          "Pistaći čokolada, bijela čokolada, oreo, jagode",
          "Pistachio chocolate, white chocolate, oreo, strawberries"
        ),
        price: 10.4,
        image: slatkeVafle39,
        transparent: true,
      },
      {
        number: 40,
        name: meEn("Tolos vafla", "Tolos waffle"),
        description: meEn(
          "Dva vafla, vanila sladoled, plazma, vanilla krem, banana, jagode, mliječna čokolada, bijela čokolada",
          "Two waffles, vanilla ice cream, Plazma, vanilla cream, banana, strawberries, milk chocolate, white chocolate"
        ),
        price: 17.4,
        image: slatkeVafle40,
        transparent: true,
      },
      {
        number: 41,
        name: meEn(
          "Bueno namaz, bueno čokolada, kinder jajc, jagode",
          "Bueno cream, bueno chocolate, kinder egg, strawberries"
        ),
        price: 12.8,
        image: slatkeVafle41,
        transparent: true,
      },
      {
        number: 42,
        name: meEn(
          "Bueno čokolada, plazma u mlijeku, banane",
          "Bueno chocolate, plazma in milk, bananas"
        ),
        price: 11.8,
        image: slatkeVafle42,
        transparent: true,
      },
      {
        number: 43,
        name: meEn(
          "Pistaći namaz, pistaći čokolada, maline",
          "Pistachio cream, pistachio chocolate, raspberries"
        ),
        price: 11.8,
        image: slatkeVafle43,
        transparent: true,
      },
      {
        number: 46,
        name: meEn(
          "Fil od jabuke, cimet, vanila sladoled",
          "Apple purre, cinnamon, vanilla ice cream"
        ),
        price: 9.2,
        image: slatkeVafle46,
        transparent: true,
      },
      {
        number: 47,
        name: meEn("Dubai vafla", "Dubai waffle"),
        description: meEn(
          "Pistaći čokolada, bijela čokolada, kadaif, pistaći, pistaći špageti sladoled",
          "Pistachio chocolate, white chocolate, kadaif, pistachios, pistachio spaghetti ice cream"
        ),
        price: 10.6,
        image: slatkeVafle47,
        transparent: true,
      },
      {
        number: 48,
        name: meEn(
          "Mliječna čokolada, plazma, plazma sladoled, maline",
          "Milk chocolate, Plazma, Plazma ice cream, raspberries"
        ),
        price: 10.8,
        image: slatkeVafle48,
        transparent: true,
      },
    ],
  },
]
