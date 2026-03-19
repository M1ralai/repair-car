// Mock Profile Data - Profil ve Performans Verileri
import type { ProfilVerisi } from '../../core/domain/types/profile';

export const mockServisProfil: ProfilVerisi = {
  organizasyon: {
    isletmeAdi: 'Usta Ahmet Otomotive',
    telefon: '+90 212 555 66 77',
    adres: 'Bağcılar Sanayi Sitesi, C Blok No:14, Bağcılar/İstanbul',
    gorselUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200',
    servisSaatleri: {
      baslangic: '08:00',
      bitis: '19:00',
    },
  },
  performans: {
    toplamTamamlananIs: 243,
    ortalamaMemnuniyetPuani: 4.7,
    reddedilmisOrani: 0.04,
    oncekiAyaDegisim: 12,
  },
  yorumlar: [
    {
      id: 'yorum_001',
      musteriAdi: 'Mehmet Y.',
      yildizPuani: 5,
      yorumMetni: 'Harika hizmet! Çok hızlı geldiler ve sorunu anında çözdüler. Kesinlikle tavsiye ederim.',
      tamamlanmaTarihi: '2026-03-15T14:20:00.000Z',
    },
    {
      id: 'yorum_002',
      musteriAdi: 'Selin K.',
      yildizPuani: 4,
      yorumMetni: 'İyi hizmet, biraz geç geldiler ama işi düzgün yaptılar.',
      tamamlanmaTarihi: '2026-03-10T10:45:00.000Z',
    },
    {
      id: 'yorum_003',
      musteriAdi: 'Burak D.',
      yildizPuani: 5,
      yorumMetni:
        'Gece 22:00\'de bile gelip aküyü değiştirdiler. Çok memnun kaldım, fiyatı da makul.',
      tamamlanmaTarihi: '2026-03-05T22:30:00.000Z',
    },
    {
      id: 'yorum_004',
      musteriAdi: 'Ayşe T.',
      yildizPuani: 5,
      tamamlanmaTarihi: '2026-02-28T16:10:00.000Z',
    },
    {
      id: 'yorum_005',
      musteriAdi: 'Volkan S.',
      yildizPuani: 3,
      yorumMetni: 'Geç geldi ve fiyat biraz yüksekti ama iş tamamlandı.',
      tamamlanmaTarihi: '2026-02-20T09:00:00.000Z',
    },
  ],
};

export const mockCekiciProfil: ProfilVerisi = {
  organizasyon: {
    isletmeAdi: 'Hızlı Çekici Hizmetleri',
    telefon: '+90 212 444 55 66',
    adres: 'Güneşli Sanayi, D Blok Üstü, Bağcılar/İstanbul',
    gorselUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200',
    servisSaatleri: {
      baslangic: '00:00',
      bitis: '23:59',
    },
  },
  performans: {
    toplamTamamlananIs: 88,
    ortalamaMemnuniyetPuani: 4.4,
    reddedilmisOrani: 0.07,
    oncekiAyaDegisim: -3,
  },
  yorumlar: [
    {
      id: 'yorum_c001',
      musteriAdi: 'Zeynep A.',
      yildizPuani: 5,
      yorumMetni: 'Kazadan sonra çok hızlı gelip aracımı servis götürdüler. Teşekkürler!',
      tamamlanmaTarihi: '2026-03-18T18:00:00.000Z',
    },
    {
      id: 'yorum_c002',
      musteriAdi: 'Emre B.',
      yildizPuani: 4,
      yorumMetni: 'Profesyonel hizmet, araç hasarsız teslim edildi.',
      tamamlanmaTarihi: '2026-03-12T12:30:00.000Z',
    },
  ],
};
