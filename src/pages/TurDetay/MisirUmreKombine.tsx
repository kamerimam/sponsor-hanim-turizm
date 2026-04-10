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
  Sunrise,
  Mountain,
  Waves,
  Crown,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import egyptImg from "@/assets/images/egypt.png";
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
  { icon: Calendar, label: "Süre", value: "21 Gün / 20 Gece" },
  { icon: Plane, label: "Kalkış", value: "İstanbul Havalimanı" },
  { icon: Hotel, label: "Konaklama", value: "4★ – 5★ Oteller" },
  { icon: Users, label: "Rehberlik", value: "Türkçe + Din Görevlisi" },
  { icon: Crown, label: "Güzergah", value: "Mısır → Medine → Mekke" },
  { icon: DollarSign, label: "Fiyat", value: "5.800$ / kişi" },
];

const DAILY_PROGRAM = [
  {
    day: 1,
    title: "İki Medeniyetin Yolculuğu Başlıyor",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "İstanbul Havalimanı'ndan Kahire'ye direkt uçuş. Varışta Türkçe rehberimiz sizi karşılar, 5 yıldızlı otelinize konforlu transferle yerleşirsiniz. Bu gece hem Firavunların hem Peygamberlerin topraklarının eşiğindesiniz. Kahire, sizi binlerce yıllık sırrıyla bekliyor.",
  },
  {
    day: "2–3",
    title: "Kahire: Firavunların Başkenti",
    icon: Mountain,
    highlight: true,
    highlightLabel: "Tarihin Kalbi",
    description:
      "İki tam gün Kahire'nin efsanevi mirası: Giza Piramitleri'nin karşısında durup insanlığın en büyük mimari mucizesini hissedeceksiniz. Sfenks'in gölgesinde fotoğraf, Yeni Mısır Müzesi'nde Tutankamon'un altın maskesi, Papirüs Müzesi'nde 3.000 yıllık yazılar. Gece Khan El-Khalili Çarşısı'nda Mısır baharatiyle, türküsüyle ve keşmekeşiyle tanışın. Tarih kitaplarını kapatın — asıl tarih burada, canlı ve nefes alıyor.",
  },
  {
    day: "4–5",
    title: "Luxor: Tanrıların Şehri",
    icon: Star,
    highlight: true,
    highlightLabel: "Antik Medeniyetin Zirvesi",
    description:
      "Kahire'den Luxor'a yolculuk. Karnak Tapınağı'nın devasa sütunlarının arasında yürüyün — her taş bloğu bir hükümdarın hikayesini taşıyor. Krallar Vadisi'nde firavun mezarlarının gizemli boyalarına hayran kalın, Hatışepsut Tapınağı'nın kadın gücünü temaşa edin. Nil Nehri üzerinde tekne turu — sular üzerinde yüzüp gün batımını izlerken anlayacaksınız: bu nehir sadece su değil, uygarlığın ta kendisi.",
  },
  {
    day: 6,
    title: "Dendera & Abydos: Gizli Hazineler",
    icon: Crown,
    highlight: false,
    highlightLabel: null,
    description:
      "Hathor Tapınağı'nın zodiac tavanı altında durduğunuzda, 2.000 yıl önce çizilmiş yıldız haritasına bakıyorsunuz. Abydos'ta Mısır'ın en eski tapınak kompleksi — turistlerin pek uğramadığı, gerçek Mısır meraklılarının sırrı. Öğleden sonra Hurghada transferi.",
  },
  {
    day: "7–8",
    title: "Hurghada: Kızıldeniz'in Masalı",
    icon: Waves,
    highlight: false,
    highlightLabel: null,
    description:
      "İki gün nefes alma vakti. Kızıldeniz'in kristal berrak sularında şnorkel ya da tüplü dalış, tekneyle Orange Adası turu, sahilde sonsuz mavi. Pilav gibi sıcak kum, bambaşka bir dünya gibi renkli mercanlar. Sonraki durak kutsal topraklar — bu dinginliği kalbinize depolayın.",
  },
  {
    day: 9,
    title: "Mısır'a Veda, Kutsal Topraklara Merhaba",
    icon: Plane,
    highlight: true,
    highlightLabel: "İki Yolculuğun Birleştiği An",
    description:
      "Sabah namazının ardından Hurghada'dan Medine'ye uçuş. İki farklı dünyanın arasında, birkaç saatlik uçuşta hayatınız değişir. Turistten ziyaretçiye, seyahatçiden hacıya dönüşüm. Medine Havalimanı'nda VIP karşılama ve özel araçla 5 yıldızlı otelinize transfer. Akşam ilk kez Mescid-i Nebevi'ye adım atıyorsunuz.",
  },
  {
    day: "10–13",
    title: "Medine: Huzurun Başkenti",
    icon: Moon,
    highlight: true,
    highlightLabel: "Manevi Yolculuğun Kalbi",
    description:
      "Dört gün boyunca Medine'nin ruhu: Mescid-i Nebevi'de vakit namazları ve hatimler, Ravza-i Mutahhara'ya özel ziyaret, Cennetü'l-Baki Mezarlığı, Uhud Dağı ve Şehitliği, Kuba Mescidi (İslam'ın ilk mescidi), Kıbleteyn Mescidi, tarihi hurma bahçeleri. Şehrin sokakları, ağaçları, havası bile farklı. Burada zaman farklı akar — daha yavaş, daha derin, daha anlamlı.",
  },
  {
    day: 14,
    title: "Medine'den Mekke'ye Kutlu Yol",
    icon: Sunrise,
    highlight: false,
    highlightLabel: null,
    description:
      "Sabah namazından sonra ihram giyilir, Medine'ye veda edilir. VIP otobüsle Mekke yolculuğu — yol boyunca din görevlimiz umre adabını ve duaları aktarır. Mekke'ye girişte kalpler hızlanır, gözler dolar. Kabe manzaralı 5 yıldızlı otelinize yerleşmenin ardından ilk tavaf ve sa'y ile umrenize başlıyorsunuz.",
  },
  {
    day: "15–19",
    title: "Mekke: Yeryüzünün Ekseni",
    icon: Heart,
    highlight: true,
    highlightLabel: "Ömrünüzün En Anlamlı Günleri",
    description:
      "Beş gün boyunca Kabe'nin kucağında: umre ibadetleri (tavaf, sa'y, tıraş), Harem-i Şerif'te vakit namazları, gece teheccüd kalkışları, hatim programları. Hira Mağarası tırmanışı — ilk vahyin nefes aldığı noktada duruyorsunuz. Sevr Mağarası ziyareti, Arafat ve Müzdelife bölgeleri. Zemzem suyundan içtikçe anlıyorsunuz: bu sadece bir tur değil, hayatın yeniden yazılışı.",
  },
  {
    day: 20,
    title: "Veda Tavafı & Son Dualar",
    icon: MapPin,
    highlight: false,
    highlightLabel: null,
    description:
      "Son tavafınız, son dualarınız. Zemzem suyunuzla son bir yudum alın — hem kendiniz hem sevdikleriniz için. Kabe'ye bakın: Mısır'da firavunların saltanatını, Medine'de Peygamberin huzurunu, Mekke'de Kabe'yi ziyaret ettiniz. 21 gün önce çıkan siz değilsiniz artık. Alışveriş için serbest zaman — tesbih, hurma, özel hediyeler.",
  },
  {
    day: 21,
    title: "İki Medeniyeti Kalbinizde Taşıyarak Eve",
    icon: Plane,
    highlight: false,
    highlightLabel: null,
    description:
      "Mekke'den İstanbul'a dönüş uçuşu. Bavulunuzda Mısır hediyeleri ve zemzem suyu, kalbinizde tarif edilemez bir zenginlik. Piramitleri ve Kabe'yi aynı yolculukta gezdiniz — bu, herkesin nasip edemeyeceği bir imkandır.",
  },
];

const ACCOMMODATIONS = [
  { location: "Kahire", hotel: "Le Méridien Pyramids (veya dengi)", stars: "5★", note: "Piramitlere yakın" },
  { location: "Luxor", hotel: "Steigenberger Nile Palace (veya dengi)", stars: "4★", note: "Nil kıyısı" },
  { location: "Hurghada", hotel: "Steigenberger Al Dau Beach (veya dengi)", stars: "5★", note: "Plaj cephesi" },
  { location: "Medine", hotel: "Millennium Al Aqeeq (veya dengi)", stars: "5★", note: "Mescid-i Nebevi'ye 300m" },
  { location: "Mekke", hotel: "Swissôtel Al Maqam (veya dengi)", stars: "5★", note: "Kabe manzaralı" },
];

const INCLUDED = [
  "Gidiş–dönüş uçak bileti (THY / direkt seferler)",
  "İçuçuş: Hurghada → Medine",
  "VIP havalimanı karşılamaları ve tüm transferler",
  "Kahire, Luxor, Hurghada'da 8 gece 4★–5★ otel",
  "Medine'de 4 gece 5★ otel konaklaması",
  "Mekke'de 6 gece 5★ Kabe manzaralı otel",
  "Açık büfe sabah kahvaltısı (tüm konaklama)",
  "Türkçe Mısır turu rehberi (tam gün)",
  "Uzman din görevlisi (Medine ve Mekke)",
  "Mısır'da tüm yerel turlar (Kahire, Luxor, Dendera, tekne turu)",
  "Hurghada tekne turu ve Kızıldeniz aktiviteleri",
  "Tüm tarihi alan ve müze girişleri (Mısır payı)",
  "Zemzem suyu ikramı",
  "Gece teheccüd uyanma servisi",
];

const NOT_INCLUDED = [
  "Yurtdışı çıkış harcı",
  "Mısır vizesi (kapıda ~30$)",
  "Öğle ve akşam yemekleri",
  "Kişisel harcamalar ve alışveriş",
  "Program dışı ekstra turlar",
  "Otel minibar",
];

export default function MisirUmreKombine() {
  useSeo({
    title: "Ankara Mısır + Umre Kombine Turu | 21 Gün 5.800 USD",
    description: "Ankara'dan kalkışlı 21 günlük Mısır ve Umre kombine turu. Piramitlerden Kabe'ye tek yolculukta iki medeniyet. Kişi başı 5.800 USD. Sponsor Hanım Turizm.",
    path: "/turlar/misir-umre-kombine",
    image: "https://sponsorhanim.com/og-misir-umre.jpg",
    keywords: "ankara mısır umre kombine, umre mısır turu ankara, kahire mekke turu, kombine tur paketi ankara, ankara seyahat acentası kombine, mısır umre 2026",
    jsonLd: buildTourJsonLd({
      name: "Mısır + Umre Kombine Turu",
      description: "21 günlük Mısır ve Umre kombine turu. Piramitlerden Kabe'ye — tek yolculukta iki medeniyet deneyimi.",
      image: "https://sponsorhanim.com/og-misir-umre.jpg",
      slug: "misir-umre-kombine",
      price: 5800,
      currency: "USD",
      durationDays: 21,
      destinations: ["Kahire", "Mekke", "Medine"],
    }),
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={egyptImg}
            alt="Mısır ve Umre Kombine Turu"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/65 backdrop-blur-[1px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-primary/90 text-primary-foreground text-sm px-4 py-1 mb-6">
              Kombine Tur — 21 Gün 20 Gece
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Bir Turda İki{" "}
              <br className="hidden md:block" />
              <span className="text-primary italic">Medeniyet:</span>{" "}
              Mısır & Umre
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-4 font-medium tracking-wide">
              21 Gün | Kahire · Luxor · Hurghada · Medine · Mekke | 5★ Oteller
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Piramitlerin gölgesinde başlar, Kabe'nin huzurunda son bulur.
              Dünyanın en kadim medeniyeti ile en kutsal toprakları —
              tek bir yolculukta, tam bir ömrün özü.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href="/odeme?tour=5">Hemen Rezervasyon Yap</Link>
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

      {/* Why Combo Banner */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏛️",
                title: "Mısır'ın 5.000 Yılı",
                desc: "Piramitlerden Nil'e, Luxor tapınaklarından Kızıldeniz'e — insanlığın en eski uygarlığı",
              },
              {
                icon: "✈️",
                title: "Tek Seferde İki Dünya",
                desc: "Ayrı iki tur yerine tek bilet, tek organizasyon — zamandan ve paradan tasarruf",
              },
              {
                icon: "🕋",
                title: "Umre'nin Derinliği",
                desc: "Medine'nin huzuru ve Mekke'nin kutsallığı — manevi zenginlik hiç bu kadar erişilebilir olmamıştı",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
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
              Mısır'ın antik büyüsünden kutsal toprakların manevi derinliğine uzanan, özenle tasarlanmış 21 günlük benzersiz yolculuk.
            </p>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mt-6" />
          </div>

          {/* Phase Labels */}
          <div className="flex gap-4 mb-8 flex-wrap justify-center">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-1.5 text-sm">
              🏛️ Mısır Bölümü (1–8. Gün)
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 px-4 py-1.5 text-sm">
              🕌 Kutsal Topraklar (9–21. Gün)
            </Badge>
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
                  className={`overflow-hidden transition-shadow hover:shadow-lg ${day.highlight
                    ? "border-primary/40 bg-primary/5"
                    : "border-border"
                    }`}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div
                        className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${day.highlight
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
                  className={`grid grid-cols-4 p-4 items-center ${i % 2 === 0 ? "bg-card" : "bg-muted/30"
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
                { label: "Kişi başı fiyat (2 kişilik oda)", value: "5.800$" },
                { label: "Single oda farkı", value: "+1.000$" },
                { label: "Ön ödeme (kesin kayıt)", value: "2.500$" },
                { label: "Kalan ödeme", value: "Tur tarihinden 2 hafta önce" },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 p-4 items-center ${i % 2 === 0 ? "bg-card" : "bg-muted/30"
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
              <strong className="text-foreground">Önemli Not:</strong> Umre vizesi işlemleri tarafımızca takip edilir. Mısır vizesi kapıda yaklaşık 30$ olup fiyata dahil değildir. Pasaportunuzun en az 6 ay geçerli olması gerekmektedir. Ön ödeme sonrası 30 gün öncesine kadar tam iade yapılır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={premiumImg}
            alt="Mısır Umre Kombine"
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
              Piramitlerden Kabe'ye,<br />Tek Yolculukta Bir Ömür
            </h2>
            <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
              Hem Firavunların mirasını hem Peygamberlerin izini görmek isteyenler için tasarlandı.
              Kontenjan sınırlı — yerinizi şimdi ayırtın.
            </p>
            <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto">
              Bir tercih yapmak zorunda değilsiniz — ikisini birden yapıyorsunuz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6"
              >
                <Link href="/odeme?tour=5">Rezervasyon Yap</Link>
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
