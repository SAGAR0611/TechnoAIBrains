import { Quote } from "lucide-react"

import type { Testimonial } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4">
        <Quote className="h-6 w-6 text-brand/50" aria-hidden="true" />
        <p className="flex-1 text-base text-foreground/90 italic">&ldquo;{testimonial.quote}&rdquo;</p>
        <div>
          <p className="text-sm font-semibold">{testimonial.attribution}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
        {testimonial.placeholder ? (
          <Badge variant="outline" className="w-fit border-dashed text-muted-foreground">
            Placeholder — real quote pending
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  )
}
