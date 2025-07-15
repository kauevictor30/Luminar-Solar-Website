import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

/**
 * Seção hero otimizada para mobile
 */
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-12 sm:py-16 md:py-20 bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      <div className="absolute inset-0 bg-luminar-blue/70"></div>
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-full sm:max-w-2xl">
          <div className="space-y-4 sm:space-y-6 text-white text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Economize com energia solar
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Projetos personalizados para residências, empresas e propriedades rurais.
            </p>
            <div className="pt-2">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  Fale com um especialista
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
