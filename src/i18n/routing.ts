import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
  // Publish alternates through page metadata once the site URL is configured.
  alternateLinks: false,
});
