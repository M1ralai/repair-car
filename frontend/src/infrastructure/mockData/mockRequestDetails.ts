// Mock Request Details - Talep detay verileri (mockRequests ID'leriyle eşleşen)
import type { KapsamliTalepDetayi } from '../../core/domain/types/request';

export const mockRequestDetails: Record<string, KapsamliTalepDetayi> = {
  talep_001: {
    id: 'talep_001',
    musteri: {
      isim: 'Mehmet Yılmaz',
      telefon: '+90 532 111 22 33',
    },
    arac: {
      marka: 'Volkswagen',
      model: 'Passat',
      yil: 2019,
      plaka: '34 ABC 123',
    },
    koordinat: { lat: 41.0082, lng: 28.9784 },
    acikAdres: 'Kadıköy Meydan, Söğütlüçeşme Cad. No:5, Kadıköy/İstanbul',
    arizaNotu:
      'Araç çalışmıyor, aküm bitmiş olabilir. Çalıştırmak için birkaç kez denedim ama olmadı. Park halindeyim.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=400',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-19T20:30:00.000Z' },
    ],
    tip: 'servis',
  },
  talep_002: {
    id: 'talep_002',
    musteri: {
      isim: 'Fatma Kaya',
      telefon: '+90 533 444 55 66',
    },
    arac: {
      marka: 'Toyota',
      model: 'Corolla',
      yil: 2021,
      plaka: '34 DEF 456',
    },
    koordinat: { lat: 41.0155, lng: 28.9701 },
    acikAdres: 'Levent, Büyükdere Cad. No:100, Beşiktaş/İstanbul',
    arizaNotu:
      'Gösterge panelinde sıcaklık lambası aniden yandı ve araç kendiliğinden durdu. Motordan buhar çıkıyor olabilir.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-19T20:15:00.000Z' },
    ],
    tip: 'servis',
  },
  talep_003: {
    id: 'talep_003',
    musteri: {
      isim: 'Ali Demir',
      telefon: '+90 535 777 88 99',
    },
    arac: {
      marka: 'Ford',
      model: 'Focus',
      yil: 2017,
      plaka: '34 GHI 789',
    },
    koordinat: { lat: 41.0044, lng: 28.9834 },
    acikAdres: 'E-5 Yolu, Bağcılar Kavşağı, Bağcılar/İstanbul',
    arizaNotu: 'E-5 üzerinde lastiğim patladı. Stepne var ama çok trafikli yerde olduğum için güvenli değil.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1558981285-6f0c68243335?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-19T20:45:00.000Z' },
    ],
    tip: 'servis',
  },
  talep_004: {
    id: 'talep_004',
    musteri: {
      isim: 'Zeynep Arslan',
      telefon: '+90 536 000 11 22',
    },
    arac: {
      marka: 'Honda',
      model: 'Civic',
      yil: 2020,
      plaka: '34 JKL 012',
    },
    koordinat: { lat: 41.0222, lng: 28.9650 },
    acikAdres: 'Mecidiyeköy, Büyükdere Cad. No:65, Şişli/İstanbul',
    arizaNotu: 'Hafif kaza yaptım, ön tampon göçtü ve araç hareket edemiyor. Anahtarı üzerimde.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-19T20:10:00.000Z' },
    ],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0300, lng: 28.9750 },
    hedefAdres: 'Şişli Özel Oto Servis, Halaskargazi Cad., Şişli/İstanbul',
  },
  talep_005: {
    id: 'talep_005',
    musteri: {
      isim: 'Can Öztürk',
      telefon: '+90 537 333 44 55',
    },
    arac: {
      marka: 'BMW',
      model: '320i',
      yil: 2022,
      plaka: '34 MNO 345',
    },
    koordinat: { lat: 41.0090, lng: 28.9900 },
    acikAdres: 'Üsküdar, Bağlarbaşı Cad. No:25, Üsküdar/İstanbul',
    arizaNotu: 'Araç tamamen yandı, kalkamıyor. Yetkili BMW servisine çekilmesi gerekiyor.',
    medyaUrls: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
    ],
    canliDurumIndexi: 0,
    durumZamancizgisi: [
      { durum: 'beklemede', zaman: '2026-03-19T20:55:00.000Z' },
    ],
    tip: 'cekici',
    hedefKoordinat: { lat: 41.0350, lng: 28.9500 },
    hedefAdres: 'BMW Yetkili Servisi, Güneşli, Bağcılar/İstanbul',
  },
};
