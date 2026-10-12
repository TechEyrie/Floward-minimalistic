import type { Product } from "@/data/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    slug: "pearl-lusail-arrangement",
    name: {
      en: "Pearl Lusail Arrangement",
      ar: "تنسيق لؤلؤة لوسيل",
    },
    priceQar: 520,
    express: true,
    featured: true,
    category: "flowers",
    occasions: ["wedding", "anniversary"],
    recipient: ["her", "mother"],
    colors: ["white", "cream"],
    images: [
      img("photo-1487530811176-3780de880c2d"),
      img("photo-1490750967868-88aa4486c946"),
      img("photo-1519378058457-4c29a0a2efac"),
    ],
    description: {
      en:
        "A restrained composition of ivory roses, lisianthus, and seasonal foliage—styled for Lusail evenings and quiet celebrations across Doha.",
      ar:
        "تنسيق هادئ من الورود العاجية والليسيانثوس والأوراق الموسمية، مصمم لأمسيات لوسيل والاحتفالات الراقية في الدوحة.",
    },
    includes: {
      en: [
        "Ivory garden roses",
        "White lisianthus",
        "Seasonal foliage",
        "Maison Nura signature wrap",
      ],
      ar: [
        "ورود حديقة عاجية",
        "ليسيانثوس أبيض",
        "أوراق موسمية",
        "تغليف بعلامة ميزون نورا",
      ],
    },
    care: {
      en: "Refresh water daily; trim stems at an angle. Keep away from direct AC and sunlight.",
      ar: "غيّري الماء يومياً وقصّي السيقان بزاوية. ابتعدي عن التكييف المباشر وأشعة الشمس.",
    },
    dimensions: { h: "52cm", w: "38cm" },
    pairWith: ["lusail-marble-footed", "katara-linen-wrap"],
  },
  {
    slug: "west-bay-blush-peonies",
    name: {
      en: "West Bay Blush Peonies",
      ar: "فاوانيا وردية خليج الغرب",
    },
    priceQar: 445,
    express: true,
    featured: true,
    category: "flowers",
    occasions: ["birthday", "thank-you"],
    recipient: ["her"],
    colors: ["blush", "pink"],
    images: [
      img("photo-1526047932273-341f2a7631f9"),
      img("photo-1519378058457-4c29a0a2efac"),
    ],
    description: {
      en: "Soft peonies and blush ranunculus in a low, editorial silhouette—made for West Bay terraces and golden-hour gifting.",
      ar: "فاوانيا ناعمة ورانونكولوس وردي في خط بصري منخفض—مناسب لشرفات خليج الغرب وإهداء ساعة الغروب.",
    },
    includes: {
      en: ["Blush peonies", "Ranunculus", "Eucalyptus", "Silk ribbon finish"],
      ar: ["فاوانيا وردية", "رانونكولوس", "كافور", "شريطة حرير"],
    },
    care: {
      en: "Mist petals lightly; change water every two days. Display in a cool room.",
      ar: "رشّي الأوراق برفق وغيّري الماء كل يومين. اعرضي التنسيق في غرفة باردة.",
    },
    dimensions: { h: "45cm", w: "32cm" },
    pairWith: ["pearl-curve-glass-vase", "rosewater-chiffon"],
  },
  {
    slug: "the-pearl-rose-garden",
    name: {
      en: "The Pearl Rose Garden",
      ar: "حديقة الورد في اللؤلؤة",
    },
    priceQar: 389,
    express: false,
    category: "flowers",
    occasions: ["anniversary", "birthday"],
    recipient: ["her", "him"],
    colors: ["red", "pink"],
    images: [
      img("photo-1526047932273-341f2a7631f9"),
      img("photo-1487530811176-3780de880c2d"),
      img("photo-1501004318641-b39e6451bec6"),
    ],
    description: {
      en: "Layered garden roses in crimson and blush—a generous bouquet inspired by The Pearl’s waterfront calm.",
      ar: "طبقات من ورود الحديقة بالقرمزي والوردي—باقة وفيرة مستوحاة من هدوء الواجهة البحرية في اللؤلؤة.",
    },
    includes: {
      en: ["Crimson roses", "Blush spray roses", "Salal", "Matte gift sleeve"],
      ar: ["ورود قرمزية", "ورود رشّ وردية", "سالال", "غلاف هدايا مطفي"],
    },
    care: {
      en: "Remove lower leaves before placing in water. Use flower food if provided.",
      ar: "أزيلي الأوراق السفلية قبل وضع السيقان في الماء. استخدمي غذاء الزهور إن وُجد.",
    },
    dimensions: { h: "58cm", w: "40cm" },
    pairWith: ["cocoa-doha-pralines"],
  },
  {
    slug: "katara-white-garden",
    name: {
      en: "Katara White Garden",
      ar: "حديقة كتارا البيضاء",
    },
    priceQar: 475,
    express: false,
    category: "flowers",
    occasions: ["wedding", "new-baby"],
    recipient: ["her", "mother"],
    colors: ["white", "green"],
    images: [
      img("photo-1416879595882-3373a0480b5b"),
      img("photo-1519378058457-4c29a0a2efac"),
    ],
    description: {
      en: "All-white stems with sage accents—ceremonial, architectural, and suited to Katara’s cultural evenings.",
      ar: "سيقان بيضاء بالكامل مع لمسات من الميرمية—طقسية ومعمارية ومناسبة لأمسيات كتارا الثقافية.",
    },
    includes: {
      en: ["White roses", "Hydrangea", "Sage", "Architectural wrap"],
      ar: ["ورود بيضاء", "هيدرانجيا", "ميرمية", "تغليف معماري"],
    },
    care: {
      en: "Hydrangea drinks heavily—check water level morning and evening.",
      ar: "الهيدرانجيا تستهلك ماءً كثيراً—تحققي من مستوى الماء صباحاً ومساءً.",
    },
    dimensions: { h: "50cm", w: "36cm" },
    pairWith: ["katara-etched-ceramic", "pearl-celebration-cake"],
  },
  {
    slug: "ramadan-moon-lilies",
    name: {
      en: "Ramadan Moon Lilies",
      ar: "زنابق رمضان القمرية",
    },
    priceQar: 365,
    express: true,
    category: "flowers",
    occasions: ["ramadan"],
    recipient: ["mother", "her"],
    colors: ["white", "gold"],
    images: [
      img("photo-1519378058457-4c29a0a2efac"),
      img("photo-1487530811176-3780de880c2d"),
    ],
    description: {
      en: "White lilies with brushed gold accents—composed for iftar tables and gracious Ramadan visits in Doha.",
      ar: "زنابق بيضاء مع لمسات ذهبية—تنسيق لموائد الإفطار وزيارات رمضان الكريمة في الدوحة.",
    },
    includes: {
      en: ["Oriental lilies", "White stock", "Gold wire detail", "Ramadan sleeve"],
      ar: ["زنابق شرقية", "ستوك أبيض", "تفصيل سلك ذهبي", "غلاف رمضاني"],
    },
    care: {
      en: "Remove lily pollen carefully to protect fabrics; refresh water daily.",
      ar: "أزيلي حبوب لقاح الزنبق بحذر لحماية الأقمشة وغيّري الماء يومياً.",
    },
    dimensions: { h: "48cm", w: "30cm" },
    pairWith: ["gold-leaf-date-truffles", "saffron-honey-layer"],
  },
  {
    slug: "corniche-sunset-mixed",
    name: {
      en: "Corniche Sunset Mixed",
      ar: "مزيج غروب الكورنيش",
    },
    priceQar: 329,
    express: false,
    category: "flowers",
    occasions: ["thank-you", "birthday"],
    recipient: ["colleague", "him"],
    colors: ["mixed", "cream"],
    images: [
      img("photo-1490750967868-88aa4486c946"),
      img("photo-1558618666-fcd25c85cd64"),
    ],
    description: {
      en: "A painterly mix of seasonal blooms in warm tones—like the Corniche at dusk.",
      ar: "مزيج فني من الزهور الموسمية بدرجات دافئة—كغروب الكورنيش.",
    },
    includes: {
      en: ["Seasonal focal blooms", "Textural greens", "Kraft wrap", "Care card"],
      ar: ["زهور موسمية بارزة", "خضرة نسيجية", "تغليف كرافت", "بطاقة عناية"],
    },
    care: {
      en: "Recut stems every three days; keep away from ripening fruit.",
      ar: "أعيدي قص السيقان كل ثلاثة أيام وابتعدي عن الفاكهة الناضجة.",
    },
    dimensions: { h: "55cm", w: "35cm" },
    pairWith: ["cocoa-doha-pralines", "oud-amber-candle-set"],
  },
  {
    slug: "healing-garden-posy",
    name: {
      en: "Healing Garden Posy",
      ar: "باقة الحديقة الدافئة",
    },
    priceQar: 249,
    express: true,
    category: "flowers",
    occasions: ["get-well"],
    recipient: ["mother", "colleague"],
    colors: ["green", "pink"],
    images: [
      img("photo-1501004318641-b39e6451bec6"),
      img("photo-1416879595882-3373a0480b5b"),
    ],
    description: {
      en: "A gentle posy of soft pinks and restorative greens—thoughtful for recovery and quiet encouragement.",
      ar: "باقة لطيفة من الوردي الهادئ والأخضر المريح—مناسبة للتعافي والتشجيع بأسلوب راقٍ.",
    },
    includes: {
      en: ["Spray roses", "Alstroemeria", "Ferns", "Hand-tied finish"],
      ar: ["ورود رشّ", "ألستروميريا", "سرخس", "ربط يدوي"],
    },
    care: {
      en: "Place in a clean vase with cool water; avoid drafts.",
      ar: "ضعي الباقة في مزهرية نظيفة بماء بارد وتجنبي التهوية المباشرة.",
    },
    dimensions: { h: "38cm", w: "28cm" },
    pairWith: ["peace-lily-palm", "lusail-rose-hand-cream-trio"],
  },
  {
    slug: "doha-red-velvet",
    name: {
      en: "Doha Red Velvet",
      ar: "الدوحة المخملية الحمراء",
    },
    priceQar: 410,
    express: true,
    category: "flowers",
    occasions: ["birthday", "anniversary"],
    recipient: ["him", "her"],
    colors: ["red"],
    images: [
      img("photo-1487530811176-3780de880c2d"),
      img("photo-1526047932273-341f2a7631f9"),
    ],
    description: {
      en: "Deep red roses in a sculptural spiral—bold, refined, and unmistakably evening-ready.",
      ar: "ورود حمراء عميقة في حلزون نحتي—جريئة وراقية ومناسبة للأمسيات.",
    },
    includes: {
      en: ["Premium red roses", "Hypericum", "Black wrap option", "Ribbon"],
      ar: ["ورود حمراء فاخرة", "هيبريكوم", "تغليف داكن", "شريطة"],
    },
    care: {
      en: "Use lukewarm water on first fill; display at room temperature.",
      ar: "استخدمي ماءً فاتراً عند التعبئة الأولى واعرضي الباقة في حرارة الغرفة.",
    },
    dimensions: { h: "60cm", w: "34cm" },
    pairWith: ["midnight-orchid-box", "al-sadd-porcelain-vase"],
  },
  {
    slug: "al-sadd-porcelain-vase",
    name: {
      en: "Al Sadd Porcelain Vase",
      ar: "مزهرية السد الخزفية",
    },
    priceQar: 285,
    express: false,
    category: "vases",
    occasions: ["anniversary", "thank-you"],
    recipient: ["mother", "her"],
    colors: ["cream", "white"],
    images: [
      img("photo-1608571423902-eed4a5ad8108"),
      img("photo-1549007994-cb92caebd54b"),
    ],
    description: {
      en: "Matte porcelain with a subtle footed base—an enduring vessel for weekly stems in Doha homes.",
      ar: "خزف مطفي بقاعدة منخفضة—إناء دائم للزهور الأسبوعية في بيوت الدوحة.",
    },
    includes: {
      en: ["Porcelain vase", "Protective packaging", "Care leaflet"],
      ar: ["مزهرية خزف", "تغليف واقي", "منشور عناية"],
    },
    care: {
      en: "Hand wash only; dry thoroughly before storage.",
      ar: "غسل يدوي فقط؛ جففيها جيداً قبل التخزين.",
    },
    dimensions: { h: "28cm", w: "14cm" },
    pairWith: ["pearl-lusail-arrangement"],
  },
  {
    slug: "pearl-curve-glass-vase",
    name: {
      en: "Pearl Curve Glass Vase",
      ar: "مزهرية اللؤلؤة الزجاجية المنحنية",
    },
    priceQar: 195,
    express: true,
    category: "vases",
    occasions: ["birthday", "wedding"],
    recipient: ["her", "colleague"],
    colors: ["white", "blush"],
    images: [
      img("photo-1608571423902-eed4a5ad8108"),
      img("photo-1549007994-cb92caebd54b"),
    ],
    description: {
      en: "Hand-blown curve in clear glass—light-catching and minimal on marble consoles.",
      ar: "انحناءة زجاجية مصنوعة يدوياً—تلتقط الضوء وتبدو بسيطة على طاولات الرخام.",
    },
    includes: {
      en: ["Glass vase", "Dust bag"],
      ar: ["مزهرية زجاج", "كيس حماية"],
    },
    care: {
      en: "Clean with mild soap; avoid abrasive sponges.",
      ar: "نظفيها بصابون لطيف وتجنبي الإسفنج الخشن.",
    },
    dimensions: { h: "24cm", w: "12cm" },
    pairWith: ["west-bay-blush-peonies"],
  },
  {
    slug: "lusail-marble-footed",
    name: {
      en: "Lusail Marble Footed Vase",
      ar: "مزهرية لوسيل الرخامية",
    },
    priceQar: 340,
    express: false,
    featured: true,
    category: "vases",
    occasions: ["wedding", "anniversary"],
    recipient: ["her", "him"],
    colors: ["gold", "cream"],
    images: [
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1608571423902-eed4a5ad8108"),
    ],
    description: {
      en: "Marble composite with a brushed gold rim—sculptural presence for entryways and dining tables.",
      ar: "رخام مركب بحافة ذهبية مصقولة—حضور نحتي للمداخل وموائد الطعام.",
    },
    includes: {
      en: ["Marble-footed vase", "Felt base pad"],
      ar: ["مزهرية رخامية بقاعدة", "وسادة قاعدة مخملية"],
    },
    care: {
      en: "Wipe with a soft cloth; do not use acidic cleaners on the rim.",
      ar: "امسحيها بقماش ناعم ولا تستخدمي منظفات حمضية على الحافة.",
    },
    dimensions: { h: "32cm", w: "16cm" },
    pairWith: ["pearl-lusail-arrangement", "doha-calligraphy-frame"],
  },
  {
    slug: "katara-etched-ceramic",
    name: {
      en: "Katara Etched Ceramic",
      ar: "خزف كتارا المنقوش",
    },
    priceQar: 220,
    express: false,
    category: "vases",
    occasions: ["wedding", "thank-you"],
    recipient: ["mother"],
    colors: ["blush", "cream"],
    images: [
      img("photo-1549007994-cb92caebd54b"),
      img("photo-1608571423902-eed4a5ad8108"),
    ],
    description: {
      en: "Blush ceramic with fine etched lines—a cultural, tactile piece for ikebana-style stems.",
      ar: "خزف وردي بخطوط منقوشة رفيعة—قطعة حسية لترتيب السيقان على الطريقة اليابانية.",
    },
    includes: {
      en: ["Etched ceramic vase", "Gift box"],
      ar: ["مزهرية خزف منقوش", "صندوق هدايا"],
    },
    care: {
      en: "Rinse after use; not dishwasher safe.",
      ar: "اشطفيها بعد الاستخدام؛ غير مناسبة للغسالة.",
    },
    dimensions: { h: "20cm", w: "11cm" },
    pairWith: ["katara-white-garden"],
  },
  {
    slug: "west-end-bud-vase-set",
    name: {
      en: "West End Bud Vase Set",
      ar: "طقم مزهريات غرب الدوحة",
    },
    priceQar: 165,
    express: true,
    category: "vases",
    occasions: ["birthday", "get-well"],
    recipient: ["colleague", "her"],
    colors: ["mixed", "pink"],
    images: [
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1513885535751-8b9238bd345a"),
    ],
    description: {
      en: "Three tonal bud vases for scattered moments—desks, powder rooms, and bedside tables.",
      ar: "ثلاث مزهريات صغيرة بدرجات متناسقة—للمكاتب وغرف الاستحمام وطاولات السرير.",
    },
    includes: {
      en: ["Three bud vases", "Cotton packaging"],
      ar: ["ثلاث مزهريات صغيرة", "تغليف قطني"],
    },
    care: {
      en: "Wash each piece separately; stack with care.",
      ar: "اغسلي كل قطعة على حدة وكدسيها بحذر.",
    },
    dimensions: { h: "14cm", w: "6cm" },
    pairWith: ["healing-garden-posy"],
  },
  {
    slug: "sidra-olive-tree",
    name: {
      en: "Sidra Olive Tree",
      ar: "شجرة زيتون سدرة",
    },
    priceQar: 390,
    express: false,
    category: "plants",
    occasions: ["thank-you", "anniversary"],
    recipient: ["him", "mother"],
    colors: ["green"],
    images: [
      img("photo-1416879595882-3373a0480b5b"),
      img("photo-1501004318641-b39e6451bec6"),
    ],
    description: {
      en: "A compact olive tree in a stone-finish pot—symbolic greenery for long-view gifting in Qatar.",
      ar: "شجرة زيتون مدمجة في أصيص بتشطيب حجري—خضرة رمزية للإهداء طويل الأمد في قطر.",
    },
    includes: {
      en: ["Olive plant", "Stone-finish pot", "Care guide"],
      ar: ["نبتة زيتون", "أصيص بحجر", "دليل عناية"],
    },
    care: {
      en: "Bright indirect light; water when top soil is dry. Rotate weekly.",
      ar: "إضاءة ساطعة غير مباشرة؛ اسقي عند جفاف الطبقة العلوية من التربة. دوّري النبتة أسبوعياً.",
    },
    pairWith: ["al-sadd-porcelain-vase"],
  },
  {
    slug: "fiddle-leaf-studio",
    name: {
      en: "Fiddle Leaf Studio",
      ar: "فيدل ليف الاستوديو",
    },
    priceQar: 520,
    express: false,
    category: "plants",
    occasions: ["new-baby", "birthday"],
    recipient: ["mother", "her"],
    colors: ["green"],
    images: [
      img("photo-1501004318641-b39e6451bec6"),
      img("photo-1416879595882-3373a0480b5b"),
    ],
    description: {
      en: "Architectural fiddle-leaf fig in a matte planter—statement greenery for villas and high-rise living.",
      ar: "تين فيدل ليف معماري في أصيص مطفي—خضرة بارزة للفلل والشقق العالية.",
    },
    includes: {
      en: ["Fiddle-leaf fig", "Matte planter", "Drainage layer"],
      ar: ["تين فيدل ليف", "أصيص مطفي", "طبقة تصريف"],
    },
    care: {
      en: "Wipe leaves monthly; water sparingly in cooler months.",
      ar: "امسحي الأوراق شهرياً وقللي الري في الأشهر الباردة.",
    },
    pairWith: ["newborn-keepsake-bundle"],
  },
  {
    slug: "desert-succulent-trio",
    name: {
      en: "Desert Succulent Trio",
      ar: "ثلاثي صبار الصحراء",
    },
    priceQar: 189,
    express: true,
    category: "plants",
    occasions: ["thank-you", "get-well"],
    recipient: ["colleague", "him"],
    colors: ["green", "mixed"],
    images: [
      img("photo-1416879595882-3373a0480b5b"),
      img("photo-1501004318641-b39e6451bec6"),
    ],
    description: {
      en: "Three desert succulents in tonal ceramics—low-maintenance calm for offices and alcoves.",
      ar: "ثلاث عينات صبار في خزف متناسق—هدوء قليل العناية للمكاتب والزوايا.",
    },
    includes: {
      en: ["Three succulents", "Ceramic pots", "Gravel top dressing"],
      ar: ["ثلاث نباتات صبار", "أصص خزف", "طبقة حصى علوية"],
    },
    care: {
      en: "Water every two to three weeks; ensure drainage.",
      ar: "اسقي كل أسبوعين إلى ثلاثة وتأكدي من التصريف.",
    },
    pairWith: ["executive-desk-bloom"],
  },
  {
    slug: "peace-lily-palm",
    name: {
      en: "Peace Lily & Palm Accent",
      ar: "زنبق السلام ولمسة النخيل",
    },
    priceQar: 310,
    express: false,
    category: "plants",
    occasions: ["get-well", "new-baby"],
    recipient: ["mother", "colleague"],
    colors: ["white", "green"],
    images: [
      img("photo-1501004318641-b39e6451bec6"),
      img("photo-1416879595882-3373a0480b5b"),
    ],
    description: {
      en: "Peace lily paired with a slender palm frond in a woven cachepot—serene and air-softening.",
      ar: "زنبق السلام مع سعف نخيل رفيع في غطاء أصيص منسوج—هادئ ومنعش للجو.",
    },
    includes: {
      en: ["Peace lily", "Palm accent", "Woven cachepot"],
      ar: ["زنبق السلام", "لمسة نخيل", "غطاء أصيص منسوج"],
    },
    care: {
      en: "Keep soil lightly moist; mist in dry AC environments.",
      ar: "أبقي التربة رطبة قليلاً ورشّي الأوراق في بيئة التكييف الجاف.",
    },
    pairWith: ["healing-garden-posy"],
  },
  {
    slug: "saffron-honey-layer",
    name: {
      en: "Saffron Honey Layer Cake",
      ar: "كيكة الزعفران والعسل",
    },
    priceQar: 265,
    express: true,
    category: "cakes",
    occasions: ["ramadan", "birthday"],
    recipient: ["mother", "her"],
    colors: ["gold", "cream"],
    images: [
      img("photo-1578985545062-69928b1d9587"),
      img("photo-1578985545062-69928b1d9587"),
    ],
    description: {
      en: "Feather-light layers with saffron cream and honey glaze—crafted for gatherings after sunset.",
      ar: "طبقات خفيفة بكريمة الزعفران وطلاء العسل—مصنوعة للجلسات بعد الغروب.",
    },
    includes: {
      en: ["6-inch round cake", "Saffron cream", "Honey glaze", "Gift box"],
      ar: ["كيكة مستديرة 6 إنش", "كريمة زعفران", "طلاء عسل", "صندوق هدايا"],
    },
    care: {
      en: "Refrigerate; best enjoyed within 48 hours of delivery.",
      ar: "يُحفظ في الثلاجة ويُفضل تناوله خلال 48 ساعة من التسليم.",
    },
    pairWith: ["ramadan-moon-lilies", "gold-leaf-date-truffles"],
  },
  {
    slug: "rosewater-chiffon",
    name: {
      en: "Rosewater Chiffon",
      ar: "شيفون ماء الورد",
    },
    priceQar: 235,
    express: false,
    category: "cakes",
    occasions: ["anniversary", "thank-you"],
    recipient: ["her"],
    colors: ["pink", "blush"],
    images: [
      img("photo-1578985545062-69928b1d9587"),
      img("photo-1578985545062-69928b1d9587"),
    ],
    description: {
      en: "Rosewater chiffon with pistachio crumble—delicate, fragrant, and decidedly feminine.",
      ar: "شيفون بماء الورد مع فتات الفستق—رقيق وعطري وبأسلوب أنثوي راقٍ.",
    },
    includes: {
      en: ["Chiffon cake", "Pistachio crumble", "Edible petals"],
      ar: ["كيك شيفون", "فتات فستق", "بتلات صالحة للأكل"],
    },
    care: {
      en: "Serve chilled; store covered in refrigerator.",
      ar: "يُقدّم بارداً ويُحفظ مغطى في الثلاجة.",
    },
    pairWith: ["west-bay-blush-peonies", "midnight-orchid-box"],
  },
  {
    slug: "pearl-celebration-cake",
    name: {
      en: "Pearl Celebration Cake",
      ar: "كيكة الاحتفال اللؤلؤية",
    },
    priceQar: 295,
    express: true,
    featured: true,
    category: "cakes",
    occasions: ["wedding", "new-baby"],
    recipient: ["her", "mother"],
    colors: ["white", "cream"],
    images: [
      img("photo-1578985545062-69928b1d9587"),
      img("photo-1578985545062-69928b1d9587"),
    ],
    description: {
      en: "Ivory buttercream with pearl-dusted finish—celebratory without excess, sized for intimate tables.",
      ar: "كريمة زبدة عاجية بلمسة لؤلؤية—احتفالية بلا مبالغة ومناسبة للموائد الصغيرة.",
    },
    includes: {
      en: ["8-inch celebration cake", "Pearl dust finish", "Ribboned box"],
      ar: ["كيك احتفال 8 إنش", "لمسة غبار لؤلؤي", "صندوق بشريطة"],
    },
    care: {
      en: "Keep upright during transport; refrigerate until serving.",
      ar: "أبقِ الكيك مستقيماً أثناء النقل وبرّده حتى وقت التقديم.",
    },
    pairWith: ["katara-white-garden", "pearl-initial-jewelry-dish"],
  },
  {
    slug: "gold-leaf-date-truffles",
    name: {
      en: "Gold Leaf Date Truffles",
      ar: "ترافل التمر بورق الذهب",
    },
    priceQar: 175,
    express: true,
    featured: true,
    category: "chocolates",
    occasions: ["ramadan", "thank-you"],
    recipient: ["him", "mother"],
    colors: ["gold"],
    images: [
      img("photo-1513885535751-8b9238bd345a"),
      img("photo-1549007994-cb92caebd54b"),
    ],
    description: {
      en: "Qatari dates enrobed in dark chocolate with gold leaf—a restrained Ramadan confection.",
      ar: "تمر قطري مغطى بشوكولاتة داكنة وورق ذهب—حلوى رمضانية راقية.",
    },
    includes: {
      en: ["12 truffles", "Gold leaf detail", "Keepsake tin"],
      ar: ["12 ترافل", "تفصيل ورق ذهب", "علبة تذكارية"],
    },
    care: {
      en: "Store in a cool, dry place below 22°C.",
      ar: "يُحفظ في مكان بارد وجاف دون 22°م.",
    },
    pairWith: ["ramadan-moon-lilies", "oud-amber-candle-set"],
  },
  {
    slug: "cocoa-doha-pralines",
    name: {
      en: "Cocoa Doha Pralines",
      ar: "برالين كاكاو الدوحة",
    },
    priceQar: 149,
    express: false,
    category: "chocolates",
    occasions: ["thank-you", "birthday"],
    recipient: ["colleague", "him"],
    colors: ["cream"],
    images: [
      img("photo-1513885535751-8b9238bd345a"),
      img("photo-1518895949257-7621c3c786d7"),
    ],
    description: {
      en: "Single-origin cocoa pralines with sea salt—desk-friendly gratitude from Maison Nura.",
      ar: "برالين كاكاو أحادي المنشأ مع ملح البحر—هدية شكر مناسبة للمكتب من ميزون نورا.",
    },
    includes: {
      en: ["16 pralines", "Slim gift sleeve"],
      ar: ["16 برالين", "غلاف هدايا رفيع"],
    },
    care: {
      en: "Avoid direct sun; consume within two weeks.",
      ar: "تجنبي أشعة الشمس المباشرة ويُفضل التناول خلال أسبوعين.",
    },
    pairWith: ["corniche-sunset-mixed", "the-pearl-rose-garden"],
  },
  {
    slug: "midnight-orchid-box",
    name: {
      en: "Midnight Orchid Box",
      ar: "صندوق أوركيد منتصف الليل",
    },
    priceQar: 198,
    express: true,
    featured: true,
    category: "chocolates",
    occasions: ["anniversary", "birthday"],
    recipient: ["her"],
    colors: ["blush", "pink"],
    images: [
      img("photo-1513885535751-8b9238bd345a"),
      img("photo-1549007994-cb92caebd54b"),
    ],
    description: {
      en: "Blush-toned bonbons in a lacquer box—velvet raspberry, rose ganache, and midnight cocoa.",
      ar: "بونبون بدرجات وردية في صندوق لاكيه—توت، غاناش ورد، وكاكاو عميق.",
    },
    includes: {
      en: ["20 assorted bonbons", "Lacquer presentation box"],
      ar: ["20 بونبون متنوع", "صندوق عرض لاكيه"],
    },
    care: {
      en: "Refrigerate in warm months; bring to room temperature before serving.",
      ar: "يُبرد في الأشهر الحارة ويُترك لدرجة حرارة الغرفة قبل التقديم.",
    },
    pairWith: ["doha-red-velvet", "rosewater-chiffon"],
  },
  {
    slug: "oud-amber-candle-set",
    name: {
      en: "Oud Amber Candle Set",
      ar: "طقم شموع العود والعنبر",
    },
    priceQar: 320,
    express: false,
    category: "gifts",
    occasions: ["anniversary", "thank-you"],
    recipient: ["him", "colleague"],
    colors: ["gold"],
    images: [
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1608571423902-eed4a5ad8108"),
    ],
    description: {
      en: "Two hand-poured candles in oud and amber—warm, lingering notes for majlis and study rooms.",
      ar: "شمعتان مصبوبتان يدوياً بالعود والعنبر—نفحات دافئة تدوم للمجالس والمكاتب.",
    },
    includes: {
      en: ["Two 180g candles", "Matte gift tray", "Matches"],
      ar: ["شمعتان 180 غ", "صينية هدايا مطفية", "أعواد ثقاب"],
    },
    care: {
      en: "Trim wick to 5mm before each burn; never leave unattended.",
      ar: "قصّي الفتيل إلى 5 مم قبل كل إشعال ولا تُترك دون مراقبة.",
    },
    pairWith: ["corniche-sunset-mixed", "gold-leaf-date-truffles"],
  },
  {
    slug: "pearl-initial-jewelry-dish",
    name: {
      en: "Pearl Initial Jewelry Dish",
      ar: "طبق مجوهرات اللؤلؤة المخصص",
    },
    priceQar: 129,
    express: true,
    category: "gifts",
    occasions: ["birthday", "thank-you"],
    recipient: ["her"],
    colors: ["cream", "gold"],
    images: [
      img("photo-1513885535751-8b9238bd345a"),
      img("photo-1608571423902-eed4a5ad8108"),
    ],
    description: {
      en: "Ceramic catch-all with pearl glaze—personalised initial available on request for gifting moments.",
      ar: "طبق خزفي بلمعة لؤلؤية—يمكن إضافة الحرف الأول عند الطلب لمناسبات الإهداء.",
    },
    includes: {
      en: ["Ceramic dish", "Pearl glaze", "Dust pouch"],
      ar: ["طبق خزف", "طلاء لؤلؤي", "كيس حماية"],
    },
    care: {
      en: "Wipe clean with a damp cloth; not for microwave use.",
      ar: "ينظف بقماش رطب ولا يُستخدم في الميكروويف.",
    },
    pairWith: ["pearl-celebration-cake", "lusail-rose-hand-cream-trio"],
  },
  {
    slug: "katara-linen-wrap",
    name: {
      en: "Katara Linen Wrap",
      ar: "لفافة كتارا الكتانية",
    },
    priceQar: 210,
    express: false,
    category: "gifts",
    occasions: ["wedding", "ramadan"],
    recipient: ["mother", "her"],
    colors: ["blush", "cream"],
    images: [
      img("photo-1549007994-cb92caebd54b"),
      img("photo-1518895949257-7621c3c786d7"),
    ],
    description: {
      en: "European linen wrap in sand and blush—reusable presentation for flowers, books, or ceremonial gifts.",
      ar: "لفافة كتان أوروبية بالرملي والوردي—تغليف قابل لإعادة الاستخدام للزهور أو الكتب أو الهدايا الطقسية.",
    },
    includes: {
      en: ["Linen wrap", "Silk tie", "Care card"],
      ar: ["لفافة كتان", "ربطة حرير", "بطاقة عناية"],
    },
    care: {
      en: "Cold hand wash; iron on low if needed.",
      ar: "غسل يدوي بارد وكيّ على حرارة منخفضة عند الحاجة.",
    },
    pairWith: ["pearl-lusail-arrangement", "katara-etched-ceramic"],
  },
  {
    slug: "lusail-rose-hand-cream-trio",
    name: {
      en: "Lusail Rose Hand Cream Trio",
      ar: "ثلاثي كريم اليد لوسيل الوردي",
    },
    priceQar: 155,
    express: true,
    category: "gifts",
    occasions: ["get-well", "thank-you"],
    recipient: ["mother", "colleague"],
    colors: ["pink"],
    images: [
      img("photo-1526047932273-341f2a7631f9"),
      img("photo-1519378058457-4c29a0a2efac"),
    ],
    description: {
      en: "Three travel-sized creams with damask rose and qatar pearl extract—spa-quiet luxury.",
      ar: "ثلاثة كريمات بحجم السفر بورد دمشق ومستخلص لؤلؤة قطر—رفاهية هادئة كالسبا.",
    },
    includes: {
      en: ["Three 50ml tubes", "Gift sleeve"],
      ar: ["ثلاث عبوات 50 مل", "غلاف هدايا"],
    },
    care: {
      en: "Store away from heat; patch test if sensitive skin.",
      ar: "يُحفظ بعيداً عن الحرارة ويُفضل اختبار بسيط على البشرة الحساسة.",
    },
    pairWith: ["healing-garden-posy", "pearl-initial-jewelry-dish"],
  },
  {
    slug: "doha-calligraphy-frame",
    name: {
      en: "Doha Calligraphy Frame",
      ar: "إطار الخط الدوحة",
    },
    priceQar: 275,
    express: false,
    category: "gifts",
    occasions: ["anniversary", "wedding"],
    recipient: ["him", "her"],
    colors: ["gold", "cream"],
    images: [
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1608571423902-eed4a5ad8108"),
    ],
    description: {
      en: "Brass-framed art with a custom Arabic blessing—editorial décor for new homes in Doha.",
      ar: "لوحة بإطار نحاسي مع دعاء عربي مخصص—قطعة ديكور تحريرية للبيوت الجديدة في الدوحة.",
    },
    includes: {
      en: ["Brass frame", "Archival print", "Wall hardware"],
      ar: ["إطار نحاسي", "طباعة أرشيفية", "معلق جداري"],
    },
    care: {
      en: "Dust with a dry cloth; avoid humidity in bathrooms.",
      ar: "تُنظف بقماش جاف وتُبعد عن رطوبة الحمامات.",
    },
    pairWith: ["lusail-marble-footed"],
  },
  {
    slug: "newborn-keepsake-bundle",
    name: {
      en: "Newborn Keepsake Bundle",
      ar: "حزمة تذكار المولود",
    },
    priceQar: 445,
    express: false,
    featured: true,
    category: "gifts",
    occasions: ["new-baby"],
    recipient: ["mother", "her"],
    colors: ["cream", "blush"],
    images: [
      img("photo-1519378058457-4c29a0a2efac"),
      img("photo-1490750967868-88aa4486c946"),
    ],
    description: {
      en: "Muslin blanket, pearlescent rattle, and letterpress card—curated for welcoming a new life in Qatar.",
      ar: "بطانية موسلين وخشخيشة لؤلؤية وبطاقة طباعة حجرية—تشكيلة لاستقبال مولود جديد في قطر.",
    },
    includes: {
      en: ["Muslin blanket", "Keepsake rattle", "Letterpress card", "Ribboned box"],
      ar: ["بطانية موسلين", "خشخيشة تذكارية", "بطاقة طباعة حجرية", "صندوق بشريطة"],
    },
    care: {
      en: "Machine wash blanket on gentle; wipe rattle with damp cloth.",
      ar: "غسل البطانية على برنامج لطيف وتنظيف الخشخيشة بقماش رطب.",
    },
    pairWith: ["fiddle-leaf-studio", "katara-white-garden"],
  },
  {
    slug: "executive-desk-bloom",
    name: {
      en: "Executive Desk Bloom",
      ar: "زهرة مكتب التنفيذي",
    },
    priceQar: 890,
    express: true,
    featured: true,
    category: "gifts",
    occasions: ["thank-you", "birthday"],
    recipient: ["colleague", "him"],
    colors: ["green", "white"],
    images: [
      img("photo-1416879595882-3373a0480b5b"),
      img("photo-1558618666-fcd25c85cd64"),
      img("photo-1487530811176-3780de880c2d"),
    ],
    description: {
      en: "A long-lasting orchid in a leather-wrapped cachepot with weekly bloom refresh service—corporate gifting elevated.",
      ar: "أوركيد يدوم في غطاء أصيص مغلف بالجلد مع تجديد أسبوعي للزهرة—إهداء مؤسسي بمستوى راقٍ.",
    },
    includes: {
      en: ["Phalaenopsis orchid", "Leather cachepot", "First refresh visit"],
      ar: ["أوركيد فالاينوبسيس", "غطاء أصيص جلدي", "زيارة تجديد أولى"],
    },
    care: {
      en: "Two ice cubes weekly at roots; keep in bright indirect light.",
      ar: "مكعبان من الثلج أسبوعياً عند الجذور مع إضاءة ساطعة غير مباشرة.",
    },
    pairWith: ["desert-succulent-trio", "cocoa-doha-pralines"],
  },
];
