"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define the event type
interface Event {
  id: string
  name: string
  date: string
  time: string
  location: string
  description: string
  attendees: string
}

// Sample event data organized by month
const eventsByMonth: Record<string, Event[]> = {
  "May 2025": [
    {
      id: "1",
      name: "Summer Fashion Preview",
      date: "May 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Metropolitan Design Center, New York",
      description:
        "Get an exclusive first look at the upcoming summer collections from our featured designers. This event includes a runway show, networking reception, and the opportunity to meet designers in person.",
      attendees: "Boutique owners, fashion buyers, press, and industry professionals",
    },
    {
      id: "2",
      name: "Sustainable Fabric Workshop",
      date: "May 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Eco Fashion Hub, Portland",
      description:
        "A hands-on workshop exploring the latest innovations in sustainable textiles. Learn about eco-friendly materials, sourcing practices, and how to incorporate sustainability into your design process.",
      attendees: "Designers, textile specialists, and sustainability advocates",
    },
    {
      id: "3",
      name: "Fashion Tech Meetup",
      date: "May 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Innovation Loft, San Francisco",
      description:
        "Monthly gathering of fashion and technology professionals discussing the intersection of these industries. This month's focus: AI in fashion design and retail.",
      attendees: "Fashion designers, tech developers, entrepreneurs, and investors",
    },
  ],
  "June 2025": [
    {
      id: "4",
      name: "Boutique Owners Conference",
      date: "June 5-7, 2025",
      time: "9:00 AM - 5:00 PM daily",
      location: "Grand Hotel Conference Center, Chicago",
      description:
        "Three-day conference featuring workshops, panel discussions, and networking events focused on boutique retail strategies, merchandising, and customer experience.",
      attendees: "Independent boutique owners, retail managers, and merchandisers",
    },
    {
      id: "5",
      name: "Emerging Designers Showcase",
      date: "June 18, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Contemporary Art Museum, Los Angeles",
      description:
        "Spotlight event featuring collections from ten up-and-coming designers. Includes exhibition, cocktail reception, and opportunity to place wholesale orders.",
      attendees: "Boutique buyers, fashion scouts, press, and industry influencers",
    },
  ],
  "July 2025": [
    {
      id: "6",
      name: "Summer Textile Trade Show",
      date: "July 10-12, 2025",
      time: "10:00 AM - 6:00 PM daily",
      location: "Convention Center, Miami",
      description:
        "Annual trade show featuring textile manufacturers, suppliers, and innovative materials for the upcoming seasons. Connect with suppliers and discover new fabric options.",
      attendees: "Designers, production managers, and sourcing specialists",
    },
    {
      id: "7",
      name: "Digital Marketing for Fashion Brands",
      date: "July 24, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Online Webinar",
      description:
        "Virtual workshop covering social media strategies, content creation, and digital advertising specifically for fashion brands and retailers.",
      attendees: "Marketing professionals, brand managers, and business owners",
    },
  ],
  "August 2025": [
    {
      id: "8",
      name: "Fall/Winter Collection Preview",
      date: "August 8, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Fashion District Gallery, New York",
      description:
        "Preview event showcasing Fall/Winter collections from our platform's designers. Perfect opportunity for boutiques to plan seasonal buying.",
      attendees: "Boutique owners, buyers, and press",
    },
    {
      id: "9",
      name: "Fashion Photography Workshop",
      date: "August 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Studio 67, Los Angeles",
      description:
        "Hands-on workshop covering product photography, lookbook creation, and visual storytelling for fashion brands. Bring your camera!",
      attendees: "Designers, brand owners, and marketing professionals",
    },
  ],
  "September 2025": [
    {
      id: "10",
      name: "Fashion Week Networking Event",
      date: "September 10, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "Skyline Lounge, New York",
      description:
        "Exclusive networking event during Fashion Week, connecting independent designers with boutique buyers in a relaxed setting.",
      attendees: "Platform members only - designers and boutique representatives",
    },
    {
      id: "11",
      name: "Sustainable Fashion Summit",
      date: "September 22-23, 2025",
      time: "9:00 AM - 5:00 PM daily",
      location: "Green Innovation Center, Seattle",
      description:
        "Two-day summit focused on sustainability in the fashion industry, featuring keynote speakers, panel discussions, and workshops.",
      attendees: "Industry professionals committed to sustainable practices",
    },
  ],
  "October 2025": [
    {
      id: "12",
      name: "Holiday Season Preparation Workshop",
      date: "October 5, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Business Development Center, Chicago",
      description:
        "Strategic workshop helping boutiques and designers prepare for the holiday shopping season. Topics include inventory planning, promotions, and customer experience.",
      attendees: "Boutique owners, designers, and retail managers",
    },
    {
      id: "13",
      name: "Fashion Tech Innovation Showcase",
      date: "October 17, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Tech Hub, San Francisco",
      description:
        "Exhibition of cutting-edge technologies transforming the fashion industry, from virtual fitting rooms to blockchain supply chain solutions.",
      attendees: "Fashion professionals, tech enthusiasts, and investors",
    },
  ],
  "November 2025": [
    {
      id: "14",
      name: "Boutique & Designer Matchmaking Event",
      date: "November 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Metropolitan Pavilion, New York",
      description:
        "Curated matchmaking event connecting boutiques with designers based on style, price point, and target customer. Pre-scheduled meetings throughout the day.",
      attendees: "Pre-registered boutiques and designers",
    },
    {
      id: "15",
      name: "Visual Merchandising Masterclass",
      date: "November 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Retail Design Institute, Dallas",
      description:
        "Expert-led workshop on creating compelling visual displays, store layouts, and product presentations to drive sales.",
      attendees: "Boutique owners, retail staff, and visual merchandisers",
    },
  ],
  "December 2025": [
    {
      id: "16",
      name: "End-of-Year Industry Celebration",
      date: "December 12, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom, Los Angeles",
      description:
        "Annual gala celebrating achievements in the fashion industry, with awards, entertainment, and networking opportunities.",
      attendees: "All platform members and industry partners",
    },
    {
      id: "17",
      name: "2026 Trend Forecast Presentation",
      date: "December 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Fashion Institute, New York",
      description:
        "Exclusive presentation on predicted trends, colors, and themes for 2026, helping designers and boutiques plan ahead.",
      attendees: "Designers, buyers, and trend forecasters",
    },
  ],
  "January 2026": [
    {
      id: "18",
      name: "New Year Kickoff: Business Planning Workshop",
      date: "January 10, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Business Center, Chicago",
      description:
        "Strategic workshop to help fashion entrepreneurs set goals, create action plans, and prepare for a successful year ahead.",
      attendees: "Designers, boutique owners, and fashion entrepreneurs",
    },
    {
      id: "19",
      name: "Spring/Summer Preview Event",
      date: "January 22, 2026",
      time: "6:00 PM - 9:00 PM",
      location: "Design District Gallery, Miami",
      description:
        "First look at Spring/Summer collections from our platform's designers, with early ordering opportunities for boutiques.",
      attendees: "Boutique buyers, press, and industry professionals",
    },
  ],
}

export function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const months = Object.keys(eventsByMonth)
  const [currentMonth, setCurrentMonth] = useState(months[0]) // Default to May 2025
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right, 0 for initial

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsDialogOpen(true)
  }

  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setDirection(-1)
      const newIndex = currentMonthIndex - 1
      setCurrentMonthIndex(newIndex)
      setCurrentMonth(months[newIndex])
    }
  }

  const goToNextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setDirection(1)
      const newIndex = currentMonthIndex + 1
      setCurrentMonthIndex(newIndex)
      setCurrentMonth(months[newIndex])
    }
  }

  // Reset direction after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(0)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentMonth])

  return (
    <div className="space-y-6">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousMonth}
          disabled={currentMonthIndex === 0}
          className="transition-opacity duration-200"
          style={{ opacity: currentMonthIndex === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <h2 className="text-2xl font-bold">{currentMonth}</h2>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNextMonth}
          disabled={currentMonthIndex === months.length - 1}
          className="transition-opacity duration-200"
          style={{ opacity: currentMonthIndex === months.length - 1 ? 0.5 : 1 }}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Month Tabs - Smaller and more subtle */}
      <div className="overflow-x-auto pb-2">
        <Tabs
          value={currentMonth}
          onValueChange={(value) => {
            const newIndex = months.indexOf(value)
            setDirection(newIndex > currentMonthIndex ? 1 : -1)
            setCurrentMonthIndex(newIndex)
            setCurrentMonth(value)
          }}
        >
          <TabsList className="inline-flex w-full justify-start space-x-1 overflow-x-auto pb-1">
            {months.map((month) => (
              <TabsTrigger
                key={month}
                value={month}
                className={`px-3 py-1.5 text-sm transition-all duration-200 ${
                  month === currentMonth ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {month.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Events Content with Animation */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentMonth}
            initial={{
              opacity: 0,
              x: direction === 1 ? 300 : direction === -1 ? -300 : 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            exit={{
              opacity: 0,
              x: direction === 1 ? -300 : direction === -1 ? 300 : 0,
              transition: { duration: 0.2 },
            }}
            className="space-y-4"
          >
            {eventsByMonth[currentMonth].length > 0 ? (
              eventsByMonth[currentMonth].map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: (Number.parseInt(event.id) * 0.1) % 0.5,
                    },
                  }}
                >
                  <Card className="hover:shadow-md transition-all duration-300 border-l-4 border-l-black">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                          <div className="flex items-center text-gray-600 mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-1">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleEventClick(event)}
                          className="transition-transform hover:scale-105"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p>No events scheduled for this month.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedEvent && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedEvent.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-0.5 text-black" />
                  <div>
                    <h4 className="font-semibold">Date & Time</h4>
                    <p>{selectedEvent.date}</p>
                    <p>{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-black" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>{selectedEvent.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Description</h4>
                    <p>{selectedEvent.description}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-0.5 text-black" />
                  <div>
                    <h4 className="font-semibold">Who Should Attend</h4>
                    <p>{selectedEvent.attendees}</p>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={() => setIsDialogOpen(false)} className="transition-transform hover:scale-105">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
