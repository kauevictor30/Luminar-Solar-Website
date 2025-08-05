"use client"

import Image from "next/image"
import { ThemeToggle } from "../molecules/theme-toggle"
import { NavigationMenu } from "../molecules/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Menu + Tema */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />
            <NavigationMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
