import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle, Zap, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <button 
          onClick={() => navigate('/services')}
          className="text-orange-500 hover:underline"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-black pb-20 text-white">
      {/* Header / Hero */}
      <div className="relative bg-zinc-950 py-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center p-4 bg-zinc-900 rounded-2xl mb-8 border border-white/10">
              <Icon className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">
              {service.title}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed border-l-4 border-orange-500 pl-6">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Overview Card */}
                <div className="bg-zinc-900 rounded-3xl p-8 md:p-10 border border-zinc-800">
                    <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                    <p className="text-lg text-zinc-400 leading-relaxed whitespace-pre-line">
                        {service.fullDescription}
                    </p>
                </div>

                {/* Process Section */}
                <div className="bg-zinc-900 rounded-3xl p-8 md:p-10 border border-zinc-800">
                    <h2 className="text-2xl font-bold text-white mb-8">My Process</h2>
                    <div className="space-y-8">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="flex group">
                                <div className="flex-shrink-0 mr-6">
                                    <div className="w-10 h-10 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-orange-500 font-bold text-lg group-hover:border-orange-500 transition-colors">
                                        {idx + 1}
                                    </div>
                                    {idx !== service.process.length - 1 && (
                                        <div className="w-px h-full bg-zinc-800 mx-auto mt-2"></div>
                                    )}
                                </div>
                                <div className="pb-2">
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-zinc-400">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Mobile Only */}
                <div className="block lg:hidden bg-orange-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black hover:bg-black hover:text-white rounded-lg font-bold transition-colors"
                    >
                      Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                
                {/* Deliverables / Features */}
                <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                        <Zap className="w-5 h-5 text-yellow-500 mr-2" /> What You Get
                    </h3>
                    <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-zinc-300">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits */}
                {service.benefits && (
                    <div className="bg-blue-900/10 rounded-3xl p-8 border border-blue-500/20">
                         <h3 className="text-lg font-bold text-blue-400 mb-6">Why Me?</h3>
                         <ul className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm text-blue-200">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech Stack */}
                {service.techStack && (
                    <div className="bg-black rounded-3xl p-8 border border-zinc-800">
                         <h3 className="text-lg font-bold text-white mb-6">Tools & Tech</h3>
                         <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs font-medium text-zinc-400">
                                    {tech}
                                </span>
                            ))}
                         </div>
                    </div>
                )}

                 {/* Sticky CTA Desktop */}
                 <div className="hidden lg:block sticky top-24">
                    <div className="bg-zinc-900 rounded-3xl p-8 text-white border border-orange-500/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <h3 className="text-xl font-bold mb-4 relative z-10">Let's Build This</h3>
                        <p className="text-zinc-400 text-sm mb-8 relative z-10">
                            Have a project in mind? Let's discuss how I can help you achieve your goals.
                        </p>
                        <Link 
                        to="/contact"
                        className="inline-flex w-full items-center justify-center px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors relative z-10 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        >
                        Work With Me <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                 </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;