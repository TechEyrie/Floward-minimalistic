import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/ui/Container";
import { featuredProducts } from "@/lib/catalog";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type FeaturedGridProps = {
  locale: Locale;
};

export async function FeaturedGrid({ locale }: FeaturedGridProps) {
  const t = await getTranslations("home");
  const items = featuredProducts();

  return (
    <section className="relative section-separator-blush py-24 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 petal-wash-strong opacity-90"
        aria-hidden
      />
      <Container className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="kicker-blush">{t("featuredKicker")}</p>
            <h2 className="display-editorial mt-5 font-display text-4xl text-ink md:text-5xl">
              {t("featuredTitle")}
            </h2>
          </div>
          <Link
            href="/shop"
            className="transition-luxury shrink-0 text-xs uppercase tracking-[0.28em] text-gold hover:text-teal"
          >
            {t("featuredCta")}
          </Link>
        </div>
        <div className="mt-20 grid gap-14 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-20">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
