import React from 'react';
import { CAREER_TIMELINE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Calendar, MapPin, Building2, GraduationCap, Award, Briefcase, ExternalLink } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-black to-black"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900 rounded-full mb-6 pr-4 border border-zinc-800">
             <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white mr-3">
                <Briefcase className="w-4 h-4" />
             </div>
             <span className="text-sm font-bold text-white">Professional Journey</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Experience & Education</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
             A timeline of my career building products, leading teams, and engineering solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Timeline Section */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
            {CAREER_TIMELINE.map((job, index) => (
                <div key={job.id} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-black shadow-[0_0_0_1px_rgba(255,255,255,0.1)] ${job.type === 'Founder' ? 'bg-purple-500' : 'bg-orange-500'}`}></div>
                    
                    {/* Card */}
                    <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                                    {job.role}
                                </h2>
                                <div className="flex items-center text-zinc-400 mt-1 font-medium">
                                    <Building2 className="w-4 h-4 mr-1.5" />
                                    {job.company}
                                    <span className="mx-2 text-zinc-600">•</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${job.type === 'Founder' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-zinc-800 border-zinc-700 text-zinc-300'}`}>
                                        {job.type}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-sm text-zinc-500">
                                <div className="flex items-center mb-1">
                                    <Calendar className="w-4 h-4 mr-1.5" />
                                    {job.period}
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1.5" />
                                    {job.location}
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-zinc-400 mb-6 leading-relaxed whitespace-pre-line">
                            {job.description}
                        </p>
                        
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start text-sm text-zinc-400">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                            {job.skillsUsed.map(skill => (
                                <span key={skill} className="px-2 py-1 bg-black text-zinc-500 text-xs rounded border border-zinc-800 font-mono">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center ml-4 md:ml-6">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-500" /> Education
            </h2>
            
            <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-blue-500 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"></div>
                        
                        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-blue-500/30 transition-all">
                            <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                <span className="text-sm font-medium text-zinc-400 bg-black px-3 py-1 rounded-full self-start md:self-auto mt-2 md:mt-0 border border-zinc-800">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>
                            {edu.achievements && edu.achievements.length > 0 && (
                                <ul className="space-y-1 text-sm text-zinc-400">
                                    {edu.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-1 h-1 bg-zinc-600 rounded-full mr-2"></span>
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-20 ml-4 md:ml-6">
             <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-500" /> Certifications & Achievements
            </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-colors flex flex-col justify-between h-full">
                        <div>
                            <h3 className="font-bold text-white mb-1">{cert.name}</h3>
                            <p className="text-sm text-zinc-500 mb-3">{cert.issuer}</p>
                        </div>
                        {cert.link && (
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-orange-500 text-sm font-bold flex items-center hover:underline mt-2"
                            >
                                View Credential <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        )}
                    </div>
                ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Career;