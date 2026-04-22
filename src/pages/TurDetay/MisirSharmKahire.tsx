import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Plane,
  Hotel,
  Users,
  DollarSign,
  Check,
  X,
  Star,
  Sun,
  Waves,
  Mountain,
  Ship,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import sharmImg from "@/assets/images/egypt sharm el sheikh.png";
import { useSeo } from "@/hooks/use-seo";
import { buildTourJsonLd } from "@/lib/tour-schema";
import { getTourById, type TourDate } from "@/lib/api";

const TOUR_ID = 6;

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
  { icon: Calendar, label: "Süre", value: "6 Gün / 5 Gece" },
  { icon: Plane, label: "Kalkış", value: "İstanbul Sabiha Gökçen" },
  { icon: Hotel, label: "Konaklama", value: "5★ Falcon Naama Star" },
  { icon: Users, label: "Rehberlik", value: "Türkçe Profesyonel" },
  { icon: DollarSign, label: "Fiyat", value: "900$'dan başlayan" },
];

const DAILY_PROGRAM = [
  {
    day: 1,
    title: "Sharm El Şeyh'e Hoş Geldiniz",
    icon: Plane,
    highlight: false,
    description:
      "Gece 01:00 kalkışıyla A Jet'in direkt ve özel seferiyle Sharm'a uçuyorsunuz. Varışta VIP transferle 5 yıldızlı Falcon Naama Star'a geçiş. Odalara yerleşin, nefes alın — tatil başladı.",
  },
  {
    day: 2,
    title: "Çöl Ritmi: ATV Safari & Bedevi Gecesi",
    icon: Mountain,
    highlight: false,
    description:
      "Öğleden itibaren Sina Çölü'ne açılıyoruz. ATV ve buggy ile kum tepelerinde adrenalinin zirvesi, ardından geleneksel Bedevi Gecesi: akşam yemeği eşliğinde ateş, müzik ve çöl sessizliği. Bu gece unutulmaz.",
  },
  {
    day: 3,
    title: "Kahire Şaheserleri Turu",
    icon: Star,
    highlight: true,
    description:
      "Sabah erkenden Kahire'ye tam günlük tarihi yolculuk. Giza Piramitleri ve Sfenks, Papirüs Müzesi, Yeni Mısır Müzesi, Khan El-Khalili Çarşısı'nda alışveriş ve akşama Nil'de tekne turu. İnsanlığın en büyük yapıtları — bugün hepsini görüyorsunuz.",
  },
  {
    day: 4,
    title: "Ras Muhammed & Kızıldeniz'de Şnorkel",
    icon: Waves,
    highlight: false,
    description:
      "Mısır'ın en muhteşem deniz milli parkı Ras Muhammed'e sabah erkenden hareket. Şnorkelle rengarenk mercanlar ve egzotik balıklar arasında yüzme keyfi. Kızıldeniz bu gün tam anlamıyla size ait.",
  },
  {
    day: 5,
    title: "Orange Adası Tekne Turu & Tüplü Dalış",
    icon: Sun,
    highlight: false,
    description:
      "Sabah kahvaltısının ardından Orange (Giftun) Adası'na yemekli tekne turu. Tüplü dalış deneyimi, adada özgür zaman ve Kızıldeniz'in berrak mavisiyle son bir gün.",
  },
  {
    day: "5+",
    title: "Türkiye'ye Dönüş",
    icon: Ship,
    highlight: false,
    description:
      "Akşam uçuşuyla İstanbul'a dönüş. Arkada bıraktıklarınız: piramitler, mercanlar, çöl geceleri.",
  },
];

const INCLUDED = [
  "Gidiş–dönüş uçak bileti",
  "Tüm havalimanı ve şehir içi transferler",
  "Türkçe profesyonel rehberlik",
  "5 gece 5★ Falcon Naama Star konaklaması",
  "5 sabah kahvaltısı",
  "Günlük 3 su (otobüste)",
  "Sharm El Şeyh–Kahire tüm yerel turlar",
  "ATV safari, Bedevi gecesi akşam yemeği, Submarina turu, Sharm şehir turu",
];

const NOT_INCLUDED = [
  "Yurtdışı çıkış harcı (+1.250₺)",
  "Mısır vizesi (kapıda ~30$, Kahire gezisi için)",
  "Akşam yemekleri",
  "Kişisel harcamalar",
  "Minibar",
  "Müze giriş ücretleri",
  "Program dışı ekstra turlar",
];

export default function MisirSharmKahire() {
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
    title: "Ankara Mısır Turu — Sharm El Şeyh & Kahire | 6 Gün 900 USD",
    description: "Ankara'dan kalkışlı 6 günlük Mısır turu: Sharm El Şeyh 5 yıldızlı resort tatili ve Kahire piramitleri. Kişi başı 900 USD. Sponsor Hanım Turizm.",
    path: "/turlar/misir-sharm-kahire",
    image: "https://sponsorhanimtravel.com/og-sharm.jpg",
    keywords: "ankara mısır turu, sharm el şeyh ankara, kahire piramit turu, mısır tatili 2026, sharm el şeyh fiyatları, ankara seyahat acentası mısır",
    jsonLd: buildTourJsonLd({
      name: "Mısır Turu — Sharm El Şeyh & Kahire",
      description: "6 günlük Mısır turu: Sharm El Şeyh'te 5 yıldızlı resort tatili, Kahire'de piramit ve müze gezisi.",
      image: "https://sponsorhanimtravel.com/og-sharm.jpg",
      slug: "misir-sharm-kahire",
      price: 900,
      currency: "USD",
      durationDays: 6,
      destinations: ["Kahire", "Sharm El Şeyh"],
    }),
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={sharmImg}
            alt="Sharm El Şeyh & Kahire"
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
              Mısır Turu — 5★
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              5 Yıldızlı Konfor,{" "}
              <br className="hidden md:block" />
              <span className="text-primary italic">Sonsuz Macera:</span>{" "}
              Sharm El Şeyh & Kahire
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-4 font-medium tracking-wide">
              Sharm El Şeyh + Kahire | 6 Gün 5 Gece | 5★ Falcon Naama Star Otel
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Gündüz piramitlerin gölgesinde, geceleri Kızıldeniz'in kıyısında.
              Üstelik bütün bunları 5 yıldızlı konforda yaşıyorsunuz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href="/odeme?tour=6">Hemen Rezervasyon Yap</Link>
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
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
                    day.highlight
                      ? "border-primary/40 bg-primary/5"
                      : "border-border"
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
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className="text-xs font-bold text-primary uppercase tracking-widest">
                            {typeof day.day === "number"
                              ? `${day.day}. Gün`
                              : `${day.day} Gün Sonu`}
                          </span>
                          {day.highlight && (
                            <Badge
                              variant="secondary"
                              className="bg-primary/20 text-primary text-xs"
                            >
                              Turumuzun En İkonik Günü
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/5 border-secondary-border h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                    <Check className="w-6 h-6 text-green-400" />
                    Fiyata Dahil
                  </h3>
                  <ul className="space-y-4">
                    {INCLUDED.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-secondary-foreground/90"
                      >
                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/5 border-secondary-border h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                    <X className="w-6 h-6 text-red-400" />
                    Fiyata Dahil Değil
                  </h3>
                  <ul className="space-y-4">
                    {NOT_INCLUDED.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-secondary-foreground/90"
                      >
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Tur <span className="text-primary italic">Fiyatları</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4 text-sm font-bold text-foreground uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Tarih Seçin ve Rezervasyon Yapın</span>
              </div>
              {datesLoading && (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  Tarihler yükleniyor...
                </div>
              )}
              {!datesLoading && dates.length === 0 && (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  Güncel tarih bilgisi için bizimle iletişime geçin.
                </div>
              )}
              {!datesLoading && dates.length > 0 && (
                <div className="flex flex-col gap-3">
                  {dates.map((d) => (
                    <div
                      key={d.id}
                      className="flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4 hover:border-primary/40 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-base font-medium text-foreground">
                            {d.date_text || d.start_date}
                          </span>
                          {d.label && (
                            <Badge variant="outline" className="text-xs border-primary/40 text-primary">
                              {d.label}
                            </Badge>
                          )}
                        </div>
                        {d.capacity_text && (
                          <div className="text-xs text-muted-foreground mt-1">
                            Kontenjan: {d.capacity_text}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xl font-bold text-primary font-serif">
                          {formatDatePrice(d.price, d.currency)}
                        </span>
                        <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                          <Link href={`/odeme?tour=${TOUR_ID}&date=${d.id}`}>Seç</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={sharmImg}
            alt="Mısır"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              5 Yıldızlı Bu Deneyim İçin Yer Sayısı Sınırlı
            </h2>
            <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
              Kapora ile yerinizi garantileyin — kalan tutar, tur öncesi 3–7 gün içinde.
            </p>
            <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto">
              Şimdi kayıt olun
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6"
              >
                <Link href="/odeme?tour=6">Rezervasyon Yap</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-serif text-xl px-10 py-6"
              >
                <a href="https://wa.me/905444986208" target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Ulaşın
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
