"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import {
  ambientGlowPulse,
  fadeInUp,
  luxuryEase,
  scaleIn,
  staggerContainer,
} from "@/lib/motion";

type Review = {
  name: string;
  text: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "فاطمة سعيد",
    text: "منتجات ممتازة وجودة واضحة… تجربة راقية فعلًا من أول تعامل.",
    rating: 5,
  },
  {
    name: "أصيل الحاج",
    text: "تنوع جميل وطابع يمني أصيل. العرض مرتب ويشجع على الطلب مباشرة.",
    rating: 5,
  },
  {
    name: "بليغ محفوظ عبد الجليل",
    text: "تغليف أنيق ومذاق رائع. حتى الـPlaceholders تعطي إحساس Premium.",
    rating: 5,
  },
];

const viewport = { once: true, margin: "-48px" as const, amount: 0.2 };

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const total = reviews.length;

  const active = useMemo(() => reviews[idx]!, [idx]);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIdx((v) => (v + 1) % total);
    }, 6500);
    return () => window.clearInterval(t);
  }, [total]);

  function prev() {
    setIdx((v) => (v - 1 + total) % total);
  }
  function next() {
    setIdx((v) => (v + 1) % total);
  }

  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">آراء العملاء</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              تقييمات مختارة داخل كروت فاخرة—بأنيميشن ناعم دون إزعاج.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.45, ease: luxuryEase } }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                type="button"
                variant="outline"
                className="rounded-2xl"
                onClick={prev}
                aria-label="السابق"
              >
                <ChevronRight className="size-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.45, ease: luxuryEase } }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                type="button"
                variant="outline"
                className="rounded-2xl"
                onClick={next}
                aria-label="التالي"
              >
                <ChevronLeft className="size-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="luxury-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              className="pointer-events-none absolute -inset-10 z-0"
              variants={ambientGlowPulse}
              initial="initial"
              animate="animate"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_22%,rgba(217,164,65,0.2),transparent_58%)] blur-3xl" />
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.62, ease: luxuryEase }}
                className="relative z-[1]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-[#D9A441]">{active.name}</div>
                  <div className="flex items-center gap-1 text-[#D9A441]">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current opacity-90" />
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-lg leading-relaxed text-[#FFF3D6]">
                  {active.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {reviews.map((r, i) => (
              <motion.button
                key={r.name}
                type="button"
                variants={scaleIn}
                onClick={() => setIdx(i)}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 26px 78px rgba(0,0,0,0.44), 0 0 60px rgba(217,164,65,0.14)",
                  transition: { duration: 0.45, ease: luxuryEase },
                }}
                className={[
                  "luxury-card relative rounded-[1.5rem] p-5 text-right",
                  i === idx
                    ? "border-[rgba(217,164,65,0.48)]"
                    : "hover:border-[rgba(217,164,65,0.48)]",
                ].join(" ")}
              >
                <div className="text-sm font-semibold text-[#D9A441]">{r.name}</div>
                <div className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#CBB89A]">
                  {r.text}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
