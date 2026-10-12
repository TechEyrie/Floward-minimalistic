"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/types";
import { copy } from "@/lib/format";
import type { Locale } from "@/i18n/routing";

type CareTabsProps = {
  product: Product;
  locale: Locale;
};

type TabId = "description" | "care" | "includes";

export function CareTabs({ product, locale }: CareTabsProps) {
  const t = useTranslations("pdp");
  const [tab, setTab] = useState<TabId>("description");

  const tabs: { id: TabId; label: string }[] = [
    { id: "description", label: t("description") },
    { id: "care", label: t("care") },
    { id: "includes", label: t("includes") },
  ];

  const includes = locale === "ar" ? product.includes.ar : product.includes.en;

  return (
    <div className="mt-16 space-y-10 border-t border-line/70 pt-14 lg:mt-20">
      <div className="flex flex-wrap gap-x-10 gap-y-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`border-b pb-3 font-display text-lg transition-colors ${
              tab === item.id
                ? "border-ink text-ink"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="border-t border-line/50 pt-10">
        {tab === "description" ? (
          <p className="max-w-2xl text-base leading-[1.85] text-muted md:text-lg">
            {copy(product.description, locale)}
          </p>
        ) : null}

        {tab === "care" ? (
          <p className="max-w-2xl text-base leading-[1.85] text-muted md:text-lg">
            {copy(product.care, locale)}
          </p>
        ) : null}

        {tab === "includes" ? (
          <div className="max-w-2xl space-y-6">
            <ul className="space-y-3 text-base leading-relaxed text-muted">
              {includes.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-gold/50" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {product.dimensions ? (
              <p className="text-sm tracking-wide text-muted">
                {t("dimensions")}: {t("height")} {product.dimensions.h},{" "}
                {t("width")} {product.dimensions.w}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
