import { Container } from "@/components/ui/Container";
import { categories } from "@/data/taxonomies";
import type { CategorySlug } from "@/data/types";
import { copy } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const PILLAR_SLUGS: CategorySlug[] = ["flowers", "vases", "plants", "gifts"];

/** Bright crops — peony / rose / garden / gift */
const PILLAR_IMAGES: Record<CategorySlug, string> = {
  flowers:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=90",
  vases:
    "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=90",
  plants:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=90",
  gifts:
    "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1600&q=90",
  cakes:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  chocolates:
    "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
};

type ShopPillarsProps = {
  locale: Locale;
};

export async function ShopPillars({ locale }: ShopPillarsProps) {
  const t = await getTranslations("home");
  const pillars = PILLAR_SLUGS.map(
    (slug) => categories.find((c) => c.slug === slug)!,
  );

  return (
    <section className="relative overflow-hidden bg-[#faf6f1] py-16 md:py-24">
      <div
        className="pointer-events-none absolute -start-20 -top-10 h-[32rem] w-[32rem] rounded-full bg-blush/45 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -end-10 top-24 h-[26rem] w-[26rem] rounded-full bg-gold/30 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.42em] text-gold">
              {t("pillarsKicker")}
            </p>
            <h2 className="display-editorial mt-3 max-w-3xl font-display text-5xl leading-[0.92] text-ink md:text-6xl lg:text-[4.5rem]">
              {t("pillarsTitle")}
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-teal transition-colors hover:text-ink md:inline-flex"
          >
            {t("shopCta")} →
          </Link>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:gap-4">
          {pillars.map((item) => {
            const isHero = item.slug === "flowers";
            const isWide = item.slug === "gifts";
            return (
              <Link
                key={item.slug}
                href={`/shop/${item.slug}`}
                className={`group relative overflow-hidden bg-ink/5 ${
                  isHero
                    ? "min-h-[30rem] sm:min-h-[38rem] lg:row-span-2 lg:min-h-[44rem]"
                    : isWide
                      ? "min-h-[20rem] sm:col-span-2 sm:min-h-[24rem] lg:min-h-[26rem]"
                      : "min-h-[18rem] sm:min-h-[20.5rem] lg:min-h-[21rem]"
                }`}
              >
                <Image
                  src={PILLAR_IMAGES[item.slug]}
                  alt={copy(item.name, locale)}
                  width={1400}
                  height={1600}
                  sizes={isWide ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
                  className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[1.16] contrast-[1.08] saturate-[1.22] transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/60 via-ink/[0.12] to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 z-[3] p-7 md:p-10">
                  <p className="pillar-tile-title font-display text-3xl text-canvas drop-shadow-lg md:text-4xl lg:text-5xl">
                    {copy(item.name, locale)}
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-canvas/95 md:text-base">
                    {copy(item.blurb, locale)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
