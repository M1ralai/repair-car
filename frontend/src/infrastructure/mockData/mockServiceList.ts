import type { ServicePointDetail } from '../../core/domain/types/servicePoint';

export const mockServiceList: ServicePointDetail[] = [
  {
    id: 'sp_001',
    name: 'Güven Oto Servis',
    distance: 2.4,
    rating: 4.8,
    reviewCount: 124,
    isVerified: true,
    workingHours: '08:00 - 19:00',
    address: 'Maslak Oto Sanayi, Şişli/İstanbul',
    phone: '+905550001122',
    specialties: ['Motor', 'Mekanik'],
    latitude: 41.1111,
    longitude: 29.0011,
    imageUrl: 'https://images.unsplash.com/photo-1625047509168-a71c6f22c608?auto=format&fit=crop&w=400&q=80',
    about: '20 yıllık tecrübemizle Maslak sanayide güvenilir ve garantili hizmet sunuyoruz.'
  },
  {
    id: 'sp_002',
    name: 'Hızlı Lastikçi',
    distance: 1.1,
    rating: 4.5,
    reviewCount: 89,
    isVerified: false,
    workingHours: '7/24 Açık',
    address: 'Beşiktaş/İstanbul',
    phone: '+905321112233',
    specialties: ['Lastik', 'Akü'],
    latitude: 41.0422,
    longitude: 29.0060,
    imageUrl: 'https://images.unsplash.com/photo-1599256900889-4d667c4eefe5?auto=format&fit=crop&w=400&q=80',
    about: 'İstanbul içi her yere mobil lastik ve akü desteği sağlıyoruz.'
  },
  {
    id: 'sp_003',
    name: 'Bosch Car Service Premium',
    distance: 5.2,
    rating: 4.9,
    reviewCount: 312,
    isVerified: true,
    workingHours: '08:30 - 18:00',
    address: 'Levent/İstanbul',
    phone: '+902123334455',
    specialties: ['Elektrik', 'Motor', 'Periyodik Bakım'],
    latitude: 41.0822,
    longitude: 29.0160,
    imageUrl: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=400&q=80',
  }
];
