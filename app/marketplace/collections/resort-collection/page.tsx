import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sun, Umbrella, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata = {
  title: "Resort Collection | Fashion Buyers Club",
  description:
    "Explore our curated collection of resort wear and vacation-ready fashion pieces from independent designers.",
}

export default function ResortCollectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-50 text-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/resort-wear-collection.png"
            alt="Resort Collection"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/marketplace/collections"
              className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Resort Collection</h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Vacation-ready styles for sun-soaked destinations. Discover effortless elegance with our curated selection
              of resort wear designed for warm weather escapes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm">Beachwear</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm">Tropical Prints</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm">
                Lightweight Fabrics
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm">
                Vacation Essentials
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm">Summer Styles</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Styles Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Resort Style Essentials</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <Sun className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Beachwear</h3>
              <p className="text-gray-600">
                From swimwear to cover-ups, our beachwear selection features breathable fabrics and stylish designs
                perfect for seaside lounging and poolside glamour.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <Umbrella className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Vacation Attire</h3>
              <p className="text-gray-600">
                Effortlessly transition from day to evening with versatile pieces that combine comfort and
                sophistication for all your vacation activities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <Waves className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Tropical Elegance</h3>
              <p className="text-gray-600">
                Embrace vibrant prints and flowing silhouettes that capture the essence of tropical destinations while
                maintaining a refined and elegant aesthetic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Featured Resort Pieces</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="r1"
              name="Tropical Print Maxi Dress"
              price={180}
              image="/designer-swimsuit.png"
              designer="Coastal Couture"
              designerId="coastal1"
              category="Dresses"
              isNew={true}
            />
            <ProductCard
              id="r2"
              name="Linen Beach Shirt"
              price={95}
              image="/bamboo-lounge-set.png"
              designer="Island Threads"
              designerId="island1"
              category="Tops"
              isFeatured={true}
            />
            <ProductCard
              id="r3"
              name="Cabana Stripe Swimsuit"
              price={120}
              image="/designer-swimsuit.png"
              designer="Azure Swim"
              designerId="azure1"
              category="Swimwear"
              isNew={true}
            />
            <ProductCard
              id="r4"
              name="Raffia Beach Tote"
              price={85}
              image="/pineapple-leather-handbag.png"
              designer="Coastal Couture"
              designerId="coastal1"
              category="Accessories"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* All Resort Products */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Resort Products</h2>
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
              Swimwear
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Dresses
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Tops
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Bottoms
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Accessories
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard
              id="r5"
              name="Palm Print Kimono"
              price={110}
              image="/bamboo-lounge-set.png"
              designer="Island Threads"
              designerId="island1"
              category="Outerwear"
            />
            <ProductCard
              id="r6"
              name="Linen Palazzo Pants"
              price={95}
              image="/bamboo-lounge-set.png"
              designer="Coastal Couture"
              designerId="coastal1"
              category="Bottoms"
            />
            <ProductCard
              id="r7"
              name="Straw Sun Hat"
              price={65}
              image="/pineapple-leather-handbag.png"
              designer="Azure Accessories"
              designerId="azure2"
              category="Accessories"
            />
            <ProductCard
              id="r8"
              name="Resort Linen Shorts"
              price={75}
              image="/bamboo-lounge-set.png"
              designer="Island Threads"
              designerId="island1"
              category="Bottoms"
            />
            <ProductCard
              id="r9"
              name="Crochet Beach Cover-Up"
              price={120}
              image="/designer-swimsuit.png"
              designer="Azure Swim"
              designerId="azure1"
              category="Swimwear"
            />
            <ProductCard
              id="r10"
              name="Espadrille Sandals"
              price={85}
              image="/cork-leather-wallet.png"
              designer="Coastal Couture"
              designerId="coastal1"
              category="Footwear"
            />
            <ProductCard
              id="r11"
              name="Tropical Print Shirt"
              price={90}
              image="/organic-cotton-tshirt.png"
              designer="Island Threads"
              designerId="island1"
              category="Tops"
            />
            <ProductCard
              id="r12"
              name="Bamboo Handle Clutch"
              price={75}
              image="/pineapple-leather-handbag.png"
              designer="Azure Accessories"
              designerId="azure2"
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

      {/* Resort Designers Spotlight */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Resort Wear Designers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/designers/coastal1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Coastal Couture</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Specializing in elegant resort wear with a focus on luxurious natural fabrics and timeless silhouettes
                  inspired by coastal destinations around the world.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/island1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Island Threads</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Creating vibrant, tropical-inspired pieces that combine bold prints with comfortable, breathable
                  fabrics perfect for warm weather destinations.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600">View Designer Profile</p>
              </div>
            </Link>
            <Link
              href="/designers/azure1"
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Azure Swim</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  Innovative swimwear and beachwear designs that combine fashion-forward aesthetics with practical
                  features for the ultimate in beach and poolside style.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600">View Designer Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resort Styling Tips */}
      <section className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Resort Styling Tips</h2>
            <p className="mt-4 text-lg text-gray-600">
              Elevate your vacation wardrobe with versatile pieces that can be mixed and matched. Focus on lightweight,
              breathable fabrics that travel well and can transition from beach to dinner with simple accessory changes.
            </p>
            <div className="mt-8">
              <Button>Explore Resort Style Guide</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
