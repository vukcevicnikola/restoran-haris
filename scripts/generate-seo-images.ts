import fs from "fs"
import sharp from "sharp"

// The images for sharing and for browsers, made from the logo and the
// client's photos (`npm run seo:images`; the output is committed). sharp
// comes with Next, which uses it for image optimisation.
// - public/og/<page>.jpg: one 1200x630 share image per page, the same in
//   every language (no text: the share card shows the translated title).
//   The badge on maroon, like the header, beside two photos.
// - public/og/menu/<slug>.jpg: one per menu category, the badge beside the
//   category's dish photo on cream, like the menu cards.
// - app/favicon.ico, app/icon.png, app/apple-icon.png and
//   public/icons/icon-<size>.png (the web app manifest).

const W = 1200
const H = 630
const maroon = "#892e30"
const cream = "#fff2dc"
const logo = "public/logoharis.png"
const gallery = (file: string) => `public/images/gallery/haris-${file}.webp`

const pages: Record<string, [string, string]> = {
  home: [
    gallery("food-07-strawberry-pistachio-crepe-chocolate"),
    gallery("01-dining-room-tiled-floor"),
  ],
  menu: [
    gallery("food-01-burger-fries-black-plate"),
    gallery("food-04-chocolate-hazelnut-crepe-wafer"),
  ],
  gallery: [
    gallery("food-03-flatbread-pizza-ham-wooden-board"),
    gallery("02-mural-arch-wall-lamp"),
  ],
  about: [
    gallery("food-06-waiter-serving-strawberry-pistachio-crepe"),
    gallery("13-mural-arches-fruit-basket"),
  ],
  contact: [
    gallery("14-bar-counter-long-view"),
    gallery("food-02-baked-eggs-clay-dish-flatbread"),
  ],
}

const jpeg = (image: ReturnType<typeof sharp>, file: string) =>
  image.jpeg({ quality: 82, mozjpeg: true }).toFile(file)

const roundedMask = (w: number, h: number, r: number) =>
  Buffer.from(
    `<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}"/></svg>`
  )

// A photo cropped to w x h with rounded corners, like the site's photos
const photo = (file: string, w: number, h: number) =>
  sharp(file)
    .resize(w, h, { fit: "cover" })
    .composite([{ input: roundedMask(w, h, 28), blend: "dest-in" }])
    .png()
    .toBuffer()

const badge = (size: number) => sharp(logo).resize(size, size).png().toBuffer()

async function pageImage(name: string, [left, right]: [string, string]) {
  const canvas = sharp({
    create: { width: W, height: H, channels: 3, background: maroon },
  })
  await jpeg(
    canvas.composite([
      { input: await badge(400), left: 90, top: 115 },
      { input: await photo(left, 290, 435), left: 560, top: 97 },
      { input: await photo(right, 290, 435), left: 870, top: 97 },
    ]),
    `public/og/${name}.jpg`
  )
}

// The categories and their photos, read from data/menu/index.ts (it imports
// the photos, so it cannot be imported here)
function categoryPhotos() {
  const src = fs.readFileSync("data/menu/index.ts", "utf8")
  const files = new Map(
    [...src.matchAll(/^import (\w+) from "@\/(public\/images\/[^"]+)"/gm)].map(
      (m) => [m[1], m[2]]
    )
  )
  return [
    ...src.matchAll(
      /slug: "([^"]+)"[\s\S]*?image: (\w+),\n(\s*transparent: true)?/g
    ),
  ].map((m) => ({ slug: m[1], file: files.get(m[2])!, transparent: !!m[3] }))
}

async function categoryImage(slug: string, file: string, transparent: boolean) {
  // Cut-outs are shown whole, the others as a circle, like on the menu
  // cards. Never enlarged: some cut-outs are small.
  const dish = transparent
    ? await sharp(file)
        .resize(640, 460, { fit: "inside", withoutEnlargement: true })
        .png()
        .toBuffer()
    : await sharp(file)
        .resize(440, 440, { fit: "cover" })
        .composite([{ input: roundedMask(440, 440, 220), blend: "dest-in" }])
        .png()
        .toBuffer()
  const { width = 0, height = 0 } = await sharp(dish).metadata()
  const canvas = sharp({
    create: { width: W, height: H, channels: 3, background: cream },
  })
  await jpeg(
    canvas.composite([
      { input: await badge(300), left: 80, top: 165 },
      {
        input: dish,
        left: 440 + Math.round((700 - width) / 2),
        top: Math.round((H - height) / 2),
      },
    ]),
    `public/og/menu/${slug}.jpg`
  )
}

// An .ico holding PNGs (supported by every current browser)
async function favicon(file: string, sizes: number[]) {
  const pngs = await Promise.all(
    sizes.map((s) => sharp(logo).resize(s, s).png().toBuffer())
  )
  const header = Buffer.alloc(6 + 16 * sizes.length)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(sizes.length, 4)
  let offset = header.length
  sizes.forEach((s, i) => {
    const entry = 6 + 16 * i
    header.writeUInt8(s % 256, entry)
    header.writeUInt8(s % 256, entry + 1)
    header.writeUInt16LE(1, entry + 4)
    header.writeUInt16LE(32, entry + 6)
    header.writeUInt32LE(pngs[i].length, entry + 8)
    header.writeUInt32LE(offset, entry + 12)
    offset += pngs[i].length
  })
  fs.writeFileSync(file, Buffer.concat([header, ...pngs]))
}

// iOS and Android fill a transparent background (black on iOS), so these get
// the badge on cream with some room around it
const onCream = async (size: number, file: string) =>
  sharp({
    create: { width: size, height: size, channels: 3, background: cream },
  })
    .composite([
      { input: await badge(Math.round(size * 0.84)), gravity: "center" },
    ])
    .png()
    .toFile(file)

async function main() {
  fs.mkdirSync("public/og/menu", { recursive: true })
  fs.mkdirSync("public/icons", { recursive: true })
  for (const [name, photos] of Object.entries(pages))
    await pageImage(name, photos)
  const categories = categoryPhotos()
  if (categories.length === 0) throw new Error("No categories found")
  for (const { slug, file, transparent } of categories)
    await categoryImage(slug, file, transparent)
  await favicon("app/favicon.ico", [16, 32, 48])
  await sharp(logo).resize(512, 512).png().toFile("app/icon.png")
  await onCream(180, "app/apple-icon.png")
  await onCream(192, "public/icons/icon-192.png")
  await onCream(512, "public/icons/icon-512.png")
  console.log(
    `${Object.keys(pages).length} page images, ${categories.length} category images, icons`
  )
}

main()
