import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Recycle, Droplets } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata = {
  title: "Sustainable Collection | Fashion Buyers Club",
  description:
    "Explore our curated collection of sustainable and eco-friendly fashion pieces from independent designers.",
}

export default function SustainableCollectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainable-fashion.png"
            alt="Sustainable Fashion Collection"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/marketplace/collections"
              className="mb-6 inline-flex items-center text-sm font-medium text-green-100 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Sustainable Collection</h1>
            <p className="mb-8 text-lg text-green-100 md:text-xl">
              Fashion that respects our planet. Explore our curated selection of sustainable pieces made with
              eco-friendly materials and ethical production methods.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-700 hover:bg-green-600 px-3 py-1 text-sm">Organic Materials</Badge>
              <Badge className="bg-green-700 hover:bg-green-600 px-3 py-1 text-sm">Recycled Fabrics</Badge>
              <Badge className="bg-green-700 hover:bg-green-600 px-3 py-1 text-sm">Low Impact Dyes</Badge>
              <Badge className="bg-green-700 hover:bg-green-600 px-3 py-1 text-sm">Fair Trade</Badge>
              <Badge className="bg-green-700 hover:bg-green-600 px-3 py-1 text-sm">Zero Waste</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Our Sustainable Practices</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Organic Materials</h3>
              <p className="text-gray-600">
                Our sustainable collection features garments made from organic cotton, hemp, and other materials grown
                without harmful pesticides or chemicals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Recycled Fabrics</h3>
              <p className="text-gray-600">
                Many pieces incorporate recycled materials, including polyester made from plastic bottles and
                regenerated nylon from fishing nets and carpet flooring.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Low Impact Production</h3>
              <p className="text-gray-600">
                Our designers use water-saving techniques, natural or low-impact dyes, and energy-efficient production
                methods to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Featured Sustainable Pieces</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="s1"
              name="Organic Linen Pants"
              price={120}
              image="/organic-linen-pants.png"
              designer="Eco Essentials"
              designerId="eco1"
              category="Bottoms"
              isNew={true}
            />
            <ProductCard
              id="s2"
              name="Upcycled Denim Jacket"
              price={180}
              image="/upcycled-denim-jacket.png"
              designer="ReWear Studio"
              designerId="rewear1"
              category="Outerwear"
              isFeatured={true}
            />
            <ProductCard
              id="s3"
              name="Biodegradable Sneakers"
              price={95}
              image="/biodegradable-sneakers.png"
              designer="GreenStep"
              designerId="greenstep1"
              category="Footwear"
              isNew={true}
            />
            <ProductCard
              id="s4"
              name="Recycled Ocean Plastic Bag"
              price={75}
              image="/recycled-ocean-plastic-bag.png"
              designer="Blue Revival"
              designerId="blue1"
              category="Accessories"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* All Sustainable Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Sustainable Products</h2>
            <div className="mt-4 sm:mt-0">
              <select className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="material">Material</option>
              </select>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Organic Cotton
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Hemp
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Recycled
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Upcycled
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Vegan
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="s5"
              name="Hemp Canvas Jacket"
              price={220}
              image="/hemp-canvas-jacket.png"
              designer="Pure Earth"
              designerId="pure1"
              category="Outerwear"
            />
            <ProductCard
              id="s6"
              name="Tencel Wrap Dress"
              price={150}
              image="/sustainable-tencel-wrap-dress.png"
              designer="Eco Essentials"
              designerId="eco1"
              category="Dresses"
            />
            <ProductCard
              id="s7"
              name="Recycled Wool Sweater"
              price={135}
              image="/recycled-wool-sweater.png"
              designer="ReWear Studio"
              designerId="rewear1"
              category="Knitwear"
            />
            <ProductCard
              id="s8"
              name="Organic Cotton T-Shirt"
              price={45}
              image="/organic-cotton-tshirt.png"
              designer="Basics Reborn"
              designerId="basics1"
              category="Tops"
            />
            <ProductCard
              id="s9"
              name="Cork Leather Wallet"
              price={65}
              image="/cork-leather-wallet.png"
              designer="Blue Revival"
              designerId="blue1"
              category="Accessories"
            />
            <ProductCard
              id="s10"
              name="Bamboo Lounge Set"
              price={120}
              image="/bamboo-lounge-set.png"
              designer="Eco Essentials"
              designerId="eco1"
              category="Loungewear"
            />
            <ProductCard
              id="s11"
              name="Pineapple Leather Bag"
              price={195}
              image="/pineapple-leather-handbag.png"
              designer="Fruitleather"
              designerId="fruit1"
              category="Accessories"
            />
            <ProductCard
              id="s12"
              name="Algae-Based Flip Flops"
              price={40}
              image="/placeholder.svg?key=4qx0t"
              designer="GreenStep"
              designerId="greenstep1"
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

      {/* Sustainable Designers Spotlight */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Sustainable Designers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/designers/eco1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Eco Essentials</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Creating timeless, versatile pieces from organic and natural materials. Their production focuses on
                  zero waste pattern cutting and water conservation.
                </p>
                <p className="mt-4 text-sm font-medium text-green-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/rewear1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">ReWear Studio</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Specializing in upcycled and repurposed garments, giving new life to vintage pieces and deadstock
                  fabrics with modern, innovative designs.
                </p>
                <p className="mt-4 text-sm font-medium text-green-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/greenstep1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">GreenStep</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Pioneering sustainable footwear using innovative materials like mushroom leather, recycled rubber, and
                  biodegradable components.
                </p>
                <p className="mt-4 text-sm font-medium text-green-600">View Designer Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="bg-green-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Sustainability Commitment</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fashion Buyers Club is committed to promoting sustainable and ethical fashion. We carefully vet all
              designers and products in our sustainable collection to ensure they meet our environmental and ethical
              standards.
            </p>
            <div className="mt-8">
              <Button>Learn More About Our Standards</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
