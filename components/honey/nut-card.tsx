"use client";

import { motion } from "framer-motion";
import { Bean, ImageOff } from "lucide-react";
import Link from "next/link";

import { ProductImageFrame } from "@/components/honey/product-image-frame";
import { Badge } from "@/components/ui/badge";
import { luxuryCardHover, luxuryEase, scaleIn, transitionHover } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
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

/** كرت مكسرات — هوية سوداء وذهبية منفصلة عن العسل (حد ذهبي أوضح، محتوى صورة/Placeholder) */
export default function NutCard({ product }: { product: HoneyProduct }) {
  const price = formatPrice(product.price);
  const available = product.availability === "available";
  const hasImage = Boolean(product.image);

  return (
    <Link href={`/products/${product.id}`} className="block">
      <motion.article
        variants={scaleIn}
        whileHover={{
          y: luxuryCardHover.y,
          scale: luxuryCardHover.scale,
          boxShadow:
            "0 34px 120px rgba(217,164,65,0.26), 0 22px 72px rgba(0,0,0,0.42), 0 0 0 1px rgba(217,164,65,0.35)",
          transition: { duration: transitionHover.duration, ease: luxuryEase },
        }}
        className={cn(
          "lux-card group relative cursor-pointer overflow-hidden rounded-[1.75rem]",
          "border border-[rgba(217,164,65,0.42)] shadow-[0_0_0_1px_rgba(255,243,214,0.06)_inset,0_18px_56px_rgba(0,0,0,0.35)]",
        )}
      >
        <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-[0.5] blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(217,164,65,0.26),transparent_58%)]" />
        </div>

        <div className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_25%,rgba(230,190,90,0.18),transparent_52%),radial-gradient(circle_at_65%_85%,rgba(243,226,184,0.22),transparent_58%)] blur-2xl" />
        </div>

        <div className="relative">
          <div className="h-[220px] overflow-hidden rounded-[1.45rem] sm:h-[250px] lg:h-[320px]">
            {hasImage ? (
              <ProductImageFrame
                src={product.image!}
                alt={product.name}
                variant="card"
                visualTheme="nuts"
                className="h-full"
              />
            ) : (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(217,164,65,0.2),transparent_58%),radial-gradient(circle_at_75%_80%,rgba(255,230,200,0.08),transparent_58%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(14,12,10,0.95),rgba(22,17,11,0.88),rgba(8,7,6,0.94))]" />
                <div className="absolute inset-0 grid place-items-center p-6">
                  <div className="w-full max-w-xs rounded-[1.35rem] border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,7,0.65)] p-6 text-center backdrop-blur-md">
                    <motion.div
                      className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[rgba(217,164,65,0.32)] bg-[rgba(17,14,11,0.55)] px-4 py-2 text-[rgba(255,243,214,0.88)]"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Bean className="size-4 text-[#D9A441]" aria-hidden />
                      <span className="text-sm font-medium text-[rgba(255,243,214,0.92)]">
                        مكسرات مختارة
                      </span>
                    </motion.div>
                    <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-[#CBB89A]">
                      <ImageOff className="size-4 text-[#D9A441]" aria-hidden />
                      <span className="leading-relaxed">صورة المنتج ستُضاف لاحقًا</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
            <Badge
              className={cn(
                "rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.58)] text-[#FFF3D6] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,243,214,0.08)_inset]",
                available ? "text-[#FFF3D6]" : "text-[#CBB89A]",
              )}
            >
              {available ? "متوفر" : "غير متوفر"}
            </Badge>
            {price ? (
              <Badge className="rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.58)] text-[#D9A441] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,243,214,0.08)_inset]">
                {price}
              </Badge>
            ) : null}
          </div>
        </div>

        <div className="relative p-6">
          <h3 className="lux-card-title text-xl font-semibold tracking-tight">{product.name}</h3>
          {product.shortDescription ? (
            <p className="lux-card-text mt-2 text-sm leading-relaxed">{product.shortDescription}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {product.type ? (
              <span className="rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.52)] px-3 py-1 text-[#CBB89A] backdrop-blur">
                النوع: {product.type}
              </span>
            ) : null}
            {product.size ? (
              <span className="rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.52)] px-3 py-1 text-[#CBB89A] backdrop-blur">
                الحجم: {product.size}
              </span>
            ) : null}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
