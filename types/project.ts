export type ProjectGradeBand = "6-7" | "8-9"

export type ProjectType = "website" | "tool" | "ai-agent"

export interface ProjectImage {
  /** Screenshot path under /public. Without it, a labelled placeholder is shown instead. */
  src?: string
  /** Text shown in the placeholder — says what image belongs here. */
  placeholderLabel: string
  aspectRatio: "16/9" | "4/3" | "1/1" | "11/5"
  alt: string
}

export interface Project {
  id: string
  slug: string
  title: string
  builtBy: string
  grade: string
  gradeBand: ProjectGradeBand
  type: ProjectType
  school: string
  summary: string
  description: string
  highlights: string[]
  image: ProjectImage
  /** The student-built project, live on the web. */
  liveUrl: string
  featured?: boolean
  /** Still in live use at the partner school. */
  liveInUse?: boolean
}
