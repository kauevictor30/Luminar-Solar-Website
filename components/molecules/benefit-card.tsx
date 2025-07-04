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

export function BenefitCard({ icon, title, description, variant = "success" }: BenefitCardProps) {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
      <CardContent className="space-y-4">
        <IconWrapper variant={variant}>{icon}</IconWrapper>
        <Heading3>{title}</Heading3>
        <BodyText>{description}</BodyText>
      </CardContent>
    </Card>
  )
}
