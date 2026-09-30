import { GraduationCap } from "lucide-react"

import type { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectImageView } from "./project-image"
import { cn } from "@/lib/utils"

const typeLabel: Record<Project["type"], string> = {
  website: "Website",
  tool: "Tool",
  "ai-agent": "AI Agent",
}

/**
 * Presentational only — the caller decides how the card becomes interactive
 * (a Link on the Home showcase, a DialogTrigger in the full gallery).
 */
export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Card
      className={cn(
        "group h-full cursor-pointer gap-0 py-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/40",
        className
      )}
    >
      <div className="overflow-hidden">
        <ProjectImageView
          image={project.image}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 340px"
          className="rounded-none border-0 transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{typeLabel[project.type]}</Badge>
          <Badge variant="outline">{project.grade}</Badge>
          {project.liveInUse ? (
            <Badge className="bg-amber text-amber-foreground">Live in use</Badge>
          ) : null}
        </div>
        <h3 className="font-heading text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{project.summary}</p>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          {project.builtBy}
        </p>
      </CardContent>
    </Card>
  )
}
