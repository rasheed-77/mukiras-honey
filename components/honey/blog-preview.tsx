"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { fadeInUp, luxuryEase, scaleIn, staggerContainer } from "@/lib/motion";

type Post = {
  title: string;
  description: string;
};

const posts: Post[] = [
  {
    title: "فوائد العسل الملكي",
    description:
      "لمحة سريعة عن أبرز الفوائد والاستخدامات الشائعة مع نص مختصر لعرض الفكرة.",
  },
  {
    title: "فوائد اللوز",
    description:
      "محتوى تمهيدي قصير يوضح القيمة الغذائية بأسلوب أنيق بدون إطالة.",
  },
  {
    title: "فوائد بذور القرع",
    description:
      "نقاط مختصرة للتعريف بالفوائد—هذا القسم Preview فقط وسيتم تطويره لاحقًا.",
  },
];

const viewport = { once: true, margin: "-48px" as const, amount: 0.15 };

export default function BlogPreview() {
  return (
    <Section id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">المقالات</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              بطاقات معاينة فاخرة—صور Placeholder الآن، ومحتوى كامل لاحقًا.
            </p>
          </div>
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.45, ease: luxuryEase } }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" className="rounded-2xl">
              <BookOpen className="size-4" />
              جميع المقالات
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={scaleIn}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 34px 120px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.32)",
                transition: { duration: 0.55, ease: luxuryEase },
              }}
              className="lux-card group relative overflow-hidden rounded-[1.75rem] p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.28] blur-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,164,65,0.15),transparent_55%)]" />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgba(212,166,58,0.22)]">
                <div className="aspect-[16/10] bg-[radial-gradient(circle_at_30%_30%,rgba(212,166,58,0.22),transparent_58%),radial-gradient(circle_at_75%_75%,rgba(255,243,214,0.12),transparent_58%),linear-gradient(135deg,rgba(17,17,17,0.82),rgba(22,17,11,0.62),rgba(10,8,6,0.72))]" />
                <div className="pointer-events-none absolute inset-0 lux-media-overlay opacity-[0.55] transition-opacity duration-700 group-hover:opacity-[0.45]" />
                <div className="absolute inset-0 grid place-items-center p-4">
                  <div className="rounded-2xl border border-[rgba(212,166,58,0.26)] bg-[rgba(17,17,17,0.55)] px-4 py-2 text-xs text-[rgba(255,243,214,0.72)] backdrop-blur-xl">
                    صورة Placeholder
                  </div>
                </div>
              </div>

              <h3 className="lux-card-title relative mt-5 text-lg font-semibold">
                {p.title}
              </h3>
              <p className="lux-card-text relative mt-2 text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="relative mt-5">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                >
                  <Button className="rounded-2xl px-5" asChild>
                    <a href="#contact">
                      قراءة المزيد
                      <ArrowLeft className="size-4 opacity-80" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
