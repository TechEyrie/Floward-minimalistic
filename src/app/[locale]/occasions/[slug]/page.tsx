import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CatalogView } from "@/components/product/CatalogView";
import { Container } from "@/components/ui/Container";
import { occasions } from "@/data/taxonomies";
import type { OccasionSlug } from "@/data/types";
import { copy } from "@/lib/format";
import { routing, type Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return occasions.map((occasion) => ({ slug: occasion.slug }));
}

function resolveOccasion(slug: string): OccasionSlug | undefined {
  return occasions.find((o) => o.slug === slug)?.slug;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  const occasion = occasions.find((o) => o.slug === slug);
  const meta = await getTranslations({ locale, namespace: "meta" });
  if (!occasion) {
    return { title: meta("title") };
  }
  const name = copy(occasion.name, locale);
  return {
    title: `${name} | ${meta("title")}`,
    description: meta("description"),
  };
}

function CatalogFallback() {
  return <div className="h-48 animate-pulse bg-line/30" aria-hidden />;
}

export default async function OccasionPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  const locale: Locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  setRequestLocale(locale);

  const occasion = resolveOccasion(slug);
  if (!occasion) notFound();

  const meta = occasions.find((o) => o.slug === occasion)!;

  return (
    <Container className="py-14 lg:py-24">
      <header className="mb-14 max-w-3xl border-b border-line/60 pb-10">
        <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-6xl">
          {copy(meta.name, locale)}
        </h1>
      </header>
      <Suspense fallback={<CatalogFallback />}>
        <CatalogView locale={locale} occasion={occasion} />
      </Suspense>
    </Container>
  );
}
