import { Heading2, BodyText } from "../atoms/typography"
import Image from "next/image"

/**
 * Seção sobre a empresa
 */
export function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-luminar-background dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading2 className="mb-6 text-gray-900 dark:text-white">Sobre a Luminar Solar</Heading2>
            <BodyText className="text-lg leading-relaxed dark:text-gray-300">
              A Luminar Solar é especialista em soluções completas de energia solar fotovoltaica. Cuidamos de tudo:
              projeto, aprovação, instalação e suporte. Nossa equipe técnica qualificada garante a melhor solução para
              seu perfil de consumo.
            </BodyText>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Equipe Luminar Solar"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
