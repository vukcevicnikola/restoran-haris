import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { routing } from "@/i18n/routing"
import { inter, lora } from "@/lib/fonts"
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
      className={cn("antialiased", lora.variable, inter.variable, "font-sans")}
    >
      {/* A column at least a screen tall, so the footer (mt-auto) stays at
          the bottom of short pages */}
      <body className="flex min-h-svh flex-col">
        <NextIntlClientProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
