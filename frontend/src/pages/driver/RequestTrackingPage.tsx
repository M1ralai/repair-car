import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockActiveRequest } from '../../infrastructure/mockData/mockActiveRequest';

export const RequestTrackingPage: React.FC = () => {
  const navigate = useNavigate();
  const request = mockActiveRequest;

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white p-6 shadow-sm border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="text-slate-500 hover:text-slate-800 p-1 -ml-2">
            <span className="text-xl">←</span>
          </button>
          <h1 className="text-lg font-bold text-slate-900">Talep Takibi</h1>
        </div>
        <span className="text-xs font-semibold text-slate-400">#{request.id}</span>
      </header>

      {/* Map Placeholder */}
      <div className="h-64 bg-sky-100 flex items-center justify-center border-b border-slate-200">
        <div className="text-center">
          <span className="text-4xl mb-2 block">🗺️</span>
          <span className="text-sky-700 font-medium">Harita Görünümü</span>
          <p className="text-sky-600 text-sm mt-1">Usta yolda: {request.estimatedArrivalTime}</p>
        </div>
      </div>

      <div className="p-6 -mt-6 relative z-10">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-2xl font-bold">
              {request.mechanicName?.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-slate-800 text-lg">{request.mechanicName}</h2>
              <p className="text-slate-500 text-sm">{request.servicePointName} - Usta</p>
            </div>
            <a href={`tel:${request.mechanicPhone}`} className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
              📞
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
                <div className="absolute left-0 mt-1.5 w-4 h-4 rounded-full bg-sky-500 ml-3.5 border-4 border-sky-100"></div>
                <div className="pl-10">
                  <h4 className="text-sky-700 text-sm font-bold">Usta Yolda</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Tahmini varış: {request.estimatedArrivalTime}</p>
                </div>
              </div>

              <div className="relative flex items-center gap-4 opacity-50">
                <div className="absolute left-0 mt-1.5 w-3 h-3 rounded-full bg-slate-300 ml-4 border-2 border-white"></div>
                <div className="pl-10">
                  <h4 className="text-slate-500 text-sm font-medium">Tamamlandı</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temporary button to simulate completion */}
        <button
          onClick={() => navigate('/add-review')}
          className="w-full py-4 border-2 border-dashed border-green-300 text-green-600 font-semibold rounded-xl bg-green-50"
        >
          [Mock] İşlemi Tamamlandı Olarak İşaretle (Test)
        </button>
      </div>
    </div>
  );
};
