import React from 'react';
import { Github, Linkedin, Database } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Brand & Newsletter */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">Fahim Montasir</h3>
            <p className="text-sm text-slate-500 max-w-xs mb-6">
              Technical Product Manager & Founder building products and teams.
            </p>
            
             <div className="flex flex-col items-center md:items-start gap-3">
                <p className="text-xs font-medium text-slate-400">
                   Read my "Invest in Bangladesh" Newsletter:
                </p>
                <a 
                    href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7363309081899520001" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-center items-center text-center outline-none no-underline text-white w-[200px] h-[32px] rounded-[16px] bg-[#0A66C2] hover:opacity-90 transition-opacity font-sans text-sm font-medium"
                    style={{ fontFamily: '"SF Pro Text", Helvetica, sans-serif' }}
                >
                    Subscribe on LinkedIn
                </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-auto flex justify-center md:justify-end items-center space-x-6 md:mt-8">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.datacamp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="DataCamp"
            >
              <Database className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Fahim Montasir. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;