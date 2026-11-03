import type { MetadataRoute } from "next"
import { site } from "@/data/site"

// /manifest.webmanifest: the name, colours and icons a phone uses when the
// site is added to the home screen (icons: scripts/generate-seo-images.ts)
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.fullName,
    short_name: site.name,
    start_url: "/",
    display: "browser",
    background_color: "#fff2dc",
    theme_color: "#892e30",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
