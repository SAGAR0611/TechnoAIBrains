import type { Stat } from "./stat"

export interface CaseStudyTool {
  name: string
  description: string
  status: "live" | "in-development"
}

export interface CaseStudySection {
  heading: string
  body: string
}

export interface CaseStudy {
  id: string
  school: string
  location: string
  partnerSince: string
  summary: string
  stats: Stat[]
  narrative: CaseStudySection[]
  toolsBuilt: CaseStudyTool[]
  websiteCount: string
}
