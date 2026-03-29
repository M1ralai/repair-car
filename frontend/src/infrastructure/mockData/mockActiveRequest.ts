import type { RequestTrackerStatus } from '../../core/domain/types/request';

export const mockActiveRequest: RequestTrackerStatus = {
  id: 'req_1001',
  status: 'ON_THE_WAY',
  servicePointId: 'sp_002',
  servicePointName: 'Hızlı Lastikçi',
  createdAt: new Date(Date.now() - 15 * 60000).toISOString(), // 15 mins ago
  estimatedArrivalTime: '12 dakika',
  mechanicName: 'Ali Usta',
  mechanicPhone: '+905321112233',
};
