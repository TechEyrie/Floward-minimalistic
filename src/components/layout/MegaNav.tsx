"use client";

import { categories, occasions, recipients } from "@/data/taxonomies";
import { copy } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useEffect } from "react";

export type MegaNavPanel = "explore" | "moments" | "recipients" | null;

type MegaNavProps = {
  panel: MegaNavPanel;
  onClose: () => void;
};

export function MegaNav({ panel, onClose }: MegaNavProps) {
  const tNav = useTranslations("nav");
  const tHome = useTranslations("home");
  const locale = useLocale();

  useEffect(() => {
    if (!panel) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [panel, onClose]);

  if (!panel) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-canvas petal-wash">
      <div className="flex items-center justify-end px-6 py-6 sm:px-10">
        <button
          type="button"
          onClick={onClose}
          className="transition-luxury flex items-center gap-2 p-2 text-[11px] uppercase tracking-[0.28em] text-muted hover:text-ink"
          aria-label={tNav("close")}
        >
          <X className="size-5" strokeWidth={1.25} />
          <span className="hidden sm:inline">{tNav("close")}</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3 md:gap-12 lg:gap-24">
          <section
            className={panel === "explore" ? "block" : "hidden md:block"}
            aria-labelledby="mega-explore"
          >
            <p
              id="mega-explore-kicker"
              className="kicker-gold"
            >
              {tHome("pillarsKicker")}
            </p>
            <h2
              id="mega-explore"
              className="display-editorial mt-5 font-display text-4xl text-ink lg:text-5xl"
            >
              {tNav("explore")}
            </h2>
            <ul className="mt-12 space-y-8">
              {categories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/shop/${item.slug}`}
                    onClick={onClose}
                    className="group block"
                  >
                    <span className="font-display text-xl text-ink transition-luxury group-hover:text-teal lg:text-2xl">
                      {copy(item.name, locale)}
                    </span>
                    <span className="mt-2 block max-w-xs text-sm leading-relaxed text-muted">
                      {copy(item.blurb, locale)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            className={panel === "moments" ? "block" : "hidden md:block"}
            aria-labelledby="mega-moments"
          >
            <p className="kicker-blush">{tHome("occasionsKicker")}</p>
            <h2
              id="mega-moments"
              className="display-editorial mt-5 font-display text-4xl text-ink lg:text-5xl"
            >
              {tHome("occasionsTitle")}
            </h2>
            <ul className="mt-12 space-y-5">
              {occasions.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/occasions/${item.slug}`}
                    onClick={onClose}
                    className="font-display text-xl text-ink transition-luxury hover:text-teal lg:text-2xl"
                  >
                    {copy(item.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            className={panel === "recipients" ? "block" : "hidden md:block"}
            aria-labelledby="mega-recipients"
          >
            <p className="kicker-gold">{tNav("recipients")}</p>
            <h2
              id="mega-recipients"
              className="display-editorial mt-5 font-display text-4xl text-ink lg:text-5xl"
            >
              {tNav("recipients")}
            </h2>
            <ul className="mt-12 space-y-5">
              {recipients.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/for/${item.slug}`}
                    onClick={onClose}
                    className="font-display text-xl text-ink transition-luxury hover:text-teal lg:text-2xl"
                  >
                    {copy(item.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <nav
          className="mx-auto mt-20 flex max-w-7xl flex-wrap gap-8 border-t border-line pt-10 text-[11px] uppercase tracking-[0.28em] text-muted"
          aria-label={tNav("explore")}
        >
          <Link
            href="/shop"
            onClick={onClose}
            className="transition-luxury hover:text-ink"
          >
            {tNav("allShop")}
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="transition-luxury hover:text-ink"
          >
            {tNav("about")}
          </Link>
        </nav>
      </div>
    </div>
  );
}
