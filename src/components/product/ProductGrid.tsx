import type { Product } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  locale: Locale;
};

export function ProductGrid({ products, locale }: ProductGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-y-20">
      {products.map((product) => (
        <li key={product.slug}>
          <ProductCard product={product} locale={locale} />
        </li>
      ))}
    </ul>
  );
}
