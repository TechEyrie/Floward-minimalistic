import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CatalogView } from "@/components/product/CatalogView";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/taxonomies";
import type { CategorySlug } from "@/data/types";
import { copy } from "@/lib/format";
import { routing, type Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string; category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

function resolveCategory(slug: string): CategorySlug | undefined {
  return categories.find((c) => c.slug === slug)?.slug;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw, category: categorySlug } = await params;
  const locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  const category = categories.find((c) => c.slug === categorySlug);
  const meta = await getTranslations({ locale, namespace: "meta" });
  if (!category) {
    return { title: meta("title") };
  }
  const name = copy(category.name, locale);
  return {
    title: `${name} | ${meta("title")}`,
    description: copy(category.blurb, locale),
  };
}

function CatalogFallback() {
  return <div className="h-48 animate-pulse bg-line/30" aria-hidden />;
}

export default async function CategoryShopPage({ params }: PageProps) {
  const { locale: raw, category: categorySlug } = await params;
  const locale: Locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  setRequestLocale(locale);

  const category = resolveCategory(categorySlug);
  if (!category) notFound();

  const meta = categories.find((c) => c.slug === category)!;

  return (
    <Container className="py-14 lg:py-24">
      <header className="mb-14 max-w-3xl space-y-4 border-b border-line/60 pb-10">
        <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-6xl">
          {copy(meta.name, locale)}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {copy(meta.blurb, locale)}
        </p>
      </header>
      <Suspense fallback={<CatalogFallback />}>
        <CatalogView locale={locale} category={category} />
      </Suspense>
    </Container>
  );
}
