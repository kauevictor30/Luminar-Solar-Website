import { Button } from "@/components/ui/button"
import { Heading1, Subtitle } from "../atoms/typography"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-luminar-blue to-blue-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Heading1>Economize com energia solar</Heading1>
            <Subtitle className="text-blue-100">
              Projetos personalizados para residências, empresas e propriedades rurais.
            </Subtitle>
            <Button
              size="lg"
              className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue px-8 py-4 text-lg font-semibold"
            >
              Solicite uma proposta gratuita
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Casa moderna com painéis solares"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
