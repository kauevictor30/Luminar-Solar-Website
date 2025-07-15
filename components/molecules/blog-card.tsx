import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Heading3, BodyText } from "../atoms/typography"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  imageUrl?: string
  readTime: string
}

/**
 * Card para exibir posts do blog
 */
export function BlogCard({ title, excerpt, author, date, category, imageUrl, readTime }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-luminar-yellow text-luminar-blue font-semibold">
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <Heading3 className="group-hover:text-luminar-blue transition-colors line-clamp-2">{title}</Heading3>

          <BodyText className="line-clamp-3 dark:text-gray-300">{excerpt}</BodyText>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            </div>
            <span className="text-luminar-blue dark:text-luminar-yellow font-medium">{readTime}</span>
          </div>

          <div className="flex items-center text-luminar-blue dark:text-luminar-yellow font-medium group-hover:translate-x-2 transition-transform">
            <span className="mr-2">Ler mais</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
