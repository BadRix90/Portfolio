import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from '../projects/project-detail/project-detail.component';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() currentLanguage = 'en';

  constructor(private textService: TextService) { }

  showProjectDetail = false;
  selectedProjectId = '';

  getText(key: string): string {
    const texts = this.textService.getProjectTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  openProjectDetail(projectId: string) {
    this.selectedProjectId = projectId;
    this.showProjectDetail = true;
  }

  closeProjectDetail() {
    this.showProjectDetail = false;
    this.selectedProjectId = '';
  }
}