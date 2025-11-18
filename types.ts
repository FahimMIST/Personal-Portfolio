import { LucideIcon } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  role: string;
  summary: string;
  fullDescription: string;
  problem?: string;
  solution?: string;
  features?: string[];
  modules?: { title: string; description: string }[];
  impact?: string[];
  techStack: string[];
  category: 'Product' | 'Engineering' | 'Hiring' | 'Analytics';
  thumbnail?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  process: ServiceProcess[];
  techStack?: string[];
  benefits?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
  type: 'Full-time' | 'Contract' | 'Founder';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  achievements?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface ChartData {
  subject: string;
  A: number;
  fullMark: number;
}