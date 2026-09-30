"use client"

import type { ProjectGradeBand, ProjectType } from "@/types"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export type GradeFilter = "all" | ProjectGradeBand
export type TypeFilter = "all" | ProjectType

interface ProjectFiltersProps {
  gradeFilter: GradeFilter
  onGradeFilterChange: (value: GradeFilter) => void
  typeFilter: TypeFilter
  onTypeFilterChange: (value: TypeFilter) => void
  /** Only categories that actually have projects are offered. */
  availableTypes: ProjectType[]
}

const typeLabels: Record<ProjectType, string> = {
  website: "Websites",
  tool: "Tools",
  "ai-agent": "AI Agents",
}

export function ProjectFilters({
  gradeFilter,
  onGradeFilterChange,
  typeFilter,
  onTypeFilterChange,
  availableTypes,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <div>
        <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Grade
        </span>
        <ToggleGroup
          variant="outline"
          value={[gradeFilter]}
          onValueChange={(value) => onGradeFilterChange((value[0] as GradeFilter) ?? "all")}
          aria-label="Filter by grade band"
        >
          <ToggleGroupItem value="all">All grades</ToggleGroupItem>
          <ToggleGroupItem value="6-7">Grades 6–7</ToggleGroupItem>
          <ToggleGroupItem value="8-9">Grades 8–9</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Type
        </span>
        <ToggleGroup
          variant="outline"
          value={[typeFilter]}
          onValueChange={(value) => onTypeFilterChange((value[0] as TypeFilter) ?? "all")}
          aria-label="Filter by project type"
        >
          <ToggleGroupItem value="all">All types</ToggleGroupItem>
          {availableTypes.map((type) => (
            <ToggleGroupItem key={type} value={type}>
              {typeLabels[type]}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}
