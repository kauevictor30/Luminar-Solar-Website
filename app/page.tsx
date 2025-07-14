"use client"
import { LandingPageTemplate } from "@/templates/landing-page-template"
import { Header } from "@/components/organisms/header"
import { HeroSection } from "@/components/organisms/hero-section"
import { BenefitsSection } from "@/components/organisms/benefits-section"
import { AboutSection } from "@/components/organisms/about-section"
import { HowItWorksSection } from "@/components/organisms/how-it-works-section"
import { EconomySimulator } from "@/components/organisms/economy-simulator"
import { ProjectsGallery } from "@/components/organisms/projects-gallery"
import { TestimonialsSection } from "@/components/organisms/testimonials-section"
import { FinancingSection } from "@/components/organisms/financing-section"
import { CTASection } from "@/components/organisms/cta-section"
import { ContactForm } from "@/components/organisms/contact-form"
import { Footer } from "@/components/organisms/footer"
import { MapsSection } from "@/components/organisms/maps-section"

// Add maps prop to the template
export default function HomePage() {
  return (
    <LandingPageTemplate
      header={<Header />}
      hero={<HeroSection />}
      benefits={<BenefitsSection />}
      about={<AboutSection />}
      howItWorks={<HowItWorksSection />}
      simulator={<EconomySimulator />}
      maps={<MapsSection />}
      projects={<ProjectsGallery />}
      testimonials={<TestimonialsSection />}
      financing={<FinancingSection />}
      cta={<CTASection />}
      contact={<ContactForm />}
      footer={<Footer />}
    />
  )
}
