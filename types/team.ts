export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  highlights: string[]
  /** e.g. a published book — surfaced as a standalone credibility badge */
  credential?: {
    label: string
    detail: string
  }
  photo: {
    placeholderLabel: string
    alt: string
  }
}
