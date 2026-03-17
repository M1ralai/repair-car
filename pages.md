# RepairCar Uygulaması Sayfa Yapısı ve İçerik Kılavuzu

`akis_semasi.md` dosyasındaki akışlara ve rol dağılımlarına göre oluşturulması gereken sayfalar ve bu sayfaların içerik detayları aşağıda rol bazlı olarak listelenmiştir.

---

## 1. Kullanıcı (Sürücü) Sayfaları

### 1.1. Giriş / Kayıt Sayfası (Login / Register)
* **İçerik:**
  * Telefon / E-posta ile kayıt olma ve giriş yapma formu.
  * "Misafir olarak devam et" butonu.

### 1.2. Ana Sayfa (Home)
* **İçerik:**
  * Konum izni isteme / bulunduğun konumu haritada görüntüleme alanı.
  * Temel aksiyon butonları:
    * "Servis Bul"
    * "Çekici Çağır"
    * "Arıza Bildir"

### 1.3. Kategori / Problem Seçimi Sayfası
* **İçerik:**
  * Sorun tipini seçmek için görsel kategoriler veya butonlar:
    * Motor, Elektrik, Lastik, Akü, Çekici ihtiyacı, Diğer vb.

### 1.4. Servis Listesi Sayfası
* **İçerik:**
  * Kullanıcının konumuna ve seçilen kategoriye göre uygun servislerin listesi.
  * Liste öğelerinde bulunacak bilgiler:
    * Servis adı
    * Kullanıcıya olan uzaklık
    * Uzmanlık alanı
    * Puanı (Yıldız vs.)
    * "RepairCar Onarım Noktası" onay durumu / rozeti
    * Açık/Kapalı durumu (Çalışma saatlerine göre)

### 1.5. Servis Detay Sayfası
* **İçerik:**
  * Seçilen servise ait detaylı bilgiler:
    * İletişim bilgileri
    * Hizmet alanları
    * Servis hakkında yapılan yorumlar
    * Çalışma saatleri
    * Varsa fiyat aralığı veya servis ücreti bilgisi
    * "RepairCar Onarım Noktası" ibaresi (Güven sembolü)
  * **Aksiyon:** "Yardım İste" (Talep Oluştur) butonu.

### 1.6. Talep Oluşturma Serüveni (Form)
* **İçerik:**
  * Araç bilgileri (Marka / Model)
  * Arıza açıklaması (Kullanıcının metin girdiği alan)
  * Konum (Haritadan teyit veya otomatik alınan)
  * Fotoğraf ekleme alanı (Opsiyonel)
  * İletişim numarası teyidi / girişi
  * **Aksiyon:** "Talebi Gönder" butonu.

### 1.7. Talep Durumu ve Takip Sayfası
* **İçerik:**
  * Gönderilen talebin anlık durumu: *Beklemede*, *Kabul edildi*, *Yolda*, *Tamamlandı*, *İptal* vs.
  * Servis ile iletişim seçenekleri: "Servisi Ara", "WhatsApp ile Yaz".
  * İhtiyaç halinde ek "Çekici Çağır" opsiyonu.

### 1.8. Tamamlanan İşlem Sonrası Değerlendirme Sayfası (Puanlama)
* **İçerik:**
  * Alınan hizmete 1-5 arası puan verme.
  * Yorum bırakma için metin alanı.
  * Hizmetle ilgili "Şikayet Bildir" seçeneği.

---

## 2. Servis / Usta Sayfaları

### 2.1. Başvuru / Onboarding Sayfası
* **İçerik:**
  * Sisteme ilk defa katılacak servisler için kayıt formu:
    * İşletme adı, Uzmanlık alanı, Telefon, Adres, Şehir/İlçe.
    * Hizmet verdiği markalar, Çalışma saatleri.
  * Gerekli resmi belgelerin yüklenmesi için dosya yükleme alanı.

### 2.2. Servis Giriş Sayfası (Login)
* **İçerik:**
  * Onaylanmış servislerin e-posta/telefon ve şifre ile giriş yapacağı ekran.

### 2.3. Gelen Talepler Ekranı (Servis Dashboard)
* **İçerik:**
  * Çevredeki sürücülerden anlık olarak düşen taleplerin listesi.
  * Talep önizleme bilgileri: Kullanıcı adı, Mesafe/Konum, Arıza türü ve notu.
  * **Aksiyonlar:** Talebi "Kabul Et", "Reddet" butonları.

### 2.4. Talep Detayı ve Durum Güncelleme Sayfası
* **İçerik:**
  * Sürücünün araç bilgileri, konum detayları (harita görünümü) ve kullanıcının eklediği notlar/fotoğraflar.
  * Sürücüyle iletişim kurmak için (Ara / WhatsApp) butonlar.
  * **Durum Güncelleme Paneli:** (Örneğin sırasıyla: *Talep Alındı*, *Müşteriyle İletişim Kuruldu*, *Servis Sürecinde*, *Tamamlandı* şeklinde güncelleyebilme).

### 2.5. Profil ve Performans Sayfası
* **İçerik:**
  * Servis bilgileri ve bu bilgileri güncelleme alanı (Telefon, çalışma saatleri vs.).
  * Performans verileri: Toplam tamamlanan iş, ortalama puan.
  * Müşterilerden gelen yorumlar ve varsa şikayetler sekmesi.

---

## 3. Çekici Hizmeti Sayfaları (MVP aşamasında servis ile benzer)
*(Not: Akış şemasına göre bu süreç servis akışının aynısı, sadece kategori bazında çekicilere özel basitleştirilmiş bir versiyonudur)*
* Çekici Kayıt Sayfası
* Gelen Çekici Talepleri (Liste)
* Durum Güncelleme (Yola Çıktım, Tamamladım)

---

## 4. Admin / Operasyon Sayfaları (Web Paneli)

### 4.1. Admin Giriş Sayfası
* **İçerik:** Güvenli yönetici giriş formu.

### 4.2. Admin Dashboard (Genel Bakış)
* **İçerik:**
  * Toplam istatistikler ve kartlar: Toplam kullanıcı sayısı, Toplam onaylı servis sayısı, Anlık aktif talepler, Tamamlanan işlemler, Çözülmeyi bekleyen şikayetler.
  * Anlık aktivitelerin listelendiği akış (Feed).

### 4.3. Servis Başvuruları Sayfası
* **İçerik:**
  * Sisteme yeni katılmak isteyen servislerin oluşturduğu başvuruların listesi.
  * Başvuru detayını görme (Evrak kontrolü vb.).
  * **Aksiyonlar:** Başvuruyu "Onayla", "Revize İste", "Reddet".

### 4.4. Servis Yönetimi ve Listesi Sayfası
* **İçerik:**
  * Sistemdeki tüm (Aktif/Pasif) servislerin listesi.
  * Şehir / Bölge bazlı filtreleme seçenekleri.
  * Kategori (Motor, Kaporta vb.) ve görünürlük ayarları düzenleme.
  * "RepairCar Onarım Noktası" özel rozeti verme/alma işlemi.
  * **Aksiyonlar:** Servisi düzenleme, pasife alma, silme.

### 4.5. Talepler Yönetimi Sayfası
* **İçerik:**
  * Sistem üzerinden geçen tüm taleplerin (geçmiş ve anlık) listesi.
  * Statü bazlı (Bekleyen, İptal edilen, Tamamlanan) filtreleme.
  * Problemli işlemleri (Örn: servisin uzun süre kabul edip yola çıkmadığı işler) takip etme ve manuel müdahale edebilme ekranı.

### 4.6. Denetim, Kalite ve Şikayetler Sayfası
* **İçerik:**
  * Kullanıcıların oluşturduğu tüm şikayetlerin listelendiği sayfa.
  * Servislerin aldıkları puanların listesi (En düşük puan alanları hızlıca görme).
  * **Kalite Yönetimi Aksiyonları:** Düşük puanlı servise uyarı gönderme, hesabı askıya alma veya sistemden tamamen çıkarma yetkisi.
