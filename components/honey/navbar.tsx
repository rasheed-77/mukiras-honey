"use client";

import { motion } from "framer-motion";
import { Menu, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const links: { href: string; label: string }[] = [
  { href: "#home", label: "الرئيسية" },
  { href: "/products", label: "منتجاتنا" },
  { href: "#nuts", label: "المكسرات" },
  { href: "#natural-mixes", label: "خلطات طبيعية" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل معنا" },
];

const WHATSAPP_NUMBER = "966500000000"; // غيّره لاحقًا
const WHATSAPP_MESSAGE = "مرحبًا، أود الاستفسار عن منتجات العسل.";

const navHover = {
  y: -2,
  transition: { duration: 0.4, ease: luxuryEase },
};

export default function Navbar() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <motion.header
      initial={false}
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        elevated
          ? "border-[rgba(201,154,46,0.38)] bg-[#080604]/96 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          : "border-[rgba(201,154,46,0.22)] bg-[#080604]/94 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="hidden items-center gap-2 md:flex">
          <motion.div whileHover={navHover} whileTap={{ scale: 0.98 }}>
            <Button asChild className="rounded-2xl px-5">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                واتساب
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={navHover} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-[rgba(201,154,46,0.35)] bg-white/6 text-[#f5ecd8] backdrop-blur-xl hover:bg-white/10 hover:text-[#fff8ea]"
            >
              <Link href="/dashboard/products">لوحة المنتجات</Link>
            </Button>
          </motion.div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              whileHover={navHover}
              className="relative text-[17px] text-[#b9a896] transition-colors after:absolute after:-bottom-2 after:right-0 after:h-px after:w-0 after:bg-[#C99A2E]/75 after:transition-all hover:text-[#f3e7cf] hover:after:w-full"
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: luxuryEase }}
          >
            <Image
              src="/Logo.png"
              alt="شعار مناحل مكيراس"
              width={140}
              height={70}
              priority
              className="h-auto w-[58px] sm:w-[64px] lg:w-[70px]"
              style={{ objectFit: "contain" }}
            />
          </motion.div>
          <div className="text-right">
            <div className="text-[18px] font-semibold tracking-tight text-[#FFF8EA] sm:text-[20px] lg:text-[22px]">
              مناحل مكيراس
            </div>
          </div>
        </Link>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <motion.div whileTap={{ scale: 0.96 }} whileHover={navHover}>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-2xl border-[rgba(201,154,46,0.32)] bg-white/8 backdrop-blur-xl"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">القائمة</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="border-[rgba(201,154,46,0.22)] bg-[#0c0a08]/96 text-[#f5ecd8] backdrop-blur-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: luxuryEase }}
              >
                <SheetTitle className="mb-6 text-right text-[#FFF8EA]">مناحل مكيراس</SheetTitle>

                <motion.div
                  className="grid gap-2"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {links.map((l) => (
                    <SheetClose asChild key={l.href}>
                      <motion.a
                        href={l.href}
                        variants={{
                          hidden: { opacity: 0, x: 14 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.42, ease: luxuryEase },
                          },
                        }}
                        whileHover={{
                          x: -4,
                          transition: { duration: 0.32, ease: luxuryEase },
                        }}
                        className="rounded-2xl border border-[rgba(201,154,46,0.22)] bg-white/6 px-4 py-3 text-base hover:bg-white/10"
                      >
                        {l.label}
                      </motion.a>
                    </SheetClose>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-6 grid gap-2"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <SheetClose asChild>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: luxuryEase } },
                      }}
                      whileHover={navHover}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild className="w-full rounded-2xl">
                        <a href={whatsappHref} target="_blank" rel="noreferrer">
                          <MessageCircle className="size-4" />
                          واتساب
                        </a>
                      </Button>
                    </motion.div>
                  </SheetClose>
                  <SheetClose asChild>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: luxuryEase } },
                      }}
                      whileHover={navHover}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-2xl border-[rgba(201,154,46,0.32)] bg-white/8 backdrop-blur-xl"
                      >
                        <Link href="/dashboard/products">لوحة المنتجات</Link>
                      </Button>
                    </motion.div>
                  </SheetClose>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
