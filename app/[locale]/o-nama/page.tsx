import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { FlagHeart } from "@/components/about/flag-heart"
import { CategoryPanel } from "@/components/menu/category-panel"
import { site } from "@/data/site"

// The story from the printed menu's first page, on the same dark panel as
// the menu's category pages: the welcome as the h1, the text beside the
// flag heart (above it on phones), then "since 1997". All of it in Lora,
// like the printed page's serif. Only the page's language is shown; the
// printed page has Montenegrin and English side by side.
export default async function AboutPage({
  params,
}: PageProps<"/[locale]/o-nama">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("about")
  const name = site.fullName

  return (
    <main>
      <CategoryPanel>
        <div className="pb-6 md:pb-10">
          <h1 className="text-center text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            {t("welcome", { name })}
          </h1>
          <div className="mt-10 grid items-center gap-10 md:mt-16 md:grid-cols-[1fr_auto] md:gap-16">
            <FlagHeart className="mx-auto w-60 sm:w-72 md:order-last lg:w-96" />
            <div className="mx-auto max-w-prose space-y-5 font-heading text-lg leading-relaxed text-brand-cream/90 md:mx-0 md:text-xl">
              <p>{t("origin", { name })}</p>
              <p>{t("recipe")}</p>
              <p>{t("team", { name })}</p>
            </div>
          </div>
          <p className="mt-12 flex items-center justify-center gap-4 font-heading text-xl font-semibold text-brand-peach md:mt-16 md:text-2xl">
            <span aria-hidden className="h-px w-12 bg-brand-peach/40" />
            {t("since")}
            <span aria-hidden className="h-px w-12 bg-brand-peach/40" />
          </p>
        </div>
      </CategoryPanel>
    </main>
  )
}