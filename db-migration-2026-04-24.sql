-- ============================================
-- SPONSOR HANIM TURİZM — DB MIGRATION 2026-04-24
-- ============================================
-- SEO denetimi sonrası tutarsızlık düzeltmeleri.
-- Supabase SQL Editor'dan çalıştırın.
-- ============================================

-- ── 1. HAC TURU: 2025 → 2026 ──────────────
UPDATE tours
SET
  title = 'Hac Turu 2026',
  subtitle = 'Ömrün En Güzel Yolculuğu',
  description = 'Uzman din görevlileri eşliğinde, Arafat''tan Mina''ya eksiksiz bir hac farizası. 2026 kontenjanları sınırlıdır.',
  detail_link = '/turlar/hac-turu-2026'
WHERE id = 4;

-- ── 2. BALİ: Currency düzeltme (USD olmalı, TL/EUR değil) ──
-- Not: supabase-setup.sql'de zaten "1.650 USD" yazıyor; price kolonu VARCHAR olduğu için
-- aşağıdaki satır sadece güvenlik için — ek currency tutarsızlığı bulunursa kullanılır.
UPDATE tours
SET price = '1.650 USD'
WHERE id = 7 AND price NOT LIKE '%USD%';

-- Tour dates tablosunda Bali currency USD olarak ayarlandığından emin olalım:
UPDATE tour_dates
SET currency = 'USD'
WHERE tour_id = 7 AND currency <> 'USD';

-- ── 3. DUBAI: detail_link eklenmesi ──
UPDATE tours
SET detail_link = '/turlar/dubai-turu'
WHERE id = 8;

-- ── 4. GAP: detail_link eklenmesi ──
UPDATE tours
SET detail_link = '/turlar/gap-turu'
WHERE id = 9;

-- ── 5. SETTINGS: Instagram URL düzeltme ──
-- Eski: https://instagram.com/sponsorhanim
-- Yeni: https://www.instagram.com/sponsorhanimtravel
UPDATE settings
SET value = '{"instagram":"https://www.instagram.com/sponsorhanimtravel","facebook":"","youtube":""}'::jsonb
WHERE key = 'socialLinks';

-- ── 6. SETTINGS: İletişim bilgileri sync (frontend ile) ──
UPDATE settings SET value = '"+90 544 498 62 08"'::jsonb WHERE key = 'phone';
UPDATE settings SET value = '"+90 544 498 62 08"'::jsonb WHERE key = 'whatsapp';
UPDATE settings SET value = '"sponsorhanim@gmail.com"'::jsonb WHERE key = 'email';
UPDATE settings SET value = '"Büyük Toygar Han, Hacı Bayram, Alsancak Sk. D:1/64, 06050 Altındağ/Ankara"'::jsonb WHERE key = 'address';
UPDATE settings SET value = '"Pazartesi - Cumartesi: 09:00 - 18:00"'::jsonb WHERE key = 'workingHours';

-- ── 7. UMRE PREMIUM: iki paketi yansıtacak güncelleme ──
-- Tour 3 = Premium Umre. Frontend'de iki paket (7 gün ve 14 gün) gösterilir.
-- Mevcut kayıt 7 gün olarak kalsın. duration alanı iki paketi anlatacak şekilde güncellenir.
UPDATE tours
SET
  duration = '7 veya 14 Günlük',
  subtitle = 'İki Paket Seçenekli VIP Umre',
  description = 'İki paket seçeneğimiz var: Premium 7 Gün (1.550 USD) ve VIP 14 Gün (4.500 USD). Her iki pakette de Kabe manzaralı 5 yıldızlı oteller ve uzman din görevlisi rehberliği dahildir.',
  price = '1.550 USD''den başlayan'
WHERE id = 3;

-- Opsiyonel: 14 günlük paket için tour_dates kayıtları da eklenebilir (admin panelden daha kolay).
-- Aşağıdaki satırlar örnek olarak verilmiştir, yorum satırı; gerekirse açın:
-- INSERT INTO tour_dates (tour_id, label, start_date, end_date, date_text, price, currency, sort_order) VALUES
-- (3, '14 Gün VIP', '2026-06-11', '2026-06-24', '11 – 24 Haziran (14 Gün VIP)', 4500, 'USD', 2);

-- ── 8. KONTROL ──
-- Aşağıdaki sorgularla değişiklikleri doğrulayabilirsiniz:
-- SELECT id, title, duration, price, detail_link FROM tours ORDER BY sort_order;
-- SELECT key, value FROM settings WHERE key IN ('socialLinks', 'phone', 'email', 'address');
-- SELECT tour_id, currency, COUNT(*) FROM tour_dates WHERE tour_id = 7 GROUP BY tour_id, currency;
