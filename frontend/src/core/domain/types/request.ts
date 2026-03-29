export interface HelpRequestForm {
  vehicleId?: string;
  vehicleModel?: string; // used if no vehicleId
  problemDescription: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  imageUrls: string[];
  requiresTowTruck: boolean;
  useInsurance: boolean;
}

export type RequestStatus = 'PENDING' | 'ACCEPTED' | 'ON_THE_WAY' | 'COMPLETED' | 'CANCELLED';

export interface RequestTrackerStatus {
  id: string;
  status: RequestStatus;
  servicePointId: string;
  createdAt: string;
  estimatedArrivalTime?: string;
  mechanicName?: string;
  mechanicPhone?: string;
  servicePointName?: string;
}

export type TalepDurumu = 'beklemede' | 'kabul_edildi' | 'yola_cikti' | 'ulasıldı' | 'yuklendi' | 'tamamlandi' | 'reddedildi';

export interface Koordinat {
  lat: number;
  lng: number;
}

export interface TalepListesiItem {
  id: string;
  surucu: string;
  arizaKategorisi: string;
  mesafe: number;
  mesafeBirim: string;
  koordinat: Koordinat;
  aciklama: string;
  olusturmaZamani: string;
  durum: TalepDurumu;
  acil: boolean;
  tip: 'servis' | 'cekici';
  hasarVarMi?: boolean;
  hedefKoordinat?: Koordinat;
  hedefAdres?: string;
}

export interface KapsamliTalepDetayi {
  id: string;
  musteri: { isim: string; telefon: string };
  arac: { marka: string; model: string; yil: number; plaka: string };
  koordinat: Koordinat;
  acikAdres: string;
  arizaNotu: string;
  medyaUrls: string[];
  canliDurumIndexi: number;
  durumZamancizgisi: { durum: TalepDurumu; zaman: string }[];
  tip: 'servis' | 'cekici';
  hedefKoordinat?: Koordinat;
  hedefAdres?: string;
}
