export type Project = {
  id: number;
  title: string;
  description: string;
  image: string; // URL or path
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
};