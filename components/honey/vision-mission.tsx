"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const viewport = { once: true, margin: "-48px" as const, amount: 0.2 };

export default function VisionMission() {
  return (
    <Section id="vision">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow:
                "0 34px 120px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.32)",
              transition: { duration: 0.55, ease: luxuryEase },
            }}
            className="lux-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
          >
            <div className="pointer-events-none absolute -inset-6 opacity-35 blur-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,164,65,0.14),transparent_55%)]" />
            </div>
            <div className="relative">
              <div className="lux-card-title text-sm font-semibold">الرؤية</div>
              <h2 className="lux-card-title mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                أن نصبح من الرواد
              </h2>
              <p className="lux-card-text mt-4 leading-relaxed">
                أن نصبح من الرواد في إنتاج العسل الطبيعي والمنتجات الغذائية الفاخرة
                في اليمن والخليج العربي.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow:
                "0 34px 120px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.32)",
              transition: { duration: 0.55, ease: luxuryEase },
            }}
            className="lux-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
          >
            <div className="pointer-events-none absolute -inset-6 opacity-35 blur-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,164,65,0.14),transparent_55%)]" />
            </div>
            <div className="relative">
              <div className="lux-card-title text-sm font-semibold">الرسالة</div>
              <h2 className="lux-card-title mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                تقديم منتجات طبيعية عالية الجودة
              </h2>
              <p className="lux-card-text mt-4 leading-relaxed">
                تقديم منتجات طبيعية عالية الجودة تجمع بين الفائدة الصحية والطابع
                الأصيل.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
