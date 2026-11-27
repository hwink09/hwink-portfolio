import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "@/i18n/routing";
import type enMessages from "../../messages/en.json";

const loadMessages = {
  en: () => import("../../messages/en.json"),
  vi: () => import("../../messages/vi.json"),
} satisfies Record<
  (typeof routing.locales)[number],
  () => Promise<{ default: typeof enMessages }>
>;

export default getRequestConfig(async ({ locale: overrideLocale }) => {
  const locale = overrideLocale ?? (await rootLocale());
  if (!hasLocale(routing.locales, locale)) notFound();

  return { locale, messages: (await loadMessages[locale]()).default };
});
