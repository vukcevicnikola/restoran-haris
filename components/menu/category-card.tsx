import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import type { MenuCategory } from "@/data/menu"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// A menu category card, on /meni and on the home page: a dish photo at the
// left, the name at the right, and on /meni a "Pogledajte meni" cue under
// it. The whole card is clickable: the link sits on the name (that is what
// screen readers announce) and stretches over the card.
export function CategoryCard({
  category,
  heading: Heading = "h2",
  cue = false,
}: {
  category: MenuCategory
  // h3 under a section's h2 (home page)
  heading?: "h2" | "h3"
  cue?: boolean
}) {
  const t = useTranslations("menu.categories")
  const locale = useLocale()

  return (
    // h-full: cards in a row match when a name wraps
    <Card className="relative h-full flex-row items-center gap-4 rounded-3xl px-3 py-2 transition-colors hover:bg-accent has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring sm:px-4 sm:py-4">
      {/* Wrapped so the card's first-child image styles do not apply. A
          cut-out (a dish on its round plate) is shown whole; a photo with
          its background is cropped round. Decorative: the name carries the
          meaning. */}
      <div className="shrink-0">
        <Image
          src={category.image}
          alt=""
          sizes="96px"
          className={cn(
            "size-20 sm:size-24",
            category.transparent
              ? "object-contain"
              : "rounded-full object-cover"
          )}
        />
      </div>
      <div className="min-w-0">
        <Heading className="text-xl font-bold">
          <Link
            href={{
              pathname: "/meni/[category]",
              params: { category: category.slug },
            }}
            className="outline-none after:absolute after:inset-0 after:rounded-3xl"
          >
            {category.title[locale]}
          </Link>
        </Heading>
        {/* Repeats the link visually; the name already announces it.
            Inline, so on a narrow card the underline follows each line and
            the word joiner keeps the arrow next to the last word. */}
        {cue && (
          <p
            aria-hidden
            className="mt-1 font-heading text-base leading-8 font-semibold text-primary"
          >
            <span className="border-b-2 border-primary pb-1">
              {t("cta")}
              &#8288;
              <ArrowRightIcon className="ms-1.5 inline size-4 align-[-0.125em]" />
            </span>
          </p>
        )}
      </div>
    </Card>
  )
}
