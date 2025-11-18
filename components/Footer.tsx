
import React from 'react';
import { Github, Linkedin, Database, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 pt-20 pb-10 overflow-hidden border-t border-white/5 font-inter">
      {/* Background Aesthetics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-1 group">
              Fahim<span className="text-orange-500 group-hover:scale-125 transition-transform duration-300 inline-block">.</span>
            </Link>
            <p className="text-zinc-400 leading-relaxed text-sm max-w-xs">
              Technical Product Manager & Founder building digital products and high-performing teams.
            </p>
            <div className="flex items-center gap-3">
               {/* Social Icons */}
               <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-black hover:border-white transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
               <a
                href={SOCIAL_LINKS.datacamp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300 group"
                aria-label="DataCamp"
              >
                <Database className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-zinc-400 hover:text-orange-500 text-sm transition-colors flex items-center group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mr-3 group-hover:bg-orange-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services / Expertise */}
           <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Expertise</h4>
            <ul className="space-y-3">
              <li>
                  <Link to="/services/technical-product-management" className="text-zinc-400 hover:text-orange-500 text-sm transition-colors block w-fit">
                    Product Strategy
                  </Link>
              </li>
              <li>
                  <Link to="/services/rapid-mvp-vibe-coding" className="text-zinc-400 hover:text-orange-500 text-sm transition-colors block w-fit">
                    Rapid MVP Build
                  </Link>
              </li>
              <li>
                  <Link to="/services/technical-hiring" className="text-zinc-400 hover:text-orange-500 text-sm transition-colors block w-fit">
                    Technical Hiring
                  </Link>
              </li>
               <li>
                  <Link to="/services/full-stack-engineering" className="text-zinc-400 hover:text-orange-500 text-sm transition-colors block w-fit">
                    Full-Stack Dev
                  </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Card */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/20 transition-colors">
            <h4 className="text-white font-bold mb-2">Invest in Bangladesh</h4>
            <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
              Get weekly insights on emerging investment opportunities in the Bangladesh market directly on LinkedIn.
            </p>
             <a 
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7363309081899520001" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5"
            >
                Subscribe on LinkedIn <ArrowUpRight className="w-3 h-3 ml-2" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-medium">
            &copy; {currentYear} Fahim Montasir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <a href="mailto:notetofahim@gmail.com" className="text-zinc-500 hover:text-orange-500 text-xs font-bold transition-colors">
                notetofahim@gmail.com
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
