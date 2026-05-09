"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const viewport = { once: true, margin: "-48px" as const, amount: 0.2 };

type Counter = {
  label: string;
  value: number;
  suffix?: string;
};

const counters: Counter[] = [
  { label: "سنة خبرة", value: 15, suffix: "+" },
  { label: "فرع ونقطة بيع", value: 25, suffix: "+" },
  { label: "منتج طبيعي", value: 30, suffix: "+" },
  { label: "عميل سعيد", value: 500, suffix: "+" },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Achievements() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [numbers, setNumbers] = useState<number[]>(() =>
    counters.map(() => 0),
  );

  const target = useMemo(() => counters.map((c) => c.value), []);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 900;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const k = easeOutCubic(t);
      setNumbers(target.map((v) => Math.round(v * k)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <Section id="achievements">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            ملامح نجاح مناحل مكيراس
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            مؤشرات مختصرة تُبرز مسارنا—تظهر بشكل أنيق عند الوصول للقسم.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              variants={scaleIn}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 30px 110px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.3)",
                transition: { duration: 0.5, ease: luxuryEase },
              }}
              className="lux-card relative rounded-[1.75rem] p-6 text-center"
            >
              <div className="lux-card-title text-4xl font-semibold tracking-tight">
                {numbers[i]}
                {c.suffix ?? ""}
              </div>
              <div className="lux-card-text mt-2 text-sm">
                {c.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

