export const i18n = {
  locales: ["en", "zh", "de", "fr", "es", "it", "ja", "ko", "pt", "ru", "tr"],
  defaultLocale: "en",
} as const;

export type Locale = (typeof i18n)["locales"][number];
