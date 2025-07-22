import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { SocialIcon } from "../molecules/social-icon"
import { Heading3, BodyText } from "../atoms/typography"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-luminar-blue text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Seção Logo */}
          <div className="space-y-4 text-center sm:text-left">
            <Image
              src="/logo-luminar.png"
              alt="Luminar Solar - Arquitetura & Engenharia"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto brightness-0 invert mx-auto sm:mx-0"
            />
            <BodyText className="text-gray-400">Especialistas em energia solar fotovoltaica</BodyText>
            <BodyText className="text-gray-400 text-sm">CNPJ: {siteConfig.company.cnpj}</BodyText>
          </div>

          {/* Seção Contato */}
          <div className="space-y-4 text-center sm:text-left">
            <Heading3 className="text-white">Contato</Heading3>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span className="text-center sm:text-left">{siteConfig.company.address}</span>
              </div>
            </div>
          </div>

          {/* Seção Links */}
          <div className="space-y-4 text-center sm:text-left">
            {/* <Heading3 className="text-white">Links</Heading3> */}
            <div className="space-y-2">
              {/* <Link 
                href="/sobre" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sobre Nós
              </Link>
              <Link 
                href="/politica-de-privacidade" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/termos-de-uso" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link> */}
            </div>
          </div>

          {/* Seção Redes Sociais */}
          <div className="space-y-4 text-center sm:text-left">
            <Heading3 className="text-white">Redes Sociais</Heading3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <SocialIcon icon={<Facebook />} href={siteConfig.social.facebookUrl} label="Facebook Luminar Solar" />
              <SocialIcon icon={<Instagram />} href={siteConfig.social.instagramUrl} label="Instagram Luminar Solar" />
              <SocialIcon icon={<Linkedin />} href={siteConfig.social.linkedinUrl} label="LinkedIn Luminar Solar" />
            </div>
            <BodyText className="text-gray-400 text-sm">
              Instagram:{" "}
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {siteConfig.social.instagram}
              </a>
            </BodyText>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <BodyText className="text-sm">
            &copy; {new Date().getFullYear()} Luminar Solar. Todos os direitos reservados.
          </BodyText>
        </div>
      </div>
    </footer>
  )
}