import { pageMetadata } from "@/lib/seo"
import { programs } from "@/content/programs"
import { PageHeader } from "@/components/sections/page-header"
import { ProgramSection } from "@/components/sections/program-section"
import { SchoolsCta } from "@/components/sections/schools-cta"

export const metadata = pageMetadata({
  title: "Programs",
  description:
    "Three ways to learn with TechnoAIBrains: the in-school program schools bring in directly, the offline studio in Kolar and Bangalore, and the Builder Track for students ready to ship their own product.",
})

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Three ways to build with TechnoAIBrains"
        description="Whichever door a student comes through, it ends the same way: a real, working project they built themselves."
      />
      {programs.map((program, index) => (
        <ProgramSection key={program.id} program={program} index={index} />
      ))}
      <SchoolsCta />
    </>
  )
}
