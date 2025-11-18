import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-500 via-black to-black"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900 rounded-full mb-6 pr-4 border border-zinc-800">
             <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white mr-3">
                <Zap className="w-4 h-4" />
             </div>
             <span className="text-sm font-bold text-white">Available for Freelance & Full-time</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            How I Can Help
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
             Bridging the gap between technical complexity and business value. Whether you need a product launched, a team built, or a strategy defined.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                to={`/services/${service.slug}`}
                className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300 border border-white/5">
                  <Icon className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed flex-grow mb-6 line-clamp-3 text-sm">
                  {service.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="pt-4 border-t border-white/5 mb-6">
                   <div className="flex flex-wrap gap-2">
                     {service.techStack?.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-black px-2 py-1 rounded text-zinc-500 border border-zinc-800">
                            {t}
                        </span>
                     ))}
                   </div>
                </div>

                <div className="mt-auto text-orange-500 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
            <div className="max-w-3xl mx-auto bg-zinc-900 rounded-[3rem] p-10 md:p-16 text-white border border-zinc-800 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-zinc-900 to-zinc-900 opacity-50"></div>
                 
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Have a project in mind?</h2>
                    <p className="text-zinc-400 mb-10 text-lg max-w-xl mx-auto">
                        I'm always open to discussing new opportunities, whether it's a freelance gig, a full-time role, or a consulting partnership.
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 bg-white text-black hover:bg-orange-500 hover:text-white font-bold rounded-full transition-all shadow-lg"
                    >
                        Let's Work Together <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;