import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { redirect } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const STILL_LIFE_IMAGE =
  "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ sent?: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

async function sendMessage(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return;
  }

  const locale = (await getLocale()) as Locale;
  redirect({ href: "/contact?sent=1", locale });
}

export default async function ContactPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { sent } = await searchParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const brand = await getTranslations("brand");

  const inputClass =
    "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/80 focus:border-ink focus:outline-none";

  const studioLine =
    locale === "ar"
      ? "استوديو الدوحة — نرد على الرسائل خلال ساعات العمل، بعناية تليق بكل تنسيق."
      : "Doha studio—we reply during studio hours, with the same care we bring to every arrangement.";

  return (
    <Container className="py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative mb-10 aspect-[5/6] overflow-hidden bg-line/30 ring-1 ring-line/50 lg:mb-0">
            <Image
              src={STILL_LIFE_IMAGE}
              alt=""
              width={720}
              height={864}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
            {brand("tagline")}
          </p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-8 max-w-prose text-lg leading-[1.85] text-muted">{t("body")}</p>

          <blockquote className="mt-10 max-w-prose border-s border-gold/35 ps-5 font-display text-xl leading-relaxed text-ink/90">
            {studioLine}
          </blockquote>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-muted">
                {t("phone")}
              </dt>
              <dd className="mt-2 font-display text-lg text-ink">+974 4000 0000</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-muted">
                {t("email")}
              </dt>
              <dd className="mt-2 text-ink">hello@maisonnura.qa</dd>
            </div>
            <div>
              <dd className="text-muted leading-relaxed">{t("hours")}</dd>
            </div>
          </dl>

          <div className="mt-14 border-t border-line/60 pt-12">
            {sent === "1" ? (
              <p className="max-w-prose border-s-2 border-teal/30 ps-5 text-ink leading-relaxed">
                {locale === "ar"
                  ? "شكراً لتواصلك. سنعود إليك قريباً."
                  : "Thank you for your message. We will be in touch soon."}
              </p>
            ) : (
              <form action={sendMessage} className="max-w-md space-y-8">
                <label className="block text-[11px] uppercase tracking-[0.2em] text-muted">
                  {t("name")}
                  <input
                    name="name"
                    required
                    className={inputClass}
                    autoComplete="name"
                  />
                </label>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-muted">
                  {t("email")}
                  <input
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    autoComplete="email"
                  />
                </label>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-muted">
                  {t("message")}
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-y`}
                  />
                </label>
                <button
                  type="submit"
                  className="border-b border-ink pb-1 text-sm tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-teal"
                >
                  {t("send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
