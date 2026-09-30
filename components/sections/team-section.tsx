import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

import { team } from "@/content/team"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import { SectionDivider } from "@/components/motion/section-divider"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { ImagePlaceholder } from "@/components/common/image-placeholder"

export function TeamSection() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Built by engineers, run like a school
          </h2>
          <p className="mt-4 text-muted-foreground">
            TechnoAIBrains is led by two engineers with over a decade each in the industry.
          </p>
          <SectionDivider className="mt-6" />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <StaggerItem key={member.id}>
              <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-4 sm:flex-row">
                  <ImagePlaceholder
                    label={member.photo.placeholderLabel}
                    aspectRatio="1/1"
                    alt={member.photo.alt}
                    className="w-full shrink-0 sm:w-32"
                  />
                  <div className="flex flex-1 flex-col gap-2">
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-brand">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    {member.credential ? (
                      <Badge className="mt-1 h-auto w-fit gap-1.5 whitespace-normal bg-amber py-1 text-left text-amber-foreground">
                        <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {member.credential.label} of &ldquo;{member.credential.detail}&rdquo;
                      </Badge>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" render={<Link href="/about" />}>
            Meet the full team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
