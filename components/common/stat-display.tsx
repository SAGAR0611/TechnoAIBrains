import type { Stat } from "@/types"
import { CountUp } from "@/components/motion/count-up"
import { cn } from "@/lib/utils"

export function StatDisplay({ stat, className }: { stat: Stat; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-2 text-center", className)}>
      <span className="font-heading text-5xl font-bold text-brand sm:text-6xl">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </span>
      <span className="text-base font-semibold sm:text-lg">{stat.label}</span>
      {stat.description ? (
        <span className="max-w-[24ch] text-sm text-muted-foreground">{stat.description}</span>
      ) : null}
    </div>
  )
}
