import { StepCard } from "../molecules/step-card"
import { Heading2 } from "../atoms/typography"

/**
 * Seção que explica como funciona o processo
 */
export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Análise e proposta",
      description: "Analisamos seu consumo e elaboramos uma proposta personalizada",
    },
    {
      number: "2",
      title: "Projeto técnico",
      description: "Desenvolvemos o projeto e cuidamos de toda documentação",
    },
    {
      number: "3",
      title: "Instalação",
      description: "Nossa equipe realiza a instalação com segurança e qualidade",
    },
    {
      number: "4",
      title: "Economia",
      description: "Você começa a economizar na conta de luz imediatamente",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Heading2 className="text-center mb-12 text-gray-900">Como funciona</Heading2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
