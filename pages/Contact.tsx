import React from 'react';
import { Mail, Linkedin, Database, ArrowRight, Github, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Hero Section */}
      <section className="bg-slate-900 pt-24 pb-20 px-4 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-500 via-slate-900 to-slate-900"></div>
         <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Have a project in mind, or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </p>
         </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
                
                {/* Intro Text */}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Current Status</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        I'm currently open to opportunities in <strong>Technical Product Management</strong>, <strong>Product Operations</strong>, and <strong>Technical Leadership</strong>.
                    </p>
                    <p className="text-slate-600">
                        Also accepting select freelance projects for <strong>Rapid MVP Building</strong> and <strong>Vibe Coding</strong> (Portfolios, Static Sites).
                    </p>
                </div>

                {/* Direct Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                        href={SOCIAL_LINKS.email} 
                        className="flex flex-col p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900">Email Me</h3>
                        <p className="text-sm text-slate-500 mb-4">notetofahim@gmail.com</p>
                        <span className="text-blue-600 text-sm font-semibold flex items-center mt-auto">
                            Send Mail <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-green-300 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900">WhatsApp</h3>
                        <p className="text-sm text-slate-500 mb-4">+880 1886-628121</p>
                        <span className="text-green-600 text-sm font-semibold flex items-center mt-auto">
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
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[#0077b5] hover:shadow-md transition-all group text-center"
                    >
                        <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-[#0077b5] mb-2 transition-colors" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-[#0077b5]">LinkedIn</span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-slate-600 hover:shadow-md transition-all group text-center"
                    >
                        <Github className="w-6 h-6 text-slate-400 group-hover:text-slate-900 mb-2 transition-colors" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">GitHub</span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.datacamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-green-500 hover:shadow-md transition-all group text-center"
                    >
                        <Database className="w-6 h-6 text-slate-400 group-hover:text-green-600 mb-2 transition-colors" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-green-600">DataCamp</span>
                    </a>
                </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                <form className="space-y-5 flex-grow" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                            placeholder="Your Name" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                            placeholder="your@email.com" 
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                        <textarea 
                            rows={5} 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" 
                            placeholder="Tell me a bit about your project, timeline, and goals..."
                        ></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 transform active:scale-[0.98]">
                        Send Message
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                        * This form is a demo. For fastest response, please use Email or WhatsApp.
                    </p>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;