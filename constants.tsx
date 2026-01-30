
import React from 'react';
import { 
  Code2, 
  Smartphone, 
  BrainCircuit, 
  Monitor, 
  Github, 
  Terminal, 
  Coffee,
  Database,
  Layout,
  Cpu,
  Globe,
  MessageCircle,
  Users,
  Zap,
  BookOpen
} from 'lucide-react';
import { EducationEntry, Skill, JournalEntry } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Lab', href: '#future-lab' },
  { name: 'Journal', href: '#journal' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const EDUCATION: EducationEntry[] = [
  {
    period: '2026 - Present',
    title: 'Diploma in CST',
    institution: 'Pabna Polytechnic Institute',
    status: 'Running'
  },
  {
    period: '2025',
    title: 'SSC Completed',
    institution: 'Local High School',
    status: 'Graduated'
  }
];

export const SKILLS: Skill[] = [
  { name: 'C++', level: 65, icon: 'terminal', description: 'Deepening my understanding of algorithms and logic.' },
  { name: 'Python', level: 60, icon: 'code', description: 'Focusing on scripting and AI foundations.' },
  { name: 'Web Dev', level: 45, icon: 'globe', description: 'Learning HTML, CSS, and modern JS frameworks.' },
  { name: 'App Dev', level: 40, icon: 'smartphone', description: 'Exploring cross-platform development.' }
];

export const SOFT_SKILLS = [
  { name: 'Problem Solving', icon: <BrainCircuit size={24} /> },
  { name: 'Self-Motivated', icon: <Zap size={24} /> },
  { name: 'Fast Learner', icon: <BookOpen size={24} /> },
  { name: 'Teamwork', icon: <Users size={24} /> }
];

export const TOOLS = [
  { name: 'VS Code', icon: <Monitor size={24} /> },
  { name: 'Git & GitHub', icon: <Github size={24} /> },
  { name: 'Windows', icon: <Terminal size={24} /> }
];

export const INTEREST_ICONS = [
  { name: 'Web Development', icon: <Layout className="text-blue-400" /> },
  { name: 'App Development', icon: <Smartphone className="text-purple-400" /> },
  { name: 'AI/ML', icon: <BrainCircuit className="text-amber-400" /> }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    week: 'Week 42',
    date: 'Oct 2026',
    title: 'Deep Dive into Memory Management',
    category: 'Logic',
    takeaways: [
      'Mastered Pointers and Reference variables in C++.',
      'Optimized System Alpha-9 garbage collection logic.',
      'Reduced memory footprint by 12% in local tests.'
    ],
    status: 'Mastered'
  },
  {
    week: 'Week 40',
    date: 'Oct 2026',
    title: 'Advanced React Patterns',
    category: 'Design',
    takeaways: [
      'Implemented Higher-Order Components for the Lab UI.',
      'Explored Framer Motion Layout animations.',
      'Refined Recruiter Mode switch logic.'
    ],
    status: 'Refining'
  },
  {
    week: 'Week 38',
    date: 'Sept 2026',
    title: 'Neural Engine Foundations',
    category: 'AI',
    takeaways: [
      'Explored Large Language Model (LLM) prompting techniques.',
      'Connected Gemini API to a local Python script.',
      'Architected the first version of Arnob AI Twin.'
    ],
    status: 'Exploring'
  }
];
