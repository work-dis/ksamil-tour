import React from 'react';
import islandsImg from '../src/assets/locations/islands.jpg';
import boraImg from '../src/assets/locations/bora.jpg';
import butrintImg from '../src/assets/locations/butrint.jpg';
import blueEyeImg from '../src/assets/locations/blue-eye.jpg';
import mirrorImg from '../src/assets/locations/mirror.jpg';
import { GlassCard } from './GlassCard';
import { LocationItem } from '../types';
import { Camera, Anchor, Map, Droplets, Sun } from 'lucide-react';

const locations: LocationItem[] = [
  {
    id: 'islands',
    title: 'Острова Ксамиля',
    description: 'Четыре изумрудных острова, до которых можно доплыть на катамаране или вплавь.',
        imageUrl: islandsImg,
    highlight: 'Острова'
  },
  {
    id: 'bora-bora',
    title: 'Пляж Бора-Бора',
    description: 'Белоснежный песок и деревянные пирсы. Главная инста-локация побережья.',
        imageUrl: boraImg,
    highlight: 'Белый песок'
  },
  {
    id: 'butrint',
    title: 'Нацпарк Бутринт',
    description: 'Древний город ЮНЕСКО: римский амфитеатр и руины среди эвкалиптов. Всего 10 минут езды.',
        imageUrl: butrintImg,
    highlight: 'ЮНЕСКО'
  },
  {
    id: 'blue-eye',
    title: 'Голубой глаз',
    description: 'Мистический карстовый источник с ледяной водой нереального синего цвета.',
        imageUrl: blueEyeImg,
    highlight: 'Syri i Kaltër'
  },
  {
    id: 'mirror',
    title: 'Пляж Зеркало',
    description: 'Pasqyra Beach. Уединенная бухта, где вода отражает солнце так ярко, что слепит глаза.',
        imageUrl: mirrorImg,
    highlight: 'Pasqyra Beach'
  }
];

export const Locations: React.FC = () => {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-white drop-shadow-md">
          Must Visit
        </h2>
        <div className="h-1 w-24 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((loc, index) => (
          <GlassCard key={loc.id} className="group h-full flex flex-col" hoverEffect={true}>
            {/* Image Container */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={loc.imageUrl} 
                alt={loc.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Highlight Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold uppercase tracking-wider text-white">
                {loc.highlight}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold mb-3 text-cyan-50">{loc.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm flex-grow">
                {loc.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-cyan-300 text-sm">
                <span className="flex items-center gap-2">
                   {index === 0 ? <Anchor size={16}/> : 
                    index === 1 ? <Sun size={16}/> :
                    index === 2 ? <Map size={16}/> :
                    index === 3 ? <Droplets size={16}/> : <Camera size={16}/>
                   }
                   Подробнее
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  →
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
