import type { ServiceApplication } from '../../core/domain/types/applications';

export const mockServiceApplications: ServiceApplication[] = [
  {
    id: 'app_1',
    shopName: 'Özkan Oto Tamir',
    expertiseCategory: 'Mekanik',
    contactNumber: '0555 111 22 33',
    addressDetails: {
      city: 'Ankara',
      district: 'Çankaya',
      fullAddress: 'Turan Güneş Blv. No:45',
    },
    workingHours: {
      weekdays: '08:00 - 18:00',
      weekend: '09:00 - 14:00',
    },
    uploadedDocuments: [
      { name: 'Vergi Levhası.pdf', url: '/mocks/docs/vergi.pdf' },
      { name: 'Ustalık Belgesi.jpg', url: '/mocks/docs/ustalik.jpg' },
    ],
    status: 'pending',
    appliedAt: '2026-03-27T10:00:00Z',
  },
  {
    id: 'app_2',
    shopName: 'Çakır Kurtarma',
    expertiseCategory: 'Oto Kurtarma',
    contactNumber: '0532 999 88 77',
    addressDetails: {
      city: 'İstanbul',
      district: 'Kadıköy',
      fullAddress: 'Fahrettin Kerim Gökay Cad. No:12',
    },
    workingHours: {
      weekdays: '7/24',
      weekend: '7/24',
    },
    uploadedDocuments: [
      { name: 'Faaliyet Belgesi.pdf', url: '/mocks/docs/faaliyet.pdf' },
    ],
    status: 'revision_requested',
    appliedAt: '2026-03-25T14:30:00Z',
  },
  {
    id: 'app_3',
    shopName: 'Yıldız Kaporta Boya',
    expertiseCategory: 'Kaporta',
    contactNumber: '0544 555 66 77',
    addressDetails: {
      city: 'İzmir',
      district: 'Bornova',
      fullAddress: 'Sanayi Sitesi 3. Sokak No:12',
    },
    workingHours: {
      weekdays: '08:30 - 18:30',
      weekend: 'Kapalı',
    },
    uploadedDocuments: [
      { name: 'Ruhsat.png', url: '/mocks/docs/ruhsat.png' },
      { name: 'Ustalık.pdf', url: '/mocks/docs/ustalik2.pdf' },
    ],
    status: 'pending',
    appliedAt: '2026-03-26T09:15:00Z',
  },
];
