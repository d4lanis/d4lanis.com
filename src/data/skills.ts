export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'frontend',
    skills: ['React', 'Next.js', 'Astro', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'jQuery', 'Bootstrap'],
  },
  {
    category: 'backend',
    skills: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'REST APIs',
      'API Integration',
      'Auth & Authorization',
      'PHP',
      'Laravel',
    ],
  },
  {
    category: 'databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'MariaDB', 'SQL'],
  },
  {
    category: 'cloud',
    skills: [
      'AWS (Lambda, S3, RDS, EC2, Cognito, CloudFront, Route 53)',
      'GCP',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Nginx',
      'Git',
    ],
  },
  {
    category: 'monitoring',
    skills: ['Playwright (MCP)', 'Chrome DevTools (MCP)', 'E2E Testing', 'Browser Automation'],
  },
  {
    category: 'ai',
    skills: ['OpenCode', 'AI-Assisted Development', 'AI Agents', 'n8n', 'OpenAI API', 'DeepSeek'],
  },
];
