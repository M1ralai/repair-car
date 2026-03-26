export type ServiceApplicationStatus = 'pending' | 'approved' | 'rejected' | 'revision_requested';

export interface UploadedDocument {
  name: string;
  url: string;
}

export interface AddressDetails {
  city: string;
  district: string;
  fullAddress: string;
}

export interface WorkingHours {
  weekdays: string;
  weekend: string;
}

export interface ServiceApplication {
  id: string;
  shopName: string;
  expertiseCategory: string; // e.g., 'Mekanik', 'Kaporta', 'Oto Kurtarma'
  contactNumber: string;
  addressDetails: AddressDetails;
  workingHours: WorkingHours | string;
  uploadedDocuments: UploadedDocument[];
  status: ServiceApplicationStatus;
  appliedAt: string | Date;
}
