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
process.exit(failed ? 1 : 0)
