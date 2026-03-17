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
│   └── domain/            # Temel tipler, arayüzler ve modeller (Entities)
├── infrastructure/        # Dış dünya yerine Mock Data Sağlayıcıları
│   └── mockData/          # Uygulamada kullanılacak sabit / sahte veriler (Mock)
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

### 2. Application Katmanı (Devre Dışı)
Şu anki aşamada **Custom Hook'lar (data fetch eden hooklar vb.) kullanılmayacaktır**. İhtiyacımız olan tüm veriler doğrudan mock data'lar ile sağlanacaktır.

### 3. Infrastructure Katmanı (`infrastructure`)
Frontend uygulamasının ihtiyaç duyduğu verilerin kaynak noktasıdır.
- Gerçek bir Backend API yerine **Mock Data (Sahte Veriler)** kullanılacaktır (`infrastructure/mockData`).
- Uygulamanın her yerini dolduracak tüm listeler, detay bilgileri burada statik (sabit) olarak barınacaktır.
- Bileşenler bu Mock dataları doğrudan import ederek kullanacaklardır.

### 4. Presentation Katmanı (`presentation` & `pages`)
Sadece ekranın nasıl görüneceği ile ilgilenir. Gerekli verileri doğrudan Mock Data içerisinden alır ve ekrana basar. Hook'lar üzerinden veya API requestleri ile data fetch işlemi yapılmayacaktır.
- **Components:** Örneğin, `ai.md` içerisinde tanımlanan *Buttons, Modals, Cards* bu klasörde yer alır.
- **Aptal Bileşenler (Dumb Components):** Sadece props alarak (mock dataları göstererek) davranırlar.
- **Sayfalar (Pages):** İlgili ekranda gösterilecek mock dataları import edip ilgili alt component'lara aktarırlar.

---

## 🎨 Tasarım ve Style Yaklaşımı (`style.css`)

Tasarım kararları ve global değişkenler `ai.md` dokümanından beslenerek `style.css` dosyasına çıkartılmıştır.
- Saf renk kodları (Hex vb.) class isimlerinden ve inline stillerden arındırılmış, CSS custom variables (`:root`) ile tanımlanmıştır.
- Tailwind kullanılacak ise, `tailwind.config.js` dosyası bu CSS değişkenlerini okuyacak şekilde yapılandırılabilir, böylelikle tamamen **"Sky & Slate"** konseptine uygun temalanabilir bir proje elde edilir.

Herhangi bir sayfa oluşturmadan önce bu iskelet (skeleton) kod parçaları etrafında ilerleyerek sistemin altyapısı bu şekilde oturtulacaktır.
