"use client"

import Image, { type StaticImageData } from "next/image"
import { useTranslations } from "next-intl"
import { type ReactNode, useRef, useState } from "react"
import { CategoryPanel } from "@/components/menu/category-panel"
import { DishCard, type DishCardData } from "@/components/menu/dish-card"
import { cn } from "@/lib/utils"

export type DishBrowserSection = {
  id: string
  title: string
  image?: StaticImageData
  dishes: DishCardData[]
}

// A category's dishes, one section at a time. `children` is the content of
// the dark panel (back link, h1), rendered on the server. Under it, sticky
// chips (the header is not sticky) pick the section; the first one is shown
// when the page opens, and a chip swaps the grid in place instead of
// scrolling to it.
export function DishBrowser({
  sections,
  children,
}: {
  sections: DishBrowserSection[]
  children: ReactNode
}) {
  const t = useTranslations("menu.category")
  const [selectedId, setSelectedId] = useState(sections[0].id)
  const selected =
    sections.find((section) => section.id === selectedId) ?? sections[0]
  const chipsRef = useRef<HTMLElement>(null)
  // Animate only after a chip was used: on page load the first section shows
  // at once (no wait for the photo on the first screen)
  const [switched, setSwitched] = useState(false)

  function select(id: string, chip: HTMLButtonElement) {
    setSelectedId(id)
    setSwitched(true)

    // On phones the row scrolls sideways: bring a chip that was tapped half
    // off the edge fully into view (16px from the edge, like the padding)
    const row = chip.closest("ul")!
    const rowBox = row.getBoundingClientRect()
    const chipBox = chip.getBoundingClientRect()
    if (chipBox.left < rowBox.left + 16) {
      row.scrollBy({ left: chipBox.left - rowBox.left - 16 })
    } else if (chipBox.right > rowBox.right - 16) {
      row.scrollBy({ left: chipBox.right - rowBox.right + 16 })
    }

    // When the chips are stuck to the top, the page is scrolled into the old
    // grid: jump back to the start of the new one, without smooth scrolling.
    // A short section may leave the page too short to get all the way there.
    const contentTop = chipsRef.current!.parentElement!.offsetTop
    if (window.scrollY > contentTop) {
      window.scrollTo({ top: contentTop, behavior: "instant" })
    }
  }

  return (
    <>
      <CategoryPanel>{children}</CategoryPanel>

      <div>
        <nav
          ref={chipsRef}
          aria-label={t("sections")}
          // A single chip (Sladoledi) would pick nothing
          className={cn(
            "sticky top-0 z-30 border-b bg-background",
            sections.length === 1 && "hidden"
          )}
        >
          <ul className="mx-auto flex max-w-7xl [scrollbar-width:none] gap-2 overflow-x-auto px-4 py-3">
            {sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={section.id === selected.id}
                  onClick={(event) => select(section.id, event.currentTarget)}
                  // Selecting snaps: fading background and text at once (dark
                  // to light and back) made both labels nearly vanish mid-way
                  // (contrast 1.4:1). Only the hover fade-in is animated; it
                  // changes the background alone.
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 font-heading text-base font-semibold whitespace-nowrap",
                    section.id === selected.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-secondary-foreground hover:bg-accent hover:transition-colors"
                  )}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Keyed by section, so a new one mounts and runs its animations: the
            heading fades in, the dishes rise in one after another (80ms apart,
            capped at 320ms so a long section does not drag) */}
        <section
          key={selected.id}
          aria-labelledby={selected.id}
          className="mx-auto mt-10 max-w-7xl px-4 md:mt-14"
        >
          <div
            className={cn(
              "flex items-center justify-between gap-4",
              switched && "animate-fade-in"
            )}
          >
            <h2 id={selected.id} className="text-2xl md:text-3xl">
              {selected.title}
            </h2>
            {/* A section whose items have no photos of their own (the ice
                cream flavours) shows one for all of them. Decorative. */}
            {selected.image && (
              <Image
                src={selected.image}
                alt=""
                sizes="7rem"
                className="h-28 w-auto md:h-36"
              />
            )}
          </div>
          <ul className="mt-4 grid gap-x-12 sm:grid-cols-2">
            {selected.dishes.map((dish, i) => (
              <li
                key={dish.name}
                className={cn(
                  switched && "animate-rise-in motion-reduce:animate-fade-in"
                )}
                style={
                  switched
                    ? { animationDelay: `${Math.min(i, 4) * 80}ms` }
                    : undefined
                }
              >
                <DishCard
                  dish={dish}
                  eager={selected.id === sections[0].id && i === 0}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
