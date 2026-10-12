import { DeliveryStory } from "@/components/home/DeliveryStory";
import { FeaturedGrid } from "@/components/home/FeaturedGrid";
import { HomeHero } from "@/components/home/HomeHero";
import { OccasionsStrip } from "@/components/home/OccasionsStrip";
import { ShopPillars } from "@/components/home/ShopPillars";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const CTA_FLORAL =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=80";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const safeLocale = locale as Locale;

  return (
    <>
      <HomeHero />
      <ShopPillars locale={safeLocale} />
      <FeaturedGrid locale={safeLocale} />
      <OccasionsStrip locale={safeLocale} />
      <DeliveryStory locale={safeLocale} />
      <section className="relative overflow-hidden bg-teal py-24 md:py-32">
        <Image
          src={CTA_FLORAL}
          alt=""
          width={2000}
          height={1333}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-20"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-teal/88 via-teal/82 to-teal/90"
          aria-hidden
        />
        <Container className="relative z-[2] max-w-2xl text-center">
          <h2 className="display-editorial font-display text-3xl text-canvas md:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mt-8 text-base leading-relaxed text-canvas/90 md:text-lg md:leading-[1.75]">
            {t("ctaBody")}
          </p>
          <Link
            href="/contact"
            className="transition-luxury mt-12 inline-flex items-center justify-center border border-canvas/45 bg-canvas/[0.07] px-10 py-4 text-sm font-medium tracking-[0.14em] text-canvas shadow-[inset_0_1px_0_rgba(244,239,232,0.12)] hover:border-canvas/70 hover:bg-canvas/15"
          >
            {t("ctaButton")}
          </Link>
        </Container>
      </section>
    </>
  );
}
