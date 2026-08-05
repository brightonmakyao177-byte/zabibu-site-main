export type PropertyType =
  | "Beach villa"
  | "Townhouse"
  | "Safari lodge"
  | "Apartment"
  | "Highland retreat"
  | "Beach bungalows"
  | "Penthouse";

export type Amenity = { category: string; items: string[] };

export type Property = {
  slug: string;
  name: string;
  location: string;
  region: string; // destination slug
  type: PropertyType;
  short: string;
  intro: string;
  description: string[];
  highlights: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number;
  cleaningFee: number;
  taxesPct: number; // percent
  image: string;
  gallery: string[];
  amenities: Amenity[];
  houseRules: string[];
  checkIn: string;
  checkOut: string;
  cancellation: string;
  nearby: { name: string; note: string }[];
  available: boolean;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    slug: "zabibu-beach-villa",
    name: "Zabibu Beach Villa",
    location: "Matemwe, Zanzibar",
    region: "zanzibar",
    type: "Beach villa",
    short: "A four-bedroom villa opening onto the reef at Matemwe.",
    intro:
      "Framed by casuarina trees and a private stretch of reef, Zabibu Beach Villa is a quiet, four-bedroom home shaped for slow, unhurried days by the sea.",
    description: [
      "Open living spaces fold into a shaded terrace and a long infinity pool set just above the tideline. The house was designed with local craftsmen — hand-carved doors, lime-washed walls, woven ceilings — and furnished with an editorial hand.",
      "A private chef prepares Swahili-inspired menus on request, and the property manager can arrange dhow sailing, reef snorkelling and evening beach dinners.",
    ],
    highlights: [
      "Private 18m infinity pool facing the reef",
      "Full-time housekeeper and on-call property manager",
      "Optional private chef with Swahili tasting menus",
      "Direct beach access at low and high tide",
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    pricePerNight: 420,
    cleaningFee: 90,
    taxesPct: 8,
    image: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1582719508461-905c673771fd"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1540541338287-41700207dee6"),
      img("photo-1571003123894-1f0594d2b5d9"),
    ],
    amenities: [
      { category: "Outdoors", items: ["Private pool", "Beach access", "Outdoor dining", "Sun loungers"] },
      { category: "Indoors", items: ["Air conditioning", "Wi-Fi", "En-suite bathrooms", "Reading nook"] },
      { category: "Services", items: ["Daily housekeeping", "Private chef (on request)", "Airport transfer (on request)"] },
    ],
    houseRules: [
      "No smoking indoors",
      "Children welcome, cots available on request",
      "Events considered by arrangement",
    ],
    checkIn: "From 15:00. Late check-in can be arranged.",
    checkOut: "By 11:00.",
    cancellation:
      "Free cancellation up to 30 days before arrival. Cancellations within 30 days forfeit the first-night rate. Full policy on request.",
    nearby: [
      { name: "Mnemba Atoll", note: "Snorkelling and diving, 20 min by boat" },
      { name: "Matemwe village", note: "Fishing community, 10 min walk" },
      { name: "Stone Town", note: "Historic centre, 75 min drive" },
    ],
    available: true,
  },
  {
    slug: "grape-house-stone-town",
    name: "Grape House Stone Town",
    location: "Stone Town, Zanzibar",
    region: "stone-town",
    type: "Townhouse",
    short: "A restored Swahili townhouse a short walk from Forodhani.",
    intro:
      "A carefully restored townhouse tucked into the lanes behind the old fort, blending original carved doors and coral-stone walls with a quiet, contemporary hand.",
    description: [
      "Three bedrooms open onto a central courtyard, with a rooftop terrace shaded by canvas for early coffees and long evenings above the town.",
      "The house is looked after by a resident host who can guide you through the market, arrange a spice-farm morning or book a table at one of the town's better-kept restaurants.",
    ],
    highlights: [
      "Rooftop terrace with views over Stone Town",
      "Resident host and daily housekeeping",
      "Six minutes on foot to Forodhani Gardens",
      "Original 19th-century carved doors",
    ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    pricePerNight: 240,
    cleaningFee: 60,
    taxesPct: 8,
    image: img("photo-1596436889106-be35e843f974"),
    gallery: [
      img("photo-1596436889106-be35e843f974"),
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1522708323590-d24dbb6b0267"),
      img("photo-1519710164239-da123dc03ef4"),
    ],
    amenities: [
      { category: "Outdoors", items: ["Rooftop terrace", "Courtyard"] },
      { category: "Indoors", items: ["Air conditioning", "Wi-Fi", "En-suite bathrooms"] },
      { category: "Services", items: ["Daily breakfast", "Resident host", "Housekeeping"] },
    ],
    houseRules: ["No smoking indoors", "Quiet hours after 22:00", "No pets"],
    checkIn: "From 14:00.",
    checkOut: "By 11:00.",
    cancellation: "Free cancellation up to 21 days before arrival.",
    nearby: [
      { name: "Forodhani Gardens", note: "Evening food market, 6 min walk" },
      { name: "House of Wonders", note: "Museum, 4 min walk" },
      { name: "Darajani Market", note: "Spice and fish market, 10 min walk" },
    ],
    available: true,
  },
  {
    slug: "vine-hill-safari-lodge",
    name: "Vine Hill Safari Lodge",
    location: "Central Serengeti",
    region: "serengeti",
    type: "Safari lodge",
    short: "A five-tent lodge on a quiet kopje in the central Serengeti.",
    intro:
      "Five raised canvas suites arranged along a granite kopje above the plains, with wide sunset views and easy access to the migration corridor.",
    description: [
      "Each suite is fully enclosed with a private deck, indoor and outdoor showers and a small library of field guides. The main mess is a low, open pavilion built around a fireplace and a long dining table.",
      "Daily game drives are led by resident guides. Bush breakfasts, sundowners on the kopje and stargazing dinners can be added to any itinerary.",
    ],
    highlights: [
      "Five private canvas suites with plains views",
      "Resident naturalist guides",
      "Full-board dining with a rotating menu",
      "Sundowner deck above the migration corridor",
    ],
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    pricePerNight: 690,
    cleaningFee: 0,
    taxesPct: 10,
    image: img("photo-1516426122078-c23e76319801"),
    gallery: [
      img("photo-1516426122078-c23e76319801"),
      img("photo-1523805009345-7448845a9e53"),
      img("photo-1547471080-7cc2caa01a7e"),
      img("photo-1534430480872-3498386e7856"),
    ],
    amenities: [
      { category: "Experience", items: ["Guided game drives", "Bush breakfasts", "Sundowners on the kopje"] },
      { category: "Suites", items: ["Indoor & outdoor showers", "Private deck", "Solar power"] },
      { category: "Included", items: ["Full board dining", "House drinks", "Airstrip transfers"] },
    ],
    houseRules: ["Guides required outside the mess area", "No single-use plastics", "Children 8+"],
    checkIn: "From 12:00 at the airstrip.",
    checkOut: "By 10:00.",
    cancellation: "Free cancellation up to 60 days before arrival.",
    nearby: [
      { name: "Seronera valley", note: "Migration corridor, 25 min drive" },
      { name: "Moru kopjes", note: "Rock paintings and lions, 90 min drive" },
    ],
    available: true,
  },
  {
    slug: "coral-garden-apartments",
    name: "Coral Garden Apartments",
    location: "Nungwi, Zanzibar",
    region: "nungwi",
    type: "Apartment",
    short: "Two-bedroom garden apartments a short walk from the beach.",
    intro:
      "A small cluster of two-bedroom apartments arranged around a shared pool and coral garden, five minutes on foot from the sand at Nungwi.",
    description: [
      "Each apartment has its own kitchen and living space, with a shaded verandah opening onto the garden. Interiors are simple, bright and built for long stays.",
      "The on-site team can arrange transfers, dive courses at the reef and a laid-back breakfast delivered to your door.",
    ],
    highlights: [
      "Shared pool set in a coral-stone garden",
      "Fully equipped kitchen in each apartment",
      "Five-minute walk to Nungwi beach",
      "On-site team for transfers and activities",
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNight: 160,
    cleaningFee: 40,
    taxesPct: 8,
    image: img("photo-1568605114967-8130f3a36994"),
    gallery: [
      img("photo-1568605114967-8130f3a36994"),
      img("photo-1505692433770-36f19f51681d"),
      img("photo-1502672260266-1c1ef2d93688"),
    ],
    amenities: [
      { category: "Outdoors", items: ["Shared pool", "Garden verandah"] },
      { category: "Indoors", items: ["Full kitchen", "Air conditioning", "Wi-Fi"] },
      { category: "Services", items: ["Weekly housekeeping", "On-site team"] },
    ],
    houseRules: ["No smoking indoors", "Quiet hours after 22:00"],
    checkIn: "From 14:00.",
    checkOut: "By 11:00.",
    cancellation: "Free cancellation up to 14 days before arrival.",
    nearby: [
      { name: "Nungwi beach", note: "5 min walk" },
      { name: "Mnarani turtle sanctuary", note: "10 min walk" },
    ],
    available: true,
  },
  {
    slug: "mountain-vine-retreat",
    name: "Mountain Vine Retreat",
    location: "Arusha coffee highlands",
    region: "arusha",
    type: "Highland retreat",
    short: "A three-bedroom retreat on a working coffee farm at Mount Meru.",
    intro:
      "A quiet three-bedroom house on a small, working coffee farm on the lower slopes of Mount Meru, with cool mornings, long views and a lit fireplace at dusk.",
    description: [
      "Rooms open onto a broad verandah that runs the length of the house, framed by old jacaranda trees. Interiors are grounded in warm woods, linen and locally woven textiles.",
      "A farm walk with the estate manager, a coffee-tasting on the verandah and a quiet early start for Mount Meru are all easily arranged.",
    ],
    highlights: [
      "Working coffee farm with tasting",
      "Fireplace and reading room",
      "Full board included",
      "Views to Mount Meru on clear mornings",
    ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    pricePerNight: 280,
    cleaningFee: 50,
    taxesPct: 10,
    image: img("photo-1520250497591-112f2f40a3f4"),
    gallery: [
      img("photo-1520250497591-112f2f40a3f4"),
      img("photo-1519821172144-4f87d85de2a4"),
      img("photo-1449158743715-0a90ebb6d2d8"),
    ],
    amenities: [
      { category: "Indoors", items: ["Fireplace", "Reading room", "Wi-Fi"] },
      { category: "Included", items: ["Full board", "Coffee tour", "Farm walk"] },
    ],
    houseRules: ["No smoking indoors", "Children welcome"],
    checkIn: "From 15:00.",
    checkOut: "By 11:00.",
    cancellation: "Free cancellation up to 21 days before arrival.",
    nearby: [
      { name: "Arusha National Park", note: "35 min drive" },
      { name: "Tengeru market", note: "20 min drive" },
    ],
    available: false,
  },
  {
    slug: "the-cluster-paje",
    name: "The Cluster, Paje",
    location: "Paje, Zanzibar",
    region: "paje",
    type: "Beach bungalows",
    short: "Four bungalows on the tide flats at Paje.",
    intro:
      "A cluster of four bungalows set just behind the dune line at Paje, made for kite seasons, long lunches and unhurried afternoons on the sand.",
    description: [
      "Each bungalow is self-contained with a small terrace facing the sea. A shared pavilion holds the bar, a long communal table and a shaded lounge.",
      "Kite storage, a launch team and lessons are all on-site during the seasons.",
    ],
    highlights: [
      "Direct access to Paje's flats",
      "On-site kite school and storage",
      "Shared bar and lounge pavilion",
      "Bicycles for the village",
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    pricePerNight: 320,
    cleaningFee: 70,
    taxesPct: 8,
    image: img("photo-1540541338287-41700207dee6"),
    gallery: [
      img("photo-1540541338287-41700207dee6"),
      img("photo-1507525428034-b723cf961d3e"),
      img("photo-1519046904884-53103b34b206"),
    ],
    amenities: [
      { category: "Outdoors", items: ["Beach access", "Shared pavilion"] },
      { category: "Sport", items: ["Kite storage", "Lesson bookings", "Bicycles"] },
      { category: "Services", items: ["Daily housekeeping", "Bar service"] },
    ],
    houseRules: ["No smoking indoors", "Quiet hours after 23:00"],
    checkIn: "From 14:00.",
    checkOut: "By 11:00.",
    cancellation: "Free cancellation up to 21 days before arrival.",
    nearby: [
      { name: "Paje village", note: "5 min walk" },
      { name: "Jozani Forest", note: "40 min drive" },
    ],
    available: true,
  },
  {
    slug: "sunset-vine-penthouse",
    name: "Sunset Vine Penthouse",
    location: "Masaki, Dar es Salaam",
    region: "dar-es-salaam",
    type: "Penthouse",
    short: "A two-bedroom penthouse with a wraparound harbour terrace.",
    intro:
      "A refined penthouse in the heart of Masaki with a wraparound terrace facing the harbour — a quiet, elevated base for a few days in Dar es Salaam.",
    description: [
      "Interiors are pared back and warm — polished concrete floors, linen curtains, a long dining table for six and a small library of Tanzanian art books.",
      "The building has 24-hour security, a gym and a lap pool. Airport transfers, restaurant bookings and a coastal day-trip are easily arranged.",
    ],
    highlights: [
      "Wraparound terrace with harbour views",
      "Building gym and lap pool",
      "24-hour security and concierge",
      "Ten minutes to Slipway",
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNight: 260,
    cleaningFee: 50,
    taxesPct: 8,
    image: img("photo-1502672260266-1c1ef2d93688"),
    gallery: [
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1493809842364-78817add7ffb"),
      img("photo-1522708323590-d24dbb6b0267"),
    ],
    amenities: [
      { category: "Outdoors", items: ["Wraparound terrace"] },
      { category: "Building", items: ["Gym", "Lap pool", "24hr security"] },
      { category: "Indoors", items: ["Air conditioning", "Wi-Fi", "Full kitchen"] },
    ],
    houseRules: ["No smoking indoors", "No parties"],
    checkIn: "From 15:00.",
    checkOut: "By 11:00.",
    cancellation: "Free cancellation up to 14 days before arrival.",
    nearby: [
      { name: "Slipway", note: "Shops and waterfront, 10 min drive" },
      { name: "Coco Beach", note: "12 min drive" },
    ],
    available: true,
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
export const propertiesByRegion = (region: string) =>
  properties.filter((p) => p.region === region);
