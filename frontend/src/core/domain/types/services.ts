export interface ServicePoint {
  id: string;
  shopName: string;
  city: string;
  district: string;
  categories: string[];
  isRepairCarApproved: boolean;
  isActive: boolean;
  rating: number;
  contactNumber?: string;
}

export interface ServiceFilterOptions {
  searchTerm: string;
  city: string;
  district?: string;
  category: string;
  status: string; // 'all' | 'active' | 'passive' | 'approved'
}
