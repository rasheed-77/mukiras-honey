"use client";

import { motion } from "framer-motion";
import { Droplet, Leaf, Package, Sparkles } from "lucide-react";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const steps = [
  {
    icon: Leaf,
    title: "من المنحل",
    desc: "مصادر موثوقة وانتقاء دقيق للمناحل لضمان نقاء التجربة.",
  },
  {
    icon: Droplet,
    title: "استخلاص بعناية",
    desc: "عناية في التعامل للحفاظ على القوام والنكهة واللون الذهبي.",
  },
  {
    icon: Package,
    title: "إلى العبوة",
    desc: "تعبئة أنيقة ومعايير واضحة—عرض راقٍ يليق بعلامة فاخرة.",
  },
  {
    icon: Sparkles,
    title: "إلى عميلك",
    desc: "Showcase سينمائي يبهِر العميل حتى قبل إضافة الصور النهائية.",
  },
];

const viewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function Journey() {
  return (
    <Section id="journey">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            رحلة العسل من المنحل إلى العبوة
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            سرد بصري مختصر—مساحات واسعة وكروت زجاجية—ليظهر الفرق منذ أول نظرة.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={scaleIn}
                whileHover={{
                  y: -6,
                  boxShadow: "0 26px 78px rgba(0,0,0,0.44), 0 0 60px rgba(217,164,65,0.14)",
                  transition: { duration: 0.55, ease: luxuryEase },
                }}
                className="luxury-card group relative rounded-[1.75rem] p-6"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="grid size-11 place-items-center rounded-2xl border border-[rgba(217,164,65,0.25)] bg-[rgba(217,164,65,0.12)] backdrop-blur"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="size-5 text-[#D9A441] transition-transform duration-500 group-hover:scale-110" />
                  </motion.span>
                  <div className="font-semibold text-[#D9A441]">{s.title}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#CBB89A]">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
