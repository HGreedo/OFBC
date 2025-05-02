import { EventCalendar } from "@/components/event-calendar"

export default function EventsPage() {
  return (
    <div className="space-y-12">
      <header className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl">
            Stay connected with the fashion community through our curated calendar of industry events, workshops, trade
            shows, and networking opportunities. Whether you're looking to showcase your designs, discover new talent,
            or expand your professional network, our Events page is your guide to what's happening in the fashion world.
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <EventCalendar />
      </div>
    </div>
  )
}
