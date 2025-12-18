export type Project = {
  id: number;
  title: string;
  description: string;
  full_description: string;
  image: string; // URL or path
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  credits?: string;
  role?: string;
  year?: string;
};