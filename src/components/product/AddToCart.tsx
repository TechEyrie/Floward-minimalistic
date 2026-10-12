"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";

type AddToCartProps = {
  slug: string;
  className?: string;
  compact?: boolean;
};

export function AddToCart({ slug, className = "", compact = false }: AddToCartProps) {
  const t = useTranslations("pdp");
  const cart = useTranslations("cart");
  const { add, openDrawer } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    add(slug, qty);
    openDrawer();
  };

  if (compact) {
    return (
      <div className={`flex items-center ${className}`.trim()}>
        <button
          type="button"
          onClick={handleAdd}
          className="min-h-11 flex-1 border border-ink/20 bg-ink px-6 text-sm font-medium tracking-[0.12em] text-canvas transition-colors hover:bg-ink/90"
        >
          {t("addToCart")}
        </button>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-end gap-6 ${className}`.trim()}>
      <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-muted">
        <span>{cart("qty")}</span>
        <input
          type="number"
          min={1}
          max={99}
          value={qty}
          onChange={(e) =>
            setQty(Math.max(1, Math.min(99, Number(e.target.value) || 1)))
          }
          className="w-20 border-0 border-b border-line bg-transparent px-0 py-2 text-base tabular-nums text-ink focus:border-ink focus:outline-none"
        />
      </label>
      <Button
        type="button"
        className="min-h-12 min-w-[11rem] border-ink/20 bg-ink px-8 tracking-[0.1em] hover:bg-ink/90"
        onClick={handleAdd}
      >
        {t("addToCart")}
      </Button>
    </div>
  );
}
