import { DesignerProfile } from "@/components/designer-profile"

// This is a mock function to simulate fetching designer data
async function getDesignerData(id: string) {
  // In a real application, you would fetch this data from your API or database
  const designers = [
    {
      id: "1",
      name: "Emma Thompson",
      image: "/placeholder.svg",
      location: "Paris, France",
      tags: ["Evening Wear", "Sustainable", "Avant-Garde"],
      summary:
        "Emma Thompson is an award-winning fashion designer known for her innovative, sustainable evening wear that pushes the boundaries of contemporary fashion.",
      bio: "Emma Thompson is a visionary designer known for her innovative approach to evening wear. With a focus on sustainability and avant-garde designs, Emma creates stunning pieces that push the boundaries of fashion while remaining eco-conscious. Her work has been featured in Vogue, Elle, and worn by celebrities on red carpets around the world.",
      collections: [
        {
          name: "Ethereal Nights",
          image: "/placeholder.svg",
          description: "A collection of flowing, ethereal gowns made from recycled materials",
        },
        {
          name: "Sustainable Glamour",
          image: "/placeholder.svg",
          description: "Luxurious, eco-friendly cocktail dresses for the conscious fashionista",
        },
        {
          name: "Futuristic Formals",
          image: "/placeholder.svg",
          description: "Avant-garde formal wear pushing the boundaries of sustainable fashion",
        },
      ],
      services: [
        "Bespoke gown design",
        "Sustainable fashion consultations",
        "Upcycling workshops",
        "Fashion illustration classes",
      ],
      collaborations: [
        {
          name: "Eco Elegance x Emma Thompson",
          description:
            "A sustainable luxury collection featuring recycled materials and innovative designs, in partnership with Eco Elegance boutique.",
        },
        {
          name: "Parisian Nights",
          description:
            "A collaboration with renowned Parisian boutiques to create a limited edition evening wear line, showcasing the best of French craftsmanship.",
        },
      ],
      website: "https://www.emmathompsondesign.com",
      followerCount: 250000,
    },
    {
      id: "2",
      name: "Liam Chen",
      image: "/placeholder.svg",
      location: "Tokyo, Japan",
      tags: ["Streetwear", "Techwear", "Sustainable"],
      summary:
        "Liam Chen is a rising star in the world of streetwear, known for his innovative designs that blend urban style with cutting-edge technology and sustainability.",
      bio: "Liam Chen's journey in fashion began on the streets of Tokyo, where he found inspiration in the city's unique blend of traditional culture and futuristic technology. His designs reflect this duality, creating streetwear that's both functional and fashionable. Liam's commitment to sustainability drives him to explore eco-friendly materials and production methods, setting new standards in the industry.",
      collections: [
        {
          name: "Neo Tokyo",
          image: "/placeholder.svg",
          description: "A cyberpunk-inspired collection featuring LED-embedded clothing and recycled materials",
        },
        {
          name: "Urban Nomad",
          image: "/placeholder.svg",
          description: "Versatile, modular streetwear designed for the modern city dweller",
        },
        {
          name: "Eco Warriors",
          image: "/placeholder.svg",
          description: "A 100% sustainable collection made entirely from upcycled and biodegradable materials",
        },
      ],
      services: [
        "Custom streetwear design",
        "Techwear prototyping",
        "Sustainability consultations for brands",
        "Streetwear photography workshops",
      ],
      collaborations: [
        {
          name: "Chen x Nike",
          description:
            "A limited-edition sneaker collection combining Liam's unique style with Nike's performance technology.",
        },
        {
          name: "Tokyo Street Art Project",
          description:
            "A collaboration with local street artists to create wearable art pieces, with proceeds supporting urban art initiatives.",
        },
      ],
      website: "https://www.liamchendesign.com",
      followerCount: 180000,
    },
    {
      id: "3",
      name: "Sofia Rodriguez",
      image: "/placeholder.svg",
      location: "Miami, FL",
      tags: ["Swimwear", "Resort Wear", "Body Positive"],
      summary:
        "Sofia Rodriguez is celebrated for her inclusive, vibrant swimwear and resort wear designs that embrace and enhance diverse body types.",
      bio: "Growing up in the sun-soaked beaches of Miami, Sofia Rodriguez developed a passion for swimwear that makes everyone feel confident and beautiful. Her designs are known for their bold colors, innovative cuts, and size-inclusive approach. Sofia's commitment to body positivity has made her a favorite among customers and a respected voice in the fashion industry.",
      collections: [
        {
          name: "Tropical Paradise",
          image: "/placeholder.svg",
          description: "Vibrant swimwear collection inspired by the flora and fauna of tropical rainforests",
        },
        {
          name: "Sunset Siren",
          image: "/placeholder.svg",
          description: "Glamorous resort wear in warm, sunset-inspired hues, designed for beach-to-bar versatility",
        },
        {
          name: "Curves & Waves",
          image: "/placeholder.svg",
          description: "A size-inclusive collection celebrating all body types with innovative, supportive designs",
        },
      ],
      services: [
        "Personal swimwear fittings",
        "Custom resort wear design",
        "Body positivity workshops",
        "Inclusive fashion consulting for brands",
      ],
      collaborations: [
        {
          name: "Rodriguez x Rihanna's Savage X Fenty",
          description: "A special swimwear line combining Sofia's inclusive designs with Rihanna's bold style.",
        },
        {
          name: "Miami Art Basel Collection",
          description:
            "A limited-edition collection featuring prints designed by renowned Miami artists, celebrating the city's vibrant culture.",
        },
      ],
      website: "https://www.sofiarodriguezswim.com",
      followerCount: 320000,
    },
  ]

  return designers.find((designer) => designer.id === id) || designers[0]
}

export default async function DesignerPage({ params }: { params: { id: string } }) {
  const designerData = await getDesignerData(params.id)

  return <DesignerProfile {...designerData} />
}
