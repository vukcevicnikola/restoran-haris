"use client"

import { type ComponentProps, useEffect, useRef } from "react"

// A list whose items rise in as they scroll into view, with the dish cards'
// animation (animate-rise-in): one after another in list order, 80ms apart,
// a delay capped at 320ms. Items already on the screen when the
// page opens show at once, and so does everything without JS. The items
// style themselves: data-[reveal=waiting] hides one until it is in view,
// data-[reveal=in] animates it.
export function RiseInList(props: ComponentProps<"ul">) {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const items = [...(ref.current?.children ?? [])] as HTMLElement[]
    const below = items.filter(
      (item) => item.getBoundingClientRect().top >= window.innerHeight
    )
    if (!below.length) return

    // When the next item may start: items that come in while earlier ones
    // are still waiting start after them, so they rise in list order
    let nextStart = 0
    const observer = new IntersectionObserver(
      (entries) => {
        const now = performance.now()
        entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) => items.indexOf(a) - items.indexOf(b))
          .forEach((item) => {
            const delay = Math.min(Math.max(nextStart - now, 0), 320)
            nextStart = now + delay + 80
            item.style.animationDelay = `${delay}ms`
            item.dataset.reveal = "in"
            observer.unobserve(item)
          })
      },
      // A little above the bottom edge, so the rise is seen
      { rootMargin: "0px 0px -10% 0px" }
    )
    for (const item of below) {
      item.dataset.reveal = "waiting"
      observer.observe(item)
    }
    return () => observer.disconnect()
  }, [])

  return <ul ref={ref} {...props} />
}
