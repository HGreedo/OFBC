import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Circle, Square, Triangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata = {
  title: "Minimalist Collection | Fashion Buyers Club",
  description:
    "Explore our curated collection of minimalist fashion pieces featuring clean lines, neutral colors, and timeless designs.",
}

export default function MinimalistCollectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/minimalist-fashion-collection.png"
            alt="Minimalist Fashion Collection"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/marketplace/collections"
              className="mb-6 inline-flex items-center text-sm font-medium text-gray-300 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Minimalist Collection</h1>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              Less is more. Discover our curated selection of minimalist designs featuring clean lines, neutral
              palettes, and timeless silhouettes that embody elegant simplicity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gray-700 hover:bg-gray-600 px-3 py-1 text-sm">Clean Lines</Badge>
              <Badge className="bg-gray-700 hover:bg-gray-600 px-3 py-1 text-sm">Neutral Palette</Badge>
              <Badge className="bg-gray-700 hover:bg-gray-600 px-3 py-1 text-sm">Timeless Design</Badge>
              <Badge className="bg-gray-700 hover:bg-gray-600 px-3 py-1 text-sm">Quality Materials</Badge>
              <Badge className="bg-gray-700 hover:bg-gray-600 px-3 py-1 text-sm">Functional</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Principles Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Minimalist Principles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Circle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Essential Forms</h3>
              <p className="text-gray-600">
                Our minimalist collection focuses on essential forms and silhouettes, removing unnecessary details to
                create pieces that are both timeless and contemporary.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Square className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Quality Materials</h3>
              <p className="text-gray-600">
                We emphasize quality over quantity, featuring pieces crafted from premium materials that are designed to
                last and improve with age.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Triangle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Neutral Palette</h3>
              <p className="text-gray-600">
                Our color palette focuses on neutrals and monochromatic schemes, creating versatile pieces that can be
                easily mixed, matched, and layered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Featured Minimalist Pieces</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="m1"
              name="Structured Wool Coat"
              price={350}
              image="/structured-wool-coat.png"
              designer="Pure Form"
              designerId="pure1"
              category="Outerwear"
              isNew={true}
            />
            <ProductCard
              id="m2"
              name="Essential Cotton Shirt"
              price={120}
              image="/essential-cotton-shirt.png"
              designer="Monochrome Studio"
              designerId="mono1"
              category="Tops"
              isFeatured={true}
            />
            <ProductCard
              id="m3"
              name="Tailored Linen Trousers"
              price={180}
              image="/tailored-linen-trousers.png"
              designer="Simplicity"
              designerId="simple1"
              category="Bottoms"
              isNew={true}
            />
            <ProductCard
              id="m4"
              name="Leather Tote Bag"
              price={220}
              image="/leather-tote-bag.png"
              designer="Pure Form"
              designerId="pure1"
              category="Accessories"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* All Minimalist Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Minimalist Products</h2>
            <div className="mt-4 sm:mt-0">
              <select className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Tops
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Bottoms
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Outerwear
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Dresses
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Accessories
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="m5"
              name="Cashmere Sweater"
              price={240}
              image="/cashmere-sweater.png"
              designer="Pure Form"
              designerId="pure1"
              category="Knitwear"
            />
            <ProductCard
              id="m6"
              name="Silk Slip Dress"
              price={195}
              image="/silk-slip-dress.png"
              designer="Monochrome Studio"
              designerId="mono1"
              category="Dresses"
            />
            <ProductCard
              id="m7"
              name="Leather Loafers"
              price={210}
              image="/leather-loafers.png"
              designer="Simplicity"
              designerId="simple1"
              category="Footwear"
            />
            <ProductCard
              id="m8"
              name="Cotton T-Shirt"
              price={65}
              image="/minimalist-cotton-tshirt.png"
              designer="Pure Form"
              designerId="pure1"
              category="Tops"
            />
            <ProductCard
              id="m9"
              name="Wool Blazer"
              price={280}
              image="/wool-blazer.png"
              designer="Monochrome Studio"
              designerId="mono1"
              category="Outerwear"
            />
            <ProductCard
              id="m10"
              name="Wide-Leg Pants"
              price={160}
              image="/wide-leg-pants.png"
              designer="Simplicity"
              designerId="simple1"
              category="Bottoms"
            />
            <ProductCard
              id="m11"
              name="Minimal Watch"
              price={180}
              image="/minimal-watch.png"
              designer="Pure Form"
              designerId="pure1"
              category="Accessories"
            />
            <ProductCard
              id="m12"
              name="Canvas Sneakers"
              price={90}
              image="/canvas-sneakers.png"
              designer="Monochrome Studio"
              designerId="mono1"
              category="Footwear"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Minimalist Designers Spotlight */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Minimalist Designers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/designers/pure1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Pure Form</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Dedicated to creating timeless essentials with a focus on quality materials and impeccable
                  craftsmanship. Each piece is designed to be a lasting addition to your wardrobe.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/mono1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Monochrome Studio</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Specializing in monochromatic designs with subtle textural elements. Their pieces focus on form,
                  proportion, and the interplay between light and shadow.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/simple1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Simplicity</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Creating functional, versatile pieces with clean lines and thoughtful details. Their designs emphasize
                  ease of wear and seamless integration into existing wardrobes.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-600">View Designer Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimalist Philosophy */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">The Minimalist Philosophy</h2>
            <p className="mt-4 text-lg text-gray-600">
              Minimalist fashion is about more than aesthetics—it's a philosophy that values quality over quantity,
              thoughtful consumption, and pieces that stand the test of time. Build a wardrobe of versatile essentials
              that work together seamlessly.
            </p>
            <div className="mt-8">
              <Button>Explore Minimalist Style Guide</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
