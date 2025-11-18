import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black pb-20">
      
      {/* Dark Hero Section */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-black to-black"></div>
         <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Selected Work</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
                From founding startups to scaling enterprise tools. A collection of products I've built, managed, and scaled.
            </p>
         </div>
      </section>

      {/* Floating Filters */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 mb-16">
        <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/10 p-2 max-w-fit mx-auto flex flex-wrap justify-center gap-1">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                        filter === cat 
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <Link 
                key={project.slug} 
                to={`/projects/${project.slug}`}
                className="flex flex-col bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 group"
            >
                <div className="h-72 bg-zinc-800 overflow-hidden relative">
                    <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-6">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur border border-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">{project.title}</h2>
                        <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">{project.role}</p>
                    </div>
                    <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                        {project.summary}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className="text-xs font-medium text-zinc-400 bg-black/50 px-2.5 py-1 rounded-md border border-white/5">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className="text-xs font-medium text-zinc-500 px-1 py-1">+ {project.techStack.length - 3}</span>
                            )}
                        </div>
                        <span className="text-orange-500 flex items-center text-sm font-bold group-hover:translate-x-1 transition-transform">
                            View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;