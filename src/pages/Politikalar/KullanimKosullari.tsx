import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function KullanimKosullari() {
  useSeo({
    title: "Web Sitesi Kullanım Koşulları",
    description:
      "Sponsor Hanım Turizm web sitesinin kullanım koşulları, fikri mülkiyet hakları, sorumluluk sınırları ve kullanıcı yükümlülükleri.",
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
            Web Sitesi Kullanım Koşulları
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu Kullanım Koşulları, <strong>www.sponsorhanimtravel.com</strong> ("Web Sitesi")
            üzerinde sunulan tüm içerik, hizmet ve özelliklerin ziyaretçi ve kullanıcılar ("Kullanıcı")
            tarafından kullanımına ilişkin hüküm ve şartları düzenler. Web Sitesi'ne erişerek ve/veya
            Web Sitesi'ni kullanarak işbu Koşulları okuduğunuzu, anladığınızı ve kabul ettiğinizi
            beyan etmiş olursunuz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Tanımlar
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Şirket:</strong> Sponsor Hanım Turizm (Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara).</li>
            <li><strong>Web Sitesi:</strong> www.sponsorhanimtravel.com alan adı altında yayımlanan tüm sayfalar ve alt sayfalar.</li>
            <li><strong>Kullanıcı:</strong> Web Sitesi'ni ziyaret eden, inceleyen veya hizmetlerinden faydalanan her gerçek veya tüzel kişi.</li>
            <li><strong>İçerik:</strong> Web Sitesi üzerinde yer alan her türlü görsel, metin, logo, video, yazılım, veri ve tasarım.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Kapsam
          </h2>
          <p>
            Web Sitesi; Sponsor Hanım Turizm tarafından düzenlenen hac, umre, Mısır, Bali ve kültür
            turlarının tanıtımı, rezervasyon alınması, müşteri iletişiminin yürütülmesi, blog içeriklerinin
            paylaşılması ve ödeme yönlendirmelerinin yapılması amacıyla yayımlanmaktadır. Web Sitesi
            üzerindeki fiyat, program, kontenjan ve içerik bilgileri yalnızca tanıtım niteliğindedir;
            satın alma işlemi ancak Şirket tarafından açık kabul bildirilmesi ve Paket Tur
            Sözleşmesi'nin imzalanması ile tamamlanır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Fikri Mülkiyet Hakları
          </h2>
          <p>
            Web Sitesi'nde yer alan her türlü içerik; marka, logo, ticari unvan, tasarım, fotoğraf,
            görsel, video, metin, yazılım kodu, slogan ve veritabanı dâhil olmak üzere 5846 sayılı Fikir
            ve Sanat Eserleri Kanunu, 6769 sayılı Sınai Mülkiyet Kanunu ve ilgili mevzuat kapsamında
            korunmakta olup, tüm hakları Sponsor Hanım Turizm'e veya lisans aldığı üçüncü taraflara aittir.
          </p>
          <p>Kullanıcı, Şirket'in yazılı izni olmaksızın:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>İçeriği kopyalayamaz, çoğaltamaz, dağıtamaz, kiralayamaz, satamaz.</li>
            <li>İçeriği tersine mühendislik yöntemiyle çözümleyemez, kaynak koduna dönüştüremez.</li>
            <li>Marka, logo ve tasarımları ticari amaçla kullanamaz.</li>
            <li>Otomatik araç (bot, crawler, scraper) kullanarak içerik çekemez, veritabanı oluşturamaz.</li>
            <li>İçeriği yanıltıcı ya da Şirket'in itibarını zedeleyecek şekilde sunamaz.</li>
          </ul>
          <p>Kişisel, ticari olmayan ve bilgilendirme amaçlı görüntüleme izin kapsamındadır.</p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Kullanıcı Yükümlülükleri ve Yasaklı Kullanım
          </h2>
          <p>Kullanıcı, Web Sitesi'ni kullanırken aşağıdaki hususlara uymayı taahhüt eder:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Verilen bilgilerin doğru, güncel ve kendisine ait olduğu.</li>
            <li>Türkiye Cumhuriyeti kanunlarına, genel ahlaka ve kamu düzenine aykırı içerik paylaşmama.</li>
            <li>Web Sitesi'nin altyapısına zarar verecek yazılım veya işlem gerçekleştirmeme (DDoS, kötü amaçlı yazılım, sistem açığı istismarı).</li>
            <li>Başka bir kullanıcının oturumuna veya bilgilerine yetkisiz erişim sağlamama.</li>
            <li>Fake rezervasyon, sahtecilik, kart dolandırıcılığı veya aklama amaçlı işlem yapmama.</li>
            <li>Web Sitesi üzerinden iletilen içeriği izinsiz üçüncü kişilerle paylaşmama.</li>
          </ul>
          <p>
            İşbu maddeye aykırı kullanım halinde Şirket, ilgili Kullanıcı'nın erişimini önceden bildirimsiz
            olarak kısıtlama, askıya alma veya sonlandırma hakkına sahiptir. Ayrıca, bu tür bir kullanım
            sonucu Şirket nezdinde doğan tüm zararlar, yasal masraflar ve üçüncü kişi tazminat talepleri
            Kullanıcı'ya rücu edilir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Fiyat ve İçerik Hataları
          </h2>
          <p>
            Şirket, Web Sitesi üzerinde yer alan fiyat, kontenjan, program, uçuş saati, otel bilgisi ve
            benzeri içerikleri güncel tutmak için azami özeni göstermektedir. Ancak; kur değişimi, yazım
            hatası, sistemsel arıza, üçüncü taraf bilgi aktarımında yaşanan gecikme veya başka sebeplerle
            oluşan bariz hatalar durumunda, Şirket rezervasyonu reddetme, fiyatı düzeltme ve eşdeğer bir
            alternatif önerme hakkını saklı tutar. Bu tür durumlarda tahsil edilmiş herhangi bir ödeme,
            Kullanıcı'nın tercihi doğrultusunda iade edilir ya da düzeltilmiş fiyat üzerinden hizmete
            dönüştürülür.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Üçüncü Taraf Bağlantıları
          </h2>
          <p>
            Web Sitesi; havayolları, oteller, TÜRSAB, konsolosluklar, ödeme altyapı sağlayıcıları (iyzico
            /PayTR), harita ve sosyal medya gibi üçüncü taraf servislere yönlendirme bağlantıları
            içerebilir. Bu bağlantıların içeriği, işletimi ve gizlilik uygulamaları tamamen ilgili üçüncü
            tarafların sorumluluğundadır. Şirket, söz konusu sitelerin içeriğinden veya hizmetlerinden
            sorumlu tutulamaz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            7. Hizmetin Sürekliliği ve Sorumluluk Sınırı
          </h2>
          <p>
            Şirket, Web Sitesi'nin kesintisiz, hatasız ve her zaman erişilebilir olacağını taahhüt etmez.
            Planlı veya plansız bakım çalışmaları, siber saldırı, altyapı arızası, mücbir sebepler veya
            üçüncü taraf servis sağlayıcılarından kaynaklanan kesintiler hizmet aksamasına yol açabilir.
            Bu durumlardan kaynaklanan dolaylı zararlardan (ticari kayıp, veri kaybı, itibar kaybı vb.)
            Şirket sorumlu tutulamaz.
          </p>
          <p>
            Web Sitesi'nde yer alan bilgiler "olduğu gibi" (as-is) sunulmaktadır. Bilgilerin güncelliğine,
            eksiksizliğine veya belirli bir amaca uygunluğuna yönelik açık veya zımni herhangi bir garanti
            verilmez. Kullanıcı'nın Web Sitesi'nden yararlanması tamamen kendi takdirinde ve
            sorumluluğundadır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            8. Mücbir Sebepler
          </h2>
          <p>
            Salgın hastalık, deprem, sel, savaş, terör, ayaklanma, grev, hükümet kararı, hava yolu iptali,
            hac/umre kota kararları, yangın, siber saldırı ve benzeri Şirket'in kontrolü dışındaki mücbir
            sebep hâllerinde Şirket'in edim yükümlülüğü, mücbir sebep süresince askıya alınır ve bu
            süreçte doğabilecek zararlardan Şirket sorumlu değildir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            9. Kişisel Verilerin Korunması
          </h2>
          <p>
            Web Sitesi kullanımı sırasında toplanan kişisel verilerin işlenmesi hakkında detaylı bilgi
            için <a href="/politikalar/kvkk-aydinlatma-metni" className="text-primary hover:underline">KVKK Aydınlatma Metni</a>'ni
            ve <a href="/politikalar/cerez-politikasi" className="text-primary hover:underline">Çerez Politikası</a>'nı
            inceleyebilirsiniz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            10. Değişiklikler
          </h2>
          <p>
            Şirket, işbu Kullanım Koşulları'nı herhangi bir zamanda, önceden bildirimde bulunmaksızın
            güncelleme hakkını saklı tutar. Güncellenmiş metin Web Sitesi'nde yayımlandığı tarihte
            yürürlüğe girer. Kullanıcı'nın Web Sitesi'ni kullanmaya devam etmesi, güncellenmiş koşulları
            kabul ettiği anlamına gelir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            11. Uyuşmazlık ve Yetkili Mahkeme
          </h2>
          <p>
            İşbu Kullanım Koşulları'nın uygulanmasından doğan uyuşmazlıklarda Türk Hukuku uygulanır.
            Tüketici işlemleri bakımından 6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 68.
            maddesinde belirtilen parasal sınırlar dâhilinde Tüketici Hakem Heyetleri, aşan uyuşmazlıklarda
            ise Tüketici Mahkemeleri yetkilidir. Diğer uyuşmazlıklar bakımından <strong>Ankara Mahkemeleri
            ve İcra Daireleri</strong> yetkilidir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            12. İletişim
          </h2>
          <p>Kullanım Koşulları ile ilgili sorularınız için:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>E-posta:</strong> sponsorhanim@gmail.com</li>
            <li><strong>Telefon:</strong> 0544 498 62 08</li>
            <li><strong>Adres:</strong> Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
