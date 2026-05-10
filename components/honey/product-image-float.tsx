"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { luxuryEase } from "@/lib/motion";
import { useMobileLite } from "@/lib/use-mobile-lite";

/** طفو خفيف مستمر للعبوة — يُعطّل على الموبايل ومع prefers-reduced-motion */
export function ProductImageFloat({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const mobileLite = useMobileLite();
  const off = reduceMotion || mobileLite;

  return (
    <motion.div
      className="flex h-full w-full min-h-0 items-center justify-center [transform:translateZ(0)]"
      animate={off ? undefined : { y: [0, -4, 0] }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: luxuryEase,
      }}
    >
      {children}
    </motion.div>
  );
}
