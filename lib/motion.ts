import type { Transition, Variants } from "framer-motion";

/** Apple-style smooth ease — calm deceleration */
export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const transitionLuxury: Transition = {
  duration: 0.85,
  ease: luxuryEase,
};

export const transitionEnter: Transition = {
  duration: 0.75,
  ease: luxuryEase,
};

export const transitionHover: Transition = {
  duration: 0.5,
  ease: luxuryEase,
};

export const transitionFloat: Transition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut",
};

/** Default viewport for smooth reveal on scroll (sections / grids) */
export const scrollViewport = {
  once: true,
  margin: "-12%" as const,
  amount: 0.15,
};

export const scrollViewportLoose = {
  once: true,
  margin: "-10%" as const,
  amount: 0.12,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transitionEnter, duration: 0.8 },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...transitionEnter, duration: 0.65 },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

/** Stagger slightly tighter for dense grids */
export const staggerContainerDense: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    y: -6,
    transition: transitionHover,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...transitionEnter, duration: 0.7 },
  },
};

/** Reusable card hover: transform + gold edge glow (use with whileHover) */
export const luxuryCardHover = {
  y: -6,
  scale: 1.012,
  boxShadow: "0 24px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(217,164,65,0.2)",
  transition: { duration: 0.5, ease: luxuryEase },
};

export const luxuryButtonHover = {
  scale: 1.02,
  boxShadow: "0 0 32px -6px rgba(217,164,65,0.45)",
  transition: { duration: 0.35, ease: luxuryEase },
};

export const luxuryButtonTap = { scale: 0.98 };

/** Subtle vertical float for icons / decorative elements */
export const floatingMotion: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -7, 0],
    transition: {
      duration: 6.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/** Very soft ambient pulse for glass surfaces */
export const ambientGlowPulse: Variants = {
  initial: { opacity: 0.38 },
  animate: {
    opacity: [0.35, 0.52, 0.35],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/** Page / route entrance — subtle, no harsh cuts */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: luxuryEase },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.42, ease: luxuryEase },
  },
};
