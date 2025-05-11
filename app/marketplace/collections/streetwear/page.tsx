import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Zap, Trophy, Dumbbell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata = {
  title: "Streetwear Collection | Fashion Buyers Club",
  description:
    "Explore our curated collection of urban streetwear and contemporary casual fashion from independent designers.",
}

export default function StreetwearCollectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/urban-streetwear-collection.png"
            alt="Streetwear Collection"
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
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Streetwear Collection</h1>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              Urban style with attitude. Discover our curated selection of contemporary streetwear from independent
              designers pushing the boundaries of casual fashion.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-red-600 hover:bg-red-500 px-3 py-1 text-sm">Urban Style</Badge>
              <Badge className="bg-red-600 hover:bg-red-500 px-3 py-1 text-sm">Limited Editions</Badge>
              <Badge className="bg-red-600 hover:bg-red-500 px-3 py-1 text-sm">Graphic Designs</Badge>
              <Badge className="bg-red-600 hover:bg-red-500 px-3 py-1 text-sm">Athleisure</Badge>
              <Badge className="bg-red-600 hover:bg-red-500 px-3 py-1 text-sm">Contemporary</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Streetwear Trends Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Streetwear Trends</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Urban Casual</h3>
              <p className="text-gray-600">
                Everyday streetwear essentials with an edge. Comfortable yet stylish pieces designed for city life,
                featuring bold graphics, oversized silhouettes, and statement accessories.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Trophy className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Hypebeast Culture</h3>
              <p className="text-gray-600">
                Limited edition and collectible pieces from cutting-edge designers. Exclusive drops and collaborations
                that blend streetwear with high fashion sensibilities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Dumbbell className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Athleisure Fusion</h3>
              <p className="text-gray-600">
                The intersection of athletic wear and street style. Performance-inspired pieces reimagined for everyday
                wear with technical fabrics and contemporary design elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Featured Streetwear</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="s1"
              name="Graphic Hoodie"
              price={120}
              image="/placeholder.svg?height=600&width=400&query=urban graphic hoodie on model streetwear fashion photography"
              designer="Urban Collective"
              designerId="urban1"
              category="Tops"
              isNew={true}
            />
            <ProductCard
              id="s2"
              name="Cargo Pants"
              price={150}
              image="/placeholder.svg?height=600&width=400&query=oversized cargo pants on model streetwear fashion photography"
              designer="Street Essentials"
              designerId="street1"
              category="Bottoms"
              isFeatured={true}
            />
            <ProductCard
              id="s3"
              name="Limited Edition Sneakers"
              price={220}
              image="/placeholder.svg?height=600&width=400&query=limited edition sneakers streetwear fashion photography"
              designer="Hype Footwear"
              designerId="hype1"
              category="Footwear"
              isNew={true}
            />
            <ProductCard
              id="s4"
              name="Urban Jacket"
              price={180}
              image="/placeholder.svg?height=600&width=400&query=urban streetwear jacket on model fashion photography"
              designer="Urban Collective"
              designerId="urban1"
              category="Outerwear"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* All Streetwear Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Streetwear</h2>
            <div className="mt-4 sm:mt-0">
              <select className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="trending">Trending</option>
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
              Footwear
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Accessories
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="s5"
              name="Oversized Tee"
              price={65}
              image="/placeholder.svg?height=600&width=400&query=oversized graphic tee on model streetwear fashion photography"
              designer="Street Essentials"
              designerId="street1"
              category="Tops"
            />
            <ProductCard
              id="s6"
              name="Tech Joggers"
              price={110}
              image="/placeholder.svg?height=600&width=400&query=technical jogger pants on model streetwear fashion photography"
              designer="Urban Collective"
              designerId="urban1"
              category="Bottoms"
            />
            <ProductCard
              id="s7"
              name="Beanie Hat"
              price={35}
              image="/placeholder.svg?height=600&width=400&query=streetwear beanie hat on model fashion photography"
              designer="Street Essentials"
              designerId="street1"
              category="Accessories"
            />
            <ProductCard
              id="s8"
              name="Crossbody Bag"
              price={85}
              image="/placeholder.svg?height=600&width=400&query=urban crossbody bag streetwear fashion photography"
              designer="Urban Collective"
              designerId="urban1"
              category="Accessories"
            />
            <ProductCard
              id="s9"
              name="Graphic Sweatshirt"
              price={95}
              image="/placeholder.svg?height=600&width=400&query=graphic sweatshirt on model streetwear fashion photography"
              designer="Street Essentials"
              designerId="street1"
              category="Tops"
            />
            <ProductCard
              id="s10"
              name="High-Top Sneakers"
              price={160}
              image="/placeholder.svg?height=600&width=400&query=high top sneakers streetwear fashion photography"
              designer="Hype Footwear"
              designerId="hype1"
              category="Footwear"
            />
            <ProductCard
              id="s11"
              name="Utility Vest"
              price={130}
              image="/placeholder.svg?height=600&width=400&query=utility vest on model streetwear fashion photography"
              designer="Urban Collective"
              designerId="urban1"
              category="Outerwear"
            />
            <ProductCard
              id="s12"
              name="Bucket Hat"
              price={45}
              image="/placeholder.svg?height=600&width=400&query=streetwear bucket hat on model fashion photography"
              designer="Street Essentials"
              designerId="street1"
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

      {/* Streetwear Designers Spotlight */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Streetwear Designers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/designers/urban1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Urban Collective</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  A collaborative design studio creating contemporary streetwear with bold graphics and innovative
                  silhouettes. Known for their limited edition drops and artist collaborations.
                </p>
                <p className="mt-4 text-sm font-medium text-red-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/street1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Street Essentials</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Focused on creating high-quality streetwear basics with a twist. Their pieces feature premium
                  materials, thoughtful details, and versatile designs for everyday urban style.
                </p>
                <p className="mt-4 text-sm font-medium text-red-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/hype1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Hype Footwear</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Specializing in limited edition sneakers and footwear that blend street culture with innovative
                  design. Each release tells a story through unique colorways and materials.
                </p>
                <p className="mt-4 text-sm font-medium text-red-600">View Designer Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Street Style Inspiration */}
      <section className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight">Street Style Inspiration</h2>
            <p className="mt-4 text-lg text-gray-300">
              Streetwear is more than clothing—it's self-expression. Mix high and low pieces, experiment with
              proportions, and don't be afraid to break traditional fashion rules. The streets are your runway.
            </p>
            <div className="mt-8">
              <Button className="bg-red-600 hover:bg-red-500">Explore Street Style Lookbook</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
