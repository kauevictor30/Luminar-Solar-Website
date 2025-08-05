"use client"

import { useState, useEffect } from "react"
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

  // Bloqueia o scroll quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <nav className={className}>
      {/* Menu desktop */}
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

      {/* Menu Lateral Mobile */}
      {isOpen && (
        <div
          className={clsx(
            "fixed top-0 right-0 w-64 h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-l border-white/20 dark:border-gray-700 shadow-lg z-50 transform transition-transform duration-300 lg:hidden"
          )}
        >
          <div className="py-6 px-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.href)}
                className="block w-full text-left py-3 px-4 text-gray-800 dark:text-gray-200 hover:text-luminar-blue dark:hover:text-luminar-yellow rounded-md transition-colors font-medium text-base"
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
