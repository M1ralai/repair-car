# RepairCar Contribution Guide

Bu belge, RepairCar projesinde ekip içi çalışmanın düzenli, takip edilebilir ve sürdürülebilir şekilde ilerlemesi için hazırlanmıştır.

Temel amaç; herkesin ne zaman nasıl çalışacağını, işe nasıl başlayacağını, yaptığı işi nasıl teslim edeceğini ve ortak yapıyı bozmadan nasıl ilerleyeceğini netleştirmektir.

Bu projede ana kural şudur:

**Issue açılmadan iş başlanmaz, ayrı branch açılmadan geliştirme yapılmaz, master branch üzerine doğrudan commit atılmaz.**

---

# 1. Genel çalışma düzeni

RepairCar ekip çalışmasıyla geliştirilen bir projedir. Bu nedenle yapılan her iş görünür, takip edilebilir ve gerekirse geriye dönüp anlaşılabilir olmalıdır.

Bu repo içinde:

- Her iş bir issue ile başlar
- Her issue için ayrı branch açılır
- Yapılan iş açıklanarak commit edilir
- Kontrol edilmeden master branch'e merge yapılmaz

Amaç gereksiz prosedür üretmek değil, düzensizlik yüzünden zaman kaybetmemektir.

---

# 2. Roller ve sorumluluklar

Ekip içinde herkesin ana sorumluluk alanı vardır.

### Sorumluluk dağılımı

- Bir ekip üyesi DevOps, test süreçleri, yayınlama düzeni ve kod kalitesi tarafını yürütür
- Bir ekip üyesi ağırlıklı olarak backend geliştirir
- Backend gerektiğinde birlikte geliştirilir
- İki ekip üyesi frontend tarafında birlikte çalışır

### Temel kural

Bir kişinin ana sorumluluk alanına giren yapısal bir değişiklik yapılacaksa önce issue açılır ve ilgili kişi bilgilendirilir.

Sessiz şekilde büyük değişiklik yapılmaz.

---

# 3. master branch kuralı

`master branch` projenin en düzenli tutulması gereken branch'idir.

Bu branch için ekip içi koruma uygulanır:

- master branch üzerine doğrudan commit atılmaz
- günlük geliştirme master branch üzerinde yapılmaz
- yalnızca kontrol edilmiş işler merge edilir

master branch her zaman çalışır durumda kalmalıdır.

---

# 4. Branch ne zaman açılır

Yeni bir iş başladığında ayrı branch açılır.

Aşağıdaki durumlarda mutlaka yeni branch açılır:

- Yeni özellik geliştiriliyorsa
- Hata düzeltiliyorsa
- Kod düzenleniyorsa
- Test ile ilgili çalışma yapılıyorsa
- Docker, veritabanı, çalışma ortamı veya yayınlama tarafında değişiklik yapılıyorsa
- Belge güncelleniyorsa

### Ayrı branch açılmadan iş yapılmaması gereken durumlar

- Birden fazla dosya etkileniyorsa
- Ortak kullanılan yapılar değişiyorsa
- Başka bir ekip üyesinin alanına dokunuluyorsa
- Sonradan geri alınma ihtimali varsa
- Neden yapıldığı açıklanması gereken bir işse

### Çok küçük değişiklikler

Aşağıdaki çok küçük işler istisna olabilir ama yine de branch açılması tercih edilir:

- Yazım düzeltmesi
- Yorum satırı düzenlemesi
- Küçük belge güncellemesi

Temel kural şudur:

**Emin olunmayan her durumda branch açılır.**

---

# 5. Branch isimlendirme düzeni

Branch isimleri kısa, açık ve ne yapıldığı anlaşılır şekilde yazılır.

### Kullanılacak yapılar

- `feature/`
- `fix/`
- `refactor/`
- `test/`
- `devops/`
- `docs/`
- `hotfix/`

### Örnekler

- `feature/service-search`
- `feature/roadside-help`
- `fix/login-validation`
- `refactor/user-flow`
- `test/filter-control`
- `devops/docker-setup`

### Dikkat edilecekler

- Türkçe karakter kullanılmaz
- Boşluk kullanılmaz
- Gereksiz uzun isim verilmez
- Branch isminden iş anlaşılır olmalıdır

---

# 6. Issue açılmadan iş başlanmaz

Bu projede anlamlı her iş issue ile başlar.

Issue açmanın amacı:

- İşin neden yapıldığını görünür hale getirmek
- Kimin üstlendiğini belli etmek
- İşin kapsamını baştan sınırlandırmak
- Sonradan neden yapıldığını anlayabilmek
- Aynı işin iki kez yapılmasını engellemek

---

# 7. Issue hangi durumlarda açılır

Aşağıdaki her durumda issue açılır:

- Yeni özellik geliştirilecekse
- Bug düzeltilecekse
- Veri yapısında değişiklik varsa
- Ortak kullanılan type değişiyorsa
- API davranışı etkileniyorsa
- Kullanıcı akışı değişiyorsa
- Docker veya veritabanı yapısı etkileniyorsa
- Test ihtiyacı oluşuyorsa

---

# 8. Issue içeriği nasıl yazılır

Açılan issue kısa ama net olmalıdır.

Her issue içinde şu bölümler bulunur:

## Amaç

Ne yapılmak isteniyor?

## Sebep

Neden gerekli?

## Kapsam

Hangi alanlar etkileniyor?

## Notlar

Bilinen sınırlar veya dikkat edilmesi gereken durumlar

## Sorumlu kişi

Bu işi kim alıyor?

---

# 9. Issue başlığı nasıl yazılır

Başlık doğrudan ne yapılacağını anlatmalıdır.

### Doğru örnekler

- Kullanıcı servis arama filtresi eklenecek
- Servis puan hesaplama düzeltilecek
- Yol yardım isteği akışı düzenlenecek

### Kaçınılacak başlıklar

- düzeltme
- değişiklik
- sorun var
- bakılacak

Başlık tek başına okununca ne iş olduğu anlaşılmalıdır.

---

# 10. Issue açıldıktan sonra ne yapılır

Sıra şu şekilde ilerler:

1. Issue açılır
2. İşi alacak kişi belirlenir
3. Branch açılır
4. Geliştirme yapılır
5. Commit atılır
6. Pull request açılır
7. Kontrol edilir
8. Merge yapılır

---

# 11. Commit düzeni

Commit mesajı yapılan işi anlatmalıdır.

### Örnekler

- add service filtering logic
- fix login validation
- update docker environment

### Kaçınılacak commitler

- update
- fix
- son hali
- deneme

Commit geçmişi okununca yapılan iş anlaşılmalıdır.

---

# 12. Pull request kuralı

Her branch doğrudan master branch'e eklenmez.

Önce pull request açılır.

Pull request içinde şu net olmalıdır:

- Ne değişti
- Neden değişti
- Hangi alanları etkiliyor
- Test edildi mi

---

# 13. Ortak yapıya müdahale kuralı

Aşağıdaki alanlar ortak kabul edilir:

- Ortak type yapıları
- Veritabanı modelleri
- Docker düzeni
- Ortam değişkenleri
- Genel klasör yapısı

Bu alanlarda değişiklik yapılacaksa issue içinde belirtilir.

---

# 14. Sessiz refactor yapılmaz

Kod sadeleştirme veya yapısal düzenleme gerekiyorsa bu da issue ile açılır.

Refactor görünürde küçük olsa bile başka alanları etkileyebilir.

Bu yüzden:

**Sessiz refactor yapılmaz.**

---

# 15. Release öncesi son kontrol

master branch'e merge edilmeden önce:

- Kod çalışıyor olmalı
- Build alınabiliyor olmalı
- Açık hata bırakılmamalı
- Kritik akış bozulmamış olmalı

Özellikle ortak yapıyı etkileyen işler kontrol edilmeden merge edilmez.
