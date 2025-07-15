import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BodyText } from "../atoms/typography"
import Image from "next/image"

interface ProjectCardProps {
  type: string
  location: string
  imageUrl?: string
}

/**
 * Card para exibir projetos realizados com imagem e informações
 */
export function ProjectCard({ type, location, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={imageUrl || `/placeholder.svg?height=200&width=300`}
        alt={`Projeto ${type} - ${location}`}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {type}
        </Badge>
        <BodyText className="text-sm">{location}</BodyText>
      </CardContent>
    </Card>
  )
}
