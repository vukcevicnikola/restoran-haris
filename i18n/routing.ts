import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["me", "en", "it", "ru", "tr"],
  defaultLocale: "me",
  localePrefix: "as-needed",
  // Must stay false: a tourist's browser language must never redirect the
  // QR scan (/meni) away from Montenegrin.
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/meni": {
      me: "/meni",
      en: "/menu",
      it: "/menu",
      ru: "/menyu",
      tr: "/menu",
    },
    "/o-nama": {
      me: "/o-nama",
      en: "/about",
      it: "/chi-siamo",
      ru: "/o-nas",
      tr: "/hakkimizda",
    },
    "/kontakt": {
      me: "/kontakt",
      en: "/contact",
      it: "/contatti",
      ru: "/kontakty",
      tr: "/iletisim",
    },
  },
})

// Order of the codes in the language switcher
export const switcherLocales = [
  "en",
  "ru",
  "it",
  "tr",
  "me",
] as const satisfies readonly (typeof routing.locales)[number][]

// Native names, read by screen readers next to the codes in the switcher.
// The same in every language.
export const localeNames = {
  me: "Crnogorski",
  en: "English",
  it: "Italiano",
  ru: "Русский",
  tr: "Türkçe",
} satisfies Record<(typeof routing.locales)[number], string>
