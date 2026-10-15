import fs from "fs"
import path from "path"
import * as prettier from "prettier"

// Turns a menu JSON from the client (the shape is in the README that comes
// with it) into one data file per site category, data/menu/<slug>.ts, and
// copies the photos into public/images/menu/<slug>/. Each JSON category
// becomes a section (a chip) of the site category it is given to; its id is
// the section id.
//
//   npm run menu:import -- <menu.json> <slug>=<category id>,<category id> ...
//   npm run menu:import -- data/menu/incoming/menu.json \
//     pice=kafa,sejk,milksejk,limunada,topla-cokolada dezerti=kup,desert \
//     sladoledi=sladoled
//
// It overwrites data/menu/<slug>.ts: fixes made there by hand are lost. A
// new slug's sections also have to be added to its category in
// data/menu/index.ts.

type L = { me: string; en: string }
type Img = { webp: string }
type Menu = {
  menu: { source: string; sourceDate: string }
  categories: {
    id: string
    name: L
    image: Img | null
    items: {
      name: L
      description: L | null
      flavors: { me: string[]; en: string[] } | null
      price: number
      image: Img | null
    }[]
  }[]
}

const [jsonPath, ...pageArgs] = process.argv.slice(2)
if (!jsonPath || !pageArgs.length) {
  console.log("Usage: npm run menu:import -- <menu.json> <slug>=<id>,<id> ...")
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
if (unknown.length || left.length) {
  console.log(
    `Unknown categories [${unknown.join(", ")}], not given to any page [${left.join(", ")}]`
  )
  process.exit(1)
}

const str = (s: string) => JSON.stringify(s)
const l = (x: L) => `meEn(${str(x.me)}, ${str(x.en)})`
const camel = (s: string) =>
  s.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())

const [year, month] = menu.menu.sourceDate.split("-")
const date = new Date(Number(year), Number(month) - 1).toLocaleString("en", {
  month: "long",
  year: "numeric",
})

for (const { slug, ids } of pages) {
  const photos = path.join("public/images/menu", slug)
  fs.mkdirSync(photos, { recursive: true })
  const imports = new Map<string, string>()

  // The README puts the photos in images/webp/, but they may come as webp/
  function photo(img: Img) {
    const name = path.basename(img.webp)
    const from = [path.join(dir, img.webp), path.join(dir, "webp", name)].find(
      (p) => fs.existsSync(p)
    )
    if (!from) throw new Error(`Missing photo ${img.webp}`)
    fs.copyFileSync(from, path.join(photos, name))
    const variable = camel(name.replace(/\.webp$/, ""))
    imports.set(variable, `@/${photos}/${name}`)
    return variable
  }

  const sections = ids.map((id) => {
    const c = categories.get(id)!
    const dishes = c.items.map((item) => {
      const fields = [`name: ${l(item.name)}`]
      if (item.description) fields.push(`description: ${l(item.description)}`)
      if (item.flavors) {
        const { me, en } = item.flavors
        const pairs = me.map((m, i) => `[${str(m)}, ${str(en[i])}]`)
        fields.push(`flavors: [${pairs}].map(([me, en]) => meEn(me, en))`)
      }
      fields.push(`price: ${item.price}`)
      if (item.image)
        fields.push(`image: ${photo(item.image)}`, "transparent: true")
      // The line break keeps every dish expanded, like in posni-meni.ts:
      // prettier leaves an object on one line if it is written on one
      return `{\n${fields.join(",\n")}\n}`
    })
    const image = c.image ? `image: ${photo(c.image)},` : ""
    return `{ id: ${str(id)}, title: ${l(c.name)}, ${image} dishes: [${dishes}] }`
  })

  const importLines = [...imports]
    .sort(([, a], [, b]) => a.localeCompare(b))
    .map(([variable, from]) => `import ${variable} from "${from}"`)
  const file = path.join("data/menu", `${slug}.ts`)
  const code = `import "server-only"
import { type MenuSection, meEn } from "@/data/menu/types"
${importLines.join("\n")}

// From the client's menu, ${menu.menu.source}
// (${date}), via scripts/import-menu.ts; the photos are cut out of the
// same PDF. Texts and prices are exactly as printed. The section ids are
// the category ids in the JSON.
export const ${camel(slug)}Sections: MenuSection[] = [${sections}]
`
  const options = await prettier.resolveConfig(file)
  fs.writeFileSync(
    file,
    await prettier.format(code, { ...options, filepath: file })
  )
  console.log(`${file}: ${ids.join(", ")}, ${imports.size} photos`)
}
