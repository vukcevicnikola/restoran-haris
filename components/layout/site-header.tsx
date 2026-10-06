import Image from "next/image"
import { site } from "@/data/site"
import { Link } from "@/i18n/navigation"
import logo from "@/public/logoharis.png"
import { LanguageSwitcher } from "./language-switcher"
import { MobileNav } from "./mobile-nav"
import { NavLinks } from "./nav-links"
import { SocialLinks } from "./social-links"

export function SiteHeader() {
  return (
    // z-40 keeps the hanging logo above the page (the hero is `isolate`, so its
    // layers stay below). Popups and the mobile sheet are z-50.
    <header className="relative z-40 border-b-2 border-brand-peach bg-brand-maroon text-brand-cream">
      <div className="relative mx-auto flex h-(--header-bar) max-w-6xl items-center justify-end gap-1 px-4 sm:gap-6">
        {/* The round badge is centred on the peach line and hangs into the page */}
        <Link
          href="/"
          className="absolute top-[calc(100%+0px)] left-4 -translate-y-1/2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-peach"
        >
          <Image
            src={logo}
            alt={site.name}
            sizes="(min-width: 768px) 136px, 96px"
            loading="eager"
            className="h-24 w-auto md:h-34"
          />
        </Link>
        <NavLinks className="hidden sm:block" />
        {/* Kept close together: at 640px, with the four links, a wider gap
            would push "Meni" into the badge. Below 360px the logos would
            reach the badge, so there they are only in the mobile panel. */}
        <div className="flex items-center gap-1">
          <SocialLinks className="hidden min-[360px]:flex" />
          <LanguageSwitcher />
          <MobileNav className="sm:hidden" />
        </div>
      </div>
    </header>
  )
}
