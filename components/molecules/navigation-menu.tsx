"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationMenuProps {
  className?: string
}

/**
 * Menu de navegação responsivo com links para seções da página
 */
export function NavigationMenu({ className = "" }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Galeria", href: "#galeria" },
    { label: "FAQ", href: "#faq" },
  ]

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={className}>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleLinkClick(item.href)}
            className="text-gray-700 hover:text-luminar-blue transition-colors font-medium dark:text-gray-300 dark:hover:text-luminar-yellow"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t md:hidden z-50">
          <div className="py-4 px-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.href)}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
