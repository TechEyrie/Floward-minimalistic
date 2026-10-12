"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type LocaleSwitcherProps = {
  tone?: "default" | "onHero";
};

export function LocaleSwitcher({ tone = "default" }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "ar" : "en";
  const label = locale === "en" ? "العربية" : "English";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className={`text-xs uppercase tracking-[0.2em] transition-colors ${
        tone === "onHero"
          ? "bg-black/45 px-2.5 py-1.5 font-medium text-white backdrop-blur-sm hover:bg-black/60 hover:text-white"
          : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
