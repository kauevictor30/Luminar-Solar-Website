"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Heading2, Heading3, BodyText } from "../atoms/typography"

/**
 * Seção de perguntas frequentes (FAQ)
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quanto tempo dura a instalação de um sistema solar?",
      answer:
        "O tempo de instalação varia de acordo com o tamanho do sistema, mas geralmente leva de 1 a 3 dias para residências e até 1 semana para projetos comerciais maiores.",
    },
    {
      question: "Qual é a vida útil dos painéis solares?",
      answer:
        "Os painéis solares têm vida útil de 25 a 30 anos, com garantia de performance. Após esse período, ainda continuam gerando energia, porém com eficiência reduzida.",
    },
    {
      question: "É possível financiar o sistema solar?",
      answer:
        "Sim! Trabalhamos com diversos bancos parceiros e oferecemos opções de financiamento com aprovação rápida e sem entrada em muitos casos.",
    },
    {
      question: "O sistema funciona em dias nublados?",
      answer:
        "Sim, os painéis solares continuam gerando energia mesmo em dias nublados, porém com menor eficiência. O sistema é dimensionado considerando essas variações climáticas.",
    },
    {
      question: "Preciso fazer manutenção nos painéis?",
      answer:
        "A manutenção é mínima. Recomendamos limpeza semestral e inspeção anual. Oferecemos planos de manutenção preventiva para garantir máxima eficiência.",
    },
    {
      question: "Posso vender energia excedente?",
      answer:
        "Sim! Através do sistema de compensação de energia elétrica, você pode injetar energia excedente na rede e receber créditos na sua conta de luz.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-luminar-background dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Heading2 className="text-center mb-12 text-gray-900 dark:text-white">Perguntas Frequentes</Heading2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <Heading3 className="text-gray-900 dark:text-white pr-4">{faq.question}</Heading3>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-luminar-blue dark:text-luminar-yellow flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-luminar-blue dark:text-luminar-yellow flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <BodyText className="dark:text-gray-300">{faq.answer}</BodyText>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
