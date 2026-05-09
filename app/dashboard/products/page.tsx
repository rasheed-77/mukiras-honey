"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/honey/navbar";
import { Button } from "@/components/ui/button";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";
import type { HoneyProduct, ProductAvailability } from "@/lib/products";
import { addProduct, deleteProduct, getProducts, subscribeToProducts, updateProduct } from "@/lib/products";

type ProductFormState = {
  name: string;
  shortDescription: string;
  type: string;
  size: string;
  price: string;
  image: string;
  availability: ProductAvailability;
};

const initialForm: ProductFormState = {
  name: "",
  shortDescription: "",
  type: "",
  size: "",
  price: "",
  image: "",
  availability: "available",
};

function inputClassName() {
  return "mt-2 w-full rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";
}

function labelClassName() {
  return "text-sm font-medium";
}

function parsePrice(value: string): number | undefined {
  const v = value.trim();
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

export default function ProductsDashboardPage() {
  const [products, setProducts] = useState<HoneyProduct[]>(() => getProducts());
  const [form, setForm] = useState<ProductFormState>(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToProducts(() => setProducts(getProducts()));
    return unsubscribe;
  }, []);

  const sorted = useMemo(() => products, [products]);

  function onChange<K extends keyof ProductFormState>(key: K, value: ProductFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function resetForm() {
    setForm(initialForm);
    setEditingId(null);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      shortDescription: form.shortDescription.trim(),
      type: form.type.trim(),
      size: form.size.trim(),
      price: parsePrice(form.price),
      image: form.image.trim() || undefined,
      availability: form.availability,
    };

    if (!payload.name || !payload.type || !payload.size) return;

    if (editingId) {
      updateProduct(editingId, payload);
      resetForm();
      return;
    }

    addProduct(payload);
    resetForm();
  }

  function startEdit(p: HoneyProduct) {
    setEditingId(p.id);
    setForm({
      name: p.name ?? "",
      shortDescription: p.shortDescription ?? "",
      type: p.type ?? "",
      size: p.size ?? "",
      price: typeof p.price === "number" ? String(p.price) : "",
      image: p.image ?? "",
      availability: p.availability ?? "available",
    });
  }

  function remove(id: string) {
    deleteProduct(id);
    if (editingId === id) resetForm();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <motion.div
        className="mx-auto max-w-[1280px] px-4 py-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-muted-foreground text-sm">
              <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">
                الرئيسية
              </Link>{" "}
              / لوحة المنتجات
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">لوحة المنتجات</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
              أضف/عدّل/احذف المنتجات. يتم الحفظ في <span className="text-foreground">localStorage</span> ويظهر المحتوى تلقائيًا في الصفحة الرئيسية.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/">عرض الموقع</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            variants={scaleIn}
            className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-[0_0_0_1px_rgba(217,164,65,0.06)_inset] sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight">
              {editingId ? "تعديل منتج" : "إضافة منتج"}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              الحقول الأساسية: الاسم، النوع، الحجم. الصورة اختيارية.
            </p>

            <form onSubmit={submit} className="mt-6 grid gap-4">
              <div>
                <label className={labelClassName()}>اسم المنتج</label>
                <input
                  value={form.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  className={inputClassName()}
                  placeholder="مثال: عسل سدر فاخر"
                  required
                />
              </div>

              <div>
                <label className={labelClassName()}>وصف قصير</label>
                <textarea
                  value={form.shortDescription}
                  onChange={(e) => onChange("shortDescription", e.target.value)}
                  className={inputClassName()}
                  placeholder="وصف مختصر يظهر في كرت المنتج"
                  rows={3}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClassName()}>النوع</label>
                  <input
                    value={form.type}
                    onChange={(e) => onChange("type", e.target.value)}
                    className={inputClassName()}
                    placeholder="سدر / طلح / زهور..."
                    required
                  />
                </div>
                <div>
                  <label className={labelClassName()}>الحجم</label>
                  <input
                    value={form.size}
                    onChange={(e) => onChange("size", e.target.value)}
                    className={inputClassName()}
                    placeholder="250 جم / 500 جم / 1 كجم"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClassName()}>السعر (اختياري)</label>
                  <input
                    value={form.price}
                    onChange={(e) => onChange("price", e.target.value)}
                    className={inputClassName()}
                    placeholder="مثال: 120"
                    inputMode="numeric"
                  />
                </div>
                <div>
                  <label className={labelClassName()}>حالة المنتج</label>
                  <select
                    value={form.availability}
                    onChange={(e) =>
                      onChange("availability", e.target.value as ProductAvailability)
                    }
                    className={inputClassName()}
                  >
                    <option value="available">متوفر</option>
                    <option value="unavailable">غير متوفر</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClassName()}>
                  رابط الصورة أو اسم الصورة (اختياري)
                </label>
                <input
                  value={form.image}
                  onChange={(e) => onChange("image", e.target.value)}
                  className={inputClassName()}
                  placeholder="يمكن تركه فارغًا — سيتم إضافة صورة المنتج لاحقًا"
                />
                <div className="text-muted-foreground mt-2 text-xs leading-relaxed">
                  إذا تركته فارغًا، سيظهر Placeholder فاخر مع عبارة{" "}
                  <span className="text-foreground">“سيتم إضافة صورة المنتج لاحقًا”</span>.
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" className="rounded-xl">
                  {editingId ? "حفظ التعديل" : "إضافة المنتج"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl"
                  onClick={resetForm}
                >
                  مسح
                </Button>
              </div>
            </form>
          </motion.section>

          <motion.section
            variants={scaleIn}
            className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-[0_0_0_1px_rgba(217,164,65,0.06)_inset] sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight">المنتجات المضافة</h2>
              <div className="text-muted-foreground text-sm">
                {sorted.length} منتج
              </div>
            </div>

            {sorted.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: luxuryEase }}
                className="mt-6 rounded-2xl border border-border/60 bg-background/20 p-6 text-center"
              >
                <div className="font-semibold">لا توجد منتجات محفوظة بعد</div>
                <div className="text-muted-foreground mt-2 text-sm">
                  أضف أول منتج من النموذج وسيظهر هنا وفي الصفحة الرئيسية.
                </div>
              </motion.div>
            ) : (
              <div className="mt-6 grid gap-4">
                {sorted.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: luxuryEase }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 18px 48px rgba(0,0,0,0.38)",
                      transition: { duration: 0.35, ease: luxuryEase },
                    }}
                    className="rounded-2xl border border-border/60 bg-background/20 p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="text-lg font-semibold">{p.name}</div>
                          <span className="text-muted-foreground text-xs">
                            • {p.availability === "available" ? "متوفر" : "غير متوفر"}
                          </span>
                        </div>
                        <div className="text-muted-foreground mt-1 text-sm">
                          {p.type} • {p.size}
                          {typeof p.price === "number" ? ` • ${p.price} ر.س` : ""}
                        </div>
                        {p.shortDescription ? (
                          <div className="text-muted-foreground mt-2 text-sm leading-relaxed">
                            {p.shortDescription}
                          </div>
                        ) : null}
                        <div className="text-muted-foreground mt-2 text-xs">
                          {p.image ? "يستخدم رابط صورة." : "سيتم إضافة صورة المنتج لاحقًا."}
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl"
                          onClick={() => startEdit(p)}
                        >
                          تعديل
                        </Button>
                        <Button
                          type="button"
                          variant="destructive"
                          className="rounded-xl"
                          onClick={() => remove(p.id)}
                        >
                          حذف
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        </motion.div>
      </motion.div>
    </main>
  );
}

