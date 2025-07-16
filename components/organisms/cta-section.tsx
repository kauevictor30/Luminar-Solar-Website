import { Button } from "@/components/ui/button"
import { Heading2, Subtitle } from "../atoms/typography"
import { siteConfig } from "@/config/site"

/**
 * Seção de chamada para ação
 */
export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-luminar-yellow to-yellow-600 text-luminar-blue dark:bg-gradient-to-r dark:from-luminar-blue dark:to-blue-800 dark:text-luminar-yellow transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <Heading2 className="mb-6">Solicite seu orçamento agora mesmo</Heading2>
        <Subtitle className="mb-8 opacity-90 dark:opacity-80">Não perca mais tempo pagando caro na conta de luz</Subtitle>
        <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-luminar-blue text-white hover:bg-blue-900 dark:bg-luminar-yellow dark:text-gray-900 dark:hover:bg-yellow-500 px-8 py-4 text-lg font-semibold transition-colors"
          >
            Fale com um especialista
          </Button>
        </a>
      </div>
    </section>
  )
}