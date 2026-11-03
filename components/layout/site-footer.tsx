import { MapPinIcon, PhoneIcon } from "lucide-react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Separator } from "@/components/ui/separator"
import { site } from "@/data/site"
import { Link } from "@/i18n/navigation"
import logo from "@/public/logoharis.png"
import { navItems } from "./nav-items"
import { SocialLinks } from "./social-links"

const heading = "text-lg font-semibold text-brand-peach"
const link =
  "rounded-sm font-heading font-semibold transition-colors hover:text-brand-peach focus-visible:outline-2 focus-visible:outline-offset-4"

// The header's maroon bar again at the bottom of every page, under the same
// peach line: the logo with "od 1997.", the pages, the contact details and
// the social links, then the copyright. The contact column shows only what
// the client has given (data/site.ts, all TODO so far). The default maroon
// focus ring is invisible on maroon, so rings here are peach, as in the header.
export async function SiteFooter() {
  const t = await getTranslations("footer")
  const tNav = await getTranslations("nav")
  const tAbout = await getTranslations("about")
  const address = [site.street, site.city].filter(Boolean).join(", ")

  return (
    <footer className="mt-auto border-t-4 border-brand-peach bg-brand-maroon text-brand-cream [&_:focus-visible]:outline-brand-peach">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* One under the other on phones; one row from lg, the logo at the
            left and the rest at the right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex items-center gap-4 lg:me-auto">
            <Link
              href="/"
              className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Image
                src={logo}
                alt={site.name}
                sizes="96px"
                className="size-24"
              />
            </Link>
            <p className="font-heading text-xl font-semibold text-brand-peach">
              {tAbout("since")}
            </p>
          </div>
          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className={heading}>
              {t("pages")}
            </h2>
            {/* Inline, wrapping on narrow screens */}
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={link}>
                    {tNav(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {(address || site.phone) && (
            <div>
              <h2 className={heading}>{tNav("contact")}</h2>
              <ul className="mt-3 space-y-2 font-heading">
                {address && (
                  <li className="flex gap-2">
                    <MapPinIcon className="mt-1 size-4 shrink-0 text-brand-peach" />
                    {address}
                  </li>
                )}
                {site.phone && (
                  <li className="flex gap-2">
                    <PhoneIcon className="mt-1 size-4 shrink-0 text-brand-peach" />
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className={link}
                    >
                      {site.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
          <div>
            <h2 className={heading}>{t("follow")}</h2>
            <SocialLinks className="mt-3" />
          </div>
        </div>
        <Separator className="mt-10 bg-brand-cream/20 md:mt-12" />
        {/* Copyright at the left, the credit at the right (under it on
            phones). The credit is a followed backlink to the studio */}
        <div className="mt-6 flex flex-wrap justify-between gap-x-6 gap-y-2 font-heading text-sm text-brand-cream/80">
          <p>
            © {new Date().getFullYear()} {site.fullName}. {t("rights")}
          </p>
          <p>
            {t.rich("madeBy", {
              studio: site.credit.name,
              link: (chunks) => (
                <a
                  href={site.credit.url}
                  target="_blank"
                  rel="noopener"
                  className="rounded-sm font-medium text-brand-cream underline underline-offset-4 transition-colors hover:text-brand-peach focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  )
}
