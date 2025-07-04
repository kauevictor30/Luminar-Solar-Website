import { TestimonialCard } from "../molecules/testimonial-card"
import { Heading2 } from "../atoms/typography"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo - SP",
      comment: "Excelente atendimento! Minha conta de luz reduziu 90%. Recomendo a Luminar Solar!",
    },
    {
      name: "João Santos",
      city: "Campinas - SP",
      comment: "Instalação rápida e profissional. Estou muito satisfeito com o resultado.",
    },
    {
      name: "Ana Costa",
      city: "Santos - SP",
      comment: "Melhor investimento que já fiz. Economia garantida todos os meses!",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Heading2 className="text-center mb-12 text-gray-900">O que nossos clientes dizem</Heading2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
