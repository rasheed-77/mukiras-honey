"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import HoneyCard from "@/components/honey/honey-card";
import { ProductsLuxuryAtmosphere } from "@/components/honey/products-luxury-atmosphere";
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
      className="relative overflow-hidden border-t border-[rgba(217,164,65,0.22)] bg-[linear-gradient(180deg,#0B0906_0%,#120D07_40%,#16110B_100%)] py-16 text-[#f5ecd8] transition-colors duration-500 sm:py-20 md:py-28"
    >
      <ProductsLuxuryAtmosphere />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          <h2 className="bg-linear-to-br from-[#ECC66B] via-[#D9A441] to-[#b8892a] bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            منتجات العسل
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-[#E8DCC4]">
            تشكيلة مختارة من العسل اليمني الفاخر بعرض فاخر يبرز نقاء الرحيق وأصالة المصدر — للاستفسار
            والاستعلام فقط.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
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
