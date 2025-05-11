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
        { name: "Summer Collection Launch", date: "July 15, 2025" },
        { name: "Sustainable Fashion Workshop", date: "August 5, 2025" },
        { name: "Designer Meet and Greet", date: "August 20, 2025" },
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
        { name: "Decades Dance: 60s Edition", date: "June 30, 2025" },
        { name: "Vintage Swap Meet", date: "July 22, 2025" },
        { name: "Upcycling Workshop", date: "August 12, 2025" },
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
        { name: "Urban Art x Fashion Show", date: "July 8, 2025" },
        { name: "Streetwear Customization Workshop", date: "July 29, 2025" },
        { name: "Berlin Fashion Week Pop-up", date: "September 5-10, 2025" },
      ],
      website: "https://www.urbanedge-berlin.com",
      followerCount: 12000,
    },
    {
      id: "4",
      name: "Coastal Chic",
      image: "/placeholder.svg",
      location: "Miami, FL",
      tags: ["Resort Wear", "Beachwear", "Sustainable"],
      summary:
        "Coastal Chic offers sophisticated resort wear and beachwear made from eco-friendly materials, perfect for the fashion-forward beach lover.",
      description:
        "Founded in 2018, Coastal Chic specializes in elevated resort wear that transitions seamlessly from beach to dinner. Our collections feature lightweight, breathable fabrics in vibrant prints and colors inspired by the ocean. We're committed to sustainability, using recycled ocean plastic and organic cotton in many of our pieces.",
      featuredProducts: [
        {
          name: "Reversible Bikini Set",
          image: "/placeholder.svg",
          description: "Two looks in one, made from recycled nylon",
        },
        {
          name: "Linen Beach Kaftan",
          image: "/placeholder.svg",
          description: "Handcrafted from 100% organic linen with natural dyes",
        },
        {
          name: "Convertible Beach Dress",
          image: "/placeholder.svg",
          description: "Can be worn multiple ways for versatile vacation styling",
        },
      ],
      services: [
        "Beach vacation styling consultations",
        "Custom resort wear for special events",
        "Sustainable swimwear fittings",
        "Beach wedding outfit coordination",
      ],
      upcomingEvents: [
        { name: "Summer Resort Collection Launch", date: "June 25, 2025" },
        { name: "Beach Cleanup & Fashion Show", date: "July 18, 2025" },
        { name: "Sustainable Swimwear Workshop", date: "August 8, 2025" },
      ],
      website: "https://www.coastalchicmiami.com",
      followerCount: 22000,
    },
    {
      id: "5",
      name: "Nordic Minimalist",
      image: "/placeholder.svg",
      location: "Copenhagen, Denmark",
      tags: ["Minimalist", "Scandinavian", "Timeless"],
      summary:
        "Nordic Minimalist embodies the essence of Scandinavian design with clean lines, neutral palettes, and functional yet beautiful clothing built to last.",
      description:
        "Nordic Minimalist brings the principles of Scandinavian design to fashion, focusing on simplicity, functionality, and timeless elegance. Our pieces feature clean lines, premium natural fabrics, and a neutral color palette that creates an effortlessly cohesive wardrobe. We believe in buying less but better, creating pieces that will be worn and loved for years.",
      featuredProducts: [
        {
          name: "Merino Wool Oversized Sweater",
          image: "/placeholder.svg",
          description: "Ethically sourced wool in a timeless design",
        },
        {
          name: "Organic Cotton Wide-Leg Trousers",
          image: "/placeholder.svg",
          description: "Perfect drape with functional pockets",
        },
        {
          name: "Linen Shirt Dress",
          image: "/placeholder.svg",
          description: "Versatile piece that can be styled multiple ways",
        },
      ],
      services: [
        "Capsule wardrobe consultations",
        "Fabric and care workshops",
        "Personal color analysis",
        "Minimalist styling sessions",
      ],
      upcomingEvents: [
        { name: "Fall Essentials Preview", date: "August 15, 2025" },
        { name: "Sustainable Wool Symposium", date: "September 10, 2025" },
        { name: "Capsule Wardrobe Workshop", date: "October 5, 2025" },
      ],
      website: "https://www.nordicminimalist.dk",
      followerCount: 18500,
    },
    {
      id: "6",
      name: "Bohemian Rhapsody",
      image: "/placeholder.svg",
      location: "Austin, TX",
      tags: ["Bohemian", "Artisanal", "Eclectic"],
      summary:
        "Bohemian Rhapsody celebrates free-spirited fashion with handcrafted pieces featuring rich textures, vibrant patterns, and artisanal techniques from around the world.",
      description:
        "Bohemian Rhapsody is a haven for the free-spirited fashion lover. Our boutique showcases handcrafted pieces from artisans around the world, featuring rich textures, vibrant patterns, and unique embellishments. Each item tells a story and celebrates traditional craftsmanship while embracing modern bohemian style. We focus on small-batch production and fair trade practices.",
      featuredProducts: [
        {
          name: "Hand-Embroidered Maxi Dress",
          image: "/placeholder.svg",
          description: "Featuring traditional Mexican embroidery techniques",
        },
        {
          name: "Block-Printed Kimono",
          image: "/placeholder.svg",
          description: "Hand-printed using carved wooden blocks and natural dyes",
        },
        {
          name: "Vintage Textile Patchwork Bag",
          image: "/placeholder.svg",
          description: "One-of-a-kind piece made from reclaimed textiles",
        },
      ],
      services: [
        "Global textile education",
        "Artisan meet-and-greets",
        "Embroidery and textile workshops",
        "Festival styling sessions",
      ],
      upcomingEvents: [
        { name: "Artisan Trunk Show", date: "July 12, 2025" },
        { name: "Natural Dyeing Workshop", date: "August 2, 2025" },
        { name: "Global Textile Exhibition", date: "September 15, 2025" },
      ],
      website: "https://www.bohemianrhapsodytx.com",
      followerCount: 31000,
    },
    {
      id: "7",
      name: "Atelier Noir",
      image: "/placeholder.svg",
      location: "Paris, France",
      tags: ["Avant-garde", "Monochrome", "Architectural"],
      summary:
        "Atelier Noir specializes in architectural, avant-garde fashion with a predominantly black palette, creating dramatic silhouettes for the bold fashion connoisseur.",
      description:
        "Atelier Noir is a concept boutique dedicated to the art of monochrome, particularly the endless possibilities of black. We curate pieces from avant-garde designers who approach fashion as wearable architecture, focusing on innovative cuts, unexpected proportions, and textural contrasts. Our collections challenge conventional notions of silhouette and form, appealing to those who view fashion as artistic expression.",
      featuredProducts: [
        {
          name: "Deconstructed Wool Coat",
          image: "/placeholder.svg",
          description: "Asymmetrical design with architectural details",
        },
        {
          name: "Pleated Geometric Dress",
          image: "/placeholder.svg",
          description: "Technical fabric with three-dimensional pleating technique",
        },
        {
          name: "Sculptural Leather Accessories",
          image: "/placeholder.svg",
          description: "Handcrafted leather pieces that blur the line between accessory and art",
        },
      ],
      services: [
        "Avant-garde styling consultations",
        "Custom piece commissions",
        "Textile manipulation workshops",
        "Fashion as art exhibitions",
      ],
      upcomingEvents: [
        { name: "Monochrome Mastery Exhibition", date: "October 10, 2025" },
        { name: "Architectural Fashion Symposium", date: "November 5, 2025" },
        { name: "Black on Black: Texture Workshop", date: "December 1, 2025" },
      ],
      website: "https://www.ateliernoir-paris.com",
      followerCount: 42000,
    },
    {
      id: "8",
      name: "Mountain Maven",
      image: "/placeholder.svg",
      location: "Denver, CO",
      tags: ["Outdoor", "Technical", "Sustainable"],
      summary:
        "Mountain Maven bridges the gap between technical outdoor apparel and urban style, creating versatile pieces for the adventure-seeking fashion enthusiast.",
      description:
        "Mountain Maven was born from a desire to create outdoor apparel that performs in nature but looks at home in the city. We specialize in technical fabrics and functional designs that don't compromise on style. Our collections feature weather-resistant materials, thoughtful details like hidden pockets and adjustable elements, and a color palette inspired by the natural world. We're committed to sustainable production and durable designs that reduce consumption.",
      featuredProducts: [
        {
          name: "3-in-1 Weather Adaptive Jacket",
          image: "/placeholder.svg",
          description: "Modular design for changing conditions",
        },
        {
          name: "Technical Hiking Pants",
          image: "/placeholder.svg",
          description: "Water-resistant, quick-dry fabric with articulated knees",
        },
        {
          name: "Merino Base Layer Collection",
          image: "/placeholder.svg",
          description: "Naturally odor-resistant layers that regulate temperature",
        },
      ],
      services: [
        "Adventure wardrobe planning",
        "Technical fabric education",
        "Gear repair workshops",
        "Outdoor photography styling",
      ],
      upcomingEvents: [
        { name: "Winter Collection Preview", date: "September 20, 2025" },
        { name: "Sustainable Outdoor Gear Panel", date: "October 15, 2025" },
        { name: "Repair & Extend Workshop", date: "November 8, 2025" },
      ],
      website: "https://www.mountainmaven.co",
      followerCount: 27500,
    },
    {
      id: "9",
      name: "Luxe & Local",
      image: "/placeholder.svg",
      location: "Portland, OR",
      tags: ["Locally-made", "Luxury", "Artisanal"],
      summary:
        "Luxe & Local showcases high-end fashion created exclusively by local designers and artisans, supporting the regional economy while offering unique luxury pieces.",
      description:
        "Luxe & Local is dedicated to redefining luxury through local craftsmanship. Every piece in our boutique is designed and made within 100 miles of Portland, showcasing the incredible talent in our region. We work directly with local designers, providing them with fair compensation and a platform to reach discerning customers. Our collections span from handcrafted jewelry and accessories to small-batch clothing lines, all united by exceptional quality and unique design sensibilities.",
      featuredProducts: [
        {
          name: "Hand-Forged Jewelry Collection",
          image: "/placeholder.svg",
          description: "Created by local metalsmith artisans",
        },
        {
          name: "Small-Batch Denim",
          image: "/placeholder.svg",
          description: "Crafted from organic cotton by Portland's premier denim workshop",
        },
        {
          name: "Locally Dyed Silk Scarves",
          image: "/placeholder.svg",
          description: "Featuring natural dyes from regional plants",
        },
      ],
      services: [
        "Meet the maker events",
        "Local fashion tours",
        "Artisan technique demonstrations",
        "Custom commissions with local designers",
      ],
      upcomingEvents: [
        { name: "Portland Designers Showcase", date: "July 25, 2025" },
        { name: "Local Luxury Symposium", date: "August 30, 2025" },
        { name: "Artisan Open Studios Tour", date: "September 12-13, 2025" },
      ],
      website: "https://www.luxeandlocal.com",
      followerCount: 19800,
    },
    {
      id: "10",
      name: "Future Form",
      image: "/placeholder.svg",
      location: "Tokyo, Japan",
      tags: ["Futuristic", "Technical", "Innovative"],
      summary:
        "Future Form explores the intersection of fashion and technology, offering cutting-edge designs featuring smart textiles, innovative materials, and futuristic aesthetics.",
      description:
        "Future Form is where fashion meets the future. Our boutique specializes in forward-thinking designs that incorporate technological innovation, from garments made with smart textiles and innovative materials to pieces created using advanced manufacturing techniques. We collaborate with engineers, scientists, and designers to push the boundaries of what fashion can be and do. Our aesthetic embraces clean lines, unexpected details, and a palette that ranges from technical neutrals to digital-inspired neons.",
      featuredProducts: [
        {
          name: "Climate-Adaptive Jacket",
          image: "/placeholder.svg",
          description: "Fabric that responds to temperature changes",
        },
        {
          name: "3D-Printed Accessories",
          image: "/placeholder.svg",
          description: "Geometrically complex designs impossible with traditional manufacturing",
        },
        {
          name: "Light-Responsive Textile Garments",
          image: "/placeholder.svg",
          description: "Fabrics that change color based on UV exposure",
        },
      ],
      services: [
        "Wearable technology consultations",
        "Custom 3D-printed accessories",
        "Future fashion trend forecasting",
        "Smart textile education",
      ],
      upcomingEvents: [
        { name: "Fashion Tech Expo", date: "August 5, 2025" },
        { name: "Digital Fabrication Workshop", date: "September 18, 2025" },
        { name: "Future Materials Showcase", date: "October 22, 2025" },
      ],
      website: "https://www.futureform.jp",
      followerCount: 38000,
    },
  ]

  return boutiques.find((boutique) => boutique.id === id) || boutiques[0]
}

export default async function BoutiquePage({ params }: { params: { id: string } }) {
  const boutiqueData = await getBoutiqueData(params.id)

  return <BoutiqueProfile {...boutiqueData} />
}
