import { Container } from "@/components/ui/Container";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("termsTitle") };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <Container className="py-16 md:py-24">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl text-ink">{t("termsTitle")}</h1>
        <p className="mt-8 text-lg leading-relaxed text-muted">
          {t("termsBody")}
        </p>
      </article>
    </Container>
  );
}
