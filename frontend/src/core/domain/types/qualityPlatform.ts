export type ComplaintStatus = 'pending_review' | 'resolved' | 'ignored';
export type AccountStatus = 'active' | 'warned' | 'suspended';

export interface PlatformComplaint {
  id: string;
  driverId: string;
  serviceId: string;
  serviceName?: string;
  driverName?: string;
  reason: string;
  description: string;
  status: ComplaintStatus;
  createdAt: string | Date;
}

export interface QualityMetricsReport {
  serviceId: string;
  serviceName?: string;
  averageRating: number;
  totalCompletedJobs: number;
  recentComplaintsCount: number;
  accountStatus: AccountStatus;
}
