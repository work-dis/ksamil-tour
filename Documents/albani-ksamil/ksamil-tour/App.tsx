import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Locations } from './components/Locations';
import { SafetyCheck } from './components/SafetyCheck';
import { FooterCta } from './components/FooterCta';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-sans text-white overflow-x-hidden">
      {/* Background Layer - Fixed to create depth for glass elements */}
      <div 
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2874&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85) contrast(1.1)'
        }}
      />
      
      {/* Overlay gradient for better text readability and "underwater" feel */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-cyan-900/30 via-blue-900/20 to-indigo-900/60 mix-blend-overlay pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col gap-24 pb-20">
        <Hero />
        <Locations />
        <SafetyCheck />
        <FooterCta />
      </main>

      {/* Floating Action Button for Scroll Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-cyan-400/30 z-50 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default App;