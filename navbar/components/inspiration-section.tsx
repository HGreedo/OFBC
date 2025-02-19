import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function InspirationSection() {
  const inspirations = [
    {
      title: "Pantone Color of the Year 2023",
      content: "Viva Magenta 18-1750",
      image: "https://www.pantone.com/media/wysiwyg/COY-2023-Swatch_18-1750_Viva-Magenta.jpg",
    },
    {
      title: "Popular Textiles",
      content: "Sustainable fabrics like organic cotton, recycled polyester, and Tencel",
      image: "/placeholder.svg?text=Sustainable+Fabrics",
    },
    {
      title: "Trending Silhouettes",
      content: "Oversized blazers, wide-leg pants, and cut-out dresses",
      image: "/placeholder.svg?text=Trending+Silhouettes",
    },
    {
      title: "Art Movement Inspiration",
      content: "Neo-expressionism and digital art",
      image: "/placeholder.svg?text=Art+Movements",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {inspirations.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-24 h-24 relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p>{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

