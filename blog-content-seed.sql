-- ============================================
-- SPONSOR HANIM TURİZM — BLOG İÇERİKLERİ
-- ============================================
-- 17 SEO-optimize blog yazısı.
-- Supabase SQL Editor'dan çalıştırın.
-- slug UNIQUE, ON CONFLICT ile mevcut yazılar güncellenir, yeniler eklenir.
-- ============================================

INSERT INTO blogs (slug, title, excerpt, content, category, image_url, date) VALUES

-- ============ UMRE REHBERLERİ ============

(
  'ankara-umre-turu-rehberi-2026',
  'Ankara''dan Umre Turu 2026: Kapsamlı Rehber',
  'Ankara''dan umreye gitmek isteyenler için 2026 yılı güncel bilgileri: fiyatlar, tarihler, vize süreci ve doğru acente seçimi.',
  '<p>Ankara''dan umre turuna çıkmayı planlıyorsanız, doğru acenteyi seçmek, uygun tarihleri belirlemek ve manevi hazırlıklarınızı tamamlamak yolculuğunuzun kalitesini belirleyen en önemli faktörlerdir. Bu rehberde 2026 yılı için Ankara''dan umre turuna dair bilmeniz gereken her şeyi bir araya getirdik.</p>
<h2>Ankara''dan Umre Turu Nasıl Organize Edilir?</h2>
<p>Ankara merkezli seyahat acentaları, umre turlarını genellikle İstanbul Havalimanı üzerinden organize eder. Ankara''dan havalimanına transfer ya dahildir ya da ücretsiz sunulur. Direkt Ankara Esenboğa''dan Cidde veya Medine''ye tarifeli seferler Ramazan ve sezon dönemlerinde artar.</p>
<h2>2026 Umre Paket Seçenekleri</h2>
<p>Sponsor Hanım Turizm olarak iki farklı premium umre paketi sunuyoruz:</p>
<ul>
  <li><strong>Premium Umre 7 Gün (1.550 USD):</strong> Kısa sürede kapsamlı bir umre deneyimi. 2 gece Medine + 4 gece Mekke, Kabe manzaralı 5★ oteller, uzman din görevlisi rehberliği.</li>
  <li><strong>VIP Umre 14 Gün (4.500 USD):</strong> Tam kapsamlı manevi yolculuk. 5 gece Medine + 8 gece Mekke, VIP transfer, özel araç, kapsamlı ziyaret programı.</li>
</ul>
<h2>Umre İçin En Uygun Dönem</h2>
<p>Ekim–Nisan ayları Mekke ve Medine''de iklim olarak en ılımlı dönemdir. Ramazan ayında umrenin fazileti artar, ancak yoğunluk ve fiyatlar da yükselir. 2026 Ramazan''ı Şubat–Mart aylarına denk gelecek; bu dönem için kayıtların en az 4 ay öncesinden yapılması önerilir.</p>
<h2>Ankara''dan Umre Fiyatlarını Etkileyen Faktörler</h2>
<p>Umre fiyatları farklı değişkenlere göre belirlenir: Otel konumu ve yıldız sayısı (Kabe''ye yakınlık fiyatı belirgin şekilde artırır), paket süresi, uçuş sınıfı, transfer tipi ve dönem. Ramazan, Kurban Bayramı ve okul tatillerinde fiyatlar %20–40 daha yüksek olabilir.</p>
<h2>Ankara''da Doğru Umre Acentesini Seçmek</h2>
<p>TÜRSAB belge numarası olmayan, web sitesi ve yasal metinleri (KVKK, paket tur sözleşmesi) eksik firmalardan uzak durun. Sponsor Hanım Turizm 15 yılı aşkın deneyimiyle Ankara''dan umre ve hac organizasyonunda güvenilir bir isimdir.</p>
<h2>Rezervasyon Süreci</h2>
<p>Kayıt için ön ödeme ile yer ayrılır, kalan tutar tur tarihinden 2 hafta önce tamamlanır. 30 gün öncesine kadar tam iade imkânı sunulur. Detaylı bilgi ve rezervasyon için <a href="/turlar/umre-premium">Premium Umre sayfamızı</a> inceleyebilir veya <a href="https://wa.me/905444986208">WhatsApp hattımızdan</a> ulaşabilirsiniz.</p>',
  'Umre Rehberi',
  '/images/blogs/premium.png',
  '24 Nisan 2026'
),

(
  'umre-ibadeti-oncesi-hazirliklar',
  'Umre İbadeti İçin Bilmeniz Gereken Önemli Hazırlıklar',
  'Kutsal topraklara yapacağınız yolculuk öncesi ruhsal ve fiziksel olarak nasıl hazırlanmalısınız? Adım adım kapsamlı rehber.',
  '<p>Umre yolculuğu, her Müslümanın hayatında derin izler bırakan kutlu bir seferdir. Bu manevi yolculuğun feyzini tam yaşayabilmek için yapmanız gereken hazırlıklar hem ruhsal hem pratik alanları kapsar.</p>
<h2>Manevi Hazırlık</h2>
<p>Umreye niyet etmekle başlayan bu süreçte tövbe etmek, çevrenizdeki insanlarla helalleşmek, borçlarınızı kapatmak ve bol bol dua okumak önerilir. Kutsal topraklara temiz bir kalple gitmek, ibadetinizin kabulünü kolaylaştırır.</p>
<h3>Okumanız Önerilen Eserler</h3>
<ul>
  <li>Umre ibadetinin şartları ve rükünleri</li>
  <li>İhram kuralları ve yasakları</li>
  <li>Tavaf ve sa''y uygulaması</li>
  <li>Mekke ve Medine''nin tarihi ziyaret yerleri</li>
</ul>
<h2>Sağlık Hazırlıkları</h2>
<p>Suudi Arabistan makamları tarafından istenen <strong>meningokok aşısı</strong> zorunludur ve acentenız tarafından takip edilir. Bunun dışında genel sağlık kontrolü, tansiyon/şeker hastaları için reçeteli ilaçların yeterli dozda hazırlanması önemlidir. Kronik rahatsızlığınız varsa, hekiminize danışın.</p>
<h2>Kıyafet ve Bagaj Listesi</h2>
<p>Mekke ve Medine''nin sıcak iklimine uygun, rahat ve pamuklu kıyafetler tercih edin. İhramlıklarınızı kalite gözeterek seçin.</p>
<h3>Kadınlar İçin</h3>
<ul>
  <li>Geniş, rahat ve vücut hatlarını belli etmeyen kıyafetler</li>
  <li>Baş örtüsü (birkaç yedek)</li>
  <li>Terlemeyi emen iç giyim</li>
  <li>Rahat spor ayakkabı ve terlik</li>
</ul>
<h3>Erkekler İçin</h3>
<ul>
  <li>2 adet ihram takımı (yedek ihram önemli)</li>
  <li>İhram kemeri</li>
  <li>Havlu</li>
  <li>Rahat sandalet veya spor ayakkabı</li>
</ul>
<h2>Yanınıza Almanız Gereken Diğer Eşyalar</h2>
<ul>
  <li>Pasaport (6 ay geçerli)</li>
  <li>Vize belgesi (acentanızdan temin edilir)</li>
  <li>Sigorta poliçesi</li>
  <li>Kişisel bakım ürünleri (seyahat boyu)</li>
  <li>Kuran-ı Kerim (küçük boy) ve dua kitabı</li>
  <li>Telefon şarj aleti ve adaptör</li>
  <li>Pratik çanta (Kabe ziyaretlerinde kullanmak için)</li>
</ul>
<h2>Finansal Hazırlık</h2>
<p>Zemzem, hurma, tesbih gibi hediyelik alışverişler için nakit bulundurmak faydalıdır. Riyal olarak bozdurma işlemleri Türkiye''de veya otel lobisinde yapılabilir. Kredi kartı Harem çevresindeki bazı mekanlarda kabul edilmez, nakit önceliklidir.</p>
<h2>Sponsor Hanım Turizm Desteği</h2>
<p>Ankara''dan umre turumuzda tüm vize işlemleri, aşı takibi, transferler ve din görevlisi rehberliği tarafımızca sağlanır. Detaylı bilgi için <a href="/turlar/umre-premium">Premium Umre paketimizi</a> inceleyin.</p>',
  'Umre Rehberi',
  '/images/blogs/premium.png',
  '20 Nisan 2026'
),

(
  'umre-dualari-ve-adabi',
  'Umre Duaları, Tavaf ve Sa''y Adabı',
  'Umre sırasında okunan başlıca dualar, tavafın ve sa''yin doğru uygulanması. İlk defa umreye gidenler için kılavuz.',
  '<p>Umre, belirli rükün ve vaciplerle eda edilen kutsal bir ibadettir. Doğru uygulama, ibadetin kabulü açısından büyük önem taşır. Bu rehberde umrenin temel adımlarını ve her aşamada okunması tavsiye edilen duaları özetliyoruz.</p>
<h2>Umrenin Rükünleri</h2>
<ol>
  <li><strong>İhrama girmek</strong> — Mikat sınırında niyet ederek ihrama bürünmek</li>
  <li><strong>Tavaf yapmak</strong> — Kabe etrafında 7 şavt</li>
  <li><strong>Sa''y etmek</strong> — Safa ile Merve arasında 7 gidiş-geliş</li>
  <li><strong>Tıraş olmak / saç kısaltmak</strong> — Umrenin sonu</li>
</ol>
<h2>İhrama Girerken</h2>
<p>İhram niyetinden sonra şu telbiye getirilir:</p>
<blockquote><em>"Lebbeyk Allâhümme lebbeyk, lebbeyke lâ şerîke leke lebbeyk. İnne''l-hamde ve''n-ni''mete leke ve''l-mülk, lâ şerîke lek."</em></blockquote>
<p>Anlamı: "Emret Allah''ım emret, emret, senin hiçbir ortağın yoktur, emret. Şüphesiz hamd sana, nimet sana ve mülk de senindir. Senin hiçbir ortağın yoktur."</p>
<h2>Tavaf Adabı</h2>
<p>Tavaf, Hacer-i Esved hizasından başlayarak Kabe''yi sol tarafa alacak şekilde 7 kez dönmektir. Her şavt başında Hacer-i Esved''e selam verilir. Tavaf sırasında özel bir dua sayısı yoktur — kişi kendi niyetine göre dua edebilir, salavat getirebilir veya Kur''an okuyabilir.</p>
<h3>Tavaf Sırasındaki Genel Dua</h3>
<blockquote><em>"Rabbenâ âtinâ fi''d-dünyâ haseneten ve fi''l-âhirati haseneten ve kınâ azâbe''n-nâr."</em></blockquote>
<p>Her şavtın sonunda, özellikle Rükn-i Yemânî ile Hacer-i Esved arasında bu dua sıkça okunur.</p>
<h2>Sa''y Adabı</h2>
<p>Tavaftan sonra Safa tepesinden başlayarak Merve''ye doğru 7 kez gidip gelinir. Safa''ya çıkıldığında Kabe''ye dönülerek dua edilir.</p>
<h3>Safa ve Merve''de Okunan Dua</h3>
<blockquote><em>"İnne''s-safâ ve''l-mervete min şe''âirillâh. Allâhu Ekber, Allâhu Ekber, Allâhu Ekber, ve lillâhi''l-hamd."</em></blockquote>
<h2>Tıraş veya Saç Kısaltma</h2>
<p>Sa''yin ardından erkekler saçlarını tıraş ettirir veya kısaltır; kadınlar ise saç uçlarından bir parmak boyu kısaltma yapar. Bu işlemin tamamlanmasıyla ihramdan çıkılır ve umre tamamlanır.</p>
<h2>Umre Sonrası Yapılması Önerilenler</h2>
<ul>
  <li>Mescid-i Haram''da vakit namazlarını kılmak</li>
  <li>Zemzem içmek ve dua etmek</li>
  <li>Mekke''de tarihi ve dini mekânları ziyaret etmek (Hira Mağarası, Sevr Mağarası)</li>
  <li>Medine''ye geçilip Mescid-i Nebevi ziyareti</li>
  <li>Ravza-i Mutahhara ve Cennetü''l-Baki ziyareti</li>
</ul>
<p>Umrenizde rehberlik ve destek için Sponsor Hanım Turizm''in uzman din görevlileri ve tecrübeli ekibi yanınızda olacaktır.</p>',
  'Umre Rehberi',
  '/images/blogs/premium.png',
  '15 Nisan 2026'
),

(
  'ilk-umre-deneyimi-ipuclari',
  'İlk Umreniz İçin 12 Pratik İpucu',
  'İlk kez umreye gidiyorsanız işinizi kolaylaştıracak, yolculuğunuzu daha verimli kılacak 12 pratik ipucu.',
  '<p>İlk umre deneyimi hem manevi açıdan yoğun hem de pratik olarak bazı yönleriyle şaşırtıcı olabilir. Bu rehberde tecrübeli rehberlerimizden derlediğimiz, ilk umre için en değerli 12 ipucunu bulacaksınız.</p>
<h2>1. Kabe''yi İlk Gördüğünüzde Dua Edin</h2>
<p>Kabe''yi ilk gördüğünüz an, duanın en kabul olunan anlarından biridir. O anı geçirmeyin — içinizden gelenleri samimi bir şekilde dileyin.</p>
<h2>2. Tavafı Yoğun Saatlerde Yapmayın</h2>
<p>Öğle-ikindi arası ve cuma namazlarından sonra Mescid-i Haram son derece kalabalıktır. Eğer mümkünse gece yarısı sonrası veya sabah namazından sonraki saatler daha sakin olur.</p>
<h2>3. Hijyene Çok Dikkat Edin</h2>
<p>Yoğun kalabalıkta solunum yoluyla bulaşan hastalıklar hızla yayılabilir. Maske, dezenfektan ve el yıkama alışkanlığı yolculuğunuz boyunca işinize yarar.</p>
<h2>4. Zemzem Suyunu Kullanın</h2>
<p>Kabe çevresindeki zemzem sebillerinden ücretsiz içebilirsiniz. Kendi şişenizi doldurun; hem su ihtiyacınızı karşılar hem ibadet niyetiyle zemzem içme sevabına nail olursunuz.</p>
<h2>5. İhram Yasaklarına Dikkat Edin</h2>
<p>İhramdayken traş olmak, tırnak kesmek, koku sürmek, evlilik ve cinsel ilişki gibi konulara dikkat edin. Yanlışlıkla yapılan ihlallerde acentenizin rehberinden yardım isteyin.</p>
<h2>6. Ayakkabı Seçiminize Özen Gösterin</h2>
<p>Sa''y yapıyor olacaksınız; rahat, yastıklı ve terletmeyen bir spor ayakkabı tercih edin. Tavafta ayakkabınızı çıkarırsınız, pratik bir torba yanınızda olsun.</p>
<h2>7. Telefon ve Şarj Düzeninizi Kurun</h2>
<p>Kabe çevresi çok büyük, grubunuzdan ayrılmak kolaydır. Türkiye numaranızın roaming açık olması veya bölgesel bir SIM almak önerilir. Otel bilgilerini yazılı olarak yanınızda bulundurun.</p>
<h2>8. Grup Rehberine Uyun</h2>
<p>Rehberinizin verdiği saatlere ve toplanma noktalarına dikkat edin. Kalabalıkta kaybolmak kolaydır; her zaman otel kartını yanınızda taşıyın.</p>
<h2>9. Nakit Bulundurun</h2>
<p>Bazı küçük dükkanlar ve çarşılar nakit çalışır. Riyal olarak 500-1000 riyal kadar küçük paralar bulundurmak alışveriş ve bahşiş için yeterlidir.</p>
<h2>10. Hediyelik Listesi Hazırlayın</h2>
<p>Geri dönüşte beklenen hediyeler için önceden liste hazırlayın: zemzem, hurma, tesbih, çeşitli parfümler, seccade. Fiyatları farklı dükkanlarda karşılaştırın — çarşı kültürü burada da var.</p>
<h2>11. Medine''deki Vakti Değerlendirin</h2>
<p>Medine ziyareti ruhani açıdan çok özel bir deneyimdir. Mescid-i Nebevi''deki vakit namazları, Ravza-i Mutahhara ziyareti ve Uhud Dağı kaçırılmamalı.</p>
<h2>12. Geri Dönüşte Niyetinizi Koruyun</h2>
<p>Umre yolculuğundaki manevi hali korumak önemli. Geri dönünce namazlarınıza, Kur''an okumaya ve salih amellere devam etmek, umrenin berekettini yaşamınıza taşımanın yoludur.</p>
<p>Daha fazla soru için <a href="/turlar/umre-premium">Premium Umre paketlerimizi</a> inceleyebilir veya WhatsApp üzerinden bizimle iletişime geçebilirsiniz.</p>',
  'Umre Rehberi',
  '/images/blogs/premium.png',
  '10 Nisan 2026'
),

(
  'umre-vizesi-nasil-alinir',
  'Umre Vizesi Nasıl Alınır? 2026 Güncel Süreç',
  'Umre vizesi başvuru şartları, gerekli evraklar, süreç ve 2026 yılı için güncel bilgiler. Acente aracılığıyla vize süreci.',
  '<p>Umre vizesi, Suudi Arabistan''a umre ibadeti amacıyla girmek için gereken özel bir vize türüdür. 2026 yılı itibarıyla başvuru süreci elektronik ortama taşınmış olsa da bazı özel şartlar hâlâ geçerlidir. Bu rehberde güncel süreci özetliyoruz.</p>
<h2>Umre Vizesi Nedir?</h2>
<p>Umre vizesi, Suudi Arabistan''ın Dini İşler Bakanlığı tarafından yetkilendirilmiş acentalar aracılığıyla verilen ve sahibine yalnızca umre ibadeti için ülkede kalma hakkı sağlayan bir vize tipidir. Turistik veya ticari amaçlarla kullanılamaz.</p>
<h2>Başvuru İçin Gerekli Evraklar</h2>
<ul>
  <li>En az 6 ay geçerli pasaport (dönüş tarihinden itibaren)</li>
  <li>2 adet biyometrik fotoğraf (beyaz fon, son 6 ay içinde)</li>
  <li>Meningokok aşısı belgesi (Suudi Sağlık Bakanlığı onaylı)</li>
  <li>Nüfus kağıdı veya kimlik fotokopisi</li>
  <li>Evlilik cüzdanı (evli bayanlar için, mahrem beyanı kapsamında)</li>
  <li>Uçak bileti ve otel rezervasyonu (acenteniz temin eder)</li>
  <li>Vize başvuru formu (acenteniz hazırlar)</li>
</ul>
<h2>Kadınlar İçin Mahrem Şartı</h2>
<p>45 yaş altı bayanların umreye giderken mahremleri (eş, baba, kardeş, oğul) ile gelme şartı 2023''ten itibaren bazı durumlarda esnemiş olsa da, kapsamlı bir uygulama için acenteniz size yönlendirme yapacaktır. Grup turlarında bu şart genelde otomatik karşılanmış olur.</p>
<h2>Aşı Şartları</h2>
<p>Başvurudan en az 10 gün önce <strong>meningokok (ACWY) aşısı</strong> yaptırılmalıdır. Aşı belgesi (Sağlık Bakanlığı e-Nabız üzerinden) pasaport ile birlikte acentenize teslim edilir. Bazı dönemlerde ek aşılar istenebilir; acenteniz sizi bilgilendirir.</p>
<h2>Vize Süreci (Acente ile)</h2>
<ol>
  <li><strong>Paket seçimi:</strong> Umre paketi seçilir, ön ödeme yapılır.</li>
  <li><strong>Belge teslimi:</strong> Pasaport, fotoğraflar, aşı belgesi ve diğer evraklar acenteye teslim edilir.</li>
  <li><strong>Başvuru:</strong> Acente, Nusuk/Mofa sistemi üzerinden elektronik başvuruyu yapar.</li>
  <li><strong>Onay:</strong> Genellikle 7-15 iş günü içinde vize çıkar.</li>
  <li><strong>Pasaport iadesi:</strong> Vize damgalı pasaport sahibine teslim edilir.</li>
</ol>
<h2>Vize Ücretleri</h2>
<p>Umre vize ücreti dönemden döneme değişmektedir. 2026 yılı itibarıyla resmi vize ücreti yaklaşık 200-300 USD civarındadır ve çoğu umre paketine dahildir. Ayrıca bazı dönemlerde Suudi Arabistan devleti "umre ücreti" adı altında ek harç alabilir.</p>
<h2>Dikkat Edilmesi Gereken Noktalar</h2>
<ul>
  <li>Pasaport geçerlilik süresinin <strong>en az 6 ay</strong> olması zorunludur.</li>
  <li>Pasaport üzerinde İsrail damgası varsa özel değerlendirmeye alınabilir.</li>
  <li>Aşı belgesi olmadan başvuru kabul edilmez.</li>
  <li>Sezon yoğunluğunda (özellikle Ramazan öncesi) başvuruları en az 2 ay önceden başlatın.</li>
</ul>
<h2>Sponsor Hanım Turizm''de Vize Hizmetleri</h2>
<p>Tüm umre paketlerimizde vize işlemleri ücretsiz olarak tarafımızca yürütülür. Evraklarınızı hazırlayıp teslim etmeniz yeterlidir — gerisini biz hallederiz. Daha fazla bilgi için <a href="/turlar/umre-premium">Premium Umre Turumuzu</a> inceleyin.</p>',
  'Pratik Bilgi',
  '/images/blogs/premium.png',
  '5 Nisan 2026'
),

-- ============ HAC REHBERLERİ ============

(
  'hac-2026-kontenjanlari-ve-basvuru',
  'Hac 2026 Kontenjanları ve Başvuru Süreci',
  'Hac 2026 kontenjan dağılımı, Diyanet başvuru süreci ve özel acente programları hakkında güncel bilgiler.',
  '<p>2026 yılı hac dönemi Müslümanlar için ömürlük bir özlem ve ibadetin kapısıdır. Suudi Arabistan''ın her yıl her ülkeye tahsis ettiği kontenjan, milyonlarca insanın bir araya geldiği bu ibadetin sistematik yürütülmesini sağlar. Türkiye için de bu süreç Diyanet İşleri Başkanlığı ve özel acentalar üzerinden yönetilir.</p>
<h2>Türkiye''nin Hac Kontenjanı</h2>
<p>Türkiye''ye ayrılan yıllık hac kontenjanı yaklaşık <strong>75.000–80.000 kişi</strong> civarındadır. Bu kontenjanın büyük kısmı Diyanet İşleri Başkanlığı''nca yönetilir, bir kısmı ise yetkilendirilmiş özel acentalara dağıtılır.</p>
<h2>Diyanet Üzerinden Hac Başvurusu</h2>
<p>Diyanet''in hac başvuru sistemi kura usulüyle işler:</p>
<ol>
  <li><strong>Ön kayıt:</strong> E-Devlet veya müftülüklerden kayıt yaptırılır.</li>
  <li><strong>Bekleme sırası:</strong> Kayıt yılına göre sıralanır; bazı bölgelerde 10+ yıl bekleme olabilir.</li>
  <li><strong>Kura çekilişi:</strong> Her yıl çekilir, ismi çıkanlar o yıl hacca gider.</li>
  <li><strong>Ödeme ve eğitim:</strong> Kurada çıkanlar tutarı ödeyip eğitim programına katılır.</li>
</ol>
<h2>Özel Acente Hac Paketleri</h2>
<p>Diyanet dışında TÜRSAB belgeli özel acentalar da Diyanet koordinasyonunda hac organizasyonu yapar. Bu kanal, bekleme süresi olmadan hacca gitmek isteyenler için avantaj sağlar. Fiyatlar Diyanet standart pakete göre genellikle daha yüksektir — ancak otel konumu, hizmet kalitesi ve grup büyüklüğü açısından farklı avantajlar sunar.</p>
<h2>Sponsor Hanım Turizm Hac 2026 Paketi</h2>
<p>21 günlük tam kapsamlı hac paketimizde:</p>
<ul>
  <li>Uzman din görevlisi rehberliği (7/24 destek)</li>
  <li>Arafat, Müzdelife ve Mina''da VIP çadır organizasyonu</li>
  <li>5 yıldızlı oteller (Mekke''de Kabe''ye yakın)</li>
  <li>Tam pansiyon yemek hizmeti</li>
  <li>Tüm transfer ve ulaşım</li>
  <li>Kişi başı 7.500 USD</li>
</ul>
<h2>Hac Başvurusu İçin Gerekli Belgeler</h2>
<ul>
  <li>Pasaport (en az 6 ay geçerli)</li>
  <li>Nüfus kayıt örneği</li>
  <li>Biyometrik fotoğraflar</li>
  <li>Sağlık raporu (kronik hastalıklar için)</li>
  <li>Meningokok aşısı belgesi</li>
  <li>İkametgah</li>
  <li>Evlilik cüzdanı (kadınlar için)</li>
</ul>
<h2>Hacca Başvurmadan Önce Düşünülmesi Gerekenler</h2>
<ul>
  <li><strong>Fizik durumu:</strong> Hac, fiziksel olarak yorucu bir ibadettir. Sağlık durumunuzun uygun olduğundan emin olun.</li>
  <li><strong>Mali durum:</strong> Maddi olarak gücünüzün yettiği, geride kalanlara yük bırakmayacağınız bir durum olmalı.</li>
  <li><strong>Borçlar:</strong> Hacca gitmeden önce borçlarınızı kapatmanız veya çözüme bağlamanız dinen önerilir.</li>
  <li><strong>Manevi hazırlık:</strong> Hac''ın ritüellerini (ihram, tavaf, sa''y, Arafat vakfesi, şeytan taşlama) önceden öğrenmek yolculuğunuzu anlamlı kılar.</li>
</ul>
<h2>2026 Hac Takvimi (Tahmini)</h2>
<p>2026 hac dönemi Mayıs–Haziran aylarına denk gelecek. Kesin tarihler Suudi Arabistan tarafından resmi olarak açıklanır. Gruplarımız ortalama 21 gün sürelidir ve gidiş-dönüş programı resmi hac tarihlerinin öncesi ve sonrasını da kapsar.</p>
<h2>Bizimle İletişim</h2>
<p>Hac 2026 kaydı ve detaylı bilgi için <a href="/turlar/hac-turu-2026">Hac 2026 paketimizi</a> inceleyin veya <a href="https://wa.me/905444986208">WhatsApp</a> üzerinden ulaşın. Kontenjanlar sınırlıdır, erken kayıt önemlidir.</p>',
  'Hac Rehberi',
  '/images/blogs/premium.png',
  '1 Nisan 2026'
),

(
  'hac-oncesi-yapilacaklar-listesi',
  'Hac Öncesi Mutlaka Yapmanız Gerekenler',
  'Hacca gitmeden önce hazırlanmanız gereken her şey: manevi hazırlık, pratik evraklar, sağlık ve eğitim. Tam liste.',
  '<p>Hac ibadeti bir hayat özlemi, bir ömür hazırlığıdır. Hacca gitmeden önce yapılacaklar listesi sadece pratik hazırlıklarla sınırlı değildir — manevi, ailevi, sosyal ve finansal boyutları da vardır. Bu rehberde kapsamlı bir kontrol listesi sunuyoruz.</p>
<h2>1. Manevi Hazırlık</h2>
<p>Hac, samimi bir niyet ve temiz bir kalple yapılması gereken bir ibadettir. Şunları ihmal etmeyin:</p>
<ul>
  <li><strong>Tövbe istiğfar:</strong> Geçmiş hatalardan dönüş, samimi bir tövbe</li>
  <li><strong>Helalleşmek:</strong> Kırgın olduğunuz, borçlu olduğunuz kişilerle helalleşin</li>
  <li><strong>Kaza namazları:</strong> Varsa kaza namazlarınızı ihmal etmeyin</li>
  <li><strong>Zekât ve fıtır sadakası:</strong> Ödenmemiş zekâtınızı tamamlayın</li>
  <li><strong>Vasiyet:</strong> Uzun bir yolculuğa çıkmadan önce vasiyetinizi yazmanız önerilir</li>
</ul>
<h2>2. Ailevi Hazırlıklar</h2>
<p>Hacca giderken ailenizle ilgili şu konulara dikkat edin:</p>
<ul>
  <li>Arkada kalacak bireylerin bakım ve ihtiyaçlarını planlayın</li>
  <li>Ev faturaları, banka işlemleri için otomatik ödeme düzenleyin</li>
  <li>İşyerinizden izin sürecini resmileştirin</li>
  <li>Acil durumlarda başvurulacak iki kişiyi ailenize bildirin</li>
</ul>
<h2>3. Finansal Hazırlık</h2>
<ul>
  <li>Hac paketinin tam ödemesini yapın</li>
  <li>Borç kalmamasına özen gösterin</li>
  <li>Yolculukta kullanılacak nakit (Riyal) ve kredi kartı düzeni</li>
  <li>Beklenmedik harcamalar için yedek fon ayırın</li>
</ul>
<h2>4. Sağlık Kontrolleri</h2>
<ul>
  <li>Genel sağlık muayenesi (kalp, tansiyon, şeker)</li>
  <li>Diş tedavileri (Hac süresince rahatsız olabilecek sorunlar)</li>
  <li>Göz muayenesi (gerekiyorsa yedek gözlük)</li>
  <li>Kronik hastalıklar için yeterli ilaç stoğu</li>
  <li>Meningokok (ACWY) aşısı</li>
  <li>Grip aşısı (sezon yakınsa)</li>
</ul>
<h2>5. Evrak Hazırlığı</h2>
<ul>
  <li>Pasaport (6 ay geçerli, yedek fotokopi yanınızda)</li>
  <li>Hac vize belgesi</li>
  <li>Kimlik kartı fotokopisi</li>
  <li>Seyahat sigortası poliçesi</li>
  <li>Aşı belgesi</li>
  <li>Tur programı ve otel bilgileri (basılı halde)</li>
  <li>Acil durumda aranacak numaralar listesi</li>
</ul>
<h2>6. Bagaj Listesi</h2>
<h3>Kıyafetler</h3>
<ul>
  <li>2 adet ihram takımı (erkekler için)</li>
  <li>5-7 adet iç çamaşır</li>
  <li>Rahat ve hafif üst giyim</li>
  <li>Baş örtüsü/namaz tesettürü (bayanlar için)</li>
  <li>Rahat spor ayakkabı (yıpranmış, bol olsun)</li>
  <li>Hafif terlik veya sandalet</li>
  <li>İnce hırka veya şal (klimalı yerler için)</li>
</ul>
<h3>Kişisel Bakım</h3>
<ul>
  <li>Diş fırçası, macunu</li>
  <li>Sabun, şampuan (kokusuz, ihram sonrası için kokulu)</li>
  <li>Deodorant, losyon</li>
  <li>Güneş kremi (yüksek faktör)</li>
  <li>Havlu (kompakt, hızlı kuruyan)</li>
</ul>
<h3>Diğer</h3>
<ul>
  <li>Kur''an-ı Kerim (cep boy)</li>
  <li>Dua kitabı</li>
  <li>Telefon ve şarj aleti</li>
  <li>Evrensel priz adaptörü</li>
  <li>Küçük sırt çantası (günlük kullanım)</li>
  <li>Pratik su şişesi</li>
</ul>
<h2>7. Eğitim Programı</h2>
<p>Diyanet ve özel acentalar hac öncesi eğitim seminerleri düzenler. Sponsor Hanım Turizm hac grubumuz için de ayrıntılı bir eğitim programı sunuyoruz: hac menasıkı, Arafat vakfesi, şeytan taşlama, kurban, tavaf ve sa''y teknikleri detaylı olarak öğretilir.</p>
<h2>Bizimle Hacca Hazırlanın</h2>
<p>Sponsor Hanım Turizm''in 21 günlük Hac 2026 paketinde eğitim ve hazırlık dahildir. Detaylı bilgi için <a href="/turlar/hac-turu-2026">hac paketimizi</a> inceleyin.</p>',
  'Hac Rehberi',
  '/images/blogs/premium.png',
  '28 Mart 2026'
),

(
  'hac-ve-umre-farklari',
  'Hac ve Umre Arasındaki Farklar Nelerdir?',
  'Hac ve umre arasındaki temel farklar: hüküm, zaman, süre, ritüeller ve hazırlık. Karar verme rehberi.',
  '<p>İslam''ın beş şartından biri olan hac ile yıl boyunca yapılabilen umre, görünürde benzer ama hüküm, zaman ve kapsam açısından farklı iki ibadettir. Hangisine karar vermeniz gerektiğini anlamak için bu rehberde iki ibadeti karşılaştırdık.</p>
<h2>1. Hüküm Açısından Fark</h2>
<p><strong>Hac:</strong> Gücü yeten her Müslümana ömründe bir kez farzdır. Maddi ve bedensel imkânı olan her mükellefin yerine getirmesi zorunludur.</p>
<p><strong>Umre:</strong> Dört mezhepte ağırlıklı görüş "müekked sünnet" olduğu yönündedir. Şâfî mezhebinde farzdır. Her Müslüman için yapılması faziletlidir ama zorunlu değildir.</p>
<h2>2. Zaman Açısından Fark</h2>
<p><strong>Hac:</strong> Yalnızca Zilhicce ayının belirli günlerinde (8-13 Zilhicce) yapılır. Yılda bir kez eda edilir.</p>
<p><strong>Umre:</strong> Yıl boyunca istenilen zamanda yapılabilir. Sadece Arefe günü ve Bayram günleri (9-13 Zilhicce arası hac dönemi) yapılması mekruhtur.</p>
<h2>3. Süre Açısından Fark</h2>
<p><strong>Hac:</strong> Organize hac paketleri ortalama 15-21 gün sürer. Bu süre Arafat, Müzdelife ve Mina''daki zorunlu ritüelleri içerir.</p>
<p><strong>Umre:</strong> Sadece umre ritüelleri 2-3 saat içinde tamamlanabilir. Ancak paket turlar genellikle 7-14 gün sürer, çünkü Mekke ve Medine ziyaretleri de eklenir.</p>
<h2>4. Ritüel Açısından Fark</h2>
<h3>Hac Ritüelleri</h3>
<ol>
  <li>İhrama girmek</li>
  <li>Mina''ya gitmek (Terviye günü)</li>
  <li>Arafat vakfesi</li>
  <li>Müzdelife''de gecelemek</li>
  <li>Şeytan taşlama (Akabe Cemresi)</li>
  <li>Kurban kesmek</li>
  <li>Tıraş olmak</li>
  <li>Ziyaret tavafı ve sa''y</li>
  <li>Teşrik günlerinde şeytan taşlamaya devam</li>
  <li>Veda tavafı</li>
</ol>
<h3>Umre Ritüelleri</h3>
<ol>
  <li>İhrama girmek</li>
  <li>Tavaf (7 şavt)</li>
  <li>Sa''y (Safa-Merve arası)</li>
  <li>Tıraş olmak</li>
</ol>
<h2>5. Fiyat Açısından Fark</h2>
<p><strong>Hac:</strong> Organizasyonun kapsamlılığı, dönem yoğunluğu ve 21 günlük süre nedeniyle fiyatlar yüksek olur. Sponsor Hanım Turizm hac paketi 7.500 USD''den başlar.</p>
<p><strong>Umre:</strong> Yıl boyunca çeşitli paketler mevcuttur. Sponsor Hanım Turizm umre paketleri 1.550 USD (7 gün) ve 4.500 USD (14 gün VIP) olarak sunulur.</p>
<h2>6. Bekleme Süresi</h2>
<p><strong>Hac:</strong> Türkiye''de Diyanet üzerinden kontenjan bekleme süresi 5-15 yıl arasında değişir. Özel acentalar üzerinden daha kısa sürede gidilebilir.</p>
<p><strong>Umre:</strong> Herhangi bir bekleme yoktur. Hazırlığınızı tamamladığınız anda gidebilirsiniz.</p>
<h2>Hangisini Seçmeliyim?</h2>
<h3>Umre Önerilir Eğer:</h3>
<ul>
  <li>İlk kez kutsal topraklara gidiyorsanız — kısa ve kapsamlı bir deneyim</li>
  <li>Fiziksel olarak hac''ın yoğunluğuna hazır değilseniz</li>
  <li>Hac kontenjan bekleme süresini aşmadan manevi yolculuk yapmak istiyorsanız</li>
  <li>Yıl içinde bir zaman dilimine uygunsanız</li>
</ul>
<h3>Hac Önerilir Eğer:</h3>
<ul>
  <li>Maddi ve bedensel imkânınız var</li>
  <li>Ömürlük farzı yerine getirmek istiyorsunuz</li>
  <li>Arafat vakfesi gibi hacca özel manevi deneyimleri yaşamak istiyorsunuz</li>
</ul>
<h2>Bizimle Hangisini Tercih Etmelisiniz?</h2>
<p>Sponsor Hanım Turizm olarak hem hac hem umre organizasyonunda uzmanız. İhtiyaçlarınız doğrultusunda size en uygun paketi önermek için <a href="/iletisim">iletişim sayfamızdan</a> bize ulaşın veya <a href="https://wa.me/905444986208">WhatsApp</a> üzerinden yazın.</p>',
  'Hac Rehberi',
  '/images/blogs/premium.png',
  '25 Mart 2026'
),

-- ============ MISIR REHBERLERİ ============

(
  'misirda-mutlaka-gorulmesi-gereken-5-yer',
  'Mısır''da Mutlaka Görülmesi Gereken 5 Eşsiz Yer',
  'Piramitlerden tapınaklara, Mısır seyahatinizde listenizin başında olması gereken 5 tarihi ve doğal güzellik.',
  '<p>Mısır, insanlık tarihinin en eski ve en gizemli uygarlıklarından birinin izlerini taşıyor. Bir hafta içinde bile ülkenin zenginliğini tam keşfetmek mümkün değil, ancak doğru rotayla seçtiğiniz birkaç nokta size Mısır''ın ruhunu yaşatabilir. İşte Mısır seyahatinizde kaçırmamanız gereken 5 yer.</p>
<h2>1. Giza Piramitleri ve Sfenks</h2>
<p>Mısır denilince akla ilk gelen yer şüphesiz <strong>Giza Piramitleri</strong>''dir. Dünyanın yedi harikasından biri olan Keops, Kefren ve Mikerinos piramitlerini görmek bir ömürde bir kez yaşayacağınız bir deneyim. Keops''un yüksekliği 137 metreye ulaşır ve 4500 yıllık tarihi ile hâlâ ayakta. Sfenks, firavun Kefren''in yüzünü taşıdığı söylenen dev heykel, piramitlerin yanında muhteşem bir kompozisyon oluşturur. Gün doğumuna yakın gitmek hem fotoğraf hem de sessizlik için idealdir.</p>
<h2>2. Kahire Müzesi (Yeni)</h2>
<p>2024''te açılan <strong>Yeni Mısır Müzesi (GEM)</strong>, dünyanın en büyük arkeoloji müzesi olma iddiasını taşıyor. Tutankhamun''un altın maskesi ve mezar hazinelerinin tamamı ilk kez bir arada sergileniyor. Firavun Ramses II''nin devasa heykeli müze girişinde sizi karşılar. En az yarım gün ayırın — koleksiyon inanılmaz derecede zengin.</p>
<h2>3. Luxor ve Karnak Tapınakları</h2>
<p>Nil Nehri kıyısında yükselen <strong>Luxor Tapınağı</strong>, gündüz ve gece farklı bir büyü sunar. Dev sütunlar, obeliskler ve firavun heykelleri antik dünyanın nefesini hissettirir. Hemen yakınındaki <strong>Karnak Tapınak Kompleksi</strong>, Mısır''ın en büyük dini kompleksidir ve adeta bir açık hava müzesidir. 3000 yıllık sütunlu salon ziyaretçileri ilk andan etkiler.</p>
<h2>4. Krallar Vadisi</h2>
<p>Nil''in batı yakasında yer alan <strong>Krallar Vadisi</strong>, firavunların görkemli mezarlarına ev sahipliği yapar. Tutankhamun, II. Ramses ve III. Thutmose gibi ünlü firavunların mezarları burada bulunur. Duvar fresklerindeki boyaların 3000 yıl sonra hâlâ canlı olması Mısır sanatının ihtişamını gösterir.</p>
<h2>5. Kızıldeniz ve Hurghada / Sharm El Şeyh</h2>
<p>Tarihi gezilerin ardından Kızıldeniz''in serin sularına kendinizi bırakabilirsiniz. <strong>Hurghada</strong> ve <strong>Sharm El Şeyh</strong> dünyaca ünlü dalış ve snorkeling noktalarıdır. Renkli mercan kayalıkları, tropikal balıklar ve kristal berraklığında su, dalgıçlar için cennet. Tarih ve tatil bir arada — Mısır''ın benzersiz kombinasyonu.</p>
<h2>Bonus: Aswan ve Abu Simbel</h2>
<p>Eğer vaktiniz varsa, güneydeki <strong>Aswan</strong> ve <strong>Abu Simbel</strong> tapınakları listeye eklenmeli. Abu Simbel''in dev heykelleri yılda iki kez güneşle hizalanacak şekilde inşa edilmiştir — Mısır mühendisliğinin mucizesi.</p>
<h2>Sponsor Hanım Turizm ile Mısır</h2>
<p>Ankara''dan kalkışlı Mısır turlarımız Hurghada–Kahire ve Sharm El Şeyh–Kahire rotalarını kapsıyor. 6 günlük paketlerde hem piramit ve müze turları hem de Kızıldeniz tatili bir arada sunulur. Detaylı bilgi için:</p>
<ul>
  <li><a href="/turlar/misir-hurghada-kahire">Mısır Hurghada & Kahire Turu</a></li>
  <li><a href="/turlar/misir-sharm-kahire">Mısır Sharm El Şeyh & Kahire Turu</a></li>
</ul>',
  'Gezi Rehberi',
  '/images/blogs/egypt.png',
  '22 Mart 2026'
),

(
  'kahire-gezi-rehberi',
  'Kahire Gezi Rehberi: 2 Günde Ne Görülür?',
  'Kahire''de sınırlı zamanınız varsa görmeniz gereken yerler, öneriler ve pratik bilgiler. Verimli bir 2 günlük rota.',
  '<p>Kahire, Afrika''nın en kalabalık şehirlerinden biri ve binlerce yıllık Mısır medeniyetinin kalbi. Eğer şehirde yalnızca 2 gününüz varsa, akıllı bir planlama ile en önemli noktaları gezebilirsiniz. İşte verimli bir 2 günlük Kahire rotası.</p>
<h2>1. Gün: Antik Mısır''ın İzinde</h2>
<h3>Sabah: Giza Piramitleri (3 saat)</h3>
<p>Sabah saatlerinde — mümkünse gün doğumunda — Giza platosuna gidin. Keops''un içine girmek ek ücretli bir deneyimdir ve kapalı alandan hoşlanmayanlar için uygun olmayabilir. Sfenks''in önünde fotoğraf çekmek, deve sırtında bir tur atmak kaçırılmayacak deneyimler.</p>
<h3>Öğle: Yerel Restoranda Geleneksel Mısır Mutfağı</h3>
<p>Piramitlere yakın bir restoranda koshari, ful medames veya kebap tadın. Yerel lezzetler hem ucuz hem şehrin ruhunu yansıtır.</p>
<h3>Öğleden Sonra: Yeni Mısır Müzesi (3 saat)</h3>
<p>Giza''dan kısa bir sürüşle yeni açılan GEM''e ulaşabilirsiniz. Tutankhamun koleksiyonu, firavunun taşı heykeli ve antik Mısır günlük yaşam objeleri en dikkat çekici eserler arasında.</p>
<h3>Akşam: Nil Nehri Tekne Turu</h3>
<p>Gün batımını Nil üzerinde bir akşam yemekli tekne turuyla izlemek Kahire deneyiminizi taçlandırır. Canlı müzik ve geleneksel Mısır yemekleri bu turlara dahildir.</p>
<h2>2. Gün: Tarihi ve Manevi Yüz</h2>
<h3>Sabah: Muhammed Ali Camii ve Kahire Kalesi</h3>
<p>Şehrin en görkemli Osmanlı yapısı olan Muhammed Ali Camii, Kahire Kalesi''nin içindedir. Kubbenin iç dekorasyonu ve alabaster duvarlar etkileyicidir. Buradan şehrin panoramik manzarasını görebilirsiniz.</p>
<h3>Sabah Devamı: Sultan Hasan ve Rifai Camileri</h3>
<p>Kahire Kalesi''ne yakın bu iki cami İslami mimarinin şaheserleridir. Devasa iç mekanları ve işçiliği hayran bırakır.</p>
<h3>Öğle: Khan El-Khalili Çarşısı</h3>
<p>14. yüzyıldan kalma geleneksel Mısır çarşısı, alışverişin yanı sıra tarihi bir deneyim. Fehamy Kahvehanesi''nde Arap kahvesi içmek, tarih atmosferinde bir mola.</p>
<h3>Öğleden Sonra: Kopt Bölgesi ve Asılı Kilise</h3>
<p>Eski Kahire''de yer alan Kopt bölgesi, Kahire''nin Hristiyan geçmişini yansıtır. Asılı Kilise (Al-Mu''allaqa) ve Aya Sergis Kilisesi görmeye değer.</p>
<h3>Akşam: Sesli ve Işıklı Gösteri — Piramitler</h3>
<p>Gün sonunda Giza Piramitleri''nde sesli ve ışıklı gösteriyi izlemek muhteşemdir. Tarihteki firavunların sesi, piramitlere yansıyan ışıklar, unutulmaz bir kapanış.</p>
<h2>Pratik Bilgiler</h2>
<ul>
  <li><strong>Ulaşım:</strong> Uber ve Careem güvenilir ve ekonomik</li>
  <li><strong>Para:</strong> Mısır lirası (EGP); bazı yerlerde USD de kabul edilir</li>
  <li><strong>Dil:</strong> Arapça; turistik yerlerde İngilizce yaygın</li>
  <li><strong>Giyim:</strong> Özellikle dini mekânlarda sade, kapalı kıyafet</li>
  <li><strong>Bahşiş kültürü:</strong> Bahşiş (bakşiş) yaygın — rehber, garson ve şoförler için hazırlıklı olun</li>
</ul>
<h2>Sponsor Hanım ile Kahire</h2>
<p>6 günlük Mısır turlarımızda Kahire 2 tam gün olarak programın içinde. Tüm transferler ve Türkçe rehberlik dahildir. <a href="/turlar/misir-hurghada-kahire">Mısır turlarımızı</a> inceleyin.</p>',
  'Gezi Rehberi',
  '/images/blogs/egypt.png',
  '18 Mart 2026'
),

(
  'hurghada-ve-kizildeniz-tatili',
  'Hurghada ve Kızıldeniz: Mısır''ın Tatil Cenneti',
  'Hurghada''da yapılacaklar, dalış noktaları, resort önerileri ve Kızıldeniz tatilini en verimli kılacak ipuçları.',
  '<p>Hurghada, Kızıldeniz kıyısında yer alan ve son 20 yılda dünyanın en popüler tatil destinasyonlarından birine dönüşen bir Mısır şehri. Kristal berraklığındaki deniz, kilometrelerce uzanan beyaz kum plajları ve muhteşem mercan kayalıkları onu dalgıçların ve tatilcilerin gözdesi yapıyor.</p>
<h2>Hurghada Nerede?</h2>
<p>Hurghada, Mısır''ın doğu sahilinde, Kızıldeniz''e bakan bir limandır. Kahire''den 450 km mesafede olup, iç hatlar uçuşuyla 1 saatte ulaşılır. Aynı bölgedeki Sharm El Şeyh''e göre daha uzun bir sahil şeridine sahiptir.</p>
<h2>Hurghada''da Yapılacaklar</h2>
<h3>1. Mercan Kayalıkları ve Dalış</h3>
<p>Kızıldeniz''in en ünlü özelliği, dünyanın en iyi korunmuş mercan resiflerine ev sahipliği yapmasıdır. Hurghada''nın açıklarındaki Giftun Adaları ve Orange Bay, dalış turları için en popüler noktalardır.</p>
<ul>
  <li><strong>Giftun Adaları:</strong> Renkli balıklar ve sığ mercan alanları</li>
  <li><strong>Orange Bay:</strong> Turkuaz deniz, beyaz kum, popüler yemekli tekne turu</li>
  <li><strong>Abu Ramada:</strong> Tecrübeli dalgıçlar için derin nokta</li>
  <li><strong>Dolphin House:</strong> Yunuslarla yüzme şansı</li>
</ul>
<h3>2. Çöl Safarisi</h3>
<p>Kızıldeniz''in hemen arkasındaki çölde 4x4 araç ve ATV''lerle safariye çıkabilirsiniz. Öğleden sonra başlayan turlar genellikle Bedevi köyü ziyareti, deve turu, tanoura dansı ve açık büfe akşam yemeğiyle sona erer. Yıldızlarla dolu çöl gecesi unutulmaz bir deneyim sunar.</p>
<h3>3. El Gouna ve Soma Bay</h3>
<p>Hurghada''nın kuzeyindeki El Gouna, üst sınıf resort bölgesidir. Venedik''e benzer kanalları ve lüks golf sahalarıyla ünlüdür. Soma Bay ise daha sakin, tatil için ideal.</p>
<h3>4. Denizaltı Turu — Sinbad</h3>
<p>Dalış yapmak istemeyenler için Sinbad denizaltı turu harika bir alternatif. 20-25 metre derinliğe inen denizaltıdan Kızıldeniz''in renklerini panoramik camlardan izleyebilirsiniz.</p>
<h3>5. Marina Walk ve Kültürel Gezi</h3>
<p>Hurghada Marina, akşam yemekleri için mükemmel bir sosyal alandır. Restoranlar, barlar, nargile kafeler ve hediyelik eşya dükkanları bu bölgede yoğunlaşır.</p>
<h2>Hurghada''da Konaklama</h2>
<p>Hurghada''da 3, 4 ve 5 yıldızlı her bütçeye uygun yüzlerce resort vardır. Mısır turlarımızda 4★ ve 5★ her şey dahil otellerde konaklama sağlanır:</p>
<ul>
  <li>Steigenberger Al Dau Beach Hotel</li>
  <li>Sunrise Crystal Bay Resort</li>
  <li>Dana Beach Resort</li>
  <li>Falcon Naama Star (Sharm El Şeyh)</li>
</ul>
<h2>En Uygun Dönem</h2>
<p>Kızıldeniz yıl boyunca sıcak iklime sahiptir. Ancak en ideal dönem Mart–Mayıs ve Eylül–Kasım ayları arasıdır. Bu dönemde hava 25-30°C ve deniz suyu 24-27°C olur. Temmuz-Ağustos''ta sıcaklık 40°C''yi aşabilir.</p>
<h2>Sponsor Hanım Hurghada Paketi</h2>
<p>6 günlük Mısır Hurghada & Kahire turumuzda Kızıldeniz dalışı, çöl safarisi, piramit turu bir arada. Kişi başı 800 USD''den başlayan fiyatlarla. Detaylar için <a href="/turlar/misir-hurghada-kahire">Hurghada turumuz</a>''u inceleyin.</p>',
  'Gezi Rehberi',
  '/images/blogs/egypt.png',
  '14 Mart 2026'
),

-- ============ BALİ REHBERLERİ ============

(
  'bali-gili-adalari-rehberi',
  'Bali''nin İncisi: Gili Adaları Seyahat Rehberi',
  'Bali yakınlarındaki üç tropik ada: Gili Trawangan, Gili Meno, Gili Air — hangi ada size uygun, nasıl gidilir?',
  '<p>Endonezya''nın en popüler destinasyonu Bali''nin hemen yanında, motorlu taşıtların yasak olduğu üç küçük cennet var: <strong>Gili Trawangan, Gili Meno ve Gili Air</strong>. Her biri kendi karakteri olan bu adalar, tropik tatilin özünü yansıtıyor.</p>
<h2>Üç Ada, Üç Karakter</h2>
<h3>Gili Trawangan (T)</h3>
<p>Üç adanın en büyüğü ve en hareketlisi. Gece hayatı, restoranlar, dalış okulları ve canlı müzik arayanlar için ideal. Plajları geniş ve kumsalda akşam yemekleri ünlüdür. Genç turistlerin çoğu burayı tercih eder.</p>
<h3>Gili Meno</h3>
<p>Orta boydaki bu ada, adalar arasında en sakin olanıdır. "Balayı adası" olarak bilinir. Çiftler ve huzur arayanlar için. Plajları daha küçük ama kalabalık değildir. Deniz kaplumbağalarını bolca görebileceğiniz nokta.</p>
<h3>Gili Air</h3>
<p>Bali''ye en yakın ada. Trawangan kadar kalabalık değil, Meno kadar da ıssız değil — dengeli bir karaktere sahip. Aileler ve orta yaş gezginler için ideal. Lombok manzaralı batı sahili muhteşemdir.</p>
<h2>Gili Adalarına Nasıl Gidilir?</h2>
<p>Gili Adaları''na Bali''nin kuzeyindeki Padangbai veya Serangan limanlarından hızlı feribotlarla 1.5-2 saatte ulaşılır. Bali havalimanından limanlara özel transfer yaklaşık 2 saat sürer. Feribot ücretleri gidiş-dönüş 40-50 USD civarındadır.</p>
<h2>Adada Ulaşım</h2>
<p>Gili Adaları''nda motorlu taşıt <strong>yasaktır</strong>. Ulaşım için:</p>
<ul>
  <li>Yürüyüş (ada çevresi 2-3 saatte tamamlanır)</li>
  <li>Bisiklet (gün ücreti ~5 USD)</li>
  <li>At arabası (cidomo) — geleneksel ama turistlere önerilmez (hayvan refahı)</li>
</ul>
<h2>Gili Adalarında Yapılacaklar</h2>
<h3>1. Kaplumbağalarla Yüzme</h3>
<p>Gili Meno ve Gili Trawangan arasındaki su, yeşil deniz kaplumbağalarının yaşadığı en iyi noktalardan biri. Snorkel ile bile kolayca görebilirsiniz.</p>
<h3>2. Tüplü Dalış</h3>
<p>Gili Adaları, Güneydoğu Asya''nın en iyi dalış noktalarındandır. Mercan resifleri, kaplumbağalar, köpek balıkları (nurse shark) ve diğer tropik balıklar. Dalış ehliyeti alma kursları da popüler — PADI Open Water 4 günde tamamlanır.</p>
<h3>3. Snorkel Turu</h3>
<p>Tekne ile üç adayı dolaşan snorkel turları günlük olarak düzenlenir. 30-40 USD tutar ve ekipman dahildir.</p>
<h3>4. Gün Batımı</h3>
<p>Gili Trawangan''ın batı kıyısı, Bali''deki Agung Yanardağı''nı arkaya alarak gün batımı için mükemmel. Plajda sallanan çubuklu oturaklar, cocktail ve ayak altında kum.</p>
<h3>5. Gece Hayatı</h3>
<p>Trawangan''ın merkezinde barlar ve gece kulüpleri geç saatlere kadar açıktır. Her hafta sonu farklı partiler düzenlenir.</p>
<h2>Konaklama</h2>
<p>Gili Adaları''nda butik oteller, bambu villalar ve hostel seçenekleri vardır. 3★ bir otel 50-100 USD, 5★ resort 200-400 USD civarıdır. Trawangan''da daha çok seçenek, Meno''da daha az.</p>
<h2>Ne Zaman Gidilmeli?</h2>
<p>Gili Adaları için en iyi dönem kuru sezon olan <strong>Mayıs–Ekim</strong>dır. Kasım-Nisan arası yağmur sezonudur ve dalış görüşü azalabilir. Temmuz-Ağustos en yoğun dönemdir.</p>
<h2>Sponsor Hanım Bali Paketi</h2>
<p>7 günlük Bali & Gili Adaları turumuzda Gili Trawangan deneyimi, dalış ve snorkel turları dahil. Detaylar için <a href="/turlar/bali-gili-adalari">Bali turumuz</a>''u inceleyin.</p>',
  'Gezi Rehberi',
  '/images/blogs/bali.png',
  '10 Mart 2026'
),

(
  'bali-7-gun-gezi-programi',
  'Bali''de 7 Günlük Mükemmel Gezi Programı',
  'Bali''de 7 gün için en iyi rota: Ubud, Seminyak, Uluwatu, Gili Adaları. Verimli ve anılarla dolu bir program.',
  '<p>Bali, 7 günlük bir tatil için ideal bir süre. Doğru planlama ile hem pirinç tarlalarında huzurlu bir kaçış yaşayabilir, hem vahşi sörf plajlarında eğlenebilir, hem de tapınak turlarıyla manevi bir yolculuk yapabilirsiniz. İşte test edilmiş 7 günlük bir program.</p>
<h2>1. Gün: Varış ve Kuta/Seminyak</h2>
<p>Denpasar (Bali) havalimanına inişin ardından otelinize transfer. İlk gün rahatlayın — jetlag etkisini atlatmak için plaja inip taze hindistan cevizi suyu ile Kuta veya Seminyak plajlarında gün batımını izleyin. Akşam Seminyak''ın ünlü La Plancha plaj barında akşam yemeği.</p>
<h2>2. Gün: Ubud''a Geçiş ve Pirinç Tarlaları</h2>
<p>Sabah Ubud''a 1.5 saatlik yolculuk. İlk durak Tegalalang pirinç terasları — fotoğraflık manzara ve tropikal atmosfer. Öğleden sonra Ubud merkezinde Sacred Monkey Forest ve Ubud Sarayı. Akşam yerel warungda Babi Guling (Bali özel domuz eti) veya Nasi Campur.</p>
<h2>3. Gün: Ubud Kültür Turu</h2>
<p>Sabah erken saatte Sebatu su arındırma tapınağı ziyareti. Öğleden sonra Luwak kahve tesisinde Endonezya''nın ünlü kahvesinin üretim sürecini gözlemleyin. Ardından bir Balili yoga veya spa seansıyla günü tamamlayın.</p>
<h2>4. Gün: Kuzey Bali — Tapınaklar ve Volkan</h2>
<p>Bali''nin kuzeyine tam günlük bir gezi. İlk durak Ulun Danu Beratan Tapınağı — göl üzerinde yüzen havuzlu tapınak. Ardından Banyumala çifte şelalesinde yüzme. Öğleden sonra Munduk bölgesinde Alpin manzaralar ve kahve bahçeleri.</p>
<h2>5. Gün: Gili Trawangan''a Geçiş</h2>
<p>Sabah erken saatte Padangbai limanından hızlı feribotla Gili Trawangan''a hareket (2 saat). Adaya varışta check-in ve plajda dinlenme. Öğleden sonra motorsuz adada bisikletle ada turu. Akşam Gili''nin kumsal barlarında yıldızlar altında akşam yemeği.</p>
<h2>6. Gün: Gili Kaplumbağa Snorkel Turu</h2>
<p>Gün boyu tekne turu ile üç Gili adasını dolaşın. Gili Meno yakınlarında yeşil deniz kaplumbağalarıyla yüzün. Öğle yemeği tekne üzerinde. Akşam Trawangan''ın batı plajında dünyanın en güzel gün batımlarından biri.</p>
<h2>7. Gün: Dönüş</h2>
<p>Sabah feribot ile Bali''ye geri. Bali havalimanına transfer. Eğer akşam uçuşunuz varsa, Uluwatu''da bir Kecak dansı izlemek mükemmel bir kapanış — uçurum üzerinde güneş batarken yapılan bu geleneksel dans gözyaşı döktürür.</p>
<h2>Bali İçin İpuçları</h2>
<ul>
  <li><strong>Vize:</strong> Türkiye vatandaşlarına kapıda vize (35 USD)</li>
  <li><strong>Para:</strong> Endonezya rupiahı (IDR); ATM yaygın</li>
  <li><strong>Ulaşım:</strong> Grab (tuk-tuk versiyonu) ucuz ve kolay</li>
  <li><strong>Dil:</strong> Endonezce; turistik yerlerde İngilizce</li>
  <li><strong>Sağlık:</strong> Seyahat sigortası şart; "Bali ishali" yaygındır, suya dikkat</li>
  <li><strong>Giyim:</strong> Tapınaklarda sarong (acentenizin verdiği)</li>
</ul>
<h2>Sponsor Hanım Bali Turu</h2>
<p>Ankara''dan kalkışlı 7 günlük Bali & Gili Adaları turumuz: Ubud''dan Gili''ye, tapınaklardan plajlara kapsamlı bir rota. 1.650 USD''den başlayan fiyatlar. <a href="/turlar/bali-gili-adalari">Bali turumuz</a> detayları için tıklayın.</p>',
  'Gezi Rehberi',
  '/images/blogs/bali.png',
  '5 Mart 2026'
),

-- ============ DUBAI & GAP ============

(
  'dubai-gezi-rehberi-2026',
  'Dubai Gezi Rehberi 2026: Görülecek 10 Yer',
  'Dubai''de mutlaka görmeniz gereken 10 yer: Burj Khalifa''dan çöl safarisine, Palm Jumeirah''dan eski çarşılara.',
  '<p>Dubai, modern mühendislik, lüks alışveriş, geleneksel çarşılar ve çöl macerasını tek bir şehirde birleştiriyor. İster ilk kez gidiyor olun ister yeniden, bu 10 yer Dubai deneyiminizin omurgasını oluşturur.</p>
<h2>1. Burj Khalifa</h2>
<p>Dünyanın en yüksek binası. 828 metrelik yapının 124. veya 148. katlarındaki seyir teraslarından Dubai''nin gökdelen ormanını ve çölü aynı anda görebilirsiniz. Gün batımı seansı en popüler olanıdır — önceden rezervasyon şart.</p>
<h2>2. Dubai Mall ve Dubai Fountain</h2>
<p>Dünyanın en büyük alışveriş merkezlerinden biri olan Dubai Mall, alışveriş dışında Dubai Akvaryumu, Dubai Buzu ve VR Park gibi cazibe noktalarını barındırır. Akşamları açık havadaki Dubai Fountain''ın müzikli su gösterisi 30 dakikada bir tekrarlanır ve ücretsizdir.</p>
<h2>3. Palm Jumeirah ve Atlantis The Palm</h2>
<p>Deniz üzerine inşa edilmiş palmiye şeklindeki yapay adalar takımı. Üzerindeki Atlantis The Palm oteli ve su parkı Aquaventure ailelerin gözdesidir. The View at The Palm seyir terası tüm Palm manzarasını sunar.</p>
<h2>4. Çöl Safarisi</h2>
<p>4x4 araçlarla kum tepelerinde dune bashing, gün batımında deve turu, Bedevi kampında şark gecesi ve açık büfe akşam yemeği. Dubai''nin modern yüzünün hemen dibinde, çölün sonsuzluğunu hissedin.</p>
<h2>5. Şeyh Zayed Camii (Abu Dhabi)</h2>
<p>Abu Dhabi''de bulunsa da Dubai turlarının vazgeçilmezidir. Beyaz mermerden yapılmış, 82 kubbeli bu dev cami, Dünya''nın en güzel camilerinden biri. Ücretsiz rehberli turlar sunulur. Giyim kuralları sıkıdır — uygun kıyafet temin edilir.</p>
<h2>6. Dubai Marina ve JBR</h2>
<p>Dubai''nin suya bakan modern tarafı. Yat turları, yüksek binalar ve yaşam kalitesiyle yüksek tempoda bir bölge. Marina Walk boyunca restoranlar, barlar ve kafeler günü eğlenceye çevirir.</p>
<h2>7. Dubai Eski Şehir (Bastakiya)</h2>
<p>Bu rüzgâr kuleleri ve dar sokakları olan tarihi bölge, Dubai''nin modernleşmeden önceki halini yansıtır. Dubai Müzesi da buradadır. Eski Dubai''nin rüzgâr kulelerinin altında bir fincan Arap kahvesi mutlaka.</p>
<h2>8. Altın ve Baharat Çarşıları</h2>
<p>Dubai Creek''in kuzey yakasında (Deira bölgesi) bulunan bu iki çarşı geleneksel pazar kültürünün yaşadığı yerler. Altın Çarşısı''nda dünya çapında ucuz altın, Baharat Çarşısı''nda safran, zerdeçal, hurma çeşitleri.</p>
<h2>9. Miracle Garden</h2>
<p>Çölün ortasında 150 milyon çiçekten oluşan bir park. Her sezon farklı kompozisyonlar sergilenir. Özellikle aileler için harika bir yer. Kasım–Nisan arası açıktır.</p>
<h2>10. Global Village</h2>
<p>Dünyanın farklı ülkelerinden pavyonlar, yiyecekler, performanslar ve alışveriş. Sadece kış sezonunda (Kasım–Nisan) açık olan bu açık hava sergisi, Dubai''nin çok kültürlü yapısını yansıtır.</p>
<h2>Pratik Bilgiler</h2>
<ul>
  <li><strong>Vize:</strong> Türkiye vatandaşlarına 90 gün vizesiz giriş</li>
  <li><strong>Para:</strong> BAE Dirhemi (AED)</li>
  <li><strong>Ulaşım:</strong> Metro verimli ve temiz; Uber/Careem de yaygın</li>
  <li><strong>Dil:</strong> Arapça; İngilizce her yerde konuşulur</li>
  <li><strong>İklim:</strong> Kasım-Mart en ideal; yaz aylarında 45°C</li>
  <li><strong>Ramazan:</strong> Gündüz yemek/içmek caddede yasak</li>
</ul>
<h2>Sponsor Hanım Dubai Turu</h2>
<p>Ankara''dan kalkışlı 7 günlük Dubai turumuzda Burj Khalifa, çöl safarisi, Abu Dhabi ve Palm Jumeirah dahil. 1.100 USD''den başlayan fiyatlar. Detaylar için <a href="/turlar/dubai-turu">Dubai turumuz</a>''u inceleyin.</p>',
  'Gezi Rehberi',
  '/images/blogs/egypt.png',
  '2 Mart 2026'
),

(
  'gap-turu-gidilecek-yerler',
  'GAP Turu''nda Gidilecek 10 Tarihi Yer',
  'Güneydoğu Anadolu''nun en etkileyici 10 noktası: Göbeklitepe''den Mardin''e, tarihin ve lezzetin izinde.',
  '<p>GAP (Güneydoğu Anadolu Projesi) turu, Türkiye''nin en eski medeniyet izlerini taşıyan bölgenin kalbini keşfetme fırsatı. 12.000 yıllık Göbeklitepe''den Mezopotamya''nın incisi Mardin''e, her durak bir hikâye barındırıyor.</p>
<h2>1. Göbeklitepe</h2>
<p>Şanlıurfa''da yer alan 12.000 yıllık bu tapınak kompleksi, insanlık tarihinin ilk bilinen dini yapısı. Stonehenge''den 7000 yıl daha eski olan Göbeklitepe, arkeoloji dünyasında "medeniyetin başlangıcı" olarak kabul edilir. UNESCO Dünya Mirası listesinde.</p>
<h2>2. Balıklıgöl (Şanlıurfa)</h2>
<p>Hz. İbrahim''in ateşe atıldığında Allah''ın kudretiyle suya ve balıklara dönüştüğüne inanılan göl. Dergah Camii, Rızvaniye Camii ve çevresindeki bahçeler manevi atmosferi tamamlar. Şehrin merkezi ve ziyaret edilmesi en kolay noktası.</p>
<h2>3. Harran</h2>
<p>Şanlıurfa''ya yakın bu antik yerleşim, konik kubbeli geleneksel Mezopotamya evleriyle ünlü. Harran Üniversitesi kalıntıları, dünyanın en eski üniversitelerinden biridir. Hz. Yakup''un kuyusu ve Harran Kalesi ek durak noktalarıdır.</p>
<h2>4. Gaziantep Kalesi ve Zeugma Müzesi</h2>
<p>Gaziantep''in tepesinde yer alan Roma dönemi kalesi, şehrin panoramik manzarasını sunar. Zeugma Mozaik Müzesi ise dünyanın en büyük mozaik koleksiyonlarından birini barındırır — ünlü "Çingene Kızı" burada.</p>
<h2>5. Mardin Eski Şehir</h2>
<p>Taşın şiirle buluştuğu Mardin, UNESCO aday listesinde. Sarı taştan evler, dar sokaklar, Ulu Cami, Kasımiye Medresesi ve eşsiz Mezopotamya manzarası. Akşam gün batımını Mardin''den izlemek ömürlük bir anıdır.</p>
<h2>6. Deyrulzafaran Manastırı</h2>
<p>Mardin yakınlarındaki bu 5. yüzyıldan kalma Süryani manastırı, hâlâ aktif bir ibadet merkezidir. Taş işçiliği, rengarenk freskleri ve tarihi değeriyle ziyaret edilmesi gereken bir yer.</p>
<h2>7. Hasankeyf (Batman)</h2>
<p>Dicle Nehri kıyısındaki bu tarihi yerleşim, Ilısu Barajı nedeniyle kısmen su altında kalmış olsa da Hasankeyf Kalesi, Artuklu dönemi mimarisi ve yapay ada üzerine taşınmış tarihi yapılar görülmeye değer.</p>
<h2>8. Diyarbakır Surları ve Ulu Cami</h2>
<p>Çin Seddi''nden sonra dünyanın en uzun ikinci sur duvarları Diyarbakır''dadır. 5.8 km uzunluğundaki bazalt surlar UNESCO Dünya Mirası''dır. Diyarbakır Ulu Camisi ise Anadolu''nun en eski camilerinden biridir.</p>
<h2>9. Adıyaman Nemrut Dağı</h2>
<p>2150 metrelik Nemrut Dağı zirvesinde Kral Antiochos''un devasa heykelleri ve tümülüsü. Gün doğumunda izlemek büyüleyici bir deneyimdir. Kommagene Krallığı''nın en önemli kalıntısı.</p>
<h2>10. Zeugma Antik Kenti</h2>
<p>Gaziantep Birecik''te, Fırat kıyısındaki bu Roma antik kenti, muhteşem mozaikleriyle ünlüdür. Kazılarda çıkan eserlerin büyük kısmı Zeugma Müzesi''nde sergilenmektedir.</p>
<h2>GAP Turu Gastronomisi</h2>
<p>GAP bölgesi sadece tarihle değil, yemek kültürüyle de ünlü:</p>
<ul>
  <li><strong>Gaziantep:</strong> Baklava, lahmacun, beyran, içli köfte, kebap çeşitleri</li>
  <li><strong>Şanlıurfa:</strong> Urfa kebabı, çiğ köfte, ciğer kebabı</li>
  <li><strong>Diyarbakır:</strong> Kaburga dolması, karpuz</li>
  <li><strong>Mardin:</strong> Mardin şarabı, ikbebet (içli köfte)</li>
</ul>
<h2>Sponsor Hanım GAP Turu</h2>
<p>4 günlük GAP turumuzda Şanlıurfa, Göbeklitepe, Harran, Gaziantep ve Mardin tek programda. 13.500 TL''den başlayan fiyatlar, uçak dahil. <a href="/turlar/gap-turu">GAP Turumuz</a>''u inceleyin.</p>',
  'Gezi Rehberi',
  '/images/blogs/egypt.png',
  '26 Şubat 2026'
),

-- ============ PRATİK BİLGİ ============

(
  'pasaport-ve-vize-islemleri',
  'Pasaport ve Vize İşlemleri: 2026 Güncel Rehber',
  'Pasaport başvurusu, süresi, uzatma ve popüler destinasyonlar için vize durumları. 2026 yılı güncel bilgiler.',
  '<p>Yurtdışı seyahati planlıyorsanız pasaport ve vize süreçleri yolculuğunuzun temelidir. 2026 yılı itibarıyla Türkiye''deki güncel pasaport başvuru süreci ve popüler destinasyonlar için vize gereklilikleri bu rehberde.</p>
<h2>Pasaport Nedir ve Türleri</h2>
<p>Türkiye Cumhuriyeti''nde dört ana pasaport türü vardır:</p>
<ul>
  <li><strong>Umuma Mahsus Pasaport (Bordo):</strong> Vatandaşlar için standart pasaport</li>
  <li><strong>Hizmet Pasaportu (Gri):</strong> Devlet memurları için (resmi görev)</li>
  <li><strong>Hususi Pasaport (Yeşil):</strong> Belirli kadrolardaki kamu personeli</li>
  <li><strong>Diplomatik Pasaport (Siyah):</strong> Üst düzey yetkililer</li>
</ul>
<p>Turizm için sadece bordo pasaport kullanılır.</p>
<h2>Pasaport Başvurusu — Adım Adım</h2>
<ol>
  <li><strong>Randevu al:</strong> Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİ) üzerinden e-Randevu</li>
  <li><strong>Harç öde:</strong> Ziraat Bankası veya e-Devlet üzerinden</li>
  <li><strong>Evrakları hazırla:</strong> Kimlik, 2 biyometrik fotoğraf, eski pasaport (varsa), değer tespit harcı dekontu</li>
  <li><strong>Başvuru yap:</strong> Randevu gününde merkeze git</li>
  <li><strong>Bekle:</strong> 7-10 iş günü (İstanbul ve büyük şehirlerde biraz daha uzayabilir)</li>
  <li><strong>Teslim al:</strong> Kargo ile adrese veya nüfus müdürlüğünden elden</li>
</ol>
<h2>Pasaport Ücretleri (2026)</h2>
<ul>
  <li>6 aylık pasaport: ~800 TL</li>
  <li>1 yıllık pasaport: ~1.500 TL</li>
  <li>2 yıllık pasaport: ~2.500 TL</li>
  <li>3 yıllık pasaport: ~3.500 TL</li>
  <li>4 yıllık pasaport: ~4.500 TL</li>
  <li>10 yıllık pasaport: ~8.000 TL</li>
  <li>Değerli kağıt bedeli: ~850 TL</li>
</ul>
<p><em>Ücretler değişebilir, başvuru öncesi nvi.gov.tr üzerinden kontrol edin.</em></p>
<h2>Pasaport Süresi ve Geçerlilik</h2>
<p>Pek çok ülke girişlerde pasaportunuzun <strong>en az 6 ay geçerli olması</strong>nı ister. Bazı ülkeler 3 ay şartı koyar. Yolculuğunuzdan önce pasaport süresini kontrol edin.</p>
<h2>Popüler Destinasyonlar İçin Vize Durumu</h2>
<h3>Vize Gerektirmeyen Ülkeler (Türk Vatandaşları İçin)</h3>
<ul>
  <li>BAE / Dubai — 90 gün vizesiz</li>
  <li>Katar, Umman — vizesiz</li>
  <li>Malezya — 90 gün vizesiz</li>
  <li>Singapur — 90 gün vizesiz</li>
  <li>Ukrayna, Gürcistan, Rusya (60 gün) — kimlik ile giriş (bazılarında pasaport gerekli)</li>
  <li>Kuzey Kıbrıs — kimlik ile giriş</li>
</ul>
<h3>E-Vize / Kapıda Vize</h3>
<ul>
  <li><strong>Mısır:</strong> Kapıda vize (~30 USD)</li>
  <li><strong>Endonezya (Bali):</strong> Kapıda vize (~35 USD)</li>
  <li><strong>Bahreyn, Ürdün:</strong> Kapıda vize</li>
  <li><strong>Vietnam, Tayland, Sri Lanka:</strong> E-vize veya kapıda</li>
</ul>
<h3>Ön Başvuru Gerektiren Vizeler</h3>
<ul>
  <li><strong>Suudi Arabistan (Umre/Hac):</strong> Acente aracılığıyla</li>
  <li><strong>Schengen (26 Avrupa ülkesi):</strong> Konsolosluk başvurusu, 80 EUR, 15-30 gün işlem</li>
  <li><strong>ABD:</strong> Konsolosluk mülakatı, 185 USD, 1-12 ay bekleme süresi</li>
  <li><strong>İngiltere:</strong> Online başvuru, konsolosluk, 100+ GBP</li>
  <li><strong>Kanada, Avustralya:</strong> Online başvuru</li>
</ul>
<h2>Vize Başvurusunda Gereken Evraklar</h2>
<p>Genel olarak istenen evraklar:</p>
<ul>
  <li>Geçerli pasaport (6 ay)</li>
  <li>Biyometrik fotoğraf (2 adet)</li>
  <li>Vize başvuru formu</li>
  <li>Banka hesap özeti (son 3 ay)</li>
  <li>Gelir belgesi veya çalışma sözleşmesi</li>
  <li>Seyahat sağlık sigortası</li>
  <li>Konaklama belgesi (otel rezervasyonu)</li>
  <li>Uçak bileti veya rezervasyon</li>
  <li>Gidiş-dönüş planı</li>
</ul>
<h2>Vize Reddedilirse?</h2>
<p>Vize reddinin sık nedenleri: Yetersiz finansal durum, geri dönüşü garantileyecek bağlılıkların (iş, aile, mülk) yetersiz olması, önceki vize ihlalleri, eksik belgeler. Reddedilmiş bir vize yeni başvuruyu olumsuz etkileyebilir — reddedilme gerekçelerini gidermeden tekrar başvurmayın.</p>
<h2>Sponsor Hanım Turizm ile Vize Kolaylığı</h2>
<p>Umre, hac ve diğer turlarımızda vize işlemleri tarafımızca yürütülür. Belgeleri teslim etmeniz yeterlidir. Detaylı bilgi için <a href="/iletisim">iletişim sayfamızdan</a> ulaşın.</p>',
  'Pratik Bilgi',
  '/images/blogs/premium.png',
  '22 Şubat 2026'
),

(
  'tur-mu-bireysel-seyahat-mi',
  'Tur mu Bireysel Seyahat mi? Avantajlar ve Dezavantajlar',
  'Organize tur ile bireysel seyahatin artıları ve eksileri: maliyet, özgürlük, konfor ve deneyim açısından karşılaştırma.',
  '<p>Seyahat tarzı kişisel tercihlere bağlıdır, ancak "organize tur mu, bireysel seyahat mi" sorusu herkesin düşündüğü bir ikilem. Her iki yöntemin de güçlü ve zayıf yanları var. Bu yazıda ikisini objektif olarak karşılaştırıyoruz ki kendi önceliğinize göre karar verebilesiniz.</p>
<h2>Organize Tur Avantajları</h2>
<h3>1. Zaman Tasarrufu</h3>
<p>Ulaşım, konaklama, rehberlik, müze biletleri, transfer — her şey önceden planlanmıştır. Siz sadece deneyime odaklanırsınız. Bireysel planlama haftalar alabilir.</p>
<h3>2. Rehberlik ve Uzman Bilgisi</h3>
<p>Profesyonel rehberler görünür tarihi ve kültürel bilgiler kadar, görünmeyen detayları da anlatır. Bir müze rehberi ile yaşayan bir Mısır deneyimi; rehbersiz bir tarihe göz atmaktan çok farklıdır.</p>
<h3>3. Güvenlik</h3>
<p>Tanınmayan bir ülkede yolunuzu kaybetmek, dolandırıcılığa maruz kalmak veya acil durumlarda yalnız kalmak stres yaratır. Organize turda acentanız tüm bu riskleri yönetir.</p>
<h3>4. Uygun Maliyet (Bazen)</h3>
<p>Acentalar toplu alım avantajıyla otel, uçak bileti ve müze biletlerinde indirimli fiyatlar alır. Bazı destinasyonlarda organize tur, bireysel seyahatten daha ucuza gelir.</p>
<h3>5. Tanıdık Dil ve Kültür</h3>
<p>Türkçe rehber ve tur arkadaşlarıyla seyahat etmek, özellikle yabancı dil zorluğu yaşayanlar için büyük konfor sağlar.</p>
<h3>6. Sosyalleşme</h3>
<p>Tur, yeni insanlar tanıma fırsatıdır. Umre ve hac turlarında edinilen arkadaşlıklar uzun yıllar sürer.</p>
<h3>7. Dini/Kültürel Uzmanlık</h3>
<p>Özellikle umre ve hac gibi ritüel gerektiren yolculuklarda uzman din görevlisi rehberliği vazgeçilmezdir.</p>
<h2>Organize Tur Dezavantajları</h2>
<h3>1. Sınırlı Özgürlük</h3>
<p>Rotanız belirlidir. Bir yerde daha fazla kalmak isteseniz de programa uymanız gerekir.</p>
<h3>2. Grup Temposu</h3>
<p>Yavaş yürüyenler, erken yorulanlar veya çok yavaş kahvaltı edenler grubun temposunu bozabilir veya ondan geri kalabilir.</p>
<h3>3. Kalabalık Turistik Noktalar</h3>
<p>Turlar popüler noktaları yoğun saatlerde ziyaret edebilir. Sakinlik ve özgünlük arayanlar için zor olabilir.</p>
<h3>4. Daha Az Bütçe Esnekliği</h3>
<p>Yemek, otel, deneyimler önceden sabitlenmiş. "Şu lüks restoran" veya "Şu butik otel" seçeneği sınırlıdır.</p>
<h2>Bireysel Seyahat Avantajları</h2>
<h3>1. Tam Özgürlük</h3>
<p>Sabah erken kalkıp Santorini''de gün doğumunu izlemek veya Roma''da akşam 10''da mezeler ısmarlamak — tamamen sizin kararınız.</p>
<h3>2. Kişisel Ritim</h3>
<p>Yorgunsanız günü iptal, enerjik hissediyorsanız ekstra gezi. Kendi hızınızda seyahat.</p>
<h3>3. Yerel Deneyim</h3>
<p>Turistik yolların dışına çıkıp gerçek yerel yaşamı deneyimleme şansı. Ailelere konuk olmak, sokak yemeği, yerel kahvelerde vakit geçirmek.</p>
<h3>4. Bütçe Kontrolü</h3>
<p>Kendinize uygun her seviyede konaklama ve yemek seçebilirsiniz. Hostelden 5 yıldızlı otele, Michelin yıldızlı yemekten sokak büfesine.</p>
<h3>5. Özel Deneyimler</h3>
<p>Airbnb''de yerel ailede kalma, küçük sanat galerilerinde etkinlikler, yerel rehberle özel turlar.</p>
<h2>Bireysel Seyahat Dezavantajları</h2>
<h3>1. Yüksek Planlama Yükü</h3>
<p>Uçak, otel, transfer, müze biletleri, restoran rezervasyonları — her şey sizin sorumluluğunuzda.</p>
<h3>2. Dil Engeli</h3>
<p>Arapça, Çince, Rusça gibi Latin olmayan alfabeli ülkelerde basit işler bile zorlaşabilir.</p>
<h3>3. Güvenlik Riskleri</h3>
<p>Bilmediğiniz bir şehirde yolunuzu kaybetmek, gece kötü bir mahalleye düşmek, dolandırıcılığa maruz kalmak — gerçek riskler.</p>
<h3>4. Rezerv Maliyeti</h3>
<p>Acenteler kadar iyi fiyat bulmak zor olabilir. Özellikle son dakika rezervasyonlarda fiyatlar fırlar.</p>
<h3>5. Acil Durumlar</h3>
<p>Hastalanırsanız, pasaportunuz kaybolursa, uçağınız iptal olursa — tüm bunları kendiniz yönetmelisiniz.</p>
<h2>Hangisi Size Uygun?</h2>
<h3>Organize Tur Tercih Edin Eğer:</h3>
<ul>
  <li>İlk kez yurtdışına çıkıyorsanız</li>
  <li>Umre, hac gibi özel ritüelli yolculuktaysanız</li>
  <li>Yabancı dil konuşmuyorsanız</li>
  <li>Aile veya yaşlı anne-babanızla seyahat ediyorsanız</li>
  <li>Kısıtlı sürede maksimum yer görmek istiyorsanız</li>
  <li>Stressiz bir tatil istiyorsanız</li>
</ul>
<h3>Bireysel Seyahat Tercih Edin Eğer:</h3>
<ul>
  <li>Birden fazla kez seyahat tecrübesi yaşadıysanız</li>
  <li>Dil konusunda rahatsanız</li>
  <li>Bir yerde yavaşlayıp derin deneyim yaşamak istiyorsanız</li>
  <li>Esnek bir programı seviyorsanız</li>
  <li>Planlama ve araştırmadan keyif alıyorsanız</li>
</ul>
<h2>Sonuç</h2>
<p>İkisinin arasında bir denge de mümkün: "Temel seyahat organize, ekstralar bireysel" gibi. Sponsor Hanım Turizm olarak hac ve umre gibi yüksek manevi önem taşıyan turlarımızın tam organize olmasını öneriyoruz. Dubai ve Mısır için organize tur hem verimli hem güvenli, ancak Bali için serbest günleri olan paketler sunuyoruz. Detaylı danışma için bize ulaşın.</p>',
  'Pratik Bilgi',
  '/images/blogs/premium.png',
  '18 Şubat 2026'
)

ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  category = EXCLUDED.category,
  image_url = EXCLUDED.image_url,
  date = EXCLUDED.date,
  updated_at = now();

-- ============================================
-- Yüklendikten sonra:
-- SELECT slug, title, category, date FROM blogs ORDER BY created_at DESC;
-- ============================================
