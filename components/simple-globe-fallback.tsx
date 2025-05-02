"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface EventLocation {
  id: string
  name: string
  location: string
  coordinates: [number, number]
  date: string
}

interface SimpleGlobeFallbackProps {
  eventLocations: EventLocation[]
  onEventSelect: (eventId: string) => void
}

export function SimpleGlobeFallback({ eventLocations, onEventSelect }: SimpleGlobeFallbackProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  // Group events by region
  const regions = {
    "North America": eventLocations.filter(
      (e) => e.location.includes("USA") || e.location.includes("Canada") || e.location.includes("Mexico"),
    ),
    Europe: eventLocations.filter(
      (e) =>
        e.location.includes("France") ||
        e.location.includes("Italy") ||
        e.location.includes("UK") ||
        e.location.includes("Germany"),
    ),
    Asia: eventLocations.filter(
      (e) => e.location.includes("Japan") || e.location.includes("China") || e.location.includes("Korea"),
    ),
    Australia: eventLocations.filter((e) => e.location.includes("Australia") || e.location.includes("Zealand")),
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">Fashion Events Map</h3>
          <p className="text-gray-600">Select a region to view events</p>
        </div>

        <div className="relative w-full h-[400px] mb-6">
          <Image
            src="/placeholder.svg?height=400&width=800&text=World+Map"
            alt="World Map"
            fill
            className="object-contain"
          />

          {/* Region buttons positioned on the map */}
          <Button
            className="absolute top-[30%] left-[25%] bg-black/70 hover:bg-black"
            onClick={() => setSelectedRegion("North America")}
          >
            North America ({regions["North America"].length})
          </Button>

          <Button
            className="absolute top-[25%] left-[45%] bg-black/70 hover:bg-black"
            onClick={() => setSelectedRegion("Europe")}
          >
            Europe ({regions["Europe"].length})
          </Button>

          <Button
            className="absolute top-[30%] left-[65%] bg-black/70 hover:bg-black"
            onClick={() => setSelectedRegion("Asia")}
          >
            Asia ({regions["Asia"].length})
          </Button>

          <Button
            className="absolute top-[60%] left-[75%] bg-black/70 hover:bg-black"
            onClick={() => setSelectedRegion("Australia")}
          >
            Australia ({regions["Australia"].length})
          </Button>
        </div>

        {selectedRegion && (
          <div>
            <h4 className="text-lg font-semibold mb-4">Events in {selectedRegion}</h4>
            <div className="space-y-4">
              {regions[selectedRegion as keyof typeof regions].map((event) => (
                <div key={event.id} className="border p-4 rounded-md">
                  <h5 className="font-medium">{event.name}</h5>
                  <p className="text-sm text-gray-600">{event.location}</p>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <Button variant="outline" size="sm" onClick={() => onEventSelect(event.id)}>
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
