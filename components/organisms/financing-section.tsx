import { CreditCard, CheckCircle, Shield } from "lucide-react"
import { IconWrapper } from "../atoms/icon-wrapper"
import { Heading2, Heading3, BodyText } from "../atoms/typography"

export function FinancingSection() {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Parcelamento",
      description: "com bancos parceiros",
      variant: "primary" as const,
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Aprovação rápida",
      description: "em até 24 horas",
      variant: "success" as const,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sem entrada",
      description: "comece a pagar só depois",
      variant: "warning" as const,
    },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heading2 className="mb-6 text-gray-900">Financiamento facilitado</Heading2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <IconWrapper variant={feature.variant}>{feature.icon}</IconWrapper>
                <Heading3>{feature.title}</Heading3>
                <BodyText>{feature.description}</BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
