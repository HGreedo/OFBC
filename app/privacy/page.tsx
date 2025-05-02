import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <Card>
        <CardHeader>
          <CardTitle>1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We collect information you provide directly to us, such as when you create an account, submit a designer or
            boutique profile, or communicate with other users on the platform.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you,
            and to personalize your experience on FashionBuyersClub.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Information Sharing and Disclosure</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We do not share your personal information with third parties except as described in this policy. We may
            share information with vendors, consultants, and other service providers who need access to such information
            to carry out work on our behalf.
          </p>
        </CardContent>
      </Card>

      {/* Add more sections as needed */}
    </div>
  )
}
