import { ProfileHeader } from "@/components/profile-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface DesignerProfileProps {
  name: string
  image: string
  location: string
  tags: string[]
  summary: string
  bio: string
  collections: Array<{ name: string; image: string; description: string }>
  services: string[]
  collaborations: Array<{ name: string; description: string }>
  website: string
  followerCount: number
}

export function DesignerProfile({
  name,
  image,
  location,
  tags,
  summary,
  bio,
  collections,
  services,
  collaborations,
  website,
  followerCount,
}: DesignerProfileProps) {
  return (
    <div className="space-y-6">
      <ProfileHeader
        name={name}
        image={image}
        location={location}
        tags={tags}
        type="designer"
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
          <TabsTrigger value="collections">Collections & Services</TabsTrigger>
          <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About {name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{bio}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="collections">
          <Card>
            <CardHeader>
              <CardTitle>Collections & Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {collections.map((collection, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      width={200}
                      height={200}
                      className="rounded-md mx-auto"
                    />
                    <p className="mt-2 font-medium">{collection.name}</p>
                    <p className="text-sm text-gray-600">{collection.description}</p>
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
        <TabsContent value="collaborations">
          <Card>
            <CardHeader>
              <CardTitle>Collaborations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {collaborations.map((collab, index) => (
                  <li key={index}>
                    <h3 className="font-semibold">{collab.name}</h3>
                    <p className="text-gray-600">{collab.description}</p>
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
