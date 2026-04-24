import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function OnBilgilendirmeFormu() {
  useSeo({
    title: "Ön Bilgilendirme Formu",
    description:
      "Paket Tur Sözleşmeleri Yönetmeliği uyarınca paket tur satışı öncesi tüketiciye sunulan ön bilgilendirme formu.",
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
            Ön Bilgilendirme Formu
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu Ön Bilgilendirme Formu; 6502 sayılı Tüketicinin Korunması Hakkında Kanun, Paket Tur
            Sözleşmeleri Yönetmeliği (RG 14.01.2015/29236) ve Mesafeli Sözleşmeler Yönetmeliği (RG
            27.11.2014/29188) gereğince, tüketiciye paket tur sözleşmesinin kurulmasından önce
            sunulması zorunlu olan bilgileri içermektedir. Tüketici, rezervasyon oluşturmadan ve
            sözleşmeyi kabul etmeden önce işbu formu okuduğunu ve içeriği hakkında bilgilendiğini
            kabul eder.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Satıcı / Paket Tur Düzenleyicisi Bilgileri
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Unvan:</strong> Sponsor Hanım Turizm</li>
            <li><strong>Adres:</strong> Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</li>
            <li><strong>Telefon:</strong> 0544 498 62 08</li>
            <li><strong>E-posta:</strong> sponsorhanim@gmail.com</li>
            <li><strong>Web:</strong> www.sponsorhanimtravel.com</li>
            <li><strong>TÜRSAB Belge No:</strong> [Acentelik belge numarası rezervasyon öncesi eklenecektir]</li>
            <li><strong>İşletme Belgesi No:</strong> [Kültür ve Turizm Bakanlığı işletme belgesi numarası]</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Paket Turun Temel Nitelikleri
          </h2>
          <p>Paket Tur Sözleşmeleri Yönetmeliği md. 5/1 uyarınca tüketiciye aşağıdaki hususlarda bilgi verilir:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tur adı ve güzergâhı:</strong> Rezervasyon esnasında seçilecek tur (örn. Umre Premium, Hac 2026, Mısır Hurghada-Kahire, Bali-Gili).</li>
            <li><strong>Ulaşım:</strong> Ulaşım aracı (uçak/otobüs), havayolu firması, kalkış-dönüş noktası ve tarihleri.</li>
            <li><strong>Konaklama:</strong> Otel adı, sınıfı (yıldız), oda tipi, pansiyon düzeni ve Kabe/merkeze mesafe (hac/umre turları için).</li>
            <li><strong>Yemek ve öğün planı:</strong> Kahvaltı dâhil, yarım pansiyon, tam pansiyon vb.</li>
            <li><strong>Tur programı ve gezilecek yerler:</strong> Günlük program, ziyaret edilecek ibadet/tarihi mekanlar.</li>
            <li><strong>Dahil olan hizmetler:</strong> Vize, zorunlu seyahat sağlık sigortası, rehberlik, havalimanı transferi, otel giriş-çıkışları.</li>
            <li><strong>Dahil olmayan hizmetler:</strong> Kişisel harcamalar, bahşiş, ekstra gezi turları, fakültatif turlar, tek kişilik oda farkı, pasaport harcı, PCR/sağlık testleri.</li>
            <li><strong>Minimum katılımcı:</strong> Turun gerçekleşmesi için gerekli minimum katılımcı sayısı ve tur iptali halinde bildirim süresi (md. 16).</li>
            <li><strong>Dil:</strong> Rehberlik hizmetinin verileceği dil (Türkçe).</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Fiyat ve Ödeme Koşulları
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Toplam fiyat:</strong> Kişi başı USD/TL cinsinden belirlenir; vergiler, ücretler ve diğer ek maliyetler (varsa) dâhildir.</li>
            <li><strong>Ödeme planı:</strong> Toplam bedelin tamamı peşin ödenebilir veya %50 kapora + kalan tutarın tur tarihinden en geç 30 gün önce tahsil edilmesi usulü uygulanabilir.</li>
            <li><strong>Ödeme yöntemleri:</strong> Banka havalesi/EFT, kredi kartı ile tek çekim veya taksit seçenekleri (ödeme altyapı sağlayıcı iyzico/PayTR üzerinden).</li>
            <li><strong>Fiyat revizyonu:</strong> Paket Tur Sözleşmeleri Yönetmeliği md. 9 uyarınca yakıt fiyatı, liman/havalimanı vergisi, döviz kuru gibi Şirket'in kontrolü dışındaki nedenlerle fiyat, tur başlangıcından en geç 20 gün öncesine kadar değiştirilebilir. Fiyat artışı %5'i aşmadığı sürece tüketici bu artışı kabul etmekle yükümlüdür. %5'i aşan artışlarda tüketici ücretsiz iptal hakkına sahiptir.</li>
            <li><strong>Kur cinsi:</strong> Döviz bazlı turlarda ödeme tarihindeki T.C. Merkez Bankası efektif satış kuru esas alınır.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Pasaport, Vize ve Sağlık Şartları
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tüketici, T.C. pasaportunun tur dönüş tarihinden itibaren en az <strong>6 ay geçerli</strong> olduğundan emin olmakla yükümlüdür. Pasaport geçersizliğinden doğabilecek tüm sonuçlar tüketiciye aittir.</li>
            <li>Vize başvurusu için gerekli belgeleri eksiksiz ve zamanında Şirket'e teslim etmek tüketicinin sorumluluğundadır.</li>
            <li>Vize reddi, pasaport geçersizliği, sınır kapısında giriş-çıkışın reddedilmesi, yasak listede olmak veya Interpol/yurt dışına çıkış engeli gibi hallerde doğacak zararlar ve iptal ücretleri tüketiciye aittir. Bu konudaki detaylar <a href="/politikalar/vize-bilgilendirme" className="text-primary hover:underline">Vize Bilgilendirme ve Sorumluluk</a> sayfasında açıklanmıştır.</li>
            <li>Hedef ülkelerin yürürlükteki sağlık şartları (aşı, PCR, karantina vb.) tüketici sorumluluğundadır.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. İptal, Değişiklik ve İade Koşulları
          </h2>
          <p>
            İptal, değişiklik ve iade koşulları{" "}
            <a href="/politikalar/iptal-iade-politikasi" className="text-primary hover:underline">
              İptal, İade ve Değişiklik Politikası
            </a>
            'nda detaylandırılmıştır. Özetle:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>7 günlük sipariş iadesi:</strong> Rezervasyon tarihinden itibaren 7 gün içinde iptal talep edilir VE tur başlangıcına 10 günden fazla süre varsa, ödenen tutarın <strong>%100'ü</strong> iade edilir.</li>
            <li><strong>7 günlük süre geçtikten sonra:</strong> Tur başlangıcına hâlâ 10 günden fazla süre varsa, ödenen tutarın <strong>%50'si</strong> iade edilir (cezai şart: %50).</li>
            <li><strong>Tur başlangıcına 10 gün ve daha az süre kalmışsa:</strong> No-show dâhil olmak üzere, ödenen tutarın tamamı ceza olarak alınır; <strong>iade yapılmaz</strong>.</li>
            <li>Havayolu biletleri (iadesiz tarifeler), vize harçları ve iade edilemez otel ön ödemeleri, yukarıdaki oranlardan bağımsız olarak tam tutarıyla Katılımcı'dan tahsil edilir.</li>
            <li>Vize reddi, sağlık şartlarına uyumsuzluk, kişisel belgelerin eksik/yanlış ibraz edilmesi gibi tüketici kaynaklı iptaller de yukarıdaki oranlara tabidir.</li>
            <li><strong>Devir yasağı:</strong> Rezervasyon ve tur katılım hakkı kişiye özgü olup, hiçbir koşulda üçüncü bir kişiye devredilemez.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Cayma Hakkının Bulunmadığına İlişkin Bilgilendirme
          </h2>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            <strong>Önemli:</strong> Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesinin 1. fıkrasının
            (g) bendi uyarınca, belirli bir tarih veya dönemde ifası öngörülen paket tur sözleşmeleri
            bakımından <strong>mevzuattan doğan 14 günlük cayma hakkı BULUNMAMAKTADIR</strong>. Ancak
            Şirket, tüketici lehine olmak üzere yukarıdaki 5. maddenin ilk satırında düzenlenen
            <strong> 7 günlük sipariş iadesi hakkını</strong> kendi rızasıyla tanımıştır. Bunun
            dışındaki iptallerde 5. maddede belirtilen oranlar uygulanır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            7. Zorunlu Sigorta Bilgisi
          </h2>
          <p>
            Paket Tur Sözleşmeleri Yönetmeliği md. 15 uyarınca Şirket; tüketicinin ödemiş olduğu
            bedelin iadesini ve tüketicinin ulaşım dâhil paket tur hizmetinin başladığı yere dönüşünü
            kapsayan <strong>Zorunlu Paket Tur Teminat Sigortası / Banka Teminatı</strong>'na
            sahiptir. Ayrıca, yurt dışı turları için tüketici adına <strong>Zorunlu Seyahat Sağlık
            Sigortası</strong> yaptırılır. Sigorta kapsamının ayrıntıları poliçe metninde yer alır ve
            talep üzerine paylaşılır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            8. Şikâyet ve Uyuşmazlık Çözümü
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tur sırasında hizmet kalitesine ilişkin şikâyetler öncelikle rehbere ve/veya Şirket yetkilisine derhal bildirilmelidir; aksi hâlde aynı durumun düzeltilememesi halinde sonradan yapılan başvurular dikkate alınmayabilir.</li>
            <li>Tur sonrasındaki yazılı şikâyetler, 1618 sayılı Kanun md. 12 uyarınca hizmetin ifa tarihinden itibaren <strong>30 gün içinde</strong> Şirket'e iletilmelidir.</li>
            <li>Uyuşmazlıklarda 6502 sayılı TKHK md. 68'de belirlenen parasal sınırlar çerçevesinde Tüketici Hakem Heyetleri veya Tüketici Mahkemeleri yetkilidir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            9. Sözleşme Metni ve Saklanması
          </h2>
          <p>
            Ön Bilgilendirme Formu ve Paket Tur Sözleşmesi, rezervasyon sonrası tüketicinin e-posta
            adresine kalıcı veri saklayıcısı (PDF) olarak gönderilir; ayrıca web sitemizde talep halinde
            erişim sağlanır. Tüketici, sözleşme metninin kendisine ulaştırıldığını ve saklanma şeklini
            kabul ettiğini beyan eder.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            10. Onay
          </h2>
          <p>
            Rezervasyon formunu dolduran ve/veya ödeme işlemini tamamlayan tüketici; işbu Ön
            Bilgilendirme Formu'nu okuduğunu, anladığını ve bu bilgilerin kendisine kalıcı veri
            saklayıcısıyla iletildiğini kabul ve beyan eder.
          </p>
        </div>
      </div>
    </div>
  );
}
