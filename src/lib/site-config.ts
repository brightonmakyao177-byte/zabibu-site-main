// Central site configuration — edit contact details, socials and policy URLs here.
export const siteConfig = {
  brand: {
    name: "Zabibu Collection",
    tagline: "Curated stays in Tanzania",
  },
  contact: {
    email: "Info@zabibucollection.co.tz",
    phone: "+255 717 093 979",
    whatsapp: "+255 717 093 979",
    officeAddress: "Njiro, Arusha, Tanzania",
  },
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    pinterest: "https://pinterest.com/",
  },
  currency: "USD",
  routes: {
    home: "/",
    stays: "/properties",
    destinations: "/destinations",
    experiences: "/experiences",
    journal: "/journal",
    about: "/about",
    contact: "/contact",
    faq: "/faq",
    favorites: "/favorites",
    listProperty: "/list-your-property",
    booking: "/booking",
    privacy: "/privacy-policy",
    bookingTerms: "/booking-terms",
    cancellation: "/cancellation-policy",
    guestGuidelines: "/guest-guidelines",
  },
} as const;
