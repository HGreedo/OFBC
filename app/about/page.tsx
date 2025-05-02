import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function AboutPage() {
  const latestReleases = [
    {
      version: "3.4.0",
      date: "May 2, 2025",
      features: [
        "Fixed navigation issues for improved reliability",
        "Enhanced navbar with better dropdown functionality",
        "Updated version history with comprehensive release notes",
        "Improved mobile menu interactions and animations",
        "Fixed styling issues throughout the platform",
      ],
    },
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
    {
      version: "3.1.0",
      date: "March 25, 2025",
      features: [
        "Implemented smooth page transitions throughout the site",
        "Added animated cards for featured content",
        "Enhanced event calendar with smooth month transitions",
        "Improved mobile menu animations and interactions",
        "Fixed several UI bugs in the designer profiles",
      ],
    },
    {
      version: "3.0.5",
      date: "March 12, 2025",
      features: [
        "Fixed critical navigation issues in the main menu",
        "Improved dropdown menu accessibility",
        "Enhanced form validation for boutique and designer submissions",
        "Optimized image loading for better performance",
      ],
    },
    {
      version: "3.0.0",
      date: "February 28, 2025",
      features: [
        "Major platform redesign with new visual identity",
        "Introduced new messaging center for direct communication",
        "Added comprehensive event calendar feature",
        "Implemented advanced filtering for boutique and designer galleries",
        "Launched new inspiration corner with curated content",
        "Completely rebuilt profile pages with enhanced information display",
      ],
    },
    {
      version: "2.9.0",
      date: "February 15, 2025",
      features: [
        "Added initial version of the event calendar",
        "Implemented image gallery upload functionality",
        "Enhanced user profiles with more detailed information",
        "Improved mobile responsiveness across all pages",
        "Fixed several backend performance issues",
      ],
    },
    {
      version: "2.8.5",
      date: "February 3, 2025",
      features: [
        "Security updates and vulnerability patches",
        "Improved form validation for user submissions",
        "Enhanced search functionality with better filtering options",
        "Fixed bugs in the authentication system",
        "Updated dependencies to latest versions",
      ],
    },
    {
      version: "2.8.0",
      date: "January 25, 2025",
      features: [
        "Launched designer and boutique galleries",
        "Added filtering and search functionality for galleries",
        "Implemented initial profile pages for designers and boutiques",
        "Created submission forms for new profiles",
        "Added basic messaging functionality between users",
      ],
    },
    {
      version: "2.7.0",
      date: "January 10, 2025",
      features: [
        "Redesigned homepage with featured sections",
        "Added news card components for community and industry updates",
        "Implemented inspiration section on homepage",
        "Created initial resources pages structure",
        "Improved overall site navigation and information architecture",
      ],
    },
    {
      version: "2.6.0",
      date: "December 20, 2024",
      features: [
        "Initial platform launch with basic functionality",
        "Created core site structure and navigation",
        "Implemented responsive design for all screen sizes",
        "Set up authentication system for users",
        "Established brand identity and visual design system",
      ],
    },
    {
      version: "2.5.0",
      date: "December 5, 2024",
      features: [
        "Beta testing phase with limited user access",
        "Implemented feedback system for early users",
        "Fixed critical bugs identified during testing",
        "Optimized performance for production environment",
        "Finalized initial feature set for public launch",
      ],
    },
    {
      version: "2.0.0",
      date: "November 15, 2024",
      features: [
        "Complete platform rebuild using Next.js and modern web technologies",
        "Established new database schema and API architecture",
        "Created component library with shadcn/ui",
        "Implemented responsive design system with Tailwind CSS",
        "Set up development and staging environments",
      ],
    },
    {
      version: "1.0.0",
      date: "October 1, 2024",
      features: [
        "Initial concept development and planning",
        "Market research and competitor analysis",
        "User experience design and wireframing",
        "Technical architecture planning",
        "Project scope definition and roadmap creation",
      ],
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
          <p>Current Version: 3.4.0</p>
          <p>Release Date: May 2, 2025</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Version History</CardTitle>
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
