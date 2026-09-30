"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

/** Animated gradient rule that draws itself in as it scrolls into view. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-24 text-brand", className)} aria-hidden="true">
      <svg viewBox="0 0 200 4" className="h-1 w-full" preserveAspectRatio="none">
        <motion.line
          x1="0"
          y1="2"
          x2="200"
          y2="2"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </svg>
    </div>
  )
}
