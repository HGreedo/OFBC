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
const designers = [
  {
    id: 1,
    name: "Emma Thompson",
    state: "New York",
    city: "New York City",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&q=80",
    specialty: "Evening Wear",
  },
  {
    id: 2,
    name: "Liam Chen",
    state: "California",
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    specialty: "Streetwear",
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    state: "Florida",
    city: "Miami",
    image:
      "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
    specialty: "Swimwear",
  },
  {
    id: 4,
    name: "Aiden Patel",
    state: "Illinois",
    city: "Chicago",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    specialty: "Sustainable Fashion",
  },
  {
    id: 5,
    name: "Olivia Kim",
    state: "Texas",
    city: "Austin",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&q=80",
    specialty: "Avant-Garde",
  },
  {
    id: 6,
    name: "Ethan Nguyen",
    state: "Washington",
    city: "Seattle",
    image:
      "https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    specialty: "Minimalist",
  },
  {
    id: 7,
    name: "Isabella Martinez",
    state: "Arizona",
    city: "Phoenix",
    image:
      "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
    specialty: "Bohemian",
  },
  {
    id: 8,
    name: "Noah Johnson",
    state: "Massachusetts",
    city: "Boston",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    specialty: "Tailored Suits",
  },
  {
    id: 9,
    name: "Mia Williams",
    state: "Georgia",
    city: "Atlanta",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&q=80",
    specialty: "Urban Chic",
  },
  {
    id: 10,
    name: "Lucas Brown",
    state: "Colorado",
    city: "Denver",
    image:
      "https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    specialty: "Outdoor Apparel",
  },
  {
    id: 11,
    name: "Ava Garcia",
    state: "Nevada",
    city: "Las Vegas",
    image:
      "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
    specialty: "Stage Costumes",
  },
  {
    id: 12,
    name: "Zoe Taylor",
    state: "Oregon",
    city: "Portland",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    specialty: "Eco-Friendly Fashion",
  },
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
                  <Link href={`/designers/${designer.id}`} className="mt-4">
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
                  <Link href={`/designers/${designer.id}`} className="mt-4">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
