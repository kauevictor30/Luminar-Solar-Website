import { BlogCard } from "../molecules/blog-card"
import { Heading2, BodyText } from "../atoms/typography"
import { Button } from "@/components/ui/button"

/**
 * Seção do blog com posts sobre energia solar
 */
export function BlogSection() {
  const blogPosts = [
    {
      title: "5 Benefícios da Energia Solar que Você Precisa Conhecer",
      excerpt:
        "Descubra como a energia solar pode transformar sua conta de luz e contribuir para um futuro mais sustentável. Conheça as principais vantagens desta tecnologia revolucionária.",
      author: "Reginaldo Oliveira",
      date: "15 Jan 2024",
      category: "Benefícios",
      readTime: "5 min",
      imageUrl: "/placeholder.svg?height=200&width=400&text=Painéis+Solares+Residenciais",
    },
    {
      title: "Como Funciona a Energia Solar Fotovoltaica?",
      excerpt:
        "Entenda o processo completo de conversão da luz solar em energia elétrica. Um guia completo sobre a tecnologia por trás dos painéis solares.",
      author: "Reginaldo Oliveira",
      date: "12 Jan 2024",
      category: "Tecnologia",
      readTime: "7 min",
      imageUrl: "/placeholder.svg?height=200&width=400&text=Tecnologia+Solar",
    },
    {
      title: "Manutenção de Painéis Solares: Guia Completo",
      excerpt:
        "Saiba como manter seus painéis solares funcionando com máxima eficiência. Dicas práticas para prolongar a vida útil do seu sistema solar.",
      author: "Reginaldo Oliveira",
      date: "08 Jan 2024",
      category: "Manutenção",
      readTime: "6 min",
      imageUrl: "/placeholder.svg?height=200&width=400&text=Manutenção+Solar",
    },
    {
      title: "Economia Real: Quanto Você Pode Economizar com Energia Solar?",
      excerpt:
        "Análise detalhada dos custos e benefícios da energia solar. Calcule seu retorno sobre investimento e descubra o potencial de economia.",
      author: "Reginaldo Oliveira",
      date: "05 Jan 2024",
      category: "Economia",
      readTime: "8 min",
      imageUrl: "/placeholder.svg?height=200&width=400&text=Economia+Solar",
    },
    {
      title: "Energia Solar e Sustentabilidade: Impacto Ambiental Positivo",
      excerpt:
        "Conheça como a energia solar contribui para a redução da pegada de carbono e preservação do meio ambiente. O futuro sustentável começa agora.",
      author: "Reginaldo Oliveira",
      date: "02 Jan 2024",
      category: "Sustentabilidade",
      readTime: "5 min",
      imageUrl: "/placeholder.svg?height=200&width=400&text=Sustentabilidade",
    },
    {
      title: "Inovações em Energia Solar: O que Esperar em 2024",
      excerpt:
        "Descubra as últimas tendências e inovações tecnológicas no setor de energia solar. O futuro da energia renovável está chegando.",
      author: "Reginaldo Oliveira",
      date: "28 Dez 2023",
      category: "Inovação",
      readTime: "6 min",
      imageUrl: "/placeholder.svg?height=200&width=400&text=Inovação+Solar",
    },
  ]

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading2 className="text-gray-900 dark:text-white mb-4">Blog Luminar Solar</Heading2>
          <BodyText className="text-lg dark:text-gray-300 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades, dicas e insights sobre energia solar. Conteúdo especializado por
            nossos experts.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-luminar-blue text-luminar-blue hover:bg-luminar-blue hover:text-white dark:border-luminar-yellow dark:text-luminar-yellow dark:hover:bg-luminar-yellow dark:hover:text-luminar-blue bg-transparent"
          >
            Ver todos os posts
          </Button>
        </div>
      </div>
    </section>
  )
}
