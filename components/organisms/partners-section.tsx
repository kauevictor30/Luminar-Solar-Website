"use client"

import { useState, useEffect } from "react"
import { Heading2 } from "../atoms/typography"
import Image from "next/image"

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    { name: "Banco do Brasil", logo: "/bb.svg", lightLogo: false },
    { name: "Banco do nordeste", logo: "/bnb.svg", lightLogo: false },
    { name: "BV", logo: "/bv.svg", lightLogo: false },
    { name: "Solfácil", logo: "/solfacil.svg", lightLogo: true }, // precisa de fundo
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

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow 
                ${partner.lightLogo ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-700"}`}
            >
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={160}
                height={80}
                className="max-w-full h-auto opacity-100"
              />
            </div>
          ))}
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
                        className={`flex items-center justify-center p-4 rounded-lg shadow-sm
                          ${partner.lightLogo ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-700"}`}
                      >
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          width={120}
                          height={60}
                          className="max-w-full h-auto opacity-100"
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
