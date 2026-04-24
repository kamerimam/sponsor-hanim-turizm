import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import logoImg from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-secondary-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logoImg}
              alt="Sponsor Hanım Seyahat Acentası"
              className="h-16 w-auto mb-4"
            />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              Kutsal topraklara en güvenilir köprünüz. 15 yılı aşkın tecrübemiz ve
              uzman rehberlerimizle hac, umre ve kültür turlarında yanınızdayız.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-secondary-foreground/60">
                Bizi Takip Edin
              </span>
              <a
                href="https://www.instagram.com/sponsorhanimtravel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sponsor Hanım Turizm Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-primary">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/turlar" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Turlarımız
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-primary">Politikalar</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/politikalar/kvkk-aydinlatma-metni" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/politikalar/kvkk-acik-riza-beyani" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  KVKK Açık Rıza Beyanı
                </Link>
              </li>
              <li>
                <Link href="/politikalar/cerez-politikasi" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/politikalar/iptal-iade-politikasi" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  İptal, İade ve Değişiklik Politikası
                </Link>
              </li>
              <li>
                <Link href="/politikalar/vize-bilgilendirme" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Vize Bilgilendirme ve Sorumluluk
                </Link>
              </li>
              <li>
                <Link href="/politikalar/kullanim-kosullari" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Web Sitesi Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/politikalar/on-bilgilendirme-formu" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Ön Bilgilendirme Formu
                </Link>
              </li>
              <li>
                <Link href="/politikalar/ticari-iletisim-onay" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Ticari İletişim / E-Bülten Onayı
                </Link>
              </li>
              <li>
                <Link href="/politikalar/paket-tur-sozlesmesi" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Paket Tur / Mesafeli Satış Sözleşmesi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-primary">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>0544 498 62 08</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>sponsorhanim@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/60 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Sponsor Hanım Turizm. Tüm hakları saklıdır.</p>
          <p>
            Tasarım, frontend ve backend — Kamer İmam &nbsp;·&nbsp;{" "}
            <a
              href="https://wa.me/905533333811"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Proje için iletişime geçin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
