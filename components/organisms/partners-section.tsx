// Seção de Parceiros - Versão com centralização no desktop
"use client"

import { useState, useEffect } from "react"
import { Heading2 } from "../atoms/typography"
import Image from "next/image"

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    { name: "Banco do Brasil", logo: "/bb.svg" },
    { name: "Banco do nordeste", logo: "/bnb.svg" },
    { name: "BV", logo: "/bv.svg" },
    { name: "Solfácil", logo: "/solfacil.svg" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 2))
    }, 3000)
    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <section id="parceiros" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <Heading2 className="text-center mb-12 text-gray-900 dark:text-white">Nossos Parceiros</Heading2>

        {/* Desktop Grid - CENTRALIZADO */}
        <div className="hidden md:flex justify-center">
          <div className="hidden md:flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow 
                    bg-luminar-blue dark:bg-gray-700 h-40 w-48"
                >
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={160}
                    height={80}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {partners.slice(slideIndex * 2, slideIndex * 2 + 2).map((partner, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow
                          bg-luminar-blue dark:bg-gray-700 h-32 border border-gray-200/30 dark:border-gray-600/30"
                      >
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          width={120}
                          height={60}
                          className="max-w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-luminar-blue" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}