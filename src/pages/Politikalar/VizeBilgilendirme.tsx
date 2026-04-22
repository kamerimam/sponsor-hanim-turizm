import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function VizeBilgilendirme() {
  useSeo({
    title: "Vize Bilgilendirme ve Sorumluluk Politikası",
    description:
      "Yurt dışı turlarda vize başvuru süreçleri, Katılımcı'nın yükümlülükleri, vize reddi halinde uygulanacak iade kuralları ve Şirket'in sorumluluk sınırları.",
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
            Vize Bilgilendirme ve Sorumluluk Politikası
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm text-foreground/60 mt-4">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-5 leading-relaxed">
          <p>
            İşbu politika; <strong>Sponsor Hanım Turizm</strong> ("Şirket") tarafından düzenlenen yurt
            dışı turlarda vize başvuru süreci, Katılımcı'nın yükümlülükleri ve Şirket'in sorumluluk
            sınırlarına ilişkin hususları düzenler.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            1. Vize İşlemlerinin Niteliği
          </h2>
          <p>
            Vize, yabancı ülkelerin <strong>münhasır egemenlik yetkisi</strong> kapsamında tamamen ilgili
            ülkenin ilgili konsolosluk / büyükelçilik / makamının takdirinde verilen/reddedilen bir izindir.
            Şirket, Katılımcı adına vize başvuru sürecinde belge derleme, randevu alma ve yönlendirme
            hizmeti sunar; <strong>vizenin verileceğini garanti etmez ve veremez</strong>. Vizenin
            verilmemesi, geciktirilmesi veya iptali durumunda Şirket'in herhangi bir kusur ya da
            sorumluluğu bulunmamaktadır.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            2. Tur Türüne Göre Vize Bilgileri
          </h2>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            A. Umre Turu (Suudi Arabistan)
          </h3>
          <p>
            Suudi Arabistan Krallığı tarafından sunulan e-vize (Nusuk / umre vizesi) Şirket aracılığıyla
            alınır. Başvuru için asgari şartlar: 6 ay geçerli pasaport, biyometrik fotoğraf, aşı belgesi
            (menenjit vb.) ve Suudi Arabistan makamlarının zaman zaman talep ettiği ek belgeler.
            Kadın Katılımcıların 18 yaş altı olmaları halinde mahremiyle seyahat zorunluluğu veya
            Suudi makamlarının belirlediği kurallar geçerli olur.
          </p>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            B. Hac Turu (Suudi Arabistan)
          </h3>
          <p>
            Hac vizesi, Türkiye Cumhuriyeti Diyanet İşleri Başkanlığı ve Suudi Arabistan Hac ve Umre
            Bakanlığı'nın her yıl belirlediği <strong>kota ve usul</strong> çerçevesinde verilir. Şirket,
            Diyanet İşleri Başkanlığı ile koordineli çalışır ancak hac kotası / hac izni tamamen ilgili
            resmi makamların takdirindedir. Kotanın verilmemesi, geri çekilmesi veya azaltılması
            durumunda Şirket sorumlu tutulamaz.
          </p>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            C. Mısır Turu
          </h3>
          <p>
            Mısır için Türk pasaportu hamilleri, tur kapsamında Şirket aracılığıyla veya sınır kapısında
            vize alabilir (e-visa / vize muafiyeti). Güncel vize gerekliliği zaman zaman değişebilir;
            ilgili bilgiler tur öncesi Katılımcı ile paylaşılır.
          </p>

          <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-2">
            D. Bali Turu (Endonezya)
          </h3>
          <p>
            Endonezya için varışta vize (VOA) uygulaması mevcut olup harç ücreti Katılımcı tarafından
            karşılanır. Alternatif olarak e-VOA sistemi kullanılabilir. Sınır kapısı uygulamaları
            Endonezya makamlarının takdirindedir.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            3. Katılımcı'nın Yükümlülükleri
          </h2>
          <p>Katılımcı vize başvurusu için aşağıdaki yükümlülüklere uymakla sorumludur:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Pasaportunun tur dönüş tarihinden itibaren <strong>asgari 6 ay geçerli</strong> olmasını sağlar. 6 aydan az geçerli pasaportlar konsolosluklarca kabul edilmez.</li>
            <li>Pasaportun yıpranmamış, ıslanmamış, eksik sayfasız ve boş vize sayfası bulunur durumda olmasını temin eder.</li>
            <li>Vize için Şirket'in talep ettiği tüm belgeleri (biyometrik fotoğraf, nüfus kayıt, ikametgah, aşı belgesi, banka evrakı vb.) tam ve doğru şekilde, Şirket'in bildirdiği son teslim tarihinden önce teslim eder.</li>
            <li>Beyan ettiği bilgilerin doğruluğundan şahsen sorumludur. Sahte belge ibrazı, yanlış beyan veya eksik bilgi nedeniyle doğacak reddedilme, gözaltı, sınır dışı edilme gibi tüm sonuçlar Katılımcı'ya aittir.</li>
            <li>Konsolosluğun istemesi halinde mülakata bizzat katılır. Mülakat ücret ve masraflarını karşılar.</li>
            <li>Daha önce reddedilmiş vize, iptal edilmiş vize, yurt dışına çıkış yasağı, T.C. vatandaşlığı kaybı, adli sicil kaydı, askerlik durumundan doğan yurt dışına çıkış sınırlaması veya Interpol kaydı gibi hususları başvuru öncesinde yazılı olarak Şirket'e bildirir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            4. Vize Reddi Durumu
          </h2>
          <p className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-md">
            Vize reddi, <strong>Katılımcı kaynaklı iptal</strong> hükmündedir ve{" "}
            <a href="/politikalar/iptal-iade-politikasi" className="text-primary hover:underline">
              İptal, İade ve Değişiklik Politikası
            </a>
            'nda yer alan iade oranları (rezervasyon sonrası 7 gün ve tura 10 günden fazla: %100
            iade; 7 gün geçmiş ve tura hâlâ 10 günden fazla: %50 iade; tura 10 gün ve daha az
            kalmışsa: iade yok) aynen uygulanır. Bunun dışında Şirket, aşağıdaki tutarları
            iade etmekle yükümlü değildir:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Konsolosluk vize harçları ve aracı kurum başvuru ücretleri.</li>
            <li>Havayolu tarafından iadesi yapılmayan bilet bedeli (iadesiz tarife seçilmişse).</li>
            <li>Otel kapora / iade edilemez konaklama ödemeleri.</li>
            <li>Vize onayı alınmadan veya Katılımcı'nın geç belge ibrazı nedeniyle yapılmış acil işlem ücretleri.</li>
            <li>İlgili mevzuat uyarınca tahakkuk etmiş tüm masraflar.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            5. Sınır Kapısında Geri Çevrilme ve Giriş Reddi
          </h2>
          <p>
            Vize alınmış olsa dahi, gidilen ülkenin sınır makamlarının (polis, göçmenlik, gümrük)
            gerekçeli veya gerekçesiz şekilde Katılımcı'nın ülkeye girişini reddetme yetkisi vardır. Bu
            durumda Katılımcı'nın Türkiye'ye geri gönderilme masrafları, bekleme süresi, deport işlemleri
            ve buna bağlı tüm maliyetler Katılımcı'ya aittir. Şirket, bu tür durumlarda hiçbir iade
            taahhüdünde bulunmaz ve bedel iadesi yapmaz.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            6. Vize Süreci Takibi
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Vize başvuru süreleri ülkelere göre değişir. Genel olarak hac/umre için en az 20 gün, diğer ülkeler için en az 15 gün öncesinden süreç başlatılır.</li>
            <li>Konsolosluk / e-vize sistemlerinin yoğunluğundan kaynaklanan gecikmelerden Şirket sorumlu tutulamaz.</li>
            <li>Vize red / onay bildirimi Katılımcı'ya yazılı (e-posta / WhatsApp) olarak iletilir.</li>
            <li>Son dakika yapılan başvurularda vize çıkmaması halinde Madde 4 hükümleri geçerlidir.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            7. Vize Bilgisindeki Hatalar
          </h2>
          <p>
            Vizede isim, soyad, pasaport numarası veya tarih hatası bulunması durumunda Katılımcı,
            vizeyi eline aldığı anda bildirmekle yükümlüdür. Havalimanında veya tur başlangıcında
            fark edilen hatalar için Şirket herhangi bir sorumluluk kabul etmez. Konsolosluktan
            kaynaklanan düzenleme hatalarında Şirket yalnızca yönlendirme ve aracılık sağlar.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            8. Kişisel Verilerin İşlenmesi
          </h2>
          <p>
            Vize başvurusu için Katılımcı'dan talep edilen pasaport, kimlik, biyometrik fotoğraf,
            banka bilgileri ve sağlık belgesi gibi kişisel veriler; KVKK Aydınlatma Metni çerçevesinde,
            yalnızca vize başvurusunun tamamlanması amacıyla ilgili konsolosluk, e-vize sistemi ve
            vize aracı firmalarla paylaşılır. Detaylı bilgi için{" "}
            <a href="/politikalar/kvkk-aydinlatma-metni" className="text-primary hover:underline">
              KVKK Aydınlatma Metni
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
            9. Sorumluluk Sınırları
          </h2>
          <p>
            Şirket, vize işlemlerinde aracılık hizmeti sunar ve Katılımcı'nın sunduğu bilgi ve belgelerin
            doğruluğu esasına dayanarak başvuruyu iletir. Vize sürecinin sonucuna ilişkin tüm risk ve
            sonuçlar Katılımcı'ya aittir. Şirket'in vize işlemlerinden doğan sorumluluğu; yalnızca belge
            derleme ve başvuru yönlendirmesinde gösterdiği özen yükümlülüğü ile sınırlıdır.
          </p>
        </div>
      </div>
    </div>
  );
}
