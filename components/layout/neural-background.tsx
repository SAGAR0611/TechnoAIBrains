"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  isAccent: boolean
}

const PARTICLE_DENSITY = 1 / 11000
const MIN_PARTICLES = 22
const MAX_PARTICLES = 85
const LINK_DISTANCE = 130
const ACCENT_EVERY = 9

// Mirrors the --background / --primary / --brand-amber tokens in globals.css.
// Kept as explicit literals (not read from computed CSS) because reading the
// DOM's current --var value races next-themes' own effect that applies the
// `.dark` class — reading mid-toggle silently returns the *previous* theme's
// colors one toggle late.
const THEME_COLORS = {
  light: {
    background: "oklch(1 0 0)",
    primary: "oklch(0.45 0.16 141)",
    amber: "oklch(0.78 0.15 70)",
  },
  dark: {
    background: "oklch(0.16 0.045 262)",
    primary: "oklch(0.847 0.277 141)",
    amber: "oklch(0.8 0.14 70)",
  },
} as const

/** Converts any CSS color (oklch, named, etc.) to a normalized "r, g, b" triple via canvas. */
function toRgbTriple(cssColor: string): string {
  const probe = document.createElement("canvas")
  probe.width = 1
  probe.height = 1
  const probeCtx = probe.getContext("2d")
  if (!probeCtx) return "0, 0, 0"
  probeCtx.fillStyle = cssColor
  probeCtx.fillRect(0, 0, 1, 1)
  const [r, g, b] = probeCtx.getImageData(0, 0, 1, 1).data
  return `${r}, ${g}, ${b}`
}

/**
 * A quiet, full-viewport neural-network motif that sits behind every page —
 * slow-drifting nodes with connecting lines, redrawn in the current theme's
 * colors. Fixed (doesn't scroll), decorative, and paused entirely for
 * prefers-reduced-motion (a single static frame instead of an animation loop).
 */
export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return
    const ctx: CanvasRenderingContext2D = context

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let prefersReducedMotion = reducedMotionQuery.matches

    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let frameId = 0
    let resizeTimeout = 0

    let bgRgb = "255, 255, 255"
    let lineRgb = "15, 61, 52"
    let accentRgb = "245, 196, 81"

    function readColors() {
      const palette = THEME_COLORS[resolvedTheme === "dark" ? "dark" : "light"]
      bgRgb = toRgbTriple(palette.background)
      lineRgb = toRgbTriple(palette.primary)
      accentRgb = toRgbTriple(palette.amber)
    }

    function createParticles() {
      const count = Math.round(
        Math.max(MIN_PARTICLES, Math.min(MAX_PARTICLES, (width * height) * PARTICLE_DENSITY))
      )
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        isAccent: i % ACCENT_EVERY === 0,
      }))
    }

    function resize() {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createParticles()
    }

    function drawFrame(animate: boolean) {
      ctx.fillStyle = `rgb(${bgRgb})`
      ctx.fillRect(0, 0, width, height)

      if (animate) {
        for (const p of particles) {
          p.x += p.vx
          p.y += p.vy
          if (p.x <= 0 || p.x >= width) p.vx *= -1
          if (p.y <= 0 || p.y >= height) p.vy *= -1
          p.x = Math.min(Math.max(p.x, 0), width)
          p.y = Math.min(Math.max(p.y, 0), height)
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${lineRgb}, ${(1 - dist / LINK_DISTANCE) * 0.16})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.isAccent ? 2.2 : 1.5, 0, Math.PI * 2)
        ctx.fillStyle = p.isAccent ? `rgba(${accentRgb}, 0.5)` : `rgba(${lineRgb}, 0.38)`
        ctx.fill()
      }
    }

    function loop() {
      drawFrame(true)
      frameId = requestAnimationFrame(loop)
    }

    function start() {
      cancelAnimationFrame(frameId)
      if (prefersReducedMotion) {
        drawFrame(false)
      } else {
        loop()
      }
    }

    function handleResize() {
      window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        resize()
        start()
      }, 150)
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(frameId)
      } else {
        start()
      }
    }

    function handleReducedMotionChange(event: MediaQueryListEvent) {
      prefersReducedMotion = event.matches
      start()
    }

    readColors()
    resize()
    start()

    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibility)
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange)

    return () => {
      cancelAnimationFrame(frameId)
      window.clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
