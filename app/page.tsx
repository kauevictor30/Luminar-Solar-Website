"use client"
import { ThemeProvider } from "@/hooks/use-theme"
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
import { ImprovedMapsSection } from "@/components/organisms/improved-maps-section"
import { PartnersSection } from "@/components/organisms/partners-section"
import { FAQSection } from "@/components/organisms/faq-section"

/**
 * Página principal do site Luminar Solar com tema claro/escuro
 */
export default function HomePage() {
  return (
    <ThemeProvider>
      <LandingPageTemplate
        header={<Header />}
        hero={<HeroSection />}
        benefits={<BenefitsSection />}
        about={<AboutSection />}
        howItWorks={<HowItWorksSection />}
        simulator={<EconomySimulator />}
        maps={<ImprovedMapsSection />}
        partners={<PartnersSection />}
        projects={<ProjectsGallery />}
        testimonials={<TestimonialsSection />}
        financing={<FinancingSection />}
        cta={<CTASection />}
        faq={<FAQSection />}
        contact={<ContactForm />}
        footer={<Footer />}
      />
    </ThemeProvider>
  )
}
