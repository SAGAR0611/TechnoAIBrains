"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

/**
 * Animates 0 -> value once, when scrolled into view. Screen readers get the
 * final value immediately via aria-label; the animated digits are hidden
 * from assistive tech to avoid announcing every intermediate frame.
 */
export function CountUp({ value, suffix = "", duration = 1.5, className }: CountUpProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const digitsRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const finalText = `${value}${suffix}`

  useEffect(() => {
    if (!isInView) return
    const node = digitsRef.current
    if (!node) return

    if (prefersReducedMotion) {
      node.textContent = finalText
      return
    }

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = `${Math.round(latest)}${suffix}`
      },
    })

    return () => controls.stop()
  }, [isInView, value, suffix, duration, prefersReducedMotion, finalText])

  return (
    <span ref={containerRef} className={cn("tabular-nums", className)} aria-label={finalText}>
      <span ref={digitsRef} aria-hidden="true">
        0
      </span>
    </span>
  )
}
