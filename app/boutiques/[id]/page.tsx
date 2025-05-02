import { BoutiqueProfile } from "@/components/boutique-profile"

// This is a mock function to simulate fetching boutique data
async function getBoutiqueData(id: string) {
  // In a real application, you would fetch this data from your API or database
  const boutiques = [
    {
      id: "1",
      name: "Chic Boutique",
      image: "/placeholder.svg",
      location: "New York, NY",
      tags: ["Modern", "Luxury", "Sustainable"],
      summary:
        "Chic Boutique is a leading fashion destination in New York City, offering a curated selection of sustainable luxury fashion for the modern, eco-conscious consumer.",
      description:
        "Chic Boutique is a curated fashion destination offering a blend of contemporary and timeless pieces. Our focus is on sustainable luxury, bringing you the best in eco-friendly fashion without compromising on style. We work closely with designers who share our commitment to ethical and environmentally responsible practices.",
      featuredProducts: [
        { name: "Eco-friendly Dress", image: "/placeholder.svg", description: "Made from 100% organic cotton" },
        {
          name: "Recycled Denim Jeans",
          image: "/placeholder.svg",
          description: "Crafted from post-consumer recycled denim",
        },
        {
          name: "Organic Cotton Blouse",
          image: "/placeholder.svg",
          description: "Elegant and sustainable office wear",
        },
      ],
      services: [
        "Personal styling sessions",
        "Custom tailoring",
        "Sustainable fashion consultations",
        "Clothing repair and upcycling workshops",
      ],
      upcomingEvents: [
        { name: "Summer Collection Launch", date: "July 15, 2023" },
        { name: "Sustainable Fashion Workshop", date: "August 5, 2023" },
        { name: "Designer Meet and Greet", date: "August 20, 2023" },
      ],
      website: "https://www.chicboutique.com",
      followerCount: 15000,
    },
    {
      id: "2",
      name: "Vintage Vogue",
      image: "/placeholder.svg",
      location: "Los Angeles, CA",
      tags: ["Vintage", "Retro", "Upcycled"],
      summary:
        "Vintage Vogue is a treasure trove of carefully curated vintage and upcycled fashion pieces, bringing the best of past decades to modern wardrobes.",
      description:
        "At Vintage Vogue, we believe in the timeless appeal of fashion from bygone eras. Our boutique is a carefully curated collection of authentic vintage pieces and skillfully upcycled garments that bring the charm of the past into the present. We're passionate about sustainable fashion and the stories each piece tells.",
      featuredProducts: [
        { name: "1950s Swing Dress", image: "/placeholder.svg", description: "Authentic vintage dress from the 1950s" },
        {
          name: "Upcycled Leather Jacket",
          image: "/placeholder.svg",
          description: "Vintage leather jacket with modern updates",
        },
        {
          name: "Retro Sunglasses Collection",
          image: "/placeholder.svg",
          description: "Curated selection of vintage eyewear",
        },
      ],
      services: [
        "Vintage clothing authentication",
        "Garment restoration",
        "Personal shopping for vintage lovers",
        "Upcycling and customization services",
      ],
      upcomingEvents: [
        { name: "Decades Dance: 60s Edition", date: "June 30, 2023" },
        { name: "Vintage Swap Meet", date: "July 22, 2023" },
        { name: "Upcycling Workshop", date: "August 12, 2023" },
      ],
      website: "https://www.vintagevogue.com",
      followerCount: 8500,
    },
    {
      id: "3",
      name: "Urban Edge",
      image: "/placeholder.svg",
      location: "Berlin, Germany",
      tags: ["Streetwear", "Avant-garde", "Unisex"],
      summary:
        "Urban Edge pushes the boundaries of conventional fashion with its bold, avant-garde streetwear collections that challenge gender norms and celebrate individuality.",
      description:
        "Urban Edge is at the forefront of contemporary streetwear, blending avant-garde designs with urban sensibilities. Our collections are designed to challenge traditional fashion norms, offering unisex pieces that empower individuals to express themselves freely. We collaborate with emerging artists and designers to bring fresh, innovative styles to our customers.",
      featuredProducts: [
        {
          name: "Deconstructed Denim Jacket",
          image: "/placeholder.svg",
          description: "Unique, handcrafted piece with asymmetrical design",
        },
        {
          name: "Graphic Print Jumpsuit",
          image: "/placeholder.svg",
          description: "Bold, unisex jumpsuit featuring work from local artists",
        },
        {
          name: "Tech-Wear Cargo Pants",
          image: "/placeholder.svg",
          description: "Futuristic, functional pants with multiple pockets and zippers",
        },
      ],
      services: [
        "Customization lab for personalized streetwear",
        "Collaborations with local artists",
        "Streetwear styling workshops",
        "Small-batch production for emerging designers",
      ],
      upcomingEvents: [
        { name: "Urban Art x Fashion Show", date: "July 8, 2023" },
        { name: "Streetwear Customization Workshop", date: "July 29, 2023" },
        { name: "Berlin Fashion Week Pop-up", date: "September 5-10, 2023" },
      ],
      website: "https://www.urbanedge-berlin.com",
      followerCount: 12000,
    },
  ]

  return boutiques.find((boutique) => boutique.id === id) || boutiques[0]
}

export default async function BoutiquePage({ params }: { params: { id: string } }) {
  const boutiqueData = await getBoutiqueData(params.id)

  return <BoutiqueProfile {...boutiqueData} />
}
