import { pageMetadata } from "@/lib/seo"
import { projects } from "@/content/projects"
import { PageHeader } from "@/components/sections/page-header"
import { ProjectGallery } from "@/components/gallery/project-gallery"
import { SchoolsCta } from "@/components/sections/schools-cta"

export const metadata = pageMetadata({
  title: "Student Projects",
  description:
    "Browse the websites, tools, and AI agents TechnoAIBrains students have built — filter by grade band and project type.",
})

export default function StudentProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Projects"
        title="Built by students, not for them"
        description="Every project here was designed and shipped by the student who built it — from a Grade 6 learning website to a Grade 9 gate pass system for the school."
      />
      <section className="pb-24">
        <ProjectGallery projects={projects} />
      </section>
      <SchoolsCta />
    </>
  )
}
