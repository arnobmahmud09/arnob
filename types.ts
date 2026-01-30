
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: 'Completed' | 'In Progress' | 'Coming Soon';
  image: string;
}

export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  status?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface JournalEntry {
  week: string;
  date: string;
  title: string;
  category: 'Logic' | 'Design' | 'Systems' | 'AI';
  takeaways: string[];
  status: 'Mastered' | 'Refining' | 'Exploring';
}
