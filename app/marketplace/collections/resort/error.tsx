"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResortCollectionError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Resort Collection page error:", error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We're sorry, but we couldn't load the Resort Collection page. Please try again or explore our other
          collections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Link href="/marketplace/collections">
            <Button variant="outline">View all collections</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
