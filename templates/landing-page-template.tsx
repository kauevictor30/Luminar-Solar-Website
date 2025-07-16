import type React from "react"

interface LandingPageTemplateProps {
  header: React.ReactNode
  hero: React.ReactNode
  about: React.ReactNode
  benefits: React.ReactNode
  howItWorks: React.ReactNode
  simulator: React.ReactNode
  maps: React.ReactNode
  partners: React.ReactNode
  projects: React.ReactNode
  testimonials: React.ReactNode
  financing: React.ReactNode
  cta: React.ReactNode
  faq: React.ReactNode
  contact: React.ReactNode
  footer: React.ReactNode
}

/**
 * Template para a landing page que organiza todas as seções
 */
export function LandingPageTemplate({
  header,
  hero,
  about,
  benefits,
  howItWorks,
  simulator,
  maps,
  partners,
  projects,
  testimonials,
  financing,
  cta,
  faq,
  contact,
  footer,
}: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen bg-luminar-background dark:bg-gray-900 transition-colors">
      {header}
      {hero}
      {about}
      {benefits}
      {howItWorks}
      {simulator}
      {maps}
      {partners}
      {projects}
      {testimonials}
      {financing}
      {cta}
      {faq}
      {contact}
      {footer}
    </div>
  )
}
