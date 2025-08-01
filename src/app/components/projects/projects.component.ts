import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../services/text.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() currentLanguage = 'en';

  constructor(private textService: TextService) {}

  getText(key: string): string {
    const texts = this.textService.getProjectTexts();
    return (texts as any)[key][this.currentLanguage];
  }
}
