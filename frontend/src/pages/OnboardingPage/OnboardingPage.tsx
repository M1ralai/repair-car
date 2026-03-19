import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TextInput, 
  SelectBox, 
  TimePicker, 
  FileUploader, 
  Button 
} from '../../presentation/components';
import type { CekiciBasvuruFormuData, ServisBasvuruFormuData, BasvuruFormuData } from '../../core/domain/types/onboarding';
import './OnboardingPage.css';

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'servis' | 'cekici'>('servis');
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    isletmeAdi: '',
    telefon: '',
    adres: '',
    sehir: '',
    ilce: 'Merkez', // Default for demo
    uzmanlik: '',
    aracTipi: '',
    tasımaKapasitesiKg: 3000, // Default for demo
    baslangic: '08:00',
    bitis: '18:00'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Tip güvenli (type-safe) form payload'unun oluşturulması
    let payload: BasvuruFormuData;
    
    const baseData = {
      isletmeAdi: formData.isletmeAdi,
      telefon: formData.telefon,
      adres: formData.adres,
      sehir: formData.sehir,
      ilce: formData.ilce,
      calismaSaatleri: {
        baslangic: formData.baslangic,
        bitis: formData.bitis
      },
      yuklenenBelgeler: files.map(f => f.name), // Mock document urls
    };

    if (role === 'servis') {
      payload = {
        ...baseData,
        tip: 'servis',
        uzmanlikAlani: formData.uzmanlik,
        hizmetVerilenMarkalar: ['Tüm Markalar'], // Mock
      } as ServisBasvuruFormuData;
    } else {
      payload = {
        ...baseData,
        tip: 'cekici',
        aracTipi: formData.aracTipi,
        tasımaKapasitesiKg: formData.tasımaKapasitesiKg,
      } as CekiciBasvuruFormuData;
    }

    // Konsola basarak tipin kullanıldığını doğrulayabilirsiniz
    console.log('Sunucuya gönderilecek payload:', payload);

    // Submit logic mock -> Redirect to success/pending mock
    setTimeout(() => {
      setIsLoading(false);
      alert('Başvurunuz başarıyla alındı. Onay bekliyor.');
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="onboarding-page app-container">
      <header className="onboarding-header">
        <h1 className="onboarding-logo">RepairCar</h1>
      </header>

      <div className="onboarding-card fade-in-up">
        <h2 className="onboarding-title">Hizmet Noktası Başvurusu</h2>
        
        <div className="role-selector">
          <label className={`role-option${role === 'servis' ? ' is-selected' : ''}`}>
            <input type="radio" value="servis" checked={role === 'servis'} onChange={() => setRole('servis')} />
            Servis & Usta
          </label>
          <label className={`role-option${role === 'cekici' ? ' is-selected' : ''}`}>
            <input type="radio" value="cekici" checked={role === 'cekici'} onChange={() => setRole('cekici')} />
            Çekici Firması
          </label>
        </div>

        <form onSubmit={handleSubmit} className="onboarding-form">
          <TextInput 
            label="İşletme Adı" 
            value={formData.isletmeAdi} 
            onChange={(v) => setFormData({...formData, isletmeAdi: v})} 
            required
            placeholder="Örn: Garaj Oto Servis"
          />
          <TextInput 
            label="Telefon Numaranız" 
            type="tel"
            value={formData.telefon} 
            onChange={(v) => setFormData({...formData, telefon: v})} 
            required
            placeholder="05XX XXX XX XX"
          />
          <SelectBox 
            label="Şehir"
            value={formData.sehir}
            onChange={(v) => setFormData({...formData, sehir: v})} 
            options={[{value:'34', label:'İstanbul'}, {value:'06', label:'Ankara'}]}
            required
          />
          <TextInput 
            label="Açık Adres" 
            value={formData.adres} 
            onChange={(v) => setFormData({...formData, adres: v})} 
            required
          />

          {role === 'servis' ? (
            <TextInput 
              label="Uzmanlık Alanı" 
              value={formData.uzmanlik} 
              onChange={(v) => setFormData({...formData, uzmanlik: v})} 
              placeholder="Örn: Motor, Elektrik, Lastik"
            />
          ) : (
             <SelectBox 
               label="Çekici Araç Tipi"
               value={formData.aracTipi}
               onChange={(v) => setFormData({...formData, aracTipi: v})}
               options={[{value:'kayar', label:'Kayar Kasa'}, {value:'ahtapot', label:'Ahtapot Sistemi'}]}
             />
          )}

          <div className="form-row">
            <TimePicker label="Mesai Başlangıç" value={formData.baslangic} onChange={(v) => setFormData({...formData, baslangic: v})} />
            <TimePicker label="Mesai Bitiş" value={formData.bitis} onChange={(v) => setFormData({...formData, bitis: v})} />
          </div>

          <FileUploader 
            label="Yasal Belgeler (Vergi Levhası vb.)"
            files={files}
            onFilesChange={setFiles}
            required
          />

          <Button type="submit" fullWidth size="lg" loading={isLoading}>
            Başvuruyu Tamamla
          </Button>
        </form>
      </div>
    </div>
  );
};
