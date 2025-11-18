import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Terminal, Users, Zap, LayoutTemplate, Rocket, Award, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION: The "Vibe" Entrance */}
      {/* Dark theme to anchor the top, contrasting with the light gradients below */}
      <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-950"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Product Vision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Engineering Precision.
              </span>
            </h1>

            {/* Sub-headline / Narrative */}
            <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              I don't just manage backlogs; I build products. <br className="hidden md:block" />
              A <strong>Technical Product Manager</strong> & <strong>Founder</strong> who bridges the gap between 
              business strategy and production code.
            </p>

            {/* Certifications Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-100">
              <a href="https://www.credly.com/badges/863d9b26-22b8-4c2f-9ff0-8baab2ff0c6f/public_url" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors group backdrop-blur-sm">
                <Award className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">Certified Scrum Master (PSM I)</span>
              </a>
              <a href="https://www.coursera.org/account/accomplishments/professional-cert/T6J89PUE5EQ7" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-yellow-500/50 transition-colors group backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">Google PMP Certified</span>
              </a>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40"
              >
                See What I've Built
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-300 transition-all duration-200 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700 hover:text-white border border-slate-700"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
           <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
           </div>
        </div>
      </section>

      {/* 2. THE "HYBRID" ADVANTAGE: Why this mix matters */}
      {/* Gradient: Subtle Indigo/Purple tint */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-slate-50 to-white border-b border-indigo-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">My Approach</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The "Unfair" Advantage</h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Most companies hire a PM to plan and a Dev to build. I do both. 
              This hybrid capability allows me to move faster, communicate clearly, and ship products that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Product */}
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl shadow-indigo-100/50 border border-white/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <LayoutTemplate className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Strategic Product Management</h4>
              <p className="text-slate-600 leading-relaxed">
                I translate chaos into clear PRDs. I define roadmaps that align business goals with user needs, ensuring we build the *right* thing, not just the *next* thing.
              </p>
            </div>

            {/* Card 2: Engineering */}
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl shadow-purple-100/50 border border-white/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <Terminal className="w-7 h-7 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Full-Stack Engineering</h4>
              <p className="text-slate-600 leading-relaxed">
                I speak API, Database, and Frontend. I can build the MVP myself (Next.js, Python, FastAPI) or lead engineers with deep technical empathy.
              </p>
            </div>

            {/* Card 3: People */}
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl shadow-emerald-100/50 border border-white/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Technical Hiring & Ops</h4>
              <p className="text-slate-600 leading-relaxed">
                A product is only as good as the team. I design hiring pipelines, conduct technical interviews, and build high-performing remote teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK: The Proof */}
      {/* Gradient: Clean Slate/Blue mix for professionalism */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Selected Work</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Shipped to Production</h3>
              <p className="text-xl text-slate-600 font-light">
                Real products, real users, real impact. Not just concepts.
              </p>
            </div>
            <Link to="/projects" className="group hidden md:flex items-center text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
              View All Projects <div className="bg-slate-200 p-2 rounded-full ml-3 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors"><ArrowRight className="w-5 h-5" /></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.slice(0, 2).map((project) => (
              <Link 
                key={project.slug} 
                to={`/projects/${project.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 hover:shadow-3xl hover:shadow-blue-200/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden bg-slate-200 relative">
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                   <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm font-bold text-blue-500 uppercase tracking-wide">{project.role}</p>
                    </div>
                    <div className="bg-slate-100 p-3 rounded-full text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-slate-900 rounded-xl">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SERVICES / VIBE CODING TEASER */}
      {/* Gradient: Vibrant but light (Orange/Pink/Rose mix for creative energy) */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-orange-100/50 border border-orange-100 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-rose-400 opacity-10 blur-3xl rounded-full -mr-16 -mt-16"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                            <Zap className="w-4 h-4" /> New Service
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">"Vibe Coding"</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Need a portfolio, landing page, or MVP fast? I combine Figma design intuition with React speed to ship beautiful, non-transactional sites in record time. 
                            <br/><br/>
                            No bloated agencies. No weeks of meetings. Just pure execution.
                        </p>
                        <Link 
                            to="/services/rapid-mvp-vibe-coding"
                            className="inline-flex items-center text-lg font-bold text-orange-600 hover:text-orange-700"
                        >
                            Learn about Rapid MVPs <ChevronRight className="ml-1 w-5 h-5" />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transform translate-y-8">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg mb-4"></div>
                                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-slate-100 rounded w-1/2"></div>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl text-white">
                                <div className="w-10 h-10 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-lg font-bold mb-1">Ship Fast</div>
                                <div className="text-slate-400 text-sm">Deployed in days.</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg col-span-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">FM</div>
                                    <div>
                                        <div className="font-bold text-slate-900">Fahim Montasir</div>
                                        <div className="text-sm text-slate-500">Technical Founder</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;