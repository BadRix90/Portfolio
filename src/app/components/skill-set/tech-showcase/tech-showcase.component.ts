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

  techStack = [
    { name: 'HTML', icon: 'Property 1=Default-3.png', alt: 'HTML5 Technology' },
    { name: 'CSS', icon: 'Property 1=CSS.png', alt: 'CSS3 Styling' },
    { name: 'JavaScript', icon: 'Property 1=Js.png', alt: 'JavaScript Programming' },
    { name: 'TypeScript', icon: 'Property 1=Ts.png', alt: 'TypeScript Development' },
    { name: 'Angular', icon: 'Property 1=Angular.png', alt: 'Angular Framework' },
    { name: 'Firebase', icon: 'Property 1=Firebase.png', alt: 'Firebase Backend' },
    { name: 'Git', icon: 'Property 1=Git.png', alt: 'Git Version Control' },
    { name: 'Rest-Api', icon: 'Property 1=Rest-Api.png', alt: 'REST API Development' },
    { name: 'Scrum', icon: 'Property 1=Scrum.png', alt: 'Scrum Methodology' },
    { name: 'Material Design', icon: 'Property 1=Material Design.png', alt: 'Material Design System' }
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