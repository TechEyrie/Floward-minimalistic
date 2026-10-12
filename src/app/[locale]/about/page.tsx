import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const ATELIER_IMAGE =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const brand = await getTranslations("brand");

  const paragraphs = t("body").split(/(?<=\.)\s+/);

  const pullQuote =
    locale === "ar"
      ? "فخامة هادئة، تُنسَّق في الدوحة"
      : brand("tagline");

  return (
    <Container className="py-16 md:py-28">
      <article className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-line/30 ring-1 ring-line/50">
              <Image
                src={ATELIER_IMAGE}
                alt=""
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
              {brand("tagline")}
            </p>
            <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <blockquote
              className="mt-12 border-s-2 border-gold/40 ps-6 font-display text-2xl leading-snug text-ink md:text-3xl"
            >
              {pullQuote}
            </blockquote>

            <div className="mt-12 max-w-prose space-y-7 text-lg leading-[1.85] text-muted">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p>
                {locale === "ar"
                  ? "في استوديونا بالدوحة، نعمل بوتيرة هادئة: نختار الزهور صباحاً، ننسّقها بعناية، ونسلّمها كما لو كانت قطعة فنية صغيرة تستحق أن تُعرض قبل أن تُهدى."
                  : "In our Doha atelier we work at a quiet pace—choosing stems each morning, composing with care, and delivering each piece as though it were a small work of art meant to be seen before it is given."}
              </p>
              <p>
                {locale === "ar"
                  ? "نخدم المنازل والفنادق والمكاتب في قطر بالريال القطري، مع خيارات توصيل في نفس اليوم على مجموعة مختارة."
                  : "We serve homes, hotels, and offices across Qatar in QAR, with same-day options on a curated selection."}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
