"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/** Thin top-of-viewport bar that fills as the page scrolls. For long pages only. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
    />
  )
}
