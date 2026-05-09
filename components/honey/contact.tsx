"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { fadeInUp, luxuryEase } from "@/lib/motion";

const WHATSAPP_NUMBER = "966500000000"; // غيّره لاحقًا لرقمك
const WHATSAPP_MESSAGE = "مرحبًا، أود الاستفسار عن منتجات العسل.";

const viewport = { once: true, margin: "-48px" as const, amount: 0.2 };

const navHover = {
  y: -3,
  transition: { duration: 0.45, ease: luxuryEase },
};

export default function Contact() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <Section id="contact" className="pb-20">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-2 md:items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight">تواصل معنا</h2>
          <p className="text-muted-foreground mt-3 max-w-xl leading-relaxed">
            للطلبات والكميات والتفاصيل، تواصل معنا مباشرة عبر واتساب أو البريد.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <motion.div whileHover={navHover} whileTap={{ scale: 0.98 }}>
              <Button asChild className="rounded-xl">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  واتساب
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={navHover} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" className="rounded-xl">
                <a href={siteConfig.links.email}>
                  <Mail className="size-4" />
                  البريد الإلكتروني
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.08 }}
          className="rounded-3xl border border-border/60 bg-card/40 p-6"
        >
          <div className="text-primary text-sm font-medium">ملاحظة</div>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
            هذا الموقع للعرض فقط بدون سلة شراء أو دفع إلكتروني. إدارة المنتجات تتم
            من لوحة بسيطة على{" "}
            <a
              href="/dashboard/products"
              className="text-foreground underline underline-offset-4"
            >
              لوحة المنتجات
            </a>
            .
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
