import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-md
        border border-white/20
        shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_0_rgba(0,255,255,0.2)] hover:border-white/40' : ''}
        ${className}
      `}
    >
      {/* Glossy reflection effect */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none rotate-45" />
      
      {children}
    </div>
  );
};