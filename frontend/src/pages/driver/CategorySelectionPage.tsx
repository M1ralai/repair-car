import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Battery, CircleDashed, Wrench, Car, Droplet, ArrowLeft } from 'lucide-react';
import { mockCategories } from '../../infrastructure/mockData/mockCategories';

export const CategorySelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <header className="mb-6 pt-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-slate-900">Arıza veya Bakım Seçimi</h1>
      </header>

      <p className="text-slate-500 mb-6 text-sm">
        Aracınızdaki sorunun ana kategorisini seçin.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {mockCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => navigate('/service-list')}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center transition-all hover:border-sky-300 hover:shadow-md active:scale-95"
          >
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mb-3">
              {category.iconName === 'engine' && <Settings className="w-6 h-6" />}
              {category.iconName === 'battery' && <Battery className="w-6 h-6" />}
              {category.iconName === 'tire' && <CircleDashed className="w-6 h-6" />}
              {category.iconName === 'wrench' && <Wrench className="w-6 h-6" />}
              {category.iconName === 'car-body' && <Car className="w-6 h-6" />}
              {category.iconName === 'oil' && <Droplet className="w-6 h-6" />}
            </div>
            <h3 className="font-medium text-slate-800">{category.name}</h3>
            <span className="text-[10px] text-slate-400 mt-1 px-2">{category.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
