import localFont from "next/font/local"

// Self-hosted so builds never fetch from Google Fonts.
// Lora: the original google/fonts file (wght 400-700), only compressed to
// woff2. Do not subset it: its licence reserves the name "Lora", and a cut
// down (modified) font would have to be renamed. The overrides make every
// OS use the same line metrics (Windows would otherwise use the font's
// taller win metrics and place text lower inside buttons and pills).
export const lora = localFont({
  src: "../app/fonts/Lora.woff2",
  weight: "400 700",
  variable: "--font-lora",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  declarations: [
    { prop: "ascent-override", value: "100.6%" },
    { prop: "descent-override", value: "27.4%" },
    { prop: "line-gap-override", value: "0%" },
  ],
})

// Inter: variable woff2 subset from google/fonts to latin + latin-ext +
// cyrillic, wght 100-900 with opsz pinned to 14.
export const inter = localFont({
  src: "../app/fonts/Inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
})
