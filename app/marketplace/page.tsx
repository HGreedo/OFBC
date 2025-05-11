import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { DesignerProductsSection } from "@/components/designer-products-section"

export default function MarketplacePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fashion-marketplace.png"
            alt="Marketplace Banner"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Discover Unique Designer Pieces
            </h1>
            <p className="mb-8 text-lg text-gray-200 md:text-xl">
              Shop directly from independent designers and boutiques. Find one-of-a-kind pieces that tell a story.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Shop New Arrivals
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search products..." className="pl-10 pr-4" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
            <Link
              href="/marketplace/featured"
              className="flex items-center text-sm font-medium text-black hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Suspense fallback={<p>Loading products...</p>}>
              <ProductCard
                id="1"
                name="Ethereal Evening Gown"
                price={1200}
                image="/elegant-evening-gown.png"
                designer="Emma Thompson"
                designerId="1"
                category="Evening Wear"
                isNew={true}
              />
              <ProductCard
                id="2"
                name="Neo Tokyo Jacket"
                price={450}
                image="/cyberpunk-jacket.png"
                designer="Liam Chen"
                designerId="2"
                category="Streetwear"
                isFeatured={true}
              />
              <ProductCard
                id="3"
                name="Sunset Siren Swimsuit"
                price={180}
                image="/designer-swimsuit.png"
                designer="Sofia Rodriguez"
                designerId="3"
                category="Swimwear"
                isNew={true}
              />
              <ProductCard
                id="4"
                name="Heritage Line Suit"
                price={1800}
                image="/luxury-tailored-suit.png"
                designer="Malik Johnson"
                designerId="4"
                category="Menswear"
                isFeatured={true}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
            <Link
              href="/marketplace/new-arrivals"
              className="flex items-center text-sm font-medium text-black hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Suspense fallback={<p>Loading products...</p>}>
              <ProductCard
                id="5"
                name="Indigo Dreams Kimono"
                price={580}
                image="/placeholder.svg?key=o62zv"
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
                image="/placeholder.svg?key=bkljd"
                designer="Gabriel Mendoza"
                designerId="7"
                category="Artisanal"
                isNew={true}
              />
              <ProductCard
                id="8"
                name="Deconstruction Jacket"
                price={890}
                image="/placeholder.svg?key=hpn75"
                designer="Olivia Kim"
                designerId="8"
                category="Avant-Garde"
                isNew={true}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Designer Spotlight */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Designer Spotlight</h2>
          <Suspense fallback={<p>Loading designer products...</p>}>
            <DesignerProductsSection
              designerId="1"
              designerName="Emma Thompson"
              designerImage="/fashion-designer-portrait.png"
              designerBio="Emma Thompson is a visionary designer known for her innovative approach to evening wear with a focus on sustainability and avant-garde designs."
            />
          </Suspense>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
            <Link
              href="/marketplace/collections"
              className="flex items-center text-sm font-medium text-black hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/marketplace/collections/sustainable"
              className="group relative block h-full overflow-hidden rounded-lg"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/sustainable-fashion.png"
                  alt="Sustainable Collection"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Sustainable Collection</h3>
                  <p className="mt-1 text-sm text-gray-200">Eco-friendly designs for a better future</p>
                </div>
              </div>
            </Link>
            <Link
              href="/marketplace/collections/evening-wear"
              className="group relative block h-full overflow-hidden rounded-lg"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/luxury-evening-wear.png"
                  alt="Evening Wear Collection"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Evening Wear</h3>
                  <p className="mt-1 text-sm text-gray-200">Elegant designs for special occasions</p>
                </div>
              </div>
            </Link>
            <Link
              href="/marketplace/collections/streetwear"
              className="group relative block h-full overflow-hidden rounded-lg"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/urban-streetwear-collection.png"
                  alt="Streetwear Collection"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Streetwear</h3>
                  <p className="mt-1 text-sm text-gray-200">Urban styles with attitude</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Stay Updated on New Arrivals</h2>
            <p className="mt-4 text-lg text-gray-300">
              Subscribe to our newsletter to receive updates on new products, designer spotlights, and exclusive offers.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md bg-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
