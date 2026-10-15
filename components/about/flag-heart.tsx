import Image from "next/image"
import { cn } from "@/lib/utils"
import flagGr from "@/public/images/about/flag-gr.webp"
import flagMe from "@/public/images/about/flag-me.webp"
import flagRs from "@/public/images/about/flag-rs.webp"

// The heart from the printed menu's first page: Serbia, Montenegro and
// Greece side by side, for where the restaurant began (Crete), went
// (Belgrade) and is. Each strip is a crop of the official flag (Wikimedia
// Commons, rasterised to 1000px high), never redrawn or stretched. The
// Montenegrin strip is wide enough for the whole coat of arms, with the
// crown clear of the heart's dip. Too narrow for theirs, Serbia shows its
// stripes from the fly end and Greece the cross of its canton.
const viewBox = "0 0 120 104"
const heart =
  "M60 102C33 82 3 62 3 34C3 15 17 3 34 3C46 3 56 9 60 15C64 9 74 3 86 3C103 3 117 15 117 34C117 62 87 82 60 102Z"
const mask = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><path d="${heart}"/></svg>`
)}")`

// Boxes in viewBox units, each covering its part of the heart. The flag
// fills its box (object-cover), so `sizes` is the flag's drawn width: about
// 1.7x the heart's width for Montenegro (2:1, 102 of 120 units high) and 1x
// for the others (3:2, 78 units high). The heart is 15rem, 18rem from sm
// and 24rem from lg.
const strips = [
  {
    flag: flagRs,
    box: [0, 2, 26, 78],
    position: "100% 50%",
    sizes: "(min-width: 64rem) 24rem, (min-width: 40rem) 18rem, 15rem",
  },
  {
    flag: flagMe,
    box: [26, 2, 68, 102],
    position: "50% 50%",
    sizes: "(min-width: 64rem) 41rem, (min-width: 40rem) 31rem, 26rem",
  },
  {
    flag: flagGr,
    box: [94, 2, 26, 78],
    position: "9% 50%",
    sizes: "(min-width: 64rem) 24rem, (min-width: 40rem) 18rem, 15rem",
  },
]

// Decorative: the story next to it says what it stands for
export function FlagHeart({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative aspect-[120/104]", className)}>
      <div
        className="absolute inset-0"
        style={{ maskImage: mask, maskSize: "100% 100%" }}
      >
        {strips.map(({ flag, box: [x, y, w, h], position, sizes }) => (
          <div
            key={flag.src}
            className="absolute"
            style={{
              left: `${(x / 120) * 100}%`,
              top: `${(y / 104) * 100}%`,
              width: `${(w / 120) * 100}%`,
              height: `${(h / 104) * 100}%`,
            }}
          >
            <Image
              src={flag}
              alt=""
              fill
              sizes={sizes}
              className="object-cover"
              style={{ objectPosition: position }}
            />
          </div>
        ))}
      </div>
      {/* The printed heart's thin light line just inside its edge */}
      <svg viewBox={viewBox} className="absolute inset-0 size-full">
        <path
          d={heart}
          fill="none"
          className="stroke-brand-cream"
          strokeWidth="1.2"
          transform="translate(3.6 3.12) scale(0.94)"
        />
      </svg>
    </div>
  )
}
