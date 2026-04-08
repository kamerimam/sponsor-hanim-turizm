-- ============================================
-- SPONSOR HANIM TURİZM - SUPABASE VERİTABANI
-- Bu SQL'i Supabase Dashboard > SQL Editor'de çalıştırın
-- ============================================

-- 1. TURLAR TABLOSU (Ana tur bilgileri)
CREATE TABLE tours (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL,           -- "Mısır", "Umre", "Bali", "Hac", "Kombine"
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  duration VARCHAR(50),                -- "6 Günlük", "14 Günlük"
  price VARCHAR(50) NOT NULL,          -- "800 USD", "4.500 USD"
  image_url TEXT,                       -- Görsel URL
  description TEXT,
  detail_link VARCHAR(255),            -- "/turlar/misir-hurghada-kahire"
  is_active BOOLEAN DEFAULT true,      -- Turu gizlemek/göstermek için
  sort_order INT DEFAULT 0,            -- Sıralama
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

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

-- ============================================
-- BAŞLANGIÇ VERİLERİ (TURLAR)
-- ============================================

INSERT INTO tours (id, type, title, subtitle, duration, price, image_url, description, detail_link, sort_order) VALUES
(1, 'Mısır', 'Mısır Turu — Hurghada & Kahire', 'Efsanevi Kahire, Masmavi Kızıldeniz', '6 Günlük', '800 USD', '/images/tours/egypt.png', 'Binlerce yıllık medeniyetin izleri, bugün dalış maskeni ve çöl rüzgarıyla bir arada. Tek turda hem piramitleri hem de mercanları görün.', '/turlar/misir-hurghada-kahire', 1),
(6, 'Mısır', 'Mısır Turu — Sharm El Şeyh & Kahire', '5★ Falcon Naama Star ile Sonsuz Macera', '6 Günlük', '900 USD', '/images/tours/sharm.png', 'Gündüz piramitlerin gölgesinde, geceleri Kızıldeniz''in kıyısında. 5 yıldızlı konforda unutulmaz bir Mısır deneyimi.', '/turlar/misir-sharm-kahire', 2),
(7, 'Bali', 'Bali & Gili Adaları Turu', 'Cennet Bir Adada Kaybolun', '7 Günlük', '1.650 EUR', '/images/tours/bali.png', 'Pirinç teraslarının arasında bisiklet, okyanus üzerindeki tapınaklarda gün batımı, Gili''de kaplumbağalarla dalış... Bali sadece bir tatil değil — bir dönüşüm.', '/turlar/bali-gili-adalari', 3),
(2, 'Umre', 'Umre Turu (Ekonomik)', 'Kutsal Topraklarda Huzur', '14 Günlük', '2,800 USD', '/images/tours/pilgrims.png', 'Mekke ve Medine''de ekonomik ama konforlu bir ibadet deneyimi.', NULL, 4),
(3, 'Umre', 'Umre Turu (Premium)', 'VIP Kutsal Yolculuk', '14 Günlük', '4.500 USD', '/images/tours/hero-bg.png', 'Kabe manzaralı 5 yıldızlı oteller ve özel VIP transferler eşliğinde en özel umre deneyimi.', '/turlar/umre-premium', 5),
(4, 'Hac', 'Hac Turu 2025', 'Ömrün En Güzel Yolculuğu', '21 Günlük', '7.500 USD', '/images/tours/pilgrims.png', 'Uzman din görevlileri eşliğinde, Arafat''tan Mina''ya eksiksiz bir hac farizası. 2025 kontenjanları sınırlıdır.', '/turlar/hac-turu-2025', 6),
(5, 'Kombine', 'Mısır + Umre Kombine', 'Çifte Bereket Turu', '21 Günlük', '5.800 USD', '/images/tours/egypt.png', 'Piramitlerin gölgesinden Kabe''nin huzuruna: tek yolculukta iki medeniyetin büyüsü.', '/turlar/misir-umre-kombine', 7);

-- Sequence'i düzelt (id'ler manual girildiği için)
SELECT setval('tours_id_seq', (SELECT MAX(id) FROM tours));

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
