import { HeroScrollCue } from "@/components/home/HeroScrollCue";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

/** Gift bouquet — cream roses, berries, foliage. Unmistakably florist. */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=2400&q=90";

export async function HomeHero() {
  const t = await getTranslations("home");
  const tBrand = await getTranslations("brand");

  return (
    <section
      className="relative -mt-[4.25rem] flex h-[100svh] max-h-[100svh] items-end overflow-hidden bg-[#1a1210] pt-[4.25rem] lg:-mt-20 lg:pt-20"
      aria-label={tBrand("name")}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          width={2400}
          height={1600}
          decoding="async"
          fetchPriority="high"
          className="hero-kenburns h-full w-full object-cover object-[80%_40%] brightness-[1.1] contrast-[1.04] saturate-[1.12]"
        />
      </div>

      {/* Stronger top veil on the trailing edge — header search/locale/cart sit here */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-ink/50 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 end-0 z-[1] w-[42%] bg-gradient-to-l from-ink/35 via-ink/10 to-transparent rtl:bg-gradient-to-r"
        aria-hidden
      />

      {/*
        Open florals on the trailing ~55%.
        Copy column stays dark enough that cream roses can't fight the type.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(16,12,10,0.9)_0%,rgba(16,12,10,0.82)_28%,rgba(16,12,10,0.55)_42%,rgba(16,12,10,0.18)_58%,transparent_72%)] rtl:bg-[linear-gradient(270deg,rgba(16,12,10,0.9)_0%,rgba(16,12,10,0.82)_28%,rgba(16,12,10,0.55)_42%,rgba(16,12,10,0.18)_58%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-[linear-gradient(to_top,rgba(16,12,10,0.72)_0%,rgba(16,12,10,0.28)_50%,transparent_100%)]"
        aria-hidden
      />

      <Container className="relative z-[2] w-full pb-12 pt-6 sm:pb-14 md:pb-16 md:pt-8">
        {/* Soft type pocket — no border/radius; only for legibility over blooms */}
        <div className="max-w-xl bg-ink/55 px-5 py-6 backdrop-blur-md sm:px-7 sm:py-7 lg:max-w-2xl">
          <p className="hero-rise text-[0.7rem] font-medium uppercase tracking-[0.38em] text-gold">
            {t("kicker")}
          </p>
          <div className="relative mt-4">
            <span
              className="pointer-events-none absolute -start-3 top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:block"
              aria-hidden
            />
            <p className="display-editorial hero-rise relative font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] tracking-[-0.035em] text-canvas">
              {tBrand("name")}
            </p>
          </div>
          <div
            className="hero-rise hero-rise-delay-1 mt-4 h-[2px] w-16 bg-gold md:w-24"
            aria-hidden
          />
          <h1 className="hero-rise hero-rise-delay-2 mt-4 max-w-md font-display text-xl font-light leading-snug text-canvas sm:text-2xl md:mt-5 md:text-[1.65rem]">
            {t("heroTitle")}
          </h1>
          <p className="hero-rise hero-rise-delay-3 mt-3 max-w-md text-sm leading-relaxed text-canvas/90 md:mt-4 md:text-[0.95rem]">
            {t("heroBody")}
          </p>
          <div className="hero-rise hero-rise-delay-4 mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:gap-3">
            <Link
              href="/shop"
              className="transition-luxury inline-flex w-full items-center justify-center bg-gold px-8 py-3.5 text-sm font-semibold tracking-[0.16em] text-ink shadow-[0_12px_36px_-12px_rgba(176,137,74,0.7)] hover:bg-[#c9a05c] sm:w-auto"
            >
              {t("shopCta")}
            </Link>
            <Link
              href="/about"
              className="transition-luxury inline-flex w-full items-center justify-center border border-canvas/75 bg-canvas/10 px-8 py-3.5 text-sm font-medium tracking-[0.16em] text-canvas hover:border-canvas hover:bg-canvas/20 sm:w-auto"
            >
              {t("storyCta")}
            </Link>
          </div>
        </div>
      </Container>

      <HeroScrollCue />
    </section>
  );
}
