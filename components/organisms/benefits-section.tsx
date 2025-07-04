import { Calculator, Zap, Clock, MapPin } from "lucide-react"
import { BenefitCard } from "../molecules/benefit-card"
import { Heading2 } from "../atoms/typography"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Economia de até 95%",
      description: "na conta de luz",
      variant: "success" as const,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energia limpa",
      description: "e renovável",
      variant: "primary" as const,
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instalação rápida",
      description: "e segura",
      variant: "warning" as const,
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Atendimento",
      description: "em todo o estado",
      variant: "info" as const,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Heading2 className="text-center mb-12 text-gray-900">Por que escolher energia solar?</Heading2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
