import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const CARE_IMAGE =
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "carePage" });
  return { title: t("title") };
}

export default async function CarePage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("carePage");
  const brand = await getTranslations("brand");

  const tips =
    locale === "ar"
      ? [
          "ضع الباقة بعيداً عن تيار التكييف المباشر ونوافذ السيارة المشمسة.",
          "غيّر الماء كل يومين واقطع الأطراف بزاوية عند تغيير الماء.",
          "أبعد الزهور عن سلة الفاكهة؛ الإيثيلين يُسرّع الذبول في حرارة قطر.",
          "للنباتات المنزلية: ضوء غير مباشر وري معتدل أفضل من الإفراط في الصيف.",
        ]
      : [
          "Keep bouquets away from direct AC vents and hot car windows.",
          "Refresh water every two days and re-cut stems at an angle when you do.",
          "Keep flowers away from fruit bowls; ethylene ripens blooms faster in Qatar heat.",
          "For houseplants: bright indirect light and measured watering beat overwatering in summer.",
        ];

  const pullQuote =
    locale === "ar"
      ? "كل باقة تستحق بضع أيام من الهدوء والضوء اللطيف."
      : "Every bouquet deserves a few quiet days of cool air and gentle light.";

  return (
    <Container className="py-16 md:py-28">
      <article className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:order-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
              {brand("tagline")}
            </p>
            <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <blockquote
              className="mt-10 border-s-2 border-blush/60 ps-6 font-display text-2xl leading-snug text-ink md:text-3xl"
            >
              {pullQuote}
            </blockquote>

            <p className="mt-10 max-w-prose text-lg leading-[1.85] text-muted">{t("body")}</p>

            <ul className="mt-12 max-w-prose space-y-6 text-base leading-[1.8] text-muted">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-4">
                  <span className="mt-2.5 h-px w-8 shrink-0 bg-gold/45" aria-hidden />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-line/30 ring-1 ring-line/50 lg:sticky lg:top-10">
              <Image
                src={CARE_IMAGE}
                alt=""
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
