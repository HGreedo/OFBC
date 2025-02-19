import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface FeaturedCardProps {
  name: string
  description: string
  image: string
  link: string
  tags?: string[]
  location?: string
}

export function FeaturedCard({ name, description, image, link, tags, location }: FeaturedCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Link href={link} className="block">
          <div className="aspect-video relative">
            <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              {location && <p className="text-sm text-gray-200 mb-2">{location}</p>}
              <p className="text-sm text-gray-200">{description}</p>
              {tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

