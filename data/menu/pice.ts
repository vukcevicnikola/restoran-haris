import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
import affogatoPistaci from "@/public/images/menu/pice/affogato-pistaci.webp"
import affogatoVanila from "@/public/images/menu/pice/affogato-vanila.webp"
import bijelaCokoladaMalinaPistaci from "@/public/images/menu/pice/bijela-cokolada-malina-pistaci.webp"
import bijelaCokolada from "@/public/images/menu/pice/bijela-cokolada.webp"
import bountySejk from "@/public/images/menu/pice/bounty-sejk.webp"
import buenoCokoladaKikiriki from "@/public/images/menu/pice/bueno-cokolada-kikiriki.webp"
import buenoCokoladaPlazma from "@/public/images/menu/pice/bueno-cokolada-plazma.webp"
import cokoKapucino from "@/public/images/menu/pice/coko-kapucino.webp"
import cokoladaHaris from "@/public/images/menu/pice/cokolada-haris.webp"
import frapucino from "@/public/images/menu/pice/frapucino.webp"
import kakaduVanila from "@/public/images/menu/pice/kakadu-vanila.webp"
import kapucinoPistaci from "@/public/images/menu/pice/kapucino-pistaci.webp"
import klasicnaToplaCokolada from "@/public/images/menu/pice/klasicna-topla-cokolada.webp"
import latteSaUkusima from "@/public/images/menu/pice/latte-sa-ukusima.webp"
import ledenaKafa from "@/public/images/menu/pice/ledena-kafa.webp"
import limunadaSaUkusom from "@/public/images/menu/pice/limunada-sa-ukusom.webp"
import milksejkKikirikiKeks from "@/public/images/menu/pice/milksejk-kikiriki-keks.webp"
import milksejkOreoBanana from "@/public/images/menu/pice/milksejk-oreo-banana.webp"
import milksejkPistaci from "@/public/images/menu/pice/milksejk-pistaci.webp"
import mlijecnaCokoladaBademMalina from "@/public/images/menu/pice/mlijecna-cokolada-badem-malina.webp"
import mlijecnaCokoladaJagode from "@/public/images/menu/pice/mlijecna-cokolada-jagode.webp"
import mokaLjesnik from "@/public/images/menu/pice/moka-ljesnik.webp"
import plazmaSejk from "@/public/images/menu/pice/plazma-sejk.webp"
import rumenko from "@/public/images/menu/pice/rumenko.webp"
import snickersSejk from "@/public/images/menu/pice/snickers-sejk.webp"

// From the client's menu, CG_Haris_slatka_karta_FINAL_10_2026.pdf
// (October 2026), via scripts/import-menu.ts; the photos are cut out of the
// same PDF. Texts and prices are exactly as printed. The section ids are
// the category ids in the JSON.
export const piceSections: MenuSection[] = [
  {
    id: "kafa",
    title: meEn("Kafa", "Coffee"),
    dishes: [
      {
        name: meEn("Frapućino", "Frappuccino"),
        price: 4.1,
        image: frapucino,
        transparent: true,
      },
      {
        name: meEn("Moka lješnik", "Mocha hazelnut"),
        price: 4,
        image: mokaLjesnik,
        transparent: true,
      },
      {
        name: meEn("Ledena kafa", "Ice coffee"),
        flavors: [
          ["Čokolada", "Chocolate"],
          ["Cookies", "Cookies"],
          ["Lješnik", "Hazelnut"],
          ["Karamela", "Caramel"],
          ["Vanila", "Vanilla"],
        ].map(([me, en]) => meEn(me, en)),
        price: 4,
        image: ledenaKafa,
        transparent: true,
      },
      {
        name: meEn("Latte sa ukusima", "Flavored latte"),
        flavors: [
          ["Čokolada", "Chocolate"],
          ["Cookies", "Cookies"],
          ["Lješnik", "Hazelnut"],
          ["Karamela", "Caramel"],
          ["Vanila", "Vanilla"],
        ].map(([me, en]) => meEn(me, en)),
        price: 3.4,
        image: latteSaUkusima,
        transparent: true,
      },
      {
        name: meEn("Kapućino pistaći", "Pistachio cappuccino"),
        price: 3.4,
        image: kapucinoPistaci,
        transparent: true,
      },
      {
        name: meEn("Čoko kapućino", "Choco cappuccino"),
        price: 3.4,
        image: cokoKapucino,
        transparent: true,
      },
      {
        name: meEn("Affogato vanila", "Vanilla affogato"),
        price: 4.1,
        image: affogatoVanila,
        transparent: true,
      },
      {
        name: meEn("Affogato pistaći", "Pistachio affogato"),
        price: 4.4,
        image: affogatoPistaci,
        transparent: true,
      },
    ],
  },
  {
    id: "sejk",
    title: meEn("Šejk", "Shake"),
    dishes: [
      {
        name: meEn("Plazma šejk", "Plazma shake"),
        price: 4.1,
        image: plazmaSejk,
        transparent: true,
      },
      {
        name: meEn("Bounty šejk", "Bounty shake"),
        price: 4.1,
        image: bountySejk,
        transparent: true,
      },
      {
        name: meEn("Snickers šejk", "Snickers shake"),
        price: 4.1,
        image: snickersSejk,
        transparent: true,
      },
    ],
  },
  {
    id: "milksejk",
    title: meEn("Milkšejk", "Milkshake"),
    dishes: [
      {
        name: meEn("Oreo banana", "Oreo banana"),
        description: meEn(
          "Sladoled od banane, oreo, wellness keks",
          "Banana ice cream, oreo, wellness cookie"
        ),
        price: 4.6,
        image: milksejkOreoBanana,
        transparent: true,
      },
      {
        name: meEn("Kikiriki keks", "Cookie peanut"),
        description: meEn(
          "Sladoled cookies, kikiriki puter, bueno čokolada",
          "Cookies ice cream, peanut butter, bueno chocolate"
        ),
        price: 4.6,
        image: milksejkKikirikiKeks,
        transparent: true,
      },
      {
        name: meEn("Čoko jagoda", "Choco strawberry"),
        description: meEn(
          "Sladoled od jagode, mliječna čokolada",
          "Strawberry ice cream, milk chocolate"
        ),
        price: 4.6,
      },
      {
        name: meEn("Pistaći", "Pistachio"),
        price: 4.3,
        image: milksejkPistaci,
        transparent: true,
      },
      {
        name: meEn("Vanila", "Vanilla"),
        price: 3.6,
      },
      {
        name: meEn("Jagoda", "Strawberry"),
        price: 3.6,
      },
      {
        name: meEn("Banana", "Banana"),
        price: 3.6,
      },
      {
        name: meEn("Ferrero", "Ferrero"),
        price: 3.6,
      },
      {
        name: meEn("Bueno", "Bueno"),
        price: 3.6,
      },
      {
        name: meEn("Karamela", "Caramel"),
        price: 3.6,
      },
    ],
  },
  {
    id: "limunada",
    title: meEn("Limunada", "Lemonade"),
    dishes: [
      {
        name: meEn("Limunada sa ukusom", "Flavored lemonade"),
        flavors: [
          ["Jagoda", "Strawberry"],
          ["Tropic", "Tropic"],
          ["Nana", "Mint"],
          ["Malina", "Raspberry"],
          ["Nar", "Pomegranate"],
          ["Lubenica", "Watermelon"],
          ["Zelena jabuka", "Green Apple"],
        ].map(([me, en]) => meEn(me, en)),
        price: 2.8,
        image: limunadaSaUkusom,
        transparent: true,
      },
      {
        name: meEn("Rumenko", "Rumenko"),
        price: 3.6,
        image: rumenko,
        transparent: true,
      },
      {
        name: meEn("Kakadu vanila", "Kakadu vanilla"),
        description: meEn(
          "Cijeđena pomorandža, vanila sladoled",
          "Orange juice, vanilla ice cream"
        ),
        price: 4.6,
        image: kakaduVanila,
        transparent: true,
      },
    ],
  },
  {
    id: "topla-cokolada",
    title: meEn("Topla čokolada", "Hot chocolate"),
    dishes: [
      {
        name: meEn("Klasična topla čokolada", "Classic hot chocolate"),
        price: 3.4,
        image: klasicnaToplaCokolada,
        transparent: true,
      },
      {
        name: meEn("Bijela čokolada", "White chocolate"),
        price: 3.4,
        image: bijelaCokolada,
        transparent: true,
      },
      {
        name: meEn(
          "Bueno čokolada sa kikiriki puterom",
          "Bueno chocolate with peanut butter"
        ),
        price: 3.8,
        image: buenoCokoladaKikiriki,
        transparent: true,
      },
      {
        name: meEn(
          "Mliječna čokolada sa jagodama",
          "Milk chocolate with strawberries"
        ),
        price: 4.4,
        image: mlijecnaCokoladaJagode,
        transparent: true,
      },
      {
        name: meEn(
          "Čokolada “Hari's” sa oreom i sladoledom od vanile",
          "Special “Hari's” chocolate with oreo and vanilla ice cream"
        ),
        price: 4.3,
        image: cokoladaHaris,
        transparent: true,
      },
      {
        name: meEn(
          "Bueno čokolada sa plazmom",
          "Bueno chocolate with plazma biscuit"
        ),
        price: 4.2,
        image: buenoCokoladaPlazma,
        transparent: true,
      },
      {
        name: meEn(
          "Mliječna čokolada sa bademom i malinama",
          "Milk chocolate with almonds and raspberries"
        ),
        price: 4.6,
        image: mlijecnaCokoladaBademMalina,
        transparent: true,
      },
      {
        name: meEn(
          "Bijela čokolada sa malinama i pistaćima",
          "White chocolate with raspberries and pistachios"
        ),
        price: 4.6,
        image: bijelaCokoladaMalinaPistaci,
        transparent: true,
      },
    ],
  },
]
