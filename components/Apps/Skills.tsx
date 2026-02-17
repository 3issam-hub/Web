import React from 'react';
import SectionContainer from '../WindowFrame';
import { SKILLS } from '../../constants';
import { Cpu, Network, Lock, Code } from 'lucide-react';

const Skills: React.FC = () => {
  // Simple categorization logic based on keywords
  const categories = [
    { name: "Security Operations", icon: Lock, keywords: ["Security", "Forensics", "Threat", "Privacy", "Injection", "Hack", "Privacy"] },
    { name: "Networking", icon: Network, keywords: ["Network", "TCP", "OSI", "VLAN", "Routing", "Switch", "IPSec", "VPN", "Cisco", "Packet", "DNS", "DHCP", "WAN", "OSPF", "QoS"] },
    { name: "Infrastructure & Cloud", icon: Cpu, keywords: ["Server", "Linux", "Windows", "Azure", "Cloud", "Virtualization", "VMware", "Proxmox", "Box", "Ubuntu", "Active Directory", "Bash", "Powershell", "Microsoft Exchange", "Entra ID"] },
    { name: "Development & Tools", icon: Code, keywords: ["HTML", "CSS", "Python", "C", "SQL", "Git", "Zabbix", "Grafana", "WordPress", "Automation"] },
  ];

  const getCategory = (skill: string) => {
    for (const cat of categories) {
      if (cat.keywords.some(k => skill.includes(k))) return cat.name;
    }
    return "Other Technical";
  };

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    const cat = getCategory(skill);
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, string[]>);

  // Ensure all categories exist even if empty (though logic above fills them dynamically)
  categories.forEach(c => {
    if(!groupedSkills[c.name]) groupedSkills[c.name] = [];
  });
  // Catch-all
  if(groupedSkills["Other Technical"] && groupedSkills["Other Technical"].length === 0) delete groupedSkills["Other Technical"];


  return (
    <SectionContainer 
      title="TECHNICAL_ARSENAL" 
      subtitle="Operational capabilities, protocols, and deployed technologies."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([category, skills]) => {
            const catDef = categories.find(c => c.name === category) || { icon: Cpu };
            const Icon = catDef.icon;

            return (
                <div key={category} className="glass-card p-6 rounded-lg border border-cyber-card hover:border-cyber-primary/30 transition-all">
                    <div className="flex items-center gap-3 mb-6 border-b border-cyber-card pb-3">
                        <div className="p-2 rounded bg-cyber-primary/10 text-cyber-primary">
                            <Icon size={20} />
                        </div>
                        <h3 className="font-bold text-white text-lg">{category}</h3>
                        <span className="ml-auto text-xs font-mono text-gray-500 bg-black/30 px-2 py-1 rounded">{skills.length} MODULES</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                            <div 
                                key={idx} 
                                className="px-3 py-1.5 rounded text-xs md:text-sm font-medium bg-cyber-card/50 text-cyber-text border border-white/5 hover:text-white hover:border-cyber-primary/50 hover:bg-cyber-primary/10 transition-all cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            )
        })}
      </div>
    </SectionContainer>
  );
};

export default Skills;