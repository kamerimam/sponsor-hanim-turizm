// Tur detay sayfalari icin Schema.org TouristTrip + Offer JSON-LD uretir.
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

export function buildTourJsonLd(p: TourSchemaParams): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: p.name,
    description: p.description,
    image: p.image,
    url: `${SITE_URL}/turlar/${p.slug}`,
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
    },
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: p.currency,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/turlar/${p.slug}`,
      validFrom: new Date().toISOString().slice(0, 10),
    },
    duration: `P${p.durationDays}D`,
  };
}
