// Domain Types - Profile (Kaynak: 2.5)

export interface OrganizasyonBilgisi {
  isletmeAdi: string;
  telefon: string;
  adres: string;
  gorselUrl: string;
  servisSaatleri: {
    baslangic: string;
    bitis: string;
  };
}

export interface PerformansMetrikleri {
  toplamTamamlananIs: number;
  ortalamaMemnuniyetPuani: number; // 0-5 float
  reddedilmisOrani: number;        // yüzde, örn: 0.05 = %5
  oncekiAyaDegisim: number;        // pozitif = artış, negatif = düşüş
}

export interface MusteriYorumu {
  id: string;
  musteriAdi: string;
  yildizPuani: number; // 1-5
  yorumMetni?: string;
  tamamlanmaTarihi: string; // ISO timestamp
}

export interface ProfilVerisi {
  organizasyon: OrganizasyonBilgisi;
  performans: PerformansMetrikleri;
  yorumlar: MusteriYorumu[];
}
