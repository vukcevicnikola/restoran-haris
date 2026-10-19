import fs from "fs"
import path from "path"
import * as prettier from "prettier"

// Turns a menu JSON from the client (the shape is in the README that comes
// with it) into data files, data/menu/<file>.ts, and copies the photos into
// public/images/menu/<file>/. The file is usually a site category's slug
// (Slatka karta is still in the three files it was imported into, pice.ts,
// dezerti.ts and sladoledi.ts). Each JSON category becomes a section (a
// chip), with its id as the section id; one that has sections of its own
// (Budi sam svoj šef) becomes those sections instead. Numbered dishes are
// sorted by number.
//
//   npm run menu:import -- <menu.json> <file>=<category id>,<category id> ...
//     [--skip=<item id>,<item id>]
//   npm run menu:import -- data/menu/incoming/menu.json dorucak=dorucak \
//     potazi=potazi burgeri=burgeri pica=pica salate=salate \
//     slatke-krepe=slatke-krepe penkejk=penkejk slatke-vafle=slatke-vafle \
//     slane-krepe=slane-krepe budi-sam-svoj-sef=budi-sam-svoj-sef \
//     nasi-proizvodi=nasi-proizvodi
//
// --skip leaves out dishes that are already on the site in another
// category. It overwrites data/menu/<file>.ts: fixes made there by hand are
// lost. A new file's sections also have to be added to its category in
// data/menu/index.ts.

type L = { me: string; en: string }
type Img = { webp: string }
type Item = {
  id: string
  number?: number | null
  name: L
  description?: L | null
  flavors?: { me: string[]; en: string[] } | null
  price: number
  noPork?: boolean
  image?: Img | null
}
type Menu = {
  menu: { source: string; sourceDate?: string }
  categories: {
    id: string
    name: L
    image?: Img | null
    items: Item[]
    sections?: { id: string; name: L; items: Item[] }[]
  }[]
}

const args = process.argv.slice(2)
const skipArg = args.find((arg) => arg.startsWith("--skip="))
const skip = skipArg ? skipArg.slice("--skip=".length).split(",") : []
const [jsonPath, ...pageArgs] = args.filter((arg) => arg !== skipArg)
if (!jsonPath || !pageArgs.length) {
  console.log(
    "Usage: npm run menu:import -- <menu.json> <file>=<id>,<id> ... [--skip=<item id>,...]"
  )
  process.exit(1)
}
const dir = path.dirname(jsonPath)
const menu: Menu = JSON.parse(fs.readFileSync(jsonPath, "utf8"))
const categories = new Map(menu.categories.map((c) => [c.id, c]))

const pages = pageArgs.map((arg) => {
  const [slug, ids] = arg.split("=")
  return { slug, ids: ids.split(",") }
})
const mapped = pages.flatMap((p) => p.ids)
const unknown = mapped.filter((id) => !categories.has(id))
const left = [...categories.keys()].filter((id) => !mapped.includes(id))
const items = menu.categories.flatMap((c) => [
  ...c.items,
  ...(c.sections ?? []).flatMap((s) => s.items),
])
const unknownSkips = skip.filter((id) => !items.some((item) => item.id === id))
if (unknown.length || left.length || unknownSkips.length) {
  console.log(
    `Unknown categories [${unknown.join(", ")}], not given to any page [${left.join(", ")}], unknown items to skip [${unknownSkips.join(", ")}]`
  )
  process.exit(1)
}

const str = (s: string) => JSON.stringify(s)
const l = (x: L) => `meEn(${str(x.me)}, ${str(x.en)})`
const camel = (s: string) =>
  s.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())

let date = ""
if (menu.menu.sourceDate) {
  const [year, month] = menu.menu.sourceDate.split("-")
  date = new Date(Number(year), Number(month) - 1).toLocaleString("en", {
    month: "long",
    year: "numeric",
  })
}

for (const { slug, ids } of pages) {
  const photos = path.join("public/images/menu", slug)
  fs.mkdirSync(photos, { recursive: true })
  const imports = new Map<string, string>()
  const skipped: string[] = []

  // The README puts the photos in images/webp/, but they may come as webp/
  // or loose next to the JSON. Without them, the ones copied by an earlier
  // import are used (a re-import after fixing texts in the JSON).
  function photo(img: Img) {
    const name = path.basename(img.webp)
    const to = path.join(photos, name)
    const from = [
      path.join(dir, img.webp),
      path.join(dir, "webp", name),
      path.join(dir, name),
      to,
    ].find((p) => fs.existsSync(p))
    if (!from) throw new Error(`Missing photo ${img.webp}`)
    if (from !== to) fs.copyFileSync(from, to)
    const variable = camel(name.replace(/\.webp$/, ""))
    imports.set(variable, `@/${photos}/${name}`)
    return variable
  }

  function dish(item: Item) {
    const fields = []
    if (item.number) fields.push(`number: ${item.number}`)
    fields.push(`name: ${l(item.name)}`)
    if (item.description) fields.push(`description: ${l(item.description)}`)
    if (item.flavors) {
      const { me, en } = item.flavors
      const pairs = me.map((m, i) => `[${str(m)}, ${str(en[i])}]`)
      fields.push(`flavors: [${pairs}].map(([me, en]) => meEn(me, en))`)
    }
    fields.push(`price: ${item.price}`)
    if (item.noPork) fields.push("noPork: true")
    if (item.image)
      fields.push(`image: ${photo(item.image)}`, "transparent: true")
    // The line break keeps every dish expanded, like in posni-meni.ts:
    // prettier leaves an object on one line if it is written on one
    return `{\n${fields.join(",\n")}\n}`
  }

  function section(id: string, name: L, list: Item[], image?: Img | null) {
    const kept = list.filter((item) => !skip.includes(item.id))
    skipped.push(
      ...list.filter((item) => skip.includes(item.id)).map((i) => i.id)
    )
    // The JSON lists a category's dishes in page order, photos first; the
    // printed numbers are in order. Unnumbered dishes keep their places.
    if (kept.every((item) => item.number))
      kept.sort((a, b) => a.number! - b.number!)
    const photoField = image ? `image: ${photo(image)},` : ""
    return `{ id: ${str(id)}, title: ${l(name)}, ${photoField} dishes: [${kept.map(dish)}] }`
  }

  const sections = ids.flatMap((id) => {
    const c = categories.get(id)!
    return c.sections?.length
      ? c.sections.map((s) => section(s.id, s.name, s.items))
      : [section(id, c.name, c.items, c.image)]
  })

  const importLines = [...imports]
    .sort(([, a], [, b]) => a.localeCompare(b))
    .map(([variable, from]) => `import ${variable} from "${from}"`)
  const file = path.join("data/menu", `${slug}.ts`)
  const source = date ? `${menu.menu.source}\n// (${date})` : menu.menu.source
  const left = skipped.length
    ? `\n// Left out, as they are already in another category: ${skipped.join(", ")}.`
    : ""
  const code = `import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
${importLines.join("\n")}

// From the client's menu, ${source}, via scripts/import-menu.ts; the
// photos are cut out of the same PDF. Texts and prices are exactly as
// printed. The section ids are the category ids in the JSON.${left}
export const ${camel(slug)}Sections: MenuSection[] = [${sections}]
`
  const options = await prettier.resolveConfig(file)
  fs.writeFileSync(
    file,
    await prettier.format(code, { ...options, filepath: file })
  )
  console.log(`${file}: ${ids.join(", ")}, ${imports.size} photos`)
}
