"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heading2, Heading3 } from "../atoms/typography"

/**
 * Simulador de economia otimizado para mobile
 */
export function EconomySimulator() {
  const [contaLuz, setContaLuz] = useState("")

  const calcularEconomia = (valor: number) => {
    const economiaMensal = valor * 0.95
    const economiaAnual = economiaMensal * 12
    const retornoAnos = Math.ceil((valor * 100) / economiaAnual)
    return { economiaMensal, economiaAnual, retornoAnos }
  }

  const economia = contaLuz ? calcularEconomia(Number.parseFloat(contaLuz)) : null

  return (
    <section className="py-12 sm:py-16 bg-luminar-background dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Heading2 className="mb-6 text-gray-900 dark:text-white">Simule sua economia</Heading2>
          <Card className="p-4 sm:p-8">
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Valor da sua conta de luz (R$)</label>
                <Input
                  type="number"
                  placeholder="Ex: 350"
                  value={contaLuz}
                  onChange={(e) => setContaLuz(e.target.value)}
                  className="text-center text-base sm:text-lg"
                />
              </div>

              {economia && (
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg space-y-4">
                  <Heading3 className="text-green-800">Sua economia estimada:</Heading3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        R$ {economia.economiaMensal.toFixed(2)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">por mês</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        R$ {economia.economiaAnual.toFixed(2)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">por ano</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">{economia.retornoAnos} anos</div>
                      <div className="text-xs sm:text-sm text-gray-600">retorno do investimento</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
