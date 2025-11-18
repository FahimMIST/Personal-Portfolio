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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h1>
        <button 
          onClick={() => navigate('/services')}
          className="text-blue-600 hover:underline"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header / Hero */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-xl mb-6 backdrop-blur-sm border border-blue-500/30">
              <Icon className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
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
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                    <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                        {service.fullDescription}
                    </p>
                </div>

                {/* Process Section */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">My Process</h2>
                    <div className="space-y-8">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="flex">
                                <div className="flex-shrink-0 mr-6">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                    {idx !== service.process.length - 1 && (
                                        <div className="w-0.5 h-full bg-slate-100 mx-auto mt-2"></div>
                                    )}
                                </div>
                                <div className="pb-2">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Mobile Only */}
                <div className="block lg:hidden bg-slate-900 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
                    >
                      Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                
                {/* Deliverables / Features */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-yellow-500 mr-2" /> What You Get
                    </h3>
                    <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits */}
                {service.benefits && (
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                         <h3 className="text-lg font-bold text-blue-900 mb-4">Why Me?</h3>
                         <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm text-blue-800">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech Stack */}
                {service.techStack && (
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                         <h3 className="text-lg font-bold text-slate-900 mb-4">Tools & Tech</h3>
                         <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600">
                                    {tech}
                                </span>
                            ))}
                         </div>
                    </div>
                )}

                 {/* Sticky CTA Desktop */}
                 <div className="hidden lg:block sticky top-24">
                    <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl shadow-slate-900/20">
                        <h3 className="text-xl font-bold mb-2">Let's Build This</h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Have a project in mind? Let's discuss how I can help you achieve your goals.
                        </p>
                        <Link 
                        to="/contact"
                        className="inline-flex w-full items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
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