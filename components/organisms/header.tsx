"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { NavigationMenu } from "../molecules/navigation-menu"
import { ThemeToggle } from "../molecules/theme-toggle"

/**
 * Cabeçalho do site com logo, navegação e botões de ação
 */
export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-luminar.png"
              alt="Luminar Solar - Arquitetura & Engenharia"
              width={300}
              height={80}
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue font-semibold px-6">
                Orçamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
