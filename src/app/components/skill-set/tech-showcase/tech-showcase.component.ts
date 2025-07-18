import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-tech-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-showcase.component.html',
  styleUrl: './tech-showcase.component.scss'
})
export class TechShowcaseComponent {
  @Input() currentLanguage = 'en';


  constructor(private projectService: ProjectService) { }

  
  currentPeelState = 1;
  isAnimating = false;

  get techStack() {
    return this.projectService.getTechStack();
  }

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