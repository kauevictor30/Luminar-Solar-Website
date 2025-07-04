import { Heading3, BodyText } from "../atoms/typography"

interface StepCardProps {
  number: string
  title: string
  description: string
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <Heading3 className="mb-2">{title}</Heading3>
      <BodyText>{description}</BodyText>
    </div>
  )
}
