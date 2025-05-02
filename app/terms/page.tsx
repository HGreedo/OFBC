import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>

      <Card>
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            By accessing and using FashionBuyersClub, you agree to be bound by these Terms and Conditions. If you do not
            agree to these terms, please do not use our platform.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Use of the Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            You agree to use FashionBuyersClub only for lawful purposes and in a way that does not infringe the rights
            of, restrict or inhibit anyone else's use and enjoyment of the platform.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            All content on FashionBuyersClub, including but not limited to text, graphics, logos, and images, is the
            property of FashionBuyersClub or its content suppliers and is protected by international copyright laws.
          </p>
        </CardContent>
      </Card>

      {/* Add more sections as needed */}
    </div>
  )
}
