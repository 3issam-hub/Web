import React, { useState } from 'react';
import SectionContainer from '../WindowFrame';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(async (response) => {
        if (response.status === 200) {
            setIsSent(true);
        } else {
             alert("Error sending message.");
        }
    })
    .catch(() => {
        alert("Something went wrong");
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  if (isSent) {
      return (
          <SectionContainer title="TRANSMISSION_LOG" subtitle="Message status report.">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 glass-card rounded-2xl p-8 border border-cyber-success/30">
                <div className="w-24 h-24 rounded-full bg-cyber-success/10 flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-12 h-12 text-cyber-success" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Uplink Established</h2>
                    <p className="text-cyber-text font-mono">Payload delivered successfully. Expect encrypted response shortly.</p>
                </div>
                <button 
                    onClick={() => setIsSent(false)}
                    className="mt-8 px-8 py-3 bg-cyber-card hover:bg-cyber-card/80 text-white rounded border border-white/10 font-mono text-sm transition-all"
                >
                    INITIATE_NEW_TRANSMISSION
                </button>
            </div>
          </SectionContainer>
      )
  }

  return (
    <SectionContainer 
      title="SECURE_CHANNEL" 
      subtitle="Direct encrypted communication line."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glass-card p-8 rounded-2xl border border-cyber-card bg-cyber-black/50">
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="80af7cd3-34c6-405e-8446-92d88bbcd98f" />
                <input type="hidden" name="subject" value="New Portfolio Contact" />
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                <div className="space-y-2 group">
                    <label htmlFor="name" className="text-cyber-primary font-mono text-xs uppercase flex items-center gap-2 group-focus-within:text-white transition-colors">
                        <User size={14} /> Identity
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Enter Name..."
                        className="w-full bg-cyber-dark border border-cyber-card rounded p-4 text-white placeholder-gray-600 focus:border-cyber-primary focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all font-mono"
                    />
                </div>

                <div className="space-y-2 group">
                    <label htmlFor="email" className="text-cyber-primary font-mono text-xs uppercase flex items-center gap-2 group-focus-within:text-white transition-colors">
                        <Mail size={14} /> Return Address
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="name@company.com"
                        className="w-full bg-cyber-dark border border-cyber-card rounded p-4 text-white placeholder-gray-600 focus:border-cyber-primary focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all font-mono"
                    />
                </div>

                <div className="space-y-2 group">
                    <label htmlFor="message" className="text-cyber-primary font-mono text-xs uppercase flex items-center gap-2 group-focus-within:text-white transition-colors">
                        <MessageSquare size={14} /> Data Payload
                    </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        placeholder="Enter message content..."
                        className="w-full bg-cyber-dark border border-cyber-card rounded p-4 text-white placeholder-gray-600 focus:border-cyber-primary focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all font-mono resize-none"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-cyber-primary text-black font-bold py-4 rounded hover:bg-cyber-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? 'ENCRYPTING & SENDING...' : 'TRANSMIT DATA'}
                        {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </form>
        </div>

        {/* Info Side */}
        <div className="space-y-8 flex flex-col justify-center">
            <div className="p-6 border-l-2 border-cyber-primary bg-cyber-primary/5">
                <h3 className="text-xl font-bold text-white mb-2">Open For Opportunities</h3>
                <p className="text-cyber-text leading-relaxed">
                    Currently available for freelance projects and full-time positions in Cybersecurity Analysis, Network Administration, and IT Support.
                </p>
            </div>

            <div className="space-y-4">
                <div className="glass-card p-4 rounded flex items-center gap-4 group cursor-pointer hover:border-cyber-primary/50 transition-all">
                    <div className="p-3 bg-cyber-dark rounded-full text-cyber-primary group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-cyber-text font-mono uppercase">Email</p>
                        <p className="text-white font-medium">contact@issambeniysa.site</p>
                    </div>
                    <Copy className="ml-auto text-gray-600 hover:text-white transition-colors" size={16} />
                </div>
                
                <div className="glass-card p-4 rounded flex items-center gap-4">
                    <div className="p-3 bg-cyber-dark rounded-full text-cyber-accent">
                        <AlertCircle size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-cyber-text font-mono uppercase">Urgency</p>
                        <p className="text-white font-medium">Response within 24 hours</p>
                    </div>
                </div>
            </div>

             <div className="mt-auto pt-8">
                <p className="text-cyber-text/50 text-xs font-mono text-center">
                    SECURE_CONNECTION_ESTABLISHED <br />
                    IP: 192.168.X.X [PROTECTED]
                </p>
            </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
