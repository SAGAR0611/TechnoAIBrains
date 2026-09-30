"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

interface ParallaxBlobProps {
  className?: string
  range?: number
}

/**
 * A single decorative, blurred gradient blob with a small vertical parallax
 * drift. Position and size come from `className` (absolute + top/left/size);
 * never place this behind readable text.
 */
export function ParallaxBlob({ className, range = 24 }: ParallaxBlobProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={prefersReducedMotion ? undefined : { y }}
      className={cn(
        "pointer-events-none absolute rounded-full bg-gradient-to-br from-primary/30 to-amber/30 opacity-60 blur-3xl",
        className
      )}
    />
  )
}
