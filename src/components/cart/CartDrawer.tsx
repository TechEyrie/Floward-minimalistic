"use client";

import Image from "next/image";
import { getProduct } from "@/lib/catalog";
import { copy, formatQar } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Minus, Plus, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const t = useTranslations("cart");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const { items, isOpen, closeDrawer, remove, setQty, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeDrawer]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const subtotal = items.reduce((sum, line) => {
    const product = getProduct(line.slug);
    return sum + (product?.priceQar ?? 0) * line.qty;
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <button
        type="button"
        className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]"
        aria-label={tNav("close")}
        onClick={closeDrawer}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("title")}
        className="relative ms-auto flex h-full w-full max-w-md flex-col bg-canvas shadow-2xl ring-1 ring-line/60"
      >
        <header className="flex items-center justify-between gap-4 px-6 py-5 hairline-b">
          <h2 className="font-display text-2xl text-ink">
            {t("title")}
            {count > 0 ? (
              <span className="ms-2 font-sans text-sm font-normal text-muted">
                ({count})
              </span>
            ) : null}
          </h2>
          <button
            type="button"
            onClick={closeDrawer}
            className="p-2 text-ink transition-colors hover:text-teal"
            aria-label={tNav("close")}
          >
            <X className="size-5" strokeWidth={1.25} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-start gap-5 py-10">
              <p className="text-muted leading-relaxed">{t("empty")}</p>
              <Link
                href="/shop"
                onClick={closeDrawer}
                className="border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-ink"
              >
                {t("emptyCta")}
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-line/80">
              {items.map((line) => {
                const product = getProduct(line.slug);
                const name = product ? copy(product.name, locale) : line.slug;
                const price = product?.priceQar ?? 0;
                const thumb = product?.images[0];

                return (
                  <li key={line.slug} className="flex gap-4 py-5">
                    {thumb ? (
                      <Link
                        href={`/product/${line.slug}`}
                        onClick={closeDrawer}
                        className="relative h-20 w-16 shrink-0 overflow-hidden bg-line/40"
                      >
                        <Image
                          src={thumb}
                          alt=""
                          width={64}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                    ) : (
                      <div className="h-20 w-16 shrink-0 bg-line/40" aria-hidden />
                    )}
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/product/${line.slug}`}
                        onClick={closeDrawer}
                        className="font-display text-lg leading-snug text-ink transition-colors hover:text-teal"
                      >
                        {name}
                      </Link>
                      <p className="mt-1 text-sm text-muted">
                        {formatQar(price, locale)}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          className="flex size-8 items-center justify-center border border-line/80 text-ink transition-colors hover:border-ink/30"
                          aria-label={t("qty")}
                          onClick={() => setQty(line.slug, line.qty - 1)}
                        >
                          <Minus className="size-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="min-w-[2ch] text-center text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="flex size-8 items-center justify-center border border-line/80 text-ink transition-colors hover:border-ink/30"
                          aria-label={t("qty")}
                          onClick={() => setQty(line.slug, line.qty + 1)}
                        >
                          <Plus className="size-3.5" strokeWidth={1.5} />
                        </button>
                        <button
                          type="button"
                          className="ms-auto text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                          onClick={() => remove(line.slug)}
                        >
                          {t("remove")}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <footer className="space-y-5 px-6 py-6 hairline-t">
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                {t("subtotal")}
              </span>
              <span className="font-display text-lg tabular-nums text-ink">
                {formatQar(subtotal, locale)}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="inline-flex w-full items-center justify-center border border-line/90 bg-transparent px-5 py-3 text-sm tracking-wide text-ink transition-colors hover:border-ink/30"
              >
                {t("title")}
              </Link>
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="inline-flex w-full items-center justify-center bg-teal px-5 py-3 text-sm font-medium tracking-[0.1em] text-canvas transition-colors hover:bg-teal/90"
              >
                {t("checkout")}
              </Link>
            </div>
          </footer>
        ) : null}
      </aside>
    </div>
  );
}
