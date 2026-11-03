import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { site } from "@/data/site"
import { routing } from "@/i18n/routing"
import { inter, lora } from "@/lib/fonts"
import { hreflang } from "@/lib/seo"
import { cn } from "@/lib/utils"
import "../globals.css"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// What every page shares. Each page adds its own title, description,
// canonical, hreflang links and share card (pageMetadata in lib/seo.ts).
// The icons are files in app/ (scripts/generate-seo-images.ts).
export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return {}
  const t = await getTranslations({ locale, namespace: "meta.home" })
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("title", { name: site.fullName }),
      template: `%s | ${site.fullName}`,
    },
    description: t("description", { name: site.fullName, street: site.street }),
    applicationName: site.fullName,
    // Large image previews in Google results and Discover
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

// The browser bar on phones takes the header's maroon
export const viewport: Viewport = { themeColor: "#892e30" }

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
