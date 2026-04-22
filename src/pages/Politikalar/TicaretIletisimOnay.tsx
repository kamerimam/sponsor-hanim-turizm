import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function TicaretIletisimOnay() {
  useSeo({
    title: "Ticari İletişim / E-Bülten Onayı",
    description:
      "6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında Sponsor Hanım Turizm'den ticari elektronik ileti alma tercihleriniz ve İYS bilgilendirmesi.",
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
            Ticari İletişim / E-Bülten Onayı
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu metin; 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun, Ticari İletişim
            ve Ticari Elektronik İletiler Hakkında Yönetmelik ve İleti Yönetim Sistemi ("İYS")
            kuralları kapsamında <strong>Sponsor Hanım Turizm</strong> ("Şirket") tarafından size
            gönderilebilecek ticari elektronik iletiler (SMS, e-posta, telefon araması, WhatsApp vb.)
            hakkında sizi bilgilendirmek ve onayınızı almak amacıyla hazırlanmıştır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Hizmet Sağlayıcı (Gönderen) Bilgileri
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Unvan:</strong> Sponsor Hanım Turizm</li>
            <li><strong>Adres:</strong> Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</li>
            <li><strong>Telefon:</strong> 0544 498 62 08</li>
            <li><strong>E-posta:</strong> sponsorhanim@gmail.com</li>
            <li><strong>Web:</strong> www.sponsorhanimtravel.com</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Onayın Kapsamı
          </h2>
          <p>Onay vermeniz halinde aşağıdaki kanallar üzerinden ticari elektronik ileti alabilirsiniz:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>SMS:</strong> Tur kampanyaları, erken rezervasyon fırsatları, indirim hatırlatmaları, ödeme sonu bilgilendirmeleri.</li>
            <li><strong>E-posta:</strong> Aylık/dönemsel e-bülten, yeni tur programları, hac/umre bilgilendirme yazıları, blog içerikleri, anket ve müşteri memnuniyeti talepleri.</li>
            <li><strong>Telefon araması:</strong> Uygun olduğunuz saatlerde kampanya bilgilendirmesi, özel teklif iletimi.</li>
            <li><strong>WhatsApp Business:</strong> Tur duyuruları, sınırlı süreli kampanyalar, kişiselleştirilmiş öneriler.</li>
          </ul>
          <p>
            Onay vermediğiniz kanallardan ticari ileti gönderilmez. Rezervasyonunuza, ödeme ve tur
            operasyonuna ilişkin <strong>bilgilendirme nitelikli</strong> mesajlar (rezervasyon onayı,
            uçuş saati değişikliği, vize evrak talebi, tur toplanma bildirimi vb.) sözleşmenin ifası
            kapsamında olduğundan onay aranmaksızın gönderilir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Onayın Kaydı ve İYS'ye Aktarımı
          </h2>
          <p>
            6563 sayılı Kanun ve İYS prosedürleri uyarınca, tarafınızdan alınan onay bilgisi;{" "}
            <strong>İleti Yönetim Sistemi (iys.org.tr)</strong> üzerinden kayıt altına alınır ve işlenir.
            İYS üzerinden onay tercihlerinizi (SMS, e-posta, arama için ayrı ayrı) dilediğiniz
            zaman sorgulayabilir ve değiştirebilirsiniz. Onay vermediğiniz veya sonradan reddettiğiniz
            kanallardan size ticari elektronik ileti gönderilmez.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Onayın Geri Alınması (Red Hakkı)
          </h2>
          <p>
            Verdiğiniz onayı <strong>hiçbir gerekçe göstermeksizin, ücretsiz olarak</strong> her zaman
            geri alma hakkınız bulunmaktadır. Red hakkınızı aşağıdaki yollarla kullanabilirsiniz:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>İYS portalı:</strong> <a href="https://iys.org.tr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iys.org.tr</a> üzerinden onay yönetimi.</li>
            <li><strong>SMS için:</strong> Gelen SMS'e "RED" yazıp cevap vermek veya İYS kısa numarasını kullanmak.</li>
            <li><strong>E-posta için:</strong> Gelen e-postanın altında yer alan "Aboneliği sonlandır" bağlantısına tıklamak.</li>
            <li><strong>Arama için:</strong> 0544 498 62 08 numaralı hattı aramak veya sponsorhanim@gmail.com adresine bildirim göndermek.</li>
          </ul>
          <p>
            Red talebiniz, en geç <strong>üç (3) iş günü</strong> içinde kayıtlarımıza ve İYS'ye
            işlenerek yürürlüğe girer. Red tarihinden sonra size ticari elektronik ileti gönderilmez.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Kişisel Verilerin İşlenmesi
          </h2>
          <p>
            Ticari elektronik ileti gönderimi için kullanılan iletişim bilgileriniz (ad, soyad, telefon,
            e-posta); 6698 sayılı KVKK kapsamında, açık rızanıza dayanarak ve/veya meşru menfaat
            hukuki sebebine dayanılarak işlenir. Detaylı bilgi için{" "}
            <a href="/politikalar/kvkk-aydinlatma-metni" className="text-primary hover:underline">
              KVKK Aydınlatma Metni
            </a>{" "}
            ve{" "}
            <a href="/politikalar/kvkk-acik-riza-beyani" className="text-primary hover:underline">
              KVKK Açık Rıza Beyanı
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Alınan Hizmete İlişkin İletişim İstisnası
          </h2>
          <p>
            6563 sayılı Kanun md. 6/2 uyarınca; Şirket ile aranızda doğmuş bir sözleşme veya üyelik
            ilişkisi varsa, bu ilişki süresince ya da sona erdikten sonra da aynı ya da benzer mal ve
            hizmetlere yönelik olarak, aynı iletişim kanalıyla <strong>ticari elektronik ileti
            gönderilmesi onay gerektirmez</strong>. Ancak bu durumda dahi red hakkınızı kullanarak
            iletimi durdurabilirsiniz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            7. Şikâyet Mercii
          </h2>
          <p>
            Ticari elektronik iletilere ilişkin şikâyetlerinizi öncelikle Şirketimize iletebilir; aynı
            zamanda T.C. Ticaret Bakanlığı Tüketicinin Korunması ve Piyasa Gözetimi Genel Müdürlüğü
            ile 85'lik İleti Yönetim Sistemi üzerinden de başvuruda bulunabilirsiniz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            8. Onay Beyanı
          </h2>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            Web sitemizde yer alan "Ticari elektronik ileti almayı kabul ediyorum" kutucuğunu
            işaretlediğinizde veya rezervasyon/formlarda ilgili onayı verdiğinizde; Sponsor Hanım
            Turizm tarafından yukarıda belirtilen kanallardan kampanya, duyuru ve tanıtım amaçlı
            ticari elektronik ileti gönderilmesini onayladığınızı; bu onayın İYS'ye aktarılmasına muvafakat
            ettiğinizi kabul etmiş olursunuz. Onayı dilediğiniz zaman, ücretsiz olarak geri alabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
