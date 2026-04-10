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
  Car,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import baliImg from "@/assets/images/bali.png";
import { useSeo } from "@/hooks/use-seo";
import { buildTourJsonLd } from "@/lib/tour-schema";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const INFO_ITEMS = [
  { icon: Calendar, label: "Süre", value: "7 Gün / 6 Gece" },
  { icon: Plane, label: "Kalkış", value: "İstanbul Havalimanı — 12:00" },
  { icon: Hotel, label: "Konaklama", value: "3 farklı 4★ otel" },
  { icon: Users, label: "Kontenjan", value: "Maks. 10 kişi" },
  { icon: Car, label: "Araç", value: "Günlük 10 saat VIP özel araç" },
  { icon: DollarSign, label: "Fiyat", value: "1.650 € / kişi" },
];

const DAILY_PROGRAM = [
  {
    day: 1,
    title: "Bali'ye İlk Adım",
    icon: Plane,
    highlight: false,
    description:
      "İstanbul Havalimanı'nda saat 09:00'da buluşma, 12:00 kalkışıyla Qatar Airways'in konforlu seferiyle yola çıkıyoruz. Doha aktarmasının ardından Bali'ye varış — VIP karşılama ve özel transferle Seminyak'taki otelinize geçiş. Check-in sonrası serbest zaman: deniz, alışveriş ya da meşhur Bali masajıyla ilk geceye merhaba. Geceyi Atlas Beach Club'ın renkli atmosferinde kapatıyoruz.",
  },
  {
    day: 2,
    title: "Ubud: Doğa, Kültür & Kahve",
    icon: Star,
    highlight: true,
    highlightLabel: "Instagram'ın En Sevdiği Gün",
    description:
      "Sabah Tegalalang'ın nefes kesen pirinç teraslarında fotoğraf molası. Tegenungan Şelalesi'nin serinliği, ardından Tirta Empul Tapınağı'nda yüzyıllık kutsal su seremonisi. Luwak Coffee Farm'da dünyanın en özel kahvesini tatmak, Maymun Ormanı'nda beklenmedik karşılaşmalar ve Ubud Pazarı'nda el sanatları keşfi. Akşam Finns Beach Club'ta Bali'nin en iyi gün batımı.",
  },
  {
    day: 3,
    title: "Kuzey Bali'nin Tapınakları & Efsanevi Manzaralar",
    icon: Mountain,
    highlight: false,
    description:
      "Okyanus üzerinde yükselen Tanah Lot Tapınağı ile başlayan gün, göl ortasındaki gizemli Ulun Danu Bratan Tapınağı ile devam ediyor. Bali'nin sosyal medyada en çok paylaşılan noktası Handara Gate önünde unutulmaz fotoğraflar. Tropikal meyve pazarında yerel tatlar ve günün finali: Uluwatu Tapınağı'nda Hint Okyanusu manzarasında Kecak Ateş Dansı gösterisi.",
  },
  {
    day: "4–5",
    title: "Gili Adaları: Bali'nin Saklı Cenneti",
    icon: Waves,
    highlight: true,
    highlightLabel: "Turumuzun Fark Yaratan Deneyimi",
    description:
      "1,5 saatlik feribot yolculuğuyla motorlu araçların yasak olduğu, zamanın durduğu Gili Adaları'na varış. İki gün boyunca: snorkel ile kaplumbağalarla birlikte yüzme, adalar turu, açık hava sineması, ateş gösterileri, stand-up paddle boarding ve kano (drone çekimi dahil), sahilde at binme... Geceleri sahil barlarında Hint Okyanusu ufku. Çoğu tur bunu programa almaz — biz aldık.",
  },
  {
    day: 6,
    title: "Serbest Gün & Ekstra Seçenekler",
    icon: Sun,
    highlight: false,
    description:
      "Otelinize check-in sonrası tamamen özgür bir gün. İsteyenler için: Taro Fil Çiftliği'nde doğa yürüyüşü, alışveriş, sahil keyfi ya da Nusa Penida Adası'nda Broken Beach turu (ekstra). Karar sizin.",
  },
  {
    day: 7,
    title: "Vedanın En Güzel Hali",
    icon: Ship,
    highlight: false,
    description:
      "25 Ocak saat 00:50 kalkışıyla Qatar Airways ile Doha üzerinden İstanbul'a dönüş. İstanbul'a varış: 25 Ocak 12:20. Bavulunuzda adanın kokusu, kalbinizde bir \"bir gün tekrar döneceğim\" hissi.",
  },
];

const ACCOMMODATIONS = [
  { date: "19–22 Ocak", hotel: "Horison Ultima Seminyak Bali", stars: "4★", rating: "8.4" },
  { date: "22–24 Ocak", hotel: "Ombak Sunset — Gili Adası", stars: "4★", rating: "8.7" },
  { date: "24–25 Ocak", hotel: "Kuta Seaview Beach Resort", stars: "4★", rating: "8.7" },
];

const INCLUDED = [
  "Gidiş–dönüş uçak bileti (Qatar Airways)",
  "VIP havalimanı karşılama ve tüm transferler",
  "Günlük 10 saat özel VIP araç, şoför, benzin ve park",
  "Türkçe asistanlık hizmeti",
  "6 gece 4★ otel konaklaması",
  "Tüm plaj ve tur giriş ücretleri",
  "Organizasyon ve rezervasyon desteği",
];

const NOT_INCLUDED = [
  "Öğle ve akşam yemekleri ile içecekler",
  "Ekstra turlar ve aktiviteler (snorkel 35$, drone 35$, at binme 30$, fil çiftliği 45$)",
  "Kişisel harcamalar",
  "Yurtdışı çıkış harcı (1.250₺)",
  "Bali girişinde \"Love Bali\" vergisi (10$)",
];

export default function BaliGiliAdalari() {
  useSeo({
    title: "Ankara Bali & Gili Adaları Turu | 7 Gün 1.650 EUR",
    description: "Ankara'dan kalkışlı 7 günlük Bali ve Gili Adaları turu. Pirinç terasları, tapınaklar ve turkuaz deniz. Kişi başı 1.650 EUR. Sponsor Hanım Turizm.",
    path: "/turlar/bali-gili-adalari",
    image: "https://sponsorhanim.com/og-bali.jpg",
    keywords: "ankara bali turu, gili adaları turu ankara, endonezya tatili 2026, bali turu fiyatları, uzakdoğu turu ankara, ankara seyahat acentası bali",
    jsonLd: buildTourJsonLd({
      name: "Bali & Gili Adaları Turu",
      description: "7 günlük Bali ve Gili Adaları turu. Pirinç terasları, tapınaklar, turkuaz deniz ve tropikal deneyimler.",
      image: "https://sponsorhanim.com/og-bali.jpg",
      slug: "bali-gili-adalari",
      price: 1650,
      currency: "EUR",
      durationDays: 7,
      destinations: ["Ubud", "Seminyak", "Gili Trawangan"],
    }),
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={baliImg}
            alt="Bali & Gili Adaları"
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
              Bali Turu — 7 Gün 6 Gece
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Cennet Bir Adada{" "}
              <br className="hidden md:block" />
              <span className="text-primary italic">Kaybolun:</span>{" "}
              Bali & Gili Adaları
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-4 font-medium tracking-wide">
              7 Gün 6 Gece | Qatar Airways | VIP Araç & Türkçe Asistanlık | Maks. 10 Kişi
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Pirinç teraslarının arasında bisiklet, okyanus üzerindeki tapınaklarda gün batımı,
              Gili'de kaplumbağalarla dalış... Bali sadece bir tatil değil — bir dönüşüm.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href="/odeme?tour=7">Hemen Rezervasyon Yap</Link>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                              : `${day.day}. Gün`}
                          </span>
                          {day.highlight && (
                            <Badge
                              variant="secondary"
                              className="bg-primary/20 text-primary text-xs"
                            >
                              {day.highlightLabel || "Turumuzun En İkonik Günü"}
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

      {/* Accommodations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Konaklama <span className="text-primary italic">Detayları</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid grid-cols-4 bg-primary/10 p-4 text-sm font-bold text-foreground uppercase tracking-wider">
                <span>Tarih</span>
                <span className="col-span-2">Otel</span>
                <span className="text-right">Puan</span>
              </div>
              {ACCOMMODATIONS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 p-4 items-center ${
                    i % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <span className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{row.date}</span>
                  </span>
                  <span className="col-span-2 text-foreground font-medium text-sm">
                    {row.hotel}{" "}
                    <Badge variant="outline" className="text-xs ml-1">
                      {row.stars}
                    </Badge>
                  </span>
                  <span className="text-right text-lg font-bold text-primary font-serif">
                    {row.rating}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Oteller doluluğa göre benzer veya daha iyi alternatiflerle güncellenebilir.
          </p>
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
              Fiyat & <span className="text-primary italic">Kayıt</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 bg-primary/10 p-4 text-sm font-bold text-foreground uppercase tracking-wider">
                <span>Detay</span>
                <span className="text-right">Tutar</span>
              </div>
              {[
                { label: "Kişi başı fiyat (2 kişilik oda)", value: "1.650 €" },
                { label: "Single oda farkı", value: "+350 €" },
                { label: "Ön ödeme (kesin kayıt için)", value: "1.000 €" },
                { label: "Kalan ödeme", value: "Tur tarihinden 1 ay önce" },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 p-4 items-center ${
                    i % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <span className="text-foreground font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{row.label}</span>
                  </span>
                  <span className="text-right text-xl font-bold text-primary font-serif">
                    {row.value}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">İptal Politikası:</strong> Ön ödeme sonrası 30 gün öncesine kadar tam iade. 30 günden kısa iptallerde iade yapılmaz. Uçak bileti kesildikten sonra bilet bedeli iade edilmez.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={baliImg}
            alt="Bali"
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
              Kontenjan Sadece 10 Kişi
            </h2>
            <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
              Gili Adaları'nı çoğu tur programa almaz — biz aldık.
              Yerinizi şimdi ayırtın, bu deneyimi kaçırmayın.
            </p>
            <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto">
              Hemen kayıt olun
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6"
              >
                <Link href="/odeme?tour=7">Rezervasyon Yap</Link>
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
