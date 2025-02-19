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
const designers = [
  {
    id: 1,
    name: "Emma Thompson",
    state: "New York",
    city: "New York City",
    image: "/placeholder.svg",
    specialty: "Evening Wear",
  },
  {
    id: 2,
    name: "Liam Chen",
    state: "California",
    city: "Los Angeles",
    image: "/placeholder.svg",
    specialty: "Streetwear",
  },
  { id: 3, name: "Sofia Rodriguez", state: "Florida", city: "Miami", image: "/placeholder.svg", specialty: "Swimwear" },
  {
    id: 4,
    name: "Aiden Patel",
    state: "Illinois",
    city: "Chicago",
    image: "/placeholder.svg",
    specialty: "Sustainable Fashion",
  },
  { id: 5, name: "Olivia Kim", state: "Texas", city: "Austin", image: "/placeholder.svg", specialty: "Avant-Garde" },
  {
    id: 6,
    name: "Ethan Nguyen",
    state: "Washington",
    city: "Seattle",
    image: "/placeholder.svg",
    specialty: "Minimalist",
  },
  // Add more placeholder designers as needed
]

export function DesignerGallery() {
  const [filter, setFilter] = useState({ state: "", specialty: "", search: "" })

  const filteredDesigners = designers.filter(
    (designer) =>
      (filter.state === "" || designer.state === filter.state) &&
      (filter.specialty === "" || designer.specialty === filter.specialty) &&
      (filter.search === "" ||
        designer.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        designer.city.toLowerCase().includes(filter.search.toLowerCase())),
  )

  const states = Array.from(new Set(designers.map((d) => d.state)))
  const specialties = Array.from(new Set(designers.map((d) => d.specialty)))

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
          <Select onValueChange={(value) => setFilter({ ...filter, specialty: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex w-full sm:w-auto">
            <Input
              placeholder="Search designers..."
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              className="mr-2"
            />
            <Button onClick={() => setFilter({ state: "", specialty: "", search: "" })}>Clear</Button>
          </div>
        </div>
        <TabsContent value="gallery" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDesigners.map((designer) => (
              <Card key={designer.id}>
                <CardContent className="p-4">
                  <Image
                    src={designer.image || "/placeholder.svg"}
                    alt={designer.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="font-semibold text-lg">{designer.name}</h3>
                  <p className="text-sm text-gray-600">
                    {designer.city}, {designer.state}
                  </p>
                  <p className="text-sm text-gray-600">{designer.specialty}</p>
                  <div className="mt-4">
                    <MessageModal recipientName={designer.name} recipientType="designer" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {filteredDesigners.map((designer) => (
              <Card key={designer.id}>
                <CardContent className="flex items-center p-4">
                  <Image
                    src={designer.image || "/placeholder.svg"}
                    alt={designer.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{designer.name}</h3>
                    <p className="text-sm text-gray-600">
                      {designer.city}, {designer.state}
                    </p>
                    <p className="text-sm text-gray-600">{designer.specialty}</p>
                  </div>
                  <div>
                    <MessageModal recipientName={designer.name} recipientType="designer" />
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

