"use client";

import { motion } from "framer-motion";
import { Crown, Leaf, Sparkles } from "lucide-react";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const features = [
  {
    icon: Crown,
    title: "جودة فائقة",
    desc: "نتميز بتقديم أعلى مستويات الجودة في منتجاتنا، حيث يتم اختيار وإنتاج العسل والمنتجات الطبيعية بعناية فائقة.",
  },
  {
    icon: Leaf,
    title: "تنوع المنتجات",
    desc: "نقدم مجموعة متنوعة من العسل اليمني والمكسرات والزيوت والأعشاب الطبيعية لتلبية مختلف احتياجات عملائنا.",
  },
  {
    icon: Sparkles,
    title: "تجربة أصيلة",
    desc: "نسعى لتقديم تجربة غنية تجمع بين جودة المنتجات والطابع اليمني الأصيل.",
  },
];

const viewport = { once: true, margin: "-48px" as const, amount: 0.2 };

export default function Features() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-6 md:grid-cols-2 md:items-end"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">المميزات</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              قيمنا الأساسية تُترجم إلى تجربة عرض فاخرة ومتوازنة—مختصرة وواضحة
              بصريًا بدون إطالة.
            </p>
          </div>
          <div className="text-muted-foreground text-sm md:text-left">
            جودة • تنوع • أصالة
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={scaleIn}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 34px 120px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.32)",
                  transition: { duration: 0.55, ease: luxuryEase },
                }}
                className="lux-card group relative rounded-[1.75rem] p-6"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(217,164,65,0.14),transparent_62%)]" />
                </div>
                <div className="flex items-center gap-3">
                  <motion.span
                    className="lux-icon-badge grid size-11 place-items-center rounded-2xl backdrop-blur"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45, ease: luxuryEase }}
                  >
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex"
                    >
                      <Icon className="size-5 text-[#D4A63A] transition-transform duration-500 group-hover:scale-110" />
                    </motion.span>
                  </motion.span>
                  <div className="lux-card-title font-semibold">{f.title}</div>
                </div>
                <p className="lux-card-text mt-3 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
