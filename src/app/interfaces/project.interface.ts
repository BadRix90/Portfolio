export interface Project {
  id: string;
  title: string;
  description: { de: string; en: string }; // ← Geändert
  implementationDetails: { de: string; en: string }; // ← Geändert
  duration: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}