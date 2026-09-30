import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  /** Describes exactly what real photo/screenshot belongs here — visible until swapped for a real next/image. */
  label: string
  aspectRatio: "16/9" | "4/3" | "1/1" | "11/5"
  alt: string
  className?: string
}

const aspectClass: Record<ImagePlaceholderProps["aspectRatio"], string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "11/5": "aspect-[11/5]",
}

export function ImagePlaceholder({ label, aspectRatio, alt, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted p-4 text-center text-sm text-muted-foreground",
        aspectClass[aspectRatio],
        className
      )}
    >
      <ImageIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
