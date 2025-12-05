import React from 'react';
import { GlassCard } from './GlassCard';
import { RiskItem } from '../types';
import { Sun, Car, Languages, ShieldAlert, Activity, Fish } from 'lucide-react';

const risks: RiskItem[] = [
  { 
    id: 'sun', 
    title: 'Солнечные ожоги', 
    percentage: 90, 
    description: 'UV-индекс экстремальный. SPF 50+ обязателен.', 
    icon: Sun,
    colorClass: 'from-orange-400 to-red-500' 
  },
  { 
    id: 'traffic', 
    title: 'Хаотичное движение', 
    percentage: 80, 
    description: 'Специфический стиль вождения. Внимание на дорогах!', 
    icon: Car,
    colorClass: 'from-yellow-400 to-orange-500' 
  },
  { 
    id: 'urchins', 
    title: 'Морские ежи', 
    percentage: 40, 
    description: 'На диких пляжах и камнях. Нужны "коралловые тапочки".', 
    icon: Fish,
    colorClass: 'from-purple-400 to-pink-500' 
  },
  { 
    id: 'language', 
    title: 'Языковой барьер', 
    percentage: 30, 
    description: 'Английский понимают плохо. Язык жестов спасает.', 
    icon: Languages,
    colorClass: 'from-blue-400 to-cyan-500' 
  },
  { 
    id: 'crime', 
    title: 'Кражи / Криминал', 
    percentage: 5, 
    description: 'Албания безопаснее Парижа. Люди очень гостеприимны.', 
    icon: ShieldAlert,
    colorClass: 'from-green-400 to-emerald-500' 
  },
  { 
    id: 'quake', 
    title: 'Землетрясения', 
    percentage: 1, 
    description: 'Редкое явление. Вероятность крайне мала.', 
    icon: Activity,
    colorClass: 'from-gray-400 to-gray-500' 
  },
];

export const SafetyCheck: React.FC = () => {
  return (
    <section className="px-4 md:px-8 max-w-5xl mx-auto w-full">
      <GlassCard className="p-8 md:p-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Safety Check</h2>
          <p className="text-cyan-200">Чего стоит (и не стоит) бояться: прогноз на июнь 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {risks.map((risk) => (
            <div key={risk.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <risk.icon className="w-5 h-5 text-white/80" />
                  <span className="font-semibold text-white tracking-wide">{risk.title}</span>
                </div>
                <span className="text-sm font-bold text-cyan-300">{risk.percentage}%</span>
              </div>
              
              {/* Liquid Progress Bar Track */}
              <div className="h-4 w-full bg-black/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative shadow-inner">
                {/* Liquid Fill */}
                <div 
                  className={`h-full absolute left-0 top-0 rounded-full bg-gradient-to-r ${risk.colorClass} shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-1000 ease-out`}
                  style={{ width: `${risk.percentage}%` }}
                >
                    {/* Shimmer overlay on the bar */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent w-full h-full" />
                </div>
              </div>

              <p className="text-xs text-white/60 pl-1">{risk.description}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
};