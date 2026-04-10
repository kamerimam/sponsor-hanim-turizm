import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Users, Clock, ArrowRight } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import pilgrimsImg from "@/assets/images/pilgrims.png";
import premiumImg from "@/assets/images/premium.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  useSeo({
    title: "Sponsor Hanım Turizm | Ankara Hac, Umre ve Kültür Turları",
    description: "Ankara'nın güvenilir seyahat acentası Sponsor Hanım Turizm. 15 yılı aşkın tecrübesiyle hac, umre, Mısır ve Bali turları. Kutsal topraklara en güvenilir köprünüz.",
    path: "/",
    keywords: "ankara umre turu, ankara hac turu, ankara seyahat acentası, umre turu 2026, hac turu 2026, mısır turu, bali turu, sponsor hanım turizm",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Kaaba at dawn" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[2px]" />
          
          {/* Subtle rotating geometric pattern placeholder */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-[120vw] h-[120vh] animate-[spin_60s_linear_infinite]">
              <defs>
                <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#islamic-pattern)" className="text-primary" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-medium tracking-widest uppercase mb-4 block">
              Sponsor Hanım Turizm
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Kutsal Topraklara <br className="hidden md:block" />
              <span className="text-primary italic">En Güvenilir</span> Köprünüz
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
              Manevi huzuru beş yıldızlı konforla yaşayın. Sizi hayatınızın en anlamlı yolculuğuna davet ediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 w-full sm:w-auto">
                <Link href="/turlar">Turlarımızı İnceleyin</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-serif text-lg px-8 py-6 w-full sm:w-auto">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "Deneyim", value: "15+ Yıl" },
              { icon: Users, label: "Mutlu Yolcu", value: "50.000+" },
              { icon: Star, label: "Memnuniyet", value: "%98" },
              { icon: Shield, label: "Tur Paketi", value: "12" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="font-serif font-bold text-3xl text-foreground">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img
                src={premiumImg}
                alt="Premium Service"
                loading="lazy"
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Siz Sadece <span className="text-primary italic">İbadetinize</span> Odaklanın
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Yolculuğunuzun her anını özenle planlıyoruz. Vize işlemlerinden otel yerleşimine kadar tüm detayları biz düşünüyoruz. Size sadece bu eşsiz manevi deneyimin tadını çıkarmak kalıyor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Vize Desteği", desc: "Tüm resmi işlemler" },
                  { title: "VIP Transfer", desc: "Özel araçlarla ulaşım" },
                  { title: "Uzman Rehber", desc: "Deneyimli hocalar" },
                  { title: "5 Yıldızlı Otel", desc: "Kabe'ye yürüme mesafesi" }
                ].map((service, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Öne Çıkan Turlarımız</h2>
            <p className="text-secondary-foreground/80">Kutsal topraklarda unutulmaz anılar biriktirin.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Tour Cards minimal preview */}
            {[
              {
                title: "VIP Umre Turu",
                desc: "14 Günlük özel hizmet",
                price: "4,500 USD"
              },
              {
                title: "Hac 2025 Programı",
                desc: "Ömrün en güzel yolculuğu",
                price: "7,500 USD"
              },
              {
                title: "Mısır & Umre Kombine",
                desc: "Çifte bereket turu",
                price: "5,800 USD"
              }
            ].map((tour, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="bg-background/5 border-secondary-border hover:bg-background/10 transition-colors">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                      <Star className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white">{tour.title}</h3>
                    <p className="text-sm text-secondary-foreground/70">{tour.desc}</p>
                    <div className="text-primary font-semibold text-lg">{tour.price}</div>
                    <Button variant="link" className="text-white hover:text-primary mt-4" asChild>
                      <Link href="/turlar">Detaylar <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Misafirlerimizin <span className="text-primary italic">Gözünden</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fatma H.",
                city: "İstanbul",
                quote: "Umre turumuzu Sponsor Hanım ile yaptık, her şey kusursuzdu. Allah razı olsun..."
              },
              {
                name: "Mehmet K.",
                city: "Ankara",
                quote: "Hac organizasyonu için teşekkürler, çok profesyonellerdi ve hiçbir sorun yaşamadık."
              },
              {
                name: "Ayşe Y.",
                city: "İzmir",
                quote: "Mısır turumuzu çok beğendik! Hem manevi hem de kültürel açıdan harika bir deneyimdi."
              }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                    <div className="flex gap-1 text-primary">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic font-serif text-lg leading-relaxed">
                      "{test.quote}"
                    </p>
                    <div>
                      <div className="font-bold text-foreground">{test.name}</div>
                      <div className="text-sm text-primary">{test.city}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={pilgrimsImg}
            alt="Pilgrims"
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Kutsal Yolculuğunuza Başlayın
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Sınırlı sayıdaki kontenjanlarımızdan faydalanmak ve detaylı bilgi almak için hemen rezervasyon yapın.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-serif text-xl px-10 py-6">
            <Link href="/odeme">Rezervasyon Yap</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
