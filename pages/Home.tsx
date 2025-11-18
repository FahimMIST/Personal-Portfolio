
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Terminal, Users, Zap, LayoutTemplate, Rocket, Award, CheckCircle, ExternalLink, Code, LineChart, Quote } from 'lucide-react';
import { PROJECTS, SERVICES, USER_IMAGE_URL, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-black text-white font-inter">
      
      {/* 1. HERO SECTION - Hexbo Style */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-black">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content - Typography */}
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Available for new projects</span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                            FAHIM <br />
                            <span className="text-zinc-700">MONTASIR</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-medium text-white">Technical Product Manager</h3>
                    </div>

                    <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                        I build digital products and the teams behind them. Bridging the gap between 
                        <span className="text-white font-semibold"> complex strategy</span> and 
                        <span className="text-white font-semibold"> flawless execution</span>.
                    </p>

                    {/* Certifications - Trust Signals */}
                    <div className="flex flex-wrap gap-3 pt-2">
                         <a href="https://www.credly.com/badges/863d9b26-22b8-4c2f-9ff0-8baab2ff0c6f/public_url" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded hover:border-orange-500/30 transition-colors">
                             <Award className="w-4 h-4 text-orange-500" />
                             <span className="text-xs text-zinc-400">PSM I Certified</span>
                         </a>
                         <a href="https://www.coursera.org/account/accomplishments/professional-cert/T6J89PUE5EQ7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded hover:border-orange-500/30 transition-colors">
                             <CheckCircle className="w-4 h-4 text-yellow-500" />
                             <span className="text-xs text-zinc-400">Google PMP</span>
                         </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                         <Link to="/contact" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                            Let's Talk
                         </Link>
                         <Link to="/projects" className="px-8 py-4 bg-transparent border border-zinc-700 text-white hover:border-white font-bold rounded-full transition-all hover:bg-white hover:text-black">
                            View Work
                         </Link>
                    </div>
                </div>

                {/* Right Content - Image Composition */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-[350px] md:w-[450px] lg:w-[500px]">
                        {/* Decorative Circle Behind */}
                        <div className="absolute top-10 right-10 w-full h-full bg-zinc-800 rounded-full -z-10 scale-90"></div>
                        <div className="absolute top-20 right-20 w-full h-full bg-zinc-900 rounded-full -z-20 scale-90"></div>
                        
                        {/* Main Image */}
                        <div className="relative z-10 rounded-b-full overflow-hidden">
                             <img 
                                src={USER_IMAGE_URL} 
                                alt="Fahim Montasir" 
                                className="w-full h-auto object-cover drop-shadow-2xl"
                                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                             />
                        </div>

                        {/* Floating Cards (Glassmorphism) */}
                        <div className="absolute top-1/4 -left-10 md:-left-20 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in-up">
                             <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                 <LayoutTemplate className="w-5 h-5 text-white" />
                             </div>
                             <div>
                                 <p className="text-xs text-zinc-400 font-medium">Role</p>
                                 <p className="text-sm text-white font-bold">Product Manager</p>
                             </div>
                        </div>

                         <div className="absolute bottom-20 -right-5 md:-right-10 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in-up delay-100">
                             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                 <Code className="w-5 h-5 text-white" />
                             </div>
                             <div>
                                 <p className="text-xs text-zinc-400 font-medium">Skill</p>
                                 <p className="text-sm text-white font-bold">Full Stack Dev</p>
                             </div>
                        </div>

                         {/* Geometric Shape */}
                         <div className="absolute top-0 right-0 w-16 h-16 border-4 border-orange-500 rounded-full -z-10 animate-bounce duration-[3000ms]"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="py-12 border-y border-white/5 bg-zinc-950/50">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { num: "4+", label: "Years Experience" },
                    { num: "20+", label: "Engineers Hired" },
                    { num: "30+", label: "Projects Shipped" },
                    { num: "100%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                    <div key={i} className="text-center md:text-left">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.num}</h3>
                        <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 3. EXPERTISE / SERVICES */}
      <section className="py-24 bg-black relative">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <p className="text-orange-500 font-bold uppercase tracking-widest mb-2">My Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        The <span className="text-zinc-700">Unfair Advantage</span>
                    </h2>
                </div>
                <Link to="/services" className="hidden md:flex items-center text-white hover:text-orange-500 transition-colors mt-4 md:mt-0">
                    All Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800/50 transition-all duration-300">
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors">
                        <LayoutTemplate className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Product Strategy</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        I translate chaos into clear PRDs. I define roadmaps that align business goals with user needs.
                    </p>
                    <Link to="/services/technical-product-management" className="inline-flex items-center text-sm font-bold text-white hover:text-orange-500">
                        Read More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                 {/* Card 2 */}
                 <div className="group bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800/50 transition-all duration-300">
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors">
                        <Terminal className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Dev</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        I speak API, Database, and Frontend. I can build the MVP myself (Next.js, Python) or lead engineers.
                    </p>
                    <Link to="/services/full-stack-engineering" className="inline-flex items-center text-sm font-bold text-white hover:text-orange-500">
                        Read More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                 {/* Card 3 - Highlighted */}
                 <div className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-8 -mt-8"></div>
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors relative z-10">
                        <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Technical Hiring</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8 relative z-10">
                        A product is only as good as the team. I design hiring pipelines and build high-performing teams.
                    </p>
                    <Link to="/services/technical-hiring" className="inline-flex items-center text-sm font-bold text-white hover:text-orange-500 relative z-10">
                        Read More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
         </div>
      </section>

      {/* 4. SELECTED WORK */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-orange-500 font-bold uppercase tracking-widest mb-2">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
                <p className="text-zinc-400 text-lg">Real products, real users, real impact. Not just concepts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PROJECTS.slice(0, 2).map((project) => (
                    <Link 
                        key={project.slug}
                        to={`/projects/${project.slug}`}
                        className="group relative block rounded-3xl overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="aspect-video bg-zinc-800 overflow-hidden relative">
                             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10"></div>
                             <img 
                                src={project.thumbnail} 
                                alt={project.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                             />
                             {/* Floating Tag */}
                             <div className="absolute top-6 left-6 z-20">
                                 <span className="px-4 py-2 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">
                                     {project.category}
                                 </span>
                             </div>
                        </div>

                        {/* Content Overlay (Bottom) */}
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 z-20">
                             <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.summary}
                                </p>
                                <span className="inline-flex items-center text-orange-500 font-bold text-sm">
                                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                             </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 rounded-full font-bold transition-all">
                    View All Projects
                </Link>
            </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS - Added Section */}
      <section className="py-24 bg-black relative border-t border-white/5">
         <div className="container mx-auto px-6">
             <div className="mb-16 text-center">
                <p className="text-orange-500 font-bold uppercase tracking-widest mb-2">Testimonials</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Trusted by <span className="text-zinc-700">Teams</span></h2>
             </div>
             
             <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                 {TESTIMONIALS.map((t, i) => (
                     <div key={i} className="break-inside-avoid bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group">
                         <Quote className="w-8 h-8 text-zinc-700 mb-4 group-hover:text-orange-500/50 transition-colors" />
                         <p className="text-zinc-300 mb-6 leading-relaxed">"{t.content}"</p>
                         <div className="flex items-center">
                             <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                 {t.name.charAt(0)}
                             </div>
                             <div>
                                 <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                 <p className="text-orange-500 text-xs">{t.role}</p>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* 6. VIBE CODING TEASER */}
      <section className="py-24 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-black to-black"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="bg-zinc-900/50 backdrop-blur-md rounded-[3rem] border border-white/10 p-8 md:p-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-wider mb-8">
                    <Zap className="w-4 h-4" /> New Service
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Need a site <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Yesterday?</span>
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                    Introducing "Vibe Coding". I combine Figma design intuition with React speed to ship stunning portfolios and landing pages in record time.
                </p>
                <Link 
                    to="/services/rapid-mvp-vibe-coding"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all"
                >
                    Start Vibe Coding <Rocket className="ml-2 w-5 h-5" />
                </Link>
            </div>
         </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 bg-black text-center">
         <div className="container mx-auto px-6">
             <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 uppercase mb-8 tracking-tighter hover:text-zinc-800 transition-colors cursor-default">
                Let's Build <br /> Something Great
             </h2>
             <div className="flex flex-col md:flex-row justify-center gap-6">
                 <div className="text-left">
                     <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1">Email Me</p>
                     <a href="mailto:notetofahim@gmail.com" className="text-2xl md:text-3xl font-bold text-white hover:text-orange-500 transition-colors">
                         notetofahim@gmail.com
                     </a>
                 </div>
             </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
