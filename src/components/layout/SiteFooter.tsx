import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const tFooter = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tLegal = await getTranslations("legal");
  const tBrand = await getTranslations("brand");
  const year = new Date().getFullYear();

  const exploreLinks = [
    { href: "/shop", label: tNav("shop") },
    { href: "/occasions", label: tNav("moments") },
    { href: "/about", label: tNav("about") },
    { href: "/care", label: tNav("care") },
    { href: "/contact", label: tNav("contact") },
  ] as const;

  const legalLinks = [
    { href: "/privacy", label: tLegal("privacyTitle") },
    { href: "/terms", label: tLegal("termsTitle") },
  ] as const;

  return (
    <footer className="mt-auto hairline-t bg-canvas">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="font-display text-3xl text-ink md:text-4xl">
            {tBrand("name")}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {tFooter("blurb")}
          </p>
        </div>

        <nav
          className="mt-14 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4"
          aria-label={tFooter("explore")}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-ink transition-luxury hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden />
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-luxury hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <p className="mt-16 text-xs tracking-wide text-muted">
          © {year} {tBrand("name")} · {tNav("qatar")} · {tFooter("rights")}
        </p>
      </Container>
    </footer>
  );
}
