import type { Variants } from "framer-motion";

/** Fade in from 20px below — used for all scroll reveals */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger wrapper — wraps lists of fadeInUp children */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/** Viewport defaults — trigger once when element enters view */
export const viewportOnce = { once: true, margin: "-60px" };
