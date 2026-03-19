// Domain Types - Onboarding (Kaynak: 2.1, 3.0)

export interface CalismaBecerileri {
  baslangic: string; // HH:MM
  bitis: string;     // HH:MM
}

// Servis Başvuru Formu
export interface ServisBasvuruFormuData {
  isletmeAdi: string;
  uzmanlikAlani: string;
  telefon: string;
  adres: string;
  sehir: string;
  ilce: string;
  hizmetVerilenMarkalar: string[];
  calismaSaatleri: CalismaBecerileri;
  yuklenenBelgeler: string[];
  tip: 'servis';
}

// Çekici Başvuru Formu (3.0 farkları dahil)
export interface CekiciBasvuruFormuData {
  isletmeAdi: string;
  telefon: string;
  adres: string;
  sehir: string;
  ilce: string;
  aracTipi: string; // 'Kayar Kasa' | 'Ahtapot Sistemi' vb.
  tasımaKapasitesiKg: number;
  calismaSaatleri: CalismaBecerileri;
  yuklenenBelgeler: string[];
  tip: 'cekici';
}

export type BasvuruFormuData = ServisBasvuruFormuData | CekiciBasvuruFormuData;
