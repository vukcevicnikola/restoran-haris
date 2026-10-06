import Image from "next/image"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"
import facebookLogo from "@/public/social/facebook.svg"
import instagramLogo from "@/public/social/instagram.svg"
import { headerIconButton } from "./header-styles"

// The official logos, never redrawn or recoloured: Wikimedia Commons
// "2023_Facebook_icon.svg" and "Instagram_logo_2016.svg", as downloaded.
const networks = [
  { key: "facebook", logo: facebookLogo },
  { key: "instagram", logo: instagramLogo },
] as const

// Facebook and Instagram links for the maroon header bar and mobile panel
export function SocialLinks({ className }: { className?: string }) {
  const t = useTranslations("social")

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {networks.map(({ key, logo }) => {
        // TODO the client's page URLs (data/site.ts); "#" until then
        const href = site.social[key]
        return (
          <li key={key}>
            <a
              href={href || "#"}
              {...(href && { target: "_blank", rel: "noopener noreferrer" })}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                headerIconButton
              )}
            >
              <Image
                src={logo}
                alt={t(key, { name: site.name })}
                unoptimized
                className="size-6"
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
