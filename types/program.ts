export type ProgramId = "in-school" | "offline-studio" | "builder-track"

export interface ProgramStep {
  title: string
  description: string
}

export interface Program {
  id: ProgramId
  name: string
  audience: string
  tagline: string
  summary: string
  format: string
  location: string
  duration: string
  whatsIncluded: string[]
  outcomes: string[]
  howItRuns: ProgramStep[]
  ctaLabel: string
  ctaHref: string
}
