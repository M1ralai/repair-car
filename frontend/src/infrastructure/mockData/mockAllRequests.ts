import type { RequestRecord } from '../../core/domain/types/requestsLog';

export const mockAllRequests: RequestRecord[] = [
  {
    requestId: 'req_1',
    driverSummary: { name: 'Ahmet Yılmaz', phone: '0555 000 11 22' },
    assignedServiceSummary: { id: 'sp_2', name: 'Akıncı Kurtarıcı' },
    issueDescription: 'Araç otobanda arıza yaptı, çalışmıyor.',
    locationInfo: { address: 'TEM Otoyolu Kurtköy Mevkii', distanceKm: 15 },
    status: 'accepted',
    timeElapsedInMins: 125, // Çok uzun sürmüş, isProblematic: true
    isProblematic: true,
    createdAt: '2026-03-27T08:00:00Z',
  },
  {
    requestId: 'req_2',
    driverSummary: { name: 'Ayşe Demir', phone: '0532 111 22 33' },
    issueDescription: 'Akü bitti, takviye lazım.',
    locationInfo: { address: 'Kadıköy, Moda Caddesi', distanceKm: 2 },
    status: 'waiting',
    timeElapsedInMins: 12,
    isProblematic: false,
    createdAt: '2026-03-27T11:00:00Z',
  },
  {
    requestId: 'req_3',
    driverSummary: { name: 'Kemal Sunal', phone: '0544 222 33 44' },
    assignedServiceSummary: { id: 'sp_1', name: 'Güven Motor' },
    issueDescription: 'Motor arıza lambası yandı',
    locationInfo: { address: 'Şişli Merkez', distanceKm: 5 },
    status: 'completed',
    timeElapsedInMins: 45,
    isProblematic: false,
    createdAt: '2026-03-26T14:30:00Z',
  },
  {
    requestId: 'req_4',
    driverSummary: { name: 'Fatma Şahin', phone: '0555 333 44 55' },
    assignedServiceSummary: { id: 'sp_3', name: 'Kardeşler Oto' },
    issueDescription: 'Lastik patladı',
    locationInfo: { address: 'Yenimahalle Batıkent', distanceKm: 8 },
    status: 'on_the_way',
    timeElapsedInMins: 20,
    isProblematic: false,
    createdAt: '2026-03-27T10:45:00Z',
  },
];
