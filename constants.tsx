
import { 
  Code2, 
  Users, 
  LineChart, 
  ClipboardCheck, 
  LayoutTemplate, 
  Server, 
  Smartphone, 
  Briefcase,
  Palette,
  Zap,
  Terminal
} from 'lucide-react';
import { Project, Service, ExperienceItem, ChartData, Skill, EducationItem, CertificationItem, Testimonial } from './types';

// Direct link to the user's photo from Google Drive
export const USER_IMAGE_URL = "https://drive.google.com/uc?export=view&id=1DMMLMkota-I_9CLmToVQFtLq3cr4vW7w";

export const THEME = {
  accent: "orange-500",
  accentHover: "orange-600",
  darkBg: "zinc-950",
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Career', path: '/career' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const SKILLS_RADAR_DATA: ChartData[] = [
  { subject: 'Product Strategy', A: 95, fullMark: 100 },
  { subject: 'Engineering', A: 85, fullMark: 100 },
  { subject: 'Data Analytics', A: 80, fullMark: 100 },
  { subject: 'Hiring/Team', A: 90, fullMark: 100 },
  { subject: 'QA/Testing', A: 85, fullMark: 100 },
  { subject: 'Design (Figma)', A: 80, fullMark: 100 },
];

export const SERVICES: Service[] = [
  {
    slug: 'technical-product-management',
    title: 'Technical Product Management',
    description: 'I bridge the gap between business goals and engineering reality. I define product strategy, scope MVPs, write clear PRDs, and lead cross-functional delivery.',
    fullDescription: 'Great products don\'t happen by accident—they are engineered. As a Technical PM, I don\'t just manage backlogs; I translate ambitious business goals into executable technical roadmaps. I speak the language of engineers and stakeholders alike, ensuring that what we build is valuable, feasible, and scalable.',
    icon: ClipboardCheck,
    features: [
      'Product Discovery & User Research',
      'PRD & Technical Spec Writing',
      'Roadmap Strategy & Prioritization',
      'Agile/Scrum Leadership'
    ],
    process: [
      { title: 'Discovery', description: 'Deep dive into user needs, market gaps, and business constraints.' },
      { title: 'Definition', description: 'Drafting detailed PRDs, user stories, and acceptance criteria.' },
      { title: 'Execution', description: 'Leading sprints, unblocking devs, and managing stakeholders.' },
      { title: 'Launch', description: 'Go-to-market coordination and post-launch iteration.' }
    ],
    benefits: [
      'Clearer communication between business and tech',
      'Faster delivery cycles with fewer pivots',
      'Products that actually solve user problems'
    ],
    techStack: ['Jira', 'Linear', 'Notion', 'Figma', 'Miro']
  },
  {
    slug: 'rapid-mvp-vibe-coding',
    title: 'Rapid MVP & "Vibe Coding"',
    description: 'Turn your vision into a working product fast. I combine "Vibe Coding" speed with PM rigor—building low-cost MVPs, operational flowcharts (Visio), and testing product-market fit.',
    fullDescription: 'In the early stages, speed and clarity are everything. "Vibe Coding" isn\'t just about aesthetics—it\'s about rapidly manifesting a vision into reality to test product-market fit without the enterprise bloat.\n\nI help founders define the entire project lifecycle, create detailed operational flowcharts using Visio to map complex user journeys, and architect low-cost MVPs. My goal is to get your product in front of users quickly, analyze their behavior, and iterate based on real data rather than assumptions.',
    icon: Palette,
    features: [
      'Project Lifecycle & Vision Building',
      'Operational Flowcharts (Visio)',
      'Low-Cost MVP Development',
      'Product-Market Fit Testing',
      'User Behavior Analysis & Heatmaps',
      'High-Fidelity Design & Implementation'
    ],
    process: [
      { title: 'Vision', description: 'Defining the core value proposition and building out the long-term project vision.' },
      { title: 'Flow', description: 'Creating detailed operational flowcharts (Visio) to map user journeys and logic.' },
      { title: 'Build', description: 'Rapidly coding a low-cost MVP focused on core features to validate the concept.' },
      { title: 'Validate', description: 'Launching to users, analyzing behavior, and measuring product-market fit.' }
    ],
    benefits: [
      'Validate ideas without expensive engineering teams',
      'Clear operational roadmaps before a single line of code',
      'Data-driven iteration based on real user behavior'
    ],
    techStack: ['React', 'Visio', 'Figma', 'Tailwind CSS', 'Vercel', 'Mixpanel']
  },
  {
    slug: 'full-stack-engineering',
    title: 'Full-Stack Engineering',
    description: 'Building robust, scalable systems. I specialize in Python (FastAPI), React, PostgreSQL, and deploying on DigitalOcean. I build the core tech that powers your business.',
    fullDescription: 'I am not just a PM who codes; I am a builder. My technical sweet spot involves heavy lifting on the backend with Python (FastAPI) and crafting responsive frontends with React. I handle the entire lifecycle from database schema design to deployment on DigitalOcean or cloud VPS. I write clean, maintainable code that scales with your business.',
    icon: Code2,
    features: [
      'REST API Design & Implementation',
      'Database Architecture (PostgreSQL)',
      'Authentication & Authorization Systems',
      'Cloud Deployment (DigitalOcean/AWS)'
    ],
    process: [
      { title: 'Architecture', description: 'Designing the system schema and API contracts.' },
      { title: 'Backend', description: 'Building robust APIs with FastAPI and SQLAlchemy.' },
      { title: 'Frontend', description: 'Connecting the UI to real data with React.' },
      { title: 'DevOps', description: 'Setting up CI/CD and production environments.' }
    ],
    benefits: [
      'Scalable and secure architecture',
      'Full ownership of the tech stack',
      'Clean code that is easy to maintain'
    ],
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'DigitalOcean', 'GitHub']
  },
  {
    slug: 'technical-hiring',
    title: 'Technical Hiring',
    description: 'I don’t just hire; I build teams. From designing coding challenges to conducting technical interviews, I help you find and retain the right engineers.',
    fullDescription: 'Hiring engineers is expensive and risky. As a Technical Hiring Manager, I mitigate that risk by designing rigorous, fair, and role-specific hiring pipelines. I have successfully hired 20+ engineers for international clients by focusing on real-world problem solving rather than LeetCode riddles. I help you define the role, test the skills, and close the candidate.',
    icon: Users,
    features: [
      'Custom Hiring Pipeline Design',
      'Technical Assessment Creation',
      'Live Coding Interview conduction',
      'Candidate Scorecards & Feedback'
    ],
    process: [
      { title: 'Profile', description: 'Defining the exact technical persona you need.' },
      { title: 'Screening', description: 'Filtering candidates based on verified skills.' },
      { title: 'Interview', description: ' conducting deep-dive technical discussions.' },
      { title: 'Closing', description: 'Helping you negotiate and onboard the talent.' }
    ],
    benefits: [
      'Reduce time-to-hire by 50%+',
      'Avoid costly bad hires',
      'Build a culture of engineering excellence'
    ],
    techStack: ['HackerRank', 'CoderPad', 'LinkedIn Recruiter', 'Async Interviews']
  },
  {
    slug: 'analytics-data',
    title: 'Analytics & Data',
    description: 'Turn data into insights. I build dashboards and data workflows using Python, SQL, and Pandas to drive informed decision-making.',
    fullDescription: 'Data is useless without interpretation. I build lightweight data infrastructure and dashboards that help businesses track KPIs and make decisions. From cleaning messy CSVs with Pandas to querying complex PostgreSQL databases and visualizing trends, I turn raw data into actionable business intelligence.',
    icon: LineChart,
    features: [
      'SQL Query Optimization',
      'Data Cleaning & Transformation (ETL)',
      'Dashboard Creation',
      'Business Intelligence Reporting'
    ],
    process: [
      { title: 'Ingest', description: 'Gathering data from APIs, DBs, or spreadsheets.' },
      { title: 'Process', description: 'Cleaning and structuring data using Python/Pandas.' },
      { title: 'Analyze', description: 'Running statistical analysis to find trends.' },
      { title: 'Visualize', description: 'Presenting findings in clear, interactive dashboards.' }
    ],
    benefits: [
      'Data-backed decision making',
      'Automated reporting workflows',
      'Clear visibility into business health'
    ],
    techStack: ['Python', 'Pandas', 'SQL', 'Tableau', 'Metabase']
  }
];

export const PROJECTS: Project[] = [
  {
    slug: 'academizz',
    title: 'Academizz',
    role: 'Founder & Technical PM',
    category: 'Product',
    summary: 'A multi-platform academic resource ecosystem built with Next.js, FastAPI, PostgreSQL, and Flutter.',
    fullDescription: 'Academizz is a resource-sharing and learning platform for university students. Contributors can upload course-related resources (notes, exams, solutions), and students can access and download them. The platform includes a subscription model, contributor payouts based on ratings/downloads, and university/department-based user groups.',
    problem: 'Academic resources were scattered across FB groups, drive links, and chat apps with no structured indexing, making it hard for students to find specific lecture notes or past exam solutions.',
    solution: 'A centralized ecosystem with structured uploading, metadata tagging (University, Subject, Course), and a smart question bank for model tests.',
    liveUrl: 'https://app.academizz.com/',
    modules: [
        {
            title: "Resource Repository",
            description: "Structured table view for browsing resources with advanced filtering by University, Department, Subject, and Course. Includes details view and file download capabilities."
        },
        {
            title: "Smart Question Bank",
            description: "Admin-managed question bank supporting rich text, equations, charts, and various types (MCQ, True/False, Fill in Blanks). Enables future generation of model tests."
        },
        {
            title: "Contributor Economy",
            description: "Logic for tracking unique downloads and ratings to calculate contributor earnings from a monthly prize pool."
        },
        {
            title: "Role-Based Access",
            description: "Granular permission system for Students, Moderators, Admins, and Superadmins to manage content safety and platform integrity."
        }
    ],
    features: [
      'Resource upload with granular metadata',
      'Rich-text Question Bank (MCQ, Theory, Equations)',
      'Mobile App (Flutter) consuming same API',
      'Automated User Verification System'
    ],
    impact: [
      'Structured repository for thousands of academic resources',
      'Early adoption across two university departments',
      'Foundation built for subscription & monetization'
    ],
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Flutter', 'DigitalOcean'],
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'dokane-pos',
    title: 'Dokane POS',
    role: 'Product Manager & QA Lead',
    category: 'Product',
    summary: 'A cloud-based POS system handling 100k+ monthly retail transactions.',
    fullDescription: 'Dokane POS is a cloud-based point-of-sale system for retailers. I owned the end-to-end product lifecycle: feature definition, workflows, UI/UX collaboration, and QA.',
    problem: 'Retailers faced slow manual billing, weak inventory visibility, and poor reporting tools.',
    solution: 'A robust cloud POS handling high transaction volumes with real-time inventory tracking and comprehensive reporting.',
    features: [
      'Billing & Invoice Management',
      'Inventory & Supplier Management',
      'Real-time Reporting Dashboard',
      'Role-based Access Control'
    ],
    impact: [
      'Stable system handling 100k+ monthly transactions',
      'Reduced checkout time significantly',
      'Reduced production bugs via rigorous QA'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Manual Testing'],
    thumbnail: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'reformed-tech-hiring',
    title: 'Technical Hiring Manager',
    role: 'Hiring Manager',
    category: 'Hiring',
    summary: 'Hired 20+ engineers for international clients by designing a custom technical evaluation pipeline.',
    fullDescription: 'At ReformedTech, I acted as the Technical Hiring Manager, responsible for hiring 20+ engineers (frontend, backend, mobile, QA, DevOps) for international clients.',
    problem: 'Clients needed reliable engineers but struggled with inconsistent technical evaluation and slow hiring cycles.',
    solution: 'Designed a multi-stage pipeline: screening → tests → technical interview → client round, focusing on real-world tasks.',
    features: [
      'Custom Coding Assessments',
      'Structured Interview Scorecards',
      'Cultural & Technical Fit Analysis',
      'Onboarding Support'
    ],
    impact: [
      '20+ successful hires across multiple stacks',
      '100% client satisfaction',
      'Reduced time-to-hire by ~60%'
    ],
    techStack: ['Recruiting', 'Technical Interviewing', 'Team Building'],
    thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'farming-system',
    title: 'Farming Management System',
    role: 'PM, Designer & QA',
    category: 'Product',
    summary: 'An enterprise farm operations platform designed and tested under NDA.',
    fullDescription: 'I led Product Management, UI/UX design, and QA for an enterprise farming management system used by a large organization. (NDA-Safe Case Study)',
    problem: 'Fragmented operational tracking via spreadsheets made it difficult to see project progress, growth, and costs.',
    solution: 'A centralized platform for project creation, task management, inventory, and harvest recording.',
    features: [
      'Project & Farm Creation',
      'Task Management',
      'Inventory & Purchasing Modules',
      'Estimation vs Actuals Analytics'
    ],
    impact: [
      'Better operational visibility for management',
      'Improved cost control',
      'Strong documentation culture established'
    ],
    techStack: ['UI/UX Design', 'Product Management', 'QA', 'Enterprise Software'],
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop'
  }
];

export const SKILLS_LIST: Skill[] = [
  { name: "Product Strategy", level: 95, category: "Product" },
  { name: "User Research", level: 90, category: "Product" },
  { name: "Next.js / React", level: 85, category: "Engineering" },
  { name: "FastAPI / Python", level: 85, category: "Engineering" },
  { name: "SQL / PostgreSQL", level: 85, category: "Data" },
  { name: "Figma / UI Design", level: 80, category: "Design" },
  { name: "Technical Hiring", level: 95, category: "Management" },
];

export const CAREER_TIMELINE: ExperienceItem[] = [
  {
    id: 'ctfn-analyst',
    role: 'Analyst',
    company: 'CTFN',
    companyUrl: 'https://ctfn.news',
    period: 'Feb 2025 - Present',
    location: 'Westport, USA (Remote)',
    type: 'Full-time',
    description: 'Conducting in-depth analysis of mergers & acquisitions (M&A) and financial market activities.',
    achievements: [
      'Curate and publish daily market intelligence reports.',
      'Assist in developing a data-driven insights product to enhance deal research capabilities.',
      'Extract key findings from public filings, press releases, and market disclosures.'
    ],
    skillsUsed: ['M&A Analysis', 'Financial Markets', 'Data Analysis', 'Reporting', 'Remote Collaboration']
  },
  {
    id: 'aci-logistics',
    role: 'Assistant Product Manager',
    company: 'ACI Logistics Ltd (Shwapno)',
    period: 'Aug 2024 - Feb 2025',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Defined product vision and roadmaps for the largest retail chain in Bangladesh, aligning with business goals.',
    achievements: [
      'Authored critical product documentation: PRDs, Epics, and User Manuals.',
      'Designed prototypes in Figma to support stakeholder alignment and development clarity.',
      'Utilized multiple task management platforms (ClickUp, Trello, Linear, Asana) to ensure timely delivery.'
    ],
    skillsUsed: ['Product Management', 'Figma', 'Roadmapping', 'Agile', 'Linear', 'Asana']
  },
  {
    id: 'academizz-founder',
    role: 'Founder',
    company: 'Academizz',
    period: 'Jul 2025 – Present',
    location: 'Dhaka, Bangladesh',
    type: 'Founder',
    description: 'Founded and developed a platform for university students to streamline their academic journey.',
    achievements: [
      'Founded and developed a platform for university students to streamline their academic journey.',
      'Built and deployed web app (Next.js), mobile app (Flutter), and backend (FastAPI) single-handedly.',
      'Achieved early adoption across two university departments with 50+ active users in the first month.'
    ],
    skillsUsed: ['Entrepreneurship', 'Full Stack Development', 'Product Strategy', 'Next.js', 'FastAPI']
  },
  {
    id: 'analytics-team',
    role: 'Project Manager',
    company: 'The Analytics Team',
    period: 'June 2023 - July 2024',
    location: 'Bangladesh',
    type: 'Full-time',
    description: 'Delivered 30+ analytics and web development projects on time and within scope.',
    achievements: [
      'Led a cross-functional team of digital analytics and development professionals.',
      'Organized sprint planning, standups, and retrospectives to drive continuous improvement.',
      'Acted as the primary liaison between clients and technical teams, ensuring satisfaction.',
      'Resolved blockers proactively, ensuring seamless project delivery.'
    ],
    skillsUsed: ['Project Management', 'Digital Analytics', 'Client Relations', 'Scrum', 'Agile']
  },
  {
    id: 'reformed-tech',
    role: 'Project Manager',
    company: 'ReformedTech',
    period: 'Jun 2021 – Mar 2024',
    location: 'Bangladesh',
    type: 'Full-time',
    description: 'Delivered 10+ software products, including a flagship POS system with a future ERP vision.',
    achievements: [
      'Delivered 10+ software products, including a flagship POS system with a future ERP vision.',
      'Gathered business requirements, converted them into technical specifications, and guided development.',
      'Produced BRS, SRS, and product backlogs with acceptance criteria.',
      'Ensured project milestones were achieved while managing scope, risks, and communication.'
    ],
    skillsUsed: ['SDLC', 'Requirement Gathering', 'QA', 'Product Delivery', 'Risk Management']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Bangladesh Institute of Management Studies',
    degree: 'Post Graduate Diploma in Supply Chain Management (PGDSCM)',
    period: '2022',
    location: 'Dhaka, Bangladesh',
    achievements: []
  },
  {
    institution: 'Military Institute of Science and Technology (MIST)',
    degree: 'B.Sc in Industrial and Production Engineering',
    period: '2017 - 2020',
    location: 'Dhaka, Bangladesh',
    achievements: [
      'Focus on Supply Chain, Operations Research, and Systems Engineering.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    name: 'Professional Scrum Master I (PSM I)', 
    issuer: 'Scrum.org',
    link: 'https://www.credly.com/badges/863d9b26-22b8-4c2f-9ff0-8baab2ff0c6f/public_url'
  },
  { 
    name: 'Google Project Management Professional', 
    issuer: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/T6J89PUE5EQ7'
  },
  { 
    name: 'Data Analyst / Scientist Tracks (40+ Courses)', 
    issuer: 'DataCamp', 
    link: 'https://www.datacamp.com/portfolio/FahimMontasir' 
  },
  { 
    name: 'IELTS Score - 6.5', 
    issuer: 'British Council / IDP',
    link: 'https://drive.google.com/file/d/11s7moMjjgMcyrgvKsmdDrNhUjyrL1ceM/view?usp=sharing'
  }
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/fahim-sium/",
  datacamp: "https://www.datacamp.com/portfolio/FahimMontasir",
  github: "https://github.com/FahimMIST",
  email: "mailto:notetofahim@gmail.com",
  whatsapp: "https://wa.me/8801886628121"
};

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Dane Bratz",
        role: "Ex-Technical Founder",
        relation: "Worked with Fahim but were at different companies",
        content: "Fahim is diligent, thoughtful, eager to learn and improve, and quickly picks things up. He's an absolute joy to work with and to be around. He brings a mature groundedness to any team that he is a part of. He is an excellent communicator and works hard to understand, break down, and encode projects or problems at hand. Overall, he is just a really good and gracious person."
    },
    {
        name: "Mahammad Jan E Alam",
        role: "Digital Growth Manager",
        relation: "Fahim's Mentor",
        content: "Teaming up with Fahim has been immensely rewarding. His outstanding leadership, organizational skills, and clear communication have had a notable impact on our web and software development projects. Fahim skillfully handles complex projects, ensuring they are completed on time and within budget. I confidently recommend Fahim to anyone seeking a high-caliber project manager."
    },
    {
        name: "Md. Abdullah Al Mamun",
        role: "Technical QA Leader",
        relation: "Worked with Fahim on the same team",
        content: "I got a chance to work with Fahim bhai in a POS application project. As a project manager he is really awesome and always brings a unique point of view in terms of project management. He is very passionate and honest about his work, always keeps motivating the team members to grow. It was really awesome working with Fahim."
    },
    {
        name: "SM Ashik Uzzaman",
        role: "Software Engineer (Next.js)",
        relation: "Worked with Fahim on the same team",
        content: "Fahim is a strategic thinker with a remarkable ability to streamline complex processes and drive efficiency. His approach to project management is both innovative and methodical. Fahim's exceptional attention to detail and problem-solving skills consistently deliver outstanding results. He knows how to inspire and motivate teams to achieve common goals."
    },
    {
        name: "Himadri Sen Gupta, Ph.D.",
        role: "Assistant Professor @ Colorado State",
        relation: "Fahim's Teacher",
        content: "I am glad to recommend Fahim, one of the best students of my class. I found him very energetic, he always tries to learn new things which always impressed me a lot. Fahim has a very deep insight in the field of data science and in some programming languages. As far I know he is very passionate in this field."
    },
    {
        name: "Reza Tariq Al Huda",
        role: "Operations Management Intern",
        relation: "Studied together",
        content: "Fahim works hard besides the regular undergrad studies. He has excellent time management skills that aids him in his venture."
    },
    {
        name: "Ashraful Islam",
        role: "CVM / CLM and Data Science",
        relation: "Managed Fahim directly",
        content: "Fahim is hardworking and full of energy and ideas. His curiosity has helped me in my projects when I worked with Fahim. He performed all the tasks with agility and learned complex calculations and analytics pretty fast."
    },
    {
        name: "Rojin Ammar",
        role: "Product @ Electica",
        relation: "Managed Fahim directly",
        content: "I have seen few people as hungry to learn and contribute as Fahim. An amazing team player and always ready to help others. He will put in the required effort and some more. A welcome addition to any team."
    }
];
