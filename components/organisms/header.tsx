"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { NavigationMenu } from "../molecules/navigation-menu"
import { ThemeToggle } from "../molecules/theme-toggle"

/**
 * Cabeçalho do site otimizado para mobile
 */
export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Otimizada para mobile */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo-luminar.png"
              alt="Luminar Solar"
              width={200}
              height={60}
              className="h-8 sm:h-10 md:h-12 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-none"
              priority
            />
          </div>

          {/* Navigation Menu - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />

            {/* Mobile Menu - Shown only on mobile/tablet */}
            <div className="lg:hidden">
              <NavigationMenu />
            </div>

            {/* CTA Button - Responsive sizing */}
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue font-semibold px-3 sm:px-4 md:px-6 text-sm sm:text-base">
                <span className="hidden sm:inline">Orçamento</span>
                <span className="sm:hidden">Orçar</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
