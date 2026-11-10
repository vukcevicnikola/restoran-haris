import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { FlagHeart } from "@/components/about/flag-heart"
import { buttonVariants } from "@/components/ui/button"
import { galleryPhoto } from "@/data/gallery"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// The home page's short version of /o-nama, right after the hero: a heading,
// a few sentences from the story and a button to the whole page, beside two
// photos (the bar, and a guest with a pancake tower) with the flag heart
// from /o-nama on the first one's corner. All text in Lora, like /o-nama.
export async function AboutIntro() {
  const t = await getTranslations("home.about")
  const tPhotos = await getTranslations("gallery.photos")
  const photos = [
    galleryPhoto("barCounterLongView"),
    galleryPhoto("guestWithPancakeTower"),
  ]

  return (
    // The text starts at the same left edge as the hero's heading, like every
    // section; the photos are at the right, under the text on phones
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_auto] md:gap-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl text-balance md:text-4xl">{t("title")}</h2>
        <p className="mt-4 font-heading text-lg leading-normal text-foreground md:text-xl">
          {t("text")}
        </p>
        <Link
          href="/o-nama"
          className={cn(
            buttonVariants(),
            "mt-8 h-auto gap-2 px-4 py-2.5 font-heading text-base font-semibold has-data-[icon=inline-end]:pr-4"
          )}
        >
          {t("cta")}
          <ArrowRightIcon data-icon="inline-end" />
        </Link>
      </div>
      {/* Two 2:3 photos side by side. The heart hangs over the first one's
          lower left corner, only from md (not on phones, as before). */}
      <div className="relative grid grid-cols-2 gap-3 md:w-84 md:gap-4 lg:w-120 xl:w-144">
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.image}
            alt={tPhotos(photo.id)}
            sizes="(min-width: 80rem) 17.5rem, (min-width: 64rem) 14.5rem, (min-width: 48rem) 10rem, 50vw"
            placeholder="blur"
            className="aspect-2/3 w-full rounded-3xl object-cover"
          />
        ))}
        <FlagHeart className="absolute -bottom-6 -left-8 hidden w-20 drop-shadow-lg md:block lg:-bottom-8 lg:-left-10 lg:w-28 xl:-left-12 xl:w-36" />
      </div>
    </section>
  )
}
