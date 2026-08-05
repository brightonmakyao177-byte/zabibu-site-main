export type Destination = {
  slug: string;
  name: string;
  region: string;
  short: string;
  intro: string;
  image: string;
  detail?: boolean; // true if we have a full detail template
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const destinations: Destination[] = [
  {
    slug: "arusha",
    name: "Arusha",
    region: "Northern highlands",
    short: "Coffee farms, cool mornings and the gateway to the north.",
    intro:
      "A green, elevated town at the foot of Mount Meru — an unhurried starting point for the northern circuit, with old coffee estates and easy access to Arusha National Park.",
    image: img("photo-1520250497591-112f2f40a3f4"),
    detail: true,
  },
  {
    slug: "serengeti",
    name: "Serengeti",
    region: "Northern plains",
    short: "Open plains, granite kopjes and the migration corridor.",
    intro:
      "The Serengeti moves through the year with the rains. Vine Hill sits on a quiet kopje above the central plains, close to the migration corridor without being on top of it.",
    image: img("photo-1516426122078-c23e76319801"),
    detail: true,
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    region: "Indian Ocean",
    short: "Reef, tide flats, spice farms and long horizons.",
    intro:
      "Zanzibar isn't one place — it's a set of very different coasts. Matemwe for the reef, Nungwi for the swimmable coves, Paje for kite seasons and Stone Town for its layered history.",
    image: img("photo-1613490493576-7fde63acd811"),
    detail: true,
  },
  {
    slug: "stone-town",
    name: "Stone Town",
    region: "Zanzibar",
    short: "Carved doors, courtyards and Forodhani evenings.",
    intro:
      "The old capital of Zanzibar — a UNESCO-listed labyrinth of coral-stone houses, carved doors and layered histories, best explored slowly on foot.",
    image: img("photo-1596436889106-be35e843f974"),
  },
  {
    slug: "paje",
    name: "Paje",
    region: "Zanzibar",
    short: "Tide flats and kite seasons on the east coast.",
    intro:
      "A long, sheltered stretch of tide flats on the east coast — quiet in the mornings, alive with kites through the afternoon.",
    image: img("photo-1540541338287-41700207dee6"),
  },
  {
    slug: "nungwi",
    name: "Nungwi",
    region: "Zanzibar",
    short: "Swimmable coves at the northern tip of the island.",
    intro:
      "The northern tip of Zanzibar, where the tide stays high enough to swim through the day and dhows still leave from the sand.",
    image: img("photo-1568605114967-8130f3a36994"),
  },
  {
    slug: "dar-es-salaam",
    name: "Dar es Salaam",
    region: "Coast",
    short: "A working coastal city with long ocean sunsets.",
    intro:
      "Tanzania's largest city — a busy, layered coastal capital with a strong art scene, good food and easy access to the southern coast.",
    image: img("photo-1502672260266-1c1ef2d93688"),
    detail: true,
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
