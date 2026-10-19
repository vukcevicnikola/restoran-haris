import { ArrowRightIcon } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { FlagHeart } from "@/components/about/flag-heart"
import { buttonVariants } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// The home page's short version of /o-nama, right after the hero: a heading,
// two sentences from the story and a button to the whole page, beside the
// same flag heart. All text in Lora, like /o-nama.
export async function AboutIntro() {
  const t = await getTranslations("home.about")

  return (
    // The text starts at the same left edge as the hero's heading, like every
    // section; the heart is at the right, and only from md (not on phones)
    <section className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 py-16 md:grid-cols-[1fr_auto] md:py-24">
      <FlagHeart className="hidden md:order-last md:block md:w-56 lg:w-80" />
      <div className="max-w-2xl">
        <h2 className="text-3xl text-balance md:text-4xl">{t("title")}</h2>
        <p className="mt-4 font-heading text-lg leading-normal text-foreground md:text-xl">
          {t("text")}
        </p>
        <Link
          href="/o-nama"
          className={cn(
            buttonVariants(),
            "mt-8 h-auto gap-2 px-4 py-2.5 font-heading text-base font-semibold has-data-[icon=inline-end]:pr-4"
          )}
        >
          {t("cta")}
          <ArrowRightIcon data-icon="inline-end" />
        </Link>
      </div>
    </section>
  )
}
