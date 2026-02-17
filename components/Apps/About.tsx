import React from 'react';
import SectionContainer from '../WindowFrame';
import { Terminal, Target, Cpu, Bug, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionContainer 
      title="IDENTITY_VERIFICATION" 
      subtitle="Comprehensive dossier on professional background, objectives, and operational status."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 md:gap-12">
        
        {/* Left Column: Bio & Info - First on Mobile, Left on Desktop */}
        <div className="space-y-6 lg:space-y-8">
          <div className="glass-card p-6 rounded-lg tech-border bg-gradient-to-br from-cyber-card/50 to-transparent">
            <div className="flex items-center gap-3 mb-4 text-cyber-primary">
              <Terminal className="w-5 h-5" />
              <h3 className="font-mono font-bold">EXECUTIVE_SUMMARY</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
              I am an <span className="text-white font-semibold">optimistic, committed, and determined</span> professional focused on advancing my career in <span className="text-cyber-primary">Cybersecurity and IT Operations</span>. 
            </p>
            <p className="text-gray-400 leading-relaxed mt-4 text-sm md:text-base">
              My primary objective is to acquire and develop new skills to continuously progress and achieve excellence in my field. I am motivated by constant learning and the improvement of my abilities to contribute effectively to any working environment.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://linktr.ee/issam.beniysa" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/50 hover:bg-cyber-primary hover:text-white transition-all rounded text-sm font-mono group">
                ACCESS_LINKTREE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-lg border border-cyber-card hover:border-cyber-danger/50 transition-colors">
              <Target className="w-8 h-8 text-cyber-danger mb-3" />
              <h4 className="font-bold text-white mb-1">Attack</h4>
              <p className="text-xs text-cyber-text">Red teaming operations and adversarial simulations.</p>
            </div>
            <div className="glass-card p-4 rounded-lg border border-cyber-card hover:border-cyber-accent/50 transition-colors">
              <Cpu className="w-8 h-8 text-cyber-accent mb-3" />
              <h4 className="font-bold text-white mb-1">Infrastructure</h4>
              <p className="text-xs text-cyber-text">Enterprise network architecture and virtualization.</p>
            </div>
            <div className="glass-card p-4 rounded-lg border border-cyber-card hover:border-cyber-primary/50 transition-colors">
              <Bug className="w-8 h-8 text-cyber-primary mb-3" />
              <h4 className="font-bold text-white mb-1">Bug Hunting</h4>
              <p className="text-xs text-cyber-text">Vulnerability discovery and zero-day research.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Photo & Stats - Second on Mobile, Right on Desktop */}
        <div className="space-y-6 mt-4 lg:mt-0">
          <div className="relative group max-w-sm mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-cyber-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative glass-card p-2 rounded-xl tech-border overflow-hidden bg-black/40">
              <img 
                src="assets/pic12.jpg" 
                alt="Issam Beniysa" 
                className="w-full h-auto rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500 object-cover aspect-square"
                loading="lazy"
              />
              <div className="mt-4 text-center pb-2">
                <h2 className="text-xl font-bold text-white">Issam Beniysa</h2>
                <p className="text-cyber-primary text-sm font-mono">Cybersecurity Analyst</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-lg font-mono text-xs space-y-3 border border-cyber-card bg-black/40 max-w-sm mx-auto lg:max-w-none shadow-xl">
            <div className="flex justify-between border-b border-cyber-card pb-2">
              <span className="text-gray-500">STATUS</span>
              <span className="text-cyber-success flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyber-success animate-pulse"></span> ONLINE</span>
            </div>
            <div className="flex justify-between border-b border-cyber-card py-2">
              <span className="text-gray-500">LOCATION</span>
              <span className="text-white">Morocco</span>
            </div>
            <div className="flex justify-between border-b border-cyber-card py-2">
              <span className="text-gray-500">EXPERIENCE</span>
              <span className="text-white">MID-LEVEL</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-gray-500">CLEARANCE</span>
              <span className="text-cyber-accent">LEVEL 3</span>
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};

export default About;