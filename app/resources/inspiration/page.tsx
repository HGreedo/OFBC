import { InspirationSection } from "@/components/inspiration-section"

export default function InspirationPage() {
  const inspirationItems = [
    {
      title: "Sustainable Fabrics Revolution",
      content: "Explore innovative eco-friendly materials reshaping the fashion industry.",
      image: "/placeholder.svg?height=200&width=300&text=Sustainable+Fabrics",
      slug: "sustainable-fabrics-revolution",
    },
    {
      title: "Retro Futurism in Fashion",
      content: "Discover how designers are blending vintage aesthetics with futuristic elements.",
      image: "/placeholder.svg?height=200&width=300&text=Retro+Futurism",
      slug: "retro-futurism-in-fashion",
    },
    {
      title: "Cultural Fusion Couture",
      content: "See how global cultural influences are creating unique fashion statements.",
      image: "/placeholder.svg?height=200&width=300&text=Cultural+Fusion",
      slug: "cultural-fusion-couture",
    },
    {
      title: "Tech-Integrated Apparel",
      content: "Learn about the latest in wearable technology and smart fabrics.",
      image: "/placeholder.svg?height=200&width=300&text=Tech+Apparel",
      slug: "tech-integrated-apparel",
    },
    {
      title: "Minimalist Luxury",
      content: "Explore the growing trend of understated elegance in high-end fashion.",
      image: "/placeholder.svg?height=200&width=300&text=Minimalist+Luxury",
      slug: "minimalist-luxury",
    },
    {
      title: "Upcycled Fashion Art",
      content: "Get inspired by designers turning waste into wearable masterpieces.",
      image: "/placeholder.svg?height=200&width=300&text=Upcycled+Fashion",
      slug: "upcycled-fashion-art",
    },
  ]

  return (
    <div className="space-y-12">
      <header className="bg-black text-white py-12">
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
