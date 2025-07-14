import { Button } from "@/components/ui/button"
import { Heading2, Subtitle } from "../atoms/typography"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-luminar-yellow to-yellow-600 text-luminar-blue">
      <div className="container mx-auto px-4 text-center">
        <Heading2 className="mb-6">Solicite seu orçamento agora mesmo</Heading2>
        <Subtitle className="mb-8 opacity-90">Não perca mais tempo pagando caro na conta de luz</Subtitle>
        <Button size="lg" className="bg-luminar-blue text-white hover:bg-blue-900 px-8 py-4 text-lg font-semibold">
          Quero instalar energia solar
        </Button>
      </div>
    </section>
  )
}
