import { Reveal } from "@/components/motion/reveal"
import { SectionDivider } from "@/components/motion/section-divider"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "center" | "left"
}

/** Shared top-of-page header for every non-Home page — clears the fixed header. */
export function PageHeader({ eyebrow, title, description, className, align = "center" }: PageHeaderProps) {
  return (
    <section className={cn("pt-32 pb-16 sm:pt-36 sm:pb-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className={cn("mx-auto max-w-2xl", align === "center" && "text-center")}>
          {eyebrow ? <p className="text-sm font-semibold text-brand">{eyebrow}</p> : null}
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? <p className="mt-4 text-lg text-muted-foreground">{description}</p> : null}
          <SectionDivider className={cn("mt-6", align === "left" && "ml-0")} />
        </Reveal>
      </div>
    </section>
  )
}
