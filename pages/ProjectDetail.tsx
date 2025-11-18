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
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/projects')}
          className="text-orange-500 hover:underline"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pb-20 text-white">
      {/* Header */}
      <div className="relative bg-zinc-900 pt-28 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/projects" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <div className="max-w-4xl">
             <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-orange-400 uppercase bg-orange-900/20 rounded border border-orange-500/20">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{project.title}</h1>
            <p className="text-xl text-zinc-400 font-light mb-8 border-l-4 border-orange-500 pl-4">{project.role}</p>
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                Visit Live Site <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-zinc-950 rounded-3xl border border-white/10 p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
            
            {/* Overview */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                    {project.fullDescription}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Problem */}
                <div className="bg-red-900/10 p-8 rounded-2xl border border-red-500/20">
                    <h3 className="text-lg font-bold text-red-400 mb-3">The Problem</h3>
                    <p className="text-zinc-400">{project.problem}</p>
                </div>
                {/* Solution */}
                <div className="bg-green-900/10 p-8 rounded-2xl border border-green-500/20">
                    <h3 className="text-lg font-bold text-green-400 mb-3">The Solution</h3>
                    <p className="text-zinc-400">{project.solution}</p>
                </div>
            </div>

            {/* PRD Modules (if available) */}
            {project.modules && (
               <div className="mb-16">
                 <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                    <Boxes className="w-6 h-6 text-purple-500 mr-3" /> Core Modules & Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.modules.map((module, idx) => (
                        <div key={idx} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-colors">
                            <h4 className="font-bold text-white mb-2">{module.title}</h4>
                            <p className="text-sm text-zinc-400">{module.description}</p>
                        </div>
                    ))}
                </div>
               </div>
            )}

            {/* Features */}
            <div className="mb-16">
                 <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                    <Layers className="w-6 h-6 text-blue-500 mr-3" /> Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-zinc-300">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

             {/* Impact */}
            <div className="mb-16">
                 <h3 className="flex items-center text-2xl font-bold text-white mb-8">
                    <Zap className="w-6 h-6 text-yellow-500 mr-3" /> Impact
                </h3>
                <ul className="space-y-4">
                     {project.impact?.map((item, idx) => (
                        <li key={idx} className="flex items-start p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                             <span className="font-medium text-zinc-200">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div>
                <h3 className="text-lg font-bold text-white mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-black border border-white/10 text-zinc-400 rounded-lg text-sm font-bold">
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