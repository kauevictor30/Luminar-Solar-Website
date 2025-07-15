import { Button } from "@/components/ui/button"
import { Heading1, Subtitle } from "../atoms/typography"
import { siteConfig } from "@/config/site"

/**
 * Seção hero com imagem de fundo, título e chamada para ação
 */
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      <div className="absolute inset-0 bg-luminar-blue/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-6 text-white">
            <Heading1>Economize com energia solar</Heading1>
            <Subtitle className="text-blue-100">
              Projetos personalizados para residências, empresas e propriedades rurais.
            </Subtitle>
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue px-8 py-4 text-lg font-semibold"
              >
                Fale com um especialista
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
