import type { CustomerReview } from '../../core/domain/types/review';
import { mockServiceList } from './mockServiceList';

export const mockServiceDetails = mockServiceList[0];

export const mockServiceReviews: CustomerReview[] = [
  {
    id: 'rev_1',
    serviceId: 'sp_001',
    userId: 'usr_xyz',
    userName: 'Mehmet K.',
    rating: 5,
    comment: 'Gerçekten çok ilgilendiler. Motor arızasını 2 saatte çözüp teslim ettiler.',
    createdAt: '2023-10-15T10:00:00Z',
  },
  {
    id: 'rev_2',
    serviceId: 'sp_001',
    userId: 'usr_abc',
    userName: 'Ayşe Y.',
    rating: 4,
    comment: 'Fiyatlar biraz yüksek ama işçilik kaliteli.',
    createdAt: '2023-11-02T14:30:00Z',
  }
];
