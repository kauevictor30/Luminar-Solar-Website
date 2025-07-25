import type React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

/**
 * Componentes de tipografia otimizados para mobile
 */
export function Heading1({ children, className = "" }: TypographyProps) {
  return (
    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${className}`}>{children}</h1>
  )
}

export function Heading2({ children, className = "" }: TypographyProps) {
  return <h2 className={`text-2xl sm:text-3xl md:text-3xl font-bold ${className}`}>{children}</h2>
}

export function Heading3({ children, className = "" }: TypographyProps) {
  return <h3 className={`text-lg sm:text-xl font-semibold ${className}`}>{children}</h3>
}

export function Subtitle({ children, className = "" }: TypographyProps) {
  return <p className={`text-lg sm:text-xl ${className}`}>{children}</p>
}

export function BodyText({ children, className = "" }: TypographyProps) {
  return <p className={`text-sm sm:text-base text-gray-600 ${className}`}>{children}</p>
}
