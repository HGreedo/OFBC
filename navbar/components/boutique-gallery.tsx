"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageModal } from "@/components/message-modal"

// This is placeholder data. In a real application, this would come from your backend.
const boutiques = [
  {
    id: 1,
    name: "Chic Boutique",
    state: "California",
    city: "Los Angeles",
    image: "/placeholder.svg",
    style: "Modern",
  },
  { id: 2, name: "Vintage Vogue", state: "New York", city: "Brooklyn", image: "/placeholder.svg", style: "Vintage" },
  { id: 3, name: "Urban Outfitters", state: "Illinois", city: "Chicago", image: "/placeholder.svg", style: "Urban" },
  { id: 4, name: "Boho Chic", state: "Texas", city: "Austin", image: "/placeholder.svg", style: "Bohemian" },
  { id: 5, name: "Luxe Life", state: "Florida", city: "Miami", image: "/placeholder.svg", style: "Luxury" },
  { id: 6, name: "Eco Elegance", state: "Oregon", city: "Portland", image: "/placeholder.svg", style: "Eco-friendly" },
  // Add more placeholder boutiques as needed
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
                  <div className="mt-4">
                    <MessageModal recipientName={boutique.name} recipientType="boutique" />
                  </div>
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
                    <MessageModal recipientName={boutique.name} recipientType="boutique" />
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

