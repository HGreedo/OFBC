import { InspirationSection } from "@/components/inspiration-section"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Lightbulb, Newspaper, Globe } from "lucide-react"

export default function ResourcesPage() {
  const communityNews = [
    {
      title: "Summer Collection Launch",
      excerpt: "Designer Aiden Patel unveils sustainable summer line",
      date: "2023-06-15",
      link: "/news/1",
    },
    {
      title: "New Messaging Feature",
      excerpt: "Connect directly with boutiques and designers",
      date: "2023-06-10",
      link: "/news/2",
    },
    {
      title: "Fashion for a Cause",
      excerpt: "Local designers unite for charity fashion show",
      date: "2023-06-05",
      link: "/news/3",
    },
  ]

  const industryNews = [
    {
      title: "Luxotica Acquires Sunglasses Co",
      excerpt: "Major move in the eyewear industry",
      date: "2023-06-14",
      link: "/news/4",
    },
    {
      title: "Nike's Sustainable Initiative",
      excerpt: "Sportswear giant commits to eco-friendly materials",
      date: "2023-06-12",
      link: "/news/5",
    },
    {
      title: "Vogue's September Issue",
      excerpt: "Celebrating diversity in fashion",
      date: "2023-06-08",
      link: "/news/6",
    },
  ]

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>

      {/* Events Section - Added as the first section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Calendar className="h-6 w-6 mr-2" />
            <h2 className="text-3xl font-bold">Events</h2>
          </div>
          <Link href="/resources/events">
            <Button>View All Events</Button>
          </Link>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Upcoming Fashion Events</h3>
              <p className="mb-4">
                Discover fashion events happening around the world. Connect with designers, boutiques, and industry
                professionals at trade shows, workshops, and networking events.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/resources/events">
                  <Button variant="outline" className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Explore 3D Globe
                  </Button>
                </Link>
                <Link href="/resources/events?tab=calendar">
                  <Button variant="outline" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Calendar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Paris Fashion Week</h4>
                <p className="text-sm text-gray-600">October 5-12, 2025 • Paris, France</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Sustainable Fashion Summit</h4>
                <p className="text-sm text-gray-600">September 22-23, 2025 • Seattle, USA</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Emerging Designers Showcase</h4>
                <p className="text-sm text-gray-600">June 18, 2025 • Los Angeles, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center mb-6">
          <Lightbulb className="h-6 w-6 mr-2" />
          <h2 className="text-3xl font-bold">Inspiration Corner</h2>
        </div>
        <InspirationSection />
      </section>

      <section>
        <div className="flex items-center mb-6">
          <Newspaper className="h-6 w-6 mr-2" />
          <h2 className="text-3xl font-bold">Community News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center mb-6">
          <Newspaper className="h-6 w-6 mr-2" />
          <h2 className="text-3xl font-bold">Industry News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>
    </div>
  )
}
