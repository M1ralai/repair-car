import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Heart, ScrollText, Car } from 'lucide-react';

export const MobileAppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen bg-slate-50 w-full max-w-md mx-auto relative shadow-lg overflow-hidden">
      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full h-16 bg-white border-t border-slate-200 flex items-center justify-around z-50">
        <Link to="/home" className={`flex flex-col items-center justify-center w-full h-full ${location.pathname === '/home' ? 'text-sky-500' : 'text-slate-500'} hover:bg-slate-50`}>
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Ana Sayfa</span>
        </Link>
        <Link to="/favorites" className={`flex flex-col items-center justify-center w-full h-full ${location.pathname === '/favorites' ? 'text-sky-500' : 'text-slate-500'} hover:bg-slate-50`}>
          <Heart className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Favoriler</span>
        </Link>
        <Link to="/history" className={`flex flex-col items-center justify-center w-full h-full ${location.pathname === '/history' ? 'text-sky-500' : 'text-slate-500'} hover:bg-slate-50`}>
          <ScrollText className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Geçmiş</span>
        </Link>
        <Link to="/garage" className={`flex flex-col items-center justify-center w-full h-full ${location.pathname === '/garage' ? 'text-sky-500' : 'text-slate-500'} hover:bg-slate-50`}>
          <Car className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Garajım</span>
        </Link>
      </nav>
    </div>
  );
};
