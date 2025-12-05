import React from 'react';
import { GlassCard } from './GlassCard';

export const FooterCta: React.FC = () => {
  return (
    <section className="px-4 py-20 w-full flex justify-center">
      <div className="max-w-4xl w-full relative">
        {/* Glow effect behind the card */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
        
        <GlassCard className="p-10 md:p-16 text-center flex flex-col items-center gap-8 relative z-10" hoverEffect={true}>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Июнь — идеальное время
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Вода <span className="text-cyan-300 font-bold">+23°C</span>, толп еще нет. <br />
            Забери свой кусочек лета по цене раннего бронирования.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-4 w-full justify-center">
             <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-cyan-50 transition-colors duration-300 transform hover:-translate-y-1">
               Оставить заявку (WhatsApp)
             </button>
             <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-300">
               Скачать программу PDF
             </button>
          </div>

          <div className="mt-8 text-xs text-white/40 uppercase tracking-widest">
            Осталось 4 места из 12
          </div>
        </GlassCard>
      </div>
    </section>
  );
};