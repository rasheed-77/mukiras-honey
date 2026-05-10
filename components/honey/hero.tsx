"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Droplet, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  ambientGlowPulse,
  fadeInUp,
  floatingMotion,
  luxuryEase,
  staggerContainer,
} from "@/lib/motion";
import { useMobileLite } from "@/lib/use-mobile-lite";

const stats = [
  { k: "طبيعي 100%", Icon: Leaf },
  { k: "جودة مختارة", Icon: ShieldCheck },
  { k: "حسب الطلب", Icon: Droplet },
];

function HoneyJarSceneSVG() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 920 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="honey"
          x1="170"
          y1="210"
          x2="360"
          y2="560"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5C15A" />
          <stop offset="0.55" stopColor="#D99A2B" />
          <stop offset="1" stopColor="#9A6418" />
        </linearGradient>
        <linearGradient
          id="glass"
          x1="140"
          y1="160"
          x2="410"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF7D6" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#FFF7D6" stopOpacity="0.22" />
          <stop offset="1" stopColor="#9A6418" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient
          id="lid"
          x1="160"
          y1="130"
          x2="360"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF7D6" stopOpacity="0.35" />
          <stop offset="0.65" stopColor="#9A6418" stopOpacity="0.18" />
          <stop offset="1" stopColor="#D99A2B" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient
          id="dipper"
          x1="-80"
          y1="120"
          x2="420"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5C15A" stopOpacity="0.98" />
          <stop offset="1" stopColor="#9A6418" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="wood" x1="60" y1="470" x2="500" y2="620" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B0782B" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#8A561A" stopOpacity="0.95" />
          <stop offset="1" stopColor="#5A3410" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="woodHi" x1="120" y1="500" x2="440" y2="610" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7D6" stopOpacity="0.14" />
          <stop offset="1" stopColor="#FFF7D6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="dipperWood" x1="-120" y1="80" x2="360" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2C56B" stopOpacity="0.98" />
          <stop offset="0.38" stopColor="#C8892F" stopOpacity="0.98" />
          <stop offset="1" stopColor="#6B3F14" stopOpacity="0.98" />
        </linearGradient>
        <linearGradient id="dipperWoodHi" x1="-60" y1="110" x2="260" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7D6" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#FFF7D6" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFF7D6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="honeyDrip" x1="260" y1="280" x2="260" y2="620" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF0B8" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#F5C15A" stopOpacity="0.92" />
          <stop offset="1" stopColor="#D99A2B" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="dipperHandle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#C98A34" stopOpacity="0.96" />
          <stop offset="0.45" stopColor="#8A561A" stopOpacity="0.96" />
          <stop offset="1" stopColor="#4A2A0D" stopOpacity="0.96" />
        </linearGradient>
        <linearGradient id="dipperHeadHoney" x1="240" y1="130" x2="360" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF0B8" stopOpacity="0.98" />
          <stop offset="0.52" stopColor="#F5C15A" stopOpacity="0.94" />
          <stop offset="1" stopColor="#D99A2B" stopOpacity="0.9" />
        </linearGradient>
        <filter id="dipperDepth" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#1A1208" floodOpacity="0.24" />
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#D9A441" floodOpacity="0.22" />
        </filter>
        <filter id="softShadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#1A1208" floodOpacity="0.18" />
        </filter>
        <filter id="honeyGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 0.88 0 0 0  0 0 0.55 0 0  0 0 0 0.9 0"
            result="gold"
          />
          <feMerge>
            <feMergeNode in="gold" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 0.88 0 0 0  0 0 0.55 0 0  0 0 0 0.95 0"
            result="gold"
          />
          <feMerge>
            <feMergeNode in="gold" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#goldGlow)" opacity="0.95">
        <ellipse
          cx="260"
          cy="570"
          rx="230"
          ry="68"
          fill="#D99A2B"
          opacity="0.22"
        />
      </g>

      {/* Clean ground shadow (no brown spill) */}
      <g filter="url(#softShadow)" opacity="0.95">
        <ellipse cx="280" cy="568" rx="220" ry="54" fill="#1A1208" opacity="0.12" />
        <ellipse cx="280" cy="572" rx="180" ry="44" fill="#D99A2B" opacity="0.08" />
      </g>

      <g filter="url(#goldGlow)" opacity="1">
        <rect
          x="140"
          y="170"
          width="280"
          height="360"
          rx="48"
          fill="url(#glass)"
          stroke="#D99A2B"
          strokeOpacity="0.72"
          strokeWidth="2.4"
        />
        <rect
          x="162"
          y="236"
          width="236"
          height="284"
          rx="38"
          fill="url(#honey)"
          opacity="0.96"
        />
      </g>

      {/* Jar opening / surface highlight */}
      <g opacity="0.95">
        <ellipse cx="280" cy="236" rx="112" ry="18" fill="#FFF7D6" fillOpacity="0.2" />
        <ellipse cx="280" cy="242" rx="92" ry="14" fill="#F5C15A" fillOpacity="0.16" />
      </g>

      <g opacity="1">
        <rect
          x="188"
          y="126"
          width="184"
          height="58"
          rx="18"
          fill="url(#lid)"
          stroke="#D99A2B"
          strokeOpacity="0.78"
          strokeWidth="2.2"
        />
        <rect
          x="204"
          y="138"
          width="152"
          height="16"
          rx="8"
          fill="#FFF7D6"
          fillOpacity="0.35"
        />
      </g>

      <path
        d="M188 244 C168 340 170 444 210 518"
        stroke="#FFF7D6"
        strokeOpacity="0.52"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M236 232 C216 350 220 440 250 506"
        stroke="#FFF7D6"
        strokeOpacity="0.22"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <ellipse cx="280" cy="244" rx="96" ry="16" fill="#FFF7D6" fillOpacity="0.22" />

      {/* Glass reflections + crisp outline */}
      <g opacity="1">
        <rect
          x="140"
          y="170"
          width="280"
          height="360"
          rx="48"
          fill="none"
          stroke="#FFF7D6"
          strokeOpacity="0.32"
          strokeWidth="1.6"
        />
        <path
          d="M170 210 C156 312 160 438 186 526"
          stroke="#FFF7D6"
          strokeOpacity="0.42"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M206 196 C192 318 196 434 220 510"
          stroke="#FFF7D6"
          strokeOpacity="0.16"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <ellipse cx="316" cy="212" rx="70" ry="12" fill="#FFF7D6" fillOpacity="0.12" />
      </g>

      {/* Flowers cluster around jar base (more visible like reference) */}
      <g opacity="0.9" filter="url(#goldGlow)">
        {[
          { cx: 92, cy: 544, r: 34, o: 0.76 },
          { cx: 138, cy: 526, r: 28, o: 0.72 },
          { cx: 186, cy: 554, r: 30, o: 0.74 },
          { cx: 132, cy: 576, r: 24, o: 0.64 },
          { cx: 224, cy: 532, r: 22, o: 0.6 },
          { cx: 74, cy: 574, r: 20, o: 0.56 },
          { cx: 256, cy: 564, r: 22, o: 0.58 },
          { cx: 178, cy: 596, r: 20, o: 0.54 },
          { cx: 112, cy: 604, r: 18, o: 0.5 },
        ].map((f, i) => (
          <circle
            key={i}
            cx={f.cx}
            cy={f.cy}
            r={f.r}
            fill="#FFF7D6"
            fillOpacity={f.o}
          />
        ))}
        {/* many small blossoms around base */}
        {[
          { cx: 62, cy: 546, r: 10, o: 0.55 },
          { cx: 98, cy: 520, r: 9, o: 0.5 },
          { cx: 120, cy: 536, r: 8, o: 0.48 },
          { cx: 156, cy: 516, r: 10, o: 0.52 },
          { cx: 206, cy: 536, r: 9, o: 0.5 },
          { cx: 246, cy: 532, r: 8, o: 0.46 },
          { cx: 268, cy: 560, r: 9, o: 0.48 },
          { cx: 226, cy: 592, r: 8, o: 0.44 },
          { cx: 192, cy: 612, r: 9, o: 0.46 },
          { cx: 138, cy: 612, r: 8, o: 0.44 },
          { cx: 90, cy: 594, r: 8, o: 0.42 },
        ].map((s, i) => (
          <circle key={`s-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#FFF7D6" fillOpacity={s.o} />
        ))}
        {[
          { cx: 170, cy: 538, r: 10, c: "#F5C15A", o: 0.58 },
          { cx: 114, cy: 520, r: 8, c: "#D99A2B", o: 0.46 },
          { cx: 210, cy: 578, r: 9, c: "#D99A2B", o: 0.42 },
          { cx: 150, cy: 604, r: 8, c: "#F5C15A", o: 0.44 },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.c} fillOpacity={p.o} />
        ))}
      </g>

      {/* Honey Dipper (longer, angled towards jar) + drip into jar */}
      <g opacity="1" filter="url(#dipperDepth)">
        {/* Luxury dipper: outside jar, natural angle (25-35deg), thin elegant handle */}
        <g transform="rotate(30 240 160)">
          {/* Handle (slim rounded rod) */}
          <rect x="-40" y="146" width="300" height="18" rx="9" fill="url(#dipperHandle)" />
          <rect x="-28" y="150" width="256" height="6" rx="3" fill="#FFF7D6" fillOpacity="0.18" />
          <path
            d="M-40 164 C40 150 140 156 260 164"
            stroke="#1A1208"
            strokeOpacity="0.16"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Neck */}
          <rect x="238" y="150" width="36" height="12" rx="6" fill="#6B3F14" fillOpacity="0.55" />

          {/* Head: rounded capsule with horizontal ridges, honey coating */}
          <g>
            <rect x="270" y="124" width="130" height="64" rx="32" fill="url(#dipperHeadHoney)" />
            <rect x="276" y="132" width="118" height="48" rx="24" fill="#D99A2B" fillOpacity="0.26" />

            {/* ridges */}
            {[0, 12, 24, 36, 48].map((dy) => (
              <path
                key={dy}
                d={`M282 ${136 + dy} H392`}
                stroke="#1A1208"
                strokeOpacity="0.16"
                strokeWidth="3.4"
                strokeLinecap="round"
              />
            ))}
            {[0, 12, 24, 36, 48].map((dy) => (
              <path
                key={`rhi-${dy}`}
                d={`M286 ${134 + dy} H388`}
                stroke="#FFF7D6"
                strokeOpacity="0.12"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            ))}

            {/* shine */}
            <ellipse cx="360" cy="140" rx="36" ry="12" fill="#FFF7D6" fillOpacity="0.2" />
            <ellipse cx="330" cy="166" rx="30" ry="10" fill="#FFF7D6" fillOpacity="0.12" />
          </g>

          {/* Single small drip into jar */}
          <g filter="url(#honeyGlow)">
            <path
              d="M334 190 C330 208 326 220 318 236"
              stroke="url(#honeyDrip)"
              strokeOpacity="0.62"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M316 232 C324 244 325 254 316 266 C307 254 308 244 316 232 Z"
              fill="url(#honeyDrip)"
              fillOpacity="0.9"
            />
            <ellipse cx="320" cy="246" rx="6.5" ry="5" fill="#FFF7D6" fillOpacity="0.22" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function FlowersCornerSVG({ side }: { side: "left" | "right" }) {
  const flip = side === "right" ? "-scale-x-100" : "";
  return (
    <svg
      className={`h-auto w-full ${flip}`}
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient
          id="petal"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(150 90) rotate(55) scale(160 120)"
        >
          <stop stopColor="#FFF7D6" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#F5C15A" stopOpacity="0.45" />
          <stop offset="1" stopColor="#D99A2B" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient
          id="petal2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(250 78) rotate(25) scale(140 110)"
        >
          <stop stopColor="#FFF7D6" stopOpacity="0.92" />
          <stop offset="0.62" stopColor="#F5C15A" stopOpacity="0.42" />
          <stop offset="1" stopColor="#9A6418" stopOpacity="0.18" />
        </radialGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      <g filter="url(#soft)">
        <circle cx="110" cy="80" r="46" fill="url(#petal)" />
        <circle cx="170" cy="60" r="34" fill="url(#petal)" />
        <circle cx="210" cy="98" r="40" fill="url(#petal)" />
        <circle cx="150" cy="118" r="34" fill="url(#petal)" />
        <circle cx="262" cy="62" r="32" fill="url(#petal2)" />
        <circle cx="294" cy="96" r="26" fill="url(#petal2)" />
        <circle cx="226" cy="122" r="22" fill="url(#petal2)" />
        <circle cx="240" cy="66" r="22" fill="#D99A2B" fillOpacity="0.44" />
        <circle cx="96" cy="42" r="18" fill="#F5C15A" fillOpacity="0.38" />
        <circle cx="182" cy="126" r="16" fill="#FFF7D6" fillOpacity="0.5" />
      </g>

      <path
        d="M34 210 C88 150 136 142 210 190"
        stroke="#9A6418"
        strokeOpacity="0.3"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M210 190 C246 214 274 210 312 186"
        stroke="#9A6418"
        strokeOpacity="0.22"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M178 186 C166 214 190 228 214 214 C202 190 186 178 178 186 Z"
        fill="#9A6418"
        fillOpacity="0.2"
      />
      <path
        d="M120 170 C108 196 128 210 152 200 C144 178 130 164 120 170 Z"
        fill="#D99A2B"
        fillOpacity="0.18"
      />
      {/* light leaves */}
      <path
        d="M314 178 C292 166 270 170 256 190 C278 202 300 202 314 178 Z"
        fill="#9A6418"
        fillOpacity="0.16"
      />
      <path
        d="M260 198 C244 190 228 194 218 210 C234 220 250 220 260 198 Z"
        fill="#D99A2B"
        fillOpacity="0.14"
      />
    </svg>
  );
}

function SideLeavesSVG() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="leafG" x1="40" y1="40" x2="380" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5C15A" stopOpacity="0.22" />
          <stop offset="0.5" stopColor="#9A6418" stopOpacity="0.18" />
          <stop offset="1" stopColor="#D99A2B" stopOpacity="0.22" />
        </linearGradient>
        <filter id="leafSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <g filter="url(#leafSoft)">
        <path
          d="M330 86 C250 132 204 204 196 292 C286 278 346 214 360 122 C362 104 350 88 330 86 Z"
          fill="url(#leafG)"
        />
        <path
          d="M330 86 C286 156 246 214 196 292"
          stroke="#9A6418"
          strokeOpacity="0.22"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M292 238 C240 260 216 312 214 362 C276 348 316 314 326 258 C330 244 308 234 292 238 Z"
          fill="url(#leafG)"
        />
        <path
          d="M292 238 C270 286 244 322 214 362"
          stroke="#D99A2B"
          strokeOpacity="0.18"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M248 356 C212 372 196 404 192 446 C236 440 268 418 276 382 C280 366 262 350 248 356 Z"
          fill="url(#leafG)"
        />
        <path
          d="M248 356 C232 388 214 416 192 446"
          stroke="#9A6418"
          strokeOpacity="0.18"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function GoldenWavesSVG() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1440 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M-80 170 C240 110 480 220 760 160 C1040 100 1200 200 1520 130"
        stroke="#D9A441"
        strokeOpacity="0.72"
        strokeWidth="3.6"
      />
      <path
        d="M-120 235 C260 175 520 285 820 220 C1120 155 1240 245 1560 190"
        stroke="#9A6418"
        strokeOpacity="0.38"
        strokeWidth="2.6"
      />
      <path
        d="M-60 210 C280 150 520 260 820 200 C1120 140 1260 230 1500 170"
        stroke="#F5C15A"
        strokeOpacity="0.44"
        strokeWidth="2.6"
      />
      <path
        d="M-100 120 C180 70 520 160 780 106 C1040 52 1220 136 1540 92"
        stroke="#FFF7D6"
        strokeOpacity="0.26"
        strokeWidth="2"
      />
      <path
        d="M-140 196 C220 136 520 236 820 176 C1120 116 1280 206 1560 146"
        stroke="#D9A441"
        strokeOpacity="0.28"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function HeroCurvesSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        d="M-80 620 Q420 520 720 580 T1480 640"
        stroke="url(#gold-curve)"
        strokeWidth="1.2"
        strokeOpacity="0.35"
      />
      <path
        d="M1480 120 Q980 220 620 160 T-40 80"
        stroke="url(#gold-curve)"
        strokeWidth="0.9"
        strokeOpacity="0.28"
      />
      <defs>
        <linearGradient id="gold-curve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#D9A441" stopOpacity="0" />
          <stop offset="0.35" stopColor="#D9A441" stopOpacity="0.7" />
          <stop offset="0.65" stopColor="#9A6418" stopOpacity="0.5" />
          <stop offset="1" stopColor="#D9A441" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const mobileLite = useMobileLite();
  const reducedMotion = useReducedMotion();
  const lite = mobileLite || reducedMotion;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full max-w-[100vw] overflow-hidden"
    >
      {/* Background (z-0) */}
      <div className="pointer-events-none absolute inset-0 z-0 hero-cinematic-base" />
      <div className="pointer-events-none absolute inset-0 z-0 hero-vignette-soft" />
      {/* Dark luxury honey overlay + cinematic lighting */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(11,9,6,0.0),rgba(11,9,6,0.25)_40%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 [background:radial-gradient(ellipse_at_50%_36%,rgba(217,164,65,0.22),rgba(255,244,214,0.08)_38%,transparent_70%)]"
        aria-hidden
      />
      {/* Cinematic light rays like reference */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18] blur-[0.5px] [background:conic-gradient(from_220deg_at_42%_6%,rgba(255,244,214,0.0)_0deg,rgba(255,244,214,0.16)_26deg,rgba(217,164,65,0.12)_62deg,rgba(255,244,214,0.0)_120deg,rgba(255,244,214,0.12)_170deg,rgba(255,244,214,0.0)_360deg)] md:opacity-[0.42] md:blur-[1px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.28] [background:radial-gradient(circle_at_18%_18%,rgba(255,244,214,0.18),transparent_46%),radial-gradient(circle_at_86%_14%,rgba(255,244,214,0.12),transparent_52%)]"
        aria-hidden
      />

      {/* Honeycomb (z-1) — sides only — مخفي على الموبايل */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[32%] hero-honeycomb-layer md:block"
        style={{
          opacity: 0.06,
          maskImage: "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[32%] hero-honeycomb-layer md:block"
        style={{
          opacity: 0.06,
          maskImage: "linear-gradient(to left, black 0%, black 65%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Bokeh — على الموبايل / تقليل الحركة: وهج ثابت خفيف فقط */}
      {lite ? (
        <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
          <div className="absolute left-1/2 top-[30%] h-44 w-44 max-w-[55vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.14),transparent_72%)] blur-2xl opacity-90" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => {
            const presets = [
              { t: "14%", l: "18%", s: 280, o: 0.52, c: "#fff7d6" },
              { t: "18%", l: "74%", s: 320, o: 0.48, c: "#f5c15a" },
              { t: "32%", l: "6%", s: 220, o: 0.42, c: "#d99a2b" },
              { t: "34%", l: "86%", s: 240, o: 0.44, c: "#fff7d6" },
              { t: "46%", l: "24%", s: 190, o: 0.4, c: "#f5c15a" },
              { t: "48%", l: "64%", s: 200, o: 0.4, c: "#d99a2b" },
              { t: "24%", l: "44%", s: 380, o: 0.42, c: "#fff7d6" },
              { t: "60%", l: "12%", s: 260, o: 0.38, c: "#d99a2b" },
              { t: "62%", l: "82%", s: 270, o: 0.38, c: "#f5c15a" },
              { t: "76%", l: "30%", s: 240, o: 0.4, c: "#fff7d6" },
              { t: "78%", l: "64%", s: 250, o: 0.4, c: "#f5c15a" },
              { t: "40%", l: "46%", s: 320, o: 0.4, c: "#d99a2b" },
            ] as const;
            const p = presets[i]!;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full blur-2xl md:blur-2xl"
                style={{
                  top: p.t,
                  left: p.l,
                  width: p.s,
                  height: p.s,
                  opacity: p.o,
                  background: `radial-gradient(circle, ${p.c} 0%, rgba(255,255,255,0) 70%)`,
                  transform: "translateZ(0)",
                }}
                animate={{ y: [0, -14, 0], x: [0, i % 2 === 0 ? 10 : -10, 0] }}
                transition={{
                  duration: 14 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
              />
            );
          })}
          {[
            { t: "24%", l: "10%", s: 520, o: 0.44, c: "#fff7d6", d: 0.06 },
            { t: "26%", l: "76%", s: 580, o: 0.46, c: "#f5c15a", d: 0.14 },
            { t: "40%", l: "86%", s: 460, o: 0.4, c: "#fff7d6", d: 0.22 },
            { t: "52%", l: "6%", s: 420, o: 0.38, c: "#d99a2b", d: 0.3 },
          ].map((p, idx) => (
            <motion.div
              key={`xl-${idx}`}
              className="absolute rounded-full blur-3xl"
              style={{
                top: p.t,
                left: p.l,
                width: p.s,
                height: p.s,
                opacity: p.o,
                background: `radial-gradient(circle, ${p.c} 0%, rgba(255,255,255,0) 72%)`,
                transform: "translateZ(0)",
              }}
              animate={{ y: [0, -18, 0], x: [0, idx % 2 === 0 ? 14 : -14, 0] }}
              transition={{ duration: 16 + idx * 1.2, repeat: Infinity, ease: "easeInOut", delay: p.d }}
            />
          ))}
        </div>
      )}

      {/* Flowers/Waves + Jar Scene (B/D/A) */}
      <div className="hero-decorations">
        {/* Golden waves */}
        <motion.div
          className="absolute bottom-0 left-0 z-10 block h-40 w-full max-w-full md:h-72"
          initial={{ opacity: 0 }}
          animate={
            lite ? { opacity: 0.38 } : { opacity: [0.55, 0.65, 0.55] }
          }
          transition={
            lite ? { duration: 0.5 } : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <GoldenWavesSVG />
        </motion.div>

        <HeroCurvesSVG className="absolute inset-0 z-10 block h-full w-full min-h-[42vh] max-w-full opacity-[0.22] md:min-h-[60vh] md:opacity-[0.55]" />

        {/* وهج ذهبي نابض — معطّل على الموبايل / تقليل الحركة */}
        {!lite ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_42%,black,transparent_72%)]"
            aria-hidden
          >
            <motion.div
              className="absolute left-1/2 top-[38%] h-[52rem] w-[52rem] max-w-[min(52rem,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.36)_0%,rgba(255,243,214,0.18)_38%,transparent_68%)] blur-3xl"
              variants={ambientGlowPulse}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        ) : null}

        {/* Flowers top corners */}
        <motion.div
          className="absolute left-3 top-3 z-10 w-[min(8.125rem,max(5.625rem,24vw))] max-w-[130px] md:left-6 md:top-6 md:max-w-none md:w-[min(360px,26vw)] md:min-w-[260px]"
          initial={{ opacity: 0 }}
          animate={
            lite ? { opacity: 0.45, y: 0 } : { opacity: [0.55, 0.75, 0.55], y: [0, -6, 0] }
          }
          transition={
            lite ? { duration: 0.45 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <FlowersCornerSVG side="left" />
        </motion.div>
        <motion.div
          className="absolute right-3 top-3 z-10 w-[min(8.125rem,max(5.625rem,24vw))] max-w-[130px] md:right-6 md:top-6 md:max-w-none md:w-[min(380px,28vw)] md:min-w-[260px]"
          initial={{ opacity: 0 }}
          animate={
            lite ? { opacity: 0.45, y: 0 } : { opacity: [0.55, 0.75, 0.55], y: [0, -6, 0] }
          }
          transition={
            lite
              ? { duration: 0.45 }
              : { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          }
        >
          <FlowersCornerSVG side="right" />
        </motion.div>

        {/* Right-side leaves */}
        <motion.div
          className="pointer-events-none absolute right-0 top-[28%] z-10 w-[min(8.125rem,max(5.625rem,22vw))] max-w-[130px] opacity-[0.42] md:top-[30%] md:max-w-none md:w-[clamp(240px,20vw,360px)] md:opacity-[0.78]"
          initial={{ opacity: 0 }}
          animate={
            lite ? { opacity: 0.42, y: 0 } : { opacity: [0.58, 0.78, 0.58], y: [0, -8, 0] }
          }
          transition={
            lite ? { duration: 0.45 } : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.35 }
          }
          aria-hidden
        >
          <SideLeavesSVG />
        </motion.div>

        {/* Extra soft flowers on right side */}
        <motion.div
          className="pointer-events-none absolute right-2 top-[44%] z-10 w-[min(8.125rem,max(5.625rem,20vw))] max-w-[130px] opacity-[0.4] md:right-4 md:top-[46%] md:max-w-none md:w-[min(300px,22vw)] md:opacity-[0.55]"
          initial={{ opacity: 0 }}
          animate={
            lite ? { opacity: 0.4, y: 0 } : { opacity: [0.45, 0.62, 0.45], y: [0, -6, 0] }
          }
          transition={
            lite ? { duration: 0.45 } : { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }
          aria-hidden
        >
          <FlowersCornerSVG side="right" />
        </motion.div>

        {/* Honey Jar Scene */}
        <motion.div
          className="absolute bottom-4 left-3 z-10 w-[min(8.125rem,max(5.625rem,26vw))] max-w-[130px] md:bottom-8 md:left-8 md:max-w-none md:w-[clamp(450px,38vw,540px)]"
          style={{ opacity: 1, transform: "translateZ(0)" }}
          animate={lite ? undefined : { y: [0, -10, 0] }}
          transition={
            lite ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <HoneyJarSceneSVG />
        </motion.div>
      </div>

      {/* Content */}
      <div className="hero-content mx-auto flex min-h-[calc(100svh-82px)] w-full max-w-[100vw] flex-col items-center justify-center px-4 pb-12 pt-20 max-[767px]:pb-28 sm:px-6 sm:pt-16 md:pb-16 lg:px-10 lg:pb-20 lg:pt-20">
        <motion.div
          className="w-full max-w-5xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="relative mx-auto mb-6 flex w-full justify-center px-2 md:mb-8"
          >
            <div className="relative flex w-[clamp(5rem,22vw,6.25rem)] max-w-full shrink-0 items-center justify-center md:w-[clamp(6.875rem,12vw,9.375rem)]">
              {lite ? (
                <>
                  <div
                    className="pointer-events-none absolute inset-[-40%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(217,164,65,0.38),rgba(255,243,214,0.2)_35%,transparent_74%)] blur-xl md:inset-[-55%] md:blur-3xl"
                    aria-hidden
                  />
                  <div className="relative z-[1] w-full">
                    <Image
                      src="/Logo.png"
                      alt="شعار مناحل مكيراس"
                      width={180}
                      height={180}
                      priority
                      sizes="(max-width: 767px) 88px, 140px"
                      className="mx-auto h-auto w-full max-h-[5.5rem] max-w-[5.5rem] object-contain md:max-h-[9.375rem] md:max-w-[9.375rem] [filter:drop-shadow(0_8px_24px_rgba(217,164,65,0.35))_drop-shadow(0_2px_12px_rgba(255,243,214,0.75))] md:[filter:drop-shadow(0_12px_36px_rgba(217,164,65,0.42))_drop-shadow(0_3px_16px_rgba(255,243,214,0.9))]"
                    />
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    className="pointer-events-none absolute inset-[-55%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(217,164,65,0.52),rgba(255,243,214,0.28)_35%,transparent_74%)] blur-3xl max-md:blur-xl"
                    animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden
                  />
                  <motion.div
                    className="relative z-[1] w-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/Logo.png"
                      alt="شعار مناحل مكيراس"
                      width={180}
                      height={180}
                      priority
                      sizes="(max-width: 767px) 88px, 140px"
                      className="mx-auto h-auto w-full max-h-[5.5rem] max-w-[5.5rem] object-contain md:max-h-[9.375rem] md:max-w-[9.375rem] [filter:drop-shadow(0_12px_36px_rgba(217,164,65,0.42))_drop-shadow(0_3px_16px_rgba(255,243,214,0.9))]"
                    />
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-[rgba(217,164,65,0.28)] bg-[rgba(11,9,6,0.72)] px-4 py-2 text-sm text-[#D6C3A5] shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm md:bg-[rgba(11,9,6,0.55)] md:shadow-[0_18px_54px_rgba(0,0,0,0.32)] md:backdrop-blur-md"
          >
            <motion.span
              className="inline-flex text-[#D9A441]"
              variants={floatingMotion}
              initial="initial"
              animate={lite ? "initial" : "animate"}
            >
              <Sparkles className="size-4" aria-hidden />
            </motion.span>
            <span className="font-medium">في مناحل مكيراس</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative mt-6 sm:mt-8">
            <div
              className="pointer-events-none absolute inset-x-0 -top-20 bottom-0 mx-auto hidden max-w-4xl opacity-90 md:block"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgba(217,164,65,0.22),rgba(255,243,214,0.35)_42%,transparent_65%)] blur-3xl" />
            </div>
            <h1
              className="relative text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.55rem] lg:leading-[1.08]"
              style={{
                color: "#FFF4D6",
                textShadow:
                  "0 22px 80px rgba(217,164,65,0.22), 0 2px 14px rgba(0,0,0,0.55)",
              }}
            >
              <span className="text-[#FFF4D6]">
                نقدم لكم عالمًا من النكهات الطبيعية
              </span>
              <br />
              <span
                className="bg-linear-to-br from-[#D9A441] via-[#c48a28] to-[#9A6418] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  textShadow: "none",
                  filter: "drop-shadow(0 2px 14px rgba(217,164,65,0.28))",
                }}
              >
                والمنتجات الصحية ذات الجودة العالية
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-6 h-px w-36 bg-linear-to-r from-transparent via-[#D9A441]/65 to-transparent"
          />

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-[#D6C3A5] sm:text-xl"
          >
            تتضمن منتجاتنا مجموعة متنوعة من العسل، بالإضافة إلى المكسرات الطازجة
            والزيوت والأعشاب. نسعى دائمًا لتقديم تجربة لا تُنسى للمذاق والجودة.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={
                lite
                  ? undefined
                  : {
                      y: -4,
                      boxShadow: "0 22px 48px rgba(217,164,65,0.35)",
                      transition: { duration: 0.5, ease: luxuryEase },
                    }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                className="rounded-2xl border border-[rgba(154,100,24,0.35)] bg-linear-to-b from-[#ECC66B] to-[#D9A441] px-8 py-6 text-base font-semibold text-[#1A1208] shadow-[0_10px_26px_rgba(217,164,65,0.28)] hover:from-[#f0d080] hover:to-[#cf9a32] md:shadow-[0_14px_36px_rgba(217,164,65,0.38)]"
              >
                <Link href="/products">منتجاتنا</Link>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={
                lite
                  ? undefined
                  : {
                      y: -4,
                      boxShadow: "0 20px 44px rgba(26,18,8,0.22)",
                      transition: { duration: 0.5, ease: luxuryEase },
                    }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                className="rounded-2xl border border-[rgba(26,18,8,0.2)] bg-[#1A1208] px-8 py-6 text-base font-semibold text-[#FFF3D6] shadow-[0_14px_36px_rgba(26,18,8,0.2)] hover:bg-[#261a10]"
              >
                <Link href="#contact">تواصل معنا</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 sm:mx-auto sm:grid-cols-3 sm:gap-4"
          >
            {stats.map((s) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.k}
                  variants={fadeInUp}
                  whileHover={
                    lite
                      ? undefined
                      : {
                          y: -4,
                          boxShadow:
                            "0 30px 110px rgba(212,166,58,0.22), 0 22px 70px rgba(0,0,0,0.28)",
                          transition: { duration: 0.5, ease: luxuryEase },
                        }
                  }
                  className="hero-glass-stat relative flex flex-col items-center gap-2 rounded-3xl px-5 py-5 text-center"
                >
                  <span className="grid size-10 place-items-center rounded-2xl border border-[rgba(212,166,58,0.28)] bg-[radial-gradient(circle_at_30%_20%,rgba(212,166,58,0.18),rgba(17,17,17,0.72)_55%,rgba(10,8,6,0.82)_100%)] text-[#D4A63A] shadow-[0_8px_18px_rgba(0,0,0,0.26)] md:shadow-[0_14px_30px_rgba(0,0,0,0.32),0_0_28px_rgba(212,166,58,0.18)]">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-[#D4A63A]">{s.k}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
