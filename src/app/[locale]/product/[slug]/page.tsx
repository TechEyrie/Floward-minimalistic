import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AddToCart } from "@/components/product/AddToCart";
import { CareTabs } from "@/components/product/CareTabs";
import { ImageGallery } from "@/components/product/ImageGallery";
import { PairWith } from "@/components/product/PairWith";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { getProduct } from "@/lib/catalog";
import { copy, formatQar } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  const product = getProduct(slug);
  if (!product) {
    const meta = await getTranslations({ locale, namespace: "meta" });
    return { title: meta("title") };
  }
  return {
    title: copy(product.name, locale),
    description: copy(product.description, locale),
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  const locale: Locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  setRequestLocale(locale);

  const product = getProduct(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: "pdp" });
  const shop = await getTranslations({ locale, namespace: "shop" });
  const name = copy(product.name, locale);

  return (
    <>
      <Container className="pb-32 pt-10 lg:pb-24 lg:pt-16">
        <nav
          className="mb-12 text-[11px] uppercase tracking-[0.18em] text-muted"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-ink">
            {t("breadcrumbHome")}
          </Link>
          <span className="mx-2 text-line">/</span>
          <Link href="/shop" className="transition-colors hover:text-ink">
            {shop("title")}
          </Link>
          <span className="mx-2 text-line">/</span>
          <span className="text-ink">{name}</span>
        </nav>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <ImageGallery images={product.images} alt={name} />

          <div className="flex flex-col gap-10 lg:sticky lg:top-10 lg:self-start">
            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-[1.08] text-ink md:text-5xl lg:text-[3.25rem]">
                {name}
              </h1>
              <p className="font-display text-2xl text-ink/90">
                {formatQar(product.priceQar, locale)}
              </p>
              {product.express ? (
                <p className="flex flex-wrap items-center gap-3 text-sm">
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold"
                  >
                    {shop("express")}
                  </span>
                  <span className="text-muted">{t("expressArrives")}</span>
                </p>
              ) : null}
            </div>

            <AddToCart slug={product.slug} />

            <p className="border-t border-line/60 pt-6 text-sm leading-relaxed text-muted">
              {t("deliveryNote")}
            </p>
          </div>
        </div>

        <CareTabs product={product} locale={locale} />

        <PairWith product={product} locale={locale} />
        <RelatedProducts product={product} locale={locale} />
      </Container>

      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-canvas/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-base text-ink">{name}</p>
            <p className="text-sm text-muted">
              {formatQar(product.priceQar, locale)}
            </p>
          </div>
          <AddToCart slug={product.slug} compact className="shrink-0 max-w-[55%]" />
        </div>
      </div>
    </>
  );
}
