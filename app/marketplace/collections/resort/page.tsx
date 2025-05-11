import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Resort Collection | OFBC Marketplace",
  description:
    "Discover our curated resort wear collection featuring sustainable, stylish vacation-ready pieces from independent designers.",
  openGraph: {
    title: "Resort Collection | OFBC Marketplace",
    description:
      "Discover our curated resort wear collection featuring sustainable, stylish vacation-ready pieces from independent designers.",
    images: ["/resort-wear-collection.png"],
  },
}

export default function ResortCollectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
          <Image src="/resort-wear-collection.png" alt="Resort Collection" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resort Collection</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Effortless elegance for your perfect getaway. Our resort collection features vacation-ready pieces
              designed for comfort, style, and memorable moments under the sun.
            </p>
          </div>
        </div>
      </section>

      {/* Resort Style Essentials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Resort Style Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Beachwear</CardTitle>
              <CardDescription>Stylish swimwear and cover-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our beachwear collection combines style with functionality, featuring quick-drying fabrics, UV
                protection, and designs that transition seamlessly from beach to boardwalk.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vacation Attire</CardTitle>
              <CardDescription>Day-to-night versatile pieces</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Versatile pieces that take you from daytime explorations to evening dinners. Lightweight fabrics,
                breathable designs, and effortless styling for your perfect vacation wardrobe.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tropical Elegance</CardTitle>
              <CardDescription>Vibrant prints and flowing silhouettes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Embrace the spirit of paradise with vibrant prints, flowing silhouettes, and natural fabrics. Our
                tropical elegance pieces capture the essence of resort living with sophisticated flair.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Resort Wear</h2>
          <Link href="/marketplace/new-arrivals">
            <Button variant="outline">View All New Arrivals</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/designer-swimsuit.png"
                alt="Designer Swimsuit"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <Badge className="absolute top-4 right-4 bg-blue-500">New Arrival</Badge>
            </div>
            <CardHeader>
              <CardTitle>Oceanic One-Piece Swimsuit</CardTitle>
              <CardDescription>By Marina Beachwear</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <span className="font-semibold">$189.00</span>
              <Link href="/marketplace/product/oceanic-swimsuit">
                <Button size="sm">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/men-linen-beach-shirt.png"
                alt="Linen Beach Shirt"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <Badge className="absolute top-4 right-4 bg-blue-500">Bestseller</Badge>
            </div>
            <CardHeader>
              <CardTitle>Coastal Linen Shirt</CardTitle>
              <CardDescription>By Riviera Collection</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <span className="font-semibold">$145.00</span>
              <Link href="/marketplace/product/coastal-linen-shirt">
                <Button size="sm">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/flowing-maxi-dress.png"
                alt="Flowing Maxi Dress"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <Badge className="absolute top-4 right-4 bg-blue-500">Limited Edition</Badge>
            </div>
            <CardHeader>
              <CardTitle>Paradise Maxi Dress</CardTitle>
              <CardDescription>By Tropical Luxe</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <span className="font-semibold">$235.00</span>
              <Link href="/marketplace/product/paradise-maxi-dress">
                <Button size="sm">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* All Products */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">All Resort Wear</h2>
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="beachwear">Beachwear</TabsTrigger>
            <TabsTrigger value="vacation">Vacation Attire</TabsTrigger>
            <TabsTrigger value="tropical">Tropical Elegance</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/designer-swimsuit.png"
                  alt="Designer Swimsuit"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Oceanic One-Piece Swimsuit</CardTitle>
                <CardDescription>By Marina Beachwear</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$189.00</span>
                <Link href="/marketplace/product/oceanic-swimsuit">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/men-linen-beach-shirt.png"
                  alt="Linen Beach Shirt"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Coastal Linen Shirt</CardTitle>
                <CardDescription>By Riviera Collection</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$145.00</span>
                <Link href="/marketplace/product/coastal-linen-shirt">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/flowing-maxi-dress.png"
                  alt="Flowing Maxi Dress"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Paradise Maxi Dress</CardTitle>
                <CardDescription>By Tropical Luxe</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$235.00</span>
                <Link href="/marketplace/product/paradise-maxi-dress">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/resort-linen-pants.png"
                  alt="Linen Resort Pants"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Breeze Linen Pants</CardTitle>
                <CardDescription>By Coastal Comfort</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$165.00</span>
                <Link href="/marketplace/product/breeze-linen-pants">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/straw-beach-hat.png"
                  alt="Straw Beach Hat"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Riviera Straw Hat</CardTitle>
                <CardDescription>By Sun Essentials</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$95.00</span>
                <Link href="/marketplace/product/riviera-straw-hat">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/tropical-silk-scarf.png"
                  alt="Tropical Print Scarf"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Paradise Silk Scarf</CardTitle>
                <CardDescription>By Island Accessories</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$120.00</span>
                <Link href="/marketplace/product/paradise-silk-scarf">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="beachwear" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/designer-swimsuit.png"
                  alt="Designer Swimsuit"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Oceanic One-Piece Swimsuit</CardTitle>
                <CardDescription>By Marina Beachwear</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$189.00</span>
                <Link href="/marketplace/product/oceanic-swimsuit">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/straw-beach-hat.png"
                  alt="Straw Beach Hat"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Riviera Straw Hat</CardTitle>
                <CardDescription>By Sun Essentials</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$95.00</span>
                <Link href="/marketplace/product/riviera-straw-hat">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="vacation" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/men-linen-beach-shirt.png"
                  alt="Linen Beach Shirt"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Coastal Linen Shirt</CardTitle>
                <CardDescription>By Riviera Collection</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$145.00</span>
                <Link href="/marketplace/product/coastal-linen-shirt">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/resort-linen-pants.png"
                  alt="Linen Resort Pants"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Breeze Linen Pants</CardTitle>
                <CardDescription>By Coastal Comfort</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$165.00</span>
                <Link href="/marketplace/product/breeze-linen-pants">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="tropical" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/flowing-maxi-dress.png"
                  alt="Flowing Maxi Dress"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Paradise Maxi Dress</CardTitle>
                <CardDescription>By Tropical Luxe</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$235.00</span>
                <Link href="/marketplace/product/paradise-maxi-dress">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/tropical-silk-scarf.png"
                  alt="Tropical Print Scarf"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Paradise Silk Scarf</CardTitle>
                <CardDescription>By Island Accessories</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <span className="font-semibold">$120.00</span>
                <Link href="/marketplace/product/paradise-silk-scarf">
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Designer Spotlight */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Designer Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=female fashion designer portrait beach"
                  alt="Marina Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-center">Marina Chen</CardTitle>
              <CardDescription className="text-center">Marina Beachwear</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Marina Chen draws inspiration from coastal landscapes around the world, creating swimwear that combines
                functionality with elegant design. Her pieces feature innovative sustainable fabrics with UV protection.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/designers/marina-chen">
                <Button variant="outline">View Profile</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=male fashion designer portrait tropical"
                  alt="Leo Rivera"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-center">Leo Rivera</CardTitle>
              <CardDescription className="text-center">Riviera Collection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Leo Rivera specializes in resort wear that transitions seamlessly from beach to dinner. His linen pieces
                are crafted from premium natural fibers, focusing on breathability and timeless style.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/designers/leo-rivera">
                <Button variant="outline">View Profile</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="relative h-[200px] w-[200px] mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=female fashion designer portrait island"
                  alt="Sophia Kai"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-center">Sophia Kai</CardTitle>
              <CardDescription className="text-center">Tropical Luxe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Sophia Kai creates vibrant resort wear inspired by her Hawaiian heritage. Her signature prints celebrate
                tropical flora and fauna, while her flowing silhouettes capture the essence of island living.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/designers/sophia-kai">
                <Button variant="outline">View Profile</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Resort Styling Tips */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Resort Styling Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Packing Smart</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Choose versatile pieces that can be mixed and matched</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pack lightweight, wrinkle-resistant fabrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Include one statement piece for special occasions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Don't forget versatile accessories that elevate simple outfits</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Day to Night Transitions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Layer a lightweight kimono over swimwear for beach-to-lunch transitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pack statement jewelry to transform daytime looks for evening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>A versatile maxi dress works for both casual days and elegant evenings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Consider fabrics that look more elevated as the day progresses</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/resources/inspiration/resort-style-guide">
              <Button>Read Our Complete Resort Style Guide</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
