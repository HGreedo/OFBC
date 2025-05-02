import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  link: string
}

export function NewsCard({ title, excerpt, date, link }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{date}</span>
          <Link href={link} className="text-sm text-primary hover:underline">
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
