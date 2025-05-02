import { InspirationSection } from "@/components/inspiration-section"
import { NewsCard } from "@/components/news-card"

export default function ResourcesPage() {
  const communityNews = [
    {
      title: "Summer Collection Launch",
      excerpt: "Designer Aiden Patel unveils sustainable summer line",
      date: "2023-06-15",
      link: "/news/1",
    },
    {
      title: "New Messaging Feature",
      excerpt: "Connect directly with boutiques and designers",
      date: "2023-06-10",
      link: "/news/2",
    },
    {
      title: "Fashion for a Cause",
      excerpt: "Local designers unite for charity fashion show",
      date: "2023-06-05",
      link: "/news/3",
    },
  ]

  const industryNews = [
    {
      title: "Luxotica Acquires Sunglasses Co",
      excerpt: "Major move in the eyewear industry",
      date: "2023-06-14",
      link: "/news/4",
    },
    {
      title: "Nike's Sustainable Initiative",
      excerpt: "Sportswear giant commits to eco-friendly materials",
      date: "2023-06-12",
      link: "/news/5",
    },
    {
      title: "Vogue's September Issue",
      excerpt: "Celebrating diversity in fashion",
      date: "2023-06-08",
      link: "/news/6",
    },
  ]

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>

      <section>
        <h2 className="text-3xl font-bold mb-6">Inspiration Corner</h2>
        <InspirationSection />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Community News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Industry News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>
    </div>
  )
}
