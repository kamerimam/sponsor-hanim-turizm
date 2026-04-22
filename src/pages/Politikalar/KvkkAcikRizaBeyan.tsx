import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function KvkkAcikRizaBeyan() {
  useSeo({
    title: "KVKK Açık Rıza Beyanı",
    description:
      "Sponsor Hanım Turizm tarafından özel nitelikli kişisel verilerin ve yurt dışı aktarımların işlenmesine ilişkin açık rıza beyanı metni.",
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
            KVKK Açık Rıza Beyanı
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 5/1. ve 6/2. maddeleri
            uyarınca, aşağıda açıklanan hususlarda kişisel verilerimin ve özel nitelikli kişisel
            verilerimin <strong>Sponsor Hanım Turizm</strong> ("Şirket") tarafından işlenmesi ve
            aktarılması konusunda özgür irademle, bilgilendirilmiş olarak aşağıdaki beyanlarımı
            veriyorum.
          </p>

          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            Bu beyanı vermeden önce Şirketin KVKK Aydınlatma Metni'ni okuduğumu, işleme amaçlarını,
            aktarım tarafları ve hukuki sebepleri anladığımı kabul ediyorum. İşbu rıza beyanı
            kapsamındaki işleme faaliyetlerinin, rıza vermediğim takdirde Şirket'in sunacağı temel
            tur hizmetini engellemediğini; ancak ilgili hizmetin gerektirdiği bazı bileşenlerin
            (örn. vize, konaklama, sağlık sigortası) tarafımdan temin edilememesi hâlinde bunun
            sonucu doğacak yükümlülük ve masrafların bana ait olacağını biliyorum.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Özel Nitelikli Kişisel Verilerin İşlenmesine Rıza
          </h2>
          <p>
            Hac, umre ve diğer inanç turlarının doğası gereği zorunlu olan; pasaportumda yer alan
            <strong> din bilgisi</strong>, sağlıklı bir şekilde seyahat edebilmem için gerekli
            <strong> sağlık bilgilerim</strong> (süreğen hastalık, kullandığım ilaç, engel
            durumu, gıda/ilaç alerjileri) ile zorunlu olduğu ölçüde <strong>biyometrik
            fotoğrafım</strong> ve pasaport/kimlik fotokopilerimde yer alan diğer özel nitelikli
            verilerimin; tur organizasyonunun planlanması, otel ve uçuş rezervasyonlarının
            yapılması, vize başvurusunun sonuçlandırılması, zorunlu seyahat sağlık sigortasının
            yaptırılması ve tur süresince sağlığıma uygun hizmet verilmesi amaçlarıyla işlenmesine
            <strong> AÇIK RIZA VERİYORUM</strong>.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Yurt Dışına Aktarım Rızası
          </h2>
          <p>
            Tur kapsamında pasaport, kimlik, iletişim ve gerektiğinde sağlık bilgilerimin;
            Suudi Arabistan Krallığı (hac/umre), Mısır Arap Cumhuriyeti, Endonezya Cumhuriyeti
            (Bali) ve diğer tur güzergâhındaki ülkelerin yetkili makamlarına, konsolosluklara,
            havayollarına, otel ve konaklama tesislerine, yer hizmetleri şirketlerine, sigorta
            şirketlerine, vize aracı kurumlarına ve tur operatörlerine; KVKK md. 9 çerçevesinde
            <strong> yurt dışına aktarılmasına AÇIK RIZA VERİYORUM</strong>.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Fotoğraf ve Video Kullanım Rızası (İsteğe Bağlı)
          </h2>
          <p>
            Tur sırasında çekilen grup fotoğrafları ve videolarımın; Şirket'in tanıtım
            faaliyetlerinde, sosyal medya hesaplarında, web sitesinde, blog ve katalog
            çalışmalarında kullanılmasına — yüzümün belirgin olarak göründüğü görseller
            bakımından — tercih kutucuğunu işaretlediğim takdirde <strong>rıza veriyorum</strong>.
            Bu rızayı dilediğim zaman ileriye etkili olarak geri alabileceğimi biliyorum.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Pazarlama ve Ticari Elektronik İleti Rızası (İsteğe Bağlı)
          </h2>
          <p>
            E-posta, SMS, telefon araması ve WhatsApp kanalları üzerinden; Şirket'in tur
            kampanyaları, erken rezervasyon fırsatları, indirimler, etkinlik ve duyurular
            konusunda ticari elektronik ileti göndermesine; bu amaçla iletişim ve tercih
            verilerimin işlenmesine ve hizmet sağlayıcı tedarikçilere aktarılmasına
            <strong> rıza veriyorum</strong>. 6563 sayılı Elektronik Ticaretin Düzenlenmesi
            Hakkında Kanun uyarınca bu rızayı dilediğim zaman İYS üzerinden veya iletilerin
            içindeki "aboneliği sonlandır" bağlantısıyla ücretsiz olarak geri alabileceğimi
            biliyorum.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Rızanın Geri Alınması
          </h2>
          <p>
            Yukarıda verdiğim açık rızaları dilediğim zaman, Şirket'e yazılı dilekçe veya
            sponsorhanim@gmail.com adresine e-posta göndererek ileriye etkili olarak geri
            alabileceğimi biliyorum. Rızamın geri alınmasından önce gerçekleştirilen işleme
            faaliyetlerinin hukuka uygunluğunun korunacağını; rıza gerektirmeyen hukuki
            sebeplere dayalı işlemenin (sözleşmenin ifası, yasal yükümlülük vb.) rızanın geri
            alınmasından etkilenmeyeceğini anlıyorum.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Beyan
          </h2>
          <p>
            İşbu Açık Rıza Beyanı'nı, KVKK Aydınlatma Metni'nde yer alan hususları okuyarak,
            anlayarak, özgür irademle ve hür bir şekilde — herhangi bir baskı veya zorlamaya
            maruz kalmaksızın — veriyorum. Bu rızanın rezervasyon formunun doldurulması,
            sözleşmenin imzalanması veya web sitesi üzerinden ilgili kutucuğun işaretlenmesiyle
            geçerli kabul edileceğini kabul, beyan ve taahhüt ederim.
          </p>

          <div className="bg-muted/40 border border-border rounded-md p-5 mt-8">
            <p className="font-semibold mb-2">Önemli Not</p>
            <p className="text-sm">
              Web sitesi üzerinden rezervasyon oluştururken işaretlediğiniz kutucuk, bu metnin
              elektronik ortamda onaylandığı anlamına gelir ve 6563 sayılı Kanun ile KVKK
              kapsamında yazılı rıza hükmündedir. Rıza verdiğiniz tarih ve IP bilgisi ispat
              amacıyla sistemlerimizde kayıt altına alınır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
