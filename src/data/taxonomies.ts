import type {
  CategorySlug,
  ColorSlug,
  LocaleCopy,
  OccasionSlug,
  RecipientSlug,
} from "./types";

export const categories: { slug: CategorySlug; name: LocaleCopy; blurb: LocaleCopy }[] =
  [
    {
      slug: "flowers",
      name: { en: "Flowers", ar: "ورود" },
      blurb: {
        en: "Hand-tied stems, composed in Doha the morning they leave.",
        ar: "باقات تُجهَّز يدوياً في الدوحة صباح يوم التوصيل.",
      },
    },
    {
      slug: "vases",
      name: { en: "In vases", ar: "في مزهريات" },
      blurb: {
        en: "Arrangements already at home in glass and ceramic.",
        ar: "تنسيقات جاهزة في زجاج وسيراميك أنيق.",
      },
    },
    {
      slug: "plants",
      name: { en: "Plants", ar: "نباتات" },
      blurb: {
        en: "Quiet greenery for desks, halls, and shaded terraces.",
        ar: "خضرة هادئة للمكاتب والبهوات والشرفات المظللة.",
      },
    },
    {
      slug: "cakes",
      name: { en: "Cakes", ar: "كيك" },
      blurb: {
        en: "Small-batch cakes, floral notes, same-day slices of joy.",
        ar: "كيك بحصص صغيرة ونفحات زهرية لليوم نفسه.",
      },
    },
    {
      slug: "chocolates",
      name: { en: "Chocolate", ar: "شوكولاتة" },
      blurb: {
        en: "Boxes meant to sit beside a bouquet, not steal it.",
        ar: "علب تُرافق الباقة ولا تطغى عليها.",
      },
    },
    {
      slug: "gifts",
      name: { en: "Gifts", ar: "هدايا" },
      blurb: {
        en: "Objects with weight: linen, light, paper, scent.",
        ar: "قطع ذات حضور: كتان، ضوء، ورق، عطر.",
      },
    },
  ];

export const occasions: { slug: OccasionSlug; name: LocaleCopy }[] = [
  { slug: "birthday", name: { en: "Birthday", ar: "عيد ميلاد" } },
  { slug: "anniversary", name: { en: "Anniversary", ar: "ذكرى سنوية" } },
  { slug: "thank-you", name: { en: "Thank you", ar: "شكراً" } },
  { slug: "wedding", name: { en: "Wedding", ar: "زفاف" } },
  { slug: "new-baby", name: { en: "New baby", ar: "مولود جديد" } },
  { slug: "get-well", name: { en: "Get well", ar: "شفاء عاجل" } },
  { slug: "ramadan", name: { en: "Ramadan & Eid", ar: "رمضان والعيد" } },
];

export const recipients: { slug: RecipientSlug; name: LocaleCopy }[] = [
  { slug: "her", name: { en: "For her", ar: "لها" } },
  { slug: "him", name: { en: "For him", ar: "له" } },
  { slug: "mother", name: { en: "Mother", ar: "الأم" } },
  { slug: "colleague", name: { en: "Colleague", ar: "زميل العمل" } },
];

export const colors: { slug: ColorSlug; name: LocaleCopy }[] = [
  { slug: "red", name: { en: "Red", ar: "أحمر" } },
  { slug: "pink", name: { en: "Pink", ar: "وردي" } },
  { slug: "white", name: { en: "White", ar: "أبيض" } },
  { slug: "blush", name: { en: "Blush", ar: "خوخي" } },
  { slug: "cream", name: { en: "Cream", ar: "كريمي" } },
  { slug: "gold", name: { en: "Gold", ar: "ذهبي" } },
  { slug: "green", name: { en: "Green", ar: "أخضر" } },
  { slug: "mixed", name: { en: "Mixed", ar: "متعدد" } },
];

export const priceBands = [
  { id: "under-250", max: 250, label: { en: "Under 250 QAR", ar: "أقل من ٢٥٠ ر.ق" } },
  { id: "250-400", min: 250, max: 400, label: { en: "250–400 QAR", ar: "٢٥٠–٤٠٠ ر.ق" } },
  { id: "over-400", min: 400, label: { en: "Over 400 QAR", ar: "أكثر من ٤٠٠ ر.ق" } },
] as const;
