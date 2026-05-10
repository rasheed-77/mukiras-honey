"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";
import { useMobileLite } from "@/lib/use-mobile-lite";

const viewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function About() {
  const mobileLite = useMobileLite();
  const reducedMotion = useReducedMotion();
  const lite = mobileLite || reducedMotion;

  return (
    <Section id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="order-1 lg:order-1"
          >
            <motion.div
              whileHover={lite ? undefined : { scale: 1.015 }}
              transition={{ duration: 0.75, ease: luxuryEase }}
              className="luxury-card group relative overflow-hidden rounded-3xl"
            >
              <motion.div
                className="pointer-events-none absolute -inset-8 opacity-60 blur-xl max-md:opacity-45 md:opacity-70 md:blur-3xl"
                animate={
                  lite ? undefined : { opacity: [0.55, 0.8, 0.55], scale: [1, 1.03, 1] }
                }
                transition={
                  lite ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }
                aria-hidden
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(217,164,65,0.22),transparent_58%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(217,164,65,0.12),transparent_62%)]" />
              </motion.div>

              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image
                  src="/who are we/who are we.jpg"
                  alt="مناحل مكيراس"
                  fill
                  priority={false}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 45vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                {/* cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.58))]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.85] [background:radial-gradient(circle_at_35%_18%,rgba(217,164,65,0.22),transparent_58%),radial-gradient(circle_at_78%_78%,rgba(255,243,214,0.08),transparent_62%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background:linear-gradient(135deg,rgba(255,255,255,0.10),transparent_42%)]" />
              </div>
            </motion.div>

            <motion.div
              className="mt-4 text-sm text-[#CBB89A]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: luxuryEase }}
            >
              لقطة حقيقية — يتم تحديث مكتبة الصور لاحقًا حسب المنتجات والتغليف.
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="order-2 lg:order-2"
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
        </div>
      </div>
    </Section>
  );
}
