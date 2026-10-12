"use client";

import { ProductGrid } from "@/components/product/ProductGrid";
import { filterProducts } from "@/lib/catalog";
import type { Locale } from "@/i18n/routing";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

type SearchPageClientProps = {
  locale: Locale;
};

export function SearchPageClient({ locale }: SearchPageClientProps) {
  const t = useTranslations("search");
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const trimmed = query.trim();
  const results = trimmed ? filterProducts({ query: trimmed }) : [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    if (!q) {
      router.push("/search");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <label className="sr-only" htmlFor="search-page-input">
          {t("title")}
        </label>
        <input
          id="search-page-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("placeholder")}
          className="w-full border-0 border-b border-line/80 bg-transparent py-4 font-display text-2xl text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none md:text-3xl"
        />
      </form>

      {trimmed ? (
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          {t("results", { count: results.length })}
        </p>
      ) : null}

      {trimmed && results.length === 0 ? (
        <p className="mt-14 font-display text-lg text-muted">{t("empty")}</p>
      ) : null}

      {results.length > 0 ? (
        <div className="mt-14">
          <ProductGrid products={results} locale={locale} />
        </div>
      ) : null}
    </div>
  );
}
