"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import type {
  CategorySlug,
  ColorSlug,
  OccasionSlug,
  RecipientSlug,
} from "@/data/types";
import { filterProducts } from "@/lib/catalog";
import type { Locale } from "@/i18n/routing";
import { FilterBar } from "./FilterBar";
import { ProductGrid } from "./ProductGrid";

type CatalogViewProps = {
  locale: Locale;
  category?: CategorySlug;
  occasion?: OccasionSlug;
  recipient?: RecipientSlug;
};

function parseOccasion(value: string | null): OccasionSlug | undefined {
  const slugs: OccasionSlug[] = [
    "birthday",
    "anniversary",
    "thank-you",
    "wedding",
    "new-baby",
    "get-well",
    "ramadan",
  ];
  return slugs.includes(value as OccasionSlug)
    ? (value as OccasionSlug)
    : undefined;
}

function parseRecipient(value: string | null): RecipientSlug | undefined {
  const slugs: RecipientSlug[] = ["her", "him", "mother", "colleague"];
  return slugs.includes(value as RecipientSlug)
    ? (value as RecipientSlug)
    : undefined;
}

function parseColor(value: string | null): ColorSlug | undefined {
  const slugs: ColorSlug[] = [
    "red",
    "pink",
    "white",
    "blush",
    "cream",
    "gold",
    "green",
    "mixed",
  ];
  return slugs.includes(value as ColorSlug) ? (value as ColorSlug) : undefined;
}

const PRICE_IDS = new Set(["under-250", "250-400", "over-400"]);

export function CatalogView({
  locale,
  category,
  occasion,
  recipient,
}: CatalogViewProps) {
  const t = useTranslations("shop");
  const searchParams = useSearchParams();

  const products = useMemo(() => {
    const price = searchParams.get("price");
    return filterProducts({
      category,
      occasion: occasion ?? parseOccasion(searchParams.get("occasion")),
      recipient: recipient ?? parseRecipient(searchParams.get("recipient")),
      color: parseColor(searchParams.get("color")),
      price: price && PRICE_IDS.has(price) ? price : undefined,
      express: searchParams.get("express") === "1",
    });
  }, [category, occasion, recipient, searchParams]);

  return (
    <div className="space-y-12">
      <FilterBar
        locale={locale}
        locked={{
          category,
          occasion,
          recipient,
        }}
      />
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {t("count", { count: products.length })}
      </p>
      {products.length > 0 ? (
        <ProductGrid products={products} locale={locale} />
      ) : (
        <p className="py-20 text-center font-display text-lg text-muted">
          {t("empty")}
        </p>
      )}
    </div>
  );
}
