export interface DashboardStats {
  totalUsers: number;
  totalApprovedServices: number;
  activeRequests: number;
  completedJobs: number;
  pendingComplaints: number;
}

export type ActivityType = 'new_service_request' | 'new_complaint' | 'job_completed' | 'alert';

export interface ActivityFeedItem {
  id: string;
  type: ActivityType;
  description: string;
  timestamp: string | Date;
  relatedEntityId: string;
}
