import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import pizzaPosna1 from "@/public/images/menu/posni-meni/pizza-posna-1.webp"
import pizzaPosna2 from "@/public/images/menu/posni-meni/pizza-posna-2.webp"
import posniPenkejk1 from "@/public/images/menu/posni-meni/posni-penkejk-1.webp"
import posniPenkejk2 from "@/public/images/menu/posni-meni/posni-penkejk-2.webp"
import posniPenkejk3 from "@/public/images/menu/posni-meni/posni-penkejk-3.webp"
import posniPenkejk4 from "@/public/images/menu/posni-meni/posni-penkejk-4.webp"
import posniPenkejk5 from "@/public/images/menu/posni-meni/posni-penkejk-5.webp"
import sendvic1 from "@/public/images/menu/posni-meni/sendvic-1.webp"
import sendvic2 from "@/public/images/menu/posni-meni/sendvic-2.webp"
import sendvic3 from "@/public/images/menu/posni-meni/sendvic-3.webp"
import slanaPosnaKrepa1 from "@/public/images/menu/posni-meni/slana-posna-krepa-1.webp"
import slanaPosnaKrepa2 from "@/public/images/menu/posni-meni/slana-posna-krepa-2.webp"
import slanaPosnaKrepa3 from "@/public/images/menu/posni-meni/slana-posna-krepa-3.webp"
import slanaPosnaKrepa4 from "@/public/images/menu/posni-meni/slana-posna-krepa-4.webp"
import slanaPosnaZapecenaKrepa5 from "@/public/images/menu/posni-meni/slana-posna-zapecena-krepa-5.webp"
import slatkaPosnaKrepa1 from "@/public/images/menu/posni-meni/slatka-posna-krepa-1.webp"
import slatkaPosnaKrepa2 from "@/public/images/menu/posni-meni/slatka-posna-krepa-2.webp"
import slatkaPosnaKrepa3 from "@/public/images/menu/posni-meni/slatka-posna-krepa-3.webp"
import slatkaPosnaKrepa4 from "@/public/images/menu/posni-meni/slatka-posna-krepa-4.webp"
import slatkaPosnaKrepa5 from "@/public/images/menu/posni-meni/slatka-posna-krepa-5.webp"
import slatkaPosnaKrepa6 from "@/public/images/menu/posni-meni/slatka-posna-krepa-6.webp"
import slatkaPosnaKrepa7 from "@/public/images/menu/posni-meni/slatka-posna-krepa-7.webp"
import slatkaPosnaKrepa8 from "@/public/images/menu/posni-meni/slatka-posna-krepa-8.webp"
import slatkaPosnaKrepa9 from "@/public/images/menu/posni-meni/slatka-posna-krepa-9.webp"
import sojaSalata from "@/public/images/menu/posni-meni/soja-salata.webp"
import tunaSalata from "@/public/images/menu/posni-meni/tuna-salata.webp"

// Posni meni, from the client's menu, CG_Haris_posni_meni_FINAL_10_2026_.pdf
// (October 2026); the photos are cut out of the same PDF. The PDF is
// Montenegrin only: the English is ours (2026-11-03).
export const posniMeniSections: MenuSection[] = [
  {
    id: "slane-posne-krepe",
    title: meEn("Slane posne krepe", "Savoury Lenten crepes"),
    dishes: [
      {
        name: meEn("Slana posna krepa 1", "Savoury Lenten crepe 1"),
        description: meEn(
          "Biljni sir, tunjevina, krastavac, čeri paradajz, crveni luk",
          "Vegan cheese, tuna, cucumber, cherry tomatoes, red onion"
        ),
        price: 9.2,
        image: slanaPosnaKrepa1,
      },
      {
        name: meEn("Slana posna krepa 2", "Savoury Lenten crepe 2"),
        description: meEn(
          "Biljni sir, pečurke, kukuruz, paprika, paradajz, masline, rukola",
          "Vegan cheese, mushrooms, corn, peppers, tomato, olives, rocket"
        ),
        price: 7.4,
        image: slanaPosnaKrepa2,
      },
      {
        name: meEn("Slana posna krepa 3", "Savoury Lenten crepe 3"),
        description: meEn(
          "Biljni sir, losos, krastavac, paradajz",
          "Vegan cheese, salmon, cucumber, tomato"
        ),
        price: 9.2,
        image: slanaPosnaKrepa3,
      },
      {
        name: meEn("Slana posna krepa 4", "Savoury Lenten crepe 4"),
        description: meEn(
          "Biljni sir, posni majonez, kukuruz, avokado sos, soja, limun",
          "Vegan cheese, vegan mayonnaise, corn, avocado sauce, soy, lemon"
        ),
        price: 8.8,
        image: slanaPosnaKrepa4,
      },
      {
        name: meEn(
          "Slana posna zapečena krepa 5",
          "Baked savoury Lenten crepe 5"
        ),
        description: meEn(
          "Biljni sir, soja, masline, koktel sos, kisjeli krastavac",
          "Vegan cheese, soy, olives, cocktail sauce, pickles"
        ),
        price: 8.8,
        image: slanaPosnaZapecenaKrepa5,
      },
    ],
  },
  {
    id: "posni-sendvici",
    title: meEn("Posni sendviči", "Lenten sandwiches"),
    dishes: [
      {
        name: meEn("Sendvič 1", "Sandwich 1"),
        description: meEn(
          "Biljni sir, avokado sos, masline, pasulj, pomfrit",
          "Vegan cheese, avocado sauce, olives, beans, fries"
        ),
        price: 6,
        image: sendvic1,
      },
      {
        name: meEn("Sendvič 2", "Sandwich 2"),
        description: meEn(
          "Biljni sir, tunjevina, posni majonez, kisjeli krastavac, crveni luk",
          "Vegan cheese, tuna, vegan mayonnaise, pickles, red onion"
        ),
        price: 7.8,
        image: sendvic2,
      },
      {
        name: meEn("Sendvič 3", "Sandwich 3"),
        description: meEn(
          "Biljni sir, pelat, pečurke, soja",
          "Vegan cheese, peeled tomatoes, mushrooms, soy"
        ),
        price: 5.7,
        image: sendvic3,
      },
    ],
  },
  {
    id: "posne-salate",
    title: meEn("Posne salate", "Lenten salads"),
    dishes: [
      {
        name: meEn("Tuna salata", "Tuna salad"),
        description: meEn(
          "Mix salate, tunjevina, posni majonez, kisjeli krastavac, crveni luk, paradajz, kukuruz",
          "Mixed salad leaves, tuna, vegan mayonnaise, pickles, red onion, tomato, corn"
        ),
        price: 9.2,
        image: tunaSalata,
      },
      {
        name: meEn("Soja salata", "Soy salad"),
        description: meEn(
          "Iceberg salata, soja, kisjeli krastavac, posni majonez, čeri paradajz",
          "Iceberg lettuce, soy, pickles, vegan mayonnaise, cherry tomatoes"
        ),
        price: 7.4,
        image: sojaSalata,
      },
    ],
  },
  {
    id: "posne-pice",
    title: meEn("Posne pice", "Lenten pizzas"),
    dishes: [
      {
        name: meEn("Pizza posna 1", "Lenten pizza 1"),
        description: meEn(
          "Pelat, biljni sir, tunjevina, kisjeli krastavac, kukuruz, čeri",
          "Peeled tomatoes, vegan cheese, tuna, pickles, corn, cherry tomatoes"
        ),
        price: 9.4,
        image: pizzaPosna1,
      },
      {
        name: meEn("Pizza posna 2", "Lenten pizza 2"),
        description: meEn(
          "Pelat, biljni sir, soja, koktel sos, kisjeli krastavac, čeri",
          "Peeled tomatoes, vegan cheese, soy, cocktail sauce, pickles, cherry tomatoes"
        ),
        price: 8.8,
        image: pizzaPosna2,
      },
    ],
  },
  {
    id: "slatke-posne-krepe",
    title: meEn("Slatke posne krepe", "Sweet Lenten crepes"),
    dishes: [
      {
        name: meEn("Slatka posna krepa 1", "Sweet Lenten crepe 1"),
        description: meEn(
          "Maline, kokos, crna čokolada bez šećera",
          "Raspberries, coconut, sugar-free dark chocolate"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa1,
      },
      {
        name: meEn("Slatka posna krepa 2", "Sweet Lenten crepe 2"),
        description: meEn(
          "Crna čokolada bez šećera, wellness keks, džem kajsija",
          "Sugar-free dark chocolate, Wellness biscuits, apricot jam"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa2,
      },
      {
        name: meEn("Slatka posna krepa 3", "Sweet Lenten crepe 3"),
        description: meEn(
          "Višnja, posna plazma, crna čokolada bez šećera",
          "Sour cherries, vegan Plazma biscuits, sugar-free dark chocolate"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa3,
      },
      {
        name: meEn("Slatka posna krepa 4", "Sweet Lenten crepe 4"),
        description: meEn(
          "Crna čokolada bez šećera, džem pomorandža, posna plazma",
          "Sugar-free dark chocolate, orange marmalade, vegan Plazma biscuits"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa4,
      },
      {
        name: meEn("Slatka posna krepa 5", "Sweet Lenten crepe 5"),
        description: meEn("Pekmez, šećer u prahu", "Fruit butter, icing sugar"),
        price: 4.8,
        image: slatkaPosnaKrepa5,
      },
      {
        name: meEn("Slatka posna krepa 6", "Sweet Lenten crepe 6"),
        description: meEn("Džem kajsija, nar", "Apricot jam, pomegranate"),
        price: 7.4,
        image: slatkaPosnaKrepa6,
      },
      {
        name: meEn("Slatka posna krepa 7", "Sweet Lenten crepe 7"),
        description: meEn(
          "Slatko šumske jagode, mix orašasto",
          "Wild strawberry preserve, mixed nuts"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa7,
      },
      {
        name: meEn("Slatka posna krepa 8", "Sweet Lenten crepe 8"),
        description: meEn(
          "Kikiriki puter, banana, crna čokolada bez šećera",
          "Peanut butter, banana, sugar-free dark chocolate"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa8,
      },
      {
        name: meEn("Slatka posna krepa 9", "Sweet Lenten crepe 9"),
        description: meEn(
          "Keks, jagode, crna čokolada bez šećera",
          "Biscuits, strawberries, sugar-free dark chocolate"
        ),
        price: 7.4,
        image: slatkaPosnaKrepa9,
      },
    ],
  },
  {
    id: "posni-penkejk",
    title: meEn("Posni penkejk", "Lenten pancakes"),
    dishes: [
      {
        name: meEn("Posni penkejk 1", "Lenten pancake 1"),
        description: meEn(
          "Džem od drenjine, šećer u prahu",
          "Cornelian cherry jam, icing sugar"
        ),
        price: 7.1,
        image: posniPenkejk1,
      },
      {
        name: meEn("Posni penkejk 2", "Lenten pancake 2"),
        description: meEn(
          "Jabuka fil, cimet, orah",
          "Apple filling, cinnamon, walnuts"
        ),
        price: 7.1,
        image: posniPenkejk2,
      },
      {
        name: meEn("Posni penkejk 3", "Lenten pancake 3"),
        description: meEn(
          "Džem od šipka, banana, pistaći",
          "Rosehip jam, banana, pistachios"
        ),
        price: 7.4,
        image: posniPenkejk3,
      },
      {
        name: meEn("Posni penkejk 4", "Lenten pancake 4"),
        description: meEn(
          "Javorov sirup, maline, badem",
          "Maple syrup, raspberries, almonds"
        ),
        price: 7.6,
        image: posniPenkejk4,
      },
      {
        name: meEn("Posni penkejk 5", "Lenten pancake 5"),
        description: meEn(
          "Wellness keks, crna čokolada bez šećera, nar",
          "Wellness biscuits, sugar-free dark chocolate, pomegranate"
        ),
        price: 7.4,
        image: posniPenkejk5,
      },
    ],
  },
]
