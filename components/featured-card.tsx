"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full">
        <CardContent className="p-0 h-full">
          <Link href={link} className="block h-full">
            <div className="aspect-video relative h-full">
              <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white line-clamp-1">{name}</h3>
                {location && <p className="text-sm text-gray-200 mb-2 line-clamp-1">{location}</p>}
                <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
                {tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
