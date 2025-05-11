import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, the inspiration article you're looking for doesn't exist.</p>
      <Link href="/resources/inspiration">
        <Button>Return to Inspiration Corner</Button>
      </Link>
    </div>
  )
}
