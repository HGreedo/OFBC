import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Scissors, Palette, HandMetal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata = {
  title: "Artisanal Collection | Fashion Buyers Club",
  description:
    "Explore our curated collection of artisanal fashion pieces featuring handcrafted details, traditional techniques, and unique designs.",
}

export default function ArtisanalCollectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/artisanal-fashion.png"
            alt="Artisanal Fashion Collection"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/marketplace/collections"
              className="mb-6 inline-flex items-center text-sm font-medium text-amber-100 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Artisanal Collection</h1>
            <p className="mb-8 text-lg text-amber-100 md:text-xl">
              Celebrating craftsmanship and tradition. Discover our curated selection of artisanal pieces featuring
              handcrafted details, traditional techniques, and the unique touch of skilled artisans.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-amber-700 hover:bg-amber-600 px-3 py-1 text-sm">Handcrafted</Badge>
              <Badge className="bg-amber-700 hover:bg-amber-600 px-3 py-1 text-sm">Traditional Techniques</Badge>
              <Badge className="bg-amber-700 hover:bg-amber-600 px-3 py-1 text-sm">Natural Materials</Badge>
              <Badge className="bg-amber-700 hover:bg-amber-600 px-3 py-1 text-sm">Cultural Heritage</Badge>
              <Badge className="bg-amber-700 hover:bg-amber-600 px-3 py-1 text-sm">Limited Edition</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Artisanal Craftsmanship Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Artisanal Craftsmanship</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-4">
                <HandMetal className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Handcrafted Excellence</h3>
              <p className="text-gray-600">
                Each piece in our artisanal collection is meticulously handcrafted by skilled artisans, ensuring
                exceptional quality and unique character that mass-produced items cannot match.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-4">
                <Scissors className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Traditional Techniques</h3>
              <p className="text-gray-600">
                Our artisanal designers preserve and celebrate traditional crafting techniques passed down through
                generations, from hand-weaving and embroidery to natural dyeing processes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-amber-100 p-4">
                <Palette className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cultural Heritage</h3>
              <p className="text-gray-600">
                Many pieces draw inspiration from rich cultural traditions around the world, honoring heritage while
                creating contemporary designs that tell a story of craftsmanship and history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Featured Artisanal Pieces</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="a1"
              name="Hand-Embroidered Jacket"
              price={380}
              image="/hand-embroidered-jacket.png"
              designer="Artisan Collective"
              designerId="artisan1"
              category="Outerwear"
              isNew={true}
            />
            <ProductCard
              id="a2"
              name="Hand-Woven Textile Bag"
              price={150}
              image="/hand-woven-bag.png"
              designer="Heritage Hands"
              designerId="heritage1"
              category="Accessories"
              isFeatured={true}
            />
            <ProductCard
              id="a3"
              name="Natural Dyed Silk Scarf"
              price={120}
              image="/natural-dyed-silk-scarf.png"
              designer="Craft Revival"
              designerId="craft1"
              category="Accessories"
              isNew={true}
            />
            <ProductCard
              id="a4"
              name="Hand-Tooled Leather Belt"
              price={95}
              image="/hand-tooled-leather-belt.png"
              designer="Artisan Collective"
              designerId="artisan1"
              category="Accessories"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* All Artisanal Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Artisanal Products</h2>
            <div className="mt-4 sm:mt-0">
              <select className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="technique">Technique</option>
              </select>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Embroidery
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Hand-Woven
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Natural Dyes
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Leather Work
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Beadwork
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="a5"
              name="Block Print Cotton Dress"
              price={220}
              image="/block-print-cotton-dress.png"
              designer="Heritage Hands"
              designerId="heritage1"
              category="Dresses"
            />
            <ProductCard
              id="a6"
              name="Hand-Knit Wool Sweater"
              price={190}
              image="/hand-knit-wool-sweater.png"
              designer="Craft Revival"
              designerId="craft1"
              category="Knitwear"
            />
            <ProductCard
              id="a7"
              name="Batik Print Silk Shirt"
              price={160}
              image="/batik-print-silk-shirt.png"
              designer="Artisan Collective"
              designerId="artisan1"
              category="Tops"
            />
            <ProductCard
              id="a8"
              name="Handmade Ceramic Jewelry"
              price={85}
              image="/handmade-ceramic-jewelry.png"
              designer="Heritage Hands"
              designerId="heritage1"
              category="Accessories"
            />
            <ProductCard
              id="a9"
              name="Ikat Woven Jacket"
              price={290}
              image="/ikat-woven-jacket.png"
              designer="Craft Revival"
              designerId="craft1"
              category="Outerwear"
            />
            <ProductCard
              id="a10"
              name="Hand-Painted Denim"
              price={175}
              image="/hand-painted-denim.png"
              designer="Artisan Collective"
              designerId="artisan1"
              category="Bottoms"
            />
            <ProductCard
              id="a11"
              name="Macramé Wall Hanging"
              price={120}
              image="/macrame-wall-hanging.png"
              designer="Heritage Hands"
              designerId="heritage1"
              category="Home"
            />
            <ProductCard
              id="a12"
              name="Hand-Carved Wooden Buttons"
              price={40}
              image="/hand-carved-wooden-buttons.png"
              designer="Craft Revival"
              designerId="craft1"
              category="Accessories"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Artisanal Designers Spotlight */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Artisanal Designers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/designers/artisan1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Artisan Collective</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  A collaborative of skilled artisans from around the world, bringing together diverse traditional
                  techniques to create contemporary pieces with cultural significance.
                </p>
                <p className="mt-4 text-sm font-medium text-amber-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/heritage1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Heritage Hands</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Dedicated to preserving traditional textile arts, this studio works with artisan communities to create
                  handwoven, embroidered, and block-printed textiles.
                </p>
                <p className="mt-4 text-sm font-medium text-amber-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/craft1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Craft Revival</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Focused on revitalizing endangered craft techniques, this brand combines traditional methods with
                  contemporary design to create pieces that honor cultural heritage.
                </p>
                <p className="mt-4 text-sm font-medium text-amber-600">View Designer Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Artisanal Stories */}
      <section className="bg-amber-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">The Stories Behind Our Artisanal Pieces</h2>
            <p className="mt-4 text-lg text-gray-600">
              Each artisanal piece carries the story of its maker and the cultural traditions that inspired it. When you
              purchase from our artisanal collection, you're not just buying a product—you're supporting traditional
              craftsmanship and becoming part of its ongoing story.
            </p>
            <div className="mt-8">
              <Button>Explore Artisan Stories</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
