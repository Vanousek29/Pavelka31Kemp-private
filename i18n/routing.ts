import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Podporované jazyky
  locales: ['cs', 'en'],
  // Výchozí jazyk – čeština (bez prefixu v URL)
  defaultLocale: 'cs',
  // cs běží bez prefixu (jp31.cz/terminy), en s prefixem (jp31.cz/en/terminy)
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
