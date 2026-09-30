import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, Rocket, School } from "lucide-react"

import type { Program, ProgramId } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"

const icons: Record<ProgramId, typeof School> = {
  "in-school": School,
  "offline-studio": Building2,
  "builder-track": Rocket,
}

export function ProgramSection({ program, index }: { program: Program; index: number }) {
  const Icon = icons[program.id]
  const reversed = index % 2 === 1

  return (
    <section
      id={program.id}
      className="scroll-mt-24 border-b border-border py-16 last:border-b-0 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-10 lg:grid-cols-5 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <Reveal className="lg:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-brand">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <Badge variant="outline" className="mt-4 h-auto whitespace-normal py-1 text-left">
              {program.audience}
            </Badge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight">{program.name}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{program.tagline}</p>
            <p className="mt-4 text-muted-foreground">{program.summary}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Format</dt>
                <dd className="font-medium">{program.format}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="font-medium">{program.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="font-medium">{program.duration}</dd>
              </div>
            </dl>

            <Button className="mt-6" render={<Link href={program.ctaHref} />}>
              {program.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            <StaggerGroup>
              <StaggerItem>
                <Card className="h-full">
                  <CardContent>
                    <h3 className="font-heading text-base font-semibold">What&rsquo;s included</h3>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {program.whatsIncluded.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card className="h-full">
                  <CardContent>
                    <h3 className="font-heading text-base font-semibold">Outcomes</h3>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {program.outcomes.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem className="sm:col-span-2">
                <Card className="h-full">
                  <CardContent>
                    <h3 className="font-heading text-base font-semibold">How it runs</h3>
                    <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                      {program.howItRuns.map((step, stepIndex) => (
                        <li key={step.title}>
                          <span className="text-xs font-semibold text-brand">
                            0{stepIndex + 1}
                          </span>
                          <p className="mt-1 text-sm font-semibold">{step.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
