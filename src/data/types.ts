export type LocaleCopy = { en: string; ar: string };

export type CategorySlug =
  | "flowers"
  | "vases"
  | "plants"
  | "cakes"
  | "chocolates"
  | "gifts";

export type OccasionSlug =
  | "birthday"
  | "anniversary"
  | "thank-you"
  | "wedding"
  | "new-baby"
  | "get-well"
  | "ramadan";

export type RecipientSlug = "her" | "him" | "mother" | "colleague";

export type ColorSlug =
  | "red"
  | "pink"
  | "white"
  | "blush"
  | "cream"
  | "gold"
  | "green"
  | "mixed";

export type Product = {
  slug: string;
  name: LocaleCopy;
  priceQar: number;
  express: boolean;
  featured?: boolean;
  category: CategorySlug;
  occasions: OccasionSlug[];
  recipient: RecipientSlug[];
  colors: ColorSlug[];
  images: string[];
  description: LocaleCopy;
  includes: { en: string[]; ar: string[] };
  care: LocaleCopy;
  dimensions?: { h: string; w: string };
  pairWith?: string[];
};
