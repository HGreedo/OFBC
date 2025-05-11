import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Clock, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata = {
  title: "Evening Wear Collection | Fashion Buyers Club",
  description: "Explore our curated collection of elegant evening wear and formal attire from independent designers.",
}

export default function EveningWearCollectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-evening-wear.png"
            alt="Evening Wear Collection"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/marketplace/collections"
              className="mb-6 inline-flex items-center text-sm font-medium text-indigo-100 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Evening Wear Collection</h1>
            <p className="mb-8 text-lg text-indigo-100 md:text-xl">
              Elegance for special occasions. Discover our curated selection of sophisticated evening wear designed for
              galas, formal events, and memorable nights.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 text-sm">Luxury Fabrics</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 text-sm">Handcrafted Details</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 text-sm">Timeless Designs</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 text-sm">Formal Attire</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 text-sm">Special Occasions</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Evening Wear Styles Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Evening Wear Styles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-indigo-100 p-4">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Gala Attire</h3>
              <p className="text-gray-600">
                Sophisticated gowns and tuxedos designed for black-tie events, charity galas, and formal ceremonies.
                Featuring luxurious fabrics and exquisite detailing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-indigo-100 p-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cocktail Fashion</h3>
              <p className="text-gray-600">
                Elegant yet versatile pieces perfect for semi-formal evening events, cocktail parties, and upscale
                dinners. Balancing sophistication with contemporary style.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-indigo-100 p-4">
                <Calendar className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Formal Events</h3>
              <p className="text-gray-600">
                Refined attire for weddings, award ceremonies, and special occasions. Designed to make a statement while
                maintaining timeless elegance and sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Featured Evening Wear</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="e1"
              name="Sequin Gown"
              price={1800}
              image="/placeholder.svg?key=pzkn4"
              designer="Elegance Atelier"
              designerId="elegance1"
              category="Gowns"
              isNew={true}
            />
            <ProductCard
              id="e2"
              name="Velvet Tuxedo Set"
              price={1500}
              image="/luxury-velvet-tuxedo.png"
              designer="Noir Formal"
              designerId="noir1"
              category="Menswear"
              isFeatured={true}
            />
            <ProductCard
              id="e3"
              name="Silk Evening Dress"
              price={950}
              image="/placeholder.svg?key=nzleu"
              designer="Elegance Atelier"
              designerId="elegance1"
              category="Dresses"
              isNew={true}
            />
            <ProductCard
              id="e4"
              name="Crystal Clutch"
              price={450}
              image="/crystal-clutch-fashion.png"
              designer="Luxe Accessories"
              designerId="luxe1"
              category="Accessories"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* All Evening Wear Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Evening Wear</h2>
            <div className="mt-4 sm:mt-0">
              <select className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="occasion">Occasion</option>
              </select>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Gowns
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Tuxedos
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Cocktail Dresses
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Accessories
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Formal Shoes
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="e5"
              name="Beaded Cocktail Dress"
              price={780}
              image="/beaded-cocktail-dress-model.png"
              designer="Elegance Atelier"
              designerId="elegance1"
              category="Dresses"
            />
            <ProductCard
              id="e6"
              name="Satin Evening Gown"
              price={1200}
              image="/placeholder.svg?height=600&width=400&query=satin evening gown on model fashion photography"
              designer="Haute Couture"
              designerId="haute1"
              category="Gowns"
            />
            <ProductCard
              id="e7"
              name="Formal Bow Tie Set"
              price={120}
              image="/placeholder.svg?height=600&width=400&query=formal bow tie set fashion photography"
              designer="Noir Formal"
              designerId="noir1"
              category="Accessories"
            />
            <ProductCard
              id="e8"
              name="Embellished Heels"
              price={350}
              image="/placeholder.svg?height=600&width=400&query=embellished evening heels fashion photography"
              designer="Luxe Accessories"
              designerId="luxe1"
              category="Footwear"
            />
            <ProductCard
              id="e9"
              name="Silk Lapel Tuxedo"
              price={1600}
              image="/placeholder.svg?height=600&width=400&query=silk lapel tuxedo on model fashion photography"
              designer="Noir Formal"
              designerId="noir1"
              category="Menswear"
            />
            <ProductCard
              id="e10"
              name="Draped Chiffon Gown"
              price={950}
              image="/placeholder.svg?height=600&width=400&query=draped chiffon evening gown on model fashion photography"
              designer="Elegance Atelier"
              designerId="elegance1"
              category="Gowns"
            />
            <ProductCard
              id="e11"
              name="Pearl Evening Bag"
              price={280}
              image="/placeholder.svg?height=600&width=400&query=pearl embellished evening bag fashion photography"
              designer="Luxe Accessories"
              designerId="luxe1"
              category="Accessories"
            />
            <ProductCard
              id="e12"
              name="Velvet Smoking Jacket"
              price={890}
              image="/placeholder.svg?height=600&width=400&query=velvet smoking jacket on model fashion photography"
              designer="Noir Formal"
              designerId="noir1"
              category="Menswear"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Evening Wear Designers Spotlight */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Evening Wear Designers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/designers/elegance1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Elegance Atelier</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Known for their exquisite craftsmanship and attention to detail, Elegance Atelier creates timeless
                  evening wear with a focus on luxurious fabrics and flattering silhouettes.
                </p>
                <p className="mt-4 text-sm font-medium text-indigo-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/noir1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Noir Formal</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Specializing in sophisticated menswear and tuxedos, Noir Formal combines traditional tailoring
                  techniques with modern styling for the contemporary gentleman.
                </p>
                <p className="mt-4 text-sm font-medium text-indigo-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/luxe1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Luxe Accessories</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Creating statement accessories that elevate any evening ensemble, from crystal-embellished clutches to
                  handcrafted jewelry and formal footwear.
                </p>
                <p className="mt-4 text-sm font-medium text-indigo-600">View Designer Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="bg-indigo-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Evening Wear Styling Tips</h2>
            <p className="mt-4 text-lg text-gray-600">
              The perfect evening look is all about the details. Consider your event's dress code, choose accessories
              that complement rather than compete with your outfit, and remember that proper fit is essential for formal
              attire.
            </p>
            <div className="mt-8">
              <Button>Explore Our Styling Guide</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
