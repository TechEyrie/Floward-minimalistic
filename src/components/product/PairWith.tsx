import { pairProducts } from "@/lib/catalog";
import type { Product } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { ProductGrid } from "./ProductGrid";

type PairWithProps = {
  product: Product;
  locale: Locale;
};

export async function PairWith({ product, locale }: PairWithProps) {
  const items = pairProducts(product);
  if (items.length === 0) return null;

  const t = await getTranslations({ locale, namespace: "pdp" });

  return (
    <section className="mt-20 space-y-12 border-t border-line/70 pt-20 lg:mt-28 lg:pt-24">
      <h2 className="font-display text-3xl text-ink md:text-4xl">{t("pairWith")}</h2>
      <ProductGrid products={items} locale={locale} />
    </section>
  );
}
