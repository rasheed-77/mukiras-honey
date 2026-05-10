"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import NaturalMixCard from "@/components/honey/natural-mix-card";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
import { getNaturalMixProducts, subscribeToProducts } from "@/lib/products";

const gridViewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function NaturalMixesSection() {
  const [mixes, setMixes] = useState<HoneyProduct[]>(() => getNaturalMixProducts());

  useEffect(() => {
    const unsubscribe = subscribeToProducts(() => {
      setMixes(getNaturalMixProducts());
    });
    return unsubscribe;
  }, []);

  return (
    <Section
      id="natural-mixes"
      className="relative mt-14 overflow-hidden border-t border-[rgba(201,154,46,0.26)] bg-[linear-gradient(172deg,#060504_0%,#18140f_46%,#0a0907_100%)] py-16 text-[#f6eee0] sm:mt-20 sm:py-20 md:mt-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div className="absolute left-[8%] top-[18%] h-[45%] w-[42%] rounded-full bg-[radial-gradient(circle,rgba(235,200,120,0.11),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[6%] right-[6%] h-[52%] w-[46%] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.13),transparent_66%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[42%] bg-[radial-gradient(ellipse_95%_70%_at_50%_0%,rgba(255,248,230,0.05),transparent_62%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#FFF8EA]">خلطات طبيعية</h2>
          <p className="max-w-2xl leading-relaxed text-[#cab89c]">
            مجموعة مختارة من الخلطات الطبيعية المصنوعة بعناية، تجمع بين جودة المكونات وفوائد المنتجات
            الصحية بأسلوب فاخر ومميز.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          {mixes.map((p) => (
            <NaturalMixCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
