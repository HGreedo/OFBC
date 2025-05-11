"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  link: string
}

export function NewsCard({ title, excerpt, date, link }: NewsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-shrink-0 pb-2">
          <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between flex-grow pt-2">
          <p className="text-sm text-gray-600 mb-2 line-clamp-3">{excerpt}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-xs text-gray-500">{date}</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={link} className="text-sm text-primary hover:underline">
                Read more
              </Link>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
