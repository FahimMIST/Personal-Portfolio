
import React from 'react';
import { Briefcase, Heart, Code2, Terminal, Database, LayoutTemplate, Settings, Cpu, Users } from 'lucide-react';

const About: React.FC = () => {
  const SKILL_GROUPS = [
    {
      category: "Product Leadership",
      icon: LayoutTemplate,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      skills: ["Product Strategy", "Roadmapping", "PRD Writing", "User Research", "Agile & Scrum", "Stakeholder Management"]
    },
    {
      category: "Engineering Core",
      icon: Terminal,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      skills: ["Next.js / React", "Python (FastAPI)", "REST APIs", "PostgreSQL", "System Design", "Vercel / DigitalOcean"]
    },
    {
      category: "Data & Analytics",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      skills: ["SQL Querying", "Python (Pandas)", "Data Visualization", "Looker Studio", "Tableau / PowerBI", "Product Analytics", "A/B Testing"]
    },
    {
      category: "HR & Team Ops",
      icon: Users,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      skills: ["Technical Hiring", "Pipeline Design", "Interviewing", "Candidate Scorecards", "Team Building", "Culture Fit"]
    },
    {
      category: "Tools & Ops",
      icon: Settings,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      skills: ["Figma", "Jira / Linear", "Visio / Miro", "Git / GitHub", "Docker", "Notion"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-black to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white">
            More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Code</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            I’m Fahim Montasir — a Technical Product Manager, Founder, and Hiring Manager. 
            I operate at the intersection of <span className="text-white font-medium border-b border-orange-500/50">human needs</span> and <span className="text-white font-medium border-b border-orange-500/50">technical reality</span>.
          </p>
        </div>
      </section>

      {/* Stats / Quick Info Bar */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-16">
        <div className="bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-2xl">
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">4+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Engineers Hired</div>
            </div>
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100k+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Transactions Managed</div>
            </div>
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">3+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Products Launched</div>
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
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-orange-500 mr-4 border border-white/5">
                    <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">My Journey</h2>
              </div>
              <div className="prose prose-invert text-zinc-400 leading-relaxed">
                <p className="mb-4">
                  My background spans product strategy, full-stack development, data analytics, and global hiring. This hybrid experience gives me a uniquely practical view of how great products are discovered, built, and scaled.
                </p>
                <p>
                  I’ve built products from zero to production — including <strong className="text-white">Academizz</strong>, a multi-platform learning ecosystem, and led the development of high-volume POS systems. Whether it's writing the first line of code or the final PRD, I am hands-on.
                </p>
              </div>
            </div>

            {/* How I Work Cards */}
            <div>
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-purple-500 mr-4 border border-white/5">
                        <Heart className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">My Philosophy</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
                        <h3 className="font-bold text-white mb-2">User-First</h3>
                        <p className="text-sm text-zinc-400">Start with real behaviors and problems, not just feature lists.</p>
                    </div>
                    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
                        <h3 className="font-bold text-white mb-2">Clarity</h3>
                        <p className="text-sm text-zinc-400">Focus on what moves the needle. I write PRDs that leave no ambiguity.</p>
                    </div>
                    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
                        <h3 className="font-bold text-white mb-2">Tech Empathy</h3>
                        <p className="text-sm text-zinc-400">I code, so I understand engineering constraints and trade-offs.</p>
                    </div>
                    <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
                        <h3 className="font-bold text-white mb-2">Ownership</h3>
                        <p className="text-sm text-zinc-400">I treat every product like it's my own startup.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Skills Ecosystem (Replaced Radar Chart) */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                 {/* Decorative Blob */}
                 <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                 
                <div className="flex items-center mb-8 relative z-10">
                    <Cpu className="w-6 h-6 text-zinc-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Skills Ecosystem</h3>
                </div>
                
                <div className="space-y-6 relative z-10">
                    {SKILL_GROUPS.map((group, idx) => {
                        const Icon = group.icon;
                        return (
                            <div key={idx} className="bg-black/40 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                <div className="flex items-center mb-4">
                                    <div className={`w-8 h-8 rounded-lg ${group.bg} flex items-center justify-center ${group.color} mr-3`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">{group.category}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-md border border-zinc-700/50 hover:bg-zinc-700 hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 text-center relative z-10">
                    <p className="text-sm text-zinc-500 italic">
                        "A hybrid skillset built for shipping."
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
