import React from 'react';
import SectionContainer from '../WindowFrame';
import { PROJECTS } from '../../constants';
import { ExternalLink, Database, Code2, Server } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionContainer 
      title="MISSION_LOGS" 
      subtitle="Deployed projects and security research initiatives."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group relative glass-card rounded-xl overflow-hidden border border-cyber-card hover:border-cyber-primary transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Area */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cyber-dark/50 mix-blend-multiply z-10 group-hover:bg-transparent transition-all"></div>
                <div className="absolute top-2 right-2 z-20 bg-black/70 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-cyber-primary border border-cyber-primary/30">
                    SECURE_REPO
                </div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">{project.title}</h3>
                <p className="text-cyber-text text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech?.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-1 bg-cyber-card text-cyber-text rounded border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-cyber-primary/10 hover:bg-cyber-primary hover:text-white text-cyber-primary border border-cyber-primary/20 rounded transition-all text-xs font-bold font-mono tracking-wider uppercase"
                >
                    <ExternalLink size={14} />
                    View Intelligence
                </a>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;