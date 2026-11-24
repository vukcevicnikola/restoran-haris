"use client"

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { headerIconButton } from "@/components/layout/header-styles"
import { RiseInList } from "@/components/sections/rise-in-list"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export type GalleryPhotoData = {
  id: string
  image: StaticImageData
  alt: string
}

// A photo and the ones before and after it, round and round
const around = (index: number, count: number) => [
  index,
  (index + 1) % count,
  (index - 1 + count) % count,
]

const viewerButton = cn(headerIconButton, "size-11")

// A grid of photos, 2 columns on phones; the page sets the columns from md (in
// className, with the sizes to match). The photos are all 2:3, so it stays
// even. A photo opens the full-screen viewer, which goes through the grid's
// photos. With rise they rise in as they scroll into view, like the home
// page's cards.
export function PhotoGallery({
  photos,
  sizes,
  rise = false,
  className,
}: {
  photos: GalleryPhotoData[]
  sizes: string
  rise?: boolean
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [start, setStart] = useState(0)
  const List = rise ? RiseInList : "ul"

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <List className={cn("grid grid-cols-2 gap-3 sm:gap-4", className)}>
        {photos.map((photo, index) => (
          <li
            key={photo.id}
            className="data-[reveal=in]:animate-rise-in data-[reveal=waiting]:opacity-0 data-[reveal=in]:motion-reduce:animate-fade-in"
          >
            <DialogTrigger
              onClick={() => setStart(index)}
              className="block w-full cursor-zoom-in rounded-2xl"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                sizes={sizes}
                placeholder="blur"
                className="aspect-2/3 w-full rounded-2xl object-cover"
              />
            </DialogTrigger>
          </li>
        ))}
      </List>
      <PhotoViewer
        photos={photos}
        start={start}
        onClose={() => setOpen(false)}
      />
    </Dialog>
  )
}

// One photo at a time on a dark screen: swipe, the two arrows or the arrow
// keys move to the next one, round and round. Esc, the cross or the dark area
// around the photo closes it.
function PhotoViewer({
  photos,
  start,
  onClose,
}: {
  photos: GalleryPhotoData[]
  start: number
  onClose: () => void
}) {
  const [api, setApi] = useState<CarouselApi>()

  return (
    // Own close button: the built-in one has a hardcoded English label
    <DialogContent
      showCloseButton={false}
      className="inset-0 block max-w-none translate-x-0 translate-y-0 rounded-none bg-brand-cocoa/95 p-0 text-brand-cream ring-0 sm:max-w-none"
      onKeyDown={(event) => {
        // The carousel handles the keys itself while the focus is inside it
        if (event.defaultPrevented) return
        if (event.key === "ArrowLeft") api?.scrollPrev()
        if (event.key === "ArrowRight") api?.scrollNext()
      }}
    >
      <Carousel
        setApi={setApi}
        opts={{
          startIndex: start,
          loop: true,
          duration: 20,
          breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
        }}
        // The carousel's own role descriptions are hardcoded English
        role={undefined}
        aria-roledescription={undefined}
        className="grid h-full grid-rows-[auto_minmax(0,1fr)_auto] md:grid-rows-[minmax(0,1fr)]"
      >
        <ViewerSlides
          photos={photos}
          start={start}
          api={api}
          onClose={onClose}
        />
      </Carousel>
    </DialogContent>
  )
}

function ViewerSlides({
  photos,
  start,
  api,
  onClose,
}: {
  photos: GalleryPhotoData[]
  start: number
  api: CarouselApi
  onClose: () => void
}) {
  const t = useTranslations("gallery")
  const count = photos.length
  const [current, setCurrent] = useState(start)
  // Only the photo on the screen and the ones beside it are loaded, and the
  // ones already seen stay
  const [loaded, setLoaded] = useState(() => new Set(around(start, count)))

  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      const index = api.selectedScrollSnap()
      setCurrent(index)
      setLoaded((seen) => new Set([...seen, ...around(index, count)]))
    }
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, count])

  return (
    <>
      {/* On phones a row above the photo; from md the cross is in the corner
          (over the photo's row, as are the counter and the arrows), so the
          photo gets the full height, also on a phone held sideways */}
      <div
        className="flex justify-end p-2 md:absolute md:top-4 md:right-4 md:z-10 md:p-0"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose()
        }}
      >
        <DialogTitle className="sr-only">{t("title")}</DialogTitle>
        <DialogClose
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("viewer.close")}
              className={viewerButton}
            />
          }
        >
          <XIcon />
        </DialogClose>
      </div>

      <CarouselContent
        // Sideways swipes are the carousel's, pinching zooms as usual
        className="ml-0 h-full touch-pan-y touch-pinch-zoom"
        onClick={(event) => {
          if (!(event.target as Element).closest("img")) onClose()
        }}
      >
        {photos.map((photo, index) => (
          <CarouselItem
            key={photo.id}
            aria-roledescription={undefined}
            aria-hidden={index !== current}
            className="px-4 md:px-20 md:py-4"
          >
            {/* The photo as large as fits, whole, whatever its shape */}
            <div className="[container-type:size] flex size-full items-center justify-center">
              {loaded.has(index) && (
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  loading="eager"
                  // From md the height is the limit: the screen's, at 2:3
                  sizes="(min-width: 48rem) calc((100vh - 2rem) * 0.667), 100vw"
                  placeholder="blur"
                  draggable={false}
                  style={{
                    width: `min(100cqw, 100cqh * ${photo.image.width / photo.image.height})`,
                  }}
                  className="h-auto rounded-2xl select-none"
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Under the photo on phones; from md the arrows are at its sides and
          the counter in the corner across from the cross */}
      <div className="flex items-center justify-center gap-6 p-2 md:contents">
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("viewer.previous")}
          onClick={() => api?.scrollPrev()}
          className={cn(
            viewerButton,
            "md:absolute md:inset-y-0 md:left-4 md:my-auto"
          )}
        >
          <ChevronLeftIcon />
        </Button>
        <p
          aria-hidden
          className="min-w-20 text-center font-heading text-base leading-11 font-semibold tabular-nums md:absolute md:top-4 md:left-4"
        >
          {current + 1} / {count}
        </p>
        <p aria-live="polite" className="sr-only">
          {t("viewer.position", { current: current + 1, total: count })}
        </p>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("viewer.next")}
          onClick={() => api?.scrollNext()}
          className={cn(
            viewerButton,
            "md:absolute md:inset-y-0 md:right-4 md:my-auto"
          )}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  )
}
