import { CheckCircle2, Clock } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { amaraJyothiCaseStudy } from "@/content/case-study"
import { testimonials } from "@/content/testimonials"
import { PageHeader } from "@/components/sections/page-header"
import { StatsBand } from "@/components/sections/stats-band"
import { SchoolsCta } from "@/components/sections/schools-cta"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialCard } from "@/components/common/testimonial-card"

export const metadata = pageMetadata({
  title: "Impact",
  description:
    "The full Amara Jyothi School case study: 770 students trained, 40+ websites shipped, and 10+ tools students built that the school now runs on every day.",
})

export default function ImpactPage() {
  const caseStudy = amaraJyothiCaseStudy

  return (
    <>
      <ScrollProgress />
      <PageHeader
        eyebrow="Impact"
        title={`${caseStudy.school}, ${caseStudy.location}`}
        description={caseStudy.summary}
      />

      <StatsBand />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {caseStudy.narrative.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-muted-foreground">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What students built — and still run
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not classroom exercises. These are the tools running the school today.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
            {caseStudy.toolsBuilt.map((tool) => (
              <StaggerItem key={tool.name}>
                <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col gap-3">
                    <Badge className="w-fit gap-1.5 bg-amber text-amber-foreground">
                      {tool.status === "live" ? (
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      {tool.status === "live" ? "Live at the school" : "In development"}
                    </Badge>
                    <h3 className="font-heading text-lg font-semibold">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              In their words
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SchoolsCta />
    </>
  )
}
