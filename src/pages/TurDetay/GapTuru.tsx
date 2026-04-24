import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Bus,
  Hotel,
  Users,
  Check,
  X,
  Star,
  Utensils,
  Landmark,
  Sparkles,
  Banknote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import gapImg from "@/assets/images/egypt.png";
import { useSeo } from "@/hooks/use-seo";
import { buildTourJsonLd } from "@/lib/tour-schema";
import { getTourById, type TourDate } from "@/lib/api";

const TOUR_ID = 9;

function formatDatePrice(value: string | number, currency: string): string {
  const n = typeof value === "string" ? parseFloat(value) : value;
  if (Number.isNaN(n)) return String(value);
  const sym = currency === "TRY" ? "₺" : currency === "EUR" ? "€" : "$";
  return `${n.toLocaleString("tr-TR")}${sym}`;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const INFO_ITEMS = [
  { icon: Calendar, label: "Süre", value: "4 Gün / 3 Gece" },
  { icon: Bus, label: "Ulaşım", value: "Otobüs & Uçak" },
  { icon: Hotel, label: "Konaklama", value: "4★ Oteller" },
  { icon: Users, label: "Rehberlik", value: "Türkçe Profesyonel" },
  { icon: Banknote, label: "Fiyat", value: "13.500 ₺ / kişi" },
];

const DAILY_PROGRAM = [
  {
    day: 1,
    title: "Şanlıurfa: Peygamberler Şehri",
    icon: Sparkles,
    highlight: true,
    description:
      "Ankara'dan sabah uçuşuyla Şanlıurfa'ya varış. Hz. İbrahim'in doğduğuna inanılan mağara, Balıklıgöl, Dergah ve Rızvaniye Camii ziyareti. Öğle yemeğinde Urfa'nın meşhur ciğer kebabı. Akşam sıra gecesi eşliğinde geleneksel Urfa sofraları.",
  },
  {
    day: 2,
    title: "Göbeklitepe & Harran",
    icon: Landmark,
    highlight: true,
    description:
      "Sabah dünyanın en eski tapınağı, 12.000 yıllık Göbeklitepe'yi ziyaret. Ardından tarihi Harran: konik kubbeli evler, Harran Üniversitesi kalıntıları, Hz. Yakup'un kuyusu. Akşam Urfa'ya dönüş ve serbest zaman.",
  },
  {
    day: 3,
    title: "Gaziantep: Lezzetin Başkenti",
    icon: Utensils,
    highlight: true,
    description:
      "Sabah Gaziantep'e hareket. Zeugma Mozaik Müzesi'nde Çingene Kızı mozaiği, Gaziantep Kalesi, tarihi Bakırcılar Çarşısı. Öğle yemeğinde Gaziantep lahmacunu ve beyran çorbası. Akşam Emine Göğüş Mutfak Müzesi ziyareti ve baklavada kapanış.",
  },
  {
    day: 4,
    title: "Mardin: Taşın Şiiri",
    icon: Star,
    highlight: false,
    description:
      "Mardin eski şehir turu: Ulu Cami, Kasımiye Medresesi, Mardin Müzesi ve taş sokaklar. Öğleden sonra Deyrulzafaran Manastırı ziyareti. Akşam Mardin'den Ankara'ya dönüş uçuşu.",
  },
];

const INCLUDED = [
  "Ankara – Şanlıurfa – Mardin – Ankara uçak bileti",
  "Şehirler arası lüks otobüs transferi",
  "3 gece 4★ otel konaklaması",
  "Günlük açık büfe kahvaltı",
  "3 öğle ve 3 akşam yemeği (yerel lezzetler)",
  "Urfa sıra gecesi programı",
  "Profesyonel Türkçe rehberlik",
  "Göbeklitepe, Zeugma Müzesi ve Deyrulzafaran giriş ücretleri",
];

const NOT_INCLUDED = [
  "Kişisel harcamalar",
  "Belirtilmemiş öğünler ve içecekler",
  "Ekstra turlar ve fakültatif geziler",
  "Tek kişilik oda farkı",
];

export default function GapTuru() {
  const [dates, setDates] = useState<TourDate[]>([]);
  const [datesLoading, setDatesLoading] = useState(true);

  useEffect(() => {
    getTourById(TOUR_ID).then((tour) => {
      const today = new Date().toISOString().slice(0, 10);
      const all = tour?.dates ?? [];
      const upcoming = all.filter((d) => !d.start_date || d.start_date >= today);
      setDates(upcoming.length > 0 ? upcoming : all);
      setDatesLoading(false);
    });
  }, []);

  useSeo({
    title: "Ankara GAP Turu 2026 | 4 Gün 13.500₺ — Şanlıurfa, Gaziantep, Mardin",
    description: "Ankara'dan kalkışlı 4 günlük GAP turu: Şanlıurfa Balıklıgöl, Göbeklitepe, Harran, Gaziantep lezzetleri, Mardin taş evler. Kişi başı 13.500 TL. Sponsor Hanım Turizm.",
    path: "/turlar/gap-turu",
    image: "https://sponsorhanimtravel.com/og-gap.jpg",
    keywords: "ankara gap turu, gap turu 2026, şanlıurfa turu, göbeklitepe gezi, gaziantep mardin turu, güneydoğu anadolu turu, harran gezi, ankara seyahat acentası gap",
    jsonLd: buildTourJsonLd({
      name: "GAP Turu — Şanlıurfa, Gaziantep, Mardin",
      description: "4 günlük Güneydoğu Anadolu turu: Göbeklitepe, Balıklıgöl, Harran, Gaziantep lezzetleri ve Mardin.",
      image: "https://sponsorhanimtravel.com/og-gap.jpg",
      slug: "gap-turu",
      price: 13500,
      currency: "TRY",
      durationDays: 4,
      destinations: ["Şanlıurfa", "Gaziantep", "Mardin", "Harran"],
    }),
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={gapImg}
            alt="GAP Turu — Mardin ve Göbeklitepe"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[1px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-primary/90 text-primary-foreground text-sm px-4 py-1 mb-6">
              GAP Turu — 4 Gün 3 Gece
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Güneydoğu Anadolu'nun{" "}
              <br className="hidden md:block" />
              <span className="text-primary italic">Kalbinde</span> Bir Yolculuk
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light">
              12.000 yıllık Göbeklitepe'den Mardin'in taş sokaklarına, Gaziantep'in lezzetinden Şanlıurfa'nın ruhaniyetine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href={`/odeme?tour=${TOUR_ID}`}>Hemen Rezervasyon Yap</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <a href="https://wa.me/905444986208" target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Bilgi Al
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {INFO_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {item.label}
                </div>
                <div className="font-serif font-bold text-sm text-foreground">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Program */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Günlük <span className="text-primary italic">Program</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mt-6" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {DAILY_PROGRAM.map((day, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card
                  className={`overflow-hidden transition-shadow hover:shadow-lg ${
                    day.highlight ? "border-primary/40 bg-primary/5" : "border-border"
                  }`}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div
                        className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${
                          day.highlight
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <day.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">
                          {day.day}. Gün
                        </span>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mt-2 mb-3">
                          {day.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Fiyata Neler <span className="text-primary italic">Dahil?</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/5 border-secondary-border h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6 text-green-400" />
                  Fiyata Dahil
                </h3>
                <ul className="space-y-4">
                  {INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary-foreground/90">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/5 border-secondary-border h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                  <X className="w-6 h-6 text-red-400" />
                  Fiyata Dahil Değil
                </h3>
                <ul className="space-y-4">
                  {NOT_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary-foreground/90">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Tur <span className="text-primary italic">Tarihleri</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          {datesLoading ? (
            <p className="text-center text-muted-foreground">Tarihler yükleniyor...</p>
          ) : dates.length === 0 ? (
            <p className="text-center text-muted-foreground">Güncel tarih için lütfen bizimle iletişime geçin.</p>
          ) : (
            <Card className="overflow-hidden border-primary/20">
              <CardContent className="p-0">
                <div className="grid grid-cols-3 bg-primary/10 p-4 text-sm font-bold text-foreground uppercase tracking-wider">
                  <span>Tarih</span>
                  <span className="text-center">Fiyat</span>
                  <span className="text-right">Rezervasyon</span>
                </div>
                {dates.map((d, i) => (
                  <div
                    key={d.id}
                    className={`grid grid-cols-3 p-4 items-center ${
                      i % 2 === 0 ? "bg-card" : "bg-muted/30"
                    }`}
                  >
                    <span className="text-sm font-medium text-foreground">{d.date_text}</span>
                    <span className="text-center text-primary font-serif font-bold">
                      {formatDatePrice(d.price, d.currency)}
                    </span>
                    <Button asChild size="sm" className="justify-self-end">
                      <Link href={`/odeme?tour=${TOUR_ID}&date=${d.id}`}>Seç</Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={gapImg} alt="GAP" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Güneydoğu'nun Ruhunu Yaşayın
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Tarih, lezzet ve kültür — dört günde bir ömrün hikayesi. Kontenjanlar sınırlı.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6">
              <Link href={`/odeme?tour=${TOUR_ID}`}>Rezervasyon Yap</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-serif text-xl px-10 py-6">
              <a href="https://wa.me/905444986208" target="_blank" rel="noopener noreferrer">
                WhatsApp ile Ulaşın
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
