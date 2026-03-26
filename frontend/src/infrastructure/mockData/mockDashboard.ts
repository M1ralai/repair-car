import type { DashboardStats, ActivityFeedItem } from '../../core/domain/types/dashboard';

export const mockDashboardStats: DashboardStats = {
  totalUsers: 12450,
  totalApprovedServices: 342,
  activeRequests: 48,
  completedJobs: 8900,
  pendingComplaints: 12,
};

export const mockActivityFeed: ActivityFeedItem[] = [
  {
    id: 'act_1',
    type: 'new_service_request',
    description: 'Yeni servis başvurusu alındı: "Özkan Oto Tamir" (Ankara/Çankaya).',
    timestamp: '2026-03-27T10:15:00Z',
    relatedEntityId: 'app_1',
  },
  {
    id: 'act_2',
    type: 'alert',
    description: 'Uzun süredir bekleyen talep! Sürücü "Ahmet Yılmaz" çekici bekliyor.',
    timestamp: '2026-03-27T09:45:00Z',
    relatedEntityId: 'req_1',
  },
  {
    id: 'act_3',
    type: 'job_completed',
    description: 'Talep tamamlandı: "Gündüz Oto" #req_456 numaralı onarımı kapattı.',
    timestamp: '2026-03-27T08:30:00Z',
    relatedEntityId: 'req_456',
  },
  {
    id: 'act_4',
    type: 'new_complaint',
    description: 'Yeni şikayet! "Mehmet Can" adlı kullanıcı "Güven Motor" servisini şikayet etti.',
    timestamp: '2026-03-26T16:20:00Z',
    relatedEntityId: 'comp_1',
  },
];
