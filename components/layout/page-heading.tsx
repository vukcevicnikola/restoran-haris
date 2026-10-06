import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// A page's h1, in the strip right under the header bar, next to the lower half
// of the hanging logo badge (site-header.tsx). The left padding clears the
// badge (left-4 + h-24/md:h-34 wide + a gap) and the strip is as tall as the
// part of the badge below the bar, so the title is centred beside it.
export function PageHeading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-[calc(3rem-2px)] max-w-6xl items-center pr-4 pl-32 md:min-h-[calc(4.25rem-2px)] md:pl-44",
        className
      )}
    >
      <h1 className="text-2xl text-balance sm:text-2xl md:text-4xl">
        {children}
      </h1>
    </div>
  )
}
