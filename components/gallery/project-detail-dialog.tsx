"use client"

import { ExternalLink, GraduationCap, School as SchoolIcon } from "lucide-react"

import type { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProjectImageView } from "./project-image"

const typeLabel: Record<Project["type"], string> = {
  website: "Website",
  tool: "Tool",
  "ai-agent": "AI Agent",
}

interface ProjectDetailDialogProps {
  project: Project | null
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailDialog({ project, onOpenChange }: ProjectDetailDialogProps) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col overflow-y-auto sm:max-w-lg [&>*]:shrink-0">
        {project ? (
          <>
            <ProjectImageView
              image={project.image}
              sizes="(min-width: 640px) 512px, 90vw"
              className="rounded-lg"
            />
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{typeLabel[project.type]}</Badge>
                <Badge variant="outline">{project.grade}</Badge>
                {project.liveInUse ? (
                  <Badge className="bg-amber text-amber-foreground">Live in use</Badge>
                ) : null}
              </div>
              <DialogTitle className="text-xl">{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>

            <Button
              render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}
              className="w-full sm:w-fit"
            >
              Open live project
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </Button>

            <div className="flex flex-col gap-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                {project.builtBy}
              </p>
              <p className="flex items-center gap-2">
                <SchoolIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {project.school}
              </p>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
