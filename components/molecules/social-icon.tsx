import type React from "react"

interface SocialIconProps {
  icon: React.ReactNode
  href?: string
  className?: string
}

export function SocialIcon({ icon, href = "#", className = "" }: SocialIconProps) {
  return (
    <a href={href} className={`h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors ${className}`}>
      {icon}
    </a>
  )
}
