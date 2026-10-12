import type { Locale } from "@/i18n/routing";

export function formatQar(amount: number, locale: Locale | string) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-QA" : "en-QA", {
    style: "currency",
    currency: "QAR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function copy<T extends { en: string; ar: string }>(
  value: T,
  locale: Locale | string,
) {
  return locale === "ar" ? value.ar : value.en;
}
