import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface InspirationItem {
  title: string
  content: string
  image: string
  slug?: string
}

interface InspirationSectionProps {
  items?: InspirationItem[]
}

export function InspirationSection({ items }: InspirationSectionProps) {
  const inspirations = items || [
    {
      title: "Pantone Color of the Year 2023",
      content: "Viva Magenta 18-1750",
      image: "https://www.pantone.com/media/wysiwyg/COY-2023-Swatch_18-1750_Viva-Magenta.jpg",
      slug: "pantone-color-of-the-year-2023",
    },
    {
      title: "Popular Textiles",
      content: "Sustainable fabrics like organic cotton, recycled polyester, and Tencel",
      image: "/placeholder.svg?text=Sustainable+Fabrics",
      slug: "popular-textiles",
    },
    {
      title: "Trending Silhouettes",
      content: "Oversized blazers, wide-leg pants, and cut-out dresses",
      image: "/placeholder.svg?text=Trending+Silhouettes",
      slug: "trending-silhouettes",
    },
    {
      title: "Art Movement Inspiration",
      content: "Neo-expressionism and digital art",
      image: "/placeholder.svg?text=Art+Movements",
      slug: "art-movement-inspiration",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {inspirations.map((item, index) => (
        <Link
          key={index}
          href={`/resources/inspiration/${item.slug || `item-${index}`}`}
          className="transition-transform hover:scale-[1.02] block"
        >
          <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-24 h-24 relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
