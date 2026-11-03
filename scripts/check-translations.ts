import fs from "fs"

const locales = ["me", "en", "it", "ru", "tr"]

const flat = (o: object, p = ""): string[] =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === "object" ? flat(v, `${p}${k}.`) : [`${p}${k}`]
  )
const load = (l: string) =>
  new Set(flat(JSON.parse(fs.readFileSync(`messages/${l}.json`, "utf8"))))

const base = load("me")
let failed = false

for (const l of locales.slice(1)) {
  const keys = load(l)
  const missing = [...base].filter((k) => !keys.has(k))
  const extra = [...keys].filter((k) => !base.has(k))
  if (missing.length || extra.length) {
    failed = true
    console.log(
      `${l}: missing [${missing.join(", ")}] extra [${extra.join(", ")}]`
    )
  }
}
console.log(
  failed ? "Translation keys do NOT match." : "All translation files match."
)

// The menu: every Montenegrin text in data/menu/*.ts (the first argument of
// meEn() and untranslated(), and the flavour pairs) needs an entry in each
// language's dictionary in data/menu/translations/. Both are read as text:
// the menu files import photos and the dictionaries "server-only". A string
// literal is in double quotes, or single ones when it contains double quotes.
const q = String.raw`("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')`
const str = (literal: string) => literal.slice(1, -1).replace(/\\(.)/g, "$1")
const menuTexts = new Set<string>()
for (const f of fs.readdirSync("data/menu")) {
  if (!f.endsWith(".ts") || f === "types.ts" || f === "index.ts") continue
  const src = fs.readFileSync(`data/menu/${f}`, "utf8")
  for (const m of src.matchAll(
    new RegExp(String.raw`(?:meEn|untranslated)\(\s*${q}`, "g")
  ))
    menuTexts.add(str(m[1]))
  for (const block of src.matchAll(/flavors: \[([\s\S]*?)\]\.map/g))
    for (const m of block[1].matchAll(new RegExp(String.raw`\[\s*${q},`, "g")))
      menuTexts.add(str(m[1]))
}
let menuFailed = false
for (const f of fs.readdirSync("data/menu/translations")) {
  const src = fs.readFileSync(`data/menu/translations/${f}`, "utf8")
  const keys = new Set(
    [...src.matchAll(new RegExp(String.raw`^\s*(?:${q}|([^\s:"']+)):`, "gm"))]
      .filter((m) => !m[0].trim().startsWith("//"))
      .map((m) => (m[1] !== undefined ? str(m[1]) : m[2]))
  )
  const missing = [...menuTexts].filter((t) => !keys.has(t))
  const unused = [...keys].filter((k) => !menuTexts.has(k))
  if (missing.length) {
    menuFailed = true
    console.log(`menu ${f}: missing [${missing.join(" | ")}]`)
  }
  if (unused.length) console.log(`menu ${f}: unused [${unused.join(" | ")}]`)
}
console.log(
  menuFailed
    ? "Menu translations are NOT complete."
    : `All menu translations are complete (${menuTexts.size} texts).`
)
process.exit(failed || menuFailed ? 1 : 0)
