"use client"

import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number
}

/**
 * Scroll-triggered fade + rise reveal. Fires once, slightly before the
 * element is fully in view. Use this instead of ad-hoc whileInView configs.
 */
export function Reveal({ children, delay = 0, transition, ...props }: RevealProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay, ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
