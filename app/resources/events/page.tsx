"use client"

import { useState } from "react"
import { EventCalendar } from "@/components/event-calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

// Dynamically import the ArcGisGlobe component with no SSR
const DynamicArcGisGlobe = dynamic(() => import("@/components/arcgis-globe").then((mod) => mod.ArcGisGlobe), {
  ssr: false,
  loading: () => (
    <Card>
      <CardContent className="w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-lg">Loading 3D Globe...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
        </div>
      </CardContent>
    </Card>
  ),
})

// Sample event locations with coordinates
const eventLocations = [
  {
    id: "4",
    name: "Boutique Owners Conference",
    location: "Chicago, USA",
    coordinates: [-87.6298, 41.8781], // [longitude, latitude]
    date: "June 5-7, 2025",
  },
  {
    id: "5",
    name: "Emerging Designers Showcase",
    location: "Los Angeles, USA",
    coordinates: [-118.2437, 34.0522],
    date: "June 18, 2025",
  },
  {
    id: "6",
    name: "Summer Textile Trade Show",
    location: "Miami, USA",
    coordinates: [-80.1918, 25.7617],
    date: "July 10-12, 2025",
  },
  {
    id: "8",
    name: "Fall/Winter Collection Preview",
    location: "New York, USA",
    coordinates: [-74.006, 40.7128],
    date: "August 8, 2025",
  },
  {
    id: "9",
    name: "Fashion Photography Workshop",
    location: "Los Angeles, USA",
    coordinates: [-118.2437, 34.0522],
    date: "August 15, 2025",
  },
  {
    id: "10",
    name: "Fashion Week Networking Event",
    location: "New York, USA",
    coordinates: [-74.006, 40.7128],
    date: "September 10, 2025",
  },
  {
    id: "11",
    name: "Sustainable Fashion Summit",
    location: "Seattle, USA",
    coordinates: [-122.3321, 47.6062],
    date: "September 22-23, 2025",
  },
  {
    id: "14",
    name: "Boutique & Designer Matchmaking Event",
    location: "New York, USA",
    coordinates: [-74.006, 40.7128],
    date: "November 8, 2025",
  },
  {
    id: "15",
    name: "Visual Merchandising Masterclass",
    location: "Dallas, USA",
    coordinates: [-96.797, 32.7767],
    date: "November 20, 2025",
  },
  {
    id: "16",
    name: "End-of-Year Industry Celebration",
    location: "Los Angeles, USA",
    coordinates: [-118.2437, 34.0522],
    date: "December 12, 2025",
  },
  // International events
  {
    id: "20",
    name: "Paris Fashion Week",
    location: "Paris, France",
    coordinates: [2.3522, 48.8566],
    date: "October 5-12, 2025",
  },
  {
    id: "21",
    name: "Milan Design Exhibition",
    location: "Milan, Italy",
    coordinates: [9.19, 45.4642],
    date: "September 15-20, 2025",
  },
  {
    id: "22",
    name: "Tokyo Fashion Innovation Summit",
    location: "Tokyo, Japan",
    coordinates: [139.6917, 35.6895],
    date: "July 25-27, 2025",
  },
  {
    id: "23",
    name: "London Textile Expo",
    location: "London, UK",
    coordinates: [-0.1278, 51.5074],
    date: "August 22-25, 2025",
  },
  {
    id: "24",
    name: "Sydney Designer Showcase",
    location: "Sydney, Australia",
    coordinates: [151.2093, -33.8688],
    date: "November 15-18, 2025",
  },
]

export default function EventsPage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("globe")

  const handleEventSelect = (eventId: string) => {
    setSelectedEventId(eventId)
    setActiveTab("calendar")
    // Scroll to calendar section
    setTimeout(() => {
      document.getElementById("event-calendar")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <>
      {/* Update the ArcGIS CSS styles to match our new color scheme */}
      <style jsx global>{`
  /* ArcGIS custom styles */
  .esri-view {
    height: 100%;
    width: 100%;
  }
  
  .esri-popup__main-container {
    max-width: 300px;
    background-color: white;
    color: black;
  }
  
  .esri-popup__header-title {
    font-size: 16px;
    font-weight: bold;
    color: black;
  }
  
  .event-details-btn {
    background-color: #ff943d;
    color: white;
    border: none;
    padding: 8px 12px;
    margin-top: 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }
  
  .event-details-btn:hover {
    background-color: #e87f2d;
  }
  
  /* Make the globe controls more visible */
  .esri-ui-corner .esri-component {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .esri-widget--button {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }
  
  .esri-widget--button:hover {
    background-color: #ff943d;
  }
`}</style>

      <div className="space-y-12">
        <header className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Events</h1>
            <p className="text-xl">
              Stay connected with the fashion community through our curated calendar of industry events, workshops,
              trade shows, and networking opportunities. Explore our interactive 3D globe to discover fashion events
              happening around the world.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="globe">3D Globe View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>

            <TabsContent value="globe">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Explore Fashion Events Worldwide</h2>
                <p className="text-gray-600">
                  Interact with the 3D globe to discover fashion events happening around the world. Click on any marker
                  to see event details and navigate to the calendar for more information.
                </p>
                <DynamicArcGisGlobe eventLocations={eventLocations} onEventSelect={handleEventSelect} />
                <p className="text-sm text-gray-500 italic">
                  Tip: Click and drag to rotate the globe. Use the scroll wheel to zoom in and out.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="calendar" id="event-calendar">
              <EventCalendar initialSelectedEventId={selectedEventId} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
