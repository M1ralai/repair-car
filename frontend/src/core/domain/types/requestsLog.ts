export type RequestStatus = 'waiting' | 'accepted' | 'on_the_way' | 'completed' | 'cancelled';

export interface DriverSummary {
  name: string;
  phone: string;
}

export interface AssignedServiceSummary {
  id: string;
  name: string;
}

export interface LocationInfo {
  address: string;
  distanceKm?: number;
}

export interface RequestRecord {
  requestId: string;
  driverSummary: DriverSummary;
  assignedServiceSummary?: AssignedServiceSummary;
  issueDescription: string;
  locationInfo: LocationInfo | string;
  status: RequestStatus;
  timeElapsedInMins: number;
  isProblematic: boolean;
  createdAt: string | Date;
}

export type RequestLog = RequestRecord;
