import { BookOpen } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { team } from "@/content/team"
import { PageHeader } from "@/components/sections/page-header"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/common/image-placeholder"
import { SchoolsCta } from "@/components/sections/schools-cta"

export const metadata = pageMetadata({
  title: "About",
  description:
    "TechnoAIBrains's mission is to make sure a student in a Tier-2 town is in line with students at top schools — not three years behind. Meet the team behind it.",
})

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Why TechnoAIBrains exists"
        description="Not every student who could build with AI and current technology happens to live near a school with a lab and specialist faculty. We built TechnoAIBrains to close that gap."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <blockquote className="border-l-4 border-primary pl-6 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Our mission is simple: a student in a Tier-2 town should be in line with students
              at top schools and universities — not three years behind the syllabus.
            </blockquote>
          </Reveal>

          <div className="mt-12 space-y-6 text-muted-foreground">
            <Reveal>
              <p>
                TechnoAIBrains is based in Bangalore, but almost none of our students are. We teach
                AI and current technology to school students — grades 3 through 9 today — who
                would otherwise have to move to a big city just to get access to this kind of
                education.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                The single obstacle standing in the way of a Tier-2 school offering this isn&rsquo;t
                talent or ambition — it&rsquo;s infrastructure. A computer lab with a device per
                student is expensive to build and staff. So we built a method that doesn&rsquo;t need
                one: a single shared screen per classroom, a mentor-led curriculum, and a
                relentless focus on shipping a real project instead of covering theory.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Our first partnership, with Amara Jyothi School in Mulbagal, is the proof: 770
                students trained, 40+ websites shipped, and 10+ tools students built that the
                school now runs on every day. We&rsquo;re building the same for the next school,
                and the one after that.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The team
            </h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-8 lg:grid-cols-2">
            {team.map((member) => (
              <StaggerItem key={member.id}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-5">
                    <ImagePlaceholder
                      label={member.photo.placeholderLabel}
                      aspectRatio="1/1"
                      alt={member.photo.alt}
                      className="w-32"
                    />
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-brand">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {member.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    {member.credential ? (
                      <Badge className="h-auto w-fit gap-1.5 whitespace-normal bg-amber py-1 text-left text-amber-foreground">
                        <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {member.credential.label} of &ldquo;{member.credential.detail}&rdquo;
                      </Badge>
                    ) : null}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SchoolsCta />
    </>
  )
}
