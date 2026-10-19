import { ArrowRightIcon } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { CategoryCard } from "@/components/menu/category-card"
import { RiseInList } from "@/components/sections/rise-in-list"
import { buttonVariants } from "@/components/ui/button"
import { categories } from "@/data/menu"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// The menu's categories on the home page, after the About intro: a heading,
// a few sentences about the whole menu, a grid of the /meni cards (without
// their "Pogledajte meni" cue), then a button to /meni. The cards rise in as
// they scroll into view, like the dish cards. No top padding: the About
// intro above ends with its own.
export async function MenuPreview() {
  const t = await getTranslations("home.menu")

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:pb-24">
      <h2 className="text-3xl text-balance md:text-4xl">{t("title")}</h2>
      {/* A few sentences over the whole menu, styled like the About intro's */}
      <p className="mt-4 max-w-prose font-heading text-lg leading-normal text-foreground md:text-xl">
        {t("text")}
      </p>
      <RiseInList className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="data-[reveal=in]:animate-rise-in data-[reveal=waiting]:opacity-0 data-[reveal=in]:motion-reduce:animate-fade-in"
          >
            <CategoryCard category={category} heading="h3" />
          </li>
        ))}
      </RiseInList>
      <Link
        href="/meni"
        className={cn(
          buttonVariants(),
          "mt-8 h-auto gap-2 px-4 py-2.5 font-heading text-base font-semibold has-data-[icon=inline-end]:pr-4"
        )}
      >
        {t("cta")}
        <ArrowRightIcon data-icon="inline-end" />
      </Link>
    </section>
  )
}
