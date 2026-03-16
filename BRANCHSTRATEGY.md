# RepairCar Branch ve Pull Request Kullanımı

Bu belge, RepairCar projesinde branch açma, değişiklik seçme, commit atma ve pull request hazırlama düzenini netleştirmek için hazırlanmıştır.

Bu dosyanın amacı şudur:

* Herkes aynı çalışma düzenini kullansın
* Gereksiz dosyalar commit edilmesin
* Debug için eklenen geçici değişiklikler yanlışlıkla projeye gitmesin
* Commit geçmişi temiz ve okunabilir olsun
* Pull request içeriği kontrol edilebilir kalsın
* Büyük ve dağınık değişiklikler yerine küçük, net ve güvenli adımlarla ilerleyelim

Bu projede ana yaklaşım şudur:

**Bir branch tek bir işi taşır. Bir commit tek bir işi anlatır. Bir pull request incelenebilir kadar küçük olmalıdır.**

---

# 1. Temel çalışma mantığı

Bu projede iş akışı şu sırayla ilerler:

1. Önce issue açılır
2. İlgili issue için branch açılır
3. Geliştirme küçük adımlarla yapılır
4. Her küçük ve anlamlı değişiklik ayrı commit edilir
5. Commit atmadan önce değişiklikler tek tek kontrol edilir
6. Gereksiz dosyalar ve geçici değişiklikler ayıklanır
7. Pull request açılır
8. Kontrol sonrası merge yapılır

Buradaki en önemli nokta şudur:

**Kod yazmak tek başına yeterli değildir. Yazılan değişikliğin gerçekten branch içine girmesi gereken kısmını seçmek de işin bir parçasıdır.**

---

# 2. Branch neden açılır

Yeni bir iş başladığında ayrı branch açılır. Bunun sebebi:

* Yapılan işi ana akıştan ayırmak
* Hata durumunda kolay geri dönebilmek
* Pull request içeriğini temiz tutmak
* Aynı anda birden fazla işi birbirine karıştırmamak
* Yapılan değişikliği kontrollü şekilde birleştirmek

Ayrı branch açılmadan geliştirme yapılması önerilmez.

---

# 3. Branch hangi durumlarda açılır

Aşağıdaki her durumda ayrı branch açılır:

* Yeni özellik geliştiriliyorsa
* Hata düzeltiliyorsa
* Refactor yapılıyorsa
* Test ekleniyorsa
* Docker veya çalışma ortamı düzenleniyorsa
* Veritabanı yapısı değişiyorsa
* Belge güncelleniyorsa
* Ortak kullanılan type yapısı değişiyorsa

Kural basittir:

**Yeni iş varsa yeni branch vardır.**

---

# 4. Branch isimlendirme düzeni

Branch isimleri kısa, temiz ve ne yapıldığı anlaşılır şekilde yazılır.

Kullanılacak yapılar:

* `feature/`
* `fix/`
* `refactor/`
* `test/`
* `devops/`
* `docs/`
* `hotfix/`

Örnekler:

* `feature/service-search`
* `feature/roadside-request`
* `fix/login-validation`
* `refactor/service-score-flow`
* `test/filter-checks`
* `devops/docker-postgres-setup`
* `docs/branch-pr-guide`

Dikkat:

* Türkçe karakter kullanılmaz
* Boşluk kullanılmaz
* Çok uzun isim yazılmaz
* Branch adı işin ne olduğunu anlatır

---

# 5. Yeni branch nasıl açılır

## 5.1 Git CLI ile branch açma

Önce güncel durumu al:

```
git checkout master
git pull origin master
```

Yeni branch aç ve o branch'e geç:

```
git checkout -b feature/service-search
```

İş bittikten sonra branch'i gönder:

```
git push -u origin feature/service-search
```

## 5.2 GitHub Desktop ile branch açma

İzlenecek sıra:

1. Önce `master branch` seçili olsun
2. En güncel hali al
3. Üst bölümden `Current Branch` alanına tıkla
4. `New Branch` seçeneğini aç
5. Branch adını yaz
6. Doğru branch'ten açıldığını kontrol et
7. Oluştur ve yeni branch'e geç

Burada dikkat edilmesi gereken en önemli şey:

**Yeni branch yanlış branch üzerinden açılmamalıdır. Her zaman mümkün olduğunca güncel `master branch` üzerinden açılmalıdır.**

---

# 6. Branch açtıktan sonra nasıl çalışılır

Branch açıldıktan sonra o branch yalnızca ilgili iş için kullanılır.

Örnek:

`feature/service-search` branch'inde şunlar yapılabilir:

* Servis arama alanı
* Servis filtreleme akışı
* Bu akışla ilgili küçük düzeltmeler

Ama şunlar aynı branch içinde yapılmamalıdır:

* Login ekranı düzenlemesi
* İlgisiz bir hata düzeltmesi
* Docker dosyası düzenleme
* Başka bir özellik

Bir branch içinde birden fazla konu taşınırsa pull request kontrolü zorlaşır.

---

# 7. Hangi dosyalar commit edilir

Commit edilecek dosyalar yalnızca o iş için gerekli olan dosyalardır.

Örnek olarak commit edilebilecek şeyler:

* Özellik için gerçekten değişen kaynak kod dosyaları
* Gerekliyse ilgili test dosyaları
* Gerekliyse ilgili type dosyaları
* Gerekliyse ilgili veritabanı değişiklik dosyaları
* Gerekliyse ilgili belge güncellemeleri

Kural:

**Commit edilen her dosyanın branch içindeki işle doğrudan ilgisi olmalıdır.**

---

# 8. Hangi dosyalar commit edilmez

Aşağıdaki türden şeyler commit edilmez:

* Geçici debug logları
* Kontrol için eklenmiş `console.log` benzeri satırlar
* Geliştirme sırasında bırakılmış notlar
* Kullanılmayan deneysel kodlar
* Geçici yorum satırları
* Yarım bırakılmış alakasız değişiklikler
* Kişisel editör ayarları
* Ortam bilgileri
* Gizli anahtarlar
* Şimdilik denenmiş ama kararlaştırılmamış değişiklikler

Özellikle şuna dikkat edilir:

**Bir modülde debug için eklenen log, o işin kalıcı parçası değilse pull request'e girmez.**

---

# 9. Commit atmadan önce değişiklik nasıl kontrol edilir

Commit atmadan önce herkes yaptığı değişikliği gözle kontrol etmek zorundadır.

Kontrol edilmesi gereken şeyler:

* Hangi dosyalar değişmiş
* Gerçekten bu branch ile ilgili mi
* Geçici kod kaldı mı
* Yanlışlıkla başka işten dosya girdi mi
* Debug log kaldı mı
* Gereksiz format değişiklikleri var mı
* İstenmeyen dosya silinmiş mi
* Dosyada yarım kalmış iş var mı

Kural:

**Commit atmadan önce değişiklik okunmadan commit atılmaz.**

---

# 10. Git CLI ile değişiklik nasıl kontrol edilir

## 10.1 Değişen dosyaları görmek

```
git status
```

Bu komut şunları gösterir:

* Hangi dosyalar değişmiş
* Hangileri henüz eklenmemiş
* Hangileri commit edilmeye hazır

## 10.2 Satır bazında fark görmek

```
git diff
```

Bu komut ile:

* Tam olarak hangi satırların değiştiği
* Hangi satırların eklendiği
* Hangi satırların silindiği

görülebilir.

## 10.3 Sadece belirli dosyanın farkını görmek

```
git diff src/modules/service/service.ts
```

Bu komut özellikle tek dosyada gereksiz log veya yanlış değişiklik kalıp kalmadığını anlamak için kullanılır.

## 10.4 Commit'e girecek hali görmek

```
git diff --staged
```

Bu çok önemlidir. Çünkü staging alanına aldığın şey gerçekten commit'e gidecek şeydir.

Önce dosya eklenir:

```
git add src/modules/service/service.ts
```

Sonra tekrar kontrol edilir:

```
git diff --staged
```

Burada ana kural şudur:

**`git add .` kör şekilde kullanılmamalıdır. Önce neyin eklendiği bilinmelidir.**

---

# 11. GitHub Desktop ile değişiklik nasıl kontrol edilir

GitHub Desktop kullanırken de commit atmadan önce değişiklikler tek tek okunmalıdır.

İzlenecek düzen:

1. Sol taraftaki değişen dosyaları incele
2. Her dosyaya tıkla
3. Sağ tarafta satır bazında ne değiştiğini kontrol et
4. Alakasız dosya varsa işaretini kaldır
5. Debug için eklenmiş satırlar varsa önce sil
6. Commit mesajını ancak bundan sonra yaz

GitHub Desktop'ta en önemli nokta şudur:

**Listede görünen her değişiklik otomatik olarak doğru değildir. Her dosya gözle kontrol edilmelidir.**

---

# 12. Gereksiz değişiklik nasıl ayıklanır

Bazen aynı dosyada hem gerekli hem gereksiz değişiklik olabilir.

Örnek:

* Service katmanında hata düzeltmesi yaptın
* Aynı anda debug için log ekledin
* Belki bir satırı denemek için değiştirdin
* Belki validation'ı geçici olarak kapattın

Bu durumda commit öncesi şu yapılır:

* Kalıcı olması gereken değişiklik bırakılır
* Geçici log kaldırılır
* Deneme amaçlı satırlar geri alınır
* Kararlaştırılmamış değişiklikler ayrı bırakılır

Buradaki mantık:

**Commit geçmişi deney alanı değil, karar verilmiş değişikliklerin geçmişidir.**

---

# 13. Aynı branch içinde küçük commitler neden önemlidir

Bu projede commitler mümkün olduğunca küçük ve tek amaçlı olmalıdır.

Sebep:

* Geri dönmek kolay olur
* İncelemek kolay olur
* Hangi değişiklik ne yaptı anlaşılır
* Pull request daha okunabilir olur
* Gerekirse bazı commitler alınmayabilir
* Gerekirse belirli noktaya kadar olan kısım kullanılabilir
* Sorun çıktığında hangi commitin bozduğu daha kolay bulunur

Ana düşünce şudur:

**Bir commit mümkünse tek bir anlamlı iş yapmalıdır.**

---

# 14. Commit ne kadar küçük olmalı

İdeal commit şu özellikte olmalıdır:

* Tek bir amaca hizmet eder
* Tek başına okununca ne yaptığı anlaşılır
* İçinde birden fazla konu taşımaz
* Geri alındığında sistemi gereksiz yere kırmaz

Örnek iyi küçük commitler:

* DOM yapısı değiştirildi
* Veritabanı alanı eklendi
* Service katmanındaki hatalı kontrol düzeltildi
* Geçici olarak validation bypass edildi
* Validation tekrar aktif edildi

Örnek kötü büyük commit:

* Login, servis akışı, docker, type düzeltmesi, refactor, validation güncellemesi aynı commit içinde

---

# 15. Commit mesajı nasıl yazılır

Commit mesajı yapılan işi anlatmalıdır. Kısa ama net olmalıdır.

Örnekler:

* add service search dto
* fix incorrect service validation check
* bypass validation temporarily for flow test
* restore validation for roadside request

Kaçınılacak commit mesajları:

* update
* fix
* son hali
* deneme

Kural:

**Commit mesajı tek başına okunduğunda yapılan iş anlaşılmalıdır.**
