"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import NutCard from "@/components/honey/nut-card";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
import { getNutProducts, subscribeToProducts } from "@/lib/products";

const gridViewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function NutsSection() {
  const [nuts, setNuts] = useState<HoneyProduct[]>(() => getNutProducts());

  useEffect(() => {
    const unsubscribe = subscribeToProducts(() => {
      setNuts(getNutProducts());
    });
    return unsubscribe;
  }, []);

  return (
    <Section
      id="nuts"
      className="relative mt-14 overflow-hidden border-t border-[rgba(201,154,46,0.28)] bg-[linear-gradient(168deg,#070605_0%,#14100d_42%,#080706_100%)] py-16 text-[#f5ecd8] sm:mt-20 sm:py-20 md:mt-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-75 md:opacity-90">
        <div className="absolute -left-[15%] top-[12%] hidden h-[42%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.14),transparent_68%)] blur-xl md:block md:blur-3xl" />
        <div className="absolute -right-[12%] bottom-[8%] hidden h-[48%] w-[52%] rounded-full bg-[radial-gradient(circle,rgba(180,120,45,0.12),transparent_65%)] blur-xl md:block md:blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[radial-gradient(ellipse_90%_80%_at_50%_100%,rgba(217,164,65,0.08),transparent_62%)] opacity-70 max-md:opacity-40 md:opacity-100" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#FFF8EA]">
            المكسرات المختارة
          </h2>
          <p className="max-w-2xl leading-relaxed text-[#c9b89a]">
            مجموعة مختارة من المكسرات الطازجة بعناية، بجودة عالية ومذاق فاخر يناسب محبي المنتجات
            الطبيعية والصحية.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          {nuts.map((p) => (
            <NutCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
