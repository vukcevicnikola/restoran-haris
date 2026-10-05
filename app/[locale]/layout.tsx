import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { SiteHeader } from "@/components/layout/site-header"
import { routing } from "@/i18n/routing"
import { nunito, inter } from "@/lib/fonts"
import { hreflang } from "@/lib/seo"
import { cn } from "@/lib/utils"
import "../globals.css"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html
      lang={hreflang[locale]}
      className={cn(
        "antialiased",
        nunito.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body>
        <NextIntlClientProvider>
          <SiteHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
