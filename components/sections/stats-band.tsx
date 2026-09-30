import { flagshipStats } from "@/content/stats"
import { StatDisplay } from "@/components/common/stat-display"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

export function StatsBand() {
  return (
    <section className="border-y border-border bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {flagshipStats.map((stat) => (
            <StaggerItem key={stat.id}>
              <StatDisplay stat={stat} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
