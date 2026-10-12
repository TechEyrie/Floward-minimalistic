import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const WATERMARK =
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80";

type DeliveryStoryProps = {
  locale: Locale;
};

export async function DeliveryStory({ locale: _locale }: DeliveryStoryProps) {
  const t = await getTranslations("home");

  return (
    <section className="relative overflow-hidden section-separator-blush py-24 md:py-32">
      <Image
        src={WATERMARK}
        alt=""
        width={1600}
        height={1067}
        className="pointer-events-none absolute -end-24 top-1/2 z-0 w-[min(52rem,90vw)] -translate-y-1/2 opacity-[0.06] object-cover"
        aria-hidden
      />
      <Container className="relative z-[1] max-w-2xl">
        <p className="kicker-blush">{t("deliveryKicker")}</p>
        <h2 className="display-editorial mt-5 font-display text-4xl text-ink md:text-5xl">
          {t("deliveryTitle")}
        </h2>
        <p className="mt-12 text-lg leading-[1.8] text-muted md:text-xl md:leading-[1.85]">
          {t("deliveryBody")}{" "}
          <span className="text-ink/70">{t("deliveryNote")}</span>
        </p>
      </Container>
    </section>
  );
}
