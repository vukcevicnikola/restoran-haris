"use client"

import Image, { type StaticImageData } from "next/image"
import { useParams } from "next/navigation"
import { type Locale, useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "@/i18n/navigation"
import { localeNames, switcherLocales } from "@/i18n/routing"
import { hreflang } from "@/lib/seo"
import { cn } from "@/lib/utils"
import gbFlag from "@/public/flags/gb.svg"
import itFlag from "@/public/flags/it.svg"
import meFlag from "@/public/flags/me.png"
import ruFlag from "@/public/flags/ru.svg"
import trFlag from "@/public/flags/tr.svg"
import { headerIconButton } from "./header-styles"

// Official national flags from Wikimedia Commons (public domain), never
// simplified or redrawn: the circle is only a crop of the real flag.
// Montenegro is a PNG rendered from the official SVG (124 KB because of the
// coat of arms). EN uses the UK flag.
const flags: Record<Locale, StaticImageData> = {
  me: meFlag,
  en: gbFlag,
  it: itFlag,
  ru: ruFlag,
  tr: trFlag,
}

// Round, 20px: object-cover crops the centre of the real flag.
const flagClass = "size-5 shrink-0 rounded-full object-cover"

// Flags whose emblem is not in the middle get their crop moved so the emblem
// is centred in the circle. Turkey's crescent and star sit towards the hoist
// (they span 15000-55318 of the 90000-wide SVG, so the crop starts at 17%).
const flagPosition: Partial<Record<Locale, string>> = {
  tr: "object-[17%_center]",
}

// Nunito's capitals sit about 0.6px above the middle of their line box, so the
// code looked higher than the flag and the menu icon next to it. A translate
// (unlike layout, it is not snapped to whole pixels) moves it onto the line.
const codeClass = "translate-y-[0.5px]"

export function LanguageSwitcher() {
  const t = useTranslations("localeSwitcher")
  const locale = useLocale()
  // On a dynamic route the pathname is the template ("/meni/[category]"), so
  // the current params go along to fill it in the new language
  const pathname = usePathname()
  const params = useParams()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isPending}
        render={
          <Button
            variant="ghost"
            className={cn(
              headerIconButton,
              "gap-2 px-2.5 font-heading text-base font-bold"
            )}
          />
        }
      >
        <Image
          src={flags[locale]}
          alt=""
          unoptimized
          loading="eager"
          className={cn(flagClass, flagPosition[locale])}
        />
        <span className="sr-only">{t("label")}</span>
        <span className={codeClass}>{locale.toUpperCase()}</span>
      </DropdownMenuTrigger>
      {/* Hugs its content (at least the button's width) so the check sits close */}
      <DropdownMenuContent
        align="end"
        className="w-auto min-w-(--anchor-width)"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(next: Locale) =>
            startTransition(() =>
              router.replace(
                // @ts-expect-error -- pathname and params always belong to
                // the current route, so they match
                { pathname, params },
                { locale: next }
              )
            )
          }
        >
          {switcherLocales.map((l) => (
            <DropdownMenuRadioItem
              key={l}
              value={l}
              lang={hreflang[l]}
              closeOnClick
              className="gap-2 font-heading font-bold"
            >
              <Image
                src={flags[l]}
                alt=""
                unoptimized
                className={cn(flagClass, flagPosition[l])}
              />
              <span className={codeClass}>{l.toUpperCase()}</span>
              <span className="sr-only">{localeNames[l]}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
