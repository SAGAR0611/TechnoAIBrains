import { BookOpen, CheckCircle2 } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { programs } from "@/content/programs"
import { team } from "@/content/team"
import { testimonials } from "@/content/testimonials"
import { PageHeader } from "@/components/sections/page-header"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { EnquiryForm } from "@/components/forms/enquiry-form"
import { TestimonialCard } from "@/components/common/testimonial-card"

export const metadata = pageMetadata({
  title: "For Schools",
  description:
    "What a TechnoAIBrains partnership looks like: what your school gets, how a term runs, and how to get started — built by the founder of AI Architects.",
})

export default function ForSchoolsPage() {
  const inSchoolProgram = programs.find((program) => program.id === "in-school")!
  const founder = team.find((member) => member.id === "sagar-chakravarthy")!
  const principalQuote = testimonials.find((t) => t.id === "principal-placeholder")

  return (
    <>
      <ScrollProgress />
      <PageHeader
        eyebrow="For Schools"
        title="Give your students a three-year head start"
        description="A full AI and technology curriculum, delivered on a single screen — no lab, no new hires, no risk to your timetable."
      />

      <section className="pb-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-brand">
                  <BookOpen className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold">
                    Led by the author of &ldquo;AI Architects&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {founder.name}, TechnoAIBrains&rsquo;s founder, has spent 10+ years building
                    software at companies including Nokia and Concentrix, and wrote the book on
                    AI Architects — the same expertise that designed this curriculum.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What your school gets
            </h2>
            <p className="mt-4 text-muted-foreground">{inSchoolProgram.summary}</p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
            {inSchoolProgram.whatsIncluded.map((item) => (
              <StaggerItem key={item}>
                <div className="flex gap-3 rounded-xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <p className="text-sm">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              How a term runs
            </h2>
          </Reveal>

          <StaggerGroup className="relative mt-12 space-y-8 border-l border-border pl-8">
            {inSchoolProgram.howItRuns.map((step, index) => (
              <StaggerItem key={step.title} className="relative">
                <span className="absolute -left-[2.35rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {principalQuote ? (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <TestimonialCard testimonial={principalQuote} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <Badge variant="outline">Start a partnership</Badge>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight">
                Tell us about your school
              </h2>
              <p className="mt-4 text-muted-foreground">
                Share a few details and we&rsquo;ll get back to you to talk through grades,
                timetable, and what a first term could look like.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-3">
              <EnquiryForm type="school" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
