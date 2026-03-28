export interface VehicleProfile {
  id: string;
  make: string;
  model: string;
  year: number;
  plate: string;
  chassisNumber?: string;
}

export interface ServiceRequestHistoryItem {
  id: string;
  date: string;
  serviceName: string;
  problemSummary: string;
  cost: number;
  currency: string;
  ratingGiven?: number;
}

export interface PriceCatalog {
  category: string;
  minPrice: number;
  maxPrice: number;
  currency: string;
}

export interface EmergencyGuideArticle {
  id: string;
  title: string;
  content: string;
  category: 'ACCIDENT' | 'BREAKDOWN' | 'FIRST_AID';
}
