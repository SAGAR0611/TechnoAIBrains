import { Mail, MapPin, Phone } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/content/site"
import { PageHeader } from "@/components/sections/page-header"
import { Reveal } from "@/components/motion/reveal"
import { EnquiryForm } from "@/components/forms/enquiry-form"

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with TechnoAIBrains — questions about our programs, partnerships, or anything else.",
})

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about a program, a partnership, or anything else — we read every message."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <Reveal className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="font-heading text-lg font-semibold">Reach us directly</h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {siteConfig.location.city}, {siteConfig.location.state},{" "}
                    {siteConfig.location.country}
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="hover:text-brand"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Looking to bring TechnoAIBrains to your school specifically? Visit{" "}
                <a href="/for-schools" className="font-medium text-brand underline underline-offset-4">
                  For Schools
                </a>{" "}
                for partnership details.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <EnquiryForm type="general" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
