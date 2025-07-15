"use client"

import { useState, useEffect } from "react"
import { Heading2 } from "../atoms/typography"
import Image from "next/image"

/**
 * Seção de parceiros com carrossel de logotipos
 */
export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    { name: "Energia Plus", logo: "/placeholder.svg?height=80&width=160&text=Energia+Plus" },
    { name: "Solar Tech", logo: "/placeholder.svg?height=80&width=160&text=Solar+Tech" },
    { name: "Green Power", logo: "/placeholder.svg?height=80&width=160&text=Green+Power" },
    { name: "Eco Solutions", logo: "/placeholder.svg?height=80&width=160&text=Eco+Solutions" },
    { name: "Sun Energy", logo: "/placeholder.svg?height=80&width=160&text=Sun+Energy" },
    { name: "Clean Force", logo: "/placeholder.svg?height=80&width=160&text=Clean+Force" },
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 3))
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
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`Logo ${partner.name}`}
                width={160}
                height={80}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
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
                        className="flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                      >
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`Logo ${partner.name}`}
                          width={120}
                          height={60}
                          className="max-w-full h-auto opacity-70"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
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
