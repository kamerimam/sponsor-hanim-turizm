import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function IptalIadePolitikasi() {
  useSeo({
    title: "İptal, İade ve Değişiklik Politikası",
    description:
      "Sponsor Hanım Turizm rezervasyonlarında iptal, iade ve tarih/isim değişikliği koşulları, cezai şart oranları ve tüketici hakları.",
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
            İptal, İade ve Değişiklik Politikası
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu politika; <strong>Sponsor Hanım Turizm</strong> ("Şirket") tarafından düzenlenen paket
            tur rezervasyonlarına ilişkin iptal, iade ve değişiklik koşullarını düzenler. Politika;
            6502 sayılı Tüketicinin Korunması Hakkında Kanun, Paket Tur Sözleşmeleri Yönetmeliği
            ("PTSY") ve Mesafeli Sözleşmeler Yönetmeliği ("MSY") hükümleri çerçevesinde
            hazırlanmıştır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Genel Prensipler
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tur rezervasyonları; kişiye özel tarih ve kontenjan üzerinden planlandığından, iptal halinde Şirket'in üçüncü taraflara (havayolu, otel, vize aracı) önceden yaptığı ödemeler iade edilmeyebilir.</li>
            <li>İptal talebi, yazılı olarak (e-posta veya Şirket'e ulaştırılan dilekçe) yapılmak zorundadır. Sözlü iptaller işleme alınmaz.</li>
            <li>İptal tarihi olarak Şirket'in yazılı iptal talebini teslim aldığı tarih esas alınır.</li>
            <li>Kısmi katılımcı iptalinde, iptal eden kişi/kişilerin payına düşen bedel kendi oranında uygulanır; kalan katılımcılar için oluşabilecek tek kişilik oda farkı ilgili kişilerden tahsil edilir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Yasal Cayma Hakkının Bulunmaması
          </h2>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            Mesafeli Sözleşmeler Yönetmeliği md. 15/1-g uyarınca, belirli bir tarih veya dönemde ifa
            edilmesi gereken paket tur, konaklama, ulaşım ve yiyecek-içecek tedariki sözleşmelerinde
            <strong> mevzuattan doğan 14 günlük cayma hakkı BULUNMAMAKTADIR</strong>. İptal ve
            iade sürecinde yalnızca aşağıdaki 3. maddede düzenlenen Şirket İade Politikası
            uygulanır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Şirket İade Politikası (Katılımcı Kaynaklı İptaller)
          </h2>
          <p>
            Sponsor Hanım Turizm, tüketici lehine olmak üzere, mevzuatın öngördüğü asgari
            yükümlülüğün ötesinde aşağıdaki iade rejimini uygular. Cezai şart ve iade oranları;
            rezervasyonun oluşturulduğu tarih ile tur başlangıç tarihi arasındaki süre dikkate
            alınarak belirlenir:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="border border-border p-3 text-left">Durum</th>
                  <th className="border border-border p-3 text-left">Kesinti Oranı</th>
                  <th className="border border-border p-3 text-left">İade Oranı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">
                    <strong>7 günlük sipariş iadesi</strong> — Rezervasyon tarihinden itibaren <strong>7 gün içinde</strong> iptal talep edilir VE tur başlangıcına <strong>10 günden fazla</strong> süre varsa
                  </td>
                  <td className="border border-border p-3">%0</td>
                  <td className="border border-border p-3">%100 (Tam iade)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    Rezervasyon tarihinden itibaren <strong>7 günlük süre geçmiş</strong> ve tur başlangıcına <strong>hâlâ 10 günden fazla</strong> süre varsa
                  </td>
                  <td className="border border-border p-3">%50</td>
                  <td className="border border-border p-3">%50</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    Tur başlangıcına <strong>10 gün veya daha az</strong> kalmışsa (no-show ve tur başlamış olması dâhil)
                  </td>
                  <td className="border border-border p-3">%100</td>
                  <td className="border border-border p-3">İade yapılmaz</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground/70">
            <strong>Not 1:</strong> "7 günlük sipariş iadesi" hakkı yalnızca rezervasyonun
            oluşturulduğu tarihten itibaren <strong>7 gün içinde</strong> VE tur başlangıç tarihine
            <strong> 10 günden fazla</strong> süre varken kullanılabilir. Her iki koşulun birlikte
            sağlanması şarttır; biri sağlanmıyorsa tabloda yer alan diğer hükümler uygulanır.
          </p>
          <p className="text-sm text-foreground/70">
            <strong>Not 2:</strong> Havayolu bileti (özellikle iadesiz tarife), otel ön ödemesi,
            vize harcı ve benzeri üçüncü tarafa aktarılmış ve iadesi mümkün olmayan tutarlar,
            yukarıdaki oranlardan <strong>bağımsız olarak tam tutarıyla</strong> Katılımcı'dan
            tahsil edilir ve iade edilecek bedelden ayrıca mahsup edilir.
          </p>
          <p className="text-sm text-foreground/70">
            <strong>Not 3:</strong> İptal talebinin yapıldığı tarih, Şirket'in yazılı (e-posta /
            dilekçe) iptal bildirimini teslim aldığı tarihtir. Sözlü, SMS veya WhatsApp üzerinden
            iletilen bildirimler yazılı başvuru tamamlanana kadar iptal tarihi olarak kabul
            edilmez.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Vize Reddi ve Kişisel Belge Hataları
          </h2>
          <p>
            Vize reddi, pasaport süresinin yetersiz olması, pasaport yıpranması, isim-soyad uyuşmazlığı,
            yurt dışına çıkış yasağı, Interpol kaydı, konsolosluk mülakat başarısızlığı veya benzeri
            Katılımcı'dan kaynaklanan nedenlerle turun gerçekleşememesi hâlinde; yukarıdaki 3.
            maddedeki cezai şart tablosu aynen uygulanır. Şirket, vize başvuru harcı ile üçüncü taraflara
            aktarılmış (uçak bileti, otel kapora vb.) tutarları iade etmekle yükümlü değildir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Mazeret Durumu (PTSY md. 16/3)
          </h2>
          <p>
            Katılımcı'nın kendisinin veya birinci derece yakınlarının (anne, baba, eş, çocuk, kardeş)
            10 günlük mutat iştigaline engel olacak rahatsızlık veya vefat hâllerinin <strong>tam
            teşekküllü bir hastaneden alınacak resmi sağlık raporu / vefat belgesi</strong> ile
            belgelenmesi durumunda cezai şart uygulanmaz. Bu hâlde Şirket, yalnızca üçüncü taraflara
            ödenmiş ve iade edilmeyen tutarları kesmek suretiyle bakiye bedeli iade eder.
          </p>
          <p>
            Mazeret belgesi; rahatsızlığın/vefatın gerçekleştiği tarihten itibaren en geç 7 gün içinde
            Şirket'e iletilmelidir. Geç ibraz edilen belgeler dikkate alınmayabilir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Şirket Kaynaklı İptaller
          </h2>
          <p>PTSY md. 6 ve 7 kapsamında aşağıdaki hallerde Şirket turu iptal edebilir:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Turun gerçekleşmesi için gerekli minimum katılımcı sayısına (ilgili tur sayfasında belirtilen sayı) ulaşılamaması (Bildirim süresi: tur tarihinden en az 20 gün önce).</li>
            <li>Havayolu kotasının iptali, uçuş ağının değişmesi, konsolosluk kararıyla vize verilmemesi.</li>
            <li>Mücbir sebep hâlleri (savaş, salgın, doğal afet, hükümet kararı vb.).</li>
          </ul>
          <p>Bu durumlarda Şirket, Katılımcı'ya iki seçenek sunar:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Eş değer bir turun sunulması:</strong> Aynı veya benzer değerde alternatif tur teklif edilir.</li>
            <li><strong>Bedelin iadesi:</strong> Ödenen bedel, on dört (14) iş günü içinde Katılımcı'ya iade edilir.</li>
          </ul>
          <p>
            Mücbir sebeplerden kaynaklanan iptallerde Şirket, ek tazminat (manevi zarar, kazanç
            kaybı, vb.) ödemekle yükümlü değildir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            7. Tarih ve İsim Değişikliği — Devir Yasağı
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tarih değişikliği:</strong> Kontenjan müsait olması halinde ve tur başlangıcından en az 30 gün öncesine kadar tarih değişikliği talep edilebilir. Şirket, havayolu bileti farkı, otel fiyat farkı ve işlem ücretini Katılımcı'dan talep eder. Tarih değişikliği Şirket'in kabulüne bağlıdır.</li>
            <li><strong>İsim düzeltmesi:</strong> Pasaport bilgileriyle rezervasyonun eşleştirilmesi amacıyla yapılan küçük düzeltmeler (yazım hatası vb.) havayolu ve konsolosluğun izin verdiği ölçüde ve tur başlangıcından en az 7 gün önce yapılabilir. Bu, aşağıdaki <strong>devir yasağı</strong>na istisna teşkil etmez.</li>
          </ul>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            <strong>Devir Yasağı:</strong> Rezervasyon ve tur katılım hakkı{" "}
            <strong>kişiye özgü</strong> olup, <strong>hiçbir koşulda üçüncü bir kişiye
            devredilemez</strong>. Tur, yalnızca rezervasyonda adı geçen Katılımcı tarafından
            kullanılabilir. Katılımcı'nın tura katılamaması halinde yukarıdaki 3. maddede
            düzenlenen iade/kesinti oranları uygulanır; rezervasyonun üçüncü bir kişinin
            kullanımına aktarılması talep edilemez ve bu yöndeki girişimler Şirket tarafından
            kabul edilmez.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            8. İade Süreci ve Yöntemi
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>İadeye esas net tutar belirlendikten sonra Katılımcı'ya en geç <strong>14 iş günü</strong> içinde ödeme yapılır (PTSY md. 10).</li>
            <li>İade, ödemenin yapıldığı aynı yöntem ile gerçekleştirilir: kredi kartı ödemeleri ilgili kartın pos iadesiyle; havale/EFT ödemeleri Katılımcı'nın bildireceği T.C. kimlik numarasıyla uyumlu IBAN'a yapılır.</li>
            <li>Döviz cinsi ile yapılan ödemelerde iade, ödemenin alındığı tarihteki kur üzerinden TL olarak gerçekleştirilir. Kur farkı kaynaklı zararlardan Şirket sorumlu tutulamaz.</li>
            <li>Kredi kartı ile yapılan iadelerde banka/pos sağlayıcının işlem süresi (ortalama 2–20 iş günü) iade süresine dâhil değildir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            9. Ayıplı İfa ve Ücret İndirimi
          </h2>
          <p>
            Tur sırasında karşılaşılan aksaklıkların öncelikle rehbere veya operasyon yetkilisine
            bildirilmesi esastır. Yerinde bildirilmeyen ve çözüm fırsatı verilmeyen hususlar sonradan
            tazmin talebine konu edilemez. PTSY md. 13 uyarınca ayıplı ifa durumunda Katılımcı;
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ayıbın giderilmesini,</li>
            <li>Sözleşmeden dönme (imkân varsa),</li>
            <li>Makul bir ücret indirimi talep edebilir.</li>
          </ul>
          <p>
            Sözleşmeden dönme hakkı, ayıbın sözleşmenin temel unsurunu etkileyecek ağırlıkta olması
            hâlinde kullanılabilir. Küçük nitelikteki ayıplar ancak ücret indirimine konu olabilir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            10. İletişim ve Başvuru
          </h2>
          <p>İptal, iade ve değişiklik talepleri için:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>E-posta:</strong> sponsorhanim@gmail.com</li>
            <li><strong>Telefon:</strong> 0544 498 62 08</li>
            <li><strong>Adres:</strong> Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</li>
          </ul>
          <p>
            Talebinizde rezervasyon numarası, kimlik bilgileri ve iptal nedeni yer almalıdır.
            Başvurunuz en geç 3 iş günü içinde değerlendirilerek tarafınıza yazılı dönüş yapılır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            11. Uyuşmazlık Çözümü
          </h2>
          <p>
            İptal, iade ve değişiklik süreçlerinde doğabilecek uyuşmazlıklarda 6502 sayılı Kanun md. 68
            kapsamındaki parasal sınırlara göre Tüketici Hakem Heyetleri veya Tüketici Mahkemeleri
            yetkilidir. Diğer uyuşmazlıklarda Ankara Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>
        </div>
      </div>
    </div>
  );
}
