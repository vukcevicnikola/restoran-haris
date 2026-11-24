import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { PhotoGallery } from "@/components/gallery/photo-gallery"
import { PageHeading } from "@/components/layout/page-heading"
import { JsonLd } from "@/components/seo/json-ld"
import { galleryPhotos } from "@/data/gallery"
import { site } from "@/data/site"
import { localizedUrl, pageMetadata } from "@/lib/seo"
import { breadcrumbs, imageGallery } from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/galerija">): Promise<Metadata> {
  const locale = (await params).locale as Locale
  const t = await getTranslations({ locale, namespace: "meta.gallery" })
  return pageMetadata({
    locale,
    href: "/galerija",
    title: t("title"),
    description: t("description", { name: site.fullName }),
    image: "/og/gallery.jpg",
  })
}

// All the client's photos, the food first, then the moments with guests, then
// the place, in a grid (photo-gallery.tsx) of 2 columns on phones, 3 from md
// and 4 from lg. A photo opens full screen, where the others can be swiped
// through.
export default async function GalleryPage({
  params,
}: PageProps<"/[locale]/galerija">) {
  const locale = (await params).locale as Locale
  setRequestLocale(locale)
  const t = await getTranslations("gallery")
  const tNav = await getTranslations("nav")

  return (
    <main className="pb-16 md:pb-24">
      <JsonLd
        data={[
          imageGallery(locale, t("title"), (id) => t(`photos.${id}`)),
          breadcrumbs([
            { name: site.fullName, url: localizedUrl(locale, "/") },
            { name: tNav("gallery"), url: localizedUrl(locale, "/galerija") },
          ]),
        ]}
      />
      <PageHeading>{t("title")}</PageHeading>
      <div className="mx-auto max-w-7xl px-4">
        <PhotoGallery
          rise
          // The grid is at most 1248px wide: 300px columns from 80rem
          sizes="(min-width: 80rem) 300px, (min-width: 64rem) 25vw, (min-width: 48rem) 33vw, 50vw"
          className="mt-8 md:mt-10 md:grid-cols-3 lg:grid-cols-4"
          photos={galleryPhotos.map(({ id, image }) => ({
            id,
            image,
            alt: t(`photos.${id}`),
          }))}
        />
      </div>
    </main>
  )
}
