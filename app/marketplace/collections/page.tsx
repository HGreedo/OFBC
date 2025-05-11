import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CollectionsPage() {
  const collections = [
    {
      id: "sustainable",
      name: "Sustainable Collection",
      description: "Eco-friendly designs for a better future",
      image: "/placeholder.svg?height=600&width=800&query=sustainable fashion collection",
      designerCount: 8,
      productCount: 32,
    },
    {
      id: "evening-wear",
      name: "Evening Wear",
      description: "Elegant designs for special occasions",
      image: "/placeholder.svg?height=600&width=800&query=luxury evening wear collection",
      designerCount: 5,
      productCount: 24,
    },
    {
      id: "streetwear",
      name: "Streetwear",
      description: "Urban styles with attitude",
      image: "/placeholder.svg?height=600&width=800&query=urban streetwear collection",
      designerCount: 6,
      productCount: 28,
    },
    {
      id: "resort",
      name: "Resort Collection",
      description: "Vacation-ready styles for sun and sea",
      image: "/placeholder.svg?height=600&width=800&query=resort wear collection",
      designerCount: 4,
      productCount: 20,
    },
    {
      id: "minimalist",
      name: "Minimalist",
      description: "Clean lines and timeless silhouettes",
      image: "/placeholder.svg?height=600&width=800&query=minimalist fashion collection",
      designerCount: 7,
      productCount: 30,
    },
    {
      id: "artisanal",
      name: "Artisanal",
      description: "Handcrafted pieces celebrating traditional techniques",
      image: "/placeholder.svg?height=600&width=800&query=artisanal fashion collection",
      designerCount: 9,
      productCount: 36,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/marketplace">
            <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-gray-600 hover:text-black">
              <ArrowLeft className="h-4 w-4" />
              Back to Marketplace
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Shop by Collection</h1>
          <p className="mt-2 text-gray-600">Explore our curated collections from independent designers</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<p>Loading collections...</p>}>
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/marketplace/collections/${collection.id}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-3 aspect-h-2 w-full">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{collection.name}</h3>
                    <p className="mt-1 text-sm text-gray-200">{collection.description}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-xs text-gray-300">{collection.designerCount} Designers</span>
                      <span className="text-xs text-gray-300">{collection.productCount} Products</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  )
}
