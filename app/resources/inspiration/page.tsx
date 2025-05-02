import { InspirationSection } from "@/components/inspiration-section"

export default function InspirationPage() {
  const inspirationItems = [
    {
      title: "Sustainable Fabrics Revolution",
      description: "Explore innovative eco-friendly materials reshaping the fashion industry.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "/resources/inspiration/sustainable-fabrics-revolution",
    },
    {
      title: "Retro Futurism in Fashion",
      description: "Discover how designers are blending vintage aesthetics with futuristic elements.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cultural Fusion Couture",
      description: "See how global cultural influences are creating unique fashion statements.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Tech-Integrated Apparel",
      description: "Learn about the latest in wearable technology and smart fabrics.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Minimalist Luxury",
      description: "Explore the growing trend of understated elegance in high-end fashion.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Upcycled Fashion Art",
      description: "Get inspired by designers turning waste into wearable masterpieces.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="space-y-12">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Inspiration Corner</h1>
          <p className="text-xl">
            Welcome to the Inspiration Corner, a curated space where fashion meets creativity. Here, we showcase
            innovative designs, emerging trends, and unique collaborations that are shaping the future of fashion.
            Whether you're a designer seeking fresh ideas or a boutique owner looking for the next big thing, let this
            be your source of inspiration and discovery in the ever-evolving world of style.
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <InspirationSection items={inspirationItems} />
      </div>
    </div>
  )
}
