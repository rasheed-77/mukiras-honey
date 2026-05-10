"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

import { cn } from "@/lib/utils";
import { useMobileLite } from "@/lib/use-mobile-lite";

export type ProductVisualTheme = "honey" | "nuts" | "mixes";

/** طبقات خلف العبوة فقط — z أقل من الصورة */
export function ProductVisualLayers({
  theme,
  isDetail,
}: {
  theme: ProductVisualTheme;
  isDetail: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const mobileLite = useMobileLite();
  const motionOff = reduceMotion || mobileLite;
  const uid = useId().replace(/:/g, "");
  const soft = "max-md:opacity-[0.5] max-md:[&_svg]:scale-[0.88]";

  const inner =
    theme === "honey" ? (
      <HoneyWarmLayers
        isDetail={isDetail}
        className={soft}
        flameGradientA={`${uid}-honey-flame-a`}
        flameGradientB={`${uid}-honey-flame-b`}
      />
    ) : theme === "nuts" ? (
      <NutsEarthyLayers className={soft} />
    ) : (
      <MixesBotanicalLayers className={soft} />
    );

  const pulseOpacity: number[] =
    theme === "honey" ? [0.9, 1, 0.9] : theme === "nuts" ? [0.93, 1, 0.93] : [0.92, 1, 0.95];

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden
      animate={motionOff ? undefined : { opacity: pulseOpacity }}
      transition={
        motionOff
          ? undefined
          : {
              duration: theme === "honey" ? 5.5 : 7.5,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {inner}
    </motion.div>
  );
}

function HoneyWarmLayers({
  isDetail,
  className,
  flameGradientA,
  flameGradientB,
}: {
  isDetail: boolean;
  className?: string;
  flameGradientA: string;
  flameGradientB: string;
}) {
  return (
    <div className={cn("pointer-events-none relative h-full w-full overflow-hidden", className)} aria-hidden>
      {/* وهج دافئ نابض — حرارة عسل */}
      <div
        className={cn(
          "absolute left-1/2 top-[58%] h-[min(70%,320px)] w-[min(95%,340px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_75%_65%_at_50%_60%,rgba(255,160,60,0.22),rgba(245,130,30,0.1)_45%,transparent_68%)]",
          "blur-lg motion-safe:animate-theme-honey-warm-pulse opacity-70 max-md:!animate-none md:blur-3xl",
          "transition-opacity duration-700 ease-out group-hover:opacity-100 max-md:opacity-40",
          isDetail && "top-[55%] opacity-75",
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 top-[52%] h-[min(50%,220px)] w-[min(72%,260px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-[radial-gradient(circle,rgba(251,191,36,0.18),transparent_62%)] blur-xl md:blur-2xl",
          "motion-safe:animate-theme-honey-warm-pulse motion-safe:[animation-delay:0.6s] opacity-60 group-hover:opacity-90 max-md:!animate-none",
          "max-md:opacity-32",
        )}
      />

      {/* أشكال لهب ناعمة SVG */}
      <svg
        className="absolute bottom-[8%] left-1/2 hidden w-[min(78%,240px)] max-w-[240px] -translate-x-1/2 opacity-[0.14] md:block"
        viewBox="0 0 120 140"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id={flameGradientA} x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#fbbf24" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={flameGradientB} x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M60 128 Q38 88 42 58 Q46 32 60 12 Q74 32 78 58 Q82 88 60 128"
          fill={`url(#${flameGradientA})`}
          className="motion-safe:animate-theme-honey-flame-sway"
        />
        <path
          d="M60 118 Q48 85 52 62 Q56 40 60 24 Q64 40 68 62 Q72 85 60 118"
          fill={`url(#${flameGradientB})`}
          opacity="0.85"
          className="motion-safe:animate-theme-honey-flame-sway motion-safe:[animation-delay:0.4s]"
        />
      </svg>

      {/* جسيمات ذهبية خفيفة */}
      {[
        { t: "12%", l: "18%", d: "0s" },
        { t: "22%", l: "78%", d: "0.4s" },
        { t: "38%", l: "12%", d: "0.8s" },
        { t: "48%", l: "88%", d: "1.1s" },
        { t: "68%", l: "22%", d: "0.2s" },
        { t: "72%", l: "70%", d: "1.4s" },
      ].map((d, i) => (
        <span
          key={i}
          className={cn(
            "absolute h-1 w-1 rounded-full bg-[rgba(253,224,180,0.55)] shadow-[0_0_8px_rgba(251,191,36,0.45)]",
            "motion-safe:animate-theme-particle-twinkle max-md:hidden md:h-1 md:w-1",
          )}
          style={{ top: d.t, left: d.l, animationDelay: d.d }}
        />
      ))}
    </div>
  );
}

function NutsEarthyLayers({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative h-full w-full overflow-hidden", className)} aria-hidden>
      {/* حبيبات ترابية دافئة */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 top-[38%] opacity-[0.55]",
          "bg-[radial-gradient(ellipse_90%_85%_at_50%_100%,rgba(120,80,40,0.18),rgba(60,40,20,0.08)_50%,transparent_68%)]",
          "blur-xl motion-safe:animate-theme-earth-glow max-md:!animate-none max-md:opacity-28 md:blur-2xl",
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 top-[48%] h-[55%] w-[85%] max-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(180,130,60,0.12),transparent_65%)] opacity-80",
          "group-hover:opacity-100 transition-opacity duration-700 max-md:opacity-50",
        )}
      />

      {/* نسيج خشبي خفيف */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-soft-light max-md:opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            105deg,
            rgba(139,90,43,0.15) 0px,
            rgba(139,90,43,0.15) 1px,
            transparent 1px,
            transparent 6px
          ),
          repeating-linear-gradient(
            -15deg,
            rgba(60,40,25,0.12) 0px,
            transparent 0px,
            transparent 8px,
            rgba(80,55,35,0.08) 8px,
            rgba(80,55,35,0.08) 9px
          )`,
        }}
      />

      {/* غبار ذهبي */}
      {[
        { t: "20%", l: "15%" },
        { t: "35%", l: "82%" },
        { t: "55%", l: "10%" },
        { t: "62%", l: "75%" },
      ].map((d, i) => (
        <span
          key={i}
          className="absolute hidden h-[3px] w-[3px] rounded-full bg-[rgba(222,184,120,0.4)] blur-[0.5px] motion-safe:animate-theme-dust-drift md:block"
          style={{
            top: d.t,
            left: d.l,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}

      {/* ورقة صغيرة SVG */}
      <svg
        className="absolute right-[6%] top-[14%] hidden w-12 opacity-[0.16] md:block"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M38 8 C28 8 12 18 8 32 C16 28 28 26 38 20 C32 14 36 10 38 8Z"
          fill="rgba(180,140,70,0.35)"
          stroke="rgba(217,164,65,0.25)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}

function MixesBotanicalLayers({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative h-full w-full overflow-hidden", className)} aria-hidden>
      <div
        className={cn(
          "absolute inset-x-0 bottom-[15%] top-[25%] opacity-70",
          "bg-[radial-gradient(ellipse_80%_70%_at_50%_55%,rgba(34,120,80,0.12),rgba(217,164,65,0.08)_45%,transparent_70%)]",
          "blur-xl motion-safe:animate-theme-mixes-glow max-md:!animate-none max-md:opacity-35 md:blur-3xl",
        )}
      />

      {/* خطوط بوتانية */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12] motion-safe:animate-theme-mixes-drift max-md:!animate-none max-md:opacity-[0.05] md:opacity-[0.12]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 Q 50 100 100 110 T 200 100"
          stroke="rgba(120,180,130,0.35)"
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d="M0 150 Q 70 130 130 145 T 200 135"
          stroke="rgba(217,164,65,0.25)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>

      {/* زهرة تخطيطية خفيفة */}
      <svg
        className="absolute bottom-[12%] left-1/2 hidden w-[min(50%,180px)] -translate-x-1/2 opacity-[0.1] md:block"
        viewBox="0 0 100 100"
      >
        <g className="motion-safe:animate-theme-mixes-drift motion-safe:[animation-duration:12s]">
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="14"
              ry="22"
              fill="rgba(90,160,110,0.2)"
              stroke="rgba(217,164,65,0.15)"
              strokeWidth="0.3"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="6" fill="rgba(217,164,65,0.15)" />
        </g>
      </svg>

      {/* جزيئات أعشاب */}
      {[
        { t: "25%", l: "20%" },
        { t: "40%", l: "85%" },
        { t: "58%", l: "15%" },
        { t: "70%", l: "78%" },
      ].map((d, i) => (
        <span
          key={i}
          className="absolute hidden h-1 w-1 rounded-full bg-[rgba(140,200,150,0.35)] shadow-[0_0_6px_rgba(217,164,65,0.25)] motion-safe:animate-theme-particle-twinkle md:block"
          style={{ top: d.t, left: d.l, animationDelay: `${i * 0.5}s` }}
        />
      ))}
    </div>
  );
}
