"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "maison-nura-cart";

export type CartLine = { slug: string; qty: number };

type CartContextValue = {
  items: CartLine[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  ready: boolean;
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        line &&
        typeof line.slug === "string" &&
        typeof line.qty === "number" &&
        line.qty > 0,
    );
  } catch {
    return [];
  }
}

function writeStorage(items: CartLine[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore quota / private mode */
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeStorage(items);
  }, [items, hydrated]);

  const add = useCallback((slug: string, qty = 1) => {
    const amount = Math.max(1, Math.floor(qty));
    setItems((prev) => {
      const existing = prev.find((line) => line.slug === slug);
      if (existing) {
        return prev.map((line) =>
          line.slug === slug ? { ...line, qty: line.qty + amount } : line,
        );
      }
      return [...prev, { slug, qty: amount }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((line) => line.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    const next = Math.floor(qty);
    if (next <= 0) {
      setItems((prev) => prev.filter((line) => line.slug !== slug));
      return;
    }
    setItems((prev) =>
      prev.map((line) => (line.slug === slug ? { ...line, qty: next } : line)),
    );
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const count = useMemo(
    () => items.reduce((sum, line) => sum + line.qty, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      add,
      remove,
      setQty,
      clear,
      count,
      ready: hydrated,
      isOpen,
      openDrawer: () => setIsOpen(true),
      closeDrawer: () => setIsOpen(false),
    }),
    [items, add, remove, setQty, clear, count, hydrated, isOpen],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
