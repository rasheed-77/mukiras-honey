"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import HoneyCard from "@/components/honey/honey-card";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
import { getHoneyProducts, subscribeToProducts } from "@/lib/products";

const gridViewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function ProductsSection() {
  const [products, setProducts] = useState<HoneyProduct[]>(() => getHoneyProducts());

  useEffect(() => {
    const unsubscribe = subscribeToProducts(() => {
      setProducts(getHoneyProducts());
    });
    return unsubscribe;
  }, []);

  return (
    <Section
      id="products"
      className="relative overflow-hidden border-t border-[rgba(201,154,46,0.26)] bg-[linear-gradient(168deg,#070605_0%,#15110e_44%,#080706_100%)] py-16 text-[#f5ecd8] sm:py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div className="absolute -left-[12%] top-[14%] h-[46%] w-[46%] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.15),transparent_68%)] blur-3xl" />
        <div className="absolute -right-[10%] bottom-[10%] h-[50%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(255,200,110,0.1),transparent_66%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[radial-gradient(ellipse_88%_78%_at_50%_100%,rgba(217,164,65,0.09),transparent_62%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#FFF8EA]">منتجات العسل</h2>
          <p className="max-w-2xl leading-relaxed text-[#cab89c]">
            تشكيلة مختارة من العسل اليمني الفاخر بعرض فاخر يبرز نقاء الرحيق وأصالة المصدر — للاستفسار
            والاستعلام فقط.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          {products.map((p) => (
            <HoneyCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
