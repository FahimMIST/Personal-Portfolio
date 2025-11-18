import React, { useState } from 'react';
import { Mail, Linkedin, Database, ArrowRight, Github, MessageCircle, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Fahim,\n\nI'm interested in working with you.\n\nHere are the details:\n${formData.message}\n\nBest,\n${formData.name}\n(${formData.email})`
    );
    
    // Trigger email client
    window.location.href = `mailto:notetofahim@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-500 via-black to-black"></div>
         <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Get In Touch</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
                Have a project in mind, or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </p>
         </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
                
                {/* Intro Text */}
                <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                    <h2 className="text-xl font-bold text-white mb-4">Current Status</h2>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                        I'm currently open to opportunities in <strong className="text-white">Technical Product Management</strong>, <strong className="text-white">Product Operations</strong>, and <strong className="text-white">Technical Leadership</strong>.
                    </p>
                    <p className="text-zinc-400">
                        Also accepting select freelance projects for <strong className="text-white">Rapid MVP Building</strong> and <strong className="text-white">Vibe Coding</strong>.
                    </p>
                </div>

                {/* Direct Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                        href={SOCIAL_LINKS.email} 
                        className="flex flex-col p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all group"
                    >
                        <div className="w-10 h-10 bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white">Email Me</h3>
                        <p className="text-sm text-zinc-500 mb-4">notetofahim@gmail.com</p>
                        <span className="text-blue-500 text-sm font-semibold flex items-center mt-auto">
                            Send Mail <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all group"
                    >
                        <div className="w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white">WhatsApp</h3>
                        <p className="text-sm text-zinc-500 mb-4">+880 1886-628121</p>
                        <span className="text-green-500 text-sm font-semibold flex items-center mt-auto">
                            Chat Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <a 
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-[#0077b5]/50 transition-all group text-center"
                    >
                        <Linkedin className="w-6 h-6 text-zinc-500 group-hover:text-[#0077b5] mb-2 transition-colors" />
                        <span className="text-sm font-medium text-zinc-400 group-hover:text-white">LinkedIn</span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-white/50 transition-all group text-center"
                    >
                        <Github className="w-6 h-6 text-zinc-500 group-hover:text-white mb-2 transition-colors" />
                        <span className="text-sm font-medium text-zinc-400 group-hover:text-white">GitHub</span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.datacamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all group text-center"
                    >
                        <Database className="w-6 h-6 text-zinc-500 group-hover:text-green-500 mb-2 transition-colors" />
                        <span className="text-sm font-medium text-zinc-400 group-hover:text-white">DataCamp</span>
                    </a>
                </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-5 flex-grow" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold text-zinc-400 mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-white placeholder-zinc-600" 
                            placeholder="Your Name" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-zinc-400 mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-white placeholder-zinc-600" 
                            placeholder="your@email.com" 
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-zinc-400 mb-2">Project Details</label>
                        <textarea 
                            name="message"
                            rows={5} 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-white placeholder-zinc-600 resize-none" 
                            placeholder="Tell me a bit about your project, timeline, and goals..."
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] transform active:scale-[0.98] flex items-center justify-center">
                        Send Message <Send className="w-4 h-4 ml-2" />
                    </button>
                    <p className="text-xs text-center text-zinc-500 mt-4">
                        * Clicking send will open your default email client with the message draft.
                    </p>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;