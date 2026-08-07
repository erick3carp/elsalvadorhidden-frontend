export type DestinationCategory =
  | "Beach"
  | "Nature"
  | "Volcano"
  | "Culture"
  | "Historic Town"
  | "Food"
  | "Adventure"
  | "Family"
  | "Relaxation"
  | "Parks"
  | "Hidden Gem";

export type Destination = {
  id: string;
  slug: string;
  name: string;
  department?: string;
  municipality?: string;
  category: DestinationCategory;
  interests: string[];
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  travelTips: string[];
  bestTimeToVisit?: string;
  estimatedVisitDuration?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  featured: boolean;
  published: boolean;
};

export const destinations: Destination[] = [
  {
    id: "santa-ana-volcano",
    slug: "santa-ana-volcano",
    name: "Santa Ana Volcano",
    department: "Santa Ana",
    municipality: "Santa Ana",
    category: "Volcano",
    interests: ["Hiking", "Nature", "Photography", "Adventure"],
    shortDescription:
      "Hike to El Salvador's highest volcano and see its striking turquoise crater lake.",
    description:
      "Santa Ana Volcano, also known as Ilamatepec, offers one of the most memorable hikes in El Salvador. The trail leads through changing landscapes toward panoramic views of the crater and surrounding region.",
    heroImage: "/images/destinations/santa-ana-volcano/santa_hero.jpg",
    gallery: [
      "/images/destinations/santa-ana-volcano/santa2.jpg",
      "/images/destinations/santa-ana-volcano/santa3.jpg",
      "/images/destinations/santa-ana-volcano/santa4.jpg",
      "/images/destinations/santa-ana-volcano/santa5.jpg",
      "/images/destinations/santa-ana-volcano/santa6.jpg",
      "/images/destinations/santa-ana-volcano/santa7.jpg",
      "/images/destinations/santa-ana-volcano/santa8.jpg",
    ],
    highlights: [
      "Turquoise crater lake",
      "Panoramic mountain views",
      "Guided hiking experience",
    ],
    travelTips: [
      "Bring water and sun protection.",
      "Wear comfortable hiking shoes.",
      "Confirm current access rules before visiting.",
    ],
    bestTimeToVisit:
      "The dry season, generally from November through April, usually offers clearer hiking conditions.",
    estimatedVisitDuration: "4–6 hours",
    coordinates: {
      latitude: 13.853,
      longitude: -89.63,
    },
    featured: true,
    published: true,
  },
  {
    id: "suchitoto",
    slug: "suchitoto",
    name: "Suchitoto",
    department: "Cuscatlán",
    municipality: "Suchitoto",
    category: "Historic Town",
    interests: ["Culture", "History", "Food", "Photography"],
    shortDescription:
      "Explore a colorful colonial town known for culture, art, and views of Lake Suchitlán.",
    description:
      "Suchitoto combines cobblestone streets, colonial architecture, local art, traditional food, and scenic lake views. It is an ideal destination for travelers interested in culture and a slower pace.",
    heroImage: "/images/destinations/suchitoto/hero.webp",
    gallery: [],
    highlights: [
      "Colonial architecture",
      "Lake Suchitlán views",
      "Local art and cultural events",
    ],
    travelTips: [
      "Wear comfortable shoes for the cobblestone streets.",
      "Allow time to explore local cafés and artisan shops.",
      "Consider visiting the lake or nearby waterfalls.",
    ],
    bestTimeToVisit:
      "Suchitoto can be visited year-round, although the dry season is more comfortable for walking.",
    estimatedVisitDuration: "Full day",
    coordinates: {
      latitude: 13.938,
      longitude: -89.027,
    },
    featured: false,
    published: false,
  },
  {
    id: "costa-del-sol",
    slug: "costa-del-sol",
    name: "Costa del Sol",
    department: "La Paz",
    municipality: "San Luis La Herradura",
    category: "Beach",
    interests: ["Beach", "Relaxation", "Family", "Food"],
    shortDescription:
      "Enjoy a long Pacific beach, seafood, and peaceful coastal escapes near San Salvador.",
    description:
      "Costa del Sol is one of El Salvador's best-known coastal areas. Its long shoreline, estuary, restaurants, and relaxed atmosphere make it suitable for families, couples, and weekend trips.",
    heroImage: "/images/destinations/costa-del-sol/hero.webp",
    gallery: [],
    highlights: [
      "Long Pacific shoreline",
      "Fresh seafood",
      "Estuary tours",
    ],
    travelTips: [
      "Use strong sun protection.",
      "Check water and weather conditions.",
      "Plan transportation in advance if staying late.",
    ],
    bestTimeToVisit:
      "The dry season offers more predictable beach weather, but the coast can be enjoyed throughout the year.",
    estimatedVisitDuration: "Half day or overnight",
    coordinates: {
      latitude: 13.286,
      longitude: -88.931,
    },
    featured: false,
    published: false,
  },
  {
    id: "lake-coatepeque",
    slug: "lake-coatepeque",
    name: "Lake Coatepeque",
    department: "Santa Ana",
    municipality: "El Congo",
    category: "Nature",
    interests: [
      "Nature",
      "Lakes",
      "Scenic views",
      "Photography",
      "Outdoor activities",
    ],
    shortDescription:
      "A spectacular volcanic lake surrounded by steep green slopes, known for its deep blue water, panoramic scenery, and opportunities for outdoor recreation.",
    description:
      "Lake Coatepeque is a volcanic caldera lake in the department of Santa Ana and one of El Salvador’s most striking natural destinations. Travelers visit for panoramic views, lakeside relaxation, and water activities such as kayaking, boating, and swimming. The lake is surrounded by steep volcanic slopes and offers impressive scenery from both the shoreline and nearby viewpoints. One of its most unusual natural features is an occasional change in water color, when the lake can take on a turquoise-green appearance. Whether visiting for a peaceful meal by the water, photography, or outdoor recreation, Lake Coatepeque is an excellent destination for experiencing El Salvador’s volcanic landscape.",
    heroImage: "/images/destinations/coatepeque-lake/lake_hero.jpg",
    gallery: [
      "/images/destinations/coatepeque-lake/lake2.jpg",
      "/images/destinations/coatepeque-lake/lake3.jpg",
      "/images/destinations/coatepeque-lake/lake4.jpg",
    ],
    highlights: [
      "Volcanic caldera lake surrounded by mountain scenery",
      "Panoramic views from lakeside and elevated viewpoints",
      "Opportunities for kayaking, boating, and other water activities",
      "Occasional natural turquoise-green water color phenomenon",
      "Excellent landscape and travel photography",
    ],
    travelTips: [
      "Bring sun protection for daytime activities around the lake.",
      "Comfortable clothing and water-friendly footwear are useful for water activities.",
      "The turquoise color change is a natural phenomenon and is not guaranteed.",
      "Clear mornings generally provide better visibility for photography.",
    ],
    bestTimeToVisit:
      "November to April for generally drier weather and better conditions for outdoor activities.",
    estimatedVisitDuration: "Half day",
    coordinates: {
      latitude: 13.881611,
      longitude: -89.523667,
    },
    featured: true,
    published: true,
  },
  {
    id: "el-boqueron",
    slug: "el-boqueron",
    name: "El Boquerón National Park",
    department: "La Libertad",
    municipality: "Santa Tecla",
    category: "Nature",
    interests: [
      "Nature",
      "Hiking",
      "Volcanoes",
      "Scenic views",
      "Photography",
      "Family",
    ],
    shortDescription:
      "A scenic national park on the San Salvador Volcano, known for its massive crater, cool mountain climate, and accessible walking trails.",
    description:
      "El Boquerón National Park is located high on the San Salvador Volcano and offers one of the most accessible volcanic experiences near the capital region. Its main attraction is the enormous crater known as El Boquerón, which measures approximately 1.5 kilometers across. Inside the main crater is a smaller formation known as El Boqueroncito. Visitors follow marked walking trails through cool, green mountain vegetation to reach viewpoints overlooking the crater. The combination of volcanic geology, fresh mountain air, short hiking routes, and panoramic scenery makes El Boquerón a popular destination for families, photographers, and travelers looking for an easy nature excursion.",
    heroImage: "/images/destinations/el-boqueron/boqueron8.jpg",
    gallery: [
      "/images/destinations/el-boqueron/boqueron2.jpg",
      "/images/destinations/el-boqueron/boqueron3.jpg",
      "/images/destinations/el-boqueron/boqueron4.jpg",
      "/images/destinations/el-boqueron/boqueron5.jpg",
      "/images/destinations/el-boqueron/boqueron6.jpg",
      "/images/destinations/el-boqueron/boqueron7.jpg",
    ],
    highlights: [
      "Large crater of the San Salvador Volcano",
      "View of the smaller El Boqueroncito crater",
      "Marked walking trails and viewpoints",
      "Cooler mountain climate",
      "Scenic volcanic landscape close to the metropolitan area",
    ],
    travelTips: [
      "Bring a light jacket or sweater because temperatures can feel cooler than in the city.",
      "Wear comfortable walking shoes.",
      "Visit in the morning for cooler temperatures and a better chance of clear views.",
      "Allow time to stop at the crater viewpoints rather than rushing through the trails.",
    ],
    bestTimeToVisit:
      "November to April. Visit in the morning for cooler temperatures and a better chance of clear crater views.",
    estimatedVisitDuration: "1–2 hours",
    featured: false,
    published: true,
  },
  {
    id: "el-pital",
    slug: "el-pital",
    name: "Cerro El Pital",
    department: "Chalatenango",
    municipality: "San Ignacio",
    category: "Nature",
    interests: [
      "Nature",
      "Hiking",
      "Adventure",
      "Camping",
      "Scenic views",
    ],
    shortDescription:
      "El Salvador’s highest point, offering a cool mountain climate, pine forests, hiking, camping, and panoramic highland scenery.",
    description:
      "El Pital is El Salvador’s highest point, rising to about 2,730 meters above sea level in the highlands of Chalatenango. Its cool climate, pine forest, mountain mist, hiking trails, and panoramic scenery make it an excellent destination for ecotourism, camping, and nature walks. The area is known for its distinctly cooler temperatures and high-elevation vegetation, creating an environment that feels very different from much of the country. Visitors come to hike, enjoy the mountain landscape, camp, and experience the peaceful rural surroundings near the border with Honduras.",
    heroImage: "/images/destinations/el-pital/pital_hero.JPG",
    gallery: [
      "/images/destinations/el-pital/pital2.jpg",
      "/images/destinations/el-pital/pital3.jpg",
      "/images/destinations/el-pital/pital4.jpg",
      "/images/destinations/el-pital/pital5.jpg",
      "/images/destinations/el-pital/pital6.jpg",
      "/images/destinations/el-pital/pital7.jpg",
      "/images/destinations/el-pital/pital8.jpg",
    ],
    highlights: [
      "Highest point in El Salvador at about 2,730 meters above sea level",
      "Cool highland climate",
      "Pine forest and mountain vegetation",
      "Hiking and nature walks",
      "Camping opportunities",
      "Panoramic mountain scenery",
    ],
    travelTips: [
      "Bring warm layers because temperatures can be significantly cooler than in lower elevations.",
      "Wear sturdy shoes suitable for uneven mountain terrain.",
      "Visit early in the day for better visibility.",
      "Weather can change quickly in the highlands, so prepare for cooler or misty conditions.",
    ],
    bestTimeToVisit:
      "November to April. Clear mornings are best for hiking, cooler temperatures, and mountain views.",
    estimatedVisitDuration: "Half day to full day",
    coordinates: {
      latitude: 14.382444,
      longitude: -89.127667,
    },
    featured: true,
    published: true,
  },
  {
    id: "el-principito-park",
    slug: "el-principito-park",
    name: "Parque El Principito",
    department: "La Libertad",
    municipality: "Santa Tecla",
    category: "Parks",
    interests: ["Family", "Culture", "Photography", "Parks", "Walking"],
    shortDescription:
      "A family-friendly urban park in Santa Tecla inspired by The Little Prince, featuring themed sculptures, landscaped paths, and colorful public spaces.",
    description:
      "Parque El Principito is a family-friendly urban park in Santa Tecla inspired by Antoine de Saint-Exupéry’s classic story The Little Prince. The park features colorful sculptures and visual references to characters and scenes from the book, creating a playful environment for walking, photography, and family outings. Its connection to Salvadoran culture comes through Consuelo Suncín, the Salvadoran writer and artist who was Saint-Exupéry’s wife and is often associated with the inspiration behind the story’s rose. The park offers visitors a relaxed public space where literature, art, and recreation come together in an accessible urban setting.",
    heroImage: "/images/destinations/el-principito-park/prin_hero.jpg",
    gallery: [
      "/images/destinations/el-principito-park/prin2.jpg",
      "/images/destinations/el-principito-park/prin3.jpg",
      "/images/destinations/el-principito-park/prin4.jpg",
    ],
    highlights: [
      "Sculptures and artistic references inspired by The Little Prince",
      "Family-friendly urban park",
      "Landscaped walking areas",
      "Photography opportunities",
      "Cultural connection to Salvadoran writer and artist Consuelo Suncín",
      "Convenient location in Santa Tecla",
    ],
    travelTips: [
      "Late afternoon is a pleasant time for walking and photography.",
      "Wear comfortable shoes if combining the park with nearby walking areas.",
      "The park works well as a shorter stop rather than a full-day attraction.",
      "Families may enjoy taking time to explore the themed sculptures.",
    ],
    bestTimeToVisit:
      "Year-round. Late afternoon is a good time for cooler temperatures and comfortable walking.",
    estimatedVisitDuration: "1–2 hours",
    featured: false,
    published: true,
  },
  {
    id: "la-puerta-del-diablo",
    slug: "la-puerta-del-diablo",
    name: "Parque Natural Puerta del Diablo",
    department: "San Salvador",
    municipality: "Panchimalco",
    category: "Nature",
    interests: [
      "Nature",
      "Scenic views",
      "Hiking",
      "Photography",
      "Family",
    ],
    shortDescription:
      "A dramatic natural rock formation in Panchimalco known for panoramic viewpoints, mountain scenery, and one of the most recognizable landscapes near San Salvador.",
    description:
      "Parque Natural Puerta del Diablo is a well-known natural attraction in Panchimalco, south of San Salvador. The site is defined by dramatic rock formations known as El Chulo and El Chulón, which rise above the surrounding landscape and create striking natural viewpoints. Travelers visit to walk through the park, climb toward the viewpoints, take photographs, and enjoy expansive views across the Salvadoran countryside. The cooler mountain air and elevated setting make it a popular escape from the city. Its distinctive geological formations, panoramic scenery, and easy access from the metropolitan area make La Puerta del Diablo one of the most recognizable nature destinations in central El Salvador.",
    heroImage: "/images/destinations/la-puerta-del-diablo/puerta_hero.jpg",
    gallery: [
      "/images/destinations/la-puerta-del-diablo/puerta2.jpg",
      "/images/destinations/la-puerta-del-diablo/puerta3.jpg",
      "/images/destinations/la-puerta-del-diablo/puerta4.jpg",
      "/images/destinations/la-puerta-del-diablo/puerta5.jpg",
      "/images/destinations/la-puerta-del-diablo/puerta6.jpg",
      "/images/destinations/la-puerta-del-diablo/puerta7.jpg",
      "/images/destinations/la-puerta-del-diablo/puerta8.jpg",
    ],
    highlights: [
      "Iconic rock formations El Chulo and El Chulón",
      "Elevated panoramic viewpoints",
      "Views across the surrounding mountains and countryside",
      "Walking paths and viewing areas",
      "Popular photography location",
      "Cooler mountain setting near San Salvador",
    ],
    travelTips: [
      "Wear comfortable shoes with good grip for stairs and uneven areas.",
      "Bring a light layer because elevated areas can feel cooler or windy.",
      "Late afternoon offers attractive light for photography.",
      "Allow enough time to enjoy the viewpoints without rushing.",
    ],
    bestTimeToVisit:
      "November to April for generally clearer and drier conditions. Late afternoon is especially good for photography and sunset views.",
    estimatedVisitDuration: "1–2 hours",
    coordinates: {
      latitude: 13.625222,
      longitude: -89.190222,
    },
    featured: false,
    published: true,
  },
];

export function getPublishedDestinations(): Destination[] {
  return destinations.filter((destination) => destination.published);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter(
    (destination) => destination.published && destination.featured,
  );
}

export function getUnpublishedDestinations(): Destination[] {
  return destinations.filter((destination) => !destination.published);
}

export function getDestinationBySlug(
  slug: string,
): Destination | undefined {
  return destinations.find(
    (destination) => destination.slug === slug && destination.published,
  );
}
