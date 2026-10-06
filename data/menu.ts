import type { StaticImageData } from "next/image"
import type { Locale } from "next-intl"
import { site } from "@/data/site"
import dezerti from "@/public/images/menu/dezerti.jpg"
import dorucak from "@/public/images/menu/dorucak.jpg"
import harisKolaci from "@/public/images/menu/haris-kolaci.jpg"
import pice from "@/public/images/menu/pice.jpg"
import posniMeni from "@/public/images/menu/posni-meni.jpg"
import rucak from "@/public/images/menu/rucak.jpg"
import sladoledi from "@/public/images/menu/sladoledi.jpg"
import vecera from "@/public/images/menu/vecera.jpg"
import vocneTorte from "@/public/images/menu/vocne-torte.jpg"

type L = Record<Locale, string>

export type MenuCategory = {
  // URL segment, the same in every language: /meni/dorucak, /en/menu/dorucak
  slug: string
  title: L
  // One line under the name on the /meni card
  description: L
  // Round crop of a dish on a plate, seen from above
  image: StaticImageData
}

// TODO EN/IT/RU/TR are copies of the Montenegrin texts until the
// translations are done (CLAUDE.me, "Content workflow").
// TODO the descriptions are proposals: the owner confirms or rewrites them.
// They name no dishes, because the menu is not known yet.
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
