// schema.org data for search engines (lib/structured-data.ts), as Next's
// JSON-LD guide recommends: a plain script tag, with "<" escaped so no text
// in the data can close it
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
