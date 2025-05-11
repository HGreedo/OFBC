import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

export default function NewArrivalsPage() {
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
          <h1 className="text-3xl font-bold">New Arrivals</h1>
          <p className="mt-2 text-gray-600">The latest additions to our designer marketplace</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="rounded-full">
              All
            </Button>
            <Button variant="outline" className="rounded-full">
              Womenswear
            </Button>
            <Button variant="outline" className="rounded-full">
              Menswear
            </Button>
            <Button variant="outline" className="rounded-full">
              Accessories
            </Button>
            <Button variant="outline" className="rounded-full">
              Footwear
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Suspense fallback={<p>Loading products...</p>}>
            <ProductCard
              id="5"
              name="Indigo Dreams Kimono"
              price={580}
              image="/placeholder.svg?key=pz5ry"
              designer="Yuki Tanaka"
              designerId="5"
              category="Contemporary"
              isNew={true}
            />
            <ProductCard
              id="6"
              name="Lagos Lights Dress"
              price={420}
              image="/colorful-african-dress.png"
              designer="Aisha Okafor"
              designerId="6"
              category="Contemporary African"
              isNew={true}
            />
            <ProductCard
              id="7"
              name="Flores Eternas Blouse"
              price={350}
              image="/placeholder.svg?height=400&width=400&query=mexican embroidered blouse"
              designer="Gabriel Mendoza"
              designerId="7"
              category="Artisanal"
              isNew={true}
            />
            <ProductCard
              id="8"
              name="Deconstruction Jacket"
              price={890}
              image="/placeholder.svg?height=400&width=400&query=avant garde fashion jacket"
              designer="Olivia Kim"
              designerId="8"
              category="Avant-Garde"
              isNew={true}
            />
            <ProductCard
              id="9"
              name="Modern Majlis Kaftan"
              price={750}
              image="/placeholder.svg?height=400&width=400&query=modern modest kaftan"
              designer="Hassan Mahmoud"
              designerId="9"
              category="Modern Modest"
              isNew={true}
            />
            <ProductCard
              id="10"
              name="Second Life Jacket"
              price={480}
              image="/placeholder.svg?height=400&width=400&query=upcycled fashion jacket"
              designer="Isabella Vega"
              designerId="10"
              category="Circular Fashion"
              isNew={true}
            />
            <ProductCard
              id="11"
              name="Modern Maharani Dress"
              price={620}
              image="/placeholder.svg?height=400&width=400&query=contemporary indian dress"
              designer="Raj Patel"
              designerId="11"
              category="Contemporary Indian"
              isNew={true}
            />
            <ProductCard
              id="12"
              name="Urban Explorer Jacket"
              price={380}
              image="/placeholder.svg?height=400&width=400&query=sustainable outdoor jacket"
              designer="Zoe Taylor"
              designerId="12"
              category="Eco-Friendly"
              isNew={true}
            />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
