import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function KvkkAydinlatmaMetni() {
  useSeo({
    title: "KVKK Aydınlatma Metni",
    description:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Sponsor Hanım Turizm'in veri işleme politikası, aktarım esasları ve ilgili kişi hakları.",
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
            KVKK Aydınlatma Metni
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun
            ("KVKK") 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde
            Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca, veri sorumlusu sıfatıyla
            <strong> Sponsor Hanım Turizm</strong> tarafından kişisel verilerinizin nasıl
            işlendiği hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Veri Sorumlusunun Kimliği
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Unvan:</strong> Sponsor Hanım Turizm</li>
            <li><strong>Adres:</strong> Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara</li>
            <li><strong>Telefon:</strong> 0544 498 62 08</li>
            <li><strong>E-posta:</strong> sponsorhanim@gmail.com</li>
            <li><strong>Web:</strong> www.sponsorhanimtravel.com</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. İşlenen Kişisel Veri Kategorileri
          </h2>
          <p>Şirketimiz tarafından aşağıdaki kategorilerde kişisel verileriniz işlenebilmektedir:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, doğum tarihi, doğum yeri, cinsiyet, pasaport numarası, pasaport geçerlilik tarihi, uyruk.</li>
            <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres bilgisi.</li>
            <li><strong>Müşteri İşlem Bilgileri:</strong> Rezervasyon kaydı, tur tercihi, konaklama bilgisi, uçuş bilgisi, fatura ve sipariş bilgileri.</li>
            <li><strong>Finansal Bilgiler:</strong> Ödeme yöntemi, IBAN, dekont bilgisi, fatura adresi. (Kredi kartı bilgileri tarafımızca saklanmaz; ödeme altyapı sağlayıcısı üzerinden işlenir.)</li>
            <li><strong>Özel Nitelikli Kişisel Veriler:</strong> Hac ve umre organizasyonlarında zorunlu olması halinde sağlık bilgisi (örn. süreğen hastalık, yiyecek alerjisi, engel durumu) ile pasaport üzerindeki din bilgisi. Bu veriler yalnızca açık rızanızla işlenir.</li>
            <li><strong>Pazarlama Bilgileri:</strong> E-bülten tercihleriniz, kampanya etkileşimleriniz.</li>
            <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, log kayıtları, çerez bilgileri, cihaz bilgisi.</li>
            <li><strong>Görsel/İşitsel Kayıt:</strong> Ofis ziyaretlerinde güvenlik kamerası kayıtları, WhatsApp/telefon görüşme metinleri.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Kişisel Verilerin İşlenme Amaçları
          </h2>
          <p>Kişisel verileriniz, KVKK md. 4/2'de düzenlenen genel ilkeler çerçevesinde aşağıdaki amaçlarla işlenmektedir:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hac, umre, Mısır, Bali ve diğer kültür turu rezervasyonlarının oluşturulması ve paket tur sözleşmesinin ifası.</li>
            <li>Uçak bileti, otel, transfer, vize, sigorta ve benzeri tur bileşenlerinin temin edilmesi.</li>
            <li>Müşteri taleplerinin karşılanması, iletişim ve bilgilendirme süreçlerinin yürütülmesi.</li>
            <li>Fatura düzenleme ve mali yükümlülüklerin yerine getirilmesi.</li>
            <li>6502 sayılı Tüketicinin Korunması Hakkında Kanun, 1618 sayılı Seyahat Acentaları ve Seyahat Acentaları Birliği Kanunu, Paket Tur Sözleşmeleri Yönetmeliği ve ilgili diğer mevzuat kapsamındaki yasal yükümlülüklerin yerine getirilmesi.</li>
            <li>Tur sırasında zorunlu seyahat sağlık sigortasının yaptırılması.</li>
            <li>Vize işlemlerinin ilgili konsolosluk/aracı kurumlar nezdinde yürütülmesi.</li>
            <li>Müşteri memnuniyetinin ölçümü, hizmet kalitesinin artırılması.</li>
            <li>Açık rıza vermeniz halinde tanıtım, kampanya ve ticari elektronik ileti gönderimi.</li>
            <li>Bilişim güvenliğinin sağlanması ve olası hukuki uyuşmazlıklarda ispat vazifesinin yerine getirilmesi.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. İşlemenin Hukuki Sebepleri (KVKK md. 5 ve 6)
          </h2>
          <p>Kişisel verileriniz aşağıdaki hukuki sebeplerden birine veya birkaçına dayanılarak işlenir:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması (KVKK md. 5/2-c).</li>
            <li>Kanunlarda açıkça öngörülmesi (KVKK md. 5/2-a).</li>
            <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması (KVKK md. 5/2-ç).</li>
            <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması (KVKK md. 5/2-e).</li>
            <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatin zorunlu kılması (KVKK md. 5/2-f).</li>
            <li>Özel nitelikli kişisel veriler ve pazarlama amaçlı işleme için <strong>açık rızanızın bulunması</strong> (KVKK md. 5/1 ve 6/2).</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Kişisel Verilerin Toplanma Yöntemi
          </h2>
          <p>
            Kişisel verileriniz; web sitemiz üzerinden doldurduğunuz rezervasyon ve iletişim formları, telefon
            görüşmeleri, WhatsApp mesajları, e-posta yazışmaları, ofisimizde imzalanan sözleşmeler, pasaport
            ve kimlik fotokopisi gibi fiziki belgeler, iş ortaklarımızdan (havayolu, konsolosluk, otel, vize
            aracısı) gelen bilgi akışları ve web sitemizde kullanılan çerezler aracılığıyla otomatik ya da
            otomatik olmayan yollarla toplanmaktadır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Kişisel Verilerin Aktarımı
          </h2>
          <p>
            Kişisel verileriniz, KVKK md. 8 ve 9 kapsamında, işbu aydınlatma metninde belirtilen amaçlarla
            sınırlı olmak kaydıyla aşağıdaki alıcı gruplarına aktarılabilmektedir:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Resmî Kurumlar:</strong> Diyanet İşleri Başkanlığı, Kültür ve Turizm Bakanlığı, T.C. Dışişleri Bakanlığı konsoloslukları, vize aracı kurumlar, emniyet birimleri, vergi daireleri ve diğer yetkili kamu kurum ve kuruluşları.</li>
            <li><strong>İş Ortakları ve Tedarikçiler:</strong> Havayolu şirketleri, otel ve konaklama tesisleri, yer hizmetleri şirketleri, transfer firmaları, sigorta şirketleri, vize hizmet aracıları, rehberler.</li>
            <li><strong>Yetkili Acente ve Operatörler:</strong> Yurt içi ve yurt dışı tur operatörleri, TÜRSAB.</li>
            <li><strong>Hizmet Sağlayıcılar:</strong> Muhasebe/mali müşavir firmaları, hukuk büroları, IT ve sunucu (hosting) sağlayıcıları, çağrı merkezi hizmet sağlayıcıları, ödeme altyapısı şirketleri (iyzico/PayTR vb.) ve e-posta/SMS gönderim sağlayıcıları.</li>
          </ul>
          <p>
            <strong>Yurt dışı aktarım:</strong> Hac ve umre turları Suudi Arabistan, Mısır turları Mısır Arap
            Cumhuriyeti, Bali turları Endonezya makamlarını kapsadığından; pasaport, vize ve konaklama
            bilgileriniz ilgili ülke makamlarına ve yerel tedarikçilere aktarılabilir. Bu aktarımlar, KVKK md. 9
            uyarınca açık rızanıza veya sözleşmenin ifası için zorunluluk hâline dayanır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            7. Kişisel Verilerin Saklanma Süresi
          </h2>
          <p>
            Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen
            asgari süreler (örn. Vergi Usul Kanunu uyarınca 5 yıl, Türk Ticaret Kanunu uyarınca 10 yıl, Paket
            Tur Sözleşmesi kaynaklı zamanaşımı süreleri) kadar saklanır. Saklama süresi sona erdiğinde
            verileriniz, Kişisel Verileri Saklama ve İmha Politikamız çerçevesinde silinir, yok edilir veya
            anonim hâle getirilir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            8. İlgili Kişinin Hakları (KVKK md. 11)
          </h2>
          <p>KVKK md. 11 kapsamında veri sahibi olarak şu haklara sahipsiniz:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme.</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme.</li>
            <li>KVKK md. 7'de öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme.</li>
            <li>Düzeltme/silme/yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme.</li>
            <li>Otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme.</li>
            <li>Kanuna aykırı işleme nedeniyle zarara uğramışsanız zararın giderilmesini talep etme.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            9. Başvuru Yöntemi
          </h2>
          <p>
            Yukarıdaki haklarınızı kullanmak için, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
            Tebliğ'e uygun şekilde, kimliğinizi tespit edici belgelerle birlikte aşağıdaki kanallardan birini
            kullanarak başvurabilirsiniz:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Yazılı Başvuru:</strong> Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara adresine ıslak imzalı dilekçe gönderimi.</li>
            <li><strong>E-posta:</strong> sponsorhanim@gmail.com adresine güvenli elektronik imzalı veya sistemimizde kayıtlı e-postanızdan iletim.</li>
          </ul>
          <p>
            Başvurunuz, talebinizin niteliğine göre en geç otuz (30) gün içinde ücretsiz olarak
            sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma
            Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            10. Güncellemeler
          </h2>
          <p>
            Sponsor Hanım Turizm, işbu Aydınlatma Metni'ni mevzuattaki değişiklikler ve iş süreçlerindeki
            güncellemeler doğrultusunda revize etme hakkını saklı tutar. Güncel metne her zaman web
            sitemiz üzerinden erişebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
