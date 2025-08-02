import { Calculator, Zap, Clock, MapPin } from "lucide-react"
import { BenefitCard } from "../molecules/benefit-card"
import { Heading2 } from "../atoms/typography"

/**
 * Seção de benefícios otimizada para mobile
 */
export function BenefitsSection() {
  const benefits = [
    {
      icon: <Calculator className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Economia de até 95%",
      description: "na conta de luz",
      variant: "success" as const,
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Energia limpa",
      description: "e renovável",
      variant: "primary" as const,
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Instalação rápida",
      description: "e segura",
      variant: "warning" as const,
    },
    {
      icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Atendimento",
      description: "em todo o estado",
      variant: "info" as const,
    },
  ]

  return (
    <section id="beneficios" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Heading2 className="text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
          Por que escolher energia solar?
        </Heading2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
