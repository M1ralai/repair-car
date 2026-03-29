export interface CustomerReview {
  id: string;
  serviceId: string;
  userId: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
  userName?: string;
}

export interface Complaint {
  id: string;
  requestId: string;
  reason: string;
  description: string;
  status: 'OPEN' | 'RESOLVED';
}
