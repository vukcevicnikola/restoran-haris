"use client"

import { MenuIcon, XIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { headerIconButton } from "./header-styles"
import { NavLinks } from "./nav-links"

export function MobileNav({ className }: { className?: string }) {
  const t = useTranslations("nav")
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("open")}
            className={cn(headerIconButton, className)}
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      {/* Own close button: the built-in one has a hardcoded English label */}
      <SheetContent
        showCloseButton={false}
        className="border-brand-peach bg-brand-maroon text-brand-cream"
      >
        <SheetHeader className="flex-row items-center justify-between">
          <SheetTitle className="sr-only">{t("title")}</SheetTitle>
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("close")}
                className={cn(headerIconButton, "ml-auto")}
              />
            }
          >
            <XIcon />
          </SheetClose>
        </SheetHeader>
        <NavLinks orientation="vertical" onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
