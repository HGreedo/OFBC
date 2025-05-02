import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CommunityNewsPage() {
  const newsItems = [
    {
      title: "Local Boutique 'Chic Styles' Launches Summer Collection",
      description: "Exciting new summer styles hitting the shelves next week.",
      date: "July 1, 2025",
      link: "/resources/community-news/summer-collection-launch",
    },
    {
      title: "Fashion Designer Workshop Series Announced",
      description: "Learn from industry experts in our upcoming workshop series.",
      date: "June 25, 2025",
      link: "/resources/community-news/designer-workshop-series",
    },
    {
      title: "Annual Fashion Show Fundraiser",
      description: "Join us for a night of fashion and philanthropy.",
      date: "August 15, 2025",
      link: "/resources/community-news/annual-fashion-show-fundraiser",
    },
    {
      title: "New Sustainable Fashion Boutique Opens Downtown",
      description: "Eco-friendly fashion finds a new home in our community.",
      date: "June 10, 2025",
      link: "/resources/community-news/sustainable-boutique-opening",
    },
    {
      title: "Local Designer Collaboration Announcement",
      description: "Two of our community's favorite designers join forces.",
      date: "July 5, 2025",
      link: "/resources/community-news/designer-collaboration",
    },
    {
      title: "Fashion Tech Startup Showcase",
      description: "Explore the future of fashion with local tech innovators.",
      date: "July 20, 2025",
      link: "/resources/community-news/fashion-tech-showcase",
    },
    {
      title: "Community Upcycling Challenge",
      description: "Turn old clothes into new fashion statements in our month-long challenge.",
      date: "August 1, 2025",
      link: "/resources/community-news/upcycling-challenge",
    },
    {
      title: "Virtual Fashion Week Announced",
      description: "Experience the latest trends from the comfort of your home.",
      date: "September 1, 2025",
      link: "/resources/community-news/virtual-fashion-week",
    },
  ]

  return (
    <div className="space-y-12">
      <header className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Community News</h1>
          <p className="text-xl">
            Stay up-to-date with the latest happenings in our vibrant fashion community. From local events and designer
            spotlights to collaborative projects and industry meetups, this is your source for all the exciting
            developments in our fashion ecosystem.
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>
            </CardContent>
            <CardFooter>
              <Link href={item.link} passHref>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
