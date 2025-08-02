import { TestimonialCard } from "../molecules/testimonial-card"
import { Heading2 } from "../atoms/typography"

/**
 * Seção de depoimentos de clientes
 */
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Kauê Victor",
      city: "Parnaiba - PI",
      comment: "Excelente atendimento! Minha conta de luz reduziu 90%. Recomendo a Luminar Solar!",
    },
    {
      name: "João Santos",
      city: "Luzilandia - PI",
      comment: "Instalação rápida e profissional. Estou muito satisfeito com o resultado.",
    },
    {
      name: "Ana Costa",
      city: "Luis Correia - PI",
      comment: "Melhor investimento que já fiz. Economia garantida todos os meses!",
    },
  ]

  return (
    <section className="py-16 bg-luminar-background dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Heading2 className="text-center mb-12 text-gray-900 dark:text-white">O que nossos clientes dizem</Heading2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
