"use client"

import { useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactField } from "../molecules/contact-field"
import { Heading2 } from "../atoms/typography"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    mensagem: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    alert("Obrigado! Entraremos em contato em breve.")
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Heading2 className="text-center mb-8 text-gray-900">Entre em contato</Heading2>
          <Card className="p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <ContactField
                  label="Nome"
                  required
                  value={formData.nome}
                  onChange={(value) => updateFormData("nome", value)}
                />
                <ContactField
                  label="Telefone"
                  required
                  value={formData.telefone}
                  onChange={(value) => updateFormData("telefone", value)}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ContactField
                  label="E-mail"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(value) => updateFormData("email", value)}
                />
                <ContactField
                  label="Cidade"
                  required
                  value={formData.cidade}
                  onChange={(value) => updateFormData("cidade", value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => updateFormData("mensagem", e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue py-3 font-semibold"
              >
                Enviar
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
