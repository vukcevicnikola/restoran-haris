"use client"

import Image, { type StaticImageData } from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// A dish with its texts already in the page's language
export type DishCardData = {
  name: string
  description: string
  price: number
  image: StaticImageData
}

// One dish in the category grid: the photo on top, then the name, the
// ingredients and the price. The photos are cut out of the printed menu at
// 1.2:1 (salads) to 2.2:1 (crepes); a 2:1 frame keeps the crepes nearly whole
// and shows the rest as close-ups. The price sits at the bottom, so prices
// line up across a row when the ingredients wrap differently.
export function DishCard({
  dish,
  eager = false,
}: {
  dish: DishCardData
  // The first photo on the page is on the first screen
  eager?: boolean
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Card className="h-full gap-0 rounded-3xl py-0">
      <div className="relative aspect-2/1">
        {/* Under the photo, which covers it as soon as it has loaded (even
            before the page's JS runs); removed then to stop the pulse */}
        {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
        {/* Decorative: the name carries the meaning. `fill` (absolute) keeps
            the frame at 2:1: an in-flow photo taller than 2:1 would stretch
            the frame, since an aspect-ratio box grows to fit its content. */}
        <Image
          src={dish.image}
          alt=""
          fill
          // 1 column, 2 from sm, 3 from md, at most 400px (max-w-7xl)
          sizes="(min-width: 80rem) 400px, (min-width: 48rem) calc((100vw - 5rem) / 3), (min-width: 40rem) calc((100vw - 3rem) / 2), calc(100vw - 2rem)"
          loading={eager ? "eager" : undefined}
          onLoad={() => setLoaded(true)}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-balance">{dish.name}</h3>
        <p className="mt-2 text-base text-muted-foreground">
          {dish.description}
        </p>
        <p className="mt-auto pt-4 font-heading text-2xl font-bold text-primary">
          {dish.price.toFixed(2)} <span className="text-lg">€</span>
        </p>
      </div>
    </Card>
  )
}
