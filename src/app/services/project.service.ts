// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private projects: { [key: string]: Project } = {
    join: {
      id: 'join',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '5 weeks',
      image: 'assets/img/join.png',
      technologies: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'],
      githubUrl: 'https://github.com/your-username/join',
      liveUrl: 'https://your-join-app.com'
    },
    powerofthebeast: {
      id: 'powerofthebeast',
      title: 'Power of the Beast',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      implementationDetails: 'Object-oriented JavaScript game with canvas rendering, collision detection, and smooth character controls. Implemented game mechanics including jumping, running, and throwing objects.',
      duration: '4 weeks',
      image: 'assets/img/PowerOfTheBeast.png',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'OOP'],
      githubUrl: 'https://github.com/your-username/power-of-the-beast',
      liveUrl: 'https://your-power-game.com'
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
}