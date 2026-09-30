import type { MetadataRoute } from "next"

import { siteConfig } from "@/content/site"

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/for-schools", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/programs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/impact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/student-projects", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
