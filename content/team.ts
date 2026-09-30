import type { TeamMember } from "@/types"

export const team: TeamMember[] = [
  {
    id: "sagar-chakravarthy",
    name: "Sagar Chakravarthy",
    role: "Founder",
    bio: "Sagar has spent over 10 years in software development, including roles at Nokia and Concentrix, before founding TechnoAIBrains to close the technology gap between Tier-2 towns and big cities. He is an expert in Generative AI and AI agents, and works directly with schools to design the curriculum students actually learn from.",
    highlights: [
      "10+ years in software development, including Nokia and Concentrix",
      "Expert in Generative AI and AI agents",
      "Author of the book \"AI Architects\"",
    ],
    credential: {
      label: "Author",
      detail: "AI Architects",
    },
    photo: {
      placeholderLabel: "Photo: Sagar Chakravarthy, professional headshot — 1:1",
      alt: "Sagar Chakravarthy, Founder of TechnoAIBrains",
    },
  },
  {
    id: "praveen-gowda",
    name: "Praveen Gowda",
    role: "COO",
    bio: "Praveen brings over 10 years of software development experience, including a lead role at Mercedes-Benz, to running TechnoAIBrains's day-to-day operations — from partner schools to studio batches to the Builder Track.",
    highlights: [
      "10+ years in software development",
      "Previously a Lead at Mercedes-Benz",
      "Runs partnerships and operations across every TechnoAIBrains program",
    ],
    photo: {
      placeholderLabel: "Photo: Praveen Gowda, professional headshot — 1:1",
      alt: "Praveen Gowda, COO of TechnoAIBrains",
    },
  },
]
