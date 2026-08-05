export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  body: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`;

export const journalPosts: JournalPost[] = [
  {
    slug: "matemwe-tide-notes",
    title: "Notes from Matemwe at low tide",
    excerpt:
      "A slow morning on Zanzibar's northeast coast, where the reef reveals a different landscape with every tide.",
    category: "Coast",
    date: "July 18, 2026",
    image: img("photo-1507525428034-b723cf961d3e"),
    body: [
      "Matemwe begins quietly. Before the heat gathers, the beach is pale and nearly empty, and the Indian Ocean seems to stretch without interruption toward Mnemba Island. At low tide, the water retreats far enough to expose paths across the reef, leaving shallow pools that reflect the sky.",
      "The tide chart matters here because it changes the shape of the day. Swimming is best planned around higher water, while the hours around low tide are for walking, watching fishermen prepare their boats and seeing seaweed farmers move carefully between the shallows.",
      "A good morning starts early with coffee on the veranda, followed by a guided reef walk or a slow stroll along the sand. Reef shoes are useful, and a local guide adds context to what might otherwise look like an empty stretch of ocean floor.",
      "By midday, the water begins to return. Dhows drift closer to shore, the horizon turns a deeper blue and the beach becomes a place to settle rather than explore. Lunch can be simple: grilled fish, coconut rice, citrus and something cold to drink.",
      "Matemwe rewards travellers who leave space in the schedule. The coast does not need to be filled with activities. Its appeal is the rhythm itself: the water arriving and leaving, the changing light and the sense that each hour offers a slightly different version of the same beautiful place.",
    ],
  },
  {
    slug: "a-week-on-the-northern-circuit",
    title: "A week on Tanzania's northern circuit",
    excerpt:
      "How to combine Tarangire, Ngorongoro and the Serengeti without turning your safari into a race.",
    category: "Safari",
    date: "July 12, 2026",
    image: img("photo-1523805009345-7448845a9e53"),
    body: [
      "A first safari often begins with the temptation to see everything. Tanzania's northern circuit makes that possible on paper, but the best journeys are shaped by time rather than distance. Seven days is enough for a memorable route when each stop is given room to breathe.",
      "Begin with a night in Arusha. It creates space after an international flight and gives the journey a gentler start. The following morning, drive to Tarangire, where baobabs, elephants and the Tarangire River create a landscape that feels distinct from the plains farther north.",
      "Two nights in Tarangire allow for an evening drive, a full day in the park and an unhurried departure. From there, continue toward the Ngorongoro Highlands. A lodge near the crater rim or in the surrounding coffee country makes the transition part of the experience.",
      "The crater deserves an early start. Wildlife gathers in a relatively compact area, but the day still feels expansive when there is time for a picnic and pauses away from the busiest viewpoints.",
      "Finish with three nights in the Serengeti. The exact area should follow the season: central plains for year-round wildlife, the south during calving months and the western or northern corridors when the migration moves through. Staying longer in one camp is often more rewarding than changing location every night.",
      "The strongest itinerary is not the one with the most pins on a map. It is the one that leaves enough time to watch a pride of lions wake, follow elephants without checking the clock and return to camp before sunset with the feeling that the day unfolded naturally.",
    ],
  },
  {
    slug: "stone-town-in-the-morning",
    title: "Stone Town in the morning",
    excerpt:
      "The walk we always suggest before the lanes warm up and the old city fully wakes.",
    category: "Culture",
    date: "July 4, 2026",
    image: img("photo-1596436889106-be35e843f974"),
    body: [
      "Stone Town is easiest to understand early. The lanes are cooler, deliveries arrive by handcart and the carved doors can be seen without the movement of the afternoon crowds.",
      "Start near the waterfront and walk inward without trying to follow a perfect route. The old city was not designed as a grid, and getting slightly lost is part of the experience. Look up as often as you look ahead: balconies, shutters and cables tell as much of the story as the street itself.",
      "The market becomes lively quickly. Fruit, spices, fish and household goods move through narrow spaces, and the atmosphere is energetic rather than staged. A local guide can help explain the city's Swahili, Arab, Indian and European influences without reducing them to a list of landmarks.",
      "Pause for coffee or spiced tea before the day becomes hot. Small cafés hidden behind courtyards often offer the most peaceful stops. From there, continue toward the old fort, the seafront and the shaded edges of Forodhani Gardens.",
      "Stone Town is best treated as a living neighbourhood, not an outdoor museum. Walk respectfully, dress with the local context in mind and allow enough time for conversations, shops and unexpected turns.",
    ],
  },
  {
    slug: "a-weekend-in-arusha",
    title: "A quiet weekend in Arusha",
    excerpt:
      "Coffee estates, Mount Meru views and the places worth slowing down for before or after safari.",
    category: "Highlands",
    date: "June 26, 2026",
    image: img("photo-1520250497591-112f2f40a3f4"),
    body: [
      "Arusha is often treated as a gateway, but it works equally well as a destination for a slow weekend. The city sits beneath Mount Meru, surrounded by coffee country and cooler highland air.",
      "Begin with a relaxed morning on a coffee estate. A guided walk through the fields explains how the crop is grown, harvested and processed, while lunch in the gardens gives the day an easy pace.",
      "Arusha National Park is close enough for a day trip and varied enough to feel like a complete excursion. Forest, crater lakes, giraffes and colobus monkeys create a softer introduction to wildlife than the larger northern parks.",
      "Back in town, explore local design shops, galleries and restaurants that work with Tanzanian ingredients. Arusha's most interesting places are spread out, so a driver makes the day simpler.",
      "Leave one morning free. Sit with coffee, watch the mountain appear through the clouds and allow the transition into or out of safari to feel like part of the journey rather than an interruption.",
    ],
  },
  {
    slug: "the-great-migration-by-season",
    title: "The Great Migration, season by season",
    excerpt:
      "A practical guide to where the herds may be and what each part of the year feels like.",
    category: "Wildlife",
    date: "June 18, 2026",
    image: img("photo-1516426122078-c23e76319801"),
    body: [
      "The Great Migration is a continuous movement rather than a single event. More than a fixed calendar, it follows rainfall, fresh grass and water across the Serengeti ecosystem.",
      "From roughly January through March, many herds gather on the southern plains around Ndutu. This is calving season, when open grasslands fill with young wildebeest and predators take advantage of the abundance.",
      "As the long rains arrive, the herds begin moving northwest. April and May can bring dramatic skies, greener landscapes and fewer vehicles, although road conditions may be less predictable.",
      "Between June and July, movement often reaches the western corridor. River crossings here can be powerful, but timing always depends on the year. Later, from July into October, attention shifts north toward the Mara River.",
      "By November and December, short rains encourage the herds south again. The central Serengeti remains strong throughout the year because resident wildlife does not migrate with the main herds.",
      "Choose dates according to the experience you value, not only the possibility of a crossing. Calving, green season, predator activity and quieter camps can be just as memorable as the most photographed moments.",
    ],
  },
  {
    slug: "zanzibar-beyond-the-beach",
    title: "Zanzibar beyond the beach",
    excerpt:
      "Spice farms, village roads, forest walks and the island experiences that add depth to a coastal stay.",
    category: "Island",
    date: "June 10, 2026",
    image: img("photo-1540541338287-41700207dee6"),
    body: [
      "Zanzibar's beaches are reason enough to visit, but the island becomes more memorable when the coast is connected to its farms, forests, villages and old city.",
      "A spice farm visit offers an introduction to cloves, cinnamon, vanilla, nutmeg and tropical fruit. The best visits are small and conversational, with time to understand how crops are grown rather than simply identifying them.",
      "Jozani Forest provides a change of landscape. Boardwalks pass through mangroves, and the forest is known for endemic red colobus monkeys. An early visit is cooler and usually quieter.",
      "On the southeast coast, village roads lead between seaweed farms, small workshops and long tide flats. These areas are best explored with guides who live locally and can arrange visits respectfully.",
      "A day in Stone Town adds another layer: architecture, food, trade routes and a history that is both beautiful and complex. Combining the old city with a few quiet beach days creates a more complete picture of Zanzibar.",
    ],
  },
  {
    slug: "planning-a-tanzania-honeymoon",
    title: "Planning a honeymoon in Tanzania",
    excerpt:
      "How to balance safari adventure, private moments and a few restorative days by the ocean.",
    category: "Journeys",
    date: "May 30, 2026",
    image: img("photo-1613490493576-7fde63acd811"),
    body: [
      "Tanzania works especially well for honeymoons because the journey can move naturally between very different moods. Safari brings early mornings and shared discovery; the coast brings privacy, warmth and time with no schedule.",
      "A balanced itinerary usually begins with one easy night in Arusha, followed by four to six nights on safari. Choose fewer camps and longer stays so that the journey does not become a sequence of packing days.",
      "Private vehicles are worth considering. They allow game drives to follow your interests and create space for slow breakfasts, photography and spontaneous stops.",
      "After safari, fly directly to Zanzibar when possible. A beach villa or small retreat gives the final part of the trip a softer rhythm. Three nights can feel brief; five or six allows enough time for both activities and complete rest.",
      "Small details matter more than elaborate surprises. A private dinner, a sundowner in a quiet location, thoughtful room preparation and seamless transfers create a sense of care without making the trip feel over-planned.",
    ],
  },
  {
    slug: "responsible-luxury-in-tanzania",
    title: "What responsible luxury looks like in Tanzania",
    excerpt:
      "Thoughtful stays are shaped by local employment, careful operations and experiences that respect place.",
    category: "Perspective",
    date: "May 22, 2026",
    image: img("photo-1582719508461-905c673771fd"),
    body: [
      "Luxury travel is often described through space, design and privacy. In Tanzania, it should also be measured by how a property relates to its community, landscape and staff.",
      "Local employment is one of the clearest indicators. Long-term training, fair opportunities and visible local leadership matter more than decorative claims about sustainability.",
      "Energy and water use also shape responsible operations, particularly in remote areas and on islands where resources are limited. Solar power, refillable water systems and careful waste handling are practical choices rather than marketing language.",
      "Experiences should be arranged with guides and operators who know the place deeply and benefit directly from the visit. Smaller groups and respectful cultural encounters create better experiences for both guests and hosts.",
      "Responsible luxury does not require sacrificing comfort. It means choosing comfort that is connected to its setting: good design using appropriate materials, food sourced thoughtfully and service delivered by people whose knowledge is valued.",
    ],
  },
];

export const getJournalPost = (slug: string) =>
  journalPosts.find((post) => post.slug === slug);
