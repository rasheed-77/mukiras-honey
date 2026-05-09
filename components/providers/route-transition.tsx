"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

import { luxuryEase } from "@/lib/motion";

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
        transition={{
          duration: reduceMotion ? 0 : 0.52,
          ease: luxuryEase,
        }}
        className="relative min-h-0 w-full max-w-full overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
