import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { FlagHeart } from "@/components/about/flag-heart"
import { buttonVariants } from "@/components/ui/button"
import { galleryPhoto } from "@/data/gallery"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// The home page's short version of /o-nama, right after the hero: a heading,
// a few sentences from the story and a button to the whole page, beside a
// photo of the place with the flag heart from /o-nama on its corner. All
// text in Lora, like /o-nama.
export async function AboutIntro() {
  const t = await getTranslations("home.about")
  const tPhotos = await getTranslations("gallery.photos")
  const photo = galleryPhoto("barCounterMuralFruitBasket")

  return (
    // The text starts at the same left edge as the hero's heading, like every
    // section; the photo is at the right, under the text on phones
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
      {/* The heart hangs over the photo's lower left corner, only from md
          (not on phones, as before) */}
      <div className="relative md:w-72 lg:w-96">
        <Image
          src={photo.image}
          alt={tPhotos(photo.id)}
          sizes="(min-width: 64rem) 24rem, (min-width: 48rem) 18rem, 100vw"
          placeholder="blur"
          className="aspect-4/3 w-full rounded-3xl object-cover md:aspect-4/5"
        />
        <FlagHeart className="absolute -bottom-8 -left-10 hidden w-28 drop-shadow-lg md:block lg:-left-12 lg:w-36" />
      </div>
    </section>
  )
}
