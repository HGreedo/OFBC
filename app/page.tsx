"use client"

import { FeaturedCard } from "@/components/featured-card"
import { NewsCard } from "@/components/news-card"
import { DynamicHeader } from "@/components/dynamic-header"
import { InspirationSection } from "@/components/inspiration-section"
import { SupabaseDebug } from "@/components/supabase-debug"
import { motion } from "framer-motion"

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
      name: "Liam Chen",
      description: "Streetwear with an edge",
      image:
        "https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/designers/2",
      location: "Tokyo, Japan",
      tags: ["Streetwear", "Urban", "Edgy"],
    },
    {
      name: "Sofia Rodriguez",
      description: "Colorful and bold swimwear",
      image:
        "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
      link: "/designers/3",
      location: "Rio de Janeiro, Brazil",
      tags: ["Swimwear", "Colorful", "Bold"],
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
      {/* Add the Supabase debug component */}
      <SupabaseDebug />

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
        <InspirationSection />
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Community News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityNews.map((news, index) => (
            <motion.div key={index} variants={item}>
              <NewsCard {...news} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-3xl font-bold mb-6">Industry News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryNews.map((news, index) => (
            <motion.div key={index} variants={item}>
              <NewsCard {...news} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
