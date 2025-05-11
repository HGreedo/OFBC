"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ArtisanalCollectionError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-4 rounded-full bg-red-100 p-3">
        <AlertCircle className="h-6 w-6 text-red-600" />
      </div>
      <h2 className="mb-2 text-2xl font-bold">Something went wrong</h2>
      <p className="mb-6 text-gray-600">We couldn't load the artisanal collection. Please try again later.</p>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <Button onClick={reset}>Try again</Button>
        <Button variant="outline" asChild>
          <Link href="/marketplace/collections">Back to Collections</Link>
        </Button>
      </div>
    </div>
  )
}
