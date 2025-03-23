
import { i18n } from "@/i18n.config";
import { Metadata } from "next";


type Hreflangs = {
  [key in typeof i18n.locales[number]]: string;
} & { "x-default"?: string };

export function generateHreflang(lang: string, basePath: string): Metadata["alternates"] {
  const canonicalPath = lang === "en" ? `/${basePath}` : `/${lang}/${basePath}`;
  
  const hreflangs = i18n.locales.reduce((acc: Hreflangs, locale) => {
    const path = locale === "en" ? `/${basePath}` : `/${locale}/${basePath}`;
    acc[locale] = `https://instagramtomp4.com${path}`;
    return acc;
  }, {} as Hreflangs);

  return {
    canonical: `https://instagramtomp4.com${canonicalPath}`,
    languages: {
      ...hreflangs,
      "x-default": `https://instagramtomp4.com/${basePath}`,
    },
  };
}
