import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, Heart, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"

// This is a mock function to simulate fetching product data
async function getProductData(id: string) {
  // In a real application, you would fetch this data from your API or database
  const products = [
    {
      id: "1",
      name: "Ethereal Evening Gown",
      price: 1200,
      images: [
        "/placeholder.svg?height=600&width=600&query=elegant evening gown front",
        "/placeholder.svg?height=600&width=600&query=elegant evening gown back",
        "/placeholder.svg?height=600&width=600&query=elegant evening gown detail",
      ],
      description:
        "This stunning evening gown from Emma Thompson's Ethereal Nights collection features flowing, ethereal lines made from recycled materials. The sustainable silk-alternative fabric drapes beautifully while the subtle shimmer catches the light as you move. Perfect for galas, award ceremonies, or any special occasion where you want to make a statement while remaining eco-conscious.",
      designer: "Emma Thompson",
      designerId: "1",
      category: "Evening Wear",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Midnight Blue", "Emerald", "Black"],
      materials: ["Recycled Polyester", "Organic Silk", "Biodegradable Sequins"],
      sustainabilityInfo:
        "This gown is made from 85% recycled materials and produced in a solar-powered facility. The biodegradable sequins will naturally decompose after 5-10 years, leaving no microplastic pollution.",
      careInstructions: "Dry clean only. Store hanging to maintain shape.",
      reviews: [
        {
          id: "r1",
          user: "Alexandra M.",
          rating: 5,
          comment:
            "Absolutely stunning gown that fits perfectly. I received so many compliments when I wore it to a charity gala. The sustainable aspect makes it even better!",
          date: "2023-04-15",
        },
        {
          id: "r2",
          user: "Victoria K.",
          rating: 4,
          comment:
            "Beautiful design and I love the eco-friendly materials. Took one star off because the delivery took longer than expected, but the gown itself is perfect.",
          date: "2023-03-22",
        },
      ],
      relatedProducts: ["2", "3", "4"],
    },
  ]

  return products.find((product) => product.id === id) || products[0]
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductData(params.id)

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/marketplace">
          <Button variant="ghost" className="mb-4 flex items-center gap-2 pl-0 text-gray-600 hover:text-black">
            <ArrowLeft className="h-4 w-4" />
            Back to Marketplace
          </Button>
        </Link>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Product Images */}
          <div className="lg:sticky lg:top-20">
            <div className="grid grid-cols-1 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 2}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <Link
                href={`/designers/${product.designerId}`}
                className="text-sm font-medium text-gray-500 hover:underline"
              >
                {product.designer}
              </Link>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="mt-2 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < 4.5 ? "currentColor" : "none"}
                      stroke={i < 4.5 ? "currentColor" : "currentColor"}
                      color={i < 4.5 ? "#FFC107" : "#E5E7EB"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">({product.reviews.length} reviews)</span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-gray-900">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(product.price)}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            {/* Product Options */}
            <div className="mb-8 space-y-6">
              {/* Size Selection */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-900">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-sm font-medium hover:border-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-900">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="flex h-10 items-center justify-center rounded-md border border-gray-300 px-4 text-sm font-medium hover:border-black"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="flex-1 gap-2" size="lg">
                <ShoppingBag className="h-5 w-5" />
                Add to Bag
              </Button>
              <Button variant="outline" size="lg" className="flex-1 gap-2">
                <Heart className="h-5 w-5" />
                Save
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Materials</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    {product.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Care Instructions</h3>
                  <p className="mt-2 text-sm text-gray-600">{product.careInstructions}</p>
                </div>
              </TabsContent>
              <TabsContent value="sustainability" className="mt-4">
                <p className="text-sm text-gray-600">{product.sustainabilityInfo}</p>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4 space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{review.user}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={i < review.rating ? "currentColor" : "none"}
                          stroke={i < review.rating ? "currentColor" : "currentColor"}
                          color={i < review.rating ? "#FFC107" : "#E5E7EB"}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Suspense fallback={<p>Loading related products...</p>}>
              <ProductCard
                id="2"
                name="Neo Tokyo Jacket"
                price={450}
                image="/cyberpunk-jacket.png"
                designer="Liam Chen"
                designerId="2"
                category="Streetwear"
              />
              <ProductCard
                id="3"
                name="Sunset Siren Swimsuit"
                price={180}
                image="/designer-swimsuit.png"
                designer="Sofia Rodriguez"
                designerId="3"
                category="Swimwear"
              />
              <ProductCard
                id="4"
                name="Heritage Line Suit"
                price={1800}
                image="/luxury-tailored-suit.png"
                designer="Malik Johnson"
                designerId="4"
                category="Menswear"
              />
              <ProductCard
                id="5"
                name="Indigo Dreams Kimono"
                price={580}
                image="/placeholder.svg?key=g62y6"
                designer="Yuki Tanaka"
                designerId="5"
                category="Contemporary"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
