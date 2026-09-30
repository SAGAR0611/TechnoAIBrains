import type { Program } from "@/types"

export const programs: Program[] = [
  {
    id: "in-school",
    name: "The In-School Program",
    audience: "Grades 3–9, taught inside your school",
    tagline: "What schools buy: a working AI and tech curriculum, delivered on a single screen.",
    summary:
      "We bring the full curriculum, the teaching method, and the mentors into your school. Your students don't need a computer lab — one screen per classroom and our single-screen teaching method is enough to take a class of 40 from first login to a shipped website or tool in a single term.",
    format: "In-classroom, term-based, one weekly session per grade",
    location: "Delivered at your school campus",
    duration: "One academic term (extendable year-round)",
    whatsIncluded: [
      "A grade-appropriate AI and technology curriculum, mapped to grades 3 through 9",
      "TechnoAIBrains mentors who run every session — your teachers don't need to already know how to code",
      "The single-screen method, so no computer lab or per-student device is required",
      "A shipped project per class: a real website or working tool, not a worksheet",
      "Progress reporting for school leadership at the end of each term",
    ],
    outcomes: [
      "Every student builds and ships at least one real project",
      "Your school gains in-house digital tools built and maintained by your own students",
      "Students in grade 9 leave with a portfolio, not just a certificate",
    ],
    howItRuns: [
      {
        title: "Term kickoff",
        description:
          "We run a short onboarding with school leadership and teachers, confirm the single screen and timetable slot, and place students into grade-appropriate tracks.",
      },
      {
        title: "Weekly sessions",
        description:
          "Each grade gets one weekly session led by a TechnoAIBrains mentor, building toward a real, working project rather than isolated lessons.",
      },
      {
        title: "Showcase and handover",
        description:
          "Students present what they built. Any tools meant for school use — like a notice board or gate pass system — are handed over and supported in production.",
      },
    ],
    ctaLabel: "Bring this to your school",
    ctaHref: "/for-schools",
  },
  {
    id: "offline-studio",
    name: "The Offline Studio",
    audience: "Students in Kolar and Bangalore, outside school hours",
    tagline: "A physical studio where students build outside the classroom.",
    summary:
      "For students who want more time than a weekly school session allows, our offline studio in Kolar and Bangalore runs focused, hands-on sessions after school and on weekends. Same single-screen method, smaller groups, faster pace.",
    format: "In-person studio sessions, small batches",
    location: "Kolar and Bangalore",
    duration: "Rolling batches, 8–12 weeks",
    whatsIncluded: [
      "Small-batch, in-person sessions with a TechnoAIBrains mentor",
      "A faster-moving curriculum than the in-school pace, for students who want to go further",
      "Direct access to mentors for one-on-one troubleshooting while building",
      "A finished, demo-ready project by the end of the batch",
    ],
    outcomes: [
      "Students move beyond what a single weekly school session covers",
      "A polished project suitable for a portfolio or a school showcase",
      "A peer group of other students building at the same pace",
    ],
    howItRuns: [
      {
        title: "Batch enrolment",
        description:
          "Students join a small batch based on age and prior experience — no prior coding background required.",
      },
      {
        title: "Studio sessions",
        description:
          "Hands-on sessions at the studio, building a real project step by step with a mentor in the room.",
      },
      {
        title: "Demo day",
        description: "Each batch ends with students demoing their finished project to peers and family.",
      },
    ],
    ctaLabel: "Ask about the next batch",
    ctaHref: "/contact",
  },
  {
    id: "builder-track",
    name: "The Builder Track",
    audience: "Older students ready to build their own products",
    tagline: "For students who want to build something that's theirs, not an assignment.",
    summary:
      "The Builder Track is for students who've outgrown guided exercises and want to build a real product of their own — an app, an AI agent, a tool for their community. We give them the technical mentorship and enough structure to actually finish and ship.",
    format: "Project-based mentorship, self-directed with weekly check-ins",
    location: "Bangalore studio, with remote check-ins",
    duration: "12–16 weeks per product cycle",
    whatsIncluded: [
      "One-on-one mentorship from engineers with real industry experience",
      "Help scoping an idea down to something that can actually ship in the timeframe",
      "Access to current AI tooling and agent frameworks, not just classroom basics",
      "A finished, working product the student owns at the end",
    ],
    outcomes: [
      "A real, working product built end-to-end by the student",
      "Direct experience with the same tools and workflows used in industry",
      "A strong, specific portfolio piece for college applications or early career work",
    ],
    howItRuns: [
      {
        title: "Idea scoping",
        description: "We work with the student to turn a rough idea into a scoped, buildable product.",
      },
      {
        title: "Build sprints",
        description: "Weekly check-ins with a mentor keep the student unblocked and moving toward a shippable version.",
      },
      {
        title: "Launch",
        description: "The student ships their product and presents it — ready for a portfolio, an application, or real users.",
      },
    ],
    ctaLabel: "Apply for the Builder Track",
    ctaHref: "/contact",
  },
]
