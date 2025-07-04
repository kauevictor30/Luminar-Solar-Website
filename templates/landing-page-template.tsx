import type React from "react"

interface LandingPageTemplateProps {
  header: React.ReactNode
  hero: React.ReactNode
  benefits: React.ReactNode
  about: React.ReactNode
  howItWorks: React.ReactNode
  simulator: React.ReactNode
  projects: React.ReactNode
  testimonials: React.ReactNode
  financing: React.ReactNode
  cta: React.ReactNode
  contact: React.ReactNode
  footer: React.ReactNode
}

export function LandingPageTemplate({
  header,
  hero,
  benefits,
  about,
  howItWorks,
  simulator,
  projects,
  testimonials,
  financing,
  cta,
  contact,
  footer,
}: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {header}
      {hero}
      {benefits}
      {about}
      {howItWorks}
      {simulator}
      {projects}
      {testimonials}
      {financing}
      {cta}
      {contact}
      {footer}
    </div>
  )
}
