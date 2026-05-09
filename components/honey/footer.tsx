"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { fadeInUp, luxuryEase, scrollViewport, staggerContainer } from "@/lib/motion";

export default function Footer() {
  const branches = ["عدن", "مكيراس", "البيضاء", "صنعاء"];

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(201,154,46,0.22)] bg-[rgba(255,248,234,0.55)] px-4 py-16 backdrop-blur-[2px]">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_25%_20%,rgba(217,164,65,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,185,60,0.10),transparent_60%)]" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        <div className="grid gap-10 lg:grid-cols-4">
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="text-cream text-xl font-semibold">
              {siteConfig.name}
            </div>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              مناحل مكيراس شركة يمنية متخصصة في العسل اليمني الفاخر ومنتجاته
              الطبيعية. نركز على الجودة والتنوع والطابع الأصيل بتجربة عرض فاخرة.
            </p>

            <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
              <div>
                <span className="text-cream font-semibold">الهاتف:</span>{" "}
                <a className="transition-colors hover:text-foreground" href="tel:+967780759999">
                  +967780759999
                </a>
              </div>
              <div>
                <span className="text-cream font-semibold">البريد:</span>{" "}
                <a
                  className="transition-colors hover:text-foreground"
                  href="mailto:mukiras.honey@gmail.com"
                >
                  mukiras.honey@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-cream text-sm font-semibold">روابط سريعة</div>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <motion.a
                className="block w-fit transition-colors hover:text-foreground"
                href="#home"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                الرئيسية
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-foreground"
                href="#products"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                منتجاتنا
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-foreground"
                href="#about"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                من نحن
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-foreground"
                href="#gallery"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                المعرض
              </motion.a>
              <motion.a
                className="block w-fit transition-colors hover:text-foreground"
                href="#contact"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                تواصل معنا
              </motion.a>
              <motion.div
                className="w-fit"
                whileHover={{ x: -3, transition: { duration: 0.35, ease: luxuryEase } }}
              >
                <Link className="transition-colors hover:text-foreground" href="/dashboard/products">
                  لوحة المنتجات
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="text-cream text-sm font-semibold">الفروع</div>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {branches.map((c) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: luxuryEase }}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.4, ease: luxuryEase },
                  }}
                  className="glass-premium rounded-2xl px-4 py-3 shadow-[0_0_0_1px_rgba(201,154,46,0.14)] transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(26,18,8,0.1),0_8px_28px_rgba(201,154,46,0.12)]"
                >
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة
          </div>
          <div className="text-muted-foreground text-sm">
            تصميم Luxury Dark — عرض منتجات فقط
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
