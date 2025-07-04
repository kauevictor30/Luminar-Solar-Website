import type React from "react"

interface IconWrapperProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "success" | "warning" | "info"
}

export function IconWrapper({ children, className = "", size = "md", variant = "primary" }: IconWrapperProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  const variantClasses = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-gray-100 text-gray-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    info: "bg-purple-100 text-purple-600",
  }

  return (
    <div
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full flex items-center justify-center mx-auto ${className}`}
    >
      {children}
    </div>
  )
}
