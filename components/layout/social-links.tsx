import Image from "next/image"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"
import facebookLogo from "@/public/social/facebook.svg"
import instagramGlyph from "@/public/social/instagram-glyph.svg"

// Each button in its network's own colours, never the brand palette.
// Facebook: the logo's blue (#0866FF), so the logo's circle melts into the
// button and its white "f" shows. Instagram: the gradient of its logo, built
// from instagram.svg's two gradients (yellow to orange to magenta from the
// lower left, blue from the upper left), with the logo's white glyph
// (instagram-glyph.svg, the same path). The logos are the official ones
// (Wikimedia Commons "2023_Facebook_icon.svg", "Instagram_logo_2016.svg"),
// never redrawn.
const networks = [
  {
    key: "facebook",
    logo: facebookLogo,
    style: { backgroundColor: "#0866FF" },
    className: "",
  },
  {
    key: "instagram",
    logo: instagramGlyph,
    // The blue stays in the top left corner: spread over the flat pill it
    // fell on the yellow and turned grey
    style: {
      backgroundImage:
        "radial-gradient(30% 120% at 0% 0%, #3771c8 0%, #3771c8 12.8%, rgb(102 0 255 / 0) 100%), radial-gradient(120% 150% at 10% 120%, #fd5 0%, #fd5 10%, #ff543e 50%, #c837ab 100%)",
    },
    // White on the orange part is only about 3:1; a soft shadow helps
    className: "[text-shadow:0_1px_2px_rgb(0_0_0/0.25)]",
  },
] as const

// Facebook and Instagram as pill buttons with the name, in the footer, the
// mobile panel and on /kontakt
export function SocialLinks({ className }: { className?: string }) {
  const t = useTranslations("social")

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {networks.map(({ key, logo, style, className: networkClass }) => {
        // TODO the client's page URLs (data/site.ts); "#" until then
        const href = site.social[key]
        return (
          <li key={key}>
            <a
              href={href || "#"}
              {...(href && { target: "_blank", rel: "noopener noreferrer" })}
              // "Hari's Creperie na Facebooku": the visible name plus the
              // network, which the logo shows
              aria-label={t(key, { name: site.fullName })}
              style={style}
              className={cn(
                buttonVariants(),
                // The site's focus outline instead of the button's ring: it
                // is maroon on cream (/kontakt), and the footer and mobile
                // panel turn it peach
                "h-auto gap-2 px-4 py-2.5 font-heading text-base font-semibold text-white hover:brightness-90 focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid",
                networkClass
              )}
            >
              <Image src={logo} alt="" unoptimized className="size-5" />
              {site.fullName}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
