"use client";

import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";

type SearchBarProps = {
  variant: "desktop" | "expanded";
  onNavigate?: () => void;
};

export function SearchBar({ variant, onNavigate }: SearchBarProps) {
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

  return (
    <form
      onSubmit={submit}
      className="flex items-center border border-line bg-canvas/80 px-3 py-1.5"
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
        className="w-36 bg-transparent text-sm text-ink placeholder:text-muted focus:w-48 focus:outline-none transition-[width]"
      />
    </form>
  );
}
