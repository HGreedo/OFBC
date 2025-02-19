import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BoutiqueGallery } from "@/components/boutique-gallery"

export default function Boutiques() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Boutiques</h1>
        <div className="space-x-4">
          <Link href="/boutiques/submit">
            <Button>Submit Your Boutique</Button>
          </Link>
          <Link href="/messages">
            <Button variant="outline">Message Center</Button>
          </Link>
        </div>
      </div>
      <p className="text-lg">
        Discover unique boutiques from our growing community. Use the filters to find boutiques by state, style, or
        name.
      </p>
      <BoutiqueGallery />
    </div>
  )
}

