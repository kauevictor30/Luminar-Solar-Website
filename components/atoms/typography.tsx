import type React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

/**
 * Componente para títulos principais (H1)
 */
export function Heading1({ children, className = "" }: TypographyProps) {
  return <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${className}`}>{children}</h1>
}

/**
 * Componente para títulos secundários (H2)
 */
export function Heading2({ children, className = "" }: TypographyProps) {
  return <h2 className={`text-3xl font-bold ${className}`}>{children}</h2>
}

/**
 * Componente para títulos terciários (H3)
 */
export function Heading3({ children, className = "" }: TypographyProps) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
}

/**
 * Componente para subtítulos
 */
export function Subtitle({ children, className = "" }: TypographyProps) {
  return <p className={`text-xl ${className}`}>{children}</p>
}

/**
 * Componente para texto padrão
 */
export function BodyText({ children, className = "" }: TypographyProps) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}
