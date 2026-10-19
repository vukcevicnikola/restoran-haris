"use client"

import Image, { type StaticImageData } from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

// A dish with its texts already in the page's language
export type DishCardData = {
  name: string
  description?: string
  flavors?: string[]
  price: number
  noPork?: boolean
  image?: StaticImageData
  transparent?: boolean
}

// One dish in the category grid, like a line of a printed menu: a small
// photo, then the name with a dotted leader out to the price, and the ingredients, flavours and the "no
// pork" badge under them, all in Lora. A thin rule separates the dishes.
// Items without a photo are the text alone.
export function DishCard({
  dish,
  eager = false,
}: {
  dish: DishCardData
  // The first photo on the page is on the first screen
  eager?: boolean
}) {
  const t = useTranslations("menu.category")
  const [loaded, setLoaded] = useState(false)
  const price = `${dish.price.toFixed(2)} €`

  return (
    // On phones the photo is above the text: beside it, the text had too
    // little room. From sm, photo and text side by side.
    <article className="flex h-full flex-col gap-4 border-b border-primary/15 py-5 sm:flex-row sm:items-center sm:gap-5">
      {dish.image && (
        // On phones the photo is 3/5 of the column wide and as tall as its
        // shape makes it, so there is no empty space around it; a tall glass
        // stops at max-h-36, at the left like the text. From sm, the same
        // box for every photo, which keeps its own shape inside it: a tall
        // glass at the box's width would be several times as tall as a
        // crepe. Plates cut out with their background get a frame; cut-outs
        // with a transparent one stand on the page.
        <div className="relative flex w-3/5 shrink-0 sm:h-28 sm:w-36 sm:items-center sm:justify-center lg:h-32 lg:w-44">
          {/* Under the photo, which covers it as soon as it has loaded (even
              before the page's JS runs); removed then to stop the pulse */}
          {!loaded && (
            <Skeleton className="absolute inset-0 rounded-2xl bg-muted/60" />
          )}
          {/* Decorative: the name carries the meaning. The width and height
              attributes from the import reserve its shape before it loads. */}
          <Image
            src={dish.image}
            alt=""
            sizes="(min-width: 64rem) 11rem, (min-width: 40rem) 9rem, 60vw"
            loading={eager ? "eager" : undefined}
            onLoad={() => setLoaded(true)}
            className={cn(
              "relative h-auto max-h-36 w-full sm:max-h-full sm:w-auto sm:max-w-full",
              dish.transparent
                ? "object-contain object-left"
                : "rounded-2xl object-cover shadow-sm ring-1 ring-primary/10"
            )}
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        {/* Bottom-aligned, so the leader and the price sit on the last line
            of a name that wraps. On phones the name wraps too often for a
            leader: the price goes under the ingredients instead. */}
        <div className="flex items-end gap-2">
          <h3 className="text-lg leading-snug font-semibold sm:text-xl">
            {dish.name}
          </h3>
          <span
            aria-hidden
            className="mb-1.5 hidden min-w-4 flex-1 border-b-2 border-dotted border-primary/30 sm:block"
          />
          <p className="hidden shrink-0 font-heading text-xl leading-snug font-bold text-primary sm:block">
            {price}
          </p>
        </div>
        {dish.description && (
          <p className="mt-1.5 font-heading text-base text-muted-foreground sm:text-lg">
            {dish.description}
          </p>
        )}
        {dish.flavors && (
          <p className="mt-1.5 font-heading text-base text-muted-foreground sm:text-lg">
            <span className="font-semibold text-secondary-foreground">
              {t("flavors")}:
            </span>{" "}
            {dish.flavors.join(" · ")}
          </p>
        )}
        {dish.noPork && (
          <Badge
            variant="outline"
            className="mt-2 h-6 border-primary/30 bg-transparent px-2.5 font-heading text-sm font-semibold text-primary"
          >
            {t("noPork")}
          </Badge>
        )}
        <p className="mt-2 font-heading text-lg font-bold text-primary sm:hidden">
          {price}
        </p>
      </div>
    </article>
  )
}
