"use client"

import { FeaturedCard } from "@/components/featured-card"
import { NewsCard } from "@/components/news-card"
import { DynamicHeader } from "@/components/dynamic-header"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  // Enhanced placeholder data
  const featuredBoutiques = [
    {
      name: "Chic Boutique",
      description: "Modern fashion for the urban professional",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/boutiques/1",
      location: "New York, NY",
      tags: ["Professional", "Modern", "Urban"],
    },
    {
      name: "Vintage Vogue",
      description: "Timeless classics from every era",
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/boutiques/2",
      location: "Los Angeles, CA",
      tags: ["Vintage", "Retro", "Timeless"],
    },
    {
      name: "Eco Elegance",
      description: "Sustainable fashion for a better tomorrow",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/boutiques/3",
      location: "Portland, OR",
      tags: ["Sustainable", "Eco-friendly", "Organic"],
    },
  ]

  const featuredDesigners = [
    {
      name: "Emma Thompson",
      description: "Innovative evening wear designer",
      image:
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&q=80",
      link: "/designers/1",
      location: "Paris, France",
      tags: ["Evening Wear", "Couture", "Innovative"],
    },
    {
      name: "Aisha Okafor",
      description: "Contemporary African fashion pioneer",
      image:
        "https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/designers/6",
      location: "Lagos, Nigeria",
      tags: ["Contemporary African", "Sustainable", "Artisanal"],
    },
    {
      name: "Malik Johnson",
      description: "Redefining luxury menswear",
      image:
        "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
      link: "/designers/4",
      location: "New York, USA",
      tags: ["Luxury Menswear", "Tailoring", "Heritage"],
    },
  ]

  const communityNews = [
    {
      title: "Summer Collection Launch",
      excerpt: "Designer Aiden Patel unveils sustainable summer line",
      date: "2023-06-15",
      link: "/resources/community-news/summer-collection-launch",
    },
    {
      title: "New Messaging Feature",
      excerpt: "Connect directly with boutiques and designers",
      date: "2023-06-10",
      link: "/resources/community-news/designer-workshop-series",
    },
    {
      title: "Fashion for a Cause",
      excerpt: "Local designers unite for charity fashion show",
      date: "2023-06-05",
      link: "/resources/community-news/annual-fashion-show-fundraiser",
    },
  ]

  const industryNews = [
    {
      title: "Luxotica Acquires Sunglasses Co",
      excerpt: "Major move in the eyewear industry",
      date: "2023-06-14",
      link: "/resources/industry-news/luxotica-acquires-sunglasses-co",
    },
    {
      title: "Nike's Sustainable Initiative",
      excerpt: "Sportswear giant commits to eco-friendly materials",
      date: "2023-06-12",
      link: "/resources/industry-news/sustainable-fashion-report-2025",
    },
    {
      title: "Vogue's September Issue",
      excerpt: "Celebrating diversity in fashion",
      date: "2023-06-08",
      link: "/resources/industry-news/ai-in-fashion-design",
    },
  ]

  // Inspiration items with links to their blog posts
  const inspirationItems = [
    {
      title: "Sustainable Fabrics Revolution",
      content: "Explore innovative eco-friendly materials reshaping the fashion industry.",
      image: "/placeholder.svg?height=200&width=300&text=Sustainable+Fabrics",
      link: "/resources/inspiration/sustainable-fabrics-revolution",
    },
    {
      title: "Retro Futurism in Fashion",
      content: "Discover how designers are blending vintage aesthetics with futuristic elements.",
      image: "/placeholder.svg?height=200&width=300&text=Retro+Futurism",
      link: "/resources/inspiration/retro-futurism-in-fashion",
    },
    {
      title: "Cultural Fusion Couture",
      content: "See how global cultural influences are creating unique fashion statements.",
      image: "/placeholder.svg?height=200&width=300&text=Cultural+Fusion",
      link: "/resources/inspiration/cultural-fusion-couture",
    },
    {
      title: "Tech-Integrated Apparel",
      content: "Learn about the latest in wearable technology and smart fabrics.",
      image: "/placeholder.svg?height=200&width=300&text=Tech+Apparel",
      link: "/resources/inspiration/tech-integrated-apparel",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <motion.div className="space-y-12 py-8" initial="hidden" animate="show" variants={container}>
      <motion.div variants={item}>
        <DynamicHeader />
      </motion.div>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Featured Boutiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBoutiques.map((boutique, index) => (
            <motion.div key={index} variants={item}>
              <FeaturedCard {...boutique} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Featured Designers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDesigners.map((designer, index) => (
            <motion.div key={index} variants={item}>
              <FeaturedCard {...designer} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Inspiration Corner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-[250px]" // Fixed height for all cards
            >
              <Link href={item.link} className="block h-full">
                <Card className="rounded-lg border bg-card text-card-foreground h-full cursor-pointer hover:shadow-md transition-shadow flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center space-x-4 flex-grow overflow-hidden">
                    <div className="flex-shrink-0 w-24 h-24 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <p className="line-clamp-4 text-sm">{item.content}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Community News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityNews.map((news, index) => (
            <motion.div key={index} variants={item} className="h-[200px]">
              <NewsCard {...news} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Industry News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryNews.map((news, index) => (
            <motion.div key={index} variants={item} className="h-[200px]">
              <NewsCard {...news} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
