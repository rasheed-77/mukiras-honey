"use client";

import { Star } from "lucide-react";

import { Section } from "@/components/ui/section";

const testimonials = [
  {
    name: "لمى",
    text: "واجهة فاخرة جدًا… التفاصيل والهوية السينمائية أعطت شعور علامة Premium حقيقية.",
  },
  {
    name: "سلمان",
    text: "كروت المنتجات الزجاجية ممتازة، والـhover ناعم وراقي بدون إزعاج.",
  },
  {
    name: "نورة",
    text: "حتى بدون صور نهائية، الـplaceholders تبدو احترافية ومناسبة للعرض على عميل.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-3xl font-semibold tracking-tight">آراء العملاء</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          بعض الانطباعات التي تعكس تجربة العرض الفاخر والواجهة العربية.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="lux-card group relative rounded-[1.75rem] p-6 transition-transform duration-700 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="lux-card-title text-sm font-medium">{t.name}</div>
                <div className="flex items-center gap-1 text-[#D4A63A]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current opacity-90 transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  ))}
                </div>
              </div>
              <p className="lux-card-text mt-3 text-sm leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

