-- Images bucket: Herkes okuyabilsin (görselleri görebilsin)
CREATE POLICY "Gorseller herkese acik"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'images');

-- Images bucket: Herkes yükleyebilsin (geçici - admin paneli yapınca kısıtlanacak)
CREATE POLICY "Gorsel yukleme izni"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'images');

-- Images bucket: Herkes güncelleyebilsin
CREATE POLICY "Gorsel guncelleme izni"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'images');

-- Images bucket: Herkes silebilsin
CREATE POLICY "Gorsel silme izni"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'images');
