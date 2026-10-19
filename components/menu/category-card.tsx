import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import type { MenuCategory } from "@/data/menu"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// A menu category on /meni: a dish photo, name, its own line of text and a
// "Pogledajte meni" cue. The whole card is clickable: the link sits on the
// name (that is what screen readers announce) and stretches over the card.
export function CategoryCard({ category }: { category: MenuCategory }) {
  const t = useTranslations("menu.categories")
  const locale = useLocale()

  return (
    // One size everywhere: from 315px wide (3 per row on a 1024px screen)
    // up to 548px (beside the welcome panel). h-full: cards in a row match
    // when a line wraps.
    <Card className="relative h-full flex-row items-center gap-5 rounded-3xl p-5 transition-colors hover:bg-accent has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
      {/* Wrapped so the card's first-child image styles do not apply. A
          cut-out (a dish on its round plate) is shown whole; a photo with
          its background is cropped round. */}
      <div className="shrink-0">
        <Image
          src={category.image}
          alt=""
          sizes="96px"
          className={cn(
            "size-24",
            category.transparent
              ? "object-contain"
              : "rounded-full object-cover"
          )}
        />
      </div>
      <div className="min-w-0">
        <h2 className="text-2xl">
          <Link
            href={{
              pathname: "/meni/[category]",
              params: { category: category.slug },
            }}
            className="outline-none after:absolute after:inset-0 after:rounded-3xl"
          >
            {category.title[locale]}
          </Link>
        </h2>
        {/* Lora like the rest of the card, and like the dish descriptions:
            a size up from sm, as Lora reads smaller than Inter */}
        <p className="mt-1 font-heading text-base text-muted-foreground sm:text-lg">
          {category.description[locale]}
        </p>
        {/* Repeats the link visually; the name already announces it */}
        {/* Inline, so on a narrow card the underline follows each line and
            the word joiner keeps the arrow next to the last word */}
        <p
          aria-hidden
          className="mt-2 font-heading text-base leading-8 font-semibold text-primary"
        >
          <span className="border-b-2 border-primary pb-1">
            {t("cta")}
            &#8288;
            <ArrowRightIcon className="ms-1.5 inline size-4 align-[-0.125em]" />
          </span>
        </p>
      </div>
    </Card>
  )
}
