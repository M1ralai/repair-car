// Mock Request Details - Talep detay verileri (mockRequests ID'leriyle eşleşen)
import type { KapsamliTalepDetayi } from '../../core/domain/types/request';

export const mockRequestDetails: Record<string, KapsamliTalepDetayi> = {

  // ─── SERVİS TALEPLERİ ──────────────────────────────────────────────────────

  talep_001: {
    id: 'talep_001',
    musteri: { isim: 'Mehmet Yılmaz', telefon: '+90 532 111 22 33' },
    arac: { marka: 'Volkswagen', model: 'Passat', yil: 2019, plaka: '34 ABC 123' },
    koordinat: { lat: 41.0082, lng: 28.9784 },
    acikAdres: 'Kadıköy Meydan, Söğütlüçeşme Cad. No:5, Kadıköy/İstanbul',
    arizaNotu: 'Araç çalışmıyor, aküm bitmiş olabilir. Çalıştırmak için birkaç kez denedim ama olmadı. Park halindeyim.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=400',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T06:30:00.000Z' }],
    tip: 'servis',
  },

  talep_002: {
    id: 'talep_002',
    musteri: { isim: 'Fatma Kaya', telefon: '+90 533 444 55 66' },
    arac: { marka: 'Toyota', model: 'Corolla', yil: 2021, plaka: '34 DEF 456' },
    koordinat: { lat: 41.0155, lng: 28.9701 },
    acikAdres: 'Levent, Büyükdere Cad. No:100, Beşiktaş/İstanbul',
    arizaNotu: 'Gösterge panelinde sıcaklık lambası aniden yandı ve araç kendiliğinden durdu. Motordan buhar çıkıyor olabilir.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T06:15:00.000Z' }],
    tip: 'servis',
  },

  talep_003: {
    id: 'talep_003',
    musteri: { isim: 'Ali Demir', telefon: '+90 535 777 88 99' },
    arac: { marka: 'Ford', model: 'Focus', yil: 2017, plaka: '34 GHI 789' },
    koordinat: { lat: 41.0044, lng: 28.9834 },
    acikAdres: 'E-5 Yolu, Bağcılar Kavşağı, Bağcılar/İstanbul',
    arizaNotu: 'E-5 üzerinde lastiğim patladı. Stepne var ama çok trafikli yerde olduğum için güvenli değil.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1558981285-6f0c68243335?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T06:45:00.000Z' }],
    tip: 'servis',
  },

  talep_006: {
    id: 'talep_006',
    musteri: { isim: 'Selin Çelik', telefon: '+90 536 212 34 56' },
    arac: { marka: 'Renault', model: 'Clio', yil: 2020, plaka: '34 JKL 222' },
    koordinat: { lat: 41.0130, lng: 28.9750 },
    acikAdres: 'Şişli, Halaskargazi Cad. No:200, Şişli/İstanbul',
    arizaNotu: 'Gösterge paneli yandı, klima çalışmıyor. Araç gidiyor ama elektrik sorunu var.',
    medyaUrls: [],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T07:00:00.000Z' }],
    tip: 'servis',
  },

  talep_007: {
    id: 'talep_007',
    musteri: { isim: 'Burak Şahin', telefon: '+90 537 900 11 22' },
    arac: { marka: 'Peugeot', model: '308', yil: 2018, plaka: '34 MNO 333' },
    koordinat: { lat: 41.0060, lng: 28.9810 },
    acikAdres: 'Güngören, Osmaniye Cad. No:15, Güngören/İstanbul',
    arizaNotu: 'Frenlerden metal sesi geliyor, frenleme normal ama ses endişe verici.',
    medyaUrls: [],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T07:10:00.000Z' }],
    tip: 'servis',
  },

  talep_008: {
    id: 'talep_008',
    musteri: { isim: 'Kemal Aydın', telefon: '+90 532 500 66 77' },
    arac: { marka: 'Opel', model: 'Astra', yil: 2016, plaka: '34 PRS 444' },
    koordinat: { lat: 41.0200, lng: 28.9720 },
    acikAdres: 'Mecidiyeköy, Büyükdere Cad. No:44, Şişli/İstanbul',
    arizaNotu: 'Motor altından yağ akıyor. Yağ seviyesi kritik durumda, lastik izine yağ damlaması var.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400',
    ],
    canliDurumIndexi: 1,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-21T05:00:00.000Z' },
      { durum: 'kabul_edildi', zaman: '2026-03-21T05:10:00.000Z' },
    ],
    tip: 'servis',
  },

  talep_009: {
    id: 'talep_009',
    musteri: { isim: 'Gizem Polat', telefon: '+90 533 700 88 99' },
    arac: { marka: 'Dacia', model: 'Logan', yil: 2019, plaka: '34 TUV 555' },
    koordinat: { lat: 41.0240, lng: 28.9660 },
    acikAdres: 'Kağıthane, Gültepe Mah. Çağlayan Cad. No:9, Kağıthane/İstanbul',
    arizaNotu: 'Vites kutusunda problem var, 3. vitesten çıkamıyorum. Diğer vitesler normal.',
    medyaUrls: [],
    canliDurumIndexi: 2,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-21T04:30:00.000Z' },
      { durum: 'kabul_edildi', zaman: '2026-03-21T04:40:00.000Z' },
      { durum: 'yola_cikti', zaman: '2026-03-21T04:55:00.000Z' },
    ],
    tip: 'servis',
  },

  talep_010: {
    id: 'talep_010',
    musteri: { isim: 'Tarık Yıldız', telefon: '+90 534 300 12 34' },
    arac: { marka: 'Honda', model: 'Jazz', yil: 2015, plaka: '34 WXY 666' },
    koordinat: { lat: 41.0100, lng: 28.9770 },
    acikAdres: 'Bağcılar, İstanbul Cad. No:33, Bağcılar/İstanbul',
    arizaNotu: 'Akü tamamen şarj tutmuyordu. Yerinde değiştirilmesi talep edildi.',
    medyaUrls: [],
    canliDurumIndexi: 3,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-20T14:00:00.000Z' },
      { durum: 'kabul_edildi', zaman: '2026-03-20T14:10:00.000Z' },
      { durum: 'yola_cikti', zaman: '2026-03-20T14:20:00.000Z' },
      { durum: 'tamamlandi', zaman: '2026-03-20T15:10:00.000Z' },
    ],
    tip: 'servis',
  },

  talep_011: {
    id: 'talep_011',
    musteri: { isim: 'Hande Koç', telefon: '+90 535 400 23 45' },
    arac: { marka: 'Seat', model: 'Ibiza', yil: 2018, plaka: '34 ZAB 777' },
    koordinat: { lat: 41.0050, lng: 28.9860 },
    acikAdres: 'Sultangazi, Sultançiftliği Mah. Okul Cad. No:7, Sultangazi/İstanbul',
    arizaNotu: 'Hem ön hem arka lastikler yıpranmış durumdaydı, 2 lastik değiştirildi.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1558981285-6f0c68243335?w=400',
    ],
    canliDurumIndexi: 3,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-20T10:00:00.000Z' },
      { durum: 'tamamlandi', zaman: '2026-03-20T11:30:00.000Z' },
    ],
    tip: 'servis',
  },

  talep_012: {
    id: 'talep_012',
    musteri: { isim: 'Murat Güneş', telefon: '+90 536 500 34 56' },
    arac: { marka: 'Hyundai', model: 'i20', yil: 2021, plaka: '34 CDE 888' },
    koordinat: { lat: 41.0075, lng: 28.9800 },
    acikAdres: 'Esenler, Birlik Mah. Gençlik Cad. No:12, Esenler/İstanbul',
    arizaNotu: 'Fren balatalar bitmiş, değiştirildi ve test edildi.',
    medyaUrls: [],
    canliDurumIndexi: 3,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-19T09:00:00.000Z' },
      { durum: 'tamamlandi', zaman: '2026-03-19T10:00:00.000Z' },
    ],
    tip: 'servis',
  },

  // ─── ÇEKİCİ TALEPLERİ ──────────────────────────────────────────────────────

  talep_004: {
    id: 'talep_004',
    musteri: { isim: 'Zeynep Arslan', telefon: '+90 536 000 11 22' },
    arac: { marka: 'Honda', model: 'Civic', yil: 2020, plaka: '34 JKL 012' },
    koordinat: { lat: 41.0222, lng: 28.9650 },
    acikAdres: 'Mecidiyeköy, Büyükdere Cad. No:65, Şişli/İstanbul',
    arizaNotu: 'Hafif kaza yaptım, ön tampon göçtü ve araç hareket edemiyor. Anahtarı üzerimde.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T06:10:00.000Z' }],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0300, lng: 28.9750 },
    hedefAdres: 'Şişli Özel Oto Servis, Halaskargazi Cad., Şişli/İstanbul',
  },

  talep_005: {
    id: 'talep_005',
    musteri: { isim: 'Can Öztürk', telefon: '+90 537 333 44 55' },
    arac: { marka: 'BMW', model: '320i', yil: 2022, plaka: '34 MNO 345' },
    koordinat: { lat: 41.0090, lng: 28.9900 },
    acikAdres: 'Üsküdar, Bağlarbaşı Cad. No:25, Üsküdar/İstanbul',
    arizaNotu: 'Araç tamamen yandı, kalkamıyor. BMW yetkili servisine çekilmesi gerekiyor.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T06:55:00.000Z' }],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0350, lng: 28.9500 },
    hedefAdres: 'BMW Yetkili Servisi, Güneşli, Bağcılar/İstanbul',
  },

  talep_013: {
    id: 'talep_013',
    musteri: { isim: 'Derya Aksoy', telefon: '+90 538 600 77 88' },
    arac: { marka: 'Mercedes', model: 'C180', yil: 2019, plaka: '34 FGH 901' },
    koordinat: { lat: 41.0310, lng: 28.9620 },
    acikAdres: 'Maslak, Büyükdere Cad. No:255, Sarıyer/İstanbul',
    arizaNotu: 'Şanzıman tamamen kilitlendi, araç gidemiyor. Yetkili servise iletilmesi lazım.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [{ durum: 'beklemede', zaman: '2026-03-21T07:05:00.000Z' }],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0400, lng: 28.9800 },
    hedefAdres: 'Mercedes Yetkili Servisi, Maslak, İstanbul',
  },

  talep_014: {
    id: 'talep_014',
    musteri: { isim: 'Emre Doğan', telefon: '+90 539 800 99 00' },
    arac: { marka: 'Audi', model: 'A3', yil: 2021, plaka: '34 IJK 234' },
    koordinat: { lat: 41.0380, lng: 28.9580 },
    acikAdres: 'Fulya, Millet Cad. No:8, Şişli/İstanbul',
    arizaNotu: 'Çarpışma sonucu araç ağır hasar aldı. Sigorta için resmi servise çekilmesi gerekiyor.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
    ],
    canliDurumIndexi: 2,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-21T04:00:00.000Z' },
      { durum: 'kabul_edildi', zaman: '2026-03-21T04:10:00.000Z' },
      { durum: 'yola_cikti', zaman: '2026-03-21T04:25:00.000Z' },
    ],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0450, lng: 28.9450 },
    hedefAdres: 'Allianz Sigorta Anlaşmalı Servis, Bağcılar, İstanbul',
  },

  talep_015: {
    id: 'talep_015',
    musteri: { isim: 'Neslihan Kurt', telefon: '+90 530 100 22 33' },
    arac: { marka: 'Fiat', model: 'Egea', yil: 2020, plaka: '34 LMN 567' },
    koordinat: { lat: 41.0120, lng: 28.9680 },
    acikAdres: 'Bağcılar Yolu, TEM Yan Yol, Bağcılar/İstanbul',
    arizaNotu: 'Benzin bitti, araç yolun kenarında kalmış. En yakın istasyona çekilecek.',
    medyaUrls: [],
    canliDurumIndexi: 1,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-21T05:30:00.000Z' },
      { durum: 'kabul_edildi', zaman: '2026-03-21T05:38:00.000Z' },
    ],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0180, lng: 28.9720 },
    hedefAdres: 'Shell İstasyon, Bağcılar Cad., İstanbul',
  },

  talep_016: {
    id: 'talep_016',
    musteri: { isim: 'Oğuz Tekin', telefon: '+90 531 200 44 55' },
    arac: { marka: 'Renault', model: 'Megane', yil: 2018, plaka: '34 OPQ 890' },
    koordinat: { lat: 41.0190, lng: 28.9740 },
    acikAdres: 'Sarıyer, Büyükdere Cad. No:180, Sarıyer/İstanbul',
    arizaNotu: 'Araç hasarlıydı, yetkili servise başarıyla ulaştırıldı.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
    ],
    canliDurumIndexi: 4,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-20T13:00:00.000Z' },
      { durum: 'tamamlandi', zaman: '2026-03-20T14:30:00.000Z' },
    ],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0260, lng: 28.9710 },
    hedefAdres: 'Renault Yetkili Servisi, Mecidiyeköy, İstanbul',
  },

  talep_017: {
    id: 'talep_017',
    musteri: { isim: 'Pınar Yaman', telefon: '+90 532 300 55 66' },
    arac: { marka: 'Toyota', model: 'Yaris', yil: 2017, plaka: '34 RST 123' },
    koordinat: { lat: 41.0070, lng: 28.9850 },
    acikAdres: 'Esenler, Havaalanı Cad. No:60, Esenler/İstanbul',
    arizaNotu: 'Motor tamamen durmuştu. Araç yetkili Toyota servisine iletildi.',
    medyaUrls: [],
    canliDurumIndexi: 4,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-20T09:30:00.000Z' },
      { durum: 'tamamlandi', zaman: '2026-03-20T11:00:00.000Z' },
    ],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0320, lng: 28.9490 },
    hedefAdres: 'Toyota Yetkili Servisi, Güneşli, İstanbul',
  },
};
