"use client";

import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getProduct } from "@/lib/catalog";
import { copy, formatQar } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

type CartPageClientProps = {
  locale: Locale;
};

export function CartPageClient({ locale }: CartPageClientProps) {
  const t = useTranslations("cart");
  const { items, setQty, remove, ready } = useCart();

  const subtotal = items.reduce((sum, line) => {
    const product = getProduct(line.slug);
    return sum + (product?.priceQar ?? 0) * line.qty;
  }, 0);

  if (!ready) {
    return (
      <Container className="py-16 md:py-24">
        <h1 className="font-display text-3xl text-ink md:text-4xl">
          {t("title")}
        </h1>
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="py-16 md:py-24">
        <h1 className="font-display text-3xl text-ink md:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-muted">{t("empty")}</p>
        <Link href="/shop" className="mt-8 inline-block">
          <Button variant="ghost">{t("emptyCta")}</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-12 md:py-16">
      <h1 className="font-display text-3xl text-ink md:text-4xl">{t("title")}</h1>
      <ul className="mt-10 divide-y divide-line">
        {items.map((line) => {
          const product = getProduct(line.slug);
          const name = product
            ? copy(product.name, locale)
            : line.slug;
          const image = product?.images[0];
          const lineTotal = (product?.priceQar ?? 0) * line.qty;

          return (
            <li
              key={line.slug}
              className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start"
            >
              {image ? (
                <Link
                  href={`/product/${line.slug}`}
                  className="relative aspect-square w-full shrink-0 overflow-hidden bg-line/30 sm:w-32"
                >
                  <Image
                    src={image}
                    alt={name}
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </Link>
              ) : null}
              <div className="min-w-0 flex-1">
                <Link
                  href={`/product/${line.slug}`}
                  className="font-display text-xl text-ink hover:text-teal"
                >
                  {name}
                </Link>
                <p className="mt-1 text-sm text-muted">
                  {formatQar(product?.priceQar ?? 0, locale)}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-muted">
                    {t("qty")}
                  </span>
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center border border-line hover:border-teal"
                    aria-label="-"
                    onClick={() => setQty(line.slug, line.qty - 1)}
                  >
                    <Minus className="size-4" strokeWidth={1.25} />
                  </button>
                  <span className="min-w-[2ch] text-center tabular-nums">
                    {line.qty}
                  </span>
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center border border-line hover:border-teal"
                    aria-label="+"
                    onClick={() => setQty(line.slug, line.qty + 1)}
                  >
                    <Plus className="size-4" strokeWidth={1.25} />
                  </button>
                  <button
                    type="button"
                    className="ms-auto text-xs uppercase tracking-wider text-muted hover:text-ink"
                    onClick={() => remove(line.slug)}
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
              <p className="font-medium tabular-nums sm:text-end">
                {formatQar(lineTotal, locale)}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-muted">{t("subtotal")}</p>
          <p className="mt-1 font-display text-2xl tabular-nums">
            {formatQar(subtotal, locale)}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/shop">
            <Button variant="ghost" className="w-full sm:w-auto">
              {t("continue")}
            </Button>
          </Link>
          <Link href="/checkout">
            <Button className="w-full sm:w-auto">{t("checkout")}</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
