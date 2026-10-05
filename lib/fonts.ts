import localFont from "next/font/local"

// Self-hosted so builds never fetch from Google Fonts. Variable woff2 subset
// from google/fonts to latin + latin-ext + cyrillic (Nunito full wght 200-1000,
// Inter wght 100-900 with opsz pinned to 14). Keep Nunito's full range:
// cutting it down to fewer weights makes the file bigger, not smaller.
export const nunito = localFont({
  src: "../app/fonts/Nunito.woff2",
  weight: "200 1000",
  variable: "--font-nunito",
  display: "swap",
})

export const inter = localFont({
  src: "../app/fonts/Inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
})
