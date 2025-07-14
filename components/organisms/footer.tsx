import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { SocialIcon } from "../molecules/social-icon"
import { Heading3, BodyText } from "../atoms/typography"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo-luminar.png"
              alt="Luminar Solar - Arquitetura & Engenharia"
              width={250}
              height={60}
              className="h-10 w-auto brightness-0 invert"
            />
            <BodyText className="text-gray-400">Especialistas em energia solar fotovoltaica</BodyText>
          </div>

          <div className="space-y-4">
            <Heading3 className="text-white">Contato</Heading3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@luminarsolar.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Heading3 className="text-white">Links</Heading3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Heading3 className="text-white">Redes Sociais</Heading3>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Linkedin />} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <BodyText>&copy; 2024 Luminar Solar. Todos os direitos reservados.</BodyText>
        </div>
      </div>
    </footer>
  )
}
