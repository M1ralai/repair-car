# Section 4 - Ana Geliştirme ve İcra Planı (Execution Plan)

Bu doküman, `front.md` dosyasında belirlenen **Clean Architecture (Temiz Mimari)** kurallarını anayasa kabul ederek, Admin / Operasyon Yönetim Paneli sayfalarının (`4.1`'den `4.6`'ya kadar olan Section-4 belgeleri) kodlanma aşamasında birbirine nasıl bağlanacağını ve hangi sıralama ile inşa edileceğini açıklar.

## 1. Mimari Prensipler (Anayasa Kuralları)

- **UI ve İş Mantığı Ayrımı:** API, fetch işlemleri veya karmaşık hook'lar sayfaların içine yazılmayacaktır.
- **Sadece Mock Data:** `Application` (uygulama) katmanı başlangıç düzeyinde devre dışıdır. Tüm sayfalar `infrastructure/mockData` dizininden gelen sahte (mock) statik verileri kullanacaktır.
- **Aptal Bileşenler (Dumb Components):** Tüm UI modülleri `presentation/components/` klasöründe yer alacak, sadece `props` ile çalışacak ve state/data fetch işlemleri barındırmayacaktır.
- **Yönetim Paneli İzolasyonu (Admin Layout):** Sürücü ve servis sayfalarından farklı olarak, Admin paneli sayfaları kendi özel `AdminLayout` (Sidebar + Topbar) sarmalayıcısına sahip olacak ve gereksiz render'lardan korunacaktır.

---

## 2. Adım Adım İcra ve Üretim Planı

Sayfaların ve içeriklerin hayata geçirilmesi aşağıdaki dört aşamalı düzende yapılmalıdır.

### ADIM 1: Domain Katmanı (Tiplerin ve Arayüzlerin Oluşturulması)
**Klasör:** `frontend/src/core/domain/`
*Section 4 markdown belgelerinde bahsedilen tüm sözlü veri nesneleri, Typescript arayüzleri olarak çıkartılacaktır:*

- `types/adminAuth.ts` -> **(Kaynak: 4.1)** `AdminLoginCredentials`, `AuthResponse`
- `types/dashboard.ts` -> **(Kaynak: 4.2)** `DashboardStats`, `ActivityFeedItem`
- `types/applications.ts` -> **(Kaynak: 4.3)** `ServiceApplication` ve durum bazlı (pending, approved, rejected) enum/union yapıları.
- `types/services.ts` -> **(Kaynak: 4.4)** `ServicePoint`, `ServiceFilterOptions`
- `types/requestsLog.ts` -> **(Kaynak: 4.5)** `RequestLog` (tüm ağdaki taleplerin yönetici takibi için özel formatı).
- `types/qualityPlatform.ts` -> **(Kaynak: 4.6)** `PlatformComplaint`, `QualityMetricsReport`

---

### ADIM 2: Infrastructure Katmanı (Mock Dataların Hazırlanması)
**Klasör:** `frontend/src/infrastructure/mockData/`
*Tüm ekranların besleneceği test veri setleri tek bir merkezden export edilecektir:*

- `mockAdminAuth.ts`: Örnek yönetici giriş bilgileri (Örn: admin@repaircar.com / password123).
- `mockDashboard.ts`: İstatistik kartlarını (kullanıcı/servis sayıları) ve anlık akış (feed) simülasyonunu barındıran veri kümesi.
- `mockServiceApplications.ts`: Yeni başvuran ve onaya düşmüş (pending) servislerin listesi.
- `mockServicePoints.ts`: Sistemdeki tüm aktif/pasif servislerin tutulduğu büyük veri listesi (filter ve arama bu listeyi kullanacak).
- `mockAllRequests.ts`: Sahada devam eden, iptal iptal edilen veya tamamlanan tüm işlemleri içeren talep kütüğü.
- `mockQualityandComplaints.ts`: İki farklı sekmeyi besleyecek şekilde hazırlanmış `Şikayet Listesi` ve `Servis Kalite Dereceleri` dizileri.

---

### ADIM 3: Presentation (Dumb Components) Üretimi
**Klasör:** `frontend/src/presentation/components/`
*Yönetim paneli standartlarında atomik bileşenler oluşturulacaktır. Bileşenler Admin ekranlarında tekrar kullanılabilir olmalıdır.*

**A. Form & Girdi Elemanları:**
- `TextInput` & `PasswordInput`: Giriş formu elemanları (4.1).
- `AdvancedFilterBar`: Şehir, ilçe, kategori (dropdown) ve statü seçimlerini aynı satırda birleştiren karmaşık filtreleme barı (4.4, 4.5).
- `ToggleSwitch`: Aktif/Pasif ayarı yapmak ve "RepairCar Onarım Noktası" rozetini tetiklemek için UI anahtarı (4.4).
- `DropdownMenu` (Üç Nokta Menü): Tablo satırlarına ait gizli işlem listesi (4.4, 4.6).

**B. Aksiyon ve Navigasyon:**
- `SidebarNavigation`: Yönetim panelinin sol bloğunda modüller arası geçiş sağlayan kalıcı menü (Tüm admin sayfaları).
- `TabsNav`: "Şikayetler" ile "Kalite Yönetimi" görünümleri arasında sayfa yenilenmeden sekmeler arası geçiş yapan komponent (4.6).
- `ActionButton`: İncele, Onayla, Reddet gibi küçük veya Notification göstergeli butonlar.

**C. Kartlar, Tablolar ve Gösterim Elemanları:**
- `DataTable`: Sayfalaması olan, sort/sıralama yapılabilen genel veri tablosu bileşeni (4.3, 4.4, 4.5, 4.6).
- `AccordionRow`: Tablodaki bir satıra tıklandığında alta doğru uzayarak şikayet açıklamasını okutan özel satır bileşeni (4.6).
- `StatisticCard`: Yukarıda yer alan ve büyük sayılarla (örn: Toplam Servis) istatistik veren UI bloku (4.2).
- `ActivityFeed`: Dashboard'daki son olay akışını yan yana dikey çizgide kronolojik dizen eleman (4.2).
- `StatusBadge`: İptal = Kırmızı, Tamamlandı = Yeşil gibi hap şeklinde (pill) renkli durum statü etiketleri (4.3, 4.5).
- `Highlight/WarningLayer`: Zamanı gecikmiş problemli talepleri tabloda kırmızı tonda uyaran arka plan komponenti (4.5).
- `Modal` / `DialogBox`: Servis başvuru evrakı inceleme, servise ceza kesme, veya problemli bir talebi iptal etme anlarında ekran üzerine açılan form taşıyıcı ana pencere modülü (Tüm admin sayfaları).

---

### ADIM 4: Sayfa ve Layout Birleştirme (Routing & Execution)
**Klasörler:** `frontend/src/presentation/layouts/` ve `frontend/src/pages/`
*Sayfalar sadece routing, layout ve veriyi componente bağlama işlemlerini yapar.*

#### Admin Yönlendirme ve Bağlantı Akışı:

1. **`AdminLoginPage.tsx` (Rota: `/admin/login`):**
   - Admin Layout'tan bağımsız düz ekrandır. Kimlik doğrulayıp (`mockAdminAuth.ts`) başarılıysa `/admin/dashboard`'a atar.
2. **`AdminDashboardPage.tsx` (Rota: `/admin/dashboard`):** 
   - `AdminLayout` içerisinde çalışır. `StatisticCard` ve `ActivityFeed` bileşenlerine veri pompalar.
3. **`ServiceApplicationsPage.tsx` (Rota: `/admin/applications`):** 
   - Tabloda bekleyen onaylar gösterilir. Satıra tıklandığında `Modal` açılıp başvuru belgeleri gösterilir, Onaylandıysa eleman `mockServicePoints` havuzuna aktarılmış gibi davranılır.
4. **`ServiceManagementPage.tsx` (Rota: `/admin/services`):** 
   - `AdvancedFilterBar` ve sistemdeki tüm servis listesi. `ToggleSwitch` veya `DropdownMenu` üzerinden rozet yetkilendirme / düzenleme aksiyonu tetiklenir.
5. **`RequestsManagementPage.tsx` (Rota: `/admin/requests`):** 
   - İstatistik öyküsü (Geçmiş işler vs). Problemli taleplere sahip `RequestLog` maddeleri `Highlight` bileşeni ile öne çıkarılır. "Müdahale Et" tıklandığında modal ile iş iptali/atama emri loglanır.
6. **`QualityAndComplaintsPage.tsx` (Rota: `/admin/quality`):** 
   - `TabsNav` iki ana view'ı değiştirir. 'Şikayetler' sekmesi seçiliyse `AccordionRow` destekli şikayet listesi yüklenir. 'Kalite Panosu' sekmesi seçiliyse en düşük puana sahip ustalar listelenir ve üç nokta ile hesabı askıya al (Suspend Modal) fonksiyonu çalıştırılır.

---

## 3. Genel Kontrol (CSS ve Kalite Güvencesi)
- Kullanıcı-sürücü tarafında olan tüm "Sky & Slate" tasarım iskeleti ve `style.css` global ayarları Admin konseptinde de sadelik için korunacaktır.
- Yönetim panelindeki yüksek miktarda verinin oluşturacağı beyaz boşluklar UI olarak sıkıştırma yerine Tailwind tarzı CSS değişkenleri kullanılarak global ölçülendirilecektir.
- Modal ve Dropdown elementleri sayfada `z-index` çakışmalarına (bug) mahal vermeyecek şekilde izole edilecek ve Layout dışında (`Portal` mantığıyla) inşa edilecektir.
