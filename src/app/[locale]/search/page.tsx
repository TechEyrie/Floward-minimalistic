import { SearchPageClient } from "@/components/search/SearchPageClient";
import { Container } from "@/components/ui/Container";
import { routing, type Locale } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "search" });
  return { title: t("title") };
}

export default async function SearchPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("search");

  return (
    <Container className="py-14 md:py-20">
      <header className="mb-12 max-w-2xl border-b border-line/60 pb-8">
        <h1 className="font-display text-4xl text-ink md:text-5xl">{t("title")}</h1>
      </header>
      <Suspense fallback={null}>
        <SearchPageClient locale={locale as Locale} />
      </Suspense>
    </Container>
  );
}
