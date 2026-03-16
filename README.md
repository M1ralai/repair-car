# Team Development Workflow

## Branch Strategy

* `master` branch production-safe branch olarak kabul edilir.
* Hiç kimse doğrudan `master` branch üzerine commit atmaz.
* Her geliştirme ayrı branch üzerinde yapılır.

### Branch naming convention

* feature/new-auth-system
* fix/login-validation
* refactor/user-service
* docs/api-readme

## Workflow

1. Önce ilgili issue açılır.
2. Issue assign edilir.
3. Issue için branch oluşturulur.
4. Geliştirme branch üzerinde yapılır.
5. Commitler anlamlı yazılır.
6. Pull Request açılır.
7. En az bir kişi review eder.
8. Merge sonrası branch silinir.

## Commit Convention

* feat: yeni özellik
* fix: bug düzeltmesi
* refactor: kod iyileştirme
* docs: dokümantasyon
* chore: küçük bakım işleri

Örnek:

feat: add user login endpoint
fix: resolve token refresh bug

## Pull Request Rules

PR açıklamasında şunlar bulunmalı:

* Ne değişti
* Neden değişti
* Test edildi mi

## Direct Push Rule

Master branch'e direct push yapılmaz.

Acil durumda bile önce branch açılır.

## Ownership Rule

Bir modül üzerinde değişiklik yapılacaksa ilgili kişi bilgilendirilir.

Kimsenin alanına haber vermeden müdahale edilmez.

## Conflict Rule

Conflict çıkarsa önce branch güncellenir:

git pull origin master

sonra çözülür.

## Emergency Fix

Hotfix branch açılır:

hotfix/payment-bug

## Issue Structure

Issue başlığı:

[FEATURE] Login ekranı
[BUG] Token expire sorunu
[REFACTOR] User service cleanup

Issue içeriği:

* Problem
* Beklenen sonuç
* Teknik notlar
* Kim üstleniyor

## Project Setup Rule

Yeni klasör / yeni mimari kararlar issue açılmadan eklenmez.

## Merge Rule

Kendi PR’ını açan kişi tek başına merge etmez.
