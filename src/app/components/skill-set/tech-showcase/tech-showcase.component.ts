import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-showcase.component.html',
  styleUrl: './tech-showcase.component.scss'
})
export class TechShowcaseComponent {
  @Input() currentLanguage = 'en';

  currentPeelState = 1;
  isAnimating = false;

  // Tech Stack Icons Data
  techStack = [
    { name: 'HTML', icon: 'html.png', alt: 'HTML5 Technology' },
    { name: 'CSS', icon: 'css.png', alt: 'CSS3 Styling' },
    { name: 'JavaScript', icon: 'javascript.png', alt: 'JavaScript Programming' },
    { name: 'TypeScript', icon: 'typescript.png', alt: 'TypeScript Development' },
    { name: 'Angular', icon: 'angular.png', alt: 'Angular Framework' },
    { name: 'Firebase', icon: 'firebase.png', alt: 'Firebase Backend' },
    { name: 'Git', icon: 'git.png', alt: 'Git Version Control' },
    { name: 'Rest-Api', icon: 'rest-api.png', alt: 'REST API Development' },
    { name: 'Scrum', icon: 'scrum.png', alt: 'Scrum Methodology' },
    { name: 'Material Design', icon: 'material-design.png', alt: 'Material Design System' }
  ];

  get currentPeelImage() {
    return `/assets/img/pull-to-peel${this.currentPeelState === 1 ? '' : '-' + this.currentPeelState}.png`;
  }

  onPeelClick(): void {
    if (this.isAnimating) return;

    if (this.currentPeelState === 1) {
      // Vorwärts: 1 → 2 → 3
      this.currentPeelState = 2;

      setTimeout(() => {
        const front = document.querySelector('.peel-front') as HTMLElement;
        if (front) front.classList.add('fly-out');

        setTimeout(() => {
          this.currentPeelState = 3;
        }, 200);
      }, 50);

    } else if (this.currentPeelState === 3) {
      // Rückwärts: 3 → 1
      this.currentPeelState = 1;
    }
  }
}