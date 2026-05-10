"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import {
  fadeInUp,
  luxuryCardHover,
  luxuryEase,
  scaleIn,
  staggerContainer,
  transitionHover,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  /** رابط مؤقت — استبدله بصفحة المقال لاحقًا */
  href: string;
};

const posts: BlogPost[] = [
  {
    id: "royal-honey-benefits",
    image: "/benifits%20sections/1.png",
    title: "فوائد العسل الملكي: كنز صحي يعزز الصحة ويحمي من الأمراض",
    excerpt:
      "يحمل العسل الملكي العديد من الفوائد التي تسهم في تعزيز الصحة وتحسين وظائف الجسم. دعونا نلقي نظرة على هذا العسل الخاص وتأثيره على صحة الإنسان.",
    href: "#",
  },
  {
    id: "almond-benefits",
    image: "/benifits%20sections/2.png",
    title: "فوائد اللوز: كنز طبيعي للصحة والجمال وتحسين نوعية الحياة",
    excerpt:
      "عندما يعلن فصل الشتاء انقضاؤه وتحلّ الربيع، يتفتح شجر اللوز وتنمو ثماره، لينضج اللوز بعد نحو ستة أشهر من فترة الإزهار.",
    href: "#",
  },
  {
    id: "pumpkin-seeds-benefits",
    image: "/benifits%20sections/3.png",
    title: "فوائد بذور القرع: استكشاف عالم الفوائد الصحية",
    excerpt:
      "فوائد بذور القرع عديدة ورائعة، فهي معروفة أيضًا ببذور اليقطين، ولها تأثيرات إيجابية على الصحة ونمط الحياة.",
    href: "#",
  },
  {
    id: "honey-health-benefits",
    image: "/benifits%20sections/4.png",
    title: "فوائد العسل: وكيف يمكن أن يحسن صحتك",
    excerpt:
      "يُستهلك العسل على نطاق واسع في جميع أنحاء العالم، فهو من المصادر الطبيعية التي تمتاز بفوائدها الصحية العديدة وقيمته الغذائية العالية.",
    href: "#",
  },
];

const gridViewport = { once: true, margin: "-48px" as const, amount: 0.15 };

/** نمط خلية نحل خافت — SVG متكرر */
function HoneycombPattern({ className }: { className?: string }) {
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'><path d='M28 2 L54 17 V51 L28 66 L2 51 V17 Z' fill='none' stroke='%23D9A441' stroke-width='0.35' opacity='0.5'/><path d='M28 34 L54 49 V83 L28 98 L2 83 V49 Z' fill='none' stroke='%23D9A441' stroke-width='0.35' opacity='0.45'/></svg>`,
  );
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-[0.22]", className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
        backgroundSize: "56px 100px",
      }}
      aria-hidden
    />
  );
}

export default function BlogPreview() {
  return (
    <Section
      id="blog"
      className="relative mt-14 overflow-x-hidden border-t border-[rgba(201,154,46,0.26)] bg-[linear-gradient(170deg,#050403_0%,#15110d_48%,#070605_100%)] py-16 text-[#f5ecd8] sm:mt-20 sm:py-20 md:mt-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[10%] h-[48%] w-[44%] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[6%] right-[5%] h-[52%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(200,150,60,0.11),transparent_66%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[38%] bg-[radial-gradient(ellipse_90%_72%_at_50%_0%,rgba(255,248,235,0.06),transparent_62%)] opacity-90" />
        <HoneycombPattern />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-[22%] h-px bg-[linear-gradient(90deg,transparent,rgba(217,164,65,0.35),transparent)] opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[18%] h-px bg-[linear-gradient(90deg,transparent,rgba(217,164,65,0.22),transparent)] opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-[#FFF8EA] md:text-[2rem]">
              آخر المقالات
            </h2>
            <p className="max-w-4xl text-[0.9375rem] leading-[1.85] text-[#d8c9ae] sm:text-base">
              مقالاتنا تقدم لكم معلومات قيمة حول كيفية الاستفادة القصوى من منتجاتنا، والطرق الصحيحة
              لاستخدامها في الحياة اليومية. سنأخذكم في رحلة معرفية لاكتشاف عالم العسل والتغذية الصحية
              والأعشاب الطبيعية. نهدف إلى توفير مصدر شامل للمعرفة حول المنتجات الطبيعية والتغذية الصحية،
              لذا لا تترددوا في البقاء معنا واستكشاف عالم الصحة والطعام الطبيعي.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={gridViewport}
        >
          {posts.map((p) => (
            <motion.div key={p.id} variants={scaleIn} className="min-w-0">
              <Link
                href={p.href}
                className="group block min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(217,164,65,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0806]"
              >
                <motion.div
                  whileHover={{
                    y: luxuryCardHover.y,
                    scale: luxuryCardHover.scale,
                    boxShadow:
                      "0 34px 120px rgba(217,164,65,0.22), 0 22px 72px rgba(0,0,0,0.42), 0 0 0 1px rgba(217,164,65,0.34)",
                    transition: { duration: transitionHover.duration, ease: luxuryEase },
                  }}
                  className={cn(
                    "lux-card relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem]",
                    "border border-[rgba(217,164,65,0.42)] shadow-[0_0_0_1px_rgba(255,243,214,0.06)_inset,0_18px_56px_rgba(0,0,0,0.38)]",
                  )}
                >
                  <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-[0.45] blur-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_88%,rgba(217,164,65,0.2),transparent_58%)]" />
                  </div>

                  <div className="relative overflow-hidden rounded-t-[1.55rem] border-b border-[rgba(217,164,65,0.22)]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0806]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_52px_rgba(217,164,65,0.14)]" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(0,0,0,0.2)_100%)] opacity-90" />
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-snug tracking-tight text-[#F4E4B8] sm:text-[1.05rem]">
                      {p.title}
                    </h3>
                    <p className="lux-card-text mt-3 flex-1 text-sm leading-relaxed">{p.excerpt}</p>

                    <div className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[rgba(217,164,65,0.38)] bg-[rgba(11,9,7,0.45)] px-4 py-2.5 text-sm text-[#FFF3D6] backdrop-blur-sm transition-colors duration-500 group-hover:border-[rgba(217,164,65,0.55)] group-hover:bg-[rgba(22,17,11,0.55)] group-hover:text-[#FFF8EA] sm:w-auto sm:self-start">
                      <span>قراءة المزيد</span>
                      <ArrowLeft className="size-4 opacity-85" aria-hidden />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
