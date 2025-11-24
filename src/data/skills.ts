export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'frontend',
    skills: ['React', 'Next.js', 'Vite.js', 'Material UI', 'jQuery', 'Bootstrap'],
  },
  {
    category: 'backend',
    skills: ['Node.js', 'Nest.js', 'FastAPI', 'PHP', 'Laravel'],
  },
  {
    category: 'databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    category: 'cloud',
    skills: ['AWS (Lambda, S3, RDS, EC2, Cognito)', 'Docker', 'GitHub Actions'],
  },
  {
    category: 'monitoring',
    skills: ['Datadog', 'Sentry', 'New Relic'],
  },
  {
    category: 'ai',
    skills: ['OpenAI API', 'Dify', 'n8n', 'ChromaDB'],
  },
];
