"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  colors,
  occasions,
  priceBands,
  recipients,
} from "@/data/taxonomies";
import type {
  CategorySlug,
  ColorSlug,
  OccasionSlug,
  RecipientSlug,
} from "@/data/types";
import { copy } from "@/lib/format";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type FilterBarProps = {
  locale: Locale;
  locked?: {
    category?: CategorySlug;
    occasion?: OccasionSlug;
    recipient?: RecipientSlug;
  };
};

type FilterKey = "occasion" | "recipient" | "color" | "price" | "express";

export function FilterBar({ locale, locked }: FilterBarProps) {
  const t = useTranslations("shop");
  const nav = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = useMemo(
    () => ({
      occasion: locked?.occasion ?? searchParams.get("occasion") ?? "",
      recipient: locked?.recipient ?? searchParams.get("recipient") ?? "",
      color: searchParams.get("color") ?? "",
      price: searchParams.get("price") ?? "",
      express: searchParams.get("express") === "1",
    }),
    [searchParams, locked],
  );

  const pushParams = useCallback(
    (mutate: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(searchParams.toString());
      mutate(params);
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const toggle = (key: FilterKey, value: string) => {
    pushParams((params) => {
      const current = params.get(key);
      if (current === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
  };

  const toggleExpress = () => {
    pushParams((params) => {
      if (params.get("express") === "1") {
        params.delete("express");
      } else {
        params.set("express", "1");
      }
    });
  };

  const clearAll = () => {
    router.push(pathname, { scroll: false });
  };

  const chipClass = (on: boolean) =>
    `shrink-0 border-b pb-1 text-sm tracking-wide transition-colors ${
      on
        ? "border-ink text-ink"
        : "border-transparent text-muted hover:border-line hover:text-ink"
    }`;

  const hasUrlFilters =
    (!locked?.occasion && Boolean(searchParams.get("occasion"))) ||
    (!locked?.recipient && Boolean(searchParams.get("recipient"))) ||
    Boolean(searchParams.get("color")) ||
    Boolean(searchParams.get("price")) ||
    searchParams.get("express") === "1";

  const rowLabel =
    "w-full text-[10px] font-medium uppercase tracking-[0.28em] text-muted/90 sm:w-auto sm:pe-4";

  const rowWrap = "flex flex-wrap items-baseline gap-x-4 gap-y-3";

  return (
    <div className="space-y-8 border-b border-line/80 pb-10">
      {!locked?.occasion ? (
        <div className={rowWrap}>
          <span className={rowLabel}>{nav("moments")}</span>
          {occasions.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={chipClass(active.occasion === item.slug)}
              onClick={() => toggle("occasion", item.slug)}
            >
              {copy(item.name, locale)}
            </button>
          ))}
        </div>
      ) : null}

      {!locked?.recipient ? (
        <div className={rowWrap}>
          <span className={rowLabel}>{nav("recipients")}</span>
          {recipients.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={chipClass(active.recipient === item.slug)}
              onClick={() => toggle("recipient", item.slug)}
            >
              {copy(item.name, locale)}
            </button>
          ))}
        </div>
      ) : null}

      <div className={rowWrap}>
        <span className={rowLabel}>{t("filters")}</span>
        {colors.map((item) => (
          <button
            key={item.slug}
            type="button"
            className={chipClass(active.color === item.slug)}
            onClick={() => toggle("color", item.slug)}
          >
            {copy(item.name, locale)}
          </button>
        ))}
      </div>

      <div className={rowWrap}>
        <span className={rowLabel}>{nav("shop")}</span>
        {priceBands.map((band) => (
          <button
            key={band.id}
            type="button"
            className={chipClass(active.price === band.id)}
            onClick={() => toggle("price", band.id)}
          >
            {copy(band.label, locale)}
          </button>
        ))}
        <button
          type="button"
          className={chipClass(active.express)}
          onClick={toggleExpress}
        >
          {t("expressOnly")}
        </button>
        {hasUrlFilters ? (
          <button
            type="button"
            className="shrink-0 border-b border-transparent pb-1 text-sm text-muted transition-colors hover:border-muted hover:text-ink"
            onClick={clearAll}
          >
            {t("clear")}
          </button>
        ) : null}
      </div>
    </div>
  );
}
