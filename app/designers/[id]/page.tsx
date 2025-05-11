import { DesignerProfile } from "@/components/designer-profile"

// This is a mock function to simulate fetching designer data
async function getDesignerData(id: string) {
  // In a real application, you would fetch this data from your API or database
  const designers = [
    {
      id: "1",
      name: "Emma Thompson",
      image: "/fashion-designer-portrait.png",
      location: "Paris, France",
      tags: ["Evening Wear", "Sustainable", "Avant-Garde"],
      summary:
        "Emma Thompson is an award-winning fashion designer known for her innovative, sustainable evening wear that pushes the boundaries of contemporary fashion.",
      bio: "Emma Thompson is a visionary designer known for her innovative approach to evening wear. With a focus on sustainability and avant-garde designs, Emma creates stunning pieces that push the boundaries of fashion while remaining eco-conscious. Her work has been featured in Vogue, Elle, and worn by celebrities on red carpets around the world.",
      collections: [
        {
          name: "Ethereal Nights",
          image: "/ethereal-evening-gown.png",
          description: "A collection of flowing, ethereal gowns made from recycled materials",
        },
        {
          name: "Sustainable Glamour",
          image: "/sustainable-cocktail-dress.png",
          description: "Luxurious, eco-friendly cocktail dresses for the conscious fashionista",
        },
        {
          name: "Futuristic Formals",
          image: "/futuristic-formal-wear.png",
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
      image: "/asian-male-fashion-designer.png",
      location: "Tokyo, Japan",
      tags: ["Streetwear", "Techwear", "Sustainable"],
      summary:
        "Liam Chen is a rising star in the world of streetwear, known for his innovative designs that blend urban style with cutting-edge technology and sustainability.",
      bio: "Liam Chen's journey in fashion began on the streets of Tokyo, where he found inspiration in the city's unique blend of traditional culture and futuristic technology. His designs reflect this duality, creating streetwear that's both functional and fashionable. Liam's commitment to sustainability drives him to explore eco-friendly materials and production methods, setting new standards in the industry.",
      collections: [
        {
          name: "Neo Tokyo",
          image: "/cyberpunk-streetwear.png",
          description: "A cyberpunk-inspired collection featuring LED-embedded clothing and recycled materials",
        },
        {
          name: "Urban Nomad",
          image: "/placeholder.svg?height=200&width=200&query=modular+streetwear",
          description: "Versatile, modular streetwear designed for the modern city dweller",
        },
        {
          name: "Eco Warriors",
          image: "/placeholder.svg?height=200&width=200&query=sustainable+streetwear",
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
      image: "/placeholder.svg?height=400&width=400&query=latina+fashion+designer",
      location: "Miami, FL",
      tags: ["Swimwear", "Resort Wear", "Body Positive"],
      summary:
        "Sofia Rodriguez is celebrated for her inclusive, vibrant swimwear and resort wear designs that embrace and enhance diverse body types.",
      bio: "Growing up in the sun-soaked beaches of Miami, Sofia Rodriguez developed a passion for swimwear that makes everyone feel confident and beautiful. Her designs are known for their bold colors, innovative cuts, and size-inclusive approach. Sofia's commitment to body positivity has made her a favorite among customers and a respected voice in the fashion industry.",
      collections: [
        {
          name: "Tropical Paradise",
          image: "/placeholder.svg?height=200&width=200&query=tropical+swimwear",
          description: "Vibrant swimwear collection inspired by the flora and fauna of tropical rainforests",
        },
        {
          name: "Sunset Siren",
          image: "/placeholder.svg?height=200&width=200&query=glamorous+resort+wear",
          description: "Glamorous resort wear in warm, sunset-inspired hues, designed for beach-to-bar versatility",
        },
        {
          name: "Curves & Waves",
          image: "/placeholder.svg?height=200&width=200&query=inclusive+swimwear",
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
    {
      id: "4",
      name: "Malik Johnson",
      image: "/placeholder.svg?height=400&width=400&query=black+male+fashion+designer",
      location: "New York, NY",
      tags: ["Luxury Menswear", "Tailoring", "Heritage"],
      summary:
        "Malik Johnson is redefining luxury menswear by blending traditional tailoring techniques with modern aesthetics and cultural heritage.",
      bio: "Malik Johnson's journey in fashion began in his grandfather's tailor shop in Harlem. After studying at Parsons and apprenticing with master tailors in Italy, he returned to New York to launch his eponymous label. Malik's designs honor the legacy of Black excellence in fashion while pushing the boundaries of contemporary menswear. His meticulous attention to detail and commitment to craftsmanship have earned him acclaim from fashion critics and a loyal clientele.",
      collections: [
        {
          name: "Heritage Line",
          image: "/placeholder.svg?height=200&width=200&query=luxury+tailored+suit",
          description: "Impeccably tailored suits that blend traditional techniques with contemporary silhouettes",
        },
        {
          name: "Urban Elegance",
          image: "/placeholder.svg?height=200&width=200&query=luxury+streetwear",
          description: "Elevated casual wear that bridges the gap between streetwear and luxury",
        },
        {
          name: "Harlem Renaissance",
          image: "/placeholder.svg?height=200&width=200&query=art+deco+menswear",
          description: "A collection inspired by the artistic and cultural explosion of 1920s Harlem",
        },
      ],
      services: [
        "Bespoke suit tailoring",
        "Personal styling consultations",
        "Custom wedding attire",
        "Wardrobe building workshops",
      ],
      collaborations: [
        {
          name: "Johnson x Savile Row",
          description:
            "A collaboration with traditional British tailors, fusing Savile Row techniques with Johnson's contemporary vision.",
        },
        {
          name: "The Museum Collection",
          description:
            "A partnership with the Studio Museum in Harlem, creating limited-edition pieces inspired by works in the museum's collection.",
        },
      ],
      website: "https://www.malikjohnson.com",
      followerCount: 275000,
    },
    {
      id: "5",
      name: "Yuki Tanaka",
      image: "/placeholder.svg?height=400&width=400&query=japanese+female+fashion+designer",
      location: "Kyoto, Japan",
      tags: ["Traditional", "Contemporary", "Textile Innovation"],
      summary:
        "Yuki Tanaka bridges the gap between traditional Japanese textile arts and contemporary fashion through innovative techniques and sustainable practices.",
      bio: "Born into a family of traditional kimono makers in Kyoto, Yuki Tanaka combines centuries-old Japanese textile techniques with modern design sensibilities. After training in traditional dyeing and weaving methods, she studied contemporary fashion design in London. Her work celebrates the beauty and sustainability of traditional craftsmanship while creating garments that speak to modern lifestyles. Yuki's designs have been exhibited in museums worldwide and worn by those who appreciate the intersection of art, heritage, and innovation.",
      collections: [
        {
          name: "Indigo Dreams",
          image: "/placeholder.svg?height=200&width=200&query=indigo+dyed+fashion",
          description: "Contemporary garments featuring traditional Japanese indigo dyeing techniques",
        },
        {
          name: "Washi",
          image: "/placeholder.svg?height=200&width=200&query=paper+textile+fashion",
          description: "Innovative pieces created using traditional Japanese paper textiles",
        },
        {
          name: "Silk Road",
          image: "/placeholder.svg?height=200&width=200&query=modern+kimono+inspired",
          description: "Modern interpretations of traditional silk garments inspired by the historic Silk Road",
        },
      ],
      services: [
        "Custom textile development",
        "Traditional dyeing workshops",
        "Sustainable fashion consulting",
        "Museum exhibition curation",
      ],
      collaborations: [
        {
          name: "Tanaka x Issey Miyake Foundation",
          description:
            "A special project exploring new applications of traditional Japanese textile techniques in contemporary design.",
        },
        {
          name: "Heritage Craft Alliance",
          description:
            "A collaboration with artisans from various traditional crafts to create modern fashion with ancient techniques.",
        },
      ],
      website: "https://www.yukitanaka.com",
      followerCount: 195000,
    },
    {
      id: "6",
      name: "Aisha Okafor",
      image: "/placeholder.svg?height=400&width=400&query=african+female+fashion+designer",
      location: "Lagos, Nigeria",
      tags: ["Contemporary African", "Sustainable", "Artisanal"],
      summary:
        "Aisha Okafor celebrates the rich textile heritage of West Africa through contemporary designs that support local artisans and sustainable practices.",
      bio: "Aisha Okafor's designs are a vibrant celebration of African heritage reimagined for the global stage. Born in Lagos and educated in London, she returned to Nigeria to establish her label with a mission to showcase African craftsmanship and create economic opportunities for local artisans. Each piece tells a story through traditional techniques like adire (indigo dyeing) and aso-oke weaving, combined with contemporary silhouettes. Aisha's work has been featured in international fashion weeks and museums, bringing attention to the richness of African design traditions.",
      collections: [
        {
          name: "Lagos Lights",
          image: "/placeholder.svg?height=200&width=200&query=colorful+african+fashion",
          description: "Vibrant, contemporary pieces inspired by the energy and colors of Lagos nightlife",
        },
        {
          name: "Indigo Stories",
          image: "/placeholder.svg?height=200&width=200&query=adire+textile+fashion",
          description: "Modern garments featuring traditional adire (indigo dyeing) techniques from Nigeria",
        },
        {
          name: "Woven Tales",
          image: "/placeholder.svg?height=200&width=200&query=aso+oke+fashion",
          description: "Contemporary designs incorporating traditional aso-oke handwoven textiles",
        },
      ],
      services: [
        "Custom occasion wear",
        "Textile design workshops",
        "Cultural fashion consulting",
        "Artisan development programs",
      ],
      collaborations: [
        {
          name: "Okafor x Victoria & Albert Museum",
          description:
            "A special collection created for the V&A's exhibition on African textiles, showcasing traditional techniques in contemporary forms.",
        },
        {
          name: "Artisan Collective",
          description:
            "An ongoing collaboration with women's weaving cooperatives across West Africa, creating sustainable livelihoods through fashion.",
        },
      ],
      website: "https://www.aishaokafor.com",
      followerCount: 230000,
    },
    {
      id: "7",
      name: "Gabriel Mendoza",
      image: "/placeholder.svg?height=400&width=400&query=latino+fashion+designer",
      location: "Mexico City, Mexico",
      tags: ["Sustainable Luxury", "Artisanal", "Heritage"],
      summary:
        "Gabriel Mendoza creates sustainable luxury by combining traditional Mexican craftsmanship with contemporary design, preserving cultural heritage while innovating for the future.",
      bio: "Gabriel Mendoza's designs are a testament to the rich cultural heritage of Mexico and a commitment to sustainable luxury. Working closely with artisans from various regions of Mexico, Gabriel creates collections that honor traditional techniques like hand embroidery, natural dyeing, and backstrap weaving. His modern interpretations of these ancient crafts have earned international recognition, including features in Vogue and collaborations with luxury retailers. Gabriel is dedicated to creating ethical fashion that supports artisan communities while offering discerning clients unique, meaningful garments.",
      collections: [
        {
          name: "Flores Eternas",
          image: "/placeholder.svg?height=200&width=200&query=mexican+embroidered+fashion",
          description: "Contemporary garments featuring traditional Mexican floral embroidery techniques",
        },
        {
          name: "Tierra y Color",
          image: "/placeholder.svg?height=200&width=200&query=natural+dyed+fashion",
          description:
            "A collection using only natural dyes derived from plants, minerals, and insects native to Mexico",
        },
        {
          name: "Telar Contemporáneo",
          image: "/placeholder.svg?height=200&width=200&query=backstrap+loom+textile+fashion",
          description: "Modern designs incorporating textiles handwoven on traditional backstrap looms",
        },
      ],
      services: [
        "Bespoke occasion wear",
        "Artisanal textile sourcing",
        "Cultural heritage consulting",
        "Sustainable luxury workshops",
      ],
      collaborations: [
        {
          name: "Mendoza x Museo Textil de Oaxaca",
          description:
            "A collection inspired by the museum's historical textile archive, reinterpreting ancient patterns for contemporary fashion.",
        },
        {
          name: "Artesanías Contemporáneas",
          description:
            "An ongoing project connecting Mexican artisans with the global luxury market through innovative design collaborations.",
        },
      ],
      website: "https://www.gabrielmendoza.com",
      followerCount: 185000,
    },
    {
      id: "8",
      name: "Olivia Kim",
      image: "/placeholder.svg?height=400&width=400&query=korean+american+fashion+designer",
      location: "Seoul, South Korea",
      tags: ["Avant-Garde", "Conceptual", "Sustainable"],
      summary:
        "Olivia Kim creates conceptual, avant-garde fashion that challenges conventions while maintaining a commitment to sustainable practices and ethical production.",
      bio: "Olivia Kim's work exists at the intersection of fashion, art, and philosophy. After studying fashion design in New York and fine art in Seoul, she established her label with a focus on conceptual, avant-garde designs that question conventional notions of clothing. Her architectural silhouettes, innovative material manipulations, and thought-provoking presentations have earned her a reputation as one of fashion's most forward-thinking designers. Despite the experimental nature of her work, Olivia maintains a strong commitment to sustainability, using deadstock fabrics, biodegradable materials, and zero-waste pattern cutting techniques.",
      collections: [
        {
          name: "Deconstruction/Reconstruction",
          image: "/placeholder.svg?height=200&width=200&query=deconstructed+avant+garde+fashion",
          description:
            "Garments that challenge traditional construction through strategic deconstruction and reassembly",
        },
        {
          name: "Material Studies",
          image: "/placeholder.svg?height=200&width=200&query=experimental+textile+fashion",
          description: "Experimental pieces exploring innovative and sustainable material development",
        },
        {
          name: "Digital/Physical",
          image: "/placeholder.svg?height=200&width=200&query=digital+fashion+physical",
          description: "A collection exploring the relationship between digital design and physical garments",
        },
      ],
      services: [
        "Conceptual fashion consulting",
        "Sustainable design innovation",
        "Fashion exhibition curation",
        "Material research and development",
      ],
      collaborations: [
        {
          name: "Kim x Seoul Museum of Art",
          description:
            "A performance piece and exhibition exploring the boundaries between fashion, sculpture, and performance art.",
        },
        {
          name: "Future Textiles Initiative",
          description:
            "A research collaboration with scientists developing biodegradable alternatives to conventional fashion materials.",
        },
      ],
      website: "https://www.oliviakimstudio.com",
      followerCount: 210000,
    },
    {
      id: "9",
      name: "Hassan Mahmoud",
      image: "/placeholder.svg?height=400&width=400&query=middle+eastern+fashion+designer",
      location: "Dubai, UAE",
      tags: ["Modern Modest", "Luxury", "Innovative"],
      summary:
        "Hassan Mahmoud is revolutionizing modest fashion through innovative designs that blend traditional Middle Eastern aesthetics with contemporary global influences.",
      bio: "Hassan Mahmoud has established himself as a pioneer in modern modest fashion, creating designs that honor cultural traditions while embracing contemporary aesthetics. After studying at Central Saint Martins in London, he returned to Dubai to launch his label with a mission to elevate modest fashion on the global stage. His designs feature innovative cuts, luxurious fabrics, and meticulous craftsmanship, appealing to clients who seek elegance without compromising their values. Hassan's work has been featured in international fashion weeks and worn by influential women around the world.",
      collections: [
        {
          name: "Modern Majlis",
          image: "/placeholder.svg?height=200&width=200&query=modern+modest+fashion",
          description: "Contemporary modest eveningwear inspired by traditional gathering spaces",
        },
        {
          name: "Desert Minimalism",
          image: "/placeholder.svg?height=200&width=200&query=minimalist+modest+fashion",
          description: "Clean-lined, architectural pieces inspired by desert landscapes and modernist architecture",
        },
        {
          name: "Heritage Reimagined",
          image: "/placeholder.svg?height=200&width=200&query=contemporary+middle+eastern+fashion",
          description: "Modern interpretations of traditional Middle Eastern garments and textiles",
        },
      ],
      services: [
        "Bespoke occasion wear",
        "Modest fashion consulting",
        "Personal styling services",
        "Custom bridal design",
      ],
      collaborations: [
        {
          name: "Mahmoud x Harrods",
          description:
            "An exclusive capsule collection for the luxury department store, introducing modern modest fashion to new audiences.",
        },
        {
          name: "Dubai Design District Initiative",
          description:
            "A mentorship program supporting emerging designers in the modest fashion space, fostering the next generation of talent.",
        },
      ],
      website: "https://www.hassanmahmoud.com",
      followerCount: 290000,
    },
    {
      id: "10",
      name: "Isabella Vega",
      image: "/placeholder.svg?height=400&width=400&query=latina+fashion+designer+sustainable",
      location: "Barcelona, Spain",
      tags: ["Circular Fashion", "Zero Waste", "Artisanal"],
      summary:
        "Isabella Vega is pioneering circular fashion through zero-waste designs, upcycled materials, and a commitment to extending the lifecycle of every garment she creates.",
      bio: "Isabella Vega's approach to fashion is rooted in circularity and regenerative design. After witnessing the environmental impact of fast fashion during her career at major fashion houses, she established her own label with a radical commitment to sustainability. Isabella's designs implement zero-waste pattern cutting, upcycling of vintage textiles, and biodegradable materials. Each piece is created to be durable, adaptable, and eventually biodegradable or recyclable. Her Barcelona atelier also serves as a research lab for circular fashion innovations and a community hub for sustainable design education.",
      collections: [
        {
          name: "Second Life",
          image: "/placeholder.svg?height=200&width=200&query=upcycled+fashion+designer",
          description: "Unique pieces created entirely from upcycled vintage garments and deadstock fabrics",
        },
        {
          name: "Zero",
          image: "/placeholder.svg?height=200&width=200&query=zero+waste+fashion",
          description: "A collection utilizing zero-waste pattern cutting techniques, using 100% of the fabric",
        },
        {
          name: "Compostable Couture",
          image: "/placeholder.svg?height=200&width=200&query=biodegradable+fashion",
          description: "Experimental designs using innovative biodegradable textiles and natural dyes",
        },
      ],
      services: [
        "Circular fashion consulting",
        "Wardrobe renewal services",
        "Sustainable design workshops",
        "Corporate sustainability training",
      ],
      collaborations: [
        {
          name: "Vega x Circular Fashion Summit",
          description:
            "A showcase collection demonstrating the possibilities of circular design for the annual sustainability conference.",
        },
        {
          name: "Regenerative Textiles Project",
          description:
            "A collaboration with regenerative farmers and textile innovators to develop fabrics that give back to the earth.",
        },
      ],
      website: "https://www.isabellavega.com",
      followerCount: 165000,
    },
    {
      id: "11",
      name: "Raj Patel",
      image: "/placeholder.svg?height=400&width=400&query=indian+fashion+designer",
      location: "Mumbai, India",
      tags: ["Contemporary Indian", "Artisanal", "Fusion"],
      summary:
        "Raj Patel celebrates India's rich textile heritage through contemporary designs that support traditional artisans while appealing to the modern global consumer.",
      bio: "Raj Patel's designs are a vibrant fusion of India's rich textile traditions and contemporary global aesthetics. After studying at the National Institute of Design in Ahmedabad and Central Saint Martins in London, Raj established his label with a mission to preserve traditional Indian crafts by creating modern contexts for their application. Working directly with artisans across India, he incorporates techniques like hand block printing, bandhani tie-dye, and intricate embroidery into contemporary silhouettes. His collections have been showcased at fashion weeks worldwide and have helped bring international attention to India's textile heritage.",
      collections: [
        {
          name: "Modern Maharani",
          image: "/placeholder.svg?height=200&width=200&query=contemporary+indian+fashion",
          description: "Contemporary womenswear inspired by the opulence of royal Indian courts",
        },
        {
          name: "Indigo Tales",
          image: "/placeholder.svg?height=200&width=200&query=indigo+block+print+fashion",
          description: "A collection featuring traditional block printing techniques with natural indigo dye",
        },
        {
          name: "Silk Route",
          image: "/placeholder.svg?height=200&width=200&query=contemporary+indian+silk+fashion",
          description: "Modern interpretations of traditional Indian garments using handwoven silk textiles",
        },
      ],
      services: [
        "Bespoke occasion wear",
        "Wedding ensemble design",
        "Textile development consulting",
        "Craft preservation initiatives",
      ],
      collaborations: [
        {
          name: "Patel x Craft Council of India",
          description:
            "A special collection highlighting endangered textile crafts, with proceeds supporting artisan communities.",
        },
        {
          name: "Heritage Textiles Project",
          description:
            "A collaboration with museums worldwide to create contemporary pieces inspired by historical Indian textiles in their collections.",
        },
      ],
      website: "https://www.rajpatel.com",
      followerCount: 320000,
    },
    {
      id: "12",
      name: "Zoe Taylor",
      image: "/placeholder.svg?height=400&width=400&query=sustainable+fashion+designer",
      location: "Portland, Oregon",
      tags: ["Eco-Friendly", "Outdoor", "Functional"],
      summary:
        "Zoe Taylor creates sustainable outdoor and activewear that combines environmental responsibility with technical performance and contemporary design.",
      bio: "Zoe Taylor's approach to fashion is deeply rooted in her love for the outdoors and commitment to environmental stewardship. With a background in environmental science and technical apparel design, she launched her label to address the need for outdoor clothing that doesn't compromise on sustainability, performance, or style. Zoe's designs utilize innovative eco-friendly materials like recycled ocean plastic, biodegradable synthetics, and organic natural fibers. Her Portland studio operates on renewable energy and implements water-saving production techniques. Through her work, Zoe demonstrates that outdoor apparel can be both environmentally responsible and technically excellent.",
      collections: [
        {
          name: "Urban Explorer",
          image: "/placeholder.svg?height=200&width=200&query=sustainable+outdoor+fashion",
          description: "Versatile pieces designed for city-to-trail transitions, using recycled technical fabrics",
        },
        {
          name: "Pacific Collection",
          image: "/placeholder.svg?height=200&width=200&query=recycled+ocean+plastic+fashion",
          description: "Activewear made from recycled ocean plastic recovered from Pacific Northwest beaches",
        },
        {
          name: "Forest Series",
          image: "/placeholder.svg?height=200&width=200&query=biodegradable+outdoor+wear",
          description: "Outdoor apparel using biodegradable natural fibers and non-toxic dyes",
        },
      ],
      services: [
        "Sustainable material consulting",
        "Eco-friendly supply chain development",
        "Outdoor brand sustainability audits",
        "Environmental impact workshops",
      ],
      collaborations: [
        {
          name: "Taylor x REI",
          description:
            "A limited-edition collection for the outdoor retailer, showcasing innovative sustainable materials for outdoor performance.",
        },
        {
          name: "Watershed Protection Initiative",
          description:
            "A project creating outdoor gear from recycled materials, with proceeds supporting watershed conservation efforts.",
        },
      ],
      website: "https://www.zoetaylor.com",
      followerCount: 145000,
    },
  ]

  return designers.find((designer) => designer.id === id) || designers[0]
}

export default async function DesignerPage({ params }: { params: { id: string } }) {
  const designerData = await getDesignerData(params.id)

  return <DesignerProfile {...designerData} />
}
