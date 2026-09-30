import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { ParallaxBlob } from "@/components/motion/parallax-blob"

export function SchoolsCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <ParallaxBlob className="-top-20 -left-20 h-72 w-72" />
      <ParallaxBlob className="-bottom-24 -right-16 h-80 w-80" range={16} />

      <Reveal className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Give your students a three-year head start, not a three-year gap.
        </h2>
        <p className="mt-4 text-muted-foreground">
          One screen. One term. A real, shipped project for every student — the same method
          that trained 770 students at Amara Jyothi School.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-11 px-6 text-base" render={<Link href="/for-schools" />}>
            Start a partnership
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-6 text-base"
            render={<Link href="/contact" />}
          >
            Ask us a question
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
