import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import type { MenuCategory } from "@/data/menu"
import { Link } from "@/i18n/navigation"

// A menu category on /meni: round photo, name, its own line of text and a
// "Pogledajte meni" cue. The whole card is clickable: the link sits on the
// name (that is what screen readers announce) and stretches over the card.
export function CategoryCard({ category }: { category: MenuCategory }) {
  const t = useTranslations("menu.categories")
  const locale = useLocale()

  return (
    // A bit smaller from md (2 columns, 3 from lg): a 1024px screen gives a
    // card about 314px, so the photo, name and text shrink to leave room for
    // "Pogledajte meni". h-full: cards in a row match when a line wraps.
    <Card className="relative h-full flex-row items-center gap-5 rounded-3xl p-5 transition-colors hover:bg-accent has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring md:gap-4">
      {/* Wrapped so the card's first-child image styles do not apply */}
      <div className="shrink-0">
        <Image
          src={category.image}
          alt=""
          sizes="(min-width: 768px) 96px, 112px"
          className="size-28 rounded-full object-cover md:size-24"
        />
      </div>
      <div className="min-w-0">
        <h2 className="text-2xl md:text-xl">
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
        <p className="mt-1 text-base text-muted-foreground md:text-sm">
          {category.description[locale]}
        </p>
        {/* Repeats the link visually; the name already announces it */}
        {/* Inline, so on a narrow card the underline follows each line and
            the word joiner keeps the arrow next to the last word */}
        <p
          aria-hidden
          className="mt-4 font-heading text-base leading-8 font-bold text-primary md:mt-3 md:text-sm md:leading-7"
        >
          <span className="border-b-2 border-primary pb-1">
            {t("cta")}
            &#8288;
            <ArrowRightIcon className="ms-1.5 inline size-4 align-[-0.125em] md:size-3.5" />
          </span>
        </p>
      </div>
    </Card>
  )
}
