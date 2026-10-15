import type { StaticImageData } from "next/image"
import type { Locale } from "next-intl"
import { site } from "@/data/site"
import dezerti from "@/public/images/menu/dezerti.jpg"
import dorucak from "@/public/images/menu/dorucak.jpg"
import harisKolaci from "@/public/images/menu/haris-kolaci.jpg"
import pice from "@/public/images/menu/pice.jpg"
import posniMeni from "@/public/images/menu/posni-meni.jpg"
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
import rucak from "@/public/images/menu/rucak.jpg"
import sladoledi from "@/public/images/menu/sladoledi.jpg"
import vecera from "@/public/images/menu/vecera.jpg"
import vocneTorte from "@/public/images/menu/vocne-torte.jpg"

type L = Record<Locale, string>

// The Montenegrin text in every language. Dishes use it until the
// translations are done: search for it to find what is left to translate.
function untranslated(me: string): L {
  return { me, en: me, it: me, ru: me, tr: me }
}

export type Dish = {
  name: L
  // The ingredients, as on the printed menu
  description: L
  // EUR
  price: number
  // The plate as cut out of the printed menu: 900px wide, any height
  image: StaticImageData
}

// A group of dishes inside a category, like "Posni sendviči" in Posni meni
export type MenuSection = {
  // id of the section's heading, unique on the page
  id: string
  title: L
  dishes: Dish[]
}

export type MenuCategory = {
  // URL segment, the same in every language: /meni/dorucak, /en/menu/dorucak
  slug: string
  title: L
  // One line under the name on the /meni card
  description: L
  // Round crop of a dish on a plate, seen from above
  image: StaticImageData
  // Missing until the client sends the category's dishes
  sections?: MenuSection[]
}

// TODO EN/IT/RU/TR are copies of the Montenegrin texts until the
// translations are done (CLAUDE.me, "Content workflow").
// TODO the descriptions are proposals: the owner confirms or rewrites them.
// They name no dishes, because they were written before the menu was known.
// TODO the photos are Unsplash placeholders (CLAUDE.me, "Menu page"):
// replace them with photos of the client's dishes before launch.
export const categories: MenuCategory[] = [
  {
    slug: "dorucak",
    title: {
      me: "Doručak",
      en: "Doručak",
      it: "Doručak",
      ru: "Doručak",
      tr: "Doručak",
    },
    description: {
      me: "Za dobar početak dana",
      en: "Za dobar početak dana",
      it: "Za dobar početak dana",
      ru: "Za dobar početak dana",
      tr: "Za dobar početak dana",
    },
    image: dorucak,
  },
  {
    slug: "rucak",
    title: { me: "Ručak", en: "Ručak", it: "Ručak", ru: "Ručak", tr: "Ručak" },
    description: {
      me: "Pravi predah usred dana",
      en: "Pravi predah usred dana",
      it: "Pravi predah usred dana",
      ru: "Pravi predah usred dana",
      tr: "Pravi predah usred dana",
    },
    image: rucak,
  },
  {
    slug: "vecera",
    title: {
      me: "Večera",
      en: "Večera",
      it: "Večera",
      ru: "Večera",
      tr: "Večera",
    },
    description: {
      me: "Za opuštene večeri",
      en: "Za opuštene večeri",
      it: "Za opuštene večeri",
      ru: "Za opuštene večeri",
      tr: "Za opuštene večeri",
    },
    image: vecera,
  },
  {
    slug: "dezerti",
    title: {
      me: "Dezerti",
      en: "Dezerti",
      it: "Dezerti",
      ru: "Dezerti",
      tr: "Dezerti",
    },
    description: {
      me: "Za sve koji vole slatko",
      en: "Za sve koji vole slatko",
      it: "Za sve koji vole slatko",
      ru: "Za sve koji vole slatko",
      tr: "Za sve koji vole slatko",
    },
    image: dezerti,
  },
  {
    slug: "posni-meni",
    title: {
      me: "Posni meni",
      en: "Posni meni",
      it: "Posni meni",
      ru: "Posni meni",
      tr: "Posni meni",
    },
    description: {
      me: "Ukusna jela za dane posta",
      en: "Ukusna jela za dane posta",
      it: "Ukusna jela za dane posta",
      ru: "Ukusna jela za dane posta",
      tr: "Ukusna jela za dane posta",
    },
    image: posniMeni,
    // From the client's menu, CG_Haris_posni_meni_FINAL_10_2026_.pdf
    // (October 2026); the photos are cut out of the same PDF.
    sections: [
      {
        id: "slane-posne-krepe",
        title: untranslated("Slane posne krepe"),
        dishes: [
          {
            name: untranslated("Slana posna krepa 1"),
            description: untranslated(
              "Biljni sir, tunjevina, krastavac, čeri paradajz, crveni luk"
            ),
            price: 9.2,
            image: slanaPosnaKrepa1,
          },
          {
            name: untranslated("Slana posna krepa 2"),
            description: untranslated(
              "Biljni sir, pečurke, kukuruz, paprika, paradajz, masline, rukola"
            ),
            price: 7.4,
            image: slanaPosnaKrepa2,
          },
          {
            name: untranslated("Slana posna krepa 3"),
            description: untranslated("Biljni sir, losos, krastavac, paradajz"),
            price: 9.2,
            image: slanaPosnaKrepa3,
          },
          {
            name: untranslated("Slana posna krepa 4"),
            description: untranslated(
              "Biljni sir, posni majonez, kukuruz, avokado sos, soja, limun"
            ),
            price: 8.8,
            image: slanaPosnaKrepa4,
          },
          {
            name: untranslated("Slana posna zapečena krepa 5"),
            description: untranslated(
              "Biljni sir, soja, masline, koktel sos, kisjeli krastavac"
            ),
            price: 8.8,
            image: slanaPosnaZapecenaKrepa5,
          },
        ],
      },
      {
        id: "posni-sendvici",
        title: untranslated("Posni sendviči"),
        dishes: [
          {
            name: untranslated("Sendvič 1"),
            description: untranslated(
              "Biljni sir, avokado sos, masline, pasulj, pomfrit"
            ),
            price: 6,
            image: sendvic1,
          },
          {
            name: untranslated("Sendvič 2"),
            description: untranslated(
              "Biljni sir, tunjevina, posni majonez, kisjeli krastavac, crveni luk"
            ),
            price: 7.8,
            image: sendvic2,
          },
          {
            name: untranslated("Sendvič 3"),
            description: untranslated("Biljni sir, pelat, pečurke, soja"),
            price: 5.7,
            image: sendvic3,
          },
        ],
      },
      {
        id: "posne-salate",
        title: untranslated("Posne salate"),
        dishes: [
          {
            name: untranslated("Tuna salata"),
            description: untranslated(
              "Mix salate, tunjevina, posni majonez, kisjeli krastavac, crveni luk, paradajz, kukuruz"
            ),
            price: 9.2,
            image: tunaSalata,
          },
          {
            name: untranslated("Soja salata"),
            description: untranslated(
              "Iceberg salata, soja, kisjeli krastavac, posni majonez, čeri paradajz"
            ),
            price: 7.4,
            image: sojaSalata,
          },
        ],
      },
      {
        id: "posne-pice",
        title: untranslated("Posne pice"),
        dishes: [
          {
            name: untranslated("Pizza posna 1"),
            description: untranslated(
              "Pelat, biljni sir, tunjevina, kisjeli krastavac, kukuruz, čeri"
            ),
            price: 9.4,
            image: pizzaPosna1,
          },
          {
            name: untranslated("Pizza posna 2"),
            description: untranslated(
              "Pelat, biljni sir, soja, koktel sos, kisjeli krastavac, čeri"
            ),
            price: 8.8,
            image: pizzaPosna2,
          },
        ],
      },
      {
        id: "slatke-posne-krepe",
        title: untranslated("Slatke posne krepe"),
        dishes: [
          {
            name: untranslated("Slatka posna krepa 1"),
            description: untranslated(
              "Maline, kokos, crna čokolada bez šećera"
            ),
            price: 7.4,
            image: slatkaPosnaKrepa1,
          },
          {
            name: untranslated("Slatka posna krepa 2"),
            description: untranslated(
              "Crna čokolada bez šećera, wellness keks, džem kajsija"
            ),
            price: 7.4,
            image: slatkaPosnaKrepa2,
          },
          {
            name: untranslated("Slatka posna krepa 3"),
            description: untranslated(
              "Višnja, posna plazma, crna čokolada bez šećera"
            ),
            price: 7.4,
            image: slatkaPosnaKrepa3,
          },
          {
            name: untranslated("Slatka posna krepa 4"),
            description: untranslated(
              "Crna čokolada bez šećera, džem pomorandža, posna plazma"
            ),
            price: 7.4,
            image: slatkaPosnaKrepa4,
          },
          {
            name: untranslated("Slatka posna krepa 5"),
            description: untranslated("Pekmez, šećer u prahu"),
            price: 4.8,
            image: slatkaPosnaKrepa5,
          },
          {
            name: untranslated("Slatka posna krepa 6"),
            description: untranslated("Džem kajsija, nar"),
            price: 7.4,
            image: slatkaPosnaKrepa6,
          },
          {
            name: untranslated("Slatka posna krepa 7"),
            description: untranslated("Slatko šumske jagode, mix orašasto"),
            price: 7.4,
            image: slatkaPosnaKrepa7,
          },
          {
            name: untranslated("Slatka posna krepa 8"),
            description: untranslated(
              "Kikiriki puter, banana, crna čokolada bez šećera"
            ),
            price: 7.4,
            image: slatkaPosnaKrepa8,
          },
          {
            name: untranslated("Slatka posna krepa 9"),
            description: untranslated("Keks, jagode, crna čokolada bez šećera"),
            price: 7.4,
            image: slatkaPosnaKrepa9,
          },
        ],
      },
      {
        id: "posni-penkejk",
        title: untranslated("Posni penkejk"),
        dishes: [
          {
            name: untranslated("Posni penkejk 1"),
            description: untranslated("Džem od drenjine, šećer u prahu"),
            price: 7.1,
            image: posniPenkejk1,
          },
          {
            name: untranslated("Posni penkejk 2"),
            description: untranslated("Jabuka fil, cimet, orah"),
            price: 7.1,
            image: posniPenkejk2,
          },
          {
            name: untranslated("Posni penkejk 3"),
            description: untranslated("Džem od šipka, banana, pistaći"),
            price: 7.4,
            image: posniPenkejk3,
          },
          {
            name: untranslated("Posni penkejk 4"),
            description: untranslated("Javorov sirup, maline, badem"),
            price: 7.6,
            image: posniPenkejk4,
          },
          {
            name: untranslated("Posni penkejk 5"),
            description: untranslated(
              "Wellness keks, crna čokolada bez šećera, nar"
            ),
            price: 7.4,
            image: posniPenkejk5,
          },
        ],
      },
    ],
  },
  {
    slug: "haris-kolaci",
    // The brand name comes from data/site.ts, like everywhere else
    title: {
      me: `${site.name} Kolači`,
      en: `${site.name} Kolači`,
      it: `${site.name} Kolači`,
      ru: `${site.name} Kolači`,
      tr: `${site.name} Kolači`,
    },
    description: {
      me: "Savršeni uz kafu",
      en: "Savršeni uz kafu",
      it: "Savršeni uz kafu",
      ru: "Savršeni uz kafu",
      tr: "Savršeni uz kafu",
    },
    image: harisKolaci,
  },
  {
    slug: "sladoledi",
    title: {
      me: "Sladoledi",
      en: "Sladoledi",
      it: "Sladoledi",
      ru: "Sladoledi",
      tr: "Sladoledi",
    },
    description: {
      me: "Osvježenje za tople dane",
      en: "Osvježenje za tople dane",
      it: "Osvježenje za tople dane",
      ru: "Osvježenje za tople dane",
      tr: "Osvježenje za tople dane",
    },
    image: sladoledi,
  },
  {
    slug: "vocne-torte",
    title: {
      me: "Voćne torte",
      en: "Voćne torte",
      it: "Voćne torte",
      ru: "Voćne torte",
      tr: "Voćne torte",
    },
    description: {
      me: "Voćna slast u svakom zalogaju",
      en: "Voćna slast u svakom zalogaju",
      it: "Voćna slast u svakom zalogaju",
      ru: "Voćna slast u svakom zalogaju",
      tr: "Voćna slast u svakom zalogaju",
    },
    image: vocneTorte,
  },
  {
    slug: "pice",
    title: { me: "Piće", en: "Piće", it: "Piće", ru: "Piće", tr: "Piće" },
    description: {
      me: "Nešto za svaki ukus",
      en: "Nešto za svaki ukus",
      it: "Nešto za svaki ukus",
      ru: "Nešto za svaki ukus",
      tr: "Nešto za svaki ukus",
    },
    image: pice,
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}
