import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { BodyText } from "../atoms/typography"

interface TestimonialCardProps {
  name: string
  city: string
  comment: string
  rating?: number
}

export function TestimonialCard({ name, city, comment, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <CardContent className="space-y-4">
        <div className="flex text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <BodyText className="italic">"{comment}"</BodyText>
        <div>
          <div className="font-semibold">{name}</div>
          <BodyText className="text-sm">{city}</BodyText>
        </div>
      </CardContent>
    </Card>
  )
}
