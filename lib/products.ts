export type ProductAvailability = "available" | "unavailable";

export type HoneyProduct = {
  id: string;
  name: string;
  shortDescription: string;
  type: string;
  size: string;
  price?: number;
  image?: string;
  availability: ProductAvailability;
  createdAt: number;
};

const STORAGE_KEY = "honey.products.v1";
const EVENT_NAME = "honey-products-changed";

export const demoProducts: HoneyProduct[] = [
  {
    id: "demo-1",
    name: "عسل سدر فاخر",
    shortDescription: "قوام غني ونكهة مميزة — نموذج عرض.",
    type: "سدر",
    size: "500 جم",
    price: 0,
    availability: "available",
    createdAt: 0,
  },
  {
    id: "demo-2",
    name: "عسل طلح",
    shortDescription: "اختيار يمني أصيل بمذاق متوازن — نموذج عرض.",
    type: "طلح",
    size: "250 جم",
    availability: "available",
    createdAt: 0,
  },
  {
    id: "demo-3",
    name: "عسل زهور برية",
    shortDescription: "قوام عميق ورائحة غنية — نموذج عرض.",
    type: "زهور",
    size: "1 كجم",
    availability: "unavailable",
    createdAt: 0,
  },
  {
    id: "demo-4",
    name: "عسل جبلي",
    shortDescription: "نقاء ودفء بنكهة جبلية — نموذج عرض.",
    type: "جبلي",
    size: "500 جم",
    availability: "available",
    createdAt: 0,
  },
  {
    id: "demo-5",
    name: "عسل الحمضيات",
    shortDescription: "عطر لطيف ولمسة منعشة — نموذج عرض.",
    type: "حمضيات",
    size: "500 جم",
    availability: "available",
    createdAt: 0,
  },
  {
    id: "demo-6",
    name: "عسل صيفي",
    shortDescription: "خيار متوازن ومناسب للهدايا — نموذج عرض.",
    type: "موسمي",
    size: "250 جم",
    availability: "available",
    createdAt: 0,
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

