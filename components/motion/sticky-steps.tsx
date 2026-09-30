"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { useInView } from "framer-motion"

import { cn } from "@/lib/utils"

interface StickyStepsProps<T> {
  items: T[]
  renderSticky: (active: { index: number; item: T }) => ReactNode
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode
  className?: string
}

/**
 * Left column pins (desktop only, via `md:sticky`) while the right column's
 * items scroll past; the item nearest the vertical center is "active" and
 * drives what the sticky column shows. On mobile the grid collapses to a
 * single column, so it naturally degrades to a plain stacked list.
 */
export function StickySteps<T>({
  items,
  renderSticky,
  renderItem,
  className,
}: StickyStepsProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={cn("grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16", className)}>
      <div className="md:sticky md:top-28 md:h-fit">
        {renderSticky({ index: activeIndex, item: items[activeIndex] })}
      </div>
      <div className="flex flex-col gap-16 md:gap-32">
        {items.map((item, index) => (
          <StepWatcher key={index} index={index} onActive={setActiveIndex}>
            {renderItem(item, index, index === activeIndex)}
          </StepWatcher>
        ))}
      </div>
    </div>
  )
}

function StepWatcher({
  index,
  onActive,
  children,
}: {
  index: number
  onActive: (index: number) => void
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" })

  useEffect(() => {
    if (isInView) onActive(index)
  }, [isInView, index, onActive])

  return <div ref={ref}>{children}</div>
}
