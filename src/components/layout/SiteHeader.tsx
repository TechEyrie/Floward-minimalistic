"use client";

import { CartDrawer } from "@/components/cart/CartDrawer";
import { useCart } from "@/components/cart/CartProvider";
import { Container } from "@/components/ui/Container";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MegaNav, type MegaNavPanel } from "./MegaNav";
import { SearchBar } from "./SearchBar";

const SCROLL_SOLID_THRESHOLD = 40;

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { count, openDrawer } = useCart();
  const [megaPanel, setMegaPanel] = useState<MegaNavPanel>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const headerOverHero =
    isHome && !scrolled && megaPanel === null && !searchOpen;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY >= SCROLL_SOLID_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMega(panel: MegaNavPanel) {
    setMobileOpen(false);
    setSearchOpen(false);
    setMegaPanel(panel);
  }

  function closeMega() {
    setMegaPanel(null);
  }

  const inkNav =
    "transition-luxury px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-ink hover:text-teal";
  const canvasNav =
    "transition-luxury px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-canvas/90 hover:text-canvas";

  const iconInk = "p-2 text-ink hover:text-teal";
  const iconCanvas = "p-2 text-canvas/90 hover:text-canvas";

  return (
    <>
      <header
        className={`site-header sticky top-0 z-30 transition-luxury ${
          headerOverHero
            ? "site-header--over-hero border-b border-white/20 bg-canvas/10 backdrop-blur-sm shadow-none"
            : scrolled
              ? "border-b border-blush/30 bg-canvas/[0.97] shadow-[0_10px_40px_-18px_rgba(20,24,27,0.12)] backdrop-blur-md"
              : "border-b border-blush-line bg-canvas/90 backdrop-blur-md"
        }`}
      >
        <Container>
          <div className="flex h-[4.25rem] items-center gap-4 lg:h-20">
            <div className="flex min-w-0 flex-1 items-center gap-8 lg:flex-none">
              <Link
                href="/"
                className={`font-display text-[1.35rem] tracking-[0.02em] lg:text-[1.65rem] ${
                  headerOverHero ? "text-canvas" : "text-ink"
                }`}
              >
                Maison Nura
              </Link>
              <p
                className={`hidden text-[10px] uppercase tracking-[0.28em] xl:block ${
                  headerOverHero ? "text-canvas/65" : "text-gold"
                }`}
              >
                {t("qatar")} · QAR
              </p>
            </div>

            <nav
              className="hidden flex-1 items-center justify-center gap-0.5 md:flex"
              aria-label={t("explore")}
            >
              {(
                [
                  ["explore", "explore" as const],
                  ["moments", "moments" as const],
                  ["recipients", "recipients" as const],
                ] as const
              ).map(([key, panel]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() =>
                    megaPanel === panel ? closeMega() : openMega(panel)
                  }
                  className={headerOverHero ? canvasNav : inkNav}
                  aria-expanded={megaPanel === panel}
                >
                  {t(key)}
                </button>
              ))}
            </nav>

            <div className="relative flex flex-1 items-center justify-end gap-1 sm:gap-2">
              <div className="hidden lg:block">
                <SearchBar variant="desktop" />
              </div>

              <div className="lg:hidden">
                {searchOpen ? (
                  <div className="absolute inset-x-0 top-full z-20 border-b border-line bg-canvas px-4 py-3">
                    <SearchBar
                      variant="expanded"
                      onNavigate={() => setSearchOpen(false)}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    className={headerOverHero ? iconCanvas : iconInk}
                    aria-label={t("search")}
                    onClick={() => setSearchOpen(true)}
                  >
                    <Search className="size-5" strokeWidth={1.25} />
                  </button>
                )}
              </div>

              <div className="header-locale-slot">
                <LocaleSwitcher />
              </div>

              <button
                type="button"
                onClick={openDrawer}
                className={`relative ${headerOverHero ? iconCanvas : iconInk}`}
                aria-label={t("cart")}
              >
                <ShoppingBag className="size-5" strokeWidth={1.25} />
                {count > 0 ? (
                  <span
                    className={`absolute end-0 top-0 flex size-4 items-center justify-center bg-teal text-[10px] font-medium text-canvas ${
                      headerOverHero ? "ring-2 ring-canvas/80" : ""
                    }`}
                    aria-hidden
                  >
                    {count > 9 ? "9+" : count}
                  </span>
                ) : null}
              </button>

              <button
                type="button"
                className={`${headerOverHero ? iconCanvas : iconInk} md:hidden`}
                aria-label={mobileOpen ? t("close") : t("menu")}
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMobileOpen((open) => !open);
                  setSearchOpen(false);
                }}
              >
                {mobileOpen ? (
                  <X className="size-5" strokeWidth={1.25} />
                ) : (
                  <Menu className="size-5" strokeWidth={1.25} />
                )}
              </button>
            </div>
          </div>
        </Container>

        {mobileOpen ? (
          <div className="border-t border-line bg-canvas md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {(
                [
                  ["explore", "explore" as const],
                  ["moments", "moments" as const],
                  ["recipients", "recipients" as const],
                ] as const
              ).map(([key, panel]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => openMega(panel)}
                  className="py-3 text-start text-sm uppercase tracking-[0.25em] text-ink"
                >
                  {t(key)}
                </button>
              ))}
              <Link
                href="/shop"
                className="py-3 text-sm uppercase tracking-[0.25em] text-muted"
                onClick={() => setMobileOpen(false)}
              >
                {t("allShop")}
              </Link>
            </Container>
          </div>
        ) : null}
      </header>

      <MegaNav panel={megaPanel} onClose={closeMega} />
      <CartDrawer />
    </>
  );
}
