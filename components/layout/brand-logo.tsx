import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

/**
 * Logo mark (transparent PNG, so it sits on any background with no box edges)
 * plus a live-text wordmark that follows the theme — the logo file's navy
 * lettering would vanish on the dark background.
 */
export function BrandLogo({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 font-heading font-bold tracking-tight", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0"
      />
      <span className="text-lg leading-none">
        Techno<span className="text-brand">AI</span>Brains
      </span>
    </Link>
  )
}
