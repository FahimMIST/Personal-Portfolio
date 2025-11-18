import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer,
  PolarRadiusAxis
} from 'recharts';
import { SKILLS_RADAR_DATA } from '../constants';
import { Briefcase, GraduationCap, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            More Than Just Code
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            I’m Fahim Montasir — a Technical Product Manager, Founder, and Hiring Manager. 
            I operate at the intersection of <span className="text-blue-400 font-medium">human needs</span> and <span className="text-blue-400 font-medium">technical reality</span>.
          </p>
        </div>
      </section>

      {/* Stats / Quick Info Bar */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">4+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">20+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Engineers Hired</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">100k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Transactions Managed</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">3+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Products Launched</div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Story & Approach */}
          <div className="space-y-12">
            {/* My Journey */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">My Journey</h2>
              </div>
              <div className="prose prose-slate text-slate-600 leading-relaxed">
                <p className="mb-4">
                  My background spans product strategy, full-stack development, data analytics, and global hiring. This hybrid experience gives me a uniquely practical view of how great products are discovered, built, and scaled.
                </p>
                <p>
                  I’ve built products from zero to production — including <strong>Academizz</strong>, a multi-platform learning ecosystem, and led the development of high-volume POS systems. Whether it's writing the first line of code or the final PRD, I am hands-on.
                </p>
              </div>
            </div>

            {/* How I Work Cards */}
            <div>
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                        <Heart className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">My Philosophy</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-900 mb-2">User-First</h3>
                        <p className="text-sm text-slate-600">Start with real behaviors and problems, not just feature lists.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-900 mb-2">Clarity</h3>
                        <p className="text-sm text-slate-600">Focus on what moves the needle. I write PRDs that leave no ambiguity.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-900 mb-2">Tech Empathy</h3>
                        <p className="text-sm text-slate-600">I code, so I understand engineering constraints and trade-offs.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-900 mb-2">Ownership</h3>
                        <p className="text-sm text-slate-600">I treat every product like it's my own startup.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Skills Chart */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-center mb-6">
                    <Code className="w-5 h-5 text-slate-400 mr-2" />
                    <h3 className="text-xl font-bold text-slate-900">Skill Distribution</h3>
                </div>
                
                <div className="h-[320px] w-full -ml-4 md:ml-0">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_RADAR_DATA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="Fahim"
                        dataKey="A"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fill="#3b82f6"
                        fillOpacity={0.5}
                    />
                    </RadarChart>
                </ResponsiveContainer>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500 italic">
                        "A rare mix of Product Strategy, Engineering capability, and Hiring expertise."
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;