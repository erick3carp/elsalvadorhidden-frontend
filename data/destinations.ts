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
  | "Hidden Gem";

export type Destination = {
  id: string;
  slug: string;
  name: string;
  department: string;
  municipality?: string;
  category: DestinationCategory;
  interests: string[];
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  travelTips: string[];
  bestTimeToVisit: string;
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
    heroImage: "/images/destinations/santa-ana-volcano/hero.webp",
    gallery: [],
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
    featured: true,
    published: true,
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
    featured: true,
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

export function getDestinationBySlug(
  slug: string,
): Destination | undefined {
  return destinations.find(
    (destination) => destination.slug === slug && destination.published,
  );
}
