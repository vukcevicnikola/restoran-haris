import Image from "next/image"
import { site } from "@/data/site"
import { Link } from "@/i18n/navigation"
import logo from "@/public/logoharis.png"
import { LanguageSwitcher } from "./language-switcher"
import { MobileNav } from "./mobile-nav"
import { NavLinks } from "./nav-links"

export function SiteHeader() {
  return (
    // z-40 keeps the hanging logo above the page (the hero is `isolate`, so its
    // layers stay below). Popups and the mobile sheet are z-50.
    <header className="relative z-40 border-b-2 border-brand-peach bg-brand-maroon text-brand-cream">
      <div className="relative mx-auto flex h-(--header-bar) max-w-6xl items-center justify-end gap-1 px-4 sm:gap-6">
        {/* The round badge is centred on the peach line and hangs into the page */}
        <Link
          href="/"
          className="absolute top-[calc(100%+1px)] left-4 -translate-y-1/2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-peach"
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
        <LanguageSwitcher />
        <MobileNav className="sm:hidden" />
      </div>
    </header>
  )
}
