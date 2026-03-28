# Section 1 - Ana Geliştirme ve İcra Planı (Execution Plan)

Bu doküman, `front.md` dosyasında belirlenen **Clean Architecture (Temiz Mimari)** kurallarını anayasa kabul ederek, Sürücü / Kullanıcı sayfalarının (`1.1`'den `1.8`'e kadar olan Section-1 belgeleri) kodlanma aşamasında birbirine nasıl bağlanacağını ve hangi sıralama ile inşa edileceğini açıklar.

## 1. Mimari Prensipler (Anayasa Kuralları)

- **UI ve İş Mantığı Ayrımı:** API, fetch işlemleri veya karmaşık hook'lar sayfaların içine yazılmayacaktır.
- **Sadece Mock Data:** `Application` (uygulama) katmanı başlangıç düzeyinde devre dışıdır. Tüm sayfalar `infrastructure/mockData` dizininden gelen sahte (mock) statik verileri kullanacaktır.
- **Aptal Bileşenler (Dumb Components):** Tüm UI modülleri `presentation/components/` klasöründe yer alacak, sadece `props` ile çalışacak ve state/data fetch işlemleri barındırmayacaktır.
- **Sürücü Akışı İzolasyonu:** Sürücü deneyimi genelde mobil ağırlıklı olacağından, UI bileşenleri mobil öncelikli (mobile-first) ve App-like (uygulama hissiyatlı, örn: BottomNavigation) yaklaşımla inşa edilecektir.

---

## 2. Adım Adım İcra ve Üretim Planı

Sayfaların ve içeriklerin hayata geçirilmesi aşağıdaki dört aşamalı düzende yapılmalıdır.

### ADIM 1: Domain Katmanı (Tiplerin ve Arayüzlerin Oluşturulması)
**Klasör:** `frontend/src/core/domain/`
*Section 1 markdown belgelerinde bahsedilen tüm sözlü veri nesneleri, Typescript arayüzleri olarak çıkartılacaktır:*

- `types/userAuth.ts` -> **(Kaynak: 1.1)** `UserLoginCredentials`, `GuestSession`
- `types/category.ts` -> **(Kaynak: 1.3)** `ServiceCategory` (Motor, Elektrik, Lastik vb.), `ProblemType`
- `types/servicePoint.ts` -> **(Kaynak: 1.4, 1.5)** `ServicePointDetail` (Servise olan uzaklık, uzmanlık, puan, rozet durumu, çalışma saatleri vb.)
- `types/request.ts` -> **(Kaynak: 1.6, 1.7)** `HelpRequestForm` (Araç modeli, not, konum, fotoğraflar, kasko talebi), `RequestTrackerStatus` (Beklemede, Kabul edildi, Yolda, Tamamlandı, İptal)
- `types/review.ts` -> **(Kaynak: 1.8)** `CustomerReview` (Puan ve yorum metni), `Complaint`
- `types/premiumFeatures.ts` -> **(Kaynak: 1.9, 1.10, 1.11, 1.13)** `VehicleProfile` (Araç garajı objesi), `ServiceRequestHistoryItem` (Geçmiş dökümü), `PriceCatalog` (Oto onarım tahmini fiyat endeksi).

---

### ADIM 2: Infrastructure Katmanı (Mock Dataların Hazırlanması)
**Klasör:** `frontend/src/infrastructure/mockData/`
*Tüm ekranların besleneceği test veri setleri tek bir merkezden export edilecektir:*

- `mockUserAuth.ts`: Örnek kullanıcı profili ve misafir giriş simülasyonu verileri.
- `mockCategories.ts`: Sürücünün ana sayfadan seçeceği "Arıza Tipleri" listesi (ikon isimleriyle birlikte).
- `mockServiceList.ts`: Sürücünün konumuna göre listelenecek, onaylı/onaysız ve farklı uzaklıklardaki 5-10 adet örnek servis noktası nesnesi.
- `mockActiveRequest.ts`: Sürücünün anlık olarak oluşturduğu ve "Yolda" veya "Beklemede" olan talep simülasyonunu barındıran veri kümesi.
- `mockServiceDetails.ts`: Seçilen servisin detay sayfasına basılacak detaylı profil verisi (Müşteri yorumları, çalışma saatleri, fiyat tarifeleri vb.).
- `mockPremiumData.ts`: Kullanıcının garajındaki kayıtlı araçlar (`mockVehicles`), servis history geçmişi (`mockServiceHistory`), favoriye aldığı servislerin ID dizisi (`mockFavorites`) ve tahmini ücret fiyatlandırma endeksi.

---

### ADIM 3: Presentation (Dumb Components) Üretimi
**Klasör:** `frontend/src/presentation/components/`
*Mobil öncelikli tasarım sistemi kurallarına uygun yeniden kullanılabilir atomik bileşenler oluşturulacaktır.*

**A. Form & Girdi Elemanları:**
- `SearchInput` & `LocationPicker`: Açık adres seçimi veya GPS konum bileşeni (1.2, 1.6).
- `CategoryGrid`: Dinamik ikonlu, dokunmatik dostu arıza kategori seçici buton dizisi (1.3).
- `TextArea` & `ImageUploader`: Talep formunda sorunun detaylı anlatımı ve fotoğraf eklenmesi için form modülü (1.6).
- `ReviewStarsInput`: 1-5 arası tam ve yarım yıldız seçici etkileşimli bileşen (1.8).

**B. Aksiyon ve Navigasyon:**
- `BottomNavigation`: Mobil uygulama hissi veren, ekranın altında daimi duran yönlendirme menüsü (Ana sayfa, Taleplerim, Profilim vb.).
- `CallToActionButton` (CTA): "Yardım İste", "Talebi Gönder", "Misafir Devam Et" gibi büyük puntolu ve dikkat çekici primary butonlar.
- `ServiceContactButton`: "Servisi Ara" veya "WhatsApp ile Yaz" gibi dış bağlantılı veya hızlı tetiklenen yuvarlak/kompakt butonlar (1.7).

**C. Kartlar ve Gösterim Elemanları:**
- `ServiceListCard`: Liste görünümünde servisin adını, uzaklığını, yıldızını ve "RepairCar Onarım Noktası" rozetini taşıyan yatay veya dikey kart modülü (1.4, 1.11 Favoriler de bunu kullanır).
- `ServiceDetailHeader`: Servisin detay sayfasına girildiğinde tepede profil fotoğrafı/görseli ile servis bilgilerini sunan, favoriye eklenebilir header bileşeni (1.5).
- `RequestTracker`: Beklemede -> Kabul Edildi -> Yolda adımlarını yatay veya dikey bir çizgide `Stepper` / `Timeline` olarak gösteren bilgi bloğu (1.7).
- `StatusMap`: Kullanıcının konumunu (mavi nokta) ve yardıma gelen servisin konumunu (kırmızı pin) ayni haritada temsil eden iframe/mock harita bileşeni (1.7).
- `PremiumCards & Informational`: Garaj eklentisi için `VehicleCard`, geçmiş özeti için `HistoryItem`, tahmini fiyat satır göstergesi `EstimateRow` ve acil durum rehberi için `EmergencyAccordion`.

---

### ADIM 4: Sayfa ve Layout Birleştirme (Routing & Execution)
**Klasörler:** `frontend/src/presentation/layouts/` ve `frontend/src/pages/`
*Sayfalar sadece routing, layout (tercihen `MobileAppLayout`) ve veriyi componente bağlama (prop injection) işlemini yapar.*

#### Uygulama Yönlendirme ve Bağlantı Akışı:

1. **`UserLoginPage.tsx` (Rota: `/login`):**
   - Telefon veya E-posta giriş formu ile `mockUserAuth.ts` verilerini doğrular. Misafir girişi opsiyonu taşır. Başarı durumunda `/home` rotasına yönlendirir.
2. **`HomePage.tsx` (Rota: `/home`):**
   - `MobileAppLayout` (BottomNavigation ile) içerisinde çalışır. Kullanıcının haritadaki yerini tespit eder ve "Servis Bul", "Çekici Çağır" gibi ana aksiyonlara yönlendirir. (Geçiş -> `/category-selection`)
3. **`CategorySelectionPage.tsx` (Rota: `/category-selection`):**
   - Sorunun tipini seçtiren sayfadır. `CategoryGrid` modülü `mockCategories.ts`'den beslenir. "Motor" seçilirse `/service-list` sayfasına parametreyle geçer.
4. **`ServiceListPage.tsx` (Rota: `/service-list`):**
   - `mockServiceList.ts` içindeki veriler mesafe ve kategoriye göre listelenir (`ServiceListCard`). Bir servise tıklandığında `/service-detail/:id` açılır.
5. **`ServiceDetailPage.tsx` (Rota: `/service-detail/:id`):** 
   - İlgili id'ye ait detaylar `mockServiceDetails.ts`'ten çekilip `ServiceDetailHeader` ve iletişim kısımlarına basılır. En alttaki `CallToActionButton` ile `/create-request` sayfasına yönlendirilir.
6. **`CreateRequestPage.tsx` (Rota: `/create-request`):**
   - Araç bilgisi, arıza notu ve fotoğrafların (`TextArea`, `ImageUploader`) girildiği form ekranı. "Talebi Gönder" denildiğinde iş oluşur ve `/request-tracking/:reqId` kısmına gidilir.
7. **`RequestTrackingPage.tsx` (Rota: `/request-tracking/:reqId`):**
   - Bekleme, Yola Çıkma süreçleri `RequestTracker` ile anlık takip edilir. Usta ile WhatsApp/Arama butonları aktiftir. Servis işlemi "Tamamlandı" işaretlediğinde otomatik olarak `/add-review` ekranı tetiklenir.
8. **`AddReviewPage.tsx` (Rota: `/add-review`):**
   - `ReviewStarsInput` bileşeni ile hizmet puanlanır, metin alanı doldurulur ve Home sayfasına (`/home`) geri dönülür.
9. **`PremiumEklentiSayfalari.tsx`:** (1.9 - 1.13 arası ek ekranlar)
   - `/garage` (Garajım ve araç ekleme formları), `/history` (Geçmiş faturalı iş dökümleri), `/favorites` (Sadece kalplenmiş servislerin süzüldüğü modül), `/sos-guide` (Çevrimdışı okunabilen acil durum makaleleri), `/price-estimator` (Öngörülen masraf hesaplama motoru). Alt (BottomNavigation) ve Profil menüsü üzerinden doğrudan birbiriyle örülü sekmeler şeklinde entegre edilir.

---

## 3. Genel Kontrol (CSS ve Kalite Güvencesi)
- Dosyaların ve ekranların tamamı `front.md` kurallı genel `style.css` (Sky & Slate Tasarım Konsepti) ile şekillenecektir.
- Çoğunlukla mobil öncelikli geliştirileceği için padding (p-4, px-4) kalınlıkları tık alanlarını (touch target) büyütecek standartta (min 44px kuralı) verilecek.
- Hover animasyonlarından ziyade mobil cihazlara özgü tıklama (onClick feedback) veya yumuşak sayfa geçişleri (Framer Motion ile y-axis kaymaları) eklenecektir.
