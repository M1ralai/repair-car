import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Wand2, ArrowLeft, CheckCircle2, Camera } from 'lucide-react';

export const CreateRequestPage: React.FC = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [needsTow, setNeedsTow] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) {
      toast.error('Lütfen bir açıklama girin.');
      return;
    }
    // Simulate API call to create request, then redirect to tracking
    toast.success('Talebiniz başarıyla oluşturuldu!');
    navigate('/request-tracking/req_1001');
  };

  const handleMagicFill = () => {
    setDescription('Motor arıza lambası yandı ve araçtan yanık kokusu geliyor. Güvenli bir şekilde sağa çektim, motor şu an çalışmıyor. Yarı otomatik vites.');
    setNeedsTow(true);
    setHasPhoto(true);
    toast.success('Form otomatik dolduruldu! (Demo Modu)');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      <header className="bg-white p-6 shadow-sm border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-slate-800 p-1 -ml-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Talep Oluştur</h1>
        </div>
        <button 
          onClick={handleMagicFill}
          className="flex items-center gap-1 text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors"
          title="Sihirli Doldur (Demo)"
        >
          <Wand2 className="w-3 h-3" />
          Sihirli Doldur
        </button>
      </header>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm transition-all">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Sorunu Açıklayın</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none resize-none transition-all"
            rows={4}
            placeholder="Aracınızdaki arızayı veya ihtiyacınızı kısaca belirtin..."
            required
          />
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm transition-all">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Fotoğraf Ekle</label>
          <button 
            type="button" 
            onClick={() => {
              setHasPhoto(!hasPhoto);
              if (!hasPhoto) toast.success('Fotoğraf eklendi simülasyonu');
            }}
            className={`w-full flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg transition-all ${
              hasPhoto 
                ? 'border-sky-400 bg-sky-50 text-sky-700' 
                : 'border-slate-300 bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <span className="mb-2 flex justify-center items-center">{hasPhoto ? <CheckCircle2 className="w-8 h-8 text-emerald-500" /> : <Camera className="w-8 h-8 text-slate-400" />}</span>
            <span className="text-sm font-medium">{hasPhoto ? '1 Fotoğraf Eklendi. Değiştir?' : 'Tıkla veya Fotoğraf Çek'}</span>
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between transition-all">
          <div>
            <span className="font-semibold text-slate-800 block text-sm">Çekici İhtiyacı</span>
            <span className="text-xs text-slate-500">Araç yürür durumda değil mi?</span>
          </div>
          <input 
            type="checkbox" 
            checked={needsTow}
            onChange={(e) => setNeedsTow(e.target.checked)}
            className="w-5 h-5 accent-sky-500 rounded border-slate-300 focus:ring-sky-500 transition-all" 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] text-lg mt-4"
        >
          Talebi Gönder
        </button>
      </form>
    </div>
  );
};
