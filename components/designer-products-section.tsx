"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

interface DesignerProductsSectionProps {
  designerId: string
  designerName: string
  designerImage: string
  designerBio: string
}

export function DesignerProductsSection({
  designerId,
  designerName,
  designerImage,
  designerBio,
}: DesignerProductsSectionProps) {
  // In a real app, you would fetch these products from your API or database
  const designerProducts = [
    {
      id: "d1p1",
      name: "Ethereal Nights Gown",
      price: 1200,
      image: "/elegant-evening-gown.png",
      category: "Evening Wear",
    },
    {
      id: "d1p2",
      name: "Sustainable Glamour Dress",
      price: 950,
      image: "/placeholder.svg?height=400&width=400&query=sustainable cocktail dress",
      category: "Evening Wear",
    },
    {
      id: "d1p3",
      name: "Futuristic Formal Jumpsuit",
      price: 880,
      image: "/placeholder.svg?height=400&width=400&query=futuristic formal jumpsuit",
      category: "Evening Wear",
    },
  ]

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
              <Image src={designerImage || "/placeholder.svg"} alt={designerName} fill className="object-cover" />
            </div>
            <h3 className="mb-2 text-xl font-bold">{designerName}</h3>
            <p className="mb-4 text-sm text-gray-600">{designerBio}</p>
            <Link href={`/designers/${designerId}`}>
              <Button variant="outline" className="flex items-center gap-2">
                View Designer Profile <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {designerProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                designer={designerName}
                designerId={designerId}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
