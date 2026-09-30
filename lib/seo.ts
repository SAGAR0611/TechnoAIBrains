import type { Metadata } from "next"

/** Mirrors title/description into openGraph and twitter so every page gets correct social cards. */
export function pageMetadata({ title, description }: { title: string; description: string }): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  }
}
