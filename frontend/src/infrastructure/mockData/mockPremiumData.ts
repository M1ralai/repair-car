import type { VehicleProfile, ServiceRequestHistoryItem, PriceCatalog, EmergencyGuideArticle } from '../../core/domain/types/premiumFeatures';

export const mockVehicles: VehicleProfile[] = [
  {
    id: 'veh_01',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2020,
    plate: '34ABC123',
    chassisNumber: 'WVWZZZXXXXXXXXX',
  },
  {
    id: 'veh_02',
    make: 'Honda',
    model: 'Civic',
    year: 2018,
    plate: '06XYZ789',
  }
];

export const mockServiceHistory: ServiceRequestHistoryItem[] = [
  {
    id: 'hist_1',
    date: '2023-09-12T09:00:00Z',
    serviceName: 'Güven Oto Servis',
    problemSummary: 'Periyodik 30.000km Bakımı',
    cost: 3500,
    currency: '₺',
    ratingGiven: 5,
  },
  {
    id: 'hist_2',
    date: '2023-05-20T14:15:00Z',
    serviceName: 'Hızlı Lastikçi',
    problemSummary: 'Sağ arka lastik değişimi ve rot ayarı',
    cost: 1200,
    currency: '₺',
    ratingGiven: 4,
  }
];

export const mockFavorites: string[] = ['sp_001', 'sp_003'];

export const mockPriceCatalog: PriceCatalog[] = [
  { category: 'Periyodik Bakım', minPrice: 2000, maxPrice: 4500, currency: '₺' },
  { category: 'Akü Değişimi', minPrice: 1500, maxPrice: 3500, currency: '₺' },
  { category: 'Fren Balata Takımı', minPrice: 1000, maxPrice: 2800, currency: '₺' },
  { category: 'Motor Yağı Değişimi', minPrice: 800, maxPrice: 1500, currency: '₺' },
];

export const mockEmergencyGuides: EmergencyGuideArticle[] = [
  {
    id: 'guide_1',
    title: 'Kaza Anında İlk Yapılması Gerekenler',
    category: 'ACCIDENT',
    content: '1. Çevrenin güvenliğini sağlayın.\n2. Varsa yaralılara müdahale için 112\'yi arayın.\n3. Araçları yerinden oynatmadan bolca fotoğraf çekin.\n4. Tutanak tutun veya polisi arayın.',
  },
  {
    id: 'guide_2',
    title: 'Araç Hararet Yaptığında',
    category: 'BREAKDOWN',
    content: '1. Aracı hemen güvenli bir yere çekin.\n2. Motoru durdurun ama kontağı açık bırakın (fan çalışsın).\n3. Kaputu dikkatlice açın (buhar çıkışına dikkat edin).\n4. Radyatör kapağını ASLA sıcakken açmayın.\n5. Motorun soğumasını bekleyip su ekleyin veya çekici çağırın.',
  }
];
