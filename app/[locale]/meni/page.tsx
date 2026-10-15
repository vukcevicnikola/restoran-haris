import Image from "next/image"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { CategoryCard } from "@/components/menu/category-card"
import { categories } from "@/data/menu"
import { site } from "@/data/site"
// TODO placeholder (the Voćne torte card photo), until the client sends one
import panelImage from "@/public/images/menu/vecera.jpg"

// The first two categories stand beside the welcome panel, the rest follow
// in a grid below
const besidePanel = categories.slice(0, 2)
const inGrid = categories.slice(2)

// QR code target: never rename, move or remove this route.
// The overview: a dark welcome panel next to the heading and the first two
// categories, then the other categories, each card opening /meni/[category].
export default async function MenuPage({
  params,
}: PageProps<"/[locale]/meni">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("menu")

  return (
    <main className="mx-auto max-w-7xl px-4 pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Two columns from md; the panel stretches to the height of the
          heading and the two cards. On phones it sits above them. */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative isolate flex min-h-56 flex-col justify-end overflow-hidden rounded-3xl bg-brand-cocoa p-6 md:p-8">
          {/* Decorative: the text carries the meaning. Eager: on phones the
              panel is the first thing on the screen. */}
          <Image
            src={panelImage}
            alt=""
            fill
            sizes="(min-width: 80rem) 608px, (min-width: 48rem) 50vw, 100vw"
            loading="eager"
            className="-z-10 object-cover"
          />
          {/* Darkens the whole photo, and the bottom more, as on the hero */}
          <div className="absolute inset-0 -z-10 bg-brand-cocoa/50" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-brand-cocoa/80 via-brand-cocoa/20 to-transparent" />
          <p className="font-heading text-3xl leading-tight font-semibold tracking-[-0.01em] text-balance text-brand-cream md:text-4xl lg:text-5xl">
            {t("welcome", { name: site.fullName })}
          </p>
        </div>
        <div>
          <h1 className="text-3xl text-balance md:text-4xl">
            {t("title", { name: site.fullName })}
          </h1>
          <ul className="mt-6 flex flex-col gap-4 md:gap-6">
            {besidePanel.map((category) => (
              <li key={category.slug}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Two per row from md, three from lg. Wrapping flex instead of a grid,
          so a last row that is not full (7 cards = 3 + 3 + 1) is centred */}
      <ul className="mt-4 flex flex-wrap justify-center gap-4 md:mt-10 md:gap-6">
        {inGrid.map((category) => (
          <li
            key={category.slug}
            className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </main>
  )
}
