import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// A page's h1, at the top of the page under the header bar, aligned with the
// header's content (max-w-7xl, px-4). The top padding clears the logo badge
// hanging below the bar (48px, md 68px).
export function PageHeading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 pt-16 md:pt-24", className)}>
      <h1 className="text-3xl text-balance md:text-4xl">{children}</h1>
    </div>
  )
}
