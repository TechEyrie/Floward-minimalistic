import { Container } from "@/components/ui/Container";
import { occasions } from "@/data/taxonomies";
import { copy } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const STILL_LIFE =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80";

type OccasionsStripProps = {
  locale: Locale;
};

export async function OccasionsStrip({ locale }: OccasionsStripProps) {
  const t = await getTranslations("home");

  return (
    <section className="section-separator-blush py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative floral-vignette aspect-[4/5] overflow-hidden bg-line/30">
              <Image
                src={STILL_LIFE}
                alt=""
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-luxury duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="kicker-gold">{t("occasionsKicker")}</p>
            <h2 className="display-editorial mt-4 font-display text-4xl text-ink md:text-5xl">
              {t("occasionsTitle")}
            </h2>
            <ul className="divide-blush mt-14 divide-y border-y border-blush-line">
              {occasions.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/occasions/${item.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-5 transition-luxury hover:ps-2"
                  >
                    <span className="font-display text-2xl text-ink transition-luxury group-hover:text-teal md:text-3xl">
                      {copy(item.name, locale)}
                    </span>
                    <span
                      className="text-xs uppercase tracking-[0.25em] text-gold opacity-0 transition-luxury group-hover:opacity-100"
                      aria-hidden
                    >
                      —
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
