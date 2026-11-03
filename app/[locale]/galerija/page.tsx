import Image from "next/image"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PageHeading } from "@/components/layout/page-heading"
import { RiseInList } from "@/components/sections/rise-in-list"
import { galleryPhotos } from "@/data/gallery"

// All the client's photos of the place, in a grid of 2 columns on phones, 3
// from md and 4 from lg. They are all 2:3, so the grid stays even. The
// photos rise in as they scroll into view, like the home page's cards.
// TODO photos of the food
export default async function GalleryPage({
  params,
}: PageProps<"/[locale]/galerija">) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const t = await getTranslations("gallery")

  return (
    <main className="pb-16 md:pb-24">
      <PageHeading>{t("title")}</PageHeading>
      <div className="mx-auto max-w-7xl px-4">
        <RiseInList className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10 md:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((photo) => (
            <li
              key={photo.id}
              className="data-[reveal=in]:animate-rise-in data-[reveal=waiting]:opacity-0 data-[reveal=in]:motion-reduce:animate-fade-in"
            >
              <Image
                src={photo.image}
                alt={t(`photos.${photo.id}`)}
                // The grid is at most 1248px wide: 300px columns from 80rem
                sizes="(min-width: 80rem) 300px, (min-width: 64rem) 25vw, (min-width: 48rem) 33vw, 50vw"
                placeholder="blur"
                className="aspect-2/3 w-full rounded-2xl object-cover"
              />
            </li>
          ))}
        </RiseInList>
      </div>
    </main>
  )
}
