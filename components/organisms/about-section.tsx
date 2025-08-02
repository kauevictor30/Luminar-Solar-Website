import { Heading2, BodyText } from "../atoms/typography"
import Image from "next/image"

/**
 * Seção sobre a empresa otimizada para mobile
 */
export function AboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 bg-luminar-background dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Heading2 className="mb-4 sm:mb-6 text-luminar-blue dark:text-white text-center lg:text-left">
              Sobre a Luminar Solar
            </Heading2>
            <BodyText className="text-base sm:text-lg leading-relaxed dark:text-gray-300 text-center lg:text-left">
              A Luminar Solar é especialista em soluções completas de energia solar fotovoltaica. Cuidamos de tudo:
              projeto, aprovação, instalação e suporte. Nossa equipe técnica qualificada garante a melhor solução para
              seu perfil de consumo.
            </BodyText>
          </div>
          <div className="relative order-1 lg:order-2">
          <Image
            src="/loja-luminar.png" // use %20 no lugar do espaço
            alt="Equipe Luminar Solar"
            width={300}
            height={150}
            className="rounded-lg w-auto h-auto"
          />
          </div>
        </div>
      </div>
    </section>
  )
}
