import React from 'react';
import { Plane, Calendar, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-8 animate-float">
        
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-300/30 text-cyan-100 text-sm uppercase tracking-widest font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Plane className="w-4 h-4" />
          <span>Варшава → Тирана → Рай</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-cyan-100 drop-shadow-lg leading-tight">
          Ксамиль: Твои персональные<br />
          <span className="italic text-cyan-300">Мальдивы</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md">
          Белоснежный песок, 8 ночей рая и полная перезагрузка всего за 3 часа лёту.
        </p>

        {/* Info Grid (Dates, Price) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <Calendar className="w-6 h-6 text-cyan-300" />
            <span className="text-lg font-medium">16.06.2026 – 24.06.2026</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <MapPin className="w-6 h-6 text-cyan-300" />
            <span className="text-lg font-medium">Ксамиль, Албания</span>
          </div>
        </div>

        {/* Price Capsule */}
        <div className="mt-8 relative group cursor-pointer">
           <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
           <div className="relative px-8 py-6 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col items-center justify-center">
              <span className="text-sm text-cyan-200 uppercase tracking-widest mb-1">Все включено</span>
              <span className="text-4xl font-bold font-serif text-white">XXXX BYN</span>
              <span className="text-xs text-white/60 mt-1">Перелёт + Жильё</span>
           </div>
        </div>

        {/* CTA Button */}
        <button className="relative group px-10 py-4 mt-8 overflow-hidden rounded-full bg-cyan-500 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
          <span className="relative text-lg">Забронировать место под солнцем</span>
        </button>

      </div>
    </section>
  );
};