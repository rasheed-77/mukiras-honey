"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const viewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function WhyChooseUs() {
  return (
    <Section id="why">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            لماذا عسلنا مختلف؟
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            تجربة فاخرة تتجنب “شكل القوالب” — مساحات واسعة، تفاصيل ذهبية هادئة،
            وحضور بصري قوي حتى بدون صور نهائية.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {[
            {
              title: "هوية سينمائية",
              desc: "تدرجات داكنة مع توهج ذهبي ناعم يعطي إحساس Luxury حقيقي.",
            },
            {
              title: "تفاصيل مرتبة",
              desc: "اسم، نوع، حجم، حالة توفر، وسعر اختياري—بدون تشتيت.",
            },
            {
              title: "جاهز للعرض على عميل",
              desc: "Placeholders راقية + Micro-interactions ناعمة لعرض الفكرة فورًا.",
            },
          ].map((x) => (
            <motion.div
              key={x.title}
              variants={scaleIn}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 34px 120px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.32)",
                transition: { duration: 0.55, ease: luxuryEase },
              }}
              className="lux-card relative rounded-[1.75rem] p-6"
            >
              <div className="lux-card-title text-sm font-medium">{x.title}</div>
              <div className="lux-card-text mt-2 text-sm leading-relaxed">
                {x.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
