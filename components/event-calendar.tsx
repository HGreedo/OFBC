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

// Helper function to create Google Calendar URL
const createGoogleCalendarUrl = (event: Event) => {
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

// Update the component props to include initialSelectedEventId and eventsByMonth
interface EventCalendarProps {
  initialSelectedEventId?: string | null
  eventsByMonth?: Record<string, Event[]>
}

export function EventCalendar({ initialSelectedEventId = null, eventsByMonth = {} }: EventCalendarProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const months = Object.keys(eventsByMonth)
  const [currentMonth, setCurrentMonth] = useState(months[0] || "May 2025") // Default to May 2025
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

  // Add useEffect to handle initialSelectedEventId
  useEffect(() => {
    if (initialSelectedEventId) {
      // Find the event
      for (const [month, events] of Object.entries(eventsByMonth)) {
        const event = events.find((event) => event.id === initialSelectedEventId)

        if (event) {
          // Find which month the event is in
          const newIndex = months.indexOf(month)
          if (newIndex >= 0) {
            setDirection(newIndex > currentMonthIndex ? 1 : -1)
            setCurrentMonthIndex(newIndex)
            setCurrentMonth(month)
          }

          // Open the event details
          setTimeout(() => {
            setSelectedEvent(event)
            setIsDialogOpen(true)
          }, 500)
          break
        }
      }
    }
  }, [initialSelectedEventId, eventsByMonth, months, currentMonthIndex])

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
            {eventsByMonth[currentMonth]?.length > 0 ? (
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

                <div className="flex justify-between mt-6">
                  <Button
                    className="bg-[#ff943d] hover:bg-[#e87d2d] text-black font-bold transition-transform hover:scale-105"
                    onClick={() => {
                      // Open Google Calendar with event details
                      const calendarUrl = createGoogleCalendarUrl(selectedEvent)
                      window.open(calendarUrl, "_blank")
                    }}
                  >
                    Add to Calendar
                  </Button>
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
