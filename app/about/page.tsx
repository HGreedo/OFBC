import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function AboutPage() {
  const latestReleases = [
    {
      version: "1.2.0",
      date: "2023-06-15",
      features: ["Added messaging system", "Improved search functionality", "Bug fixes and performance improvements"],
    },
    {
      version: "1.1.5",
      date: "2023-05-20",
      features: ["Enhanced user profiles", "New designer submission form", "Minor UI tweaks"],
    },
    {
      version: "1.1.0",
      date: "2023-04-10",
      features: ["Introduced boutique profiles", "Added event calendar", "Improved mobile responsiveness"],
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About FashionBuyersClub</h1>

      <Card>
        <CardHeader>
          <CardTitle>Platform Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            FashionBuyersClub is a cutting-edge platform designed to connect fashion boutiques with small-scale
            designers, creating a vibrant community for fashion enthusiasts. Our platform facilitates seamless
            collaboration, enabling boutiques to discover unique designs and helping designers showcase their creations
            to a wider audience.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest Version</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Current Version: 1.2.0</p>
          <p>Release Date: June 15, 2023</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest Releases</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {latestReleases.map((release, index) => (
              <li key={index}>
                <h3 className="font-semibold">
                  Version {release.version} - {release.date}
                </h3>
                <ul className="list-disc list-inside">
                  {release.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <h4 className="text-xl font-semibold mb-4">Want to reach out? Fill out the form details below!</h4>
      <ContactForm />
    </div>
  )
}
