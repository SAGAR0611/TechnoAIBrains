"use client"

import { Laptop, MonitorSmartphone, Rocket } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionDivider } from "@/components/motion/section-divider"
import { StickySteps } from "@/components/motion/sticky-steps"
import { cn } from "@/lib/utils"

interface Step {
  title: string
  description: string
  icon: typeof Laptop
}

const steps: Step[] = [
  {
    title: "One screen, one classroom",
    description:
      "No computer lab, no per-student device. Every activity is built around a single shared screen, so any classroom can start on day one.",
    icon: MonitorSmartphone,
  },
  {
    title: "A mentor-led curriculum",
    description:
      "TechnoAIBrains mentors run every session across grades 3 to 9. Your teachers don't need to already know how to code — we bring the people who do.",
    icon: Laptop,
  },
  {
    title: "Students ship, not just learn",
    description:
      "Every term ends in a real, working project — a website, a tool, or an agent the student built and can point to, not a worksheet.",
    icon: Rocket,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">
            The same method that took Amara Jyothi School from zero infrastructure to 770
            trained students.
          </p>
          <SectionDivider className="mt-6" />
        </Reveal>

        <div className="mt-16">
          <StickySteps
            items={steps}
            renderSticky={({ index, item }) => (
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <item.icon className="h-8 w-8 text-brand" aria-hidden="true" />
                <span className="mt-4 block text-sm font-semibold text-brand">
                  Step {index + 1} of {steps.length}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </div>
            )}
            renderItem={(item, index, isActive) => (
              <div
                className={cn(
                  "border-l-2 pl-6 transition-colors duration-300",
                  isActive ? "border-primary" : "border-border"
                )}
              >
                <span
                  className={cn(
                    "text-sm font-semibold transition-colors duration-300",
                    isActive ? "text-brand" : "text-muted-foreground"
                  )}
                >
                  0{index + 1}
                </span>
                <h4
                  className={cn(
                    "mt-1 font-heading text-xl font-semibold transition-colors duration-300",
                    isActive ? "text-foreground" : "text-foreground/50"
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "mt-2 transition-opacity duration-300",
                    isActive ? "text-muted-foreground opacity-100" : "text-muted-foreground opacity-60"
                  )}
                >
                  {item.description}
                </p>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  )
}
