"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const words = ["a website.", "a notice board.", "an AI agent.", "their first product."]

export function HeroWordSwap() {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2200)
    return () => clearInterval(id)
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return <span className="font-semibold text-brand">{words[0]}</span>
  }

  return (
    <span className="relative inline-block min-h-[1.2em] min-w-[13ch] text-left align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0 font-semibold whitespace-nowrap text-brand"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible font-semibold whitespace-nowrap" aria-hidden="true">
        their first product.
      </span>
    </span>
  )
}
