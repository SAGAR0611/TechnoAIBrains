import Image from "next/image"

import type { ProjectImage } from "@/types"
import { ImagePlaceholder } from "@/components/common/image-placeholder"
import { cn } from "@/lib/utils"

const aspectClass: Record<ProjectImage["aspectRatio"], string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "11/5": "aspect-[11/5]",
}

/** A project's screenshot, or the labelled placeholder while no image is supplied. */
export function ProjectImageView({
  image,
  sizes,
  priority,
  className,
}: {
  image: ProjectImage
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (!image.src) {
    return (
      <ImagePlaceholder
        label={image.placeholderLabel}
        aspectRatio={image.aspectRatio}
        alt={image.alt}
        className={className}
      />
    )
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", aspectClass[image.aspectRatio], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  )
}
