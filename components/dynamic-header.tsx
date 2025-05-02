import { Card, CardContent } from "@/components/ui/card"

export function DynamicHeader() {
  return (
    <Card className="mb-8 border">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold mb-4">
          Fashion Buyer's Club:
          <br />
          <span className="text-black">Democratizing the Wholesale Fashion Industry</span>
        </h1>
        <p className="text-lg mb-4">
          Fashion Buyer's Club is a groundbreaking platform connecting small-scale designers, artists, and craftspeople
          with independent boutiques across the U.S. and eventually worldwide. We eliminate middlemen by fostering
          direct B2B connections, helping creatives scale their operations, plan wholesale logistics, and transform
          side-hustles into sustainable careers.
        </p>
        <p className="text-lg mb-4">
          Our vision is to revolutionize how independent fashion creators reach their market, providing the tools and
          infrastructure they need to thrive in an industry traditionally dominated by larger players. Join us in
          creating a more equitable fashion ecosystem.
        </p>
      </CardContent>
    </Card>
  )
}
