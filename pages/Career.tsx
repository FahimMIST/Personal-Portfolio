import React from 'react';
import { CAREER_TIMELINE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Calendar, MapPin, Building2, GraduationCap, Award, Briefcase, ExternalLink } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-2 bg-slate-800 rounded-full mb-6 pr-4 border border-slate-700">
             <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white mr-3">
                <Briefcase className="w-4 h-4" />
             </div>
             <span className="text-sm font-medium text-white">Professional Journey</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Experience & Education</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
             A timeline of my career building products, leading teams, and engineering solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Timeline Section */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
            {CAREER_TIMELINE.map((job, index) => (
                <div key={job.id} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm ${job.type === 'Founder' ? 'bg-purple-600' : 'bg-blue-600'}`}></div>
                    
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {job.role}
                                </h2>
                                <div className="flex items-center text-slate-600 mt-1 font-medium">
                                    <Building2 className="w-4 h-4 mr-1.5" />
                                    {job.company}
                                    <span className="mx-2 text-slate-300">•</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${job.type === 'Founder' ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-slate-100 border-slate-200'}`}>
                                        {job.type}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-sm text-slate-500">
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
                        
                        <p className="text-slate-600 mb-6 leading-relaxed whitespace-pre-line">
                            {job.description}
                        </p>
                        
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-slate-50 flex flex-wrap gap-2">
                            {job.skillsUsed.map(skill => (
                                <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center ml-4 md:ml-6">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" /> Education
            </h2>
            
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-sm"></div>
                        
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all">
                            <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start md:self-auto mt-2 md:mt-0">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-blue-600 font-medium mb-4">{edu.degree}</p>
                            {edu.achievements && edu.achievements.length > 0 && (
                                <ul className="space-y-1 text-sm text-slate-600">
                                    {edu.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-1 h-1 bg-slate-400 rounded-full mr-2"></span>
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
             <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-500" /> Certifications & Achievements
            </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-1">{cert.name}</h3>
                            <p className="text-sm text-slate-500 mb-3">{cert.issuer}</p>
                        </div>
                        {cert.link && (
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm font-medium flex items-center hover:underline mt-2"
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