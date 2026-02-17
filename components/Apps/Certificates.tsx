import React, { useState, useEffect } from 'react';
import SectionContainer from '../WindowFrame';
import { CERTIFICATES } from '../../constants';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Maximize2, X } from 'lucide-react';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying && !isZoomed) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isZoomed]);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length);
    setIsAutoPlaying(false);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
    setIsAutoPlaying(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'Escape') setIsZoomed(false);
  };

  return (
    <SectionContainer
      title="CERTIFICATES"
      subtitle="Industry recognized certifications and achievements."
    >
      <div 
        className="flex flex-col gap-8 outline-none" 
        tabIndex={0} 
        onKeyDown={handleKeyDown}
      >
        
        {/* Main Viewer Card */}
        <div className="relative group w-full bg-cyber-black/40 border border-cyber-card rounded-xl overflow-hidden backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col">
           
           {/* Header Bar */}
           <div className="h-10 bg-cyber-card/30 border-b border-white/5 flex items-center justify-between px-4 select-none">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-cyber-text/80">
                <ShieldCheck size={14} className="text-cyber-success" />
                <span>SECURE_VIEWER_V2 // ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
              </div>
              <button 
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-1.5 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors"
                title="Fullscreen View"
              >
                <Maximize2 size={14} />
              </button>
           </div>

           {/* Image Area */}
           <div className="relative aspect-[4/3] md:aspect-[2/1] lg:aspect-[21/9] w-full bg-black/20 group-hover:bg-black/40 transition-colors">
              
              {/* Image Container with Centering */}
              <div className="absolute inset-0 p-6 md:p-12 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyber-primary/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      key={currentIndex} 
                      src={CERTIFICATES[currentIndex].image} 
                      alt={CERTIFICATES[currentIndex].title}
                      className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl animate-fade-in transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prev}
                className="absolute left-0 top-0 bottom-0 w-12 md:w-20 flex items-center justify-center group/nav hover:bg-gradient-to-r hover:from-black/50 hover:to-transparent transition-all z-20 focus:outline-none"
              >
                <ChevronLeft size={32} className="text-white/20 group-hover/nav:text-cyber-primary transition-all transform group-hover/nav:-translate-x-1" />
              </button>
              <button 
                onClick={next}
                className="absolute right-0 top-0 bottom-0 w-12 md:w-20 flex items-center justify-center group/nav hover:bg-gradient-to-l hover:from-black/50 hover:to-transparent transition-all z-20 focus:outline-none"
              >
                <ChevronRight size={32} className="text-white/20 group-hover/nav:text-cyber-primary transition-all transform group-hover/nav:translate-x-1" />
              </button>
              
              {/* Progress Bar (Bottom Edge) */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-cyber-primary transition-all duration-300 ease-out" style={{ width: `${((currentIndex + 1) / CERTIFICATES.length) * 100}%` }}></div>
           </div>

           {/* Footer Details */}
           <div className="bg-cyber-card/10 border-t border-white/5 p-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary/20 to-transparent flex items-center justify-center text-cyber-primary border border-cyber-primary/20 shrink-0 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                    <Award size={24} />
                 </div>
                 <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg leading-tight">{CERTIFICATES[currentIndex].title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] font-mono text-cyber-primary px-1.5 py-0.5 rounded bg-cyber-primary/10 border border-cyber-primary/20">CERTIFIED</span>
                        <span className="text-[10px] font-mono text-gray-500">#{currentIndex + 1} OF {CERTIFICATES.length}</span>
                    </div>
                 </div>
              </div>
              
              {/* Mini Indicators */}
              <div className="flex gap-1.5 hidden md:flex">
                {CERTIFICATES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentIndex(idx); setIsAutoPlaying(false); }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-cyber-primary' : 'w-1.5 bg-white/10 hover:bg-white/30'}`}
                  />
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in" onClick={() => setIsZoomed(false)}>
           {/* Modal Controls */}
           <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 pointer-events-none">
                <span className="text-white/50 font-mono text-xs pointer-events-auto bg-black/50 px-3 py-1 rounded-full border border-white/10">{currentIndex + 1} / {CERTIFICATES.length}</span>
                <button 
                    onClick={() => setIsZoomed(false)}
                    className="p-3 text-white/70 hover:text-white pointer-events-auto bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5"
                >
                    <X size={24} />
                </button>
           </div>
           
           {/* Modal Image */}
           <div className="flex-1 flex items-center justify-center p-4 md:p-10 w-full h-full overflow-hidden relative">
              <img 
                src={CERTIFICATES[currentIndex].image} 
                alt={CERTIFICATES[currentIndex].title}
                className="max-h-full max-w-full object-contain shadow-2xl animate-fade-in select-none"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Modal Nav */}
              <button 
                onClick={(e) => { prev(e); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <ChevronLeft size={48} />
              </button>
              <button 
                onClick={(e) => { next(e); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <ChevronRight size={48} />
              </button>
           </div>

           <div className="p-6 text-center pointer-events-none">
              <h2 className="text-white text-xl font-bold tracking-wide">{CERTIFICATES[currentIndex].title}</h2>
           </div>
        </div>
      )}

    </SectionContainer>
  );
};

export default Certificates;