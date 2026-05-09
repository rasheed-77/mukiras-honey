"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ProductCard from "@/components/honey/product-card";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import type { HoneyProduct } from "@/lib/products";
import { demoProducts, getProducts, subscribeToProducts } from "@/lib/products";

const gridViewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function ProductsSection() {
  const [products, setProducts] = useState<HoneyProduct[]>(() => getProducts());

  useEffect(() => {
    const unsubscribe = subscribeToProducts(() => {
      setProducts(getProducts());
    });
    return unsubscribe;
  }, []);

  return (
    <Section id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            أجود أنواع العسل من مكيراس
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            نقدم تشكيلة مختارة من العسل اليمني الفاخر والمنتجات الطبيعية عالية
            الجودة. (عرض فقط بدون سلة أو دفع)
          </p>
        </motion.div>

        {products.length === 0 ? (
          <div className="mt-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={gridViewport}
              className="lux-card relative rounded-3xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-lg font-semibold">
                    منتجات تجريبية لعرض الشكل
                  </div>
                  <div className="lux-card-text mt-1 text-sm">
                    هذه أمثلة Placeholder فقط حتى تضيف المنتجات الحقيقية من لوحة
                    الإدارة.
                  </div>
                </div>
                <a
                  href="/dashboard/products"
                  className="mt-3 inline-block rounded-xl border border-[rgba(212,166,58,0.28)] bg-[rgba(17,17,17,0.5)] px-5 py-3 text-sm text-[rgba(255,243,214,0.86)] transition-colors duration-500 hover:border-[rgba(212,166,58,0.5)] hover:bg-[rgba(22,17,11,0.62)] sm:mt-0"
                >
                  إضافة منتجات من لوحة المنتجات
                </a>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={gridViewport}
            >
              {[
                {
                  ...demoProducts[0],
                  id: "demo-sidr",
                  name: "عسل السدر الفاخر",
                  type: "سدر",
                  size: "500 جم",
                },
                {
                  ...demoProducts[1],
                  id: "demo-samar",
                  name: "العسل الشبواني",
                  type: "شبواني",
                  size: "500 جم",
                },
                {
                  ...demoProducts[2],
                  id: "demo-mountain",
                  name: "العسل العودي",
                  type: "عودي",
                  size: "250 جم",
                },
                {
                  ...demoProducts[3],
                  id: "demo-meadow",
                  name: "عسل الزهور الجبلية",
                  type: "زهور جبلية",
                  size: "500 جم",
                },
                ...demoProducts.slice(4),
              ].map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={gridViewport}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        )}
      </div>
    </Section>
  );
}
