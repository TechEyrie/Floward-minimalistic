import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const tSearch = await getTranslations("search");
  const tNav = await getTranslations("nav");
  const tBrand = await getTranslations("brand");

  return (
    <Container className="flex flex-1 flex-col items-start justify-center py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-muted">
        {tBrand("tagline")}
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
        {tSearch("empty")}
      </h1>
      <p className="mt-4 max-w-md text-muted">{tSearch("title")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center bg-teal px-5 py-2.5 text-sm font-medium tracking-wide text-canvas transition-colors hover:bg-teal/90"
      >
        {tNav("home")}
      </Link>
    </Container>
  );
}
