export interface ServicePointDetail {
  id: string;
  name: string;
  distance: number; // km
  rating: number;
  reviewCount: number;
  isVerified: boolean; // RepairCar Onarım Noktası rozeti
  workingHours: string;
  address: string;
  phone: string;
  specialties: string[];
  imageUrl?: string;
  latitude: number;
  longitude: number;
  about?: string;
}
