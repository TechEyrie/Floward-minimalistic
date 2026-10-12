"use client";

import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";

type SearchBarProps = {
  variant: "desktop" | "expanded";
  tone?: "default" | "onHero";
  onNavigate?: () => void;
};

export function SearchBar({
  variant,
  tone = "default",
  onNavigate,
}: SearchBarProps) {
  const tNav = useTranslations("nav");
  const tSearch = useTranslations("search");
  const router = useRouter();
  const [query, setQuery] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    onNavigate?.();
  }

  if (variant === "expanded") {
    return (
      <form onSubmit={submit} className="flex w-full items-center gap-2">
        <label className="sr-only" htmlFor="header-search-expanded">
          {tNav("search")}
        </label>
        <input
          id="header-search-expanded"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={tSearch("placeholder")}
          className="min-w-0 flex-1 border-0 border-b border-line bg-transparent py-2 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none"
          autoFocus
        />
        <button
          type="submit"
          className="shrink-0 p-2 text-ink hover:text-teal"
          aria-label={tNav("search")}
        >
          <Search className="size-4" strokeWidth={1.25} />
        </button>
      </form>
    );
  }

  const onHero = tone === "onHero";

  return (
    <form
      onSubmit={submit}
      className={`flex items-center border px-3 py-1.5 ${
        onHero
          ? "border-white/80 bg-black/55 shadow-[0_2px_18px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-line bg-canvas/80"
      }`}
    >
      <label className="sr-only" htmlFor="header-search">
        {tNav("search")}
      </label>
      <input
        id="header-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={tSearch("placeholder")}
        className={`w-36 bg-transparent text-sm transition-[width] focus:w-48 focus:outline-none ${
          onHero
            ? "text-white placeholder:text-white/85"
            : "text-ink placeholder:text-muted"
        }`}
      />
    </form>
  );
}
