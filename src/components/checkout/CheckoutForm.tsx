"use client";

import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { getProduct } from "@/lib/catalog";
import { copy, formatQar } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useMemo, useState, type FormEvent } from "react";

type DeliverySlot = "morning" | "afternoon" | "evening";

type CheckoutFormProps = {
  locale: Locale;
};

export function CheckoutForm({ locale }: CheckoutFormProps) {
  const t = useTranslations("checkout");
  const tCart = useTranslations("cart");
  const { items, clear, ready } = useCart();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [notes, setNotes] = useState("");
  const [slot, setSlot] = useState<DeliverySlot>("morning");
  const [message, setMessage] = useState("");

  const subtotal = useMemo(
    () =>
      items.reduce((sum, line) => {
        const product = getProduct(line.slug);
        return sum + (product?.priceQar ?? 0) * line.qty;
      }, 0),
    [items],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (
      !recipientName.trim() ||
      !recipientPhone.trim() ||
      !area.trim() ||
      !street.trim() ||
      !building.trim()
    ) {
      setError(
        locale === "ar"
          ? "يرجى تعبئة جميع الحقول المطلوبة."
          : "Please complete all required fields.",
      );
      return;
    }

    if (items.length === 0) {
      setError(
        locale === "ar" ? "سلتك فارغة." : "Your cart is empty.",
      );
      return;
    }

    clear();
    setSuccess(true);
  }

  if (!ready) {
    return <div className="py-8 text-sm text-muted">{tCart("title")}</div>;
  }

  if (success) {
    return (
      <div className="max-w-lg py-8">
        <h2 className="font-display text-3xl text-ink">{t("successTitle")}</h2>
        <p className="mt-4 leading-relaxed text-muted">{t("successBody")}</p>
        <Link href="/shop" className="mt-8 inline-block">
          <Button>{t("successCta")}</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-8">
        <p className="text-muted">{tCart("empty")}</p>
        <Link href="/shop" className="mt-6 inline-block">
          <Button variant="ghost">{tCart("emptyCta")}</Button>
        </Link>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-10">
        <fieldset className="space-y-4">
          <legend className="font-display text-xl text-ink">{t("recipient")}</legend>
          <label className="block text-sm">
            {t("recipientName")}
            <input
              required
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className={inputClass}
              autoComplete="name"
            />
          </label>
          <label className="block text-sm">
            {t("recipientPhone")}
            <input
              required
              type="tel"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              className={inputClass}
              autoComplete="tel"
            />
          </label>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-display text-xl text-ink">{t("address")}</legend>
          <label className="block text-sm">
            {t("area")}
            <input
              required
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block text-sm">
            {t("street")}
            <input
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block text-sm">
            {t("building")}
            <input
              required
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block text-sm">
            {t("notes")}
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className={inputClass}
            />
          </label>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="font-display text-xl text-ink">{t("slot")}</legend>
          {(
            [
              ["morning", "slotMorning"],
              ["afternoon", "slotAfternoon"],
              ["evening", "slotEvening"],
            ] as const
          ).map(([value, labelKey]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="radio"
                name="slot"
                value={value}
                checked={slot === value}
                onChange={() => setSlot(value)}
                className="size-4 accent-teal"
              />
              {t(labelKey)}
            </label>
          ))}
        </fieldset>

        <label className="block text-sm">
          {t("message")}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("messagePlaceholder")}
            rows={4}
            className={inputClass}
          />
        </label>

        {error ? (
          <p className="text-sm text-ink" role="alert">{error}</p>
        ) : null}

        <Button type="submit" className="w-full sm:w-auto">
          {t("place")}
        </Button>
      </div>

      <aside className="hairline lg:p-8">
        <h2 className="font-display text-xl text-ink">{t("review")}</h2>
        <ul className="mt-6 space-y-4">
          {items.map((line) => {
            const product = getProduct(line.slug);
            const name = product
              ? copy(product.name, locale)
              : line.slug;
            const price = product?.priceQar ?? 0;
            return (
              <li
                key={line.slug}
                className="flex justify-between gap-4 text-sm"
              >
                <span>
                  {name}
                  <span className="text-muted"> × {line.qty}</span>
                </span>
                <span className="shrink-0 tabular-nums">
                  {formatQar(price * line.qty, locale)}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mt-8 flex justify-between border-t border-line pt-6 text-sm">
          <span className="text-muted">{tCart("subtotal")}</span>
          <span className="font-medium tabular-nums">
            {formatQar(subtotal, locale)}
          </span>
        </div>
      </aside>
    </form>
  );
}
