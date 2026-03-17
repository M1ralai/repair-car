# Frontend Clean Architecture & Folder Structure

Projenin sürdürülebilir, ölçeklenebilir ve test edilebilir olması için **Clean Architecture (Temiz Mimari)** prensiplerini frontend tarafına uyarlıyoruz. Amacımız, UI bileşenlerini (React) iş mantığından (Business Logic) ve dış servislerden (API, LocalStorage, vb.) izole etmektir.

Bu yapı sayesinde:
1. UI bileşenleri sadece veriyi göstermekle ilgilenir.
2. İş mantığı framework bağımsız hale gelir.
3. Dış servisler veya API değiştiğinde UI etkilenmez.

---

## 📂 Klasör Yapısı (Folder Structure)

Projede `src` altında ana katmanları temsil eden klasörler bulunacaktır:

```text
frontend/src/
├── core/                  # İş mantığı ve Domain modeli (Çekirdek)
│   ├── domain/            # Temel tipler, arayüzler ve modeller (Entities)
│   └── application/       # Use Case'ler, Custom Hook'lar ve Servisler
├── infrastructure/        # Dış dünya entegrasyonları, API istekleri
│   ├── api/               # Axios vb. kütüphanelerle yapılan HTTP istekleri
│   ├── store/             # Global durum yönetimi konfigürasyonları (Zustand, Redux)
│   └── adapters/          # API'den gelen veriyi Domain modeline çeviren yapılar
├── presentation/          # Kullanıcı Arayüzü (UI) Katmanı
│   ├── components/        # Yeniden kullanılabilir, state barındırmayan genel bileşenler
│   ├── features/          # Belirli konulara göre ayrılmış karmaşık, state barındıran yapılar
│   └── layouts/           # Sayfa iskeletleri, Sidebar, Header gibi genel yapılar
├── pages/                 # Routing için kullanılan ana sayfalar
├── assets/                # Resimler, ikonlar, fontlar ve statik dosyalar
└── style.css              # Global stiller ve tasarım değişkenleri (Renkler, Padding, vb.)
```

---

## 🏛️ Katmanların Açıklamaları (Layers)

### 1. Domain Katmanı (`core/domain`)
Sistemin en soyut kısmıdır. Dış dünyadan veya React'tan tamamen bağımsızdır. Uygulamanın **kalbini** oluşturur.
- **Tipler / Arayüzler (Interfaces):** Uygulamadaki veri yapılarının (Örn: `Habit`, `Vehicle`, `User`) tanımı burada yapılır.
- Sadece saf JavaScript/TypeScript kodları içerir. İçerisinde React, Axios veya başka bir kütüphane **bulunmaz**.

### 2. Application Katmanı (`core/application`)
Domain kurallarını kullanarak belirli eylemleri (Use Cases) gerçekleştiren katmandır.
- **Hooks & Services:** React ortamı için data çekme ve yönetme süreçlerini kapsar (Örn: `useFetchHabits`, `useVehicleData`).
- UI'ın doğrudan API katmanına gitmesini engelleyerek arada bir köprü görevi görür.

### 3. Infrastructure Katmanı (`infrastructure`)
Dış dünya ile (Backend API, Browser API'leri, LocalStorage) iletişim kuran kısımdır.
- **API Clients:** Backend ile HTTP bağlantıları (Axios instances, Fetch vb.).
- Eğer API'dan dönen veri ui için uygun değilse, **Adapters** burada çalışıp veriyi domain formatına dönüştürür.

### 4. Presentation Katmanı (`presentation` & `pages`)
Sadece ekranın nasıl görüneceği ile ilgilenir, iş kurallarını bilmez. Gerekli veriyi hooks veya store yardımıyla çeker.
- **Components:** Örneğin, `ai.md` içerisinde tanımlanan *Buttons, Modals, Cards* bu klasörde yer alır.
- **Aptal Bileşenler (Dumb Components):** State tutmazlar, sadece props alarak davranırlar.
- **Sayfalar (Pages):** Her sayfa, gereken veri akışını infrastructure veya application'dan çekip component'lara dağıtan **Akıllı (Smart)** kapsayıcılardır.

---

## 🎨 Tasarım ve Style Yaklaşımı (`style.css`)

Tasarım kararları ve global değişkenler `ai.md` dokümanından beslenerek `style.css` dosyasına çıkartılmıştır.
- Saf renk kodları (Hex vb.) class isimlerinden ve inline stillerden arındırılmış, CSS custom variables (`:root`) ile tanımlanmıştır.
- Tailwind kullanılacak ise, `tailwind.config.js` dosyası bu CSS değişkenlerini okuyacak şekilde yapılandırılabilir, böylelikle tamamen **"Sky & Slate"** konseptine uygun temalanabilir bir proje elde edilir.

Herhangi bir sayfa oluşturmadan önce bu iskelet (skeleton) kod parçaları etrafında ilerleyerek sistemin altyapısı bu şekilde oturtulacaktır.
