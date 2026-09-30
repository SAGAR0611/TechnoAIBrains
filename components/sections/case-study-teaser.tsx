import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { amaraJyothiCaseStudy } from "@/content/case-study"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/motion/reveal"
import { ImagePlaceholder } from "@/components/common/image-placeholder"

export function CaseStudyTeaser() {
  const caseStudy = amaraJyothiCaseStudy

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ImagePlaceholder
              label="Photo: students at Amara Jyothi School presenting a project they built — 4:3"
              aspectRatio="4/3"
              alt="Students at Amara Jyothi School presenting a project they built"
              className="w-full"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Badge variant="outline">{caseStudy.partnerSince}</Badge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {caseStudy.school}, {caseStudy.location}
            </h2>
            <p className="mt-4 text-muted-foreground">{caseStudy.summary}</p>
            <Button className="mt-6" render={<Link href="/impact" />}>
              Read the full case study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
