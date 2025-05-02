import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function AboutPage() {
  const latestReleases = [
    {
      version: "3.3.0",
      date: "April 28, 2025",
      features: [
        "Updated site color scheme with black text accents",
        "Fixed navigation links for blog posts",
        "Added new community and industry news articles",
        "Improved overall accessibility and readability",
      ],
    },
    {
      version: "3.2.5",
      date: "April 15, 2025",
      features: [
        "Enhanced blog post layouts",
        "Fixed broken links throughout the site",
        "Improved mobile responsiveness for news sections",
      ],
    },
    {
      version: "3.2.0",
      date: "April 3, 2025",
      features: ["Added messaging system", "Improved search functionality", "Bug fixes and performance improvements"],
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
            Fashion Buyer's Club is a wholesale platform built for independent fashion creatives and boutiques. We
            connect designers, artists, and craftspeople directly with buyers—no middlemen, no trade shows—just
            meaningful, curated partnerships. With built-in AI tools for trend forecasting, a vibrant marketplace, and
            streamlined communications, we empower creatives to scale their businesses and boutiques to discover fresh,
            original talent.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest Version</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Current Version: 3.3</p>
          <p>Release Date: April 28, 2025</p>
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
