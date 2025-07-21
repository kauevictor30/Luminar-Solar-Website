import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center text-center px-4 py-12 sm:py-20 md:py-24 bg-cover bg-center min-h-[80vh]"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Conteúdo centralizado com sombra no texto */}
      <div className="z-10 max-w-2xl w-full text-white">
        <h1
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{
            color: "#001D4A",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)"
          }}
        >
          Economize com energia solar
        </h1>
        <p
          className="mt-4 text-lg sm:text-xl"
          style={{
            color: "#001D4A",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)"
          }}
        >
          Projetos personalizados para residências, empresas e propriedades rurais.
        </p>
        <div className="mt-6">
          <a href="#form-section">
            <Button
              size="lg"
              className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              Fale com um especialista
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
