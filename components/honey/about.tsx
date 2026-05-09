"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const viewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="text-primary text-sm font-semibold tracking-wide">
              نبذة عن مناحل مكيراس
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              خبرة يمنية… بطابع فاخر
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl leading-relaxed">
              مناحل مكيراس هي شركة يمنية رائدة متخصصة في إنتاج وتوزيع العسل اليمني
              الفاخر ومنتجاته المتميزة. تأسست الشركة عام 2016، وتمتلك خبرة تتجاوز
              15 عامًا في عالم العسل الطبيعي.
            </p>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                { k: "تأسست", v: "2016" },
                { k: "خبرة", v: "15+ سنة" },
                { k: "هوية", v: "عرض فاخر Premium" },
                { k: "تجربة", v: "طابع يمني أصيل" },
              ].map((x) => (
                <motion.div
                  key={x.k}
                  variants={scaleIn}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 30px 110px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.3)",
                    transition: { duration: 0.5, ease: luxuryEase },
                  }}
                  className="lux-card relative rounded-3xl px-6 py-5"
                >
                  <div className="lux-card-title text-sm font-semibold">{x.k}</div>
                  <div className="lux-card-text mt-1 text-lg font-semibold">{x.v}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lux-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(217,164,65,0.15),transparent_58%)]" />
            </div>
            <div className="relative">
              <h3 className="lux-card-title text-xl font-semibold">مختاراتنا</h3>
              <p className="lux-card-subtle mt-2 text-sm leading-relaxed">
                نعرض الأنواع الأساسية بشكل مختصر وواضح بصريًا.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="lux-card relative rounded-3xl p-5">
                  <div className="lux-card-title text-sm font-semibold">
                    أنواع العسل اليمني المختارة
                  </div>
                  <ul className="lux-card-text mt-3 grid gap-2 text-sm">
                    <li>العسل السدر الحضرمي</li>
                    <li>العسل الشبواني</li>
                    <li>العسل العودي</li>
                  </ul>
                </div>

                <div className="lux-card relative rounded-3xl p-5">
                  <div className="lux-card-title text-sm font-semibold">
                    منتجات طبيعية إضافية
                  </div>
                  <ul className="lux-card-text mt-3 grid gap-2 text-sm">
                    <li>المكسرات الطبيعية</li>
                    <li>الزيوت</li>
                    <li>الأعشاب المختارة</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
