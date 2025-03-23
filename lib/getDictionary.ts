import 'server-only';
import { i18n, Locale } from '@/i18n.config'; 
import { tr } from 'date-fns/locale';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
  ko: () => import('./dictionaries/ko.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  tr: () => import('./dictionaries/tr.json').then((module) => module.default),
};


export const getDictionary = async (locale: string) => {
  if (!i18n.locales.includes(locale as Locale)) {
    locale = i18n.defaultLocale; 
  }
  return dictionaries[locale as Locale]();
};