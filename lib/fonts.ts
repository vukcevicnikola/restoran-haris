import localFont from "next/font/local"

// Self-hosted so builds never fetch from Google Fonts. Variable woff2 subset
// from google/fonts to latin + latin-ext + cyrillic (Nunito wght 700-900,
// Inter wght 100-900 with opsz pinned to 14).
export const nunito = localFont({
  src: "../app/fonts/Nunito.woff2",
  weight: "700 900",
  variable: "--font-nunito",
  display: "swap",
})

export const inter = localFont({
  src: "../app/fonts/Inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
})
