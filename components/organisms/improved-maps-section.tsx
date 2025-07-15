"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"
import { Heading2, Heading3, BodyText } from "../atoms/typography"
import { siteConfig } from "@/config/site"
import Image from "next/image"

/**
 * Seção melhorada de localização com mapa e informações da empresa
 */
export function ImprovedMapsSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.company.address,
  )}`

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading2 className="text-gray-900 dark:text-white mb-4">Nossa Localização</Heading2>
            <BodyText className="text-lg dark:text-gray-300">
              Visite nosso escritório ou entre em contato para uma consulta gratuita
            </BodyText>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mapa */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Mapa+Luzilândia-PI"
                  alt="Localização Luminar Solar em Luzilândia-PI"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-luminar-blue/20 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                    <MapPin className="h-8 w-8 text-luminar-blue mx-auto mb-2" />
                    <BodyText className="text-center font-semibold dark:text-white">Luminar Solar</BodyText>
                  </div>
                </div>
              </div>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <Heading3 className="text-luminar-blue dark:text-luminar-yellow">Endereço</Heading3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-luminar-blue dark:text-luminar-yellow mt-1 flex-shrink-0" />
                      <div>
                        <BodyText className="font-medium dark:text-gray-300">{siteConfig.company.address}</BodyText>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-luminar-blue hover:bg-blue-800 text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver no Google Maps
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <Heading3 className="text-luminar-blue dark:text-luminar-yellow">Horário de Funcionamento</Heading3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Segunda - Sexta:</span>
                      <span className="font-medium dark:text-gray-300">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Sábado:</span>
                      <span className="font-medium dark:text-gray-300">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Domingo:</span>
                      <span className="font-medium dark:text-gray-300">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
