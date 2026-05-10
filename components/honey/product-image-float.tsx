"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { luxuryEase } from "@/lib/motion";

/** طفو خفيف مستمر للعبوة — يُعطّل مع prefers-reduced-motion */
export function ProductImageFloat({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex h-full w-full min-h-0 items-center justify-center [transform:translateZ(0)]"
      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
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
