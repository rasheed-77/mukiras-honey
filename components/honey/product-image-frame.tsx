import Image from "next/image";

import { cn } from "@/lib/utils";

import { ProductImageFloat } from "./product-image-float";
import {
  type ProductVisualTheme,
  ProductVisualLayers,
} from "./product-image-visual-layers";

type ProductImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** شخصية بصرية خلف العبوة فقط — لا تؤثر على النص خارج الإطار */
  visualTheme?: ProductVisualTheme;
  /** كرت ضيق الارتفاع — بدون vh. التفاصيل: مساحة أكبر + حد أقصى للارتفاع */
  variant?: "card" | "detail";
};

function themeBaseGradient(theme: ProductVisualTheme) {
  switch (theme) {
    case "nuts":
      return "bg-[radial-gradient(ellipse_120%_88%_at_50%_-8%,rgba(160,110,55,0.18),transparent_54%),radial-gradient(ellipse_58%_48%_at_88%_90%,rgba(90,58,28,0.16),transparent_52%),radial-gradient(ellipse_48%_40%_at_10%_76%,rgba(120,75,35,0.08),transparent_48%),linear-gradient(172deg,#030201 0%,#0b0806 42%,#15100c 100%)]";
    case "mixes":
      return "bg-[radial-gradient(ellipse_125%_92%_at_50%_-6%,rgba(55,120,85,0.14),transparent_56%),radial-gradient(ellipse_62%_52%_at_85%_88%,rgba(217,164,65,0.12),transparent_52%),radial-gradient(ellipse_46%_38%_at_12%_74%,rgba(90,140,100,0.08),transparent_48%),linear-gradient(172deg,#020302 0%,#080b09 44%,#100e0b 100%)]";
    default:
      return "bg-[radial-gradient(ellipse_130%_95%_at_50%_-5%,rgba(217,164,65,0.22),transparent_56%),radial-gradient(ellipse_65%_50%_at_88%_92%,rgba(140,95,35,0.14),transparent_52%),radial-gradient(ellipse_50%_42%_at_10%_78%,rgba(217,164,65,0.07),transparent_48%),linear-gradient(172deg,#020100 0%,#0b0806 40%,#16110d 100%)]";
  }
}

function themeAmbientLayer(theme: ProductVisualTheme) {
  switch (theme) {
    case "nuts":
      return (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_58%_at_50%_108%,rgba(120,75,40,0.09),rgba(60,38,18,0.04)_42%,transparent_62%),radial-gradient(ellipse_48%_34%_at_50%_38%,rgba(230,210,170,0.04),transparent_65%)] mix-blend-soft-light opacity-85 transition-opacity duration-700 ease-out group-hover:opacity-95"
          aria-hidden
        />
      );
    case "mixes":
      return (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_56%_at_50%_102%,rgba(70,130,95,0.1),rgba(217,164,65,0.05)_45%,transparent_62%),radial-gradient(ellipse_44%_32%_at_50%_36%,rgba(200,230,200,0.035),transparent_66%)] mix-blend-soft-light opacity-88 transition-opacity duration-700 ease-out group-hover:opacity-[0.97]"
          aria-hidden
        />
      );
    default:
      return (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_60%_at_50%_105%,rgba(255,190,120,0.07),rgba(255,150,60,0.03)_45%,transparent_62%),radial-gradient(ellipse_50%_35%_at_50%_35%,rgba(255,248,235,0.045),transparent_65%)] mix-blend-soft-light opacity-90 transition-opacity duration-700 ease-out group-hover:opacity-100"
          aria-hidden
        />
      );
  }
}

/**
 * عرض عبوة PNG شفافة فوق مسرح أسود/ذهبي:
 * إضاءة سينمائية هادئة، وهج ذهبي يزداد قليلًا عند hover، طفو خفيف، بدون blur على الصورة.
 */
export function ProductImageFrame({
  src,
  alt,
  className,
  imgClassName,
  variant = "card",
  visualTheme = "honey",
}: ProductImageFrameProps) {
  const isDetail = variant === "detail";
  const theme = visualTheme;

  return (
    <div
      className={cn(
        "relative isolate flex w-full flex-col overflow-hidden rounded-[1.5rem]",
        "min-h-0",
        isDetail ? "min-h-[260px] lg:min-h-[360px]" : "h-full",
        className,
      )}
    >
      {/* خلفية فاخرة داكنة */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#030201]" aria-hidden />

      <div
        className={cn("pointer-events-none absolute inset-0 z-0", themeBaseGradient(theme))}
        aria-hidden
      />

      {themeAmbientLayer(theme)}

      <ProductVisualLayers theme={theme} isDetail={isDetail} />

      {/* Glow ذهبي خلف العبوة — يزداد بسلاسة عند hover */}
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 z-[2] -translate-x-1/2 rounded-full blur-lg transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:blur-3xl",
          theme === "honey" &&
            "bg-[radial-gradient(circle,rgba(217,164,65,0.42)_0%,rgba(217,164,65,0.12)_38%,transparent_68%)]",
          theme === "nuts" &&
            "bg-[radial-gradient(circle,rgba(170,120,65,0.32)_0%,rgba(100,65,30,0.1)_40%,transparent_68%)] max-md:opacity-90",
          theme === "mixes" &&
            "bg-[radial-gradient(circle,rgba(90,150,110,0.22)_0%,rgba(217,164,65,0.14)_36%,transparent_68%)]",
          "top-[44%] h-[min(58%,240px)] w-[min(88%,320px)] -translate-y-1/2 opacity-[0.32] group-hover:opacity-[0.52] max-md:opacity-[0.26] md:opacity-[0.38] md:group-hover:opacity-[0.58]",
          isDetail &&
            "h-[min(62%,280px)] w-[min(84%,380px)] max-md:opacity-[0.28] md:opacity-[0.42] md:group-hover:opacity-[0.62]",
        )}
        aria-hidden
      />

      {/* ثانوي: وهج أضيق أوضح قليلًا */}
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-[46%] z-[2] h-[42%] w-[48%] max-w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-md transition-opacity duration-700 ease-out group-hover:opacity-95 md:blur-2xl",
          theme === "mixes"
            ? "bg-[radial-gradient(circle,rgba(140,190,150,0.12)_0%,transparent_62%)] opacity-65 max-md:opacity-50"
            : theme === "nuts"
              ? "bg-[radial-gradient(circle,rgba(210,175,130,0.12)_0%,transparent_62%)] opacity-72 max-md:opacity-55"
              : "bg-[radial-gradient(circle,rgba(243,226,184,0.14)_0%,transparent_62%)] opacity-70",
        )}
        aria-hidden
      />

      {/* وهج أرضي */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 top-[54%] opacity-95",
          theme === "nuts" &&
            "bg-[radial-gradient(ellipse_82%_95%_at_50%_100%,rgba(130,85,45,0.12),transparent_64%)]",
          theme === "mixes" &&
            "bg-[radial-gradient(ellipse_82%_95%_at_50%_100%,rgba(70,120,85,0.1),rgba(217,164,65,0.06)_48%,transparent_64%)]",
          theme === "honey" &&
            "bg-[radial-gradient(ellipse_82%_95%_at_50%_100%,rgba(217,164,65,0.11),transparent_64%)]",
        )}
        aria-hidden
      />

      {/* ظل اتصال ناعم تحت العبوة */}
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 z-[3] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(217,164,65,0.28),rgba(0,0,0,0.45)_40%,transparent_72%)] opacity-80 blur-md transition-opacity duration-700 ease-out group-hover:opacity-100 md:opacity-85 md:blur-xl",
          "bottom-[7%] h-[12%] w-[min(74%,280px)]",
          isDetail && "bottom-[8%] h-[14%] w-[min(68%,320px)] max-md:blur-sm md:blur-[26px]",
        )}
        aria-hidden
      />

      {/* Glass reflection — لمعة زجاجية خفيفة أسفل العبوة */}
      <div
        className="pointer-events-none absolute inset-x-[20%] bottom-[11%] z-[5] h-[20%] max-h-[140px] rounded-[999px] bg-[linear-gradient(to_top,rgba(255,252,245,0.09)_0%,rgba(255,245,230,0.03)_42%,transparent_100%)] opacity-[0.22] mix-blend-soft-light transition-opacity duration-700 ease-out group-hover:opacity-[0.62] max-md:hidden sm:inset-x-[22%] md:opacity-[0.45]"
        aria-hidden
      />

      {/* حاوية العبوة: طفو دائم خفيف + hover رفع إضافي — فوق كل الطبقات الزخرفية */}
      <div
        className={cn(
          "relative z-[10] flex min-h-0 flex-1 items-center justify-center",
          "px-5 pb-8 pt-6 sm:px-7 sm:pb-9 sm:pt-7 lg:px-10 lg:pb-11 lg:pt-9",
        )}
      >
        <ProductImageFloat>
          <Image
            src={src}
            alt={alt}
            width={720}
            height={960}
            sizes={
              isDetail
                ? "(max-width: 767px) 92vw, (max-width: 1024px) 50vw, 560px"
                : "(max-width: 767px) 82vw, (max-width: 1280px) 38vw, 300px"
            }
            decoding="async"
            draggable={false}
            className={cn(
              "relative z-[2] h-auto w-auto max-w-full object-contain object-center",
              "transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-auto md:will-change-transform",
              "max-md:[filter:drop-shadow(0_10px_22px_rgba(0,0,0,0.38))_drop-shadow(0_0_18px_rgba(217,164,65,0.12))]",
              "md:[filter:drop-shadow(0_18px_36px_rgba(0,0,0,0.45))_drop-shadow(0_8px_24px_rgba(0,0,0,0.28))_drop-shadow(0_0_36px_rgba(217,164,65,0.18))]",
              "motion-safe:group-hover:md:[filter:drop-shadow(0_22px_44px_rgba(0,0,0,0.5))_drop-shadow(0_10px_28px_rgba(0,0,0,0.3))_drop-shadow(0_0_48px_rgba(217,164,65,0.28))_drop-shadow(0_0_72px_rgba(217,164,65,0.08))]",
              "motion-safe:group-hover:max-md:[filter:drop-shadow(0_12px_26px_rgba(0,0,0,0.42))_drop-shadow(0_0_22px_rgba(217,164,65,0.16))]",
              "motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:md:-translate-y-1 motion-safe:group-hover:md:scale-[1.02]",
              isDetail
                ? "max-h-[min(34vh,200px)] sm:max-h-[min(50vh,440px)] lg:max-h-[min(52vh,480px)]"
                : "max-h-[140px] sm:max-h-[calc(100%-0.25rem)]",
              imgClassName,
            )}
          />
        </ProductImageFloat>
      </div>

      {/* انعكاس مرآة خفيف — تحت الصورة (معطّل على الموبايل لتوفير الرسم) */}
      <div
        className="pointer-events-none absolute inset-x-[14%] bottom-0 z-[4] hidden h-[22%] overflow-hidden md:block sm:inset-x-[16%]"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className={cn(
            "mx-auto h-[185%] w-full origin-top scale-y-[-1] object-contain object-top opacity-[0.1] transition-opacity duration-700 ease-out group-hover:opacity-[0.14]",
            isDetail ? "max-h-none" : "max-h-full",
          )}
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 52%, transparent 86%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 52%, transparent 86%)",
          }}
        />
      </div>

      {/* vignette خفيف — فوق الصورة للحواف السينمائية */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[11] rounded-[inherit]",
          isDetail
            ? "shadow-[inset_0_0_28px_14px_rgba(0,0,0,0.38)] md:shadow-[inset_0_0_56px_28px_rgba(0,0,0,0.45),inset_0_0_100px_rgba(217,164,65,0.04)]"
            : "shadow-[inset_0_0_22px_12px_rgba(0,0,0,0.34)] md:shadow-[inset_0_0_40px_18px_rgba(0,0,0,0.38),inset_0_0_64px_rgba(217,164,65,0.03)]",
        )}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[12] rounded-[inherit] ring-1 ring-inset ring-[rgba(217,164,65,0.1)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[13] rounded-[inherit] lux-media-overlay opacity-[0.04]"
        aria-hidden
      />
    </div>
  );
}
