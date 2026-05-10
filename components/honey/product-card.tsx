"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Droplet, ImageOff } from "lucide-react";
import Link from "next/link";

import { ProductImageFrame } from "@/components/honey/product-image-frame";
import { Badge } from "@/components/ui/badge";
import { luxuryCardHover, luxuryEase, scaleIn, transitionHover } from "@/lib/motion";
import { type HoneyProduct, isNaturalMixProduct, isNutProduct } from "@/lib/products";
import { useMobileLite } from "@/lib/use-mobile-lite";
import { cn } from "@/lib/utils";

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

export default function ProductCard({ product }: { product: HoneyProduct }) {
  const price = formatPrice(product.price);
  const available = product.availability === "available";
  const hasImage = Boolean(product.image);
  const visualTheme = isNutProduct(product)
    ? "nuts"
    : isNaturalMixProduct(product)
      ? "mixes"
      : "honey";
  const mobileLite = useMobileLite();
  const reducedMotion = useReducedMotion();
  const lite = mobileLite || reducedMotion;

  return (
    <Link href={`/products/${product.id}`} className="block">
      <motion.article
        variants={scaleIn}
        whileHover={
          lite
            ? undefined
            : {
                y: luxuryCardHover.y,
                scale: luxuryCardHover.scale,
                boxShadow:
                  "0 34px 120px rgba(217,164,65,0.22), 0 22px 72px rgba(0,0,0,0.34)",
                transition: { duration: transitionHover.duration, ease: luxuryEase },
              }
        }
        className="lux-card group relative cursor-pointer overflow-hidden rounded-[1.75rem]"
      >
      <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-[0.34] blur-xl md:opacity-[0.45] md:blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(217,164,65,0.22),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(201,154,46,0.2),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(243,226,184,0.35),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative">
        <div className="h-[220px] overflow-hidden rounded-[1.5rem] sm:h-[250px] lg:h-[320px]">
          {hasImage ? (
            <ProductImageFrame
              src={product.image!}
              alt={product.name}
              variant="card"
              visualTheme={visualTheme}
              className="h-full"
            />
          ) : (
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,166,58,0.22),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,243,214,0.14),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.82),rgba(22,17,11,0.62),rgba(10,8,6,0.72))]" />
              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="lux-card w-full max-w-xs rounded-[1.5rem] p-6 text-center">
                  <motion.div
                    className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[rgba(212,166,58,0.28)] bg-[rgba(17,17,17,0.55)] px-4 py-2 text-[rgba(255,243,214,0.86)]"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Droplet className="size-4 text-[#D9A441]" />
                    <span className="text-sm font-medium text-[rgba(255,243,214,0.9)]">
                      عسل فاخر
                    </span>
                  </motion.div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#CBB89A]">
                    <ImageOff className="size-4 text-[#D9A441]" />
                    <span>سيتم إضافة صورة المنتج لاحقًا</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
          <Badge
            className={cn(
              "rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.55)] text-[#FFF3D6] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,243,214,0.10)_inset]",
              available ? "text-[#FFF3D6]" : "text-[#CBB89A]",
            )}
          >
            {available ? "متوفر" : "غير متوفر"}
          </Badge>
          {price ? (
            <Badge className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.55)] text-[#D9A441] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,243,214,0.10)_inset]">
              {price}
            </Badge>
          ) : null}
        </div>
      </div>

      <div className="relative p-6">
        <h3 className="lux-card-title text-xl font-semibold tracking-tight">
          {product.name}
        </h3>
        {product.shortDescription ? (
          <p className="lux-card-text mt-2 text-sm leading-relaxed">
            {product.shortDescription}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {product.type ? (
            <span className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.5)] px-3 py-1 text-[#CBB89A] backdrop-blur">
              النوع: {product.type}
            </span>
          ) : null}
          {product.size ? (
            <span className="rounded-full border border-[rgba(217,164,65,0.25)] bg-[rgba(11,9,6,0.5)] px-3 py-1 text-[#CBB89A] backdrop-blur">
              الحجم: {product.size}
            </span>
          ) : null}
        </div>
      </div>
      </motion.article>
    </Link>
  );
}
