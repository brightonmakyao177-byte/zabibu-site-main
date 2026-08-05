export type Experience = {
  slug: string;
  name: string;
  category: string;
  short: string;
  intro: string;
  details: string[];
  duration: string;
  image: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const experiences: Experience[] = [
  {
    slug: "safari-journeys",
    name: "Safari journeys",
    category: "Wildlife",
    short: "Guided drives on the northern circuit, arranged around the season.",
    intro:
      "Small, guide-led journeys through the Serengeti, Ngorongoro and Tarangire — built around the time of year and how you like to travel.",
    details: [
      "Private guide and vehicle",
      "Suggested itineraries from three to ten nights",
      "All park fees, meals and internal transfers included",
    ],
    duration: "3 – 10 nights",
    image: img("photo-1516426122078-c23e76319801"),
  },
  {
    slug: "cultural-experiences",
    name: "Cultural experiences",
    category: "Culture",
    short: "Half-day visits with makers, guides and long-standing hosts.",
    intro:
      "Walking mornings in Stone Town, spice-farm afternoons, weaving cooperatives in Arusha — quiet, considered visits arranged with people we know well.",
    details: ["Half or full day", "Private guide", "Optional lunch with hosts"],
    duration: "Half or full day",
    image: img("photo-1505691938895-1758d7feb511"),
  },
  {
    slug: "airport-transfers",
    name: "Airport transfers",
    category: "Logistics",
    short: "Meet-and-greet transfers by car, boat or light aircraft.",
    intro:
      "Simple, well-run transfers with drivers we work with regularly, including light-aircraft connections between the coast and the northern circuit.",
    details: ["Private vehicle", "Meet-and-greet at arrivals", "Light-aircraft coordination"],
    duration: "As required",
    image: img("photo-1436491865332-7a61a109cc05"),
  },
  {
    slug: "private-dining",
    name: "Private dining",
    category: "Food",
    short: "In-house chefs cooking Swahili and coastal menus.",
    intro:
      "A resident or visiting chef will cook a tasting menu at any of our beach or lodge properties — from a long lunch to a beach-side dinner.",
    details: ["Bespoke menus", "In-house or visiting chef", "Wine pairing on request"],
    duration: "One evening",
    image: img("photo-1504674900247-0877df9cc836"),
  },
  {
    slug: "beach-activities",
    name: "Beach activities",
    category: "Coast",
    short: "Snorkelling, dhow sailing, kite lessons and reef trips.",
    intro:
      "From Mnemba snorkelling to a full-day dhow charter — arranged directly with the small operators we have worked with for years.",
    details: ["Half or full day", "Small groups", "Equipment included"],
    duration: "Half or full day",
    image: img("photo-1507525428034-b723cf961d3e"),
  },
  {
    slug: "mountain-excursions",
    name: "Mountain excursions",
    category: "Highlands",
    short: "Day walks and multi-day climbs on Meru and Kilimanjaro.",
    intro:
      "Guided day walks around Arusha or full expeditions on Meru and Kilimanjaro, run by long-standing mountain teams.",
    details: ["Guided by mountain teams", "All permits included", "Acclimatisation days built in"],
    duration: "1 – 8 days",
    image: img("photo-1552083375-1447ce886485"),
  },
];

export const getExperience = (slug: string) =>
  experiences.find((e) => e.slug === slug);
