"use client"

import Image, { type StaticImageData } from "next/image"
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
import meFlag from "@/public/flags/me.svg"
import ruFlag from "@/public/flags/ru.svg"
import trFlag from "@/public/flags/tr.svg"
import { headerIconButton } from "./header-styles"

// Round flags from circle-flags (MIT, public/flags/LICENSE.md). EN uses the UK flag.
const flags: Record<Locale, StaticImageData> = {
  me: meFlag,
  en: gbFlag,
  it: itFlag,
  ru: ruFlag,
  tr: trFlag,
}

export function LanguageSwitcher() {
  const t = useTranslations("localeSwitcher")
  const locale = useLocale()
  const pathname = usePathname()
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
        <Image src={flags[locale]} alt="" loading="eager" className="size-5" />
        <span className="sr-only">{t("label")}</span>
        {locale.toUpperCase()}
      </DropdownMenuTrigger>
      {/* Hugs its content (at least the button's width) so the check sits close */}
      <DropdownMenuContent
        align="end"
        className="w-auto min-w-(--anchor-width)"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(next: Locale) =>
            startTransition(() => router.replace(pathname, { locale: next }))
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
              <Image src={flags[l]} alt="" className="size-5" />
              {l.toUpperCase()}
              <span className="sr-only">{localeNames[l]}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
