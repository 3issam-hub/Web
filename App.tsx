import React, { useState } from 'react';
import { User, Code2, Cpu, Award, Mail, Menu, X, Github, Link, Terminal } from 'lucide-react';
import About from './components/Apps/About';
import Skills from './components/Apps/Skills';
import Projects from './components/Apps/Projects';
import Certificates from './components/Apps/Certificates';
import Contact from './components/Apps/Contact';
import { AppId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppId>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'Identity', icon: User },
    { id: 'skills', label: 'Arsenal', icon: Cpu },
    { id: 'projects', label: 'Missions', icon: Code2 },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Uplink', icon: Mail },
  ] as const;

  const renderContent = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'certificates': return <Certificates />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-gray-300 font-sans selection:bg-cyber-primary selection:text-white overflow-hidden flex relative">
      
      {/* Background FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-primary/5 blur-[100px] rounded-full"></div>
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyber-accent/5 blur-[80px] rounded-full"></div>
      </div>

      {/* Mobile Nav Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-3 right-4 z-50 p-2 bg-cyber-card/80 backdrop-blur border border-white/10 rounded-md md:hidden text-white hover:bg-cyber-primary/20 transition-colors shadow-lg active:scale-95"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-cyber-dark/95 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static shadow-2xl md:shadow-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col p-6">
          {/* Brand */}
          <div className="mb-10 px-2">
            <img 
              src="assets/logo.png" 
              alt="Issam Beniysa" 
              className="w-full max-w-[180px] h-auto object-contain mb-2"
            />
            <p className="text-[10px] text-cyber-primary font-mono pl-1 opacity-80 tracking-wider">SEC_OPS_TERMINAL</p>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2 flex-1 overflow-y-auto custom-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative
                    ${isActive 
                      ? 'bg-cyber-primary/10 text-white border border-cyber-primary/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  <Icon size={18} className={`shrink-0 ${isActive ? 'text-cyber-primary' : 'text-gray-500 group-hover:text-white transition-colors'}`} />
                  <span className="font-mono">{item.label}</span>
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyber-primary rounded-r"></div>}
                </button>
              );
            })}
          </nav>

          {/* Social Footer */}
          <div className="mt-auto pt-6 border-t border-white/5 shrink-0">
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/3issam-hub" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linktr.ee/issam.beniysa" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Linktree">
                <Link size={20} />
              </a>
              <a href="mailto:beniysa.issam@gmail.com" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-center text-[10px] text-gray-600 mt-4 font-mono">
              v2.0.5 // SYSTEM_READY
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto h-screen scroll-smooth w-full">
         {/* Top Bar (Decorative) */}
         <div className="sticky top-0 z-30 h-14 bg-cyber-black/80 backdrop-blur border-b border-white/5 flex items-center justify-between px-4 md:px-8 pr-16 md:pr-8">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 overflow-hidden">
                <Terminal size={14} className="shrink-0" />
                <span className="truncate">root@beniysa:~/{activeSection}</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600 uppercase shrink-0">
                <span className="hidden sm:block">Mem: 64GB // OK</span>
                <span className="text-cyber-success flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-success animate-pulse"></span>
                  Net: UP
                </span>
            </div>
         </div>

         {/* Viewport */}
         <div className="p-4 md:p-8 pb-24 md:pb-8 pt-8">
            {renderContent()}
         </div>
      </main>

    </div>
  );
};

export default App;