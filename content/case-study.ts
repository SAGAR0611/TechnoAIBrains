import type { CaseStudy } from "@/types"
import { flagshipStats } from "./stats"

export const amaraJyothiCaseStudy: CaseStudy = {
  id: "amara-jyothi",
  school: "Amara Jyothi School",
  location: "Mulbagal, Karnataka",
  partnerSince: "Our first partnership",
  summary:
    "Amara Jyothi School in Mulbagal was our first partner, and the proof that our method works outside a big city. 770 students across grades 3 to 9 learned to build for real — not with worksheets, but with a single screen per classroom and a curriculum that ends in a shipped project.",
  stats: flagshipStats,
  narrative: [
    {
      heading: "The problem we walked in to",
      body: "Like most schools outside a major city, Amara Jyothi didn't have a computer lab that could put a device in front of every student, and hiring specialist tech faculty for every grade wasn't realistic. Students were at real risk of falling years behind peers in cities with better infrastructure.",
    },
    {
      heading: "What we changed",
      body: "We introduced the single-screen method: one shared screen per classroom, a mentor-led curriculum, and a relentless focus on shipping something real instead of covering theory. Every grade, from 3 to 9, followed a track built for their level.",
    },
    {
      heading: "What students built",
      body: "Students didn't just learn concepts — they shipped. Over 40 individual websites were designed and built by students themselves. More significantly, 10+ tools students built are now in everyday live use at the school, not classroom exercises that got shelved.",
    },
    {
      heading: "How the school uses it today",
      body: "The Gate Pass Management and Tracking tool now runs the school's actual gate logs. The Live Notice Board is how announcements reach students and staff. And the school's own website — the one visitors and parents see first — was built by its own students.",
    },
  ],
  toolsBuilt: [
    {
      name: "Gate Pass Management and Tracking Tool",
      description: "Tracks student and visitor entry and exit at the school gate, replacing a paper register.",
      status: "live",
    },
    {
      name: "Live Notice Board",
      description: "A shared digital notice board that pushes announcements to screens around the school in real time.",
      status: "live",
    },
    {
      name: "The School's Own Website",
      description: "Amara Jyothi School's public website, designed and built end-to-end by its students.",
      status: "live",
    },
  ],
  websiteCount: "40+",
}
