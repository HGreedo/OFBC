import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DesignerGallery } from "@/components/designer-gallery"

export default function Designers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Fashion Designers</h1>
        <div className="space-x-4">
          <Link href="/designers/submit">
            <Button>Submit Your Designer Profile</Button>
          </Link>
          <Link href="/messages">
            <Button variant="outline">Message Center</Button>
          </Link>
        </div>
      </div>
      <p className="text-lg">
        Discover talented fashion designers from our creative community. Use the filters to find designers by state,
        specialty, or name.
      </p>
      <DesignerGallery />
    </div>
  )
}
