"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/types";
import { useCart } from "@/components/cart/CartProvider";
import { copy, formatQar } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type ProductCardProps = {
  product: Product;
  locale: Locale;
};

export function ProductCard({ product, locale }: ProductCardProps) {
  const t = useTranslations("shop");
  const { add } = useCart();
  const image = product.images[0];

  return (
    <article className="group flex flex-col gap-4">
      <Link
        href={`/product/${product.slug}`}
        className="flex flex-col gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-line/30">
          <div
            className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse 85% 75% at 50% 88%, color-mix(in srgb, var(--color-blush) 22%, transparent), transparent 68%)",
            }}
            aria-hidden
          />
          {image ? (
            <Image
              src={image}
              alt={copy(product.name, locale)}
              width={900}
              height={1125}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="relative z-[1] h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
          ) : null}
        </div>
        <div className="space-y-2.5">
          <h3 className="font-display text-xl leading-snug text-ink md:text-[1.35rem]">
            {copy(product.name, locale)}
          </h3>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-sm tracking-wide text-muted">
              {formatQar(product.priceQar, locale)}
            </span>
            {product.express ? (
              <span
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold"
              >
                {t("express")}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => add(product.slug)}
        className="self-start border-b border-transparent pb-0.5 text-sm tracking-wide text-ink/80 transition-colors hover:border-ink/40 hover:text-ink"
      >
        {t("addToCart")}
      </button>
    </article>
  );
}
