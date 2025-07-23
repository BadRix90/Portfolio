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
  isPeeled = false;
  isAnimating = false;

  get techStack() {
    return this.projectService.getTechStack();
  }

  get currentPeelImage() {
    return `/assets/img/pull-to-peel${this.currentPeelState === 1 ? '' : '-' + this.currentPeelState}.png`;
  }

  onPeelClick(): void {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.isPeeled = !this.isPeeled;

    setTimeout(() => {
      this.isAnimating = false;
    }, 100);
  }
}