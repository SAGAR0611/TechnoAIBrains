import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "TechnoAIBrains",
  tagline: "AI and current technology, taught where students actually live.",
  description:
    "TechnoAIBrains teaches AI and current technology to school students in Tier-2 towns with a single-screen method — no expensive lab required. Our first partner school has already trained 770 students across grades 3 to 9.",
  url: "https://technoaibrains.com",
  location: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
  },
  contact: {
    email: "hello@technoaibrains.com",
    phone: "+91 88928 84352",
  },
  nav: [
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "Student Projects", href: "/student-projects" },
    { label: "For Schools", href: "/for-schools" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "Student Projects", href: "/student-projects" },
    { label: "For Schools", href: "/for-schools" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/technoaibrains" },
  ],
}
