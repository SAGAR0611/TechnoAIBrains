"use client"

import { useMemo, useState } from "react"

import type { Project } from "@/types"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { ProjectCard } from "./project-card"
import { ProjectDetailDialog } from "./project-detail-dialog"
import { ProjectFilters, type GradeFilter, type TypeFilter } from "./project-filters"

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [gradeFilter, setGradeFilter] = useState<GradeFilter>("all")
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all")
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        const gradeMatch = gradeFilter === "all" || project.gradeBand === gradeFilter
        const typeMatch = typeFilter === "all" || project.type === typeFilter
        return gradeMatch && typeMatch
      }),
    [projects, gradeFilter, typeFilter]
  )

  const availableTypes = useMemo(
    () => (["website", "tool", "ai-agent"] as const).filter((type) => projects.some((p) => p.type === type)),
    [projects]
  )

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ProjectFilters
        gradeFilter={gradeFilter}
        onGradeFilterChange={setGradeFilter}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        availableTypes={[...availableTypes]}
      />

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No projects match those filters yet — try a different combination.
        </p>
      ) : (
        <StaggerGroup
          key={`${gradeFilter}-${typeFilter}`}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="block w-full rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-haspopup="dialog"
              >
                <ProjectCard project={project} />
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      )}

      <ProjectDetailDialog project={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </div>
  )
}
