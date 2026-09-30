"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { projects } from "@/content/projects"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { SectionDivider } from "@/components/motion/section-divider"
import { HorizontalScroll } from "@/components/motion/horizontal-scroll"
import { ProjectCard } from "@/components/gallery/project-card"

export function ProjectHighlights() {
  const highlights = projects.filter((project) => project.featured)

  return (
    <section className="py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          What students actually built
        </h2>
        <p className="mt-4 text-muted-foreground">
          Real websites and web apps built by students at Amara Jyothi School — open any of
          them live.
        </p>
        <SectionDivider className="mt-6" />
      </Reveal>

      <div className="mt-14">
        <HorizontalScroll
          items={highlights}
          renderItem={(project) => (
            <Link
              href="/student-projects"
              className="block w-[300px] shrink-0 sm:w-[340px]"
              aria-label={`View ${project.title} in the student projects gallery`}
            >
              <ProjectCard project={project} />
            </Link>
          )}
        />
      </div>

      <div className="mt-12 flex justify-center px-4">
        <Button variant="outline" render={<Link href="/student-projects" />}>
          See the full gallery
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
