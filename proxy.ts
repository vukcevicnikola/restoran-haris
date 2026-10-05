import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Skips API routes, Next/Vercel internals and any path with a dot
  // (sitemap.xml, robots.txt, images)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
}
