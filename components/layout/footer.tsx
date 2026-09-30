import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/content/site"
import { BrandLogo } from "./brand-logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <BrandLogo size={44} />
          <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
          {siteConfig.footerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand">
              {siteConfig.contact.email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-brand">
              {siteConfig.contact.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
