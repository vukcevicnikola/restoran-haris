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
    <header className="relative z-40 border-b-4 border-brand-peach bg-brand-maroon text-brand-cream">
      {/* Three columns: logo space | links | language. The two outer
          columns share the leftover space, so the links sit in the centre */}
      <div className="relative mx-auto grid h-(--header-bar) max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4">
        {/* The round badge is centred on the peach line and hangs into the
            page; pages start low enough to clear it (PageHeading, /meni) */}
        <Link
          href="/"
          className="absolute top-[calc(100%+2px)] left-4 -translate-y-1/2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-peach"
        >
          <Image
            src={logo}
            alt={site.name}
            sizes="(min-width: 768px) 136px, 96px"
            loading="eager"
            className="size-24 md:size-34"
          />
        </Link>
        <NavLinks className="col-start-2 hidden sm:block" />
        {/* col-start-3: below sm the links are hidden and would leave the
            middle column to this group */}
        <div className="col-start-3 flex items-center gap-1 justify-self-end">
          <LanguageSwitcher />
          <MobileNav className="sm:hidden" />
        </div>
      </div>
    </header>
  )
}
