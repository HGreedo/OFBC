import { Card, CardContent } from "@/components/ui/card"

export function DynamicHeader() {
  return (
    <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-8">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to FashionBuyersClub</h1>
        <p className="text-lg mb-4">
          FashionBuyersClub is a free platform designed to foster relationships and help you plan your next collection.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Connect with boutiques and designers</li>
          <li>Discover the latest trends and inspirations</li>
          <li>Plan and showcase your collections</li>
          <li>Collaborate with industry professionals</li>
        </ul>
      </CardContent>
    </Card>
  )
}
