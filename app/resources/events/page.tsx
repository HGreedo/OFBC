"use client"

import { useState, useEffect, useRef } from "react"
import { EventCalendar } from "@/components/event-calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { SimpleGlobeFallback } from "@/components/simple-globe-fallback"

// Dynamically import the Globe component with no SSR
const Globe = dynamic(() => import("react-globe.gl").then((mod) => mod.default), {
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

// Define the complete event type
interface Event {
  id: string
  name: string
  date: string
  time: string
  location: string
  coordinates: [number, number] // [longitude, latitude]
  description: string
  attendees: string
}

// Complete event data that will be used for both globe and calendar
const events: Event[] = [
  {
    id: "4",
    name: "Boutique Owners Conference",
    date: "June 5-7, 2025",
    time: "9:00 AM - 5:00 PM daily",
    location: "Chicago, USA",
    coordinates: [-87.6298, 41.8781],
    description:
      "Three-day conference featuring workshops, panel discussions, and networking events focused on boutique retail strategies, merchandising, and customer experience.",
    attendees: "Independent boutique owners, retail managers, and merchandisers",
  },
  {
    id: "5",
    name: "Emerging Designers Showcase",
    date: "June 18, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Los Angeles, USA",
    coordinates: [-118.2437, 34.0522],
    description:
      "Spotlight event featuring collections from ten up-and-coming designers. Includes exhibition, cocktail reception, and opportunity to place wholesale orders.",
    attendees: "Boutique buyers, fashion scouts, press, and industry influencers",
  },
  {
    id: "6",
    name: "Summer Textile Trade Show",
    date: "July 10-12, 2025",
    time: "10:00 AM - 6:00 PM daily",
    location: "Miami, USA",
    coordinates: [-80.1918, 25.7617],
    description:
      "Annual trade show featuring textile manufacturers, suppliers, and innovative materials for the upcoming seasons. Connect with suppliers and discover new fabric options.",
    attendees: "Designers, production managers, and sourcing specialists",
  },
  {
    id: "8",
    name: "Fall/Winter Collection Preview",
    date: "August 8, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "New York, USA",
    coordinates: [-74.006, 40.7128],
    description:
      "Preview event showcasing Fall/Winter collections from our platform's designers. Perfect opportunity for boutiques to plan seasonal buying.",
    attendees: "Boutique owners, buyers, and press",
  },
  {
    id: "9",
    name: "Fashion Photography Workshop",
    date: "August 15, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Los Angeles, USA",
    coordinates: [-118.2437, 34.0522],
    description:
      "Hands-on workshop covering product photography, lookbook creation, and visual storytelling for fashion brands. Bring your camera!",
    attendees: "Designers, brand owners, and marketing professionals",
  },
  {
    id: "10",
    name: "Fashion Week Networking Event",
    date: "September 10, 2025",
    time: "8:00 PM - 11:00 PM",
    location: "New York, USA",
    coordinates: [-74.006, 40.7128],
    description:
      "Exclusive networking event during Fashion Week, connecting independent designers with boutique buyers in a relaxed setting.",
    attendees: "Platform members only - designers and boutique representatives",
  },
  {
    id: "11",
    name: "Sustainable Fashion Summit",
    date: "September 22-23, 2025",
    time: "9:00 AM - 5:00 PM daily",
    location: "Seattle, USA",
    coordinates: [-122.3321, 47.6062],
    description:
      "Two-day summit focused on sustainability in the fashion industry, featuring keynote speakers, panel discussions, and workshops.",
    attendees: "Industry professionals committed to sustainable practices",
  },
  {
    id: "14",
    name: "Boutique & Designer Matchmaking Event",
    date: "November 8, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "New York, USA",
    coordinates: [-74.006, 40.7128],
    description:
      "Curated matchmaking event connecting boutiques with designers based on style, price point, and target customer. Pre-scheduled meetings throughout the day.",
    attendees: "Pre-registered boutiques and designers",
  },
  {
    id: "15",
    name: "Visual Merchandising Masterclass",
    date: "November 20, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Dallas, USA",
    coordinates: [-96.797, 32.7767],
    description:
      "Expert-led workshop on creating compelling visual displays, store layouts, and product presentations to drive sales.",
    attendees: "Boutique owners, retail staff, and visual merchandisers",
  },
  {
    id: "16",
    name: "End-of-Year Industry Celebration",
    date: "December 12, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Los Angeles, USA",
    coordinates: [-118.2437, 34.0522],
    description:
      "Annual gala celebrating achievements in the fashion industry, with awards, entertainment, and networking opportunities.",
    attendees: "All platform members and industry partners",
  },
  // International events
  {
    id: "20",
    name: "Paris Fashion Week",
    date: "October 5-12, 2025",
    time: "Various times",
    location: "Paris, France",
    coordinates: [2.3522, 48.8566],
    description:
      "One of the world's most prestigious fashion events featuring runway shows from leading designers and emerging talents. A key event for trend forecasting and industry networking.",
    attendees: "Fashion buyers, press, influencers, and industry professionals",
  },
  {
    id: "21",
    name: "Milan Design Exhibition",
    date: "September 15-20, 2025",
    time: "10:00 AM - 8:00 PM daily",
    location: "Milan, Italy",
    coordinates: [9.19, 45.4642],
    description:
      "Innovative exhibition showcasing the intersection of fashion and design, with installations from leading fashion houses and independent designers.",
    attendees: "Designers, architects, buyers, and design enthusiasts",
  },
  {
    id: "22",
    name: "Tokyo Fashion Innovation Summit",
    date: "July 25-27, 2025",
    time: "9:00 AM - 6:00 PM daily",
    location: "Tokyo, Japan",
    coordinates: [139.6917, 35.6895],
    description:
      "Conference focused on technological innovations in fashion, from smart textiles to AI in design and retail. Features demonstrations, talks, and networking opportunities.",
    attendees: "Fashion tech entrepreneurs, designers, and industry innovators",
  },
  {
    id: "23",
    name: "London Textile Expo",
    date: "August 22-25, 2025",
    time: "10:00 AM - 7:00 PM daily",
    location: "London, UK",
    coordinates: [-0.1278, 51.5074],
    description:
      "Comprehensive showcase of textiles from around the world, with a focus on sustainable and innovative materials for the fashion industry.",
    attendees: "Designers, textile buyers, and production specialists",
  },
  {
    id: "24",
    name: "Sydney Designer Showcase",
    date: "November 15-18, 2025",
    time: "11:00 AM - 8:00 PM daily",
    location: "Sydney, Australia",
    coordinates: [151.2093, -33.8688],
    description:
      "Exhibition highlighting Australian and Pacific designers, with a focus on resort wear, sustainable practices, and indigenous design influences.",
    attendees: "Buyers, press, and fashion enthusiasts",
  },
]

// Format data for react-globe.gl with larger point size
const globeData = events.map((event) => ({
  id: event.id,
  lat: event.coordinates[1],
  lng: event.coordinates[0],
  name: event.name,
  location: event.location,
  date: event.date,
  time: event.time,
  description: event.description,
  attendees: event.attendees,
  color: "#ff943d",
  size: 1.2, // Increased from 0.5 to 1.2 for better visibility
}))

// Helper function to create Google Calendar URL
const createGoogleCalendarUrl = (event: any) => {
  try {
    // Extract date information
    const dateStr = event.date.split("-")[0].trim() // Get first date if range
    const timeStr = event.time.split("-")[0].trim() // Get start time

    // Create a date string that JavaScript can parse
    let dateTimeStr = `${dateStr} 2025 ${timeStr}`

    // Handle "Various times" case
    if (timeStr === "Various times" || timeStr === "Various") {
      dateTimeStr = `${dateStr} 2025 9:00 AM` // Default to 9:00 AM
    }

    // Parse the date
    const startDate = new Date(dateTimeStr)

    // Create end date (2 hours later by default)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)

    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ format)
    const formatDate = (date: Date) => {
      return (
        date
          .toISOString()
          .replace(/-|:|\.\d+/g, "")
          .substring(0, 15) + "Z"
      )
    }

    const startFormatted = formatDate(startDate)
    const endFormatted = formatDate(endDate)

    // Create details with description and attendees
    const details = `${event.description}\n\nWho Should Attend: ${event.attendees}\n\nEvent from FashionBuyersClub`

    // Create Google Calendar URL
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${startFormatted}/${endFormatted}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(event.location)}&sprop=website:fashionbuyersclub.com`
  } catch (error) {
    console.error("Error creating Google Calendar URL:", error)
    // Fallback to a simpler URL if there's an error
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`
  }
}

// Organize events by month for the calendar view
const getEventsByMonth = () => {
  const eventsByMonth: Record<string, Event[]> = {}

  events.forEach((event) => {
    // Extract month and year from the date
    const dateParts = event.date.split(" ")[0].split("-")[0].trim()
    const monthYear = dateParts.includes(",") ? dateParts.split(",")[0] : dateParts.split(" ")[0] + " 2025"

    // Initialize the month array if it doesn't exist
    if (!eventsByMonth[monthYear]) {
      eventsByMonth[monthYear] = []
    }

    // Add the event to the appropriate month
    eventsByMonth[monthYear].push(event)
  })

  return eventsByMonth
}

export default function EventsPage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("globe")
  const globeRef = useRef<any>(null)
  const [globeReady, setGlobeReady] = useState(false)
  const [globeError, setGlobeError] = useState(false)
  const [selectedPoint, setSelectedPoint] = useState<any>(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleEventSelect = (eventId: string) => {
    setSelectedEventId(eventId)
    setActiveTab("calendar")
    // Scroll to calendar section
    setTimeout(() => {
      document.getElementById("event-calendar")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  // Set up slow auto-rotation
  useEffect(() => {
    if (globeRef.current && globeReady) {
      // Enable auto-rotation but make it very slow
      const controls = globeRef.current.controls()
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.15 // Very slow rotation speed (default is 2.0)

      // Pause rotation when interacting with the globe
      controls.addEventListener("start", () => {
        controls.autoRotate = false
      })

      // Resume rotation after interaction ends, with a delay
      controls.addEventListener("end", () => {
        setTimeout(() => {
          if (!showPopup) {
            // Don't resume rotation if popup is open
            controls.autoRotate = true
          }
        }, 2000)
      })

      // Set initial position for better view
      globeRef.current.pointOfView({ lat: 30, lng: 10, altitude: 2.5 })
    }
  }, [globeReady, showPopup])

  // Add this new effect to handle pausing rotation when popup is shown
  useEffect(() => {
    if (globeRef.current && globeReady) {
      const controls = globeRef.current.controls()
      if (showPopup) {
        controls.autoRotate = false
      } else if (!controls.enabled) {
        // Only re-enable if not currently being manipulated
        controls.autoRotate = true
      }
    }
  }, [showPopup, globeReady])

  // Handle errors with the globe
  useEffect(() => {
    const handleError = () => {
      console.error("Error loading globe component")
      setGlobeError(true)
    }

    window.addEventListener("error", handleError)

    return () => {
      window.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="space-y-12">
      <header className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl">
            Stay connected with the fashion community through our curated calendar of industry events, workshops, trade
            shows, and networking opportunities. Explore our interactive 3D globe to discover fashion events happening
            around the world.
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
                Interact with the 3D globe to discover fashion events happening around the world. Click on any marker to
                see event details and navigate to the calendar for more information.
              </p>

              {globeError ? (
                <SimpleGlobeFallback eventLocations={events} onEventSelect={handleEventSelect} />
              ) : (
                <Card className="relative overflow-hidden">
                  {/* Logo in top left corner */}
                  <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-80 px-3 py-2 rounded-md">
                    <h3 className="text-lg font-bold text-black">FashionBuyersClub</h3>
                  </div>

                  <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
                    <Globe
                      ref={globeRef}
                      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                      pointsData={globeData}
                      pointLat="lat"
                      pointLng="lng"
                      pointColor="color"
                      pointRadius="size"
                      pointAltitude={0.01}
                      onGlobeReady={() => {
                        setGlobeReady(true)
                        // Make the function available globally for the onClick in the HTML label
                        window.handleGlobeEventClick = (eventId: string) => {
                          handleEventSelect(eventId)
                        }
                      }}
                      onPointClick={(point: any) => {
                        // Toggle the popup if clicking the same point, otherwise show for new point
                        if (selectedPoint && selectedPoint.id === point.id) {
                          setShowPopup(!showPopup)
                        } else {
                          setSelectedPoint(point)
                          setShowPopup(true)
                        }

                        // Focus the globe on the clicked point
                        if (globeRef.current) {
                          globeRef.current.pointOfView(
                            {
                              lat: point.lat,
                              lng: point.lng,
                              altitude: 1.5,
                            },
                            1000,
                          )
                        }
                      }}
                      // Clear selection when clicking on the globe background
                      onClick={() => {
                        if (showPopup) {
                          setShowPopup(false)
                        }
                      }}
                    />
                    {showPopup && selectedPoint && (
                      <div
                        className="absolute z-10 bg-white rounded-lg shadow-lg p-4 w-[350px] max-h-[80%] overflow-y-auto"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          pointerEvents: "auto",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <h3 className="font-bold text-xl text-black mb-3">{selectedPoint.name}</h3>

                        <div className="space-y-4 mb-4">
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 mr-3 mt-0.5 text-black flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-black">Date & Time</h4>
                              <p className="text-black">{selectedPoint.date}</p>
                              <p className="text-black">{selectedPoint.time}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 mr-3 mt-0.5 text-black flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-black">Location</h4>
                              <p className="text-black">{selectedPoint.location}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="h-5 w-5 mr-3 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-black">Description</h4>
                              <p className="text-black">{selectedPoint.description}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Users className="h-5 w-5 mr-3 mt-0.5 text-black flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-black">Who Should Attend</h4>
                              <p className="text-black">{selectedPoint.attendees}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <Button
                            className="bg-[#ff943d] hover:bg-[#e87d2d] text-black font-bold"
                            onClick={() => {
                              // Open Google Calendar with event details
                              const calendarUrl = createGoogleCalendarUrl(selectedPoint)
                              window.open(calendarUrl, "_blank")
                            }}
                          >
                            Add to Calendar
                          </Button>
                          <button className="text-gray-500 hover:text-black" onClick={() => setShowPopup(false)}>
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 mt-2">
                  If you experience any issues with the 3D globe, please try the Calendar View instead.
                </p>
                <Button variant="outline" onClick={() => setActiveTab("calendar")} className="text-sm">
                  Switch to Calendar View
                </Button>
              </div>

              <p className="text-sm text-gray-500 italic">
                Tip: Click and drag to rotate the globe. Use the scroll wheel to zoom in and out. Click on any orange
                marker to view event details.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="calendar" id="event-calendar">
            <EventCalendar initialSelectedEventId={selectedEventId} eventsByMonth={getEventsByMonth()} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Add this to make TypeScript happy with the window properties
declare global {
  interface Window {
    handleGlobeEventClick: (eventId: string) => void
  }
}
