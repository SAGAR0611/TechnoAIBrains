import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group"
import { HeroWordSwap } from "./hero-word-swap"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh bg-dot-grid">
      <div className="mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6">
        <StaggerGroup className="flex flex-col items-center gap-6">
          <StaggerItem>
            <Badge
              variant="outline"
              className="h-auto gap-1.5 whitespace-normal bg-background/70 py-1.5 text-left backdrop-blur"
            >
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              Bangalore-based · AI &amp; technology education
            </Badge>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your students don&rsquo;t need to move to a big city to learn AI.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-balance font-heading text-2xl text-foreground/80 sm:text-3xl">
              In one term, your students will build{" "}
              <HeroWordSwap />
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
              TechnoAIBrains brings hands-on AI and technology education into schools in Tier-2
              towns, using a single-screen method — no computer lab required. Our first
              partner school has already trained 770 students who went on to ship real
              websites and tools.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-11 px-6 text-base" render={<Link href="/for-schools" />}>
                Bring this to your school
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 bg-background/70 px-6 text-base backdrop-blur"
                render={<Link href="/student-projects" />}
              >
                See what students built
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="text-sm text-muted-foreground">
              770 students trained · 40+ websites shipped · 10+ tools live today
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
