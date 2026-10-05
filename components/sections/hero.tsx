import { ArrowRightIcon } from "lucide-react"
import { getImageProps } from "next/image"
import { getTranslations } from "next-intl/server"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/data/site"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
// Phone: the client's own photo. TODO tablet (4:5) and desktop (wide) are
// still Unsplash placeholders, see CLAUDE.me.
import desktopImage from "@/public/images/hero/desktop.jpg"
import mobileImage from "@/public/images/hero/mobile-bg.jpg"
import tabletImage from "@/public/images/hero/tablet.jpg"

// Decorative: the heading carries the meaning
const common = { alt: "", fill: true, sizes: "100vw" } as const

export async function Hero() {
  const t = await getTranslations("home.hero")

  // One image per screen size (art direction): the browser downloads only the
  // one whose media query matches. Breakpoints match Tailwind md and lg.
  const desktop = getImageProps({ ...common, src: desktopImage }).props.srcSet
  const tablet = getImageProps({ ...common, src: tabletImage }).props.srcSet
  const { srcSet: mobile, ...img } = getImageProps({
    ...common,
    src: mobileImage,
    loading: "eager",
    fetchPriority: "high",
    className: "-z-10 object-cover",
  }).props

  return (
    // Header + hero fill exactly one screen. `isolate` keeps the photo layers
    // below the header's hanging logo.
    <section className="relative isolate flex min-h-[calc(100svh-var(--header-bar)-2px)] items-end overflow-hidden bg-brand-cocoa">
      <picture>
        <source media="(min-width: 64rem)" srcSet={desktop} sizes="100vw" />
        <source media="(min-width: 48rem)" srcSet={tablet} sizes="100vw" />
        <img {...img} srcSet={mobile} alt="" />
      </picture>
      {/* Darkens the whole photo, and the bottom more, so text stays readable */}
      <div className="absolute inset-0 -z-10 bg-brand-cocoa/50" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-brand-cocoa/80 via-brand-cocoa/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl animate-fade-in px-4 pt-32 pb-16 md:pb-24">
        <h1 className="max-w-2xl text-4xl font-semibold text-brand-cream sm:text-5xl md:text-6xl">
          {t("title", { name: site.fullName })}
        </h1>
        <Link
          href="/meni"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-8 h-auto gap-2 px-4 py-2.5 font-heading text-base font-bold focus-visible:border-brand-cream focus-visible:ring-brand-cream/60 has-data-[icon=inline-end]:pr-4"
          )}
        >
          {t("cta")}
          <ArrowRightIcon data-icon="inline-end" />
        </Link>
      </div>
    </section>
  )
}
