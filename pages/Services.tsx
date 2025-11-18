import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Hero Section */}
      <section className="bg-slate-900 pt-24 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-500 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-2 bg-slate-800 rounded-full mb-6 pr-4 border border-slate-700">
             <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                <Zap className="w-4 h-4" />
             </div>
             <span className="text-sm font-medium text-white">Available for Freelance & Full-time</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            How I Can Help
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-blue-400/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 border border-slate-100 group-hover:border-blue-600">
                  <Icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed flex-grow mb-6 line-clamp-3 text-sm">
                  {service.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="pt-4 border-t border-slate-100 mb-6">
                   <div className="flex flex-wrap gap-2">
                     {service.techStack?.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded text-slate-500">
                            {t}
                        </span>
                     ))}
                   </div>
                </div>

                <div className="mt-auto text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                 <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                 
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
                    <p className="text-slate-300 mb-8 text-lg">
                        I'm always open to discussing new opportunities, whether it's a freelance gig, a full-time role, or a consulting partnership.
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25"
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