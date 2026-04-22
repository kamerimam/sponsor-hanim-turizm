import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSeo } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Loader2, BedDouble, CreditCard, Users } from "lucide-react";
import { getTours, type Tour, type TourDate } from "@/lib/api";

const FILTERS = ["Tümü", "Mısır", "Bali", "Dubai", "GAP", "Umre", "Hac", "Kombine"];

function formatPrice(value: string | number, currency: string): string {
  const n = typeof value === "string" ? parseFloat(value) : value;
  if (Number.isNaN(n)) return String(value);
  if (currency === "TRY") {
    return `${n.toLocaleString("tr-TR")} ₺`;
  }
  if (currency === "EUR") return `${n.toLocaleString("tr-TR")} €`;
  return `${n.toLocaleString("tr-TR")} $`;
}

function capacityBadgeColor(text: string | null | undefined): string {
  if (!text) return "bg-muted text-foreground/70";
  const t = text.toLowerCase();
  if (t.includes("boş") && !t.includes("boşluk")) return "bg-emerald-500/15 text-emerald-700 border-emerald-500/30";
  if (t.includes("boşluk")) return "bg-amber-500/15 text-amber-700 border-amber-500/30";
  if (t.includes("kişi")) return "bg-rose-500/15 text-rose-700 border-rose-500/30";
  return "bg-muted text-foreground/70";
}

export default function Turlar() {
  useSeo({
    title: "Tur Paketleri | Ankara Hac, Umre, Mısır, Bali Turları",
    description: "Ankara'dan kalkışlı tur paketleri — Hac, VIP Umre, Mısır Hurghada, Mısır Sharm El Şeyh, Bali ve kombine turlar. Sponsor Hanım Turizm güvencesiyle.",
    path: "/turlar",
    keywords: "ankara tur paketleri, ankara umre turu, ankara hac turu, ankara mısır turu, ankara bali turu, ankara seyahat acentası, umre fiyatları 2026, hac fiyatları 2026",
  });

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Tümü");

  useEffect(() => {
    getTours().then((data) => {
      setTours(data);
      setLoading(false);
    });
  }, []);

  const filteredTours = tours.filter(
    tour => activeFilter === "Tümü" || tour.type === activeFilter
  );

  return (
    <div className="flex-1 bg-background pt-8 pb-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Yolculuğunuzu <span className="text-primary italic">Seçin</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Sizin için özenle hazırladığımız, konfor ve maneviyatın buluştuğu tur paketlerimizi inceleyin.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Tüm turlarımızda <span className="font-medium text-foreground">2 taksit ödeme</span> imkânı sunulmaktadır.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Tour Grid */}
        {!loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredTours.map((tour, index) => {
            const dates = (tour.dates ?? []) as TourDate[];
            const today = new Date().toISOString().slice(0, 10);
            const upcoming = dates.filter(d => !d.start_date || d.start_date >= today);
            const visibleDates = upcoming.length > 0 ? upcoming : dates;

            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border bg-card shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-foreground/20 z-10 transition-opacity group-hover:opacity-0" />
                    <img
                      src={tour.image_url}
                      alt={tour.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 right-4 z-20 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {tour.type}
                    </Badge>
                  </div>

                  <CardContent className="flex-1 p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{tour.title}</h3>
                      <p className="text-sm font-medium text-primary uppercase tracking-wide">{tour.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      {tour.description}
                    </p>

                    <div className="flex flex-col gap-2 pt-3 border-t border-border text-sm">
                      <div className="flex items-center text-foreground/80 gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-foreground/80 gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Gidiş - Dönüş: İstanbul</span>
                      </div>
                      {tour.room_info && (
                        <div className="flex items-start text-foreground/80 gap-2">
                          <BedDouble className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{tour.room_info}</span>
                        </div>
                      )}
                      <div className="flex items-center text-foreground/80 gap-2">
                        <CreditCard className="w-4 h-4 text-primary" />
                        <span>{tour.payment_terms || "2 taksit"}</span>
                      </div>
                    </div>

                    {/* Tarih listesi */}
                    {visibleDates.length > 0 && (
                      <div className="pt-3 border-t border-border">
                        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>Kalkış Tarihleri</span>
                        </div>
                        <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
                          {visibleDates.map((d) => (
                            <div
                              key={d.id}
                              className="flex items-center justify-between gap-3 rounded-md border border-border/60 bg-muted/30 px-3 py-2"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground truncate">
                                  {d.date_text || d.start_date}
                                </div>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                  <span className="text-sm font-semibold text-primary">
                                    {formatPrice(d.price, d.currency)}
                                  </span>
                                  {d.capacity_text && (
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${capacityBadgeColor(d.capacity_text)}`}>
                                      <Users className="w-3 h-3 inline-block mr-0.5 -mt-0.5" />
                                      {d.capacity_text}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <Button
                                asChild
                                size="sm"
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0"
                              >
                                <Link href={`/odeme?tour=${tour.id}&date=${d.id}`}>Seç</Link>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {visibleDates.length === 0 && (
                      <div className="pt-3 border-t border-border text-sm text-muted-foreground">
                        Tarih bilgisi için bizimle iletişime geçin.
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">Başlangıç fiyatı</span>
                      <span className="text-xl font-bold text-foreground">{tour.price}</span>
                    </div>
                    <div className="flex gap-2">
                      {tour.detail_link && (
                        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                          <Link href={tour.detail_link}>Detaylar</Link>
                        </Button>
                      )}
                      <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        <Link href={`/odeme?tour=${tour.id}`}>Rezervasyon</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>}

        {!loading && filteredTours.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">Bu kategoride henüz tur bulunmamaktadır.</p>
          </div>
        )}

      </div>
    </div>
  );
}
