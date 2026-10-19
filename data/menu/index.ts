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
    transparent: true,
    sections: dorucakSections,
  },
  {
    slug: "potazi",
    title: {
      me: "Potaži",
      en: "Potaži",
      it: "Potaži",
      ru: "Potaži",
      tr: "Potaži",
    },
    description: {
      me: "Toplo i kremasto",
      en: "Toplo i kremasto",
      it: "Toplo i kremasto",
      ru: "Toplo i kremasto",
      tr: "Toplo i kremasto",
    },
    image: potazi,
    transparent: true,
    sections: potaziSections,
  },
  {
    slug: "burgeri",
    title: {
      me: "Burgeri",
      en: "Burgeri",
      it: "Burgeri",
      ru: "Burgeri",
      tr: "Burgeri",
    },
    description: {
      me: "Za pravu glad",
      en: "Za pravu glad",
      it: "Za pravu glad",
      ru: "Za pravu glad",
      tr: "Za pravu glad",
    },
    image: burgeri,
    transparent: true,
    sections: burgeriSections,
  },
  {
    slug: "pica",
    title: { me: "Pica", en: "Pica", it: "Pica", ru: "Pica", tr: "Pica" },
    description: {
      me: "Za ljubitelje pice",
      en: "Za ljubitelje pice",
      it: "Za ljubitelje pice",
      ru: "Za ljubitelje pice",
      tr: "Za ljubitelje pice",
    },
    image: pica,
    transparent: true,
    sections: picaSections,
  },
  {
    slug: "salate",
    title: {
      me: "Salate",
      en: "Salate",
      it: "Salate",
      ru: "Salate",
      tr: "Salate",
    },
    description: {
      me: "Lagano i osvježavajuće",
      en: "Lagano i osvježavajuće",
      it: "Lagano i osvježavajuće",
      ru: "Lagano i osvježavajuće",
      tr: "Lagano i osvježavajuće",
    },
    image: salate,
    transparent: true,
    sections: salateSections,
  },
  {
    slug: "slatke-krepe",
    title: {
      me: "Slatke krepe",
      en: "Slatke krepe",
      it: "Slatke krepe",
      ru: "Slatke krepe",
      tr: "Slatke krepe",
    },
    description: {
      me: "Naš slatki specijalitet",
      en: "Naš slatki specijalitet",
      it: "Naš slatki specijalitet",
      ru: "Naš slatki specijalitet",
      tr: "Naš slatki specijalitet",
    },
    image: slatkeKrepe27,
    transparent: true,
    sections: slatkeKrepeSections,
  },
  {
    slug: "penkejk",
    title: {
      me: "Penkejk",
      en: "Penkejk",
      it: "Penkejk",
      ru: "Penkejk",
      tr: "Penkejk",
    },
    description: {
      me: "Mekano, slatko, neodoljivo",
      en: "Mekano, slatko, neodoljivo",
      it: "Mekano, slatko, neodoljivo",
      ru: "Mekano, slatko, neodoljivo",
      tr: "Mekano, slatko, neodoljivo",
    },
    image: penkejk,
    transparent: true,
    sections: penkejkSections,
  },
  {
    slug: "slatke-vafle",
    title: {
      me: "Slatke vafle",
      en: "Slatke vafle",
      it: "Slatke vafle",
      ru: "Slatke vafle",
      tr: "Slatke vafle",
    },
    description: {
      me: "Hrskave i slatke",
      en: "Hrskave i slatke",
      it: "Hrskave i slatke",
      ru: "Hrskave i slatke",
      tr: "Hrskave i slatke",
    },
    image: slatkeVafle,
    transparent: true,
    sections: slatkeVafleSections,
  },
  {
    slug: "slane-krepe",
    title: {
      me: "Slane krepe",
      en: "Slane krepe",
      it: "Slane krepe",
      ru: "Slane krepe",
      tr: "Slane krepe",
    },
    description: {
      me: "Za pravi slani zalogaj",
      en: "Za pravi slani zalogaj",
      it: "Za pravi slani zalogaj",
      ru: "Za pravi slani zalogaj",
      tr: "Za pravi slani zalogaj",
    },
    image: slaneKrepe,
    transparent: true,
    sections: slaneKrepeSections,
  },
  {
    slug: "budi-sam-svoj-sef",
    title: {
      me: "Budi sam svoj šef",
      en: "Budi sam svoj šef",
      it: "Budi sam svoj šef",
      ru: "Budi sam svoj šef",
      tr: "Budi sam svoj šef",
    },
    description: {
      me: "Izaberite sastojke po svom ukusu",
      en: "Izaberite sastojke po svom ukusu",
      it: "Izaberite sastojke po svom ukusu",
      ru: "Izaberite sastojke po svom ukusu",
      tr: "Izaberite sastojke po svom ukusu",
    },
    image: slatkeKrepe22,
    transparent: true,
    sections: budiSamSvojSefSections,
  },
  {
    slug: "nasi-proizvodi",
    title: {
      me: "Naši proizvodi",
      en: "Naši proizvodi",
      it: "Naši proizvodi",
      ru: "Naši proizvodi",
      tr: "Naši proizvodi",
    },
    description: {
      me: "Naši kremovi i voćni sokovi",
      en: "Naši kremovi i voćni sokovi",
      it: "Naši kremovi i voćni sokovi",
      ru: "Naši kremovi i voćni sokovi",
      tr: "Naši kremovi i voćni sokovi",
    },
    image: nasiProizvodi,
    transparent: true,
    sections: nasiProizvodiSections,
  },
  {
    slug: "slatka-karta",
    title: {
      me: "Slatka karta",
      en: "Slatka karta",
      it: "Slatka karta",
      ru: "Slatka karta",
      tr: "Slatka karta",
    },
    description: {
      me: "Za sve koji vole slatko",
      en: "Za sve koji vole slatko",
      it: "Za sve koji vole slatko",
      ru: "Za sve koji vole slatko",
      tr: "Za sve koji vole slatko",
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
    // Cut out with its background, so cropped round
    image: sojaSalata,
    sections: posniMeniSections,
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}
