"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

import { useMediaQuery } from "@/lib/use-media-query"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  className?: string
  trackClassName?: string
}

/**
 * Desktop: vertical scroll through the wrapper drives horizontal translation
 * of the track (scroll-jacking, deliberately). Mobile/touch/reduced-motion:
 * a plain swipeable snap carousel — never scroll-jacked on touch devices.
 */
export function HorizontalScroll<T>(props: HorizontalScrollProps<T>) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const prefersReducedMotion = useReducedMotion()

  if (!isDesktop || prefersReducedMotion) {
    return <Carousel {...props} />
  }

  return <ScrollJackTrack {...props} />
}

function Carousel<T>({ items, renderItem, className }: HorizontalScrollProps<T>) {
  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="snap-start">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  )
}

function ScrollJackTrack<T>({ items, renderItem, className, trackClassName }: HorizontalScrollProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      setScrollDistance(Math.max(trackRef.current.scrollWidth - window.innerWidth, 0))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [items.length])

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  return (
    <div
      ref={wrapperRef}
      style={{ height: `calc(100vh + ${scrollDistance}px)` }}
      className={cn("relative", className)}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className={cn("flex gap-5 px-4 sm:px-6 lg:px-8", trackClassName)}
        >
          {items.map((item, index) => (
            <div key={index}>{renderItem(item, index)}</div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
