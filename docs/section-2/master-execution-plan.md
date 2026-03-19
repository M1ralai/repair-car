# Section 2 - Ana Geliştirme ve İcra Planı (Execution Plan)

Bu doküman, `front.md` dosyasında belirlenen **Clean Architecture (Temiz Mimari)** kurallarını anayasa kabul ederek, Servis ve Çekici Kullanıcılarına ait sayfaların (`2.1`'den `3.0`'a kadar olan Section-2 belgeleri) kodlanma aşamasında birbirine nasıl bağlanacağını ve hangi sıralama ile inşa edileceğini açıklar.

## 1. Mimari Prensipler (Anayasa Kuralları)

- **UI ve İş Mantığı Ayrımı:** API, fetch işlemleri veya karmaşık hook'lar sayfaların içine yazılmayacaktır.
- **Sadece Mock Data:** `Application` (uygulama) katmanı başlangıç düzeyinde devre dışıdır. Tüm sayfalar `infrastructure/mockData` dizininden gelen sahte (mock) statik verileri kullanacaktır.
- **Aptal Bileşenler (Dumb Components):** Tüm UI modülleri `presentation/components/` klasöründe yer alacak, sadece `props` ile çalışacak ve state/data fetch işlemleri barındırmayacaktır.
- **Role Dayalı Render (Servis vs Çekici):** Çekici (`3.0`) ve Servis (`2.1` - `2.5`) yapıları aynı görsel bileşenleri (Component) kullanacak, sadece arayüzde gösterilen metinler ve veri tipleri `Kullanici_Rolu` (Servis veya Cekici) değişkenine göre uyarlanacaktır. Bu sayede kod tekrarı (WET) önlenecektir.

---

## 2. Adım Adım İcra ve Üretim Planı

Sayfaların ve içeriklerin hayata geçirilmesi aşağıdaki dört aşamalı düzende yapılmalıdır.

### ADIM 1: Domain Katmanı (Tiplerin ve Arayüzlerin Oluşturulması)
**Klasör:** `frontend/src/core/domain/`
*Section 2 markdown belgelerinde bahsedilen tüm sözlü veri nesneleri, Typescript arayüzleri olarak çıkartılacaktır:*

- `types/auth.ts` -> **(Kaynak: 2.2)** `LoginCredentials`, `SessionResponseState`
- `types/onboarding.ts` -> **(Kaynak: 2.1, 3.0)** `BasvuruFormuData` (Çekici için taşıma kapasitesi ve araç tipi opsiyonel eklentilerini kapsayacak esnek type union yapısı kullanılacaktır).
- `types/request.ts` -> **(Kaynak: 2.3, 2.4, 3.0)** `TalepListesiItem`, `KapsamliTalepDetayi`, ve lokasyon koordinat tipleri.
- `types/profile.ts` -> **(Kaynak: 2.5)** `ProfilVerisi`, `PerformansMetrikleri`, `MusteriYorumu`

---

### ADIM 2: Infrastructure Katmanı (Mock Dataların Hazırlanması)
**Klasör:** `frontend/src/infrastructure/mockData/`
*Tüm ekranların besleneceği test veri setleri tek bir merkezden export edilecektir:*

- `mockAuth.ts`: Örnek başarılı token ve oturum rolleri.
- `mockRequests.ts`: Dashboard'da listelenecek (en az 3 servis, 2 çekici senaryolu) talep kartları verisi.
- `mockRequestDetails.ts`: `mockRequests.ts` içerisindeki ID'lerle eşleşen, kapsamlı detay bilgilerini (Müşteri GPS konumu, araç fotoları vb.) barındıran obje.
- `mockProfile.ts`: Kişisel işletme verileri, istatistik metrikleri ve geçmişteki işlere ait yorum listesi.

---

### ADIM 3: Presentation (Dumb Components) Üretimi
**Klasör:** `frontend/src/presentation/components/`
*Tasarım sistemi kurallarına uygun yeniden kullanılabilir atomik bileşenler oluşturulacaktır. Hiçbiri bir sayfaya özel (spesifik) geliştirilmemelidir.*

**A. Form & Girdi Elemanları:**
- `TextInput`: Metin ve gizlenebilir Şifre alanları (2.1, 2.2).
- `SelectBox` / `Dropdown`: Vasıta/marka/uzmanlık listeleme işlemleri (2.1).
- `TimePicker`: Mesai saatleri seçici (2.1).
- `FileUploader`: Drag & Drop görselli resim/belge yükleyici (2.1).
- `ToggleSwitch`: Online/Offline durumu değiştirmek için anahtar (2.3).
- `CompactFormRow`: Profil de tıklandığında değişime açılan kompakt liste elemanı (2.5).

**B. Aksiyon ve Navigasyon:**
- `Button`: Primary, Secondary ve Destructive varyasyonlarında (Yüklenme / Loading göstergeli).
- `StickyBottomBar`: Mobil görünümler için sayfanın altına sabit, kaydırmadan etkilenmeyen buton barı (2.4).
- `TabBar`: Sayfada gezinmeyi sağlayan, içerik sekmesi butonları (2.3, 2.5).

**C. Kartlar ve Gösterim Elemanları:**
- `RequestCard`: Harita uzaklığı, özet bilgiler ve `Kabul Et`/`Reddet` butonlu talep modülü (2.3).
- `StatisticCard`: Ortalama skor/büyük sayılar gösteren bilgi kutucuğu (2.5).
- `ReviewCard`: Avatar, yıldız puaları ve müşteri yorumunu taşıyan görsel kutu (2.5).
- `Badge`: Mesafe/Zaman göstergeli küçük etiketler. Yanıp sönen "Acil" tipi eklenebilir.
- `Stepper` (Timeline): İşin "Talep Aldım" aşamasından "Tamamlandı" aşamasına kadar kronolojik durumu gösteren basamak bileşeni (2.4, 3.0).
- `ImageGallery`: Araç veya arıza bölgesi medyalarını büyütülebilir gösteren resim galeri yapısı (2.4).
- `MapView`: İşaretleyici iğnesi (Marker) olan statik veya dummy harita iframe bileşeni (2.4).
- `RatingStars`: 1-5 arası oranlı doldurulmuş yıldız seti (2.5).

---

### ADIM 4: Sayfa ve Layout Birleştirme (Routing & Execution)
**Klasörler:** `frontend/src/presentation/layouts/` ve `frontend/src/pages/`
*Sayfalar sadece routing, layout ve veriyi componente bağlama ("prop drilling" / "injection") işlemini yapar.*

#### Uygulama Yönlendirme ve Bağlantı Akışı:
Uygulamanın genel kontrol mekanizması `react-router` veya benzer yönlendiriciler ile aşağıdaki akışta birbirine kenetlenmelidir:

1. **`OnboardingPage.tsx` (Rota: `/basvuru`):**
   - Üstünde sadece logo ve form sihirbazını (Wizard) tutar. Veriler tamamsa başarılı ibaresi gösterir.
2. **`LoginPage.tsx` (Rota: `/login`):**
   - E-posta/Şifre ile `mockAuth.ts` verilerini doğrular. Başarılıysa doğrudan `/dashboard` rotasına köprü atar.
3. **`DashboardPage.tsx` (Rota: `/dashboard`):** 
   - *Tüm servis/çekici taleplerinin kalbi!* `MainLayout` içerisinde çalışır.
   - Sayfa yüklendiğinde `mockRequests.ts` içerisindeki veriyi `Array.map()` ile okuyup, ekrana bir dizi `RequestCard` basar. Seçili kullanıcı rolüne (Servis mi Çekici mi) göre ilgili talepler filtre edilir (3.0 vs 2.3 farklılığı).
   - Servis ya da Çekici *Kabul Et* tuşuna bastığı anda `/talep-detay/:talepId` sayfasına **yönlendirilir**.
4. **`RequestDetailPage.tsx` (Rota: `/talep-detay/:id`):** 
   - İlgili id'ye ait `mockRequestDetails.ts` çekilir. Ekranda `MapView`, aracın durumu ve `ImageGallery` oluşturulur.
   - En alta eklenen `StickyBottomBar`'daki statü (`Stepper`) güncellenip iş tamamen kapandığında (örn: Araç Teslim Edildi), sistem ustayı geri `/dashboard`'a yönlendirerek yeni iş almaya hazır hale getirir.
5. **`ProfilePage.tsx` (Rota: `/profil`):** 
   - `DashboardPage`'in üst menüsünden ulaşılan bu ekran `TabBar` ile veri kümelerine bölünmüştür.
   - "Bilgilerim", "Performans" veya "Değerlendirmeler" geçişlerine göre `mockProfile.ts` verileri ilgili `CompactFormRow`, `StatisticCard` veya `ReviewCard` bileşenlerine enjekte edilir.

---

## 3. Genel Kontrol (CSS ve Kalite Güvencesi)
- Dosyaların ve ekranların tamamı `front.md` kurallı genel `style.css` (Tasarım Sistemi Değişkenleri) ile şekillenecektir.
- Renkler, boşluklar, font boyutları sayfaya özel ad-hoc ('inline style' veya tek atımlık css) kullanılmayıp hep ":root" üzerinden gelen global Tailwind / CSS Variables yapısına bağlanacaktır.
- Böylelikle "Sky & Slate" tasarım konsepti hiç kod tekrarı yapılmadan (dry principle) sayfalara yedirilmiş olur.
