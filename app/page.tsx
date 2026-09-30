import { pageMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { StatsBand } from "@/components/sections/stats-band"
import { HowItWorks } from "@/components/sections/how-it-works"
import { CaseStudyTeaser } from "@/components/sections/case-study-teaser"
import { ProjectHighlights } from "@/components/sections/project-highlights"
import { TeamSection } from "@/components/sections/team-section"
import { SchoolsCta } from "@/components/sections/schools-cta"

export const metadata = pageMetadata({
  title: "AI and Technology Education for Tier-2 Schools",
  description:
    "TechnoAIBrains brings hands-on AI and technology education to schools in Tier-2 towns with a single-screen method. 770 students trained, 40+ websites shipped, 10+ tools now live at our first partner school.",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <HowItWorks />
      <CaseStudyTeaser />
      <ProjectHighlights />
      <TeamSection />
      <SchoolsCta />
    </>
  )
}
