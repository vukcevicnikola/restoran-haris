import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { PhotoGallery } from "@/components/gallery/photo-gallery"
import { buttonVariants } from "@/components/ui/button"
import { type GalleryPhoto, galleryPhoto } from "@/data/gallery"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// The grid is at most 1248px wide: 300px columns from 80rem
const sizes = "(min-width: 80rem) 300px, (min-width: 48rem) 25vw, 50vw"

// "Naš restoran": four photos from the gallery (2 x 2 on phones, 4 in a row
// from md) and a button to the rest, on cream. On /o-nama and /kontakt, each
// with its own photos, and on the home page with a title of its own; the page
// sets the padding. With viewer (the home page) a photo opens full screen, like
// on /galerija, where these four can be swiped through.
export async function PlacePhotos({
  photos,
  title,
  viewer = false,
  className,
}: {
  photos: GalleryPhoto["id"][]
  title?: string
  viewer?: boolean
  className?: string
}) {
  const t = await getTranslations("place")
  const tPhotos = await getTranslations("gallery.photos")

  return (
    <section className={cn("mx-auto w-full max-w-7xl px-4", className)}>
      <h2 className="text-3xl text-balance md:text-4xl">
        {title ?? t("title")}
      </h2>
      {viewer ? (
        <PhotoGallery
          sizes={sizes}
          className="mt-8 md:grid-cols-4"
          photos={photos.map(galleryPhoto).map(({ id, image }) => ({
            id,
            image,
            alt: tPhotos(id),
          }))}
        />
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {photos.map(galleryPhoto).map((photo) => (
            <li key={photo.id}>
              <Image
                src={photo.image}
                alt={tPhotos(photo.id)}
                sizes={sizes}
                placeholder="blur"
                className="aspect-2/3 w-full rounded-2xl object-cover"
              />
            </li>
          ))}
        </ul>
      )}
      <Link
        href="/galerija"
        className={cn(
          buttonVariants(),
          "mt-8 h-auto gap-2 px-4 py-2.5 font-heading text-base font-semibold has-data-[icon=inline-end]:pr-4"
        )}
      >
        {t("cta")}
        <ArrowRightIcon data-icon="inline-end" />
      </Link>
    </section>
  )
}
