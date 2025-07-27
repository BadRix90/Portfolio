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
    description: {
      de: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    implementationDetails: {
      de: 'Kurzer Text, der deine Rolle oder den Arbeitsablauf für dieses spezifische Projekt beschreibt. Lass einen Recruiter mehr über dein Wissen erfahren.',
      en: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently.'
    },
    duration: '5 weeks',
    image: 'assets/img/join.png',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
    githubUrl: 'https://github.com/BadRix90/join',
    liveUrl: 'https://kaydietrich.com/join/'
  },
  powerofthebeast: {
    id: 'powerofthebeast',
    title: 'Power of the Beast',
    description: {
      de: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    implementationDetails: {
      de: 'Objektorientiertes JavaScript-Spiel mit Canvas-Rendering, Kollisionserkennung und flüssigen Charaktersteuerungen. Spielmechaniken wie Springen, Laufen und Werfen implementiert.',
      en: 'Object-oriented JavaScript game with canvas rendering, collision detection, and smooth character controls. Implemented game mechanics including jumping, running, and throwing objects.'
    },
    duration: '4 weeks',
    image: 'assets/img/PowerOfTheBeast.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/BadRix90/El-Pollo-Loco',
    liveUrl: 'https://kaydietrich.com/epl/'
  },
  dabubble: {
    id: 'dabubble',
    title: 'DABubble',
    description: {
      de: 'Diese App ist eine Slack-Clone-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Messaging und nahtlosem Dateiaustausch für erhöhte Produktivität.',
      en: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and seamless file sharing for enhanced productivity.'
    },
    implementationDetails: {
      de: 'Echtzeit-Chat-Anwendung mit modernen Web-Technologien. Features umfassen Kanalverwaltung, Direktnachrichten, Datei-Uploads und Benutzerauthentifizierung.',
      en: 'Real-time chat application built with modern web technologies. Features include channel management, direct messaging, file uploads, and user authentication.'
    },
    duration: '6 weeks',
    image: 'assets/img/DABubble.png',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'CSS'],
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
  const nextIndex = currentIndex + 1;
  
  if (nextIndex >= projectIds.length) {
    return null;
  }
  
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