export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  location: {
    city: string
    state: string
    country: string
    countryCode: string
  }
  contact: {
    email: string
    phone: string
  }
  nav: NavLink[]
  footerNav: NavLink[]
  socials: SocialLink[]
}
