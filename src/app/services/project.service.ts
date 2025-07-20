// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private techStack = [
    { name: 'HTML', icon: 'html.png', alt: 'HTML5 Technology' },
    { name: 'CSS', icon: 'css.png', alt: 'CSS3 Styling' },
    { name: 'JavaScript', icon: 'js.png', alt: 'JavaScript Programming' },
    { name: 'TypeScript', icon: 'ts.png', alt: 'TypeScript Development' },
    { name: 'Angular', icon: 'angular.png', alt: 'Angular Framework' },
    { name: 'Firebase', icon: 'firebase.png', alt: 'Firebase Backend' },
    { name: 'Git', icon: 'git.png', alt: 'Git Version Control' },
    { name: 'Rest-Api', icon: 'rest-api.png', alt: 'REST API Development' },
    { name: 'Scrum', icon: 'scrum.png', alt: 'Scrum Methodology' },
    { name: 'Material Design', icon: 'material-design.png', alt: 'Material Design System' },
  ];

  private projects: { [key: string]: Project } = {
    join: {
      id: 'join',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '5 weeks',
      image: 'assets/img/join.png',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      githubUrl: 'https://github.com/BadRix90/join',
      liveUrl: 'https://kaydietrich.com/join/'
    },
    powerofthebeast: {
      id: 'powerofthebeast',
      title: 'Power of the Beast',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      implementationDetails: 'Object-oriented JavaScript game with canvas rendering, collision detection, and smooth character controls. Implemented game mechanics including jumping, running, and throwing objects.',
      duration: '4 weeks',
      image: 'assets/img/PowerOfTheBeast.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/BadRix90/El-Pollo-Loco',
      liveUrl: 'https://kaydietrich.com/epl/'
    },
    dabubble: {
      id: 'dabubble',
      title: 'DABubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and seamless file sharing for enhanced productivity.',
      implementationDetails: 'Real-time chat application built with modern web technologies. Features include channel management, direct messaging, file uploads, and user authentication.',
      duration: '6 weeks',
      image: 'assets/img/DABubble.png',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'RxJS'],
      githubUrl: 'https://github.com/your-username/dabubble',
      liveUrl: 'https://your-dabubble-app.com'
    }
  };

  getProject(id: string): Project | null {
    return this.projects[id] || null;
  }

  getAllProjects(): Project[] {
    return Object.values(this.projects);
  }

  getNextProject(currentId: string): Project | null {
    const projectIds = Object.keys(this.projects);
    const currentIndex = projectIds.indexOf(currentId);
    const nextIndex = (currentIndex + 1) % projectIds.length;
    return this.projects[projectIds[nextIndex]];
  }

  getPreviousProject(currentId: string): Project | null {
    const projectIds = Object.keys(this.projects);
    const currentIndex = projectIds.indexOf(currentId);
    const prevIndex = currentIndex === 0 ? projectIds.length - 1 : currentIndex - 1;
    return this.projects[projectIds[prevIndex]];
  }

  getTechIcon(techName: string): string {
    const tech = this.techStack.find(t => t.name.toLowerCase() === techName.toLowerCase());
    return tech ? `assets/img/${tech.icon}` : 'assets/img/default.png';
  }

  // ← NEU: Methode für Tech-Alt Text
  getTechAlt(techName: string): string {
    const tech = this.techStack.find(t => t.name.toLowerCase() === techName.toLowerCase());
    return tech ? tech.alt : techName;
  }

  getTechStack() {
  return this.techStack;
}
}