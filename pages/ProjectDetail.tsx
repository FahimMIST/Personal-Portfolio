import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, CheckCircle, Layers, Zap, ExternalLink, Boxes } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/projects')}
          className="text-blue-600 hover:underline"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <div className="max-w-4xl">
             <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded border border-blue-800">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-slate-300 font-light mb-8">{project.role}</p>
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/25"
              >
                Visit Live Site <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-5xl mx-auto">
            
            {/* Overview */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    {project.fullDescription}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Problem */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-lg font-bold text-red-900 mb-3">The Problem</h3>
                    <p className="text-slate-700">{project.problem}</p>
                </div>
                {/* Solution */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="text-lg font-bold text-green-900 mb-3">The Solution</h3>
                    <p className="text-slate-700">{project.solution}</p>
                </div>
            </div>

            {/* PRD Modules (if available) */}
            {project.modules && (
               <div className="mb-12">
                 <h3 className="flex items-center text-xl font-bold text-slate-900 mb-6">
                    <Boxes className="w-6 h-6 text-purple-500 mr-2" /> Core Modules & Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.modules.map((module, idx) => (
                        <div key={idx} className="p-5 bg-slate-50 rounded-lg border border-slate-100 hover:border-purple-200 transition-colors">
                            <h4 className="font-bold text-slate-900 mb-2">{module.title}</h4>
                            <p className="text-sm text-slate-600">{module.description}</p>
                        </div>
                    ))}
                </div>
               </div>
            )}

            {/* Features */}
            <div className="mb-12">
                 <h3 className="flex items-center text-xl font-bold text-slate-900 mb-6">
                    <Layers className="w-6 h-6 text-blue-500 mr-2" /> Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

             {/* Impact */}
            <div className="mb-12">
                 <h3 className="flex items-center text-xl font-bold text-slate-900 mb-6">
                    <Zap className="w-6 h-6 text-yellow-500 mr-2" /> Impact
                </h3>
                <ul className="space-y-3">
                     {project.impact?.map((item, idx) => (
                        <li key={idx} className="flex items-start p-3 bg-slate-50 rounded border border-slate-100">
                             <span className="font-semibold text-slate-800">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;