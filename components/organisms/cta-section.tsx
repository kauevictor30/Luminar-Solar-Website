import { Button } from "@/components/ui/button"
import { Heading2, Subtitle } from "../atoms/typography"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <Heading2 className="mb-6">Solicite seu orçamento agora mesmo</Heading2>
        <Subtitle className="mb-8 opacity-90">Não perca mais tempo pagando caro na conta de luz</Subtitle>
        <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
          Quero instalar energia solar
        </Button>
      </div>
    </section>
  )
}
