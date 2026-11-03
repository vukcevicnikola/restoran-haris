import type { MetadataRoute } from "next"
import { site } from "@/data/site"

// /robots.txt. Vercel preview deployments are closed to crawlers, so only
// the production site is indexed. host: the main domain, for Yandex.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production")
    return { rules: { userAgent: "*", disallow: "/" } }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
