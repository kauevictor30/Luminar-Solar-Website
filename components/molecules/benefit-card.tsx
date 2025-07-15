import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { IconWrapper } from "../atoms/icon-wrapper"
import { Heading3, BodyText } from "../atoms/typography"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: "primary" | "secondary" | "success" | "warning" | "info"
}

/**
 * Card de benefício otimizado para mobile
 */
export function BenefitCard({ icon, title, description, variant = "success" }: BenefitCardProps) {
  return (
    <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow h-full">
      <CardContent className="space-y-3 sm:space-y-4 flex flex-col items-center">
        <IconWrapper variant={variant} size="sm" className="sm:w-16 sm:h-16">
          {icon}
        </IconWrapper>
        <Heading3 className="text-center">{title}</Heading3>
        <BodyText className="text-center">{description}</BodyText>
      </CardContent>
    </Card>
  )
}
