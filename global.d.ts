import type { routing } from "@/i18n/routing"
import type messages from "./messages/me.json"

// Types useLocale(), Link locales and t() keys against the real config
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
  }
}
