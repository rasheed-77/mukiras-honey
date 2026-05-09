"use client";

import { Section } from "@/components/ui/section";

export default function BrandStory() {
  return (
    <Section id="story">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-background/10 p-6 backdrop-blur-xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_25%_20%,rgba(245,158,11,0.20),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(217,119,6,0.14),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent)]" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl [animation:glow_10s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl [animation:glow_12s_ease-in-out_infinite]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              قصة العلامة التجارية
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              العسل هنا ليس “منتجًا”—بل <span className="text-cream">حكاية</span>.
              صممنا تجربة بصرية عربية فاخرة تليق بعلامة Premium: سينمائية داكنة،
              كروت زجاجية، توهج ذهبي ناعم، ومساحات مدروسة.
            </p>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              اليوم نستخدم Placeholders راقية لعرض الفكرة. غدًا، عند توفر الصور
              الحقيقية، يتم الاستبدال بسلاسة دون كسر التصميم أو تغيير البنية.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Cinematic", "Glassmorphism", "Golden glow", "RTL Arabic"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-background/15 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="glass-premium gold-glow rounded-[1.75rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "رؤية", desc: "عرض راقٍ يليق بمنتجات طبيعية." },
                { title: "أسلوب", desc: "ألوان دافئة: ذهبي عسلي وبني وكريمي." },
                { title: "تجربة", desc: "RTL عربي بالكامل—مناسب لكل الشاشات." },
                { title: "بساطة", desc: "عرض فقط—بدون سلة أو دفع إلكتروني." },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-border/60 bg-background/10 p-5 backdrop-blur transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="text-primary text-sm font-semibold">
                    {x.title}
                  </div>
                  <div className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

