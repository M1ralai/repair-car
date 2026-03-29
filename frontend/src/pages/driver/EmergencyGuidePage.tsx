import React, { useState } from 'react';
import { ShieldAlert, TriangleAlert, Ambulance, Siren, ChevronDown } from 'lucide-react';
import { mockEmergencyGuides } from '../../infrastructure/mockData/mockPremiumData';

export const EmergencyGuidePage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <header className="mb-6 pt-4 flex items-center gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Acil Durum Rehberi</h1>
        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold shadow-sm">SOS</span>
      </header>

      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        Olası kaza ve arıza anlarında panik yapmadan adımları takip edebilirsiniz.
      </p>

      <div className="space-y-3">
        {mockEmergencyGuides.map(guide => (
          <div key={guide.id} className="bg-white border text-sm border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
            <button 
              onClick={() => toggleAccordion(guide.id)}
              className="w-full text-left p-4 font-semibold text-slate-800 hover:bg-slate-50 flex justify-between items-center"
            >
              <span className="flex items-center">{guide.category === 'ACCIDENT' ? <ShieldAlert className="w-5 h-5 mr-2 text-red-500" /> : <TriangleAlert className="w-5 h-5 mr-2 text-amber-500" />}{guide.title}</span>
              <span className={`text-slate-400 transition-transform ${openId === guide.id ? 'rotate-180' : ''}`}><ChevronDown className="w-4 h-4" /></span>
            </button>
            
            {openId === guide.id && (
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-slate-600 whitespace-pre-line leading-relaxed pb-6">
                {guide.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Quick Dial Action */}
      <div className="mt-8 border-t border-slate-200 pt-6">
        <h2 className="font-bold text-slate-800 mb-3 text-sm px-1">Acil Numaralar</h2>
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:112" className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl font-bold text-center shadow-sm flex flex-col items-center gap-1 active:scale-95 transition-transform">
            <Ambulance className="w-6 h-6 mb-1" />
            112 Acil
          </a>
          <a href="tel:155" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold text-center shadow-sm flex flex-col items-center gap-1 active:scale-95 transition-transform">
            <Siren className="w-6 h-6 mb-1" />
            155 Polis
          </a>
        </div>
      </div>
    </div>
  );
};
