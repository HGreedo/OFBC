"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingBag, Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  designer: string
  designerId: string
  category: string
  isNew?: boolean
  isFeatured?: boolean
}

export function ProductCard({
  id,
  name,
  price,
  image,
  designer,
  designerId,
  category,
  isNew,
  isFeatured,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md">
        <CardContent className="p-0">
          <div className="relative">
            <Link href={`/marketplace/product/${id}`}>
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="absolute right-3 top-3 z-10">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-colors",
                  isFavorite ? "text-red-500" : "text-gray-400 hover:text-gray-600",
                )}
              >
                <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>
            {(isNew || isFeatured) && (
              <div className="absolute left-3 top-3 z-10">
                <Badge variant={isNew ? "default" : "secondary"} className="px-2 py-1">
                  {isNew ? "New" : "Featured"}
                </Badge>
              </div>
            )}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 flex justify-center p-3 transition-all duration-200",
                isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              )}
            >
              <Button className="w-full gap-2">
                <ShoppingBag className="h-4 w-4" />
                Add to Bag
              </Button>
            </div>
          </div>
          <div className="p-4">
            <Link href={`/designers/${designerId}`} className="text-sm font-medium text-gray-500 hover:underline">
              {designer}
            </Link>
            <Link href={`/marketplace/product/${id}`}>
              <h3 className="mt-1 text-base font-medium text-gray-900 line-clamp-1">{name}</h3>
            </Link>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-lg font-semibold">{formattedPrice}</p>
              <span className="text-xs text-gray-500">{category}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
