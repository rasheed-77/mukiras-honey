"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ImageOff, Layers } from "lucide-react";
import Link from "next/link";

import { ProductImageFrame } from "@/components/honey/product-image-frame";
import { Badge } from "@/components/ui/badge";
import { luxuryCardHover, luxuryEase, scaleIn, transitionHover } from "@/lib/motion";
import { useMobileLite } from "@/lib/use-mobile-lite";
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

/** كرت خلطات طبيعية — نفس أسلوب المكسرات مع هوية منفصلة */
export default function NaturalMixCard({ product }: { product: HoneyProduct }) {
  const price = formatPrice(product.price);
  const available = product.availability === "available";
  const hasImage = Boolean(product.image);
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
                  "0 34px 120px rgba(217,164,65,0.26), 0 22px 72px rgba(0,0,0,0.42), 0 0 0 1px rgba(217,164,65,0.38)",
                transition: { duration: transitionHover.duration, ease: luxuryEase },
              }
        }
        className={cn(
          "lux-card group relative cursor-pointer overflow-hidden rounded-[1.75rem]",
          "border border-[rgba(217,164,65,0.44)] shadow-[0_0_0_1px_rgba(255,243,214,0.07)_inset,0_18px_56px_rgba(0,0,0,0.38)]",
        )}
      >
        <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-[0.34] blur-xl md:opacity-[0.48] md:blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_88%,rgba(235,190,90,0.22),transparent_58%)]" />
        </div>

        <div className="pointer-events-none absolute -inset-10 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_22%,rgba(217,164,65,0.2),transparent_54%),radial-gradient(circle_at_62%_82%,rgba(255,236,200,0.18),transparent_58%)] blur-2xl" />
        </div>

        <div className="relative">
          <div className="h-[200px] overflow-hidden rounded-[1.45rem] sm:h-[250px] lg:h-[320px]">
            {hasImage ? (
              <ProductImageFrame
                src={product.image!}
                alt={product.name}
                variant="card"
                visualTheme="mixes"
                className="h-full"
              />
            ) : (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_28%,rgba(217,164,65,0.22),transparent_56%),radial-gradient(circle_at_72%_78%,rgba(200,160,70,0.1),transparent_58%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(148deg,rgba(12,10,8,0.96),rgba(20,15,11,0.9),rgba(7,6,5,0.95))]" />
                <div className="absolute inset-0 grid place-items-center p-6">
                  <div className="w-full max-w-xs rounded-[1.35rem] border border-[rgba(217,164,65,0.3)] bg-[rgba(11,9,7,0.78)] p-6 text-center backdrop-blur-sm md:bg-[rgba(11,9,7,0.68)] md:backdrop-blur-md">
                    <motion.div
                      className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[rgba(217,164,65,0.34)] bg-[rgba(17,14,11,0.55)] px-4 py-2 text-[rgba(255,243,214,0.9)]"
                      animate={lite ? undefined : { y: [0, -3, 0] }}
                      transition={
                        lite ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                      }
                    >
                      <Layers className="size-4 text-[#D9A441]" aria-hidden />
                      <span className="text-sm font-medium text-[rgba(255,243,214,0.94)]">
                        خلطات طبيعية
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
                "rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.72)] text-[#FFF3D6] shadow-[0_0_0_1px_rgba(255,243,214,0.08)_inset] backdrop-blur-sm md:bg-[rgba(11,9,6,0.58)] md:backdrop-blur-xl",
                available ? "text-[#FFF3D6]" : "text-[#CBB89A]",
              )}
            >
              {available ? "متوفر" : "غير متوفر"}
            </Badge>
            {price ? (
              <Badge className="rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.72)] text-[#D9A441] shadow-[0_0_0_1px_rgba(255,243,214,0.08)_inset] backdrop-blur-sm md:bg-[rgba(11,9,6,0.58)] md:backdrop-blur-xl">
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
