import "server-only"
import { budiSamSvojSefSections } from "@/data/menu/budi-sam-svoj-sef"
import { burgeriSections } from "@/data/menu/burgeri"
import { dezertiSections } from "@/data/menu/dezerti"
import { dorucakSections } from "@/data/menu/dorucak"
import { nasiProizvodiSections } from "@/data/menu/nasi-proizvodi"
import { penkejkSections } from "@/data/menu/penkejk"
import { piceSections } from "@/data/menu/pice"
import { picaSections } from "@/data/menu/pica"
import { posniMeniSections } from "@/data/menu/posni-meni"
import { potaziSections } from "@/data/menu/potazi"
import { salateSections } from "@/data/menu/salate"
import { slaneKrepeSections } from "@/data/menu/slane-krepe"
import { sladolediSections } from "@/data/menu/sladoledi"
import { slatkeKrepeSections } from "@/data/menu/slatke-krepe"
import { slatkeVafleSections } from "@/data/menu/slatke-vafle"
import type { MenuCategory } from "@/data/menu/types"
import burgeri from "@/public/images/menu/burgeri/burgeri-burger-1.webp"
import vocniKup from "@/public/images/menu/dezerti/vocni-kup.webp"
import dorucak from "@/public/images/menu/dorucak/dorucak-crnogorski-dorucak.webp"
import nasiProizvodi from "@/public/images/menu/nasi-proizvodi/nasi-proizvodi-hari-s-krem.webp"
import penkejk from "@/public/images/menu/penkejk/penkejk-64.webp"
import pica from "@/public/images/menu/pica/pica-8.webp"
import sojaSalata from "@/public/images/menu/posni-meni/soja-salata.webp"
import potazi from "@/public/images/menu/potazi/potazi-potaz-sargarepa.webp"
import salate from "@/public/images/menu/salate/salate-1.webp"
import slaneKrepe from "@/public/images/menu/slane-krepe/slane-krepe-82.webp"
import slatkeKrepe22 from "@/public/images/menu/slatke-krepe/slatke-krepe-22.webp"
import slatkeKrepe27 from "@/public/images/menu/slatke-krepe/slatke-krepe-27.webp"
import slatkeVafle from "@/public/images/menu/slatke-vafle/slatke-vafle-32.webp"

export type { Dish, MenuCategory, MenuSection } from "@/data/menu/types"

// The categories as on the client's printed menus, in their order: the main
// menu (main-menu-small.pdf), then the sweets menu (Slatka karta) and the
// Posni meni, which are menus of their own (client, 2026-10-19).
// TODO EN/IT/RU/TR are copies of the Montenegrin texts until the
// translations are done (CLAUDE.me, "Content workflow").
// TODO the descriptions are proposals: the owner confirms or rewrites them.
// The photos are the client's, cut out of the printed menus; Budi sam svoj
// šef has none of its own and borrows a sweet crepe.
export const categories: MenuCategory[] = [
  {
    slug: "dorucak",
    highlights: [
      "Avokado & losos",
      "Crnogorski doručak",
      "Šakšuka",
      "Klasični brunch",
    ],
    title: {
      me: "Doručak",
      en: "Breakfast",
      it: "Colazione",
      ru: "Завтраки",
      tr: "Kahvaltı",
    },
    description: {
      me: "Za dobar početak dana",
      en: "For a good start to the day",
      it: "Per iniziare bene la giornata",
      ru: "Для хорошего начала дня",
      tr: "Güne güzel bir başlangıç için",
    },
    image: dorucak,
    transparent: true,
    sections: dorucakSections,
  },
  {
    slug: "potazi",
    highlights: ["Potaž šargarepa", "Potaž karfiol"],
    title: {
      me: "Potaži",
      en: "Cream soups",
      it: "Vellutate",
      ru: "Крем-супы",
      tr: "Kremalı çorbalar",
    },
    description: {
      me: "Toplo i kremasto",
      en: "Warm and creamy",
      it: "Calde e cremose",
      ru: "Тёплые и нежные",
      tr: "Sıcak ve kremalı",
    },
    image: potazi,
    transparent: true,
    sections: potaziSections,
  },
  {
    slug: "burgeri",
    title: {
      me: "Burgeri",
      en: "Burgers",
      it: "Burger",
      ru: "Бургеры",
      tr: "Burgerler",
    },
    description: {
      me: "Za pravu glad",
      en: "For a real appetite",
      it: "Per una vera fame",
      ru: "Для настоящего аппетита",
      tr: "Gerçekten acıkanlar için",
    },
    image: burgeri,
    transparent: true,
    sections: burgeriSections,
  },
  {
    slug: "pica",
    highlights: [
      "Margarita",
      "Prosciutto & Burrata",
      "Montenegro pica",
      "Giardino",
    ],
    title: { me: "Pica", en: "Pizza", it: "Pizza", ru: "Пицца", tr: "Pizza" },
    description: {
      me: "Za ljubitelje pice",
      en: "For pizza lovers",
      it: "Per gli amanti della pizza",
      ru: "Для любителей пиццы",
      tr: "Pizza severler için",
    },
    image: pica,
    transparent: true,
    sections: picaSections,
  },
  {
    slug: "salate",
    highlights: ["Grčka salata", "Cezar salata", "Burrata i paradajz"],
    title: {
      me: "Salate",
      en: "Salads",
      it: "Insalate",
      ru: "Салаты",
      tr: "Salatalar",
    },
    description: {
      me: "Lagano i osvježavajuće",
      en: "Light and refreshing",
      it: "Leggere e fresche",
      ru: "Легко и свежо",
      tr: "Hafif ve ferahlatıcı",
    },
    image: salate,
    transparent: true,
    sections: salateSections,
  },
  {
    slug: "slatke-krepe",
    highlights: [
      "Dubai krepa",
      "Coffee krepa",
      "Mille - Feuille",
      "Krepa vrećica",
    ],
    title: {
      me: "Slatke krepe",
      en: "Sweet crepes",
      it: "Crêpes dolci",
      ru: "Сладкие крепы",
      tr: "Tatlı krepler",
    },
    description: {
      me: "Naš slatki specijalitet",
      en: "Our sweet speciality",
      it: "La nostra specialità dolce",
      ru: "Наше сладкое фирменное блюдо",
      tr: "Tatlı spesiyalimiz",
    },
    image: slatkeKrepe27,
    transparent: true,
    sections: slatkeKrepeSections,
  },
  {
    slug: "penkejk",
    highlights: ['"Hari\'s" Specijal penkejk'],
    title: {
      me: "Penkejk",
      en: "Pancakes",
      it: "Pancake",
      ru: "Панкейки",
      tr: "Pankekler",
    },
    description: {
      me: "Mekano, slatko, neodoljivo",
      en: "Soft, sweet, irresistible",
      it: "Morbidi, dolci, irresistibili",
      ru: "Мягко, сладко, неотразимо",
      tr: "Yumuşak, tatlı, karşı konulmaz",
    },
    image: penkejk,
    transparent: true,
    sections: penkejkSections,
  },
  {
    slug: "slatke-vafle",
    highlights: ["Dubai vafla", "Tolos vafla"],
    title: {
      me: "Slatke vafle",
      en: "Sweet waffles",
      it: "Waffle dolci",
      ru: "Сладкие вафли",
      tr: "Tatlı waffle'lar",
    },
    description: {
      me: "Hrskave i slatke",
      en: "Crispy and sweet",
      it: "Croccanti e dolci",
      ru: "Хрустящие и сладкие",
      tr: "Çıtır ve tatlı",
    },
    image: slatkeVafle,
    transparent: true,
    sections: slatkeVafleSections,
  },
  {
    slug: "slane-krepe",
    highlights: [
      "Grande Italiano",
      "Italijanska krepa",
      "Grčka salata krepa",
      "Američka krepa",
    ],
    title: {
      me: "Slane krepe",
      en: "Savoury crepes",
      it: "Crêpes salate",
      ru: "Сытные крепы",
      tr: "Tuzlu krepler",
    },
    description: {
      me: "Za pravi slani zalogaj",
      en: "For a proper savoury bite",
      it: "Per chi ama il salato",
      ru: "Для любителей сытного",
      tr: "Tuzlu sevenler için",
    },
    image: slaneKrepe,
    transparent: true,
    sections: slaneKrepeSections,
  },
  {
    slug: "budi-sam-svoj-sef",
    title: {
      me: "Budi sam svoj šef",
      en: "Be your own chef",
      it: "Lo chef siete voi",
      ru: "Будь сам себе шеф",
      tr: "Kendi şefin ol",
    },
    description: {
      me: "Izaberite sastojke po svom ukusu",
      en: "Choose the ingredients you like",
      it: "Scegliete gli ingredienti che preferite",
      ru: "Выберите ингредиенты по своему вкусу",
      tr: "Malzemeleri zevkinize göre seçin",
    },
    image: slatkeKrepe22,
    transparent: true,
    sections: budiSamSvojSefSections,
  },
  {
    slug: "nasi-proizvodi",
    highlights: ["Hari's krem", "Pistachio krem", "Buenita krem"],
    title: {
      me: "Naši proizvodi",
      en: "Our products",
      it: "I nostri prodotti",
      ru: "Наша продукция",
      tr: "Ürünlerimiz",
    },
    description: {
      me: "Naši kremovi i voćni sokovi",
      en: "Our creams and fruit juices",
      it: "Le nostre creme e i succhi di frutta",
      ru: "Наши кремы и фруктовые соки",
      tr: "Kremalarımız ve meyve sularımız",
    },
    image: nasiProizvodi,
    transparent: true,
    sections: nasiProizvodiSections,
  },
  {
    slug: "slatka-karta",
    highlights: [
      "Frapućino",
      "Dubai malina kup",
      "Plazma šejk",
      "Klasična topla čokolada",
    ],
    title: {
      me: "Slatka karta",
      en: "Sweet menu",
      it: "Carta dei dolci",
      ru: "Сладкое меню",
      tr: "Tatlı menüsü",
    },
    description: {
      me: "Za sve koji vole slatko",
      en: "For everyone with a sweet tooth",
      it: "Per chi ama i dolci",
      ru: "Для всех сладкоежек",
      tr: "Tatlıyı sevenler için",
    },
    image: vocniKup,
    transparent: true,
    // One menu, imported into three files when these were three cards
    sections: [...piceSections, ...dezertiSections, ...sladolediSections],
  },
  {
    slug: "posni-meni",
    title: {
      me: "Posni meni",
      en: "Lenten menu",
      it: "Menu di magro",
      ru: "Постное меню",
      tr: "Perhiz menüsü",
    },
    description: {
      me: "Ukusna jela za dane posta",
      en: "Tasty dishes for fasting days",
      it: "Piatti gustosi per i giorni di digiuno",
      ru: "Вкусные блюда для постных дней",
      tr: "Perhiz günleri için lezzetli yemekler",
    },
    // Cut out with its background, so cropped round
    image: sojaSalata,
    sections: posniMeniSections,
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}
