import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function CerezPolitikasi() {
  useSeo({
    title: "Çerez Politikası",
    description:
      "Sponsor Hanım Turizm web sitesinde kullanılan çerez türleri, amaçları, saklama süreleri ve çerez tercihlerinizi nasıl yöneteceğiniz hakkında bilgi.",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="mb-10">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Yasal Bilgiler
          </span>
          <h1 className="font-serif text-4xl font-bold text-foreground mt-2 mb-4">
            Çerez Politikası
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu Çerez Politikası, <strong>Sponsor Hanım Turizm</strong> ("Şirket") tarafından
            işletilen <a href="https://sponsorhanimtravel.com" className="text-primary hover:underline">www.sponsorhanimtravel.com</a>{" "}
            web sitesinde ("Web Sitesi") kullanılan çerezler hakkında sizi bilgilendirmek ve
            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ile Kişisel Verileri Koruma
            Kurulu'nun <em>"Çerez Uygulamaları Hakkında Rehber"</em>i uyarınca çerez tercihlerinizi
            yönetmenizi sağlamak amacıyla hazırlanmıştır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Çerez Nedir?
          </h2>
          <p>
            Çerezler (cookies), Web Sitesi'ni ziyaret ettiğinizde tarayıcınız aracılığıyla
            cihazınıza (bilgisayar, telefon, tablet) yerleştirilen küçük metin dosyalarıdır.
            Çerezler, Web Sitesi'nin düzgün çalışmasını sağlamak, tercihlerinizi hatırlamak,
            istatistiksel veri toplamak ve kullanıcı deneyimini geliştirmek amacıyla kullanılır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Kullandığımız Çerez Türleri
          </h2>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            A. Zorunlu (Teknik) Çerezler
          </h3>
          <p>
            Web Sitesi'nin temel işlevlerinin çalışması için mutlaka gerekli olan çerezlerdir.
            Rezervasyon oturumu, güvenlik doğrulaması ve çerez onay kaydı bu kapsamda yer alır.
            Zorunlu çerezler KVKK md. 5/2-c ve 5/2-f kapsamında <strong>açık rıza aranmaksızın</strong>{" "}
            işlenir ve bu çerezler devre dışı bırakılırsa Web Sitesi işlevselliğini kaybeder.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>sh_session</strong> — Oturum devamlılığı. Süre: Oturum boyunca.</li>
            <li><strong>cookie_consent</strong> — Çerez tercihinizin saklanması. Süre: 12 ay.</li>
            <li><strong>csrf_token</strong> — Form güvenliği (CSRF koruması). Süre: Oturum boyunca.</li>
          </ul>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            B. İşlevsel Çerezler
          </h3>
          <p>
            Dil tercihi, son ziyaret edilen tur sayfaları ve form önbelleği gibi bilgileri
            hatırlayan çerezlerdir. Deneyimin daha kişiselleştirilmiş hâle getirilmesine
            yardımcı olurlar. Bu çerezler için açık rızanıza dayanırız.
          </p>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            C. Analitik / Performans Çerezleri
          </h3>
          <p>
            Web Sitesi'nin nasıl kullanıldığını anlamamız, sayfa performansını ölçmemiz ve
            içeriği iyileştirmemiz için kullanılan çerezlerdir. Topladığımız veriler genellikle
            toplu (aggregate) ve anonimdir.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Analytics (_ga, _ga_*, _gid)</strong> — Ziyaretçi sayısı, oturum süresi, trafik kaynağı. Süre: 2 yıla kadar. Sağlayıcı: Google LLC.</li>
            <li><strong>Meta/Facebook Pixel (_fbp)</strong> — Tanıtım ölçümleme. Süre: 90 gün.</li>
          </ul>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            D. Pazarlama / Hedefleme Çerezleri
          </h3>
          <p>
            İlgi alanlarınıza yönelik reklam göstermek, yeniden pazarlama (remarketing)
            kampanyaları yürütmek ve tanıtım performansını ölçmek için kullanılan çerezlerdir.
            Bu çerezler <strong>yalnızca açık rızanızla</strong> çalıştırılır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Üçüncü Taraf Çerezler
          </h2>
          <p>
            Web Sitesi; Google (Analytics, Maps, Fonts), Meta (Facebook/Instagram Pixel),
            YouTube, WhatsApp Business ve ödeme altyapı sağlayıcılarımız (iyzico/PayTR gibi)
            tarafından yerleştirilen çerezler içerebilir. Bu çerezler ilgili üçüncü tarafların
            kendi gizlilik ve çerez politikalarına tabidir. Şirketimiz, üçüncü taraf çerezlerinin
            içeriği ve işleme faaliyeti üzerinde doğrudan kontrol sahibi değildir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Çerez Tercihlerinizi Yönetme
          </h2>
          <p>
            Web Sitesi'ne ilk girişinizde karşınıza çıkan çerez bildirim bandı üzerinden
            zorunlu olmayan çerezlere rıza verebilir, reddedebilir veya tercihlerinizi
            özelleştirebilirsiniz. Tercihlerinizi sonradan değiştirmek için tarayıcı
            ayarlarınızı kullanabilir veya tarayıcınızda saklanan çerezleri silebilirsiniz.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Chrome:</strong> Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler</li>
            <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Web Sitesi Verileri</li>
            <li><strong>Firefox:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
            <li><strong>Edge:</strong> Ayarlar &gt; Çerezler ve site izinleri</li>
          </ul>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md text-sm">
            <strong>Önemli:</strong> Zorunlu çerezlerin engellenmesi Web Sitesi'nin düzgün
            çalışmasını engelleyebilir (örn. rezervasyon formu tamamlanamayabilir). Bu durumda
            oluşabilecek işlevsellik kayıplarından Şirketimiz sorumlu tutulamaz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Kişisel Verilerin İşlenmesi
          </h2>
          <p>
            Çerezler aracılığıyla toplanan veriler; IP adresi, cihaz ve tarayıcı bilgisi, ziyaret
            edilen sayfa ve süre, yönlendirme bağlantısı gibi bilgileri içerebilir ve KVKK
            kapsamında kişisel veri sayılabilir. Bu veriler Şirketimizin{" "}
            <a href="/politikalar/kvkk-aydinlatma-metni" className="text-primary hover:underline">KVKK Aydınlatma Metni</a>{" "}
            çerçevesinde işlenir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Politikada Değişiklikler
          </h2>
          <p>
            Sponsor Hanım Turizm, işbu Çerez Politikası'nı mevzuat değişiklikleri, kullanılan
            teknolojiler veya iş süreçleri doğrultusunda güncelleme hakkını saklı tutar. Güncel
            metne her zaman bu sayfa üzerinden erişebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
