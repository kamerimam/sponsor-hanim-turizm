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
  Moon,
  Heart,
  BookOpen,
  Sunrise,
  Crown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import premiumImg from "@/assets/images/premium.png";
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
  { icon: Calendar, label: "Süre", value: "14 Gün / 13 Gece" },
  { icon: Plane, label: "Kalkış", value: "İstanbul Havalimanı" },
  { icon: Hotel, label: "Konaklama", value: "5★ Kabe Manzaralı" },
  { icon: Users, label: "Rehberlik", value: "Uzman Din Görevlisi" },
  { icon: Crown, label: "Hizmet", value: "VIP Transfer & Özel Araç" },
  { icon: DollarSign, label: "Fiyat", value: "4.500$ / kişi" },
];

const DAILY_PROGRAM = [
  {
    day: 1,
    title: "İstanbul'dan Kutsal Topraklara",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "İstanbul Havalimanı'ndan direkt uçuşla Medine'ye hareket. Havalimanında VIP karşılama, özel araçla 5 yıldızlı otelinize transfer. Check-in sonrası Mescid-i Nebevi'ye ilk ziyaret — Peygamber Efendimiz'in şehrinde ilk adımınız. Bu anı hiç unutmayacaksınız.",
  },
  {
    day: "2–5",
    title: "Medine: Huzurun Başkenti",
    icon: Moon,
    highlight: true,
    highlightLabel: "Manevi Yolculuğun Kalbi",
    description:
      "Dört gün boyunca Medine'nin ruhani atmosferinde: Mescid-i Nebevi'de vakit namazları ve hatimler, Ravza-i Mutahhara ziyareti, Cennetü'l-Baki Kabristanı, Uhud Dağı ve Şehitliği, Kuba Mescidi (İslam'ın ilk mescidi), Kıbleteyn Mescidi, Yedi Mescitler bölgesi ve Medine'nin tarihi hurma bahçeleri. Her an bir dua, her köşe bir hikâye.",
  },
  {
    day: 6,
    title: "Medine'den Mekke'ye Kutlu Yolculuk",
    icon: Sunrise,
    highlight: false,
    highlightLabel: null,
    description:
      "Sabah namazının ardından Medine'ye veda. VIP otobüsle Mekke yolculuğu — yol boyunca din görevlimizden ihram bilgileri ve umre hazırlığı. Mekke'ye varışta Kabe manzaralı 5 yıldızlı otelinize yerleşme. İlk tavaf ve sa'y ile umrenize başlıyorsunuz.",
  },
  {
    day: "7–12",
    title: "Mekke: Yeryüzünün En Kutsal Noktası",
    icon: Star,
    highlight: true,
    highlightLabel: "Ömrünüzün En Anlamlı Günleri",
    description:
      "Altı gün boyunca Kabe'nin huzurunda: umre ibadetleri (tavaf, sa'y, tıraş), Harem-i Şerif'te vakit namazları, hatim programları, Hira Mağarası ve Cebel-i Nur tırmanışı, Sevr Mağarası ziyareti, Arafat ve Müzdelife bölgeleri tanıtım gezisi, Mina çadır bölgesi ziyareti, zemzem ikramları. Gece teheccüd namazları için özel uyanma servisi. Kabe'yi ilk gördüğünüz an — o an her şey değişir.",
  },
  {
    day: 13,
    title: "Veda Tavafı & Son Dualar",
    icon: Heart,
    highlight: false,
    highlightLabel: null,
    description:
      "Son umre tavafınız ve Kabe'ye veda. Zemzem suyunuzla son dualarınızı edin. Alışveriş için serbest zaman: tesbih, hurma, özel hediyeler. Akşam otel odasından son kez Kabe manzarasına bakın — bu görüntüyü kalbinize kazıyın.",
  },
  {
    day: 14,
    title: "Kutsal Topraklardan Ayrılış",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "Sabah namazının ardından havalimanına transfer. İstanbul'a dönüş uçuşu. Bavulunuzda zemzem, kalbinizde tarif edilemez bir huzur. Umreniz kabul olsun.",
  },
];

const ACCOMMODATIONS = [
  { location: "Medine", hotel: "Millennium Al Aqeeq (veya dengi)", stars: "5★", note: "Mescid-i Nebevi'ye 300m" },
  { location: "Mekke", hotel: "Swissôtel Al Maqam (veya dengi)", stars: "5★", note: "Kabe manzaralı odalar" },
];

const INCLUDED = [
  "Gidiş–dönüş uçak bileti (THY direkt sefer)",
  "VIP havalimanı karşılama ve tüm transferler",
  "5 gece 5★ Medine oteli (Mescid-i Nebevi'ye yürüme mesafesi)",
  "8 gece 5★ Mekke oteli (Kabe manzaralı)",
  "Açık büfe sabah kahvaltısı (her gün)",
  "Uzman din görevlisi rehberliği (7/24)",
  "Tüm ziyaret turları ve giriş ücretleri",
  "Özel VIP araç ile şehir içi ulaşım",
  "Zemzem suyu ikramı",
  "Gece teheccüd uyanma servisi",
];

const NOT_INCLUDED = [
  "Yurtdışı çıkış harcı",
  "Öğle ve akşam yemekleri",
  "Kişisel harcamalar ve alışveriş",
  "Program dışı ekstra turlar",
  "Otel minibar",
];

export default function UmrePremium() {
  useSeo({
    title: "Premium Umre Turu",
    description: "14 günlük VIP Umre Turu. Kabe manzaralı 5 yıldızlı oteller, özel transferler. Kişi başı 4.500 USD. Sponsor Hanım Turizm.",
    path: "/turlar/umre-premium",
    image: "https://sponsorhanim.com/og-umre.jpg",
    keywords: "umre turu, premium umre, vip umre, kabe manzaralı otel, umre fiyatları 2026",
    jsonLd: buildTourJsonLd({
      name: "Premium Umre Turu",
      description: "14 günlük VIP Umre Turu. Kabe manzaralı 5 yıldızlı oteller, özel transferler, uzman din görevlisi rehberliği.",
      image: "https://sponsorhanim.com/og-umre.jpg",
      slug: "umre-premium",
      price: 4500,
      currency: "USD",
      durationDays: 14,
      destinations: ["Mekke", "Medine"],
    }),
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={premiumImg}
            alt="Umre Turu Premium"
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
              VIP Umre — 14 Gün 13 Gece
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Kabe'ye En Yakın{" "}
              <br className="hidden md:block" />
              <span className="text-primary italic">En Özel</span>{" "}
              Umre Deneyimi
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-4 font-medium tracking-wide">
              14 Gün | 5★ Kabe Manzaralı Oteller | VIP Transfer | Uzman Din Görevlisi
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Kabe'nin kapısından birkaç adım ötede uyandığınız,
              Mescid-i Nebevi'nin huzurunda yürüdüğünüz bir yolculuk.
              Umre sadece bir ibadet değil — ruhunuzun yeniden doğuşu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href="/odeme?tour=3">Hemen Rezervasyon Yap</Link>
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
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Her günü özenle planlanmış, manevi derinliği ve konforu bir arada sunan 14 günlük yolculuğunuz.
            </p>
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
                          {day.highlight && day.highlightLabel && (
                            <Badge
                              variant="secondary"
                              className="bg-primary/20 text-primary text-xs"
                            >
                              {day.highlightLabel}
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
                <span>Şehir</span>
                <span className="col-span-2">Otel</span>
                <span className="text-right">Konum</span>
              </div>
              {ACCOMMODATIONS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 p-4 items-center ${
                    i % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <span className="text-foreground font-medium flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{row.location}</span>
                  </span>
                  <span className="col-span-2 text-foreground font-medium text-sm">
                    {row.hotel}{" "}
                    <Badge variant="outline" className="text-xs ml-1">
                      {row.stars}
                    </Badge>
                  </span>
                  <span className="text-right text-sm text-primary font-medium">
                    {row.note}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Oteller doluluğa göre aynı standartta veya daha iyi alternatiflerle güncellenebilir.
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
                { label: "Kişi başı fiyat (2 kişilik oda)", value: "4.500$" },
                { label: "Single oda farkı", value: "+800$" },
                { label: "Ön ödeme (kesin kayıt)", value: "2.000$" },
                { label: "Kalan ödeme", value: "Tur tarihinden 2 hafta önce" },
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
              <strong className="text-foreground">Önemli Not:</strong> Umre vizesi işlemleri tarafımızca takip edilir. Pasaportunuzun en az 6 ay geçerli olması gerekmektedir. Ön ödeme sonrası 30 gün öncesine kadar tam iade yapılır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={premiumImg}
            alt="Umre Premium"
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
              Kabe'ye Bu Kadar Yakın Bir Fırsat Kaçmaz
            </h2>
            <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
              5 yıldızlı Kabe manzaralı odalarda kalarak umrenizi yapın.
              Kontenjan sınırlıdır — yerinizi şimdi ayırtın.
            </p>
            <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto">
              Hemen kayıt olun, manevi yolculuğunuza ilk adımı atın
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6"
              >
                <Link href="/odeme?tour=3">Rezervasyon Yap</Link>
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
