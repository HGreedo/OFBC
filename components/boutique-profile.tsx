import { ProfileHeader } from "@/components/profile-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface BoutiqueProfileProps {
  name: string
  image: string
  location: string
  tags: string[]
  summary: string
  description: string
  featuredProducts: Array<{ name: string; image: string; description: string }>
  services: string[]
  upcomingEvents: Array<{ name: string; date: string }>
  website: string
  followerCount: number
}

export function BoutiqueProfile({
  name,
  image,
  location,
  tags,
  summary,
  description,
  featuredProducts,
  services,
  upcomingEvents,
  website,
  followerCount,
}: BoutiqueProfileProps) {
  return (
    <div className="space-y-6">
      <ProfileHeader
        name={name}
        image={image}
        location={location}
        tags={tags}
        type="boutique"
        followerCount={followerCount}
      />

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{summary}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="about" className="w-full">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="products">Featured Products & Services</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About {name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{description}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Featured Products & Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="rounded-md mx-auto"
                    />
                    <p className="mt-2 font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Services</h3>
                <ul className="list-disc list-inside">
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {upcomingEvents.map((event, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{event.name}</span>
                    <span className="text-gray-500">{event.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Website</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">
              Visit {name}'s Website
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
