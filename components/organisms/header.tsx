import { Button } from "@/components/ui/button"
import { Sun, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold text-gray-900">Luminar Solar</span>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
          <Phone className="h-4 w-4 mr-2" />
          (11) 99999-9999
        </Button>
      </div>
    </header>
  )
}
