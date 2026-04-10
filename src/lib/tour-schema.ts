// Tur detay sayfalari icin Schema.org TouristTrip + Offer + BreadcrumbList JSON-LD uretir.
// Google rich snippet'larda tur bilgilerini (fiyat, sure) gostermesine yardim eder.

interface TourSchemaParams {
  name: string;
  description: string;
  image: string; // Tam URL (https://...)
  slug: string;  // ornek: "umre-premium" -> /turlar/umre-premium
  price: number;
  currency: "USD" | "EUR" | "TRY";
  durationDays: number;
  destinations: string[]; // ornek: ["Mekke", "Medine"]
}

const SITE_URL = "https://sponsorhanim.com";

export function buildTourJsonLd(p: TourSchemaParams): Record<string, unknown>[] {
  const touristTrip: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: p.name,
    description: p.description,
    image: p.image,
    url: `${SITE_URL}/turlar/${p.slug}`,
    inLanguage: "tr-TR",
    touristType: p.destinations.includes("Mekke") || p.destinations.includes("Medine")
      ? ["Dini Turizm", "Hac", "Umre"]
      : ["Kültür Turu", "Tatil"],
    itinerary: p.destinations.map((d) => ({
      "@type": "City",
      name: d,
    })),
    provider: {
      "@type": "TravelAgency",
      name: "Sponsor Hanım Turizm",
      url: SITE_URL,
      telephone: "+905444986208",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ankara",
        addressCountry: "TR",
      },
    },
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: p.currency,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/turlar/${p.slug}`,
      seller: {
        "@type": "TravelAgency",
        name: "Sponsor Hanım Turizm",
      },
    },
    duration: `P${p.durationDays}D`,
  };

  const breadcrumb: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Turlar", "item": `${SITE_URL}/turlar` },
      { "@type": "ListItem", "position": 3, "name": p.name, "item": `${SITE_URL}/turlar/${p.slug}` },
    ],
  };

  return [touristTrip, breadcrumb];
}
