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
          <h2 className="text-xl font-semibold tracking-tight text-[#2a2318]">منتجات العسل</h2>
          <p className="mt-1 text-sm text-[#5c4a32]">عسل يمني فاخر بجودة مختارة وعرض متناسق.</p>
          <motion.div
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
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
          <div className="rounded-3xl border border-[rgba(201,154,46,0.22)] bg-[linear-gradient(165deg,rgba(14,11,8,0.06),rgba(246,231,200,0.35))] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-[#2a2318]">المكسرات المختارة</h2>
            <p className="mt-1 text-sm text-[#5c4a32]">مكسرات منتقاة بنفس هوية الجودة.</p>
            <motion.div
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
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
          <div className="rounded-3xl border border-[rgba(201,154,46,0.22)] bg-[linear-gradient(168deg,rgba(18,14,10,0.07),rgba(246,231,200,0.32))] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-[#2a2318]">خلطات طبيعية</h2>
            <p className="mt-1 text-sm text-[#5c4a32]">خلطات منتقاة بجودة المكونات ولذة متوازنة.</p>
            <motion.div
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
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
