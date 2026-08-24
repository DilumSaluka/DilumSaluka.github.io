import { motion, useReducedMotion } from "motion/react";

/**
 * Section heading with a reliable fade-and-rise reveal.
 * Uses the same proven pattern as <Reveal> so it can never
 * end up invisible or mis-rendered.
 */
export function AnimatedHeading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.h2
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.h2>
  );
}
