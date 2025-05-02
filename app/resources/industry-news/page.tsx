import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IndustryNewsPage() {
  const newsItems = [
    {
      title: "Luxotica Acquires Sunglasses Co. in Major Industry Shakeup",
      description: "Eyewear giant expands its portfolio with acquisition of popular sustainable brand.",
      date: "June 28, 2025",
      link: "/resources/industry-news/luxotica-acquires-sunglasses-co",
    },
    {
      title: "Sustainable Fashion Report 2025 Released",
      description: "New data shows significant growth in eco-friendly fashion consumption.",
      date: "June 15, 2025",
      link: "/resources/industry-news/sustainable-fashion-report-2025",
    },
    {
      title: "AI in Fashion: The Future of Design",
      description: "How artificial intelligence is revolutionizing the fashion industry.",
      date: "July 3, 2025",
      link: "/resources/industry-news/ai-in-fashion-design",
    },
    {
      title: "Global Fashion Supply Chain Disruptions Continue",
      description: "Industry leaders seek solutions amidst ongoing logistical challenges.",
      date: "June 20, 2025",
      link: "/resources/industry-news/supply-chain-disruptions",
    },
    {
      title: "New Regulations on Fashion Sustainability Claims",
      description: "Governments crack down on greenwashing in the fashion industry.",
      date: "July 10, 2025",
      link: "/resources/industry-news/sustainability-regulations",
    },
    {
      title: "Fashion Week Goes Digital: A New Era Begins",
      description: "Major fashion capitals embrace virtual runways and digital showrooms.",
      date: "August 1, 2025",
      link: "/resources/industry-news/digital-fashion-week",
    },
    {
      title: "Luxury Market Shows Strong Recovery Post-Pandemic",
      description: "High-end fashion brands report record sales as consumer confidence returns.",
      date: "July 25, 2025",
      link: "/resources/industry-news/luxury-market-recovery",
    },
    {
      title: "Textile Innovation: Smart Fabrics Take Center Stage",
      description: "New developments in tech-integrated textiles promise to revolutionize wearables.",
      date: "June 5, 2025",
      link: "/resources/industry-news/smart-fabrics-innovation",
    },
    {
      title: "Fashion Retail: The Rise of Experiential Shopping",
      description: "Brick-and-mortar stores evolve to offer unique, immersive experiences.",
      date: "July 15, 2025",
      link: "/resources/industry-news/experiential-shopping-trend",
    },
  ]

  return (
    <div className="space-y-12">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Industry News</h1>
          <p className="text-xl">
            Stay informed about the latest trends, innovations, and developments shaping the global fashion industry.
            From market analyses and technological advancements to sustainability initiatives and policy changes, our
            Industry News section keeps you at the forefront of fashion's evolving landscape.
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
