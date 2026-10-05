"use client"

import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/meni", label: "menu" },
  { href: "/o-nama", label: "about" },
  { href: "/kontakt", label: "contact" },
] as const

export function NavLinks({
  orientation = "horizontal",
  onNavigate,
  className,
}: {
  orientation?: "horizontal" | "vertical"
  onNavigate?: () => void
  className?: string
}) {
  const t = useTranslations("nav")
  const pathname = usePathname()

  return (
    <nav aria-label={t("title")} className={className}>
      <ul
        className={cn(
          "flex",
          orientation === "vertical"
            ? "flex-col gap-1 px-6"
            : "items-center gap-6 lg:gap-10"
        )}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={pathname === href ? "page" : undefined}
              className={cn(
                "rounded-sm font-heading font-bold transition-colors hover:text-brand-peach focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-peach aria-[current=page]:text-brand-peach",
                orientation === "vertical"
                  ? "block py-3 text-2xl"
                  : "text-lg md:text-xl"
              )}
            >
              {t(label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
