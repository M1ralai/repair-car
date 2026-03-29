import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MapPin, ArrowLeft, Car, Phone, CreditCard } from 'lucide-react';
import { mockActiveRequest } from '../../infrastructure/mockData/mockActiveRequest';

export const RequestTrackingPage: React.FC = () => {
  const navigate = useNavigate();
  const request = mockActiveRequest;
  const [showDemoReset, setShowDemoReset] = useState(false);

  useEffect(() => {
    // Simulate real-time push notification 2 seconds after page load
    const timer = setTimeout(() => {
      toast('Sistem Bildirimi: Usta haritada hareket ediyor!', {
        icon: <MapPin className="w-5 h-5 text-sky-500" />,
        duration: 4000,
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white p-6 shadow-sm border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="text-slate-500 hover:text-slate-800 p-1 -ml-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Talep Takibi</h1>
        </div>
        <button 
          onClick={() => {
            toast.success('Sistem başlangıç durumuna döndürüldü.');
            setShowDemoReset(!showDemoReset);
          }}
          className="text-xs font-semibold text-slate-400 border border-slate-200 px-2 py-1 rounded hover:bg-slate-100"
        >
          Reset
        </button>
      </header>

      {/* Map Placeholder (Enhanced for Demo) */}
      <div className="h-64 bg-slate-200 relative overflow-hidden border-b border-slate-200 flex items-center justify-center">
        {/* Fake decorative map grid/lines to simulate a map background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, slate-800 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-sky-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-sky-600 border-2 border-white rounded-full shadow-lg"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border border-slate-100 text-lg">
          <MapPin className="w-5 h-5 text-sky-600" />
        </div>
        
        <div className="relative z-10 text-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-white">
          <span className="flex items-center justify-center gap-1.5 text-sky-700 font-bold mb-1"><Car className="w-4 h-4" /> Canlı Harita Takibi</span>
          <p className="text-sky-600 text-sm font-medium">Usta yolda: {request.estimatedArrivalTime}</p>
        </div>
      </div>

      <div className="p-6 -mt-6 relative z-20">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-2xl font-bold border-2 border-white shadow-sm">
              {request.mechanicName?.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-slate-800 text-lg">{request.mechanicName}</h2>
              <p className="text-slate-500 text-sm">{request.servicePointName} - Usta</p>
            </div>
            <a href={`tel:${request.mechanicPhone}`} className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm hover:bg-green-200 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-semibold text-slate-700 text-sm mb-4">Durum</h3>

            {/* Stepper Timeline */}
            <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              <div className="relative flex items-center gap-4">
                <div className="absolute left-0 mt-1.5 w-3 h-3 rounded-full bg-slate-300 ml-4 border-2 border-white"></div>
                <div className="pl-10">
                  <h4 className="text-slate-500 text-sm font-medium">Talep İletildi</h4>
                </div>
              </div>

              <div className="relative flex items-center gap-4">
                <div className="absolute left-0 mt-1.5 w-3 h-3 rounded-full bg-slate-300 ml-4 border-2 border-white"></div>
                <div className="pl-10">
                  <h4 className="text-slate-500 text-sm font-medium">Talep Kabul Edildi</h4>
                </div>
              </div>

              <div className="relative flex items-center gap-4">
                <div className="absolute left-0 mt-1.5 w-4 h-4 rounded-full bg-sky-500 ml-3.5 border-4 border-sky-100 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                <div className="pl-10">
                  <h4 className="text-sky-700 text-sm font-bold">Usta Yolda</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Tahmini varış: {request.estimatedArrivalTime}</p>
                </div>
              </div>

              <div className="relative flex items-center gap-4 opacity-50">
                <div className="absolute left-0 mt-1.5 w-3 h-3 rounded-full bg-slate-300 ml-4 border-2 border-white"></div>
                <div className="pl-10">
                  <h4 className="text-slate-500 text-sm font-medium">Tamamlandı & Ödeme</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temporary button to simulate completion */}
        <button
          onClick={() => navigate('/payment')}
          className="w-full py-4 border border-sky-200 text-sky-700 font-semibold rounded-xl bg-sky-50 hover:bg-sky-100 transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" /> [Mock] İşi Tamamla ve Ödemeye Geç
        </button>
      </div>
    </div>
  );
};
