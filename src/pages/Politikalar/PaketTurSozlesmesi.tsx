import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function PaketTurSozlesmesi() {
  useSeo({
    title: "Paket Tur Sözleşmesi / Mesafeli Satış Sözleşmesi",
    description:
      "Sponsor Hanım Turizm ile tüketiciler arasında akdedilen paket tur ve mesafeli satış sözleşmesi: taraflar, edimler, iptal, mücbir sebep, sorumluluk ve uyuşmazlık hükümleri.",
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
            Paket Tur / Mesafeli Satış Sözleşmesi
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-foreground mt-4 mb-4">
            Madde 1 — Taraflar
          </h2>
          <p><strong>1.1. Satıcı / Paket Tur Düzenleyici ("Şirket"):</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Unvan: Sponsor Hanım Turizm</li>
            <li>Adres: Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</li>
            <li>Telefon: 0544 498 62 08 — E-posta: sponsorhanim@gmail.com</li>
            <li>Web: www.sponsorhanimtravel.com</li>
          </ul>
          <p>
            <strong>1.2. Alıcı / Tüketici ("Katılımcı"):</strong> Rezervasyon formunda bilgileri yer alan
            gerçek veya tüzel kişi ile rezervasyon kapsamında yer alan tüm yolcular. Rezervasyonu
            oluşturan kişi, diğer yolcular adına sözleşmeyi kurmaya yetkili olduğunu beyan ve taahhüt
            eder; bu kişilerin sözleşme hükümlerine uymasından müteselsilen sorumludur.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 2 — Sözleşmenin Konusu ve Kapsamı
          </h2>
          <p>
            İşbu Sözleşme'nin konusu; Katılımcı'nın www.sponsorhanimtravel.com üzerinden veya Şirket'in
            satış ofisinden rezervasyon yaptığı; ulaşım, konaklama, rehberlik, vize, transfer gibi en az
            iki hizmetin bir araya getirildiği paket turun (hac, umre, Mısır, Bali veya kültür turu) temini
            ile ilgili tarafların hak ve yükümlülüklerinin; 6502 sayılı Tüketicinin Korunması Hakkında
            Kanun, Paket Tur Sözleşmeleri Yönetmeliği (PTSY), Mesafeli Sözleşmeler Yönetmeliği ve 1618
            sayılı Seyahat Acentaları ve Seyahat Acentaları Birliği Kanunu hükümleri çerçevesinde
            düzenlenmesidir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 3 — Paket Turun Temel Nitelikleri
          </h2>
          <p>
            Satışa konu paket turun adı, güzergâhı, ulaşım aracı, kalkış-dönüş tarihleri, konaklama tesisi
            ve sınıfı, oda tipi, pansiyon düzeni, günlük program, dâhil olan/olmayan hizmetler, minimum
            katılımcı sayısı, rehberlik dili ve toplam fiyat bilgileri; rezervasyon aşamasında Katılımcı'ya
            Ön Bilgilendirme Formu ile ve sonrasında bu Sözleşme'nin eki niteliğindeki rezervasyon
            kaydıyla bildirilmiştir. Katılımcı, bu bilgileri okuyup onayladığını kabul eder.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 4 — Sözleşme Bedeli ve Ödeme
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Toplam bedel, KDV dâhil olarak kişi başı belirlenir ve rezervasyon kaydında yer alır.</li>
            <li>Ödeme, tamamı peşin ya da toplam bedelin %50'si kapora + bakiye en geç tur tarihinden 30 gün önce tahsil edilmek üzere yapılabilir.</li>
            <li>Bakiyenin zamanında ödenmemesi durumunda Şirket, rezervasyonu herhangi bir bildirim yapmaksızın iptal etme ve ödenen kaporayı ceza olarak irat kaydetme hakkına sahiptir.</li>
            <li>Döviz bazlı turlarda ödeme günkü T.C. Merkez Bankası efektif satış kuru esas alınır.</li>
            <li>Kredi kartı ile yapılan ödemelerde taksit yapılandırması ilgili bankanın insiyatifindedir; taksit reddi, chargeback iade süreçleri bankanın işlem sürelerine tabidir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 5 — Fiyat Değişikliği (PTSY md. 9)
          </h2>
          <p>
            Tur bedeli, tur başlangıcından en geç yirmi (20) gün öncesine kadar; yalnızca yakıt giderleri,
            liman, havaalanı vergileri ve döviz kurunda meydana gelen olağanüstü değişiklikler gibi
            Şirket'in kontrolü dışındaki sebeplerle artırılabilir. Fiyat artışı <strong>%5'i
            aşmadığı</strong> sürece Katılımcı bu artışı kabul etmekle yükümlüdür. %5'i aşan artışlarda
            Katılımcı, artışı kabul etme veya sözleşmeyi ücretsiz feshederek ödediği bedelin tamamını
            geri alma hakkına sahiptir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 6 — Katılımcı'nın Yükümlülükleri
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rezervasyon sırasında beyan ettiği kimlik, pasaport ve iletişim bilgilerinin doğruluğundan sorumludur. Yanlış/eksik bilgi nedeniyle vize, uçuş veya konaklama hizmetlerinde doğacak aksaklıkların sonuçları Katılımcı'ya aittir.</li>
            <li>Pasaportunun tur dönüş tarihinden itibaren asgari altı (6) ay geçerli olmasını temin eder. Eskimiş, yıpranmış, eksik sayfalı veya yurt dışına çıkış yasaklı pasaportlarla doğacak sorunlardan Şirket sorumlu tutulamaz.</li>
            <li>Vize başvurusu için istenen evrakları Şirket'in bildirdiği tarih aralığında eksiksiz teslim eder. Vize reddi veya geç ibraz nedeniyle oluşacak iptal ücretleri Katılımcı'ya aittir.</li>
            <li>Tur güzergâhındaki ülkelerin giriş-çıkış, sağlık (aşı, PCR testi vb.), karantina ve gümrük kurallarına uyar.</li>
            <li>Tur programının akışına, rehber talimatlarına, uçuş saatlerine, toplanma noktalarına ve grup disiplinine uymakla yükümlüdür. Katılımcı'nın kusurundan kaynaklanan uçuş kaçırma, otobüs kaçırma veya programa gecikmeli katılım sonucu oluşacak ek masraflar kendisine aittir.</li>
            <li>Bagajında yasa dışı madde, silah, aşırı miktarda para, yasaklı ürün bulundurmaz; aksi halde tüm sorumluluk Katılımcı'ya aittir.</li>
            <li>Konaklama tesislerinde ve ulaşım araçlarında verdiği hasardan şahsen sorumludur.</li>
            <li>Tur sırasındaki genel ahlak, kamu düzeni ve ziyaret edilen kutsal mekanların usul ve erkânına uygun davranır. Aksi halde rehber, Katılımcı'yı gruptan çıkarma hakkına sahiptir ve bu durum iade gerektirmez.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 7 — Şirket'in Yükümlülükleri
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rezervasyonda belirtilen hizmetleri Paket Tur Sözleşmeleri Yönetmeliği hükümleri çerçevesinde ifa eder.</li>
            <li>Zorunlu paket tur sigortası / banka teminatı ile yurt dışı turlar için zorunlu seyahat sağlık sigortasını yaptırır.</li>
            <li>Tur öncesinde Katılımcı'yı gerekli belgeler, buluşma noktası, program ve uçuş detayları hakkında bilgilendirir.</li>
            <li>Tur sırasında ortaya çıkan sorunlara müdahale etmek üzere makul özeni gösterir, rehber/operasyon desteği sağlar.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 8 — Şirket'in Değişiklik Hakkı
          </h2>
          <p>
            Şirket, operasyonel zorunluluk, havayolu şirketi değişikliği, otel doluluk durumu,
            konsolosluk kararları, güzergâh güvenliği veya benzeri nedenlerle tur programında esasa
            etki etmeyen değişiklikler yapma hakkını saklı tutar. Bu çerçevede:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Havayolu, uçuş saati, uçuş numarası, aktarma noktası değişikliği,</li>
            <li>Otelin aynı veya daha üst kategoride başka bir otel ile ikame edilmesi,</li>
            <li>Gezi günlerinin sırasının değiştirilmesi,</li>
            <li>Rehber ve personel değişikliği,</li>
          </ul>
          <p>
            gibi değişiklikler esaslı değişiklik sayılmaz ve Katılımcı'ya fesih veya iade hakkı vermez.
            PTSY md. 8 kapsamındaki esaslı değişikliklerde Katılımcı, değişikliği kabul etme veya
            sözleşmeyi fesh ederek ödediği bedeli geri alma hakkına sahiptir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 9 — Tur İptali (Şirket Kaynaklı)
          </h2>
          <p>
            Turun gerçekleşmesi için gerekli minimum katılımcı sayısına ulaşılamaması veya diğer haklı
            nedenlerle Şirket; turu, tur başlangıcından en geç <strong>yirmi (20) gün</strong> önceden
            bildirimde bulunmak suretiyle iptal edebilir. Bu durumda Katılımcı'ya (i) ödediği bedelin
            tamamı iade edilir veya (ii) eş değer bir tur teklif edilir. Katılımcı, bu durumda başkaca bir
            tazminat veya masraf talebinde bulunamaz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 10 — Tur İptali (Katılımcı Kaynaklı) ve Cezai Şart
          </h2>
          <p>
            Katılımcı kaynaklı iptallerde, rezervasyonun oluşturulduğu tarih ile tur başlangıç
            tarihi arasındaki süre dikkate alınarak aşağıdaki iade ve cezai şart rejimi uygulanır:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="border border-border p-3 text-left">Durum</th>
                  <th className="border border-border p-3 text-left">Cezai Şart</th>
                  <th className="border border-border p-3 text-left">İade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">
                    Rezervasyon tarihinden itibaren <strong>7 gün içinde</strong> iptal VE tur başlangıcına <strong>10 günden fazla</strong> süre varsa
                  </td>
                  <td className="border border-border p-3">%0</td>
                  <td className="border border-border p-3">%100</td>
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
                    Tur başlangıcına <strong>10 gün veya daha az</strong> süre varsa (no-show dâhil)
                  </td>
                  <td className="border border-border p-3">%100</td>
                  <td className="border border-border p-3">İade yok</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Vize reddi, pasaport hatası, Katılımcı'nın sağlık sorunu (Madde 11'deki haller hariç),
            uçuşu kaçırma ve Katılımcı'dan kaynaklanan benzeri iptaller de yukarıdaki oranlara
            tabidir. Ayrıca havayolu biletleri, vize harçları ve otellerin iade edilemez kısmı,
            yukarıdaki oranlardan <strong>bağımsız olarak tam tutarıyla</strong> Katılımcı'dan
            tahsil edilir ve net iade tutarından ayrıca mahsup edilir.
          </p>
          <p className="text-sm text-foreground/70">
            İptal tarihi, Şirket'in yazılı iptal bildirimini (e-posta / dilekçe) teslim aldığı
            tarihtir. Detaylı kurallar için{" "}
            <a href="/politikalar/iptal-iade-politikasi" className="text-primary hover:underline">
              İptal, İade ve Değişiklik Politikası
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 11 — Zorunlu/Mazeret İptalleri
          </h2>
          <p>
            PTSY md. 16/3 uyarınca Katılımcı'nın kendisinin veya birinci derece yakınlarının 10 günlük
            mutat iştigaline engel olacak rahatsızlıkları veya vefat hâllerinin tam teşekküllü bir
            hastaneden alınacak resmi rapor ile belgelenmesi durumunda yukarıdaki cezai şart
            uygulanmaz; Şirket, ancak üçüncü taraflara (havayolu, otel vb.) ödenmiş ve iade edilmeyen
            tutarları kesmek suretiyle bakiye bedeli iade eder.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 12 — Yasal Cayma Hakkı ve Şirket'in Sunduğu İade Hakkı
          </h2>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            Mesafeli Sözleşmeler Yönetmeliği md. 15/1-g uyarınca, belirli bir tarih veya dönemde
            ifa edilmesi gereken konaklama ve seyahat hizmetlerinde — paket tur sözleşmeleri dâhil
            — Katılımcı'nın <strong>mevzuattan doğan 14 günlük cayma hakkı bulunmamaktadır</strong>.
            Bununla birlikte Şirket, tüketici lehine olmak üzere, Madde 10'un ilk satırında
            düzenlenen <strong>7 günlük sipariş iadesi hakkını</strong> tanımıştır: rezervasyon
            tarihinden itibaren 7 gün içinde ve tur başlangıcına 10 günden fazla süre varken
            iptal talep edilmesi durumunda, ödenen tutarın tamamı Katılımcı'ya iade edilir. Bunun
            dışındaki iptallerde Madde 10'da yer alan oranlar uygulanır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 13 — Mücbir Sebepler
          </h2>
          <p>
            Savaş, terör, iç karışıklık, salgın hastalık, deprem, sel, yangın, grev, lokavt, hükümet
            kararları, havayolu iptalleri, hac/umre kotasının düşürülmesi veya iptali, vize rejimi
            değişiklikleri, siber saldırı, altyapı arızası ve benzeri Şirket'in kontrolü dışındaki haller
            mücbir sebep olarak kabul edilir. Mücbir sebeplerden ötürü turun iptali veya programda
            değişiklik yapılması durumunda:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Şirket, fiilen üçüncü taraflara aktarılmış ve iade edilemez masrafları kesmek suretiyle kalan bedeli iade eder.</li>
            <li>Katılımcı, mücbir sebeplerden kaynaklanan zararlar için Şirket'ten ek tazminat talep edemez.</li>
            <li>Şirket, eş değer bir tura katılma hakkı sunabilir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 14 — Devir Yasağı
          </h2>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            Rezervasyon ve tur katılım hakkı <strong>kişiye özgüdür</strong>. Tur; havayolu
            biletinin, konsolosluk vize işlemlerinin, zorunlu seyahat sağlık sigortasının ve
            konaklama kaydının rezervasyondaki Katılımcı'nın kimlik bilgileri üzerinden
            tanzim edilmesi nedeniyle, <strong>hiçbir koşulda üçüncü bir kişiye devredilemez
            veya onun kullanımına aktarılamaz</strong>. Katılımcı'nın tura katılamaması
            hâlinde sadece Madde 10'da düzenlenen iade oranları uygulanır; rezervasyonun başka
            bir kişi adına kullanılması talep edilemez ve bu yöndeki girişimler Şirket
            tarafından kabul edilmez.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 15 — Sigortalar ve Güvence
          </h2>
          <p>
            Şirket, PTSY md. 15 uyarınca paket tur sigortası/banka teminatına; yurt dışı turlar için
            Katılımcı adına zorunlu seyahat sağlık sigortasına sahiptir. Bu sigortalar standart kapsamlı
            olup ek ihtiyaçlar (örn. bagaj, ferdi kaza, Covid-19 ek teminatı) için Katılımcı, kendi
            isteğiyle ek poliçe yaptırabilir. Şirket, zorunlu sigorta kapsamı dışında kalan zararlardan
            sorumlu tutulamaz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 16 — Sorumluluğun Sınırları
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Şirket; doğrudan kendi kusurundan doğan zararlardan 1618 sayılı Kanun ve PTSY çerçevesinde sorumludur.</li>
            <li>Havayolu kaynaklı uçuş gecikmeleri, iptaller, bagaj kaybı/gecikmesi nedeniyle oluşan zararlardan Montreal Sözleşmesi ve havayolunun tarife koşulları uyarınca havayolu şirketi sorumludur.</li>
            <li>Otel, transfer veya üçüncü taraf hizmet sağlayıcılardan kaynaklanan ayıplı ifa hâlinde Şirket'in sorumluluğu, ayıbın giderilmesi veya ücret indirimi talebi ile sınırlıdır.</li>
            <li>Katılımcı'nın ihmali, talimatlara uymaması veya üçüncü kişilerin fiilinden kaynaklanan zararlar Şirket'in sorumluluk kapsamı dışındadır.</li>
            <li>Tur sırasında meydana gelen kişisel eşya kaybı, çalınma veya hasar, ilgili sigortanın kapsamında değerlendirilir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 17 — Şikâyet ve Ayıplı İfa
          </h2>
          <p>
            Katılımcı, tur süresince karşılaştığı aksaklıkları derhal rehbere / operasyon yetkilisine
            bildirmekle yükümlüdür. Tur sırasında yerinde çözülmesi mümkünken bildirilmeyen
            durumlardan dolayı sonradan yapılan talepler dikkate alınmayabilir. Yazılı şikâyetler, tur
            dönüşünden itibaren <strong>otuz (30) gün içinde</strong> Şirket'e iletilir. Şirket, yasal süre
            içinde Katılımcı'ya geri dönüş yapar.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 18 — Kişisel Verilerin Korunması
          </h2>
          <p>
            Katılımcı'nın kişisel verileri,{" "}
            <a href="/politikalar/kvkk-aydinlatma-metni" className="text-primary hover:underline">KVKK Aydınlatma Metni</a>
            {" "}ve{" "}
            <a href="/politikalar/kvkk-acik-riza-beyani" className="text-primary hover:underline">KVKK Açık Rıza Beyanı</a>
            {" "}çerçevesinde işlenir ve aktarılır. Katılımcı, işbu Sözleşme'yi kabul ederek söz konusu metinleri okuduğunu beyan eder.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 19 — Delil Sözleşmesi
          </h2>
          <p>
            Taraflar arasında çıkabilecek uyuşmazlıklarda; Şirket'in defter, kayıt, bilgisayar ve ses
            kayıtları, e-posta yazışmaları, web sitesinde oluşturulan rezervasyon kayıtları, IP/kullanıcı
            log'ları ve WhatsApp yazışmaları 6100 sayılı Hukuk Muhakemeleri Kanunu md. 193 uyarınca
            kesin delil niteliğindedir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 20 — Uygulanacak Hukuk ve Yetki
          </h2>
          <p>
            İşbu Sözleşme'nin yorumu ve uygulanmasında Türk Hukuku uygulanır. 6502 sayılı Kanun md.
            68'de belirtilen parasal sınırlar dâhilinde Tüketici Hakem Heyetleri; aşan uyuşmazlıklarda
            Tüketici Mahkemeleri yetkilidir. Diğer uyuşmazlıklarda <strong>Ankara Mahkemeleri ve İcra
            Daireleri</strong> yetkilidir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            Madde 21 — Yürürlük ve Elektronik Onay
          </h2>
          <p>
            Yirmibir (21) maddeden ibaret işbu Sözleşme, Katılımcı tarafından rezervasyon formunda
            ilgili onay kutucuğunun işaretlenmesi ve/veya ödemenin gerçekleştirilmesi ile elektronik
            ortamda kurulmuş sayılır. Sözleşme'nin elektronik imza hükmünde olduğu ve 6098 sayılı
            Türk Borçlar Kanunu uyarınca bağlayıcı olduğu kabul edilmiştir. Sözleşme metni Katılımcı'nın
            e-posta adresine kalıcı veri saklayıcısı (PDF) olarak gönderilir.
          </p>

          <p className="bg-muted/40 border border-border rounded-md p-5 mt-8">
            <strong>Katılımcı, işbu Paket Tur / Mesafeli Satış Sözleşmesi'nin tüm maddelerini okuduğunu,
            Ön Bilgilendirme Formu'nu aldığını, KVKK Aydınlatma Metni ve Çerez Politikası'nı incelediğini
            ve hükümlerini kabul ettiğini beyan eder.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
