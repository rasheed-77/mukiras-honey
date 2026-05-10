"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { fadeInUp, luxuryEase, scrollViewport, staggerContainer } from "@/lib/motion";

export default function Footer() {
  const branches = ["عدن", "مكيراس", "البيضاء", "صنعاء"];

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(217,164,65,0.25)] bg-[linear-gradient(180deg,#0B0906,#120D07)] px-4 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-65 [background:radial-gradient(circle_at_20%_10%,rgba(217,164,65,0.18),transparent_55%),radial-gradient(circle_at_78%_65%,rgba(255,243,214,0.06),transparent_60%),radial-gradient(circle_at_40%_110%,rgba(217,164,65,0.10),transparent_52%)]" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        <div className="grid gap-10 lg:grid-cols-4">
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="text-xl font-semibold text-[#D9A441]">
              {siteConfig.name}
            </div>
            <p className="mt-4 max-w-xl leading-relaxed text-[#FFF3D6]">
              مناحل مكيراس شركة يمنية متخصصة في العسل اليمني الفاخر ومنتجاته
              الطبيعية. نركز على الجودة والتنوع والطابع الأصيل بتجربة عرض فاخرة.
            </p>

            <div className="mt-6 grid gap-2 text-sm text-[#CBB89A]">
              <div>
                <span className="font-semibold text-[#FFF3D6]">الهاتف:</span>{" "}
                <a className="transition-colors hover:text-[#FFF3D6]" href="tel:+967780759999">
                  +967780759999
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#FFF3D6]">البريد:</span>{" "}
                <a
                  className="transition-colors hover:text-[#FFF3D6]"
                  href="mailto:mukiras.honey@gmail.com"
                >
                  mukiras.honey@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-sm font-semibold text-[#D9A441]">روابط سريعة</div>
            <div className="mt-5 grid gap-3 text-sm text-[#FFF3D6]">
              <motion.a
                className="block w-fit transition-colors hover:text-[#D9A441]"
                href="#home"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                الرئيسية
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-[#D9A441]"
                href="/products"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                منتجاتنا
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-[#D9A441]"
                href="#nuts"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                المكسرات
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-[#D9A441]"
                href="#natural-mixes"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                خلطات طبيعية
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-[#D9A441]"
                href="#about"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                من نحن
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-[#D9A441]"
                href="#contact"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                تواصل معنا
              </motion.a>
              <motion.div
                className="w-fit"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                <Link className="transition-colors hover:text-[#D9A441]" href="/dashboard/products">
                  لوحة المنتجات
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-sm font-semibold text-[#D9A441]">الفروع</div>
            <div className="mt-4 grid gap-2 text-sm text-[#CBB89A]">
              {branches.map((c) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: luxuryEase }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 26px 78px rgba(0,0,0,0.44), 0 0 60px rgba(217,164,65,0.14)",
                    transition: { duration: 0.4, ease: luxuryEase },
                  }}
                  className="luxury-card relative rounded-2xl px-4 py-3"
                >
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-3 border-t border-[rgba(217,164,65,0.25)] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="text-sm text-[#CBB89A]">
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة
          </div>
          <div className="text-sm text-[#CBB89A]">
            تصميم Luxury Dark — عرض منتجات فقط
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
