-- ============================================
-- SPONSOR HANIM TURİZM - SUPABASE VERİTABANI
-- Bu SQL'i Supabase Dashboard > SQL Editor'de çalıştırın
-- ============================================

-- 1. TURLAR TABLOSU (Ana tur bilgileri)
CREATE TABLE tours (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL,           -- "Mısır", "Umre", "Bali", "Hac", "Kombine", "Dubai", "GAP"
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  duration VARCHAR(50),                -- "6 Günlük", "14 Günlük"
  price VARCHAR(50) NOT NULL,          -- "800 USD", "4.500 USD" — başlangıç fiyatı
  image_url TEXT,                       -- Görsel URL
  description TEXT,
  detail_link VARCHAR(255),            -- "/turlar/misir-hurghada-kahire"
  is_active BOOLEAN DEFAULT true,      -- Turu gizlemek/göstermek için
  sort_order INT DEFAULT 0,            -- Sıralama
  room_info VARCHAR(255),              -- "2 kişilik standart oda — tek kişilik için +200$"
  single_supplement NUMERIC(10, 2) DEFAULT 200, -- Tek kişilik oda farkı (USD)
  payment_terms VARCHAR(100) DEFAULT '2 taksit',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 1b. TUR TARİHLERİ TABLOSU (her tur için birden çok kalkış tarihi)
CREATE TABLE tour_dates (
  id SERIAL PRIMARY KEY,
  tour_id INT REFERENCES tours(id) ON DELETE CASCADE,
  label VARCHAR(100),                  -- "Sömestr", "Ramazan Bayramı", "Kurban Bayramı"
  start_date DATE NOT NULL,
  end_date DATE,
  date_text VARCHAR(150),              -- Kullanıcıya gösterilecek metin: "22 – 28 Ocak (Sömestr)"
  price NUMERIC(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'USD',  -- "USD", "TRY", "EUR"
  capacity_status VARCHAR(50),         -- "paylaşalım", "bayrama yakın"
  capacity_text VARCHAR(50),           -- "5 kişi", "12 boşluk", "boş"
  notes VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_tour_dates_tour_id ON tour_dates(tour_id);
CREATE INDEX idx_tour_dates_start_date ON tour_dates(start_date);

-- 2. BLOG YAZILARI TABLOSU
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,   -- URL-dostu isim: "misirda-mutlaka-gorulmesi-gereken-5-yer"
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,                         -- Kısa özet
  content TEXT,                         -- HTML içerik
  category VARCHAR(100),               -- "Gezi Rehberi", "Rehber", "Tatil", "Aktivite"
  image_url TEXT,                       -- Görsel URL
  date VARCHAR(50),                    -- "12 Mart 2026"
  is_published BOOLEAN DEFAULT true,   -- Taslak/yayında
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. İLETİŞİM FORMU MESAJLARI
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(255),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,       -- Okundu/okunmadı
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- ROW LEVEL SECURITY (GÜVENLİK KURALLARI)
-- ============================================

-- Turlar: Herkes okuyabilir, sadece admin yazabilir
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Turlar herkese açık okuma"
  ON tours FOR SELECT
  USING (true);

-- Tur Tarihleri: Herkes okuyabilir
ALTER TABLE tour_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tur tarihleri herkese açık okuma"
  ON tour_dates FOR SELECT
  USING (true);

-- Bloglar: Yayınlanmış olanlar herkese açık
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Yayinlanmis bloglar herkese acik"
  ON blogs FOR SELECT
  USING (is_published = true);

-- İletişim mesajları: Herkes yazabilir (form gönderimi)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Herkes mesaj gonderebilir"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- ============================================
-- UPDATED_AT OTOMATİK GÜNCELLEME
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tours_updated_at
  BEFORE UPDATE ON tours
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tour_dates_updated_at
  BEFORE UPDATE ON tour_dates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- BAŞLANGIÇ VERİLERİ (TURLAR)
-- ============================================

INSERT INTO tours (id, type, title, subtitle, duration, price, image_url, description, detail_link, sort_order, room_info, single_supplement, payment_terms) VALUES
(1, 'Mısır', 'Mısır Turu — Hurghada & Kahire', 'Efsanevi Kahire, Masmavi Kızıldeniz', '6 Günlük', '800 USD', '/images/tours/egypt.png', 'Binlerce yıllık medeniyetin izleri, bugün dalış maskeni ve çöl rüzgarıyla bir arada. Tek turda hem piramitleri hem de mercanları görün.', '/turlar/misir-hurghada-kahire', 1, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(6, 'Mısır', 'Mısır Turu — Sharm El Şeyh & Kahire', '5★ Falcon Naama Star ile Sonsuz Macera', '6 Günlük', '900 USD', '/images/tours/sharm.png', 'Gündüz piramitlerin gölgesinde, geceleri Kızıldeniz''in kıyısında. 5 yıldızlı konforda unutulmaz bir Mısır deneyimi.', '/turlar/misir-sharm-kahire', 2, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(7, 'Bali', 'Bali & Gili Adaları Turu', 'Cennet Bir Adada Kaybolun', '7 Günlük', '1.650 USD', '/images/tours/bali.png', 'Pirinç teraslarının arasında bisiklet, okyanus üzerindeki tapınaklarda gün batımı, Gili''de kaplumbağalarla dalış... Bali sadece bir tatil değil — bir dönüşüm.', '/turlar/bali-gili-adalari', 3, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(2, 'Umre', 'Umre Turu (Ekonomik)', 'Kutsal Topraklarda Huzur', '14 Günlük', '2,800 USD', '/images/tours/pilgrims.png', 'Mekke ve Medine''de ekonomik ama konforlu bir ibadet deneyimi.', NULL, 4, '4 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(3, 'Umre', 'Umre Turu (Premium)', 'VIP Kutsal Yolculuk', '7 Günlük', '1.550 USD', '/images/tours/hero-bg.png', 'Kabe manzaralı 5 yıldızlı oteller ve özel VIP transferler eşliğinde en özel umre deneyimi.', '/turlar/umre-premium', 5, '4 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(4, 'Hac', 'Hac Turu 2025', 'Ömrün En Güzel Yolculuğu', '21 Günlük', '7.500 USD', '/images/tours/pilgrims.png', 'Uzman din görevlileri eşliğinde, Arafat''tan Mina''ya eksiksiz bir hac farizası. 2025 kontenjanları sınırlıdır.', '/turlar/hac-turu-2025', 6, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(5, 'Kombine', 'Mısır + Umre Kombine', 'Çifte Bereket Turu', '21 Günlük', '5.800 USD', '/images/tours/egypt.png', 'Piramitlerin gölgesinden Kabe''nin huzuruna: tek yolculukta iki medeniyetin büyüsü.', '/turlar/misir-umre-kombine', 7, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(8, 'Dubai', 'Dubai Turu', 'Çölün Modern Yüzü', '7 Günlük', '1.100 USD', '/images/tours/dubai.png', 'Gökdelenler, çöl safarisi ve lüksün başkenti Dubai. Burj Khalifa, Marina ve eşsiz alışveriş deneyimi.', NULL, 8, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit'),
(9, 'GAP', 'GAP Turu', 'Güneydoğu Anadolu Macerası', '4 Günlük', '13.500 ₺', '/images/tours/egypt.png', 'Tarih, kültür ve lezzetin buluştuğu Güneydoğu Anadolu Projesi rotası. Şanlıurfa, Gaziantep, Mardin ve daha fazlası.', NULL, 9, '2 kişilik standart oda — tek kişilik için +200$ ek ücret', 200, '2 taksit');

-- Sequence'i düzelt (id'ler manual girildiği için)
SELECT setval('tours_id_seq', (SELECT MAX(id) FROM tours));

-- ============================================
-- BAŞLANGIÇ VERİLERİ (TUR TARİHLERİ)
-- ============================================

INSERT INTO tour_dates (tour_id, label, start_date, end_date, date_text, price, currency, capacity_status, capacity_text, sort_order) VALUES
-- Mısır Kahire (tour 1)
(1, 'Sömestr',          '2026-01-22', '2026-01-28', '22 – 28 Ocak (Sömestr)',                950, 'USD', 'paylaşalım',   '5 kişi',     1),
(1, NULL,                '2026-02-10', '2026-02-16', '10 – 16 Şubat',                          900, 'USD', 'paylaşalım',   '12 boşluk',  2),
(1, 'Ramazan Bayramı',  '2026-03-18', '2026-03-24', '18 – 24 Mart (Ramazan Bayramı)',        1000, 'USD', 'paylaşalım',   '12 boşluk',  3),
(1, NULL,                '2026-04-10', '2026-04-16', '10 – 16 Nisan',                          950, 'USD', 'paylaşalım',   'boş',        4),
(1, NULL,                '2026-05-01', '2026-05-07', '01 – 07 Mayıs',                          950, 'USD', 'paylaşalım',   'boş',        5),
(1, 'Kurban Bayramı',   '2026-05-27', '2026-06-02', '27 Mayıs – 02 Haziran (Kurban)',        1100, 'USD', 'paylaşalım',   'boş',        6),
(1, NULL,                '2026-08-20', '2026-08-26', '20 – 26 Ağustos',                        800, 'USD', 'bayrama yakın','boş',        7),
(1, NULL,                '2026-09-20', '2026-09-26', '20 – 26 Eylül',                          800, 'USD', 'bayrama yakın','boş',        8),
(1, NULL,                '2026-10-20', '2026-10-26', '20 – 26 Ekim',                           800, 'USD', 'bayrama yakın','boş',        9),
(1, NULL,                '2026-11-20', '2026-11-26', '20 – 26 Kasım',                          800, 'USD', 'bayrama yakın','boş',        10),
(1, NULL,                '2026-12-20', '2026-12-26', '20 – 26 Aralık',                         800, 'USD', 'bayrama yakın','boş',        11),
-- Bali (tour 7)
(7, NULL,                '2026-03-08', '2026-03-11', '08 – 11 Mart',                          1650, 'USD', 'paylaşalım',   'boş',        1),
(7, NULL,                '2026-03-11', '2026-03-18', '11 – 18 Mart',                          1650, 'USD', 'paylaşalım',   'boş',        2),
(7, NULL,                '2026-03-17', '2026-03-24', '17 – 24 Mart',                          1650, 'USD', 'paylaşalım',   'boş',        3),
-- Dubai (tour 8)
(8, NULL,                '2026-04-20', '2026-04-26', '20 – 26 Nisan',                         1100, 'USD', 'paylaşım',     'boş',        1),
(8, NULL,                '2026-05-20', '2026-05-26', '20 – 26 Mayıs',                         1500, 'USD', 'paylaşım',     'boş',        2),
(8, NULL,                '2026-06-20', '2026-06-26', '20 – 26 Haziran',                       1100, 'USD', 'paylaşım',     'boş',        3),
(8, NULL,                '2026-08-10', '2026-08-16', '10 – 16 Ağustos',                       1100, 'USD', 'paylaşım',     'boş',        4),
-- GAP (tour 9) — TRY
(9, NULL,                '2026-05-02', '2026-05-05', '2 – 5 Mayıs',                          13500, 'TRY', 'paylaşalım',   'boş',        1),
(9, NULL,                '2026-05-28', '2026-06-01', '28 Mayıs – 1 Haziran',                 13500, 'TRY', 'paylaşım',     'boş',        2),
(9, NULL,                '2026-06-02', '2026-06-05', '2 – 5 Haziran',                        13500, 'TRY', 'paylaşalım',   'boş',        3),
(9, NULL,                '2026-08-02', '2026-08-05', '2 – 5 Ağustos',                        13500, 'TRY', 'paylaşım',     'boş',        4),
-- Umre Premium (tour 3) — şimdilik sadece 7 günlük
(3, '7 Gün',            '2026-06-18', '2026-06-24', '18 Haziran – Gidiş (7 Gün)',           1550, 'USD', NULL,           NULL,         1);

-- ============================================
-- BAŞLANGIÇ VERİLERİ (BLOGLAR)
-- ============================================

INSERT INTO blogs (slug, title, excerpt, content, category, image_url, date) VALUES
(
  'misirda-mutlaka-gorulmesi-gereken-5-yer',
  'Mısır''da Mutlaka Görülmesi Gereken 5 Eşsiz Yer',
  'Piramitlerden tapınaklara, Mısır seyahatinizde listenizin en başında olması gereken tarihi güzellikler.',
  '<h3>1. Giza Piramitleri ve Sfenks</h3>
<p>Mısır denilince akla ilk gelen yer şüphesiz Giza Piramitleri''dir. Dünyanın yedi harikasından biri olan Keops, Kefren ve Mikerinos piramitlerini görmek, hayatınızda bir kez yaşayabileceğiniz inanılmaz bir deneyimdir.</p>
<h3>2. Kahire Müzesi</h3>
<p>Antik Mısır''ın gizemini çözmek için Kahire Müzesi mükemmel bir başlangıç noktası. Firavunların hazinelerinden Tutankhamun''un maskesine kadar binlerce paha biçilmez eşya burada sergileniyor.</p>
<h3>3. Luxor Tapınağı</h3>
<p>Nil Nehri kıyısında ihtişamla yükselen Luxor Tapınağı, gündüz ve gece farklı bir büyüleyiciliğe sahip. Dev sütunların gölgesinde yürürken antik dünyanın nefesini hissedeceksiniz.</p>
<h3>4. Karnak Tapınağı</h3>
<p>Mısır''ın en büyük dini kompleksi olan Karnak, adeta devasa bir açık hava müzesi. Sütunlu salonu, dev heykelleri ve obeliskleri ile sizi zamanda yolculuğa çıkaracak.</p>
<h3>5. Kızıldeniz ve Sharm El Şeyh</h3>
<p>Tarihi gezilerin ardından Kızıldeniz''in serin sularına kendinizi bırakabilirsiniz. Sharm El Şeyh''te dalış yapmak, renkli mercan kayalıklarını keşfetmek unutulmaz bir deneyim olacak.</p>',
  'Gezi Rehberi',
  '/images/blogs/egypt.png',
  '12 Mart 2026'
),
(
  'umre-ibadeti-oncesi-hazirliklar',
  'Umre İbadeti İçin Bilmeniz Gereken Önemli Hazırlıklar',
  'Kutsal topraklara yapacağınız yolculuk öncesi ruhsal ve fiziksel olarak nasıl hazırlanmalısınız?',
  '<p>Umre yolculuğu, her Müslümanın hayatında derin izler bırakan kutsal bir yolculuktur. Bu kutlu sefer için yapılması gereken manevi ve maddi hazırlıklar oldukça önemlidir.</p>
<h3>Manevi Hazırlık</h3>
<p>Umreye niyet etmekle başlayan bu süreçte, tövbe etmek, helalleşmek ve bol bol dua okumak gereklidir. Kalbinizi dünyevi düşüncelerden arındırarak bu yolculuğa çıkmak, ibadetinizin feyzini artıracaktır.</p>
<h3>Maddi ve Pratik Hazırlıklar</h3>
<ul>
<li><strong>Sağlık Kontrolleri:</strong> Yolculuğa çıkmadan önce gerekli aşıları yaptırmak ve genel bir sağlık muayenesinden geçmek önemlidir.</li>
<li><strong>Kıyafet Seçimi:</strong> Mekke ve Medine''nin sıcak iklimine uygun, rahat ve pamuklu kıyafetler tercih edilmelidir. İhramlıklarınızı kalitesine dikkat ederek seçin.</li>
<li><strong>Bagaj Hazırlığı:</strong> İhtiyacınız olan kişisel bakım ürünlerini, rahat bir yürüyüş ayakkabısını ve sürekli kullandığınız ilaçları yanınıza almayı unutmayın.</li>
</ul>
<p>Sponsor Hanım Turizm olarak, 15 yıllık tecrübemizle Umre yolculuğunuzun her anında yanınızdayız. Uzman rehberlerimiz eşliğinde huzur dolu bir ibadet geçireceksiniz.</p>',
  'Rehber',
  '/images/blogs/premium.png',
  '5 Nisan 2026'
),
(
  'bali-gili-adalari-rehberi',
  'Bali''nin İncisi: Gili Adaları Seyahat Rehberi',
  'Turkuaz deniz ve beyaz kumsalların buluştuğu rüya gibi bir tatil rotası.',
  '<p>Endonezya''nın en popüler destinasyonu Bali''nin hemen yanı başında, motorlu taşıtların yasak olduğu üç küçük cennet adası bulunuyor: Gili Trawangan, Gili Meno ve Gili Air.</p>
<h3>Hangi Adayı Seçmeliyim?</h3>
<p>Her adanın kendine has bir karakteri var:</p>
<ul>
<li><strong>Gili Trawangan (Gili T):</strong> En büyük ve en hareketli ada. Eğer restoranlar, gece hayatı ve sosyal aktiviteler arıyorsanız burası tam size göre.</li>
<li><strong>Gili Air:</strong> Gece hayatı ve sessizlik arasında mükemmel bir denge sunuyor. Şık restoranlar ve güzel plajlar.</li>
<li><strong>Gili Meno:</strong> En sessiz ve romantik ada. Balayı çiftleri ya da tam bir kafa dinleme tatili isteyenler için ideal.</li>
</ul>
<h3>Aktiviteler</h3>
<p>Gili adalarındaki en büyük aktivite sualtı dünyası. Deniz kaplumbağalarıyla yüzmek, şnorkel yapmak ve dalış öğrenmek için mükemmel bir yerdesiniz. Plajlarda at binme ve bisikletle ada turu da diğer keyifli aktiviteler arasında.</p>',
  'Tatil',
  '/images/blogs/bali.png',
  '28 Şubat 2026'
),
(
  'kizildeniz-dalis-deneyimi',
  'Mısır Hurghada''da Kızıldeniz Dalış Deneyimi',
  'Dünyanın en iyi dalış noktalarından biri olan Kızıldeniz''in büyüleyici sualtı dünyasını keşfedin.',
  '<p>Mısır''ın sayfiye şehri Hurghada, yıl boyunca güneşli havası ve berrak Kızıldeniz suları ile ünlüdür. Ancak buranın asıl güzelliği suyun altında gizlidir.</p>
<h3>Renkli Mercan Resifleri</h3>
<p>Kızıldeniz, dünyanın en sıcak ve tuzluluk oranı açısından zengin denizlerinden biridir. Bu durum, inanılmaz bir mercan çeşitliliğine ve canlılığına ev sahipliği yapmasını sağlar. Rengarenk balıklar, vatozlar, deniz kaplumbağaları ve hatta yunuslar dalışlarınız sırasında size eşlik edebilir.</p>
<h3>Yeni Başlayanlar İçin Uygun Mu?</h3>
<p>Evet! Kızıldeniz''in berrak suları ve akıntısız koyları, ilk kez tüplü (Scuba) dalış yapacaklar için dünyanın en iyi başlangıç noktalarından biridir. Profesyonel eğitmenler eşliğinde "Discovery Dive" etkinliklerine katılabilir ve sualtının sihrine kapılabilirsiniz.</p>
<p>Mısır Hurghada turlarımızda yarım gün veya tam günlük dalış etkinliklerine katılarak tatilinize unutulmaz anılar ekleyebilirsiniz.</p>',
  'Aktivite',
  '/images/blogs/egypt.png',
  '15 Ocak 2026'
);
