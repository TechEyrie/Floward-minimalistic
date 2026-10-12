import { products } from "@/data/products";
import type {
  CategorySlug,
  ColorSlug,
  OccasionSlug,
  Product,
  RecipientSlug,
} from "@/data/types";

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.category === product.category ||
          p.occasions.some((o) => product.occasions.includes(o))),
    )
    .slice(0, limit);
}

export function pairProducts(product: Product) {
  const slugs = product.pairWith ?? [];
  return slugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}

export type CatalogFilters = {
  category?: CategorySlug;
  occasion?: OccasionSlug;
  recipient?: RecipientSlug;
  color?: ColorSlug;
  price?: string;
  express?: boolean;
  query?: string;
};

export function filterProducts(filters: CatalogFilters) {
  return products.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.occasion && !p.occasions.includes(filters.occasion)) return false;
    if (filters.recipient && !p.recipient.includes(filters.recipient)) return false;
    if (filters.color && !p.colors.includes(filters.color)) return false;
    if (filters.express && !p.express) return false;
    if (filters.price === "under-250" && p.priceQar >= 250) return false;
    if (filters.price === "250-400" && (p.priceQar < 250 || p.priceQar > 400))
      return false;
    if (filters.price === "over-400" && p.priceQar <= 400) return false;
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const hay = `${p.name.en} ${p.name.ar} ${p.description.en} ${p.description.ar}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}
