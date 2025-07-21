"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

interface NavigationMenuProps {
  className?: string
}

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
      {/* Desktop */}
      <div className="hidden lg:flex space-x-6 xl:space-x-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleLinkClick(item.href)}
            className="text-gray-700 hover:text-luminar-blue transition-colors font-medium dark:text-gray-300 dark:hover:text-luminar-yellow text-sm xl:text-base"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Botão Mobile */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-300 p-2"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Lateral Mobile (lado direito) */}
      <div
        className={clsx(
          "fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="py-4 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.href)}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-md transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
