// src/app/interfaces/project.interface.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  implementationDetails: string;
  duration: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}