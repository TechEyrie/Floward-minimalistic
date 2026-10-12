import { Suspense } from "react";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CatalogView } from "@/components/product/CatalogView";
import { Container } from "@/components/ui/Container";
import { routing, type Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const shop = await getTranslations({ locale, namespace: "shop" });
  return {
    title: shop("title"),
    description: t("description"),
  };
}

function CatalogFallback() {
  return <div className="h-48 animate-pulse bg-line/30" aria-hidden />;
}

export default async function ShopPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "shop" });
  const brand = await getTranslations({ locale, namespace: "brand" });

  return (
    <Container className="py-14 lg:py-24">
      <header className="mb-14 max-w-3xl space-y-4 border-b border-line/60 pb-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          {brand("tagline")}
        </p>
        <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-6xl">
          {t("title")}
        </h1>
      </header>
      <Suspense fallback={<CatalogFallback />}>
        <CatalogView locale={locale} />
      </Suspense>
    </Container>
  );
}
