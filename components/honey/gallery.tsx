"use client";

import { motion } from "framer-motion";
import { ImageOff, Sparkles } from "lucide-react";

import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

const placeholders = Array.from({ length: 9 }).map((_, i) => i);

const viewport = { once: true, margin: "-40px" as const, amount: 0.12 };

export default function Gallery() {
  return (
    <Section id="gallery">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          className="flex items-end justify-between gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              معرض بصري فاخر
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              Masonry/Grid حديث بلمسة سينمائية—جاهز لاستبدال الـPlaceholders بصور
              حقيقية لاحقًا.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {placeholders.map((i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: { duration: 0.55, ease: luxuryEase },
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-border/60 bg-[rgba(255,248,234,0.5)] backdrop-blur-xl transition-[box-shadow] duration-500 hover:border-primary/40 hover:bg-[rgba(255,248,234,0.75)] hover:shadow-[0_28px_70px_rgba(26,18,8,0.12),0_20px_50px_rgba(201,154,46,0.12)]"
            >
              <div className="pointer-events-none absolute -inset-px opacity-40 blur-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(217,164,65,0.1),transparent_55%)]" />
              </div>
              <div
                className={[
                  "relative overflow-hidden",
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-[16/10]",
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.22),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(217,119,6,0.16),transparent_60%)] transition-transform duration-[850ms] ease-out group-hover:scale-[1.09]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,243,232,0.35),rgba(201,154,46,0.1),rgba(26,18,8,0.2))]" />
                <div className="absolute inset-0 grid place-items-center p-6">
                  <div className="w-full max-w-xs rounded-[1.5rem] border border-border/60 bg-background/18 p-6 text-center backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
                    <motion.div
                      className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/15 px-4 py-2"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15,
                      }}
                    >
                      <Sparkles className="size-4 text-primary" />
                      <span className="text-sm font-medium text-cream">عرض تجريبي</span>
                    </motion.div>
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <ImageOff className="size-4" />
                      <span>الصور النهائية ستُضاف لاحقًا</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-5">
                <div className="rounded-2xl border border-border/60 bg-background/20 px-4 py-3 backdrop-blur-xl">
                  <div className="text-sm font-medium text-cream">
                    لقطة #{i + 1}
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    هذا Placeholder فاخر لعرض الفكرة حتى تتوفر الصور.
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
