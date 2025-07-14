"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Navigation } from "lucide-react"
import { Heading2, Heading3, BodyText } from "../atoms/typography"

export function MapsSection() {
  const [endereco, setEndereco] = useState("")
  const [mostrarMapa, setMostrarMapa] = useState(false)

  const handleBuscarEndereco = () => {
    if (endereco.trim()) {
      setMostrarMapa(true)
    }
  }

  const enderecoEncoded = encodeURIComponent(endereco)
  const mapaSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BcqbqKrRJvM&q=${enderecoEncoded}&zoom=18&maptype=satellite`

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading2 className="text-gray-900 mb-4">Veja sua propriedade do alto</Heading2>
            <BodyText className="text-lg">
              Digite seu endereço para visualizar o potencial solar da sua propriedade
            </BodyText>
          </div>

          <Card className="p-8 mb-8">
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Digite seu endereço completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: Rua das Flores, 123, São Paulo - SP"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="text-lg"
                    onKeyPress={(e) => e.key === "Enter" && handleBuscarEndereco()}
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={handleBuscarEndereco}
                    className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue font-semibold px-6"
                    disabled={!endereco.trim()}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                </div>
              </div>

              {mostrarMapa && (
                <div className="space-y-4">
                  <div className="bg-luminar-blue/5 p-4 rounded-lg">
                    <Heading3 className="text-luminar-blue mb-2">Análise do seu telhado</Heading3>
                    <BodyText>
                      Nossa equipe técnica analisará a orientação, inclinação e área disponível do seu telhado para
                      dimensionar o sistema solar ideal para sua propriedade.
                    </BodyText>
                  </div>

                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={mapaSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa de ${endereco}`}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-luminar-blue">95%</div>
                      <BodyText className="text-sm">Economia média</BodyText>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-luminar-blue">25 anos</div>
                      <BodyText className="text-sm">Vida útil do sistema</BodyText>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-luminar-blue">30 dias</div>
                      <BodyText className="text-sm">Prazo de instalação</BodyText>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center">
            <BodyText className="text-sm text-gray-500">
              * A análise detalhada será feita por nossa equipe técnica durante a visita gratuita
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  )
}
