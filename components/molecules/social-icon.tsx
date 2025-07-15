import type React from "react"

interface SocialIconProps {
  icon: React.ReactNode
  href: string
  label: string
  className?: string
}

/**
 * Componente para ícones de redes sociais com link
 */
export function SocialIcon({ icon, href, label, className = "" }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors ${className}`}
    >
      {icon}
    </a>
  )
}
