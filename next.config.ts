import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  // Dev only: lets a phone open the dev server on the VPS IP with JS and hot
  // reload working. The IP lives in .env.local (ALLOWED_DEV_ORIGINS)
  allowedDevOrigins:
    process.env.ALLOWED_DEV_ORIGINS?.split(",").map((host) => host.trim()) ??
    [],
}

export default withNextIntl(nextConfig)
