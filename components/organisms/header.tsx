import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo-luminar.png"
            alt="Luminar Solar - Arquitetura & Engenharia"
            width={300}
            height={80}
            className="h-12 w-auto"
          />
        </div>
        <Button className="bg-luminar-yellow hover:bg-yellow-600 text-luminar-blue font-semibold">
          <Phone className="h-4 w-4 mr-2" />
          (11) 99999-9999
        </Button>
      </div>
    </header>
  )
}
