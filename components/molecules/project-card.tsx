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
 * Card para exibir projetos realizados com imagem ou vídeo
 */
export function ProjectCard({ type, location, imageUrl }: ProjectCardProps) {
  const isVideo = imageUrl?.endsWith(".mp4")

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {isVideo ? (
        <video
          src={imageUrl}
          className="w-full h-48 object-cover"
          controls
          muted
          loop
        />
      ) : (
        <Image
          src={imageUrl || `/placeholder.svg?height=200&width=300`}
          alt={`Projeto ${type} - ${location}`}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {type}
        </Badge>
        <BodyText className="text-sm">{location}</BodyText>
      </CardContent>
    </Card>
  )
}
