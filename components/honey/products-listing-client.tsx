"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import HoneyCard from "@/components/honey/honey-card";
import NaturalMixCard from "@/components/honey/natural-mix-card";
import NutCard from "@/components/honey/nut-card";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
import {
  filterHoneyCatalog,
  getAllProducts,
  isNaturalMixProduct,
  isNutProduct,
  subscribeToProducts,
} from "@/lib/products";

const gridViewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function ProductsListingClient() {
  const [products, setProducts] = useState<HoneyProduct[]>(() => getAllProducts());

  useEffect(() => {
    const unsubscribe = subscribeToProducts(() => {
      setProducts(getAllProducts());
    });
    return unsubscribe;
  }, []);

  const honey = useMemo(() => filterHoneyCatalog(products), [products]);
  const nuts = useMemo(() => products.filter((p) => isNutProduct(p)), [products]);
  const mixes = useMemo(() => products.filter((p) => isNaturalMixProduct(p)), [products]);

  return (
    <>
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="space-y-14">
        <div>
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2 className="text-xl font-semibold tracking-tight text-[#D9A441] md:text-2xl">
              منتجات العسل
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#E8DCC4]">
              عسل يمني فاخر بجودة مختارة وعرض متناسق.
            </p>
          </div>
          <motion.div
            className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={gridViewport}
          >
            {honey.map((p) => (
              <HoneyCard key={p.id} product={p} />
            ))}
          </motion.div>
        </div>

        {nuts.length > 0 ? (
          <div className="rounded-3xl border border-[rgba(217,164,65,0.22)] bg-[linear-gradient(165deg,rgba(14,11,9,0.85),rgba(10,8,6,0.55))] p-6 shadow-[inset_0_1px_0_rgba(255,243,214,0.06)] sm:p-8">
            <div className="mx-auto mb-6 max-w-2xl text-center">
              <h2 className="text-xl font-semibold tracking-tight text-[#D9A441] md:text-2xl">
                المكسرات المختارة
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#E8DCC4]">
                مكسرات منتقاة بنفس هوية الجودة.
              </p>
            </div>
            <motion.div
              className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              viewport={gridViewport}
            >
              {nuts.map((p) => (
                <NutCard key={p.id} product={p} />
              ))}
            </motion.div>
          </div>
        ) : null}

        {mixes.length > 0 ? (
          <div className="rounded-3xl border border-[rgba(217,164,65,0.22)] bg-[linear-gradient(168deg,rgba(16,12,9,0.88),rgba(9,7,5,0.52))] p-6 shadow-[inset_0_1px_0_rgba(255,243,214,0.06)] sm:p-8">
            <div className="mx-auto mb-6 max-w-2xl text-center">
              <h2 className="text-xl font-semibold tracking-tight text-[#D9A441] md:text-2xl">
                خلطات طبيعية
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#E8DCC4]">
                خلطات منتقاة بجودة المكونات ولذة متوازنة.
              </p>
            </div>
            <motion.div
              className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              viewport={gridViewport}
            >
              {mixes.map((p) => (
                <NaturalMixCard key={p.id} product={p} />
              ))}
            </motion.div>
          </div>
        ) : null}
      </motion.div>
    </>
  );
}
