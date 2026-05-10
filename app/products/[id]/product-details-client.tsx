"use client";

import { motion } from "framer-motion";
import { ImageOff, MessageCircle, Tag } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import HoneyCard from "@/components/honey/honey-card";
import NaturalMixCard from "@/components/honey/natural-mix-card";
import NutCard from "@/components/honey/nut-card";
import { ProductImageFrame } from "@/components/honey/product-image-frame";
import { Button } from "@/components/ui/button";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
import {
  getAllProducts,
  getProductById,
  isNaturalMixProduct,
  isNutProduct,
} from "@/lib/products";

function formatPrice(price?: number) {
  if (typeof price !== "number") return null;
  try {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(price);
  } catch {
    return `${price}`;
  }
}

function whatsappHref(product: HoneyProduct) {
  // Phone intentionally omitted (can be added later in config).
  const text = `السلام عليكم، أريد الاستفسار عن المنتج: ${product.name} (ID: ${product.id})`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function ProductDetailsClient({ id }: { id: string }) {
  const product = useMemo(() => getProductById(id), [id]);

  const all = useMemo(() => getAllProducts(), []);
  const similar = useMemo(() => {
    if (!product) return [];
    const sameCategory = (p: (typeof all)[number]) =>
      (p.category ?? "honey") === (product.category ?? "honey");
    return all.filter((p) => p.id !== product.id).filter(sameCategory).slice(0, 3);
  }, [all, product]);

  if (!product) {
    return (
      <div className="lux-card relative rounded-[2rem] p-8 text-center">
        <div className="lux-card-title text-xl font-semibold">المنتج غير موجود</div>
        <div className="lux-card-text mt-2 text-sm">
          تأكد من الرابط أو ارجع لقسم المنتجات.
        </div>
        <div className="mt-6">
          <Button asChild className="rounded-2xl">
            <Link href="/products">رجوع للمنتجات</Link>
          </Button>
        </div>
      </div>
    );
  }

  const price = formatPrice(product.price);
  const available = product.availability === "available";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <motion.section variants={scaleIn} className="lux-card relative rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(217,164,65,0.25)]">
            {product.image ? (
              <ProductImageFrame
                src={product.image}
                alt={product.name}
                variant="detail"
                visualTheme={
                  isNutProduct(product) ? "nuts" : isNaturalMixProduct(product) ? "mixes" : "honey"
                }
                className="min-h-[280px] w-full lg:min-h-[380px]"
              />
            ) : (
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,164,65,0.22),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,243,214,0.12),transparent_60%),linear-gradient(135deg,rgba(17,17,17,0.86),rgba(11,9,6,0.78),rgba(22,17,11,0.72))]" />
                <div className="pointer-events-none absolute inset-0 lux-media-overlay opacity-[0.55]" />
                <div className="absolute inset-0 grid place-items-center p-6 text-center">
                  <div className="lux-icon-badge grid size-12 place-items-center rounded-2xl">
                    <ImageOff className="size-5 text-[#D9A441]" aria-hidden />
                  </div>
                  <div className="lux-card-subtle mt-3 text-xs">صورة المنتج ستُضاف لاحقًا</div>
                </div>
              </div>
            )}
          </div>

          <div>
            <motion.h1 variants={fadeInUp} className="lux-card-title text-3xl font-semibold tracking-tight">
              {product.name}
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.5)] px-3 py-1 text-[#CBB89A] backdrop-blur">
                <Tag className="me-1 inline-block size-3.5 text-[#D9A441]" aria-hidden /> النوع: {product.type}
              </span>
              <span className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.5)] px-3 py-1 text-[#CBB89A] backdrop-blur">
                الحجم: {product.size}
              </span>
              {price ? (
                <span className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.5)] px-3 py-1 text-[#D9A441] backdrop-blur">
                  {price}
                </span>
              ) : null}
              <span className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.5)] px-3 py-1 text-[#FFF3D6] backdrop-blur">
                الحالة: {available ? "متوفر" : "غير متوفر"}
              </span>
            </motion.div>

            {product.shortDescription ? (
              <motion.p variants={fadeInUp} className="lux-card-text mt-4 leading-relaxed">
                {product.shortDescription}
              </motion.p>
            ) : (
              <motion.p variants={fadeInUp} className="lux-card-subtle mt-4 leading-relaxed">
                وصف المنتج غير متوفر حاليًا.
              </motion.p>
            )}

            <motion.div variants={fadeInUp} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.45, ease: luxuryEase }}>
                <Button asChild className="rounded-2xl">
                  <a href={whatsappHref(product)} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" aria-hidden />
                    استفسار عبر واتساب
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.45, ease: luxuryEase }}>
                <Button asChild variant="outline" className="rounded-2xl">
                  <Link href="/products">رجوع للمنتجات</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.aside variants={scaleIn} className="lux-card relative rounded-[2rem] p-6 sm:p-8">
        <div className="lux-card-title text-lg font-semibold">منتجات مشابهة</div>
        <div className="lux-card-subtle mt-2 text-sm">نفس النوع أو اقتراحات قريبة.</div>

        {similar.length === 0 ? (
          <div className="lux-card-text mt-6 text-sm">لا توجد اقتراحات حاليًا.</div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-6 grid gap-4"
          >
            {similar.map((p) =>
              isNutProduct(p) ? (
                <NutCard key={p.id} product={p} />
              ) : isNaturalMixProduct(p) ? (
                <NaturalMixCard key={p.id} product={p} />
              ) : (
                <HoneyCard key={p.id} product={p} />
              ),
            )}
          </motion.div>
        )}
      </motion.aside>
    </motion.div>
  );
}

