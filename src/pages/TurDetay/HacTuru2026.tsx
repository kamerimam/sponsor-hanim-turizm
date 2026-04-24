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
  Mountain,
  Flag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import pilgrimsImg from "@/assets/images/pilgrims.png";
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
  { icon: Calendar, label: "Süre", value: "21 Gün / 20 Gece" },
  { icon: Plane, label: "Kalkış", value: "İstanbul Havalimanı" },
  { icon: Hotel, label: "Konaklama", value: "4–5★ Oteller" },
  { icon: Users, label: "Rehberlik", value: "Uzman Din Görevlisi" },
  { icon: BookOpen, label: "Eğitim", value: "Hac Seminerleri" },
  { icon: DollarSign, label: "Fiyat", value: "7.500$ / kişi" },
];

const DAILY_PROGRAM = [
  {
    day: 1,
    title: "Kutlu Yolculuk Başlıyor",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "İstanbul Havalimanı'ndan Cidde'ye direkt uçuş. Havalimanında özel karşılama ve VIP transferle Mekke'deki otelinize yerleşme. Yolculuk boyunca din görevlimiz ihram ve hac ibadetleri hakkında detaylı bilgilendirme yapar. İlk gece Harem-i Şerif'te ilk namazınız.",
  },
  {
    day: "2–7",
    title: "Mekke'de Hac Hazırlığı",
    icon: Star,
    highlight: false,
    highlightLabel: null,
    description:
      "Altı gün boyunca hac öncesi manevi hazırlık: umre ibadetleri (tavaf, sa'y), Harem-i Şerif'te vakit namazları ve hatim programları, hac seminerleri (fıkhi hükümler, menasik-i hac), Hira Mağarası ziyareti, Mekke'nin tarihi mekanlarını keşif. Din görevlimiz her adımda yanınızda — soru sormaktan çekinmeyin.",
  },
  {
    day: 8,
    title: "Terviye Günü: Mina'ya Hareket",
    icon: Flag,
    highlight: true,
    highlightLabel: "Hac İbadetleri Başlıyor",
    description:
      "Zilhicce'nin 8. günü ihramla Mina'ya hareket. Klimalı çadırlarda yerleşme, öğle, ikindi, akşam ve yatsı namazları Mina'da kılınır. Gece boyunca dua, zikir ve Kur'an-ı Kerim tilaveti. Yarın Arafat — ömrünüzün en önemli günü için son hazırlıklar.",
  },
  {
    day: 9,
    title: "Arafat Vakfesi: Haccın Kalbi",
    icon: Sunrise,
    highlight: true,
    highlightLabel: "Ömrün En Anlamlı Günü",
    description:
      "Sabah erkenden Arafat'a hareket. Cebel-i Rahme eteklerinde vakfe — güneş batana kadar dua, tövbe ve yakarış. 'Hac Arafat'tır' hadis-i şerifinin tam karşılığını bugün yaşıyorsunuz. Güneş battıktan sonra Müzdelife'ye hareket, açık havada geceleme ve şeytan taşlama için çakıl toplama.",
  },
  {
    day: 10,
    title: "Bayram Günü: Şeytan Taşlama & Kurban",
    icon: Mountain,
    highlight: true,
    highlightLabel: "Kurban Bayramı",
    description:
      "Müzdelife'den Mina'ya dönüş. Büyük şeytana (Cemre-i Akabe) taş atma, kurban kesimi (organizasyon tarafından), tıraş olma ve ihramdan çıkış. Mekke'ye geçiş ile ifaza tavafı ve sa'y. Bayramınız mübarek olsun — artık hacısınız.",
  },
  {
    day: "11–12",
    title: "Teşrik Günleri: Mina'da Şeytan Taşlama",
    icon: Moon,
    highlight: false,
    highlightLabel: null,
    description:
      "İki gün boyunca Mina'da üç cemreye (küçük, orta, büyük) şeytan taşlama. Teşrik tekbirleri, cemaatle namazlar ve kardeşlik ortamı. İkinci günün akşamı Mekke'deki otele dönüş.",
  },
  {
    day: "13–17",
    title: "Mekke'de Veda Günleri",
    icon: Heart,
    highlight: false,
    highlightLabel: null,
    description:
      "Beş gün boyunca Harem-i Şerif'te ibadet, nafile tavaflar, hatim programları ve serbest zaman. Alışveriş için Mekke çarşıları: tesbih, hurma, zamzam, özel hediyeler. Son gün veda tavafı — Kabe'ye son bakışınız, gözleriniz dolu.",
  },
  {
    day: 18,
    title: "Mekke'den Medine'ye",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "VIP otobüsle Medine yolculuğu. Yol boyunca Peygamber Efendimiz'in hicret güzergahı anlatımı. Medine'de 5 yıldızlı otelinize yerleşme. Akşam Mescid-i Nebevi'de ilk namaz.",
  },
  {
    day: "19–20",
    title: "Medine Ziyaretleri",
    icon: BookOpen,
    highlight: false,
    highlightLabel: null,
    description:
      "İki gün boyunca Medine'nin manevi atmosferinde: Mescid-i Nebevi'de vakit namazları, Ravza-i Mutahhara ziyareti, Cennetü'l-Baki, Uhud Dağı ve Şehitliği, Kuba Mescidi, Kıbleteyn Mescidi, Yedi Mescitler. Peygamber Efendimiz'in izinde yürüyorsunuz.",
  },
  {
    day: 21,
    title: "Hacı Olarak Eve Dönüş",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "Sabah namazının ardından Medine'ye veda. Havalimanına transfer ve İstanbul'a dönüş. Bavulunuzda zemzem, yüreğinizde sonsuz bir huzur. Haccınız mebrur, sa'yiniz meşkur olsun.",
  },
];

const ACCOMMODATIONS = [
  { location: "Mekke", hotel: "Hilton Suites (veya dengi)", stars: "5★", note: "Harem'e 5 dk yürüme" },
  { location: "Mina", hotel: "Klimalı VIP Çadır", stars: "—", note: "Tam donanımlı" },
  { location: "Medine", hotel: "Millennium Al Aqeeq (veya dengi)", stars: "5★", note: "Mescid-i Nebevi'ye 300m" },
];

const INCLUDED = [
  "Gidiş–dönüş uçak bileti (THY direkt sefer)",
  "Suudi Arabistan hac vizesi",
  "VIP havalimanı karşılama ve tüm transferler",
  "12 gece Mekke 5★ otel konaklaması",
  "5 gece Mina klimalı VIP çadır",
  "3 gece Medine 5★ otel konaklaması",
  "Açık büfe sabah kahvaltısı (her gün)",
  "Mina ve Arafat'ta 3 öğün yemek",
  "Uzman din görevlisi rehberliği (7/24)",
  "Hac öncesi seminer programı",
  "Kurban kesimi organizasyonu",
  "Tüm ziyaret turları ve ulaşım",
  "Zemzem suyu ikramı",
];

const NOT_INCLUDED = [
  "Yurtdışı çıkış harcı",
  "Mekke ve Medine'de öğle ve akşam yemekleri",
  "Kişisel harcamalar ve alışveriş",
  "Program dışı ekstra turlar",
  "Otel minibar",
  "Saç tıraşı ücreti",
];

export default function HacTuru2026() {
  useSeo({
    title: "Ankara Hac Turu 2026 | 21 Gün Tam Kapsamlı Program",
    description: "Ankara'dan kalkışlı 21 günlük Hac Turu. Uzman din görevlileri eşliğinde eksiksiz hac farizası, 5★ oteller, VIP çadır. Kişi başı 7.500 USD. Sponsor Hanım Turizm.",
    path: "/turlar/hac-turu-2026",
    image: "https://sponsorhanimtravel.com/og-hac.jpg",
    keywords: "ankara hac turu, hac turu 2026, ankara hac fiyatları, hac kayıtları 2026, mekke medine hac, ankara seyahat acentası hac, hac kotası",
    jsonLd: buildTourJsonLd({
      name: "Hac Turu 2026",
      description: "21 günlük Hac Turu. Din işleri kotalı, uzman görevli rehberliğinde eksiksiz hac farizası programı.",
      image: "https://sponsorhanimtravel.com/og-hac.jpg",
      slug: "hac-turu-2026",
      price: 7500,
      currency: "USD",
      durationDays: 21,
      destinations: ["Mekke", "Medine", "Arafat", "Mina"],
    }),
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pilgrimsImg}
            alt="Hac Turu 2026"
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
              Hac 2026 — 21 Gün 20 Gece
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Ömrün En Güzel{" "}
              <br className="hidden md:block" />
              <span className="text-primary italic">Yolculuğu:</span>{" "}
              Hac 2026
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-4 font-medium tracking-wide">
              21 Gün | 5★ Oteller & VIP Çadır | Uzman Din Görevlisi | Tam Kapsamlı Program
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Arafat'ta güneş batarken ellerinizi açtığınız o an,
              dünyanın tüm gürültüsü susar. Hac bir yolculuk değil —
              yeniden başlangıçtır.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href="/odeme?tour=4">Hemen Rezervasyon Yap</Link>
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
              Hac ibadetinin her aşaması titizlikle planlanmış, manevi derinliği ve konforu bir arada sunan 21 günlük kutlu yolculuğunuz.
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
                    {row.stars !== "—" && (
                      <Badge variant="outline" className="text-xs ml-1">
                        {row.stars}
                      </Badge>
                    )}
                  </span>
                  <span className="text-right text-sm text-primary font-medium">
                    {row.note}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Oteller Diyanet İşleri Başkanlığı tahsisine göre kesinleşir. Eşdeğer veya üstü garanti edilir.
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
                { label: "Kişi başı fiyat (2–3 kişilik oda)", value: "7.500$" },
                { label: "Single oda farkı", value: "+1.200$" },
                { label: "Ön ödeme (kesin kayıt)", value: "3.000$" },
                { label: "Kalan ödeme", value: "Hac tarihinden 1 ay önce" },
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
              <strong className="text-foreground">Önemli Bilgiler:</strong> Hac vizesi Diyanet İşleri Başkanlığı koordinasyonuyla tarafımızca alınır. Pasaportunuzun en az 6 ay geçerli olması zorunludur. Menenjit aşısı ve gerekli sağlık belgeleri kayıt sonrası tarafınıza bildirilecektir. Ön ödeme sonrası 45 gün öncesine kadar tam iade yapılır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={pilgrimsImg}
            alt="Hac 2026"
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
              Ömür Boyu Bir Kez Yaşanacak Yolculuk
            </h2>
            <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
              Hac farizası, ertelenecek bir ibadet değildir.
              2026 kontenjanları dolmadan yerinizi garantiye alın.
            </p>
            <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto">
              Uzman din görevlilerimiz eşliğinde, güvenli ve konforlu bir hac deneyimi
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6"
              >
                <Link href="/odeme?tour=4">Rezervasyon Yap</Link>
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
