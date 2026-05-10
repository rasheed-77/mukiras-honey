export type ProductAvailability = "available" | "unavailable";

export type ProductCategory = "honey" | "nuts" | "mixes";

export type HoneyProduct = {
  id: string;
  name: string;
  shortDescription: string;
  type: string;
  size: string;
  price?: number;
  image?: string;
  /** افتراضي: عسل — لتمييز المكسرات عن كروت العسل */
  category?: ProductCategory;
  availability: ProductAvailability;
  createdAt: number;
};

const STORAGE_KEY = "honey.products.v1";
const EVENT_NAME = "honey-products-changed";

/** أزيل من الكتالوج — لا تُعرض حتى لو وُجدت في التخزين المحلي */
const LEGACY_HONEY_DEMO_IDS = new Set([
  "demo-1",
  "demo-2",
  "demo-3",
  "demo-4",
  "demo-5",
  "demo-6",
]);

export const demoProducts: HoneyProduct[] = [
  {
    id: "samar-honey",
    name: "عسل سمر",
    shortDescription:
      "عسل السمر من أنواع العسل الطبيعي المستخرج من رحيق شجر السمر، وهو عسل ذو لون داكن ونكهة قوية ومركزة. يُعرف عسل السمر بفوائده الطبيعية، ويُستخدم تقليديًا لدعم صحة المعدة والمساعدة في تهدئة الالتهابات.",
    type: "عسل طبيعي",
    size: "غير محدد",
    image: "/Product%20Image/1.png",
    availability: "available",
    createdAt: 1,
  },
  {
    id: "alb-honey",
    name: "عسل علب",
    shortDescription:
      "من أنواع العسل الذي يُنتج من أزهار شجرة السدر. عسل السدر يُعرف بأنه مضاد طبيعي قوي، وله رائحة وطعم مميزان، ويُستخدم تقليديًا لدعم الصحة والعناية بالحروق والجروح.",
    type: "عسل سدر طبيعي",
    size: "غير محدد",
    image: "/Product%20Image/2.png",
    availability: "available",
    createdAt: 2,
  },
  {
    id: "sham-al-asal",
    name: "شمع العسل",
    shortDescription:
      "صالح للأكل ويقدم العديد من الفوائد الصحية. فهو طبيعي بالكامل ويتم استخراجه مباشرة من الخلية مما يجعله ممتازًا تمامًا في الذوق والجودة.",
    type: "شمع طبيعي",
    size: "غير محدد",
    image: "/Product%20Image/3.png",
    availability: "available",
    createdAt: 3,
  },
  {
    id: "oudi-honey",
    name: "عسل عودي",
    shortDescription:
      "من أنواع العسل الذي ينتج من أزهار شجرة الصورب المنتشرة في جبال منطقة العود في اليمن ومنها محافظتا إب والضالع.",
    type: "عسل صورب / عودي",
    size: "غير محدد",
    image: "/Product%20Image/4.png",
    availability: "available",
    createdAt: 4,
  },
  {
    id: "aseemi-honey",
    name: "عسل عصيمي",
    shortDescription:
      "من أنواع العسل الطبيعي الذي يتم إنتاجه في منطقة العصيمات شمال اليمن، ويتميز بلونه الفاتح ونكهته الحلوة المميزة.",
    type: "عسل طبيعي",
    size: "غير محدد",
    image: "/Product%20Image/5.png",
    availability: "available",
    createdAt: 5,
  },
  {
    id: "baladi-raisins",
    name: "زبيب بلدي",
    shortDescription:
      "زبيب بلدي فاخر يتميز بحلاوته الطبيعية وفوائده الغذائية الفريدة، يضيف لذة طيبة للوجبات والحلويات.",
    type: "مكسرات ومنتجات طبيعية",
    size: "غير محدد",
    category: "nuts",
    image: "/nuts%20Image/1.png",
    availability: "available",
    createdAt: 10,
  },
  {
    id: "farasees",
    name: "فراصيص",
    shortDescription:
      "فراصيص طازجة وغنية بالفيتامينات والمواد المضادة للأكسدة، تضفي نكهة منعشة على الوجبات والسلطات.",
    type: "مكسرات ومنتجات طبيعية",
    size: "غير محدد",
    category: "nuts",
    image: "/nuts%20Image/2.png",
    availability: "available",
    createdAt: 11,
  },
  {
    id: "green-pumpkin-seeds",
    name: "قرع أخضر",
    shortDescription:
      "بذور قرع أخضر طبيعية وغنية بالمغنيسيوم والألياف، تعزز الصحة الهضمية وتضفي مذاقًا مميزًا للوجبات.",
    type: "بذور طبيعية",
    size: "غير محدد",
    category: "nuts",
    image: "/nuts%20Image/3.png",
    availability: "available",
    createdAt: 12,
  },
  {
    id: "local-almond",
    name: "لوز بلدي",
    shortDescription:
      "لوز بلدي عالي الجودة، مكمل غذائي لذيذ يحتوي على الفيتامينات والمعادن الأساسية، يمنحك طاقة وصحة.",
    type: "مكسرات طبيعية",
    size: "غير محدد",
    category: "nuts",
    image: "/nuts%20Image/4.png",
    availability: "available",
    createdAt: 13,
  },
  {
    id: "max-nutrition-paste",
    name: "معجون ماكس الغذائي",
    shortDescription:
      "معجون بالعسل وغذاء ملكات وحبوب اللقاح، بالإضافة إلى الجنسينج والبروبلس والعديد من الأعشاب الطبيعية الأخرى.",
    type: "خلطات طبيعية",
    size: "غير محدد",
    category: "mixes",
    image: "/normal%20mixing/1.png",
    availability: "available",
    createdAt: 20,
  },
  {
    id: "royal-paste",
    name: "المعجون الملكي",
    shortDescription:
      "خلطة طبيعية مكونة من العسل والأعشاب الطبيعية، مصممة لدعم النشاط والحيوية وتحسين نمط الحياة بشكل طبيعي.",
    type: "خلطات طبيعية",
    size: "غير محدد",
    category: "mixes",
    image: "/normal%20mixing/2.png",
    availability: "available",
    createdAt: 21,
  },
  {
    id: "mukiras-royal-mix",
    name: "مناحل مكيراس الملكية",
    shortDescription:
      "خلطة ملكية مكونة من المكسرات المنوعة وأجود أنواع العسل.",
    type: "خلطات طبيعية",
    size: "غير محدد",
    category: "mixes",
    image: "/normal%20mixing/3.png",
    availability: "available",
    createdAt: 22,
  },
  {
    id: "amal-fertility-mix",
    name: "أمل للإنجاب",
    shortDescription:
      "خلطة مكونة من عسل طبيعي وأعشاب طبيعية، يتم تقديمها ضمن منتجات الخلطات الطبيعية المختارة من مناحل مكيراس.",
    type: "خلطات طبيعية",
    size: "غير محدد",
    category: "mixes",
    image: "/normal%20mixing/4.png",
    availability: "available",
    createdAt: 23,
  },
  {
    id: "amber-weight-gain-mix",
    name: "العنبرية العالمية للتسمين",
    shortDescription:
      "خلطة مكونة من عسل ومكسرات وأعشاب خاصة، مصممة لدعم الطاقة وفتح الشهية ضمن المنتجات الطبيعية المختارة.",
    type: "خلطات طبيعية",
    size: "غير محدد",
    category: "mixes",
    image: "/normal%20mixing/5.png",
    availability: "available",
    createdAt: 24,
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

function safeParse(json: string | null): unknown {
  if (!json) return null;
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function normalizeProducts(raw: unknown): HoneyProduct[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((p) => (p && typeof p === "object" ? (p as Partial<HoneyProduct>) : {}))
    .filter((p) => typeof p.id === "string" && typeof p.name === "string")
    .map(
      (p): HoneyProduct => ({
        id: p.id ?? cryptoRandomId(),
        name: p.name ?? "منتج",
        shortDescription: p.shortDescription ?? "",
        type: p.type ?? "",
        size: p.size ?? "",
        price: typeof p.price === "number" ? p.price : undefined,
        image: typeof p.image === "string" ? p.image : undefined,
        category:
          p.category === "nuts" ? "nuts" : p.category === "mixes" ? "mixes" : "honey",
        availability: p.availability === "unavailable" ? "unavailable" : "available",
        createdAt: typeof p.createdAt === "number" ? p.createdAt : Date.now(),
      }),
    )
    .sort((a, b) => b.createdAt - a.createdAt);
}

export function getProducts(): HoneyProduct[] {
  if (!isBrowser()) return [];
  const raw = safeParse(window.localStorage.getItem(STORAGE_KEY));
  return normalizeProducts(raw);
}

export function getAllProducts(): HoneyProduct[] {
  const stored = getProducts();
  const seen = new Set(stored.map((p) => p.id));
  const merged = [...stored];
  for (const p of demoProducts) {
    if (!seen.has(p.id)) merged.push(p);
  }
  return merged;
}

export function isNutProduct(p: HoneyProduct): boolean {
  return (p.category ?? "honey") === "nuts";
}

/** تصفية قائمة عشوائية ككتالوج عسل (نفس منطق الواجهة) */
export function filterHoneyCatalog(products: HoneyProduct[]): HoneyProduct[] {
  return products.filter(
    (p) =>
      (p.category ?? "honey") === "honey" && !LEGACY_HONEY_DEMO_IDS.has(p.id),
  );
}

/** منتجات العسل فقط — من دون مكسرات أو خلطات أو عروض تجريبية قديمة */
export function getHoneyProducts(): HoneyProduct[] {
  return filterHoneyCatalog(getAllProducts());
}

/** المكسرات فقط */
export function getNutProducts(): HoneyProduct[] {
  return getAllProducts().filter((p) => isNutProduct(p));
}

export function isNaturalMixProduct(p: HoneyProduct): boolean {
  return (p.category ?? "honey") === "mixes";
}

/** خلطات طبيعية فقط */
export function getNaturalMixProducts(): HoneyProduct[] {
  return getAllProducts().filter((p) => isNaturalMixProduct(p));
}

export function getProductById(id: string): HoneyProduct | null {
  if (!id) return null;
  const stored = getProducts().find((p) => p.id === id);
  if (stored) return stored;
  return demoProducts.find((p) => p.id === id) ?? null;
}

export function saveProducts(products: HoneyProduct[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addProduct(input: Omit<HoneyProduct, "id" | "createdAt">) {
  const next: HoneyProduct = {
    ...input,
    id: cryptoRandomId(),
    createdAt: Date.now(),
  };
  const current = getProducts();
  saveProducts([next, ...current]);
  return next;
}

export function updateProduct(
  id: string,
  patch: Partial<Omit<HoneyProduct, "id" | "createdAt">>,
) {
  const current = getProducts();
  const next = current.map((p) => (p.id === id ? { ...p, ...patch } : p));
  saveProducts(next);
  return next.find((p) => p.id === id) ?? null;
}

export function deleteProduct(id: string) {
  const current = getProducts();
  const next = current.filter((p) => p.id !== id);
  saveProducts(next);
  return next;
}

export function subscribeToProducts(callback: () => void) {
  if (!isBrowser()) return () => {};
  const handler = () => callback();
  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener("storage", handler);
  };
}

export function cryptoRandomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `p_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

