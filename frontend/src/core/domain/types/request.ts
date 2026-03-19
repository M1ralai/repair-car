// Domain Types - Request (Kaynak: 2.3, 2.4, 3.0)

export interface Koordinat {
  lat: number;
  lng: number;
}

export type TalepDurumu =
  | 'beklemede'
  | 'kabul_edildi'
  | 'yola_cikti'
  | 'ulasıldı'
  | 'yuklendi'
  | 'tamamlandi'
  | 'reddedildi';

export interface TalepListesiItem {
  id: string;
  surucu: string;
  arizaKategorisi: string;
  mesafe: number;
  mesafeBirim: string;
  koordinat: Koordinat;
  aciklama: string;
  olusturmaZamani: string; // ISO timestamp
  durum: TalepDurumu;
  acil: boolean;
  tip: 'servis' | 'cekici';
  // Çekici'ye özel
  hasarVarMi?: boolean;
  hedefKoordinat?: Koordinat;
  hedefAdres?: string;
}

export interface MusteriProfil {
  isim: string;
  telefon: string;
}

export interface AracBilgisi {
  marka: string;
  model: string;
  yil: number;
  plaka: string;
}

export interface DurumGecmisi {
  durum: TalepDurumu;
  zaman: string; // ISO timestamp
}

export interface KapsamliTalepDetayi {
  id: string;
  musteri: MusteriProfil;
  arac: AracBilgisi;
  koordinat: Koordinat;
  acikAdres: string;
  arizaNotu: string;
  medyaUrls: string[];
  canliDurumIndexi: number;
  durumZamancizgisi: DurumGecmisi[];
  tip: 'servis' | 'cekici';
  // Çekici'ye özel
  hedefKoordinat?: Koordinat;
  hedefAdres?: string;
}
