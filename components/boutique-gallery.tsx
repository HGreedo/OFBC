"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// This is placeholder data. In a real application, this would come from your backend.
const boutiques = [
  {
    id: 1,
    name: "Chic Boutique",
    state: "California",
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Modern",
  },
  {
    id: 2,
    name: "Vintage Vogue",
    state: "New York",
    city: "Brooklyn",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Vintage",
  },
  {
    id: 3,
    name: "City Threads",
    state: "Illinois",
    city: "Chicago",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Urban",
  },
  {
    id: 4,
    name: "Boho Chic",
    state: "Texas",
    city: "Austin",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Bohemian",
  },
  {
    id: 5,
    name: "Luxe Life",
    state: "Florida",
    city: "Miami",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Luxury",
  },
  {
    id: 6,
    name: "Eco Elegance",
    state: "Oregon",
    city: "Portland",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Eco-friendly",
  },
  {
    id: 7,
    name: "Minimalist Maven",
    state: "Washington",
    city: "Seattle",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Minimalist",
  },
  {
    id: 8,
    name: "Retro Revival",
    state: "Massachusetts",
    city: "Boston",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Retro",
  },
  {
    id: 9,
    name: "Couture Corner",
    state: "Georgia",
    city: "Atlanta",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Haute Couture",
  },
  {
    id: 10,
    name: "Trendy Threads",
    state: "Nevada",
    city: "Las Vegas",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Trendy",
  },
  {
    id: 11,
    name: "Rustic Charm",
    state: "Colorado",
    city: "Denver",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Rustic",
  },
  {
    id: 12,
    name: "Seaside Style",
    state: "Hawaii",
    city: "Honolulu",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Beach",
  },
  {
    id: 13,
    name: "Nordic Minimalist",
    state: "Minnesota",
    city: "Minneapolis",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Scandinavian",
  },
  {
    id: 14,
    name: "Atelier Noir",
    state: "New York",
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Avant-garde",
  },
  {
    id: 15,
    name: "Mountain Maven",
    state: "Colorado",
    city: "Boulder",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Outdoor",
  },
  {
    id: 16,
    name: "Luxe & Local",
    state: "Oregon",
    city: "Portland",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Artisanal",
  },
  {
    id: 17,
    name: "Future Form",
    state: "California",
    city: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1551488831-68b4d0d92d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Futuristic",
  },
  {
    id: 18,
    name: "Coastal Chic",
    state: "Florida",
    city: "Miami Beach",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Resort Wear",
  },
  {
    id: 19,
    name: "Bohemian Rhapsody",
    state: "Texas",
    city: "Austin",
    image:
      "https://images.unsplash.com/photo-1528476513691-07e6f563d97f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Bohemian",
  },
  {
    id: 20,
    name: "Heritage House",
    state: "Kentucky",
    city: "Louisville",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Classic",
  },
]

export function BoutiqueGallery() {
  const [filter, setFilter] = useState({ state: "", style: "", search: "" })

  const filteredBoutiques = boutiques.filter(
    (boutique) =>
      (filter.state === "" || boutique.state === filter.state) &&
      (filter.style === "" || boutique.style === filter.style) &&
      (filter.search === "" ||
        boutique.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        boutique.city.toLowerCase().includes(filter.search.toLowerCase())),
  )

  const states = Array.from(new Set(boutiques.map((b) => b.state)))
  const styles = Array.from(new Set(boutiques.map((b) => b.style)))

  return (
    <div className="space-y-6">
      <Tabs defaultValue="gallery" className="w-full">
        <TabsList>
          <TabsTrigger value="gallery">Gallery View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <div className="flex flex-wrap gap-4 my-4">
          <Select onValueChange={(value) => setFilter({ ...filter, state: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setFilter({ ...filter, style: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              {styles.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex w-full sm:w-auto">
            <Input
              placeholder="Search boutiques..."
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              className="mr-2"
            />
            <Button onClick={() => setFilter({ state: "", style: "", search: "" })}>Clear</Button>
          </div>
        </div>
        <TabsContent value="gallery" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBoutiques.map((boutique) => (
              <Card key={boutique.id}>
                <CardContent className="p-4">
                  <Image
                    src={boutique.image || "/placeholder.svg"}
                    alt={boutique.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="font-semibold text-lg">{boutique.name}</h3>
                  <p className="text-sm text-gray-600">
                    {boutique.city}, {boutique.state}
                  </p>
                  <p className="text-sm text-gray-600">{boutique.style}</p>
                  <Link href={`/boutiques/${boutique.id}`} className="mt-4">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {filteredBoutiques.map((boutique) => (
              <Card key={boutique.id}>
                <CardContent className="flex items-center p-4">
                  <Image
                    src={boutique.image || "/placeholder.svg"}
                    alt={boutique.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{boutique.name}</h3>
                    <p className="text-sm text-gray-600">
                      {boutique.city}, {boutique.state}
                    </p>
                    <p className="text-sm text-gray-600">{boutique.style}</p>
                  </div>
                  <div>
                    <Link href={`/boutiques/${boutique.id}`} className="mt-4">
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
