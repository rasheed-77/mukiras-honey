"use client";

import { ArrowLeft, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const WHATSAPP_NUMBER = "966500000000";
const WHATSAPP_MESSAGE = "مرحبًا، أود استشارة بخصوص منتجات العسل.";

export default function FinalCta() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <Section className="py-14 sm:py-18 md:py-22">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-background/10 p-8 backdrop-blur-xl sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_25%_20%,rgba(245,158,11,0.26),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(217,119,6,0.18),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent)]" />
          <div className="pointer-events-none absolute -top-32 right-[-6rem] h-80 w-80 rounded-full bg-primary/18 blur-3xl [animation:glow_10s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -bottom-40 left-[-7rem] h-96 w-96 rounded-full bg-amber-400/12 blur-3xl [animation:glow_12s_ease-in-out_infinite]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                تواصل واطلب الآن
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
                تواصل مباشر عبر واتساب—عرض فقط بدون سلة أو دفع—مع تجربة فاخرة
                تليق بعلامة Premium.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild className="rounded-2xl px-6 py-6 text-base">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  تواصل عبر واتساب
                  <ArrowLeft className="size-4 opacity-80" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-border/60 bg-background/10 px-6 py-6 text-base backdrop-blur-xl"
              >
                <a href="/dashboard/products">
                  إدارة المنتجات
                  <ArrowLeft className="size-4 opacity-80" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

