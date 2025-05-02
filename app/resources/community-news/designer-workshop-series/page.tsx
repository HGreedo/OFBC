import { BlogPostLayout } from "@/components/blog-post-layout"

export default function DesignerWorkshopSeriesPost() {
  return (
    <BlogPostLayout
      title="Fashion Designer Workshop Series Announced"
      date="June 25, 2025"
      author="Community Correspondent"
    >
      <p>
        We're excited to announce a new series of workshops designed specifically for fashion designers looking to
        expand their skills and knowledge. The series will cover everything from sustainable sourcing to digital
        marketing for fashion brands.
      </p>
      <p>
        The workshops will be led by industry experts with decades of experience in various aspects of the fashion
        industry. Each session will provide practical, hands-on learning opportunities as well as valuable networking
        with peers and mentors.
      </p>
      <p>
        "We created this workshop series to address the specific challenges faced by independent designers in today's
        rapidly changing market," says series organizer Maria Chen. "Our goal is to provide actionable strategies and
        techniques that designers can implement immediately to grow their businesses."
      </p>
      <p>
        The first workshop, "Sustainable Sourcing for Small Brands," will take place on July 15th at the Downtown Design
        Center. Registration is now open, with early bird pricing available until July 1st.
      </p>
      <p>Future workshops in the series will cover topics such as:</p>
      <ul className="list-disc pl-6 my-4">
        <li>Digital Marketing Strategies for Fashion Brands</li>
        <li>Pricing Your Designs for Profit</li>
        <li>Building Relationships with Boutiques</li>
        <li>Creating a Cohesive Collection</li>
        <li>Fashion Photography on a Budget</li>
      </ul>
      <p>
        Space is limited for each workshop, so early registration is recommended. FashionBuyersClub members receive a
        15% discount on all workshop fees.
      </p>
    </BlogPostLayout>
  )
}
