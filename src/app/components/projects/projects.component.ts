// src/app/components/projects/projects.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() currentLanguage = 'en';

  texts = {
    craftLabel: {
      de: 'MEINE ARBEIT',
      en: 'MY CRAFT'
    },
    projectsTitle: {
      de: 'Projekte',
      en: 'Projects'
    },
    titleDescription: {
      de: 'Ermutige Menschen, einen Blick zu werfen und mit deinen Projekten zu interagieren. Hebe deinen Ansatz zur Erstellung responsiver, benutzerfreundlicher Projekte mit effizientem Code hervor.',
      en: 'Encourage people to take a look and interact with your projects. Highlight your approach to creating responsive, user-friendly projects with efficient code.'
    },
    joinTitle: {
      de: 'Join',
      en: 'Join'
    },
    joinDescription: {
      de: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    powerTitle: {
      de: 'Power of the Beast',
      en: 'Power of the Beast'
    },
    powerDescription: {
      de: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    dabubbleTitle: {
      de: 'DABubble',
      en: 'DABubble'
    },
    dabubbleDescription: {
      de: 'Diese App ist eine Slack-Clone-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Messaging und nahtlosem Dateiaustausch für erhöhte Produktivität.',
      en: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and seamless file sharing for enhanced productivity.'
    }
  };

  getText(key: string): string {
    return this.texts[key as keyof typeof this.texts][this.currentLanguage as 'de' | 'en'];
  }
}