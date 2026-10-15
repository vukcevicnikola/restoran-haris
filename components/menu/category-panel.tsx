import type { ReactNode } from "react"

// The dark band at the top of a category page, right under the header: cocoa
// with a warm maroon glow in the top right. pt-16 md:pt-24 clears the hanging
// logo badge. The default maroon focus ring is invisible on cocoa, so focus
// rings in it are peach.
export function CategoryPanel({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-cocoa bg-[radial-gradient(ellipse_at_top_right,--alpha(var(--color-brand-maroon)/45%),transparent_65%)] text-brand-cream [&_:focus-visible]:outline-brand-peach">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 md:pt-24 md:pb-14">
        {children}
      </div>
    </div>
  )
}
