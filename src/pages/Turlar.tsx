import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSeo } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Loader2 } from "lucide-react";
import { getTours, type Tour } from "@/lib/api";

const FILTERS = ["Tümü", "Mısır", "Bali", "Hac", "Umre", "Kombine"];

export default function Turlar() {
  useSeo({
    title: "Turlarımız",
    description: "Sponsor Hanım Turizm tur paketleri - Hac, Umre, Mısır, Bali turları. Konforlu ve güvenilir yolculuk seçenekleri.",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Yolculuğunuzu <span className="text-primary italic">Seçin</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Sizin için özenle hazırladığımız, konfor ve maneviyatın buluştuğu tur paketlerimizi inceleyin.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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
        {!loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border bg-card shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
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
                  
                  <p className="text-muted-foreground text-sm flex-1">
                    {tour.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-foreground/80 gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground/80 gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Gidiş - Dönüş: İstanbul</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-medium">Kişi Başı</span>
                    <span className="text-2xl font-bold text-foreground">{tour.price}</span>
                  </div>
                  <div className="flex gap-2">
                    {tour.detail_link && (
                      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <Link href={tour.detail_link}>Detaylar</Link>
                      </Button>
                    )}
                    <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Link href={`/odeme?tour=${tour.id}`}>Seç</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
