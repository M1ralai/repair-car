import type { PlatformComplaint, QualityMetricsReport } from '../../core/domain/types/qualityPlatform';

export const mockComplaints: PlatformComplaint[] = [
  {
    id: 'comp_1',
    driverId: 'drv_1',
    driverName: 'Mehmet Can',
    serviceId: 'sp_1',
    serviceName: 'Güven Motor',
    reason: 'Fiyatlandırma Şikayeti',
    description: 'Anlaşılan fiyattan 3 katı fazla para talep edildi. Hizmetten hiç memnun kalmadım.',
    status: 'pending_review',
    createdAt: '2026-03-26T16:20:00Z',
  },
  {
    id: 'comp_2',
    driverId: 'drv_2',
    driverName: 'Zeynep Ak',
    serviceId: 'sp_5',
    serviceName: 'Sorunlu Servis Ustası',
    reason: 'Kötü İşçilik',
    description: 'Aracımın kaportasında hasar oluşmuş tamir sırasında.',
    status: 'resolved',
    createdAt: '2026-03-20T10:00:00Z',
  },
  {
    id: 'comp_3',
    driverId: 'drv_3',
    driverName: 'Burak Yılmaz',
    serviceId: 'sp_3',
    serviceName: 'Kardeşler Oto',
    reason: 'Gecikme',
    description: 'Bana 30 dakikada geliriz dediler, 2 saat bekledim.',
    status: 'ignored',
    createdAt: '2026-03-15T09:30:00Z',
  },
];

export const mockQualityMetrics: QualityMetricsReport[] = [
  {
    serviceId: 'sp_5',
    serviceName: 'Sorunlu Servis Ustası',
    averageRating: 1.5,
    totalCompletedJobs: 12,
    recentComplaintsCount: 4,
    accountStatus: 'warned',
  },
  {
    serviceId: 'sp_3',
    serviceName: 'Kardeşler Oto',
    averageRating: 3.5,
    totalCompletedJobs: 45,
    recentComplaintsCount: 2,
    accountStatus: 'active',
  },
  {
    serviceId: 'sp_1',
    serviceName: 'Güven Motor',
    averageRating: 4.8,
    totalCompletedJobs: 320,
    recentComplaintsCount: 1,
    accountStatus: 'active',
  },
  {
    serviceId: 'sp_2',
    serviceName: 'Akıncı Kurtarıcı',
    averageRating: 4.9,
    totalCompletedJobs: 850,
    recentComplaintsCount: 0,
    accountStatus: 'active',
  },
];
