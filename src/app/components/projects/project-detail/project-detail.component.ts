// src/app/components/project-detail/project-detail.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project.interface';
import { ProjectService } from '../../../services/project.service';
import { NavbarComponent } from '../../hero/navbar/navbar.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  @Input() currentLanguage = 'en';
  @Input() projectId: string = '';
  @Output() goBack = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  project: Project | null = null;
  nextProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProject();
  }

  ngOnChanges() {
    this.loadProject();
  }

  loadProject() {
    if (this.projectId) {
      this.project = this.projectService.getProject(this.projectId);
      this.nextProject = this.projectService.getNextProject(this.projectId);
    }
  }

  onGoBack() {
    this.goBack.emit();
  }

  onNextProject() {
    if (this.nextProject) {
      this.projectId = this.nextProject.id;
      this.loadProject();
    }
  }

  onLanguageChange(language: string) {
    this.languageChange.emit(language);
  }

  openGithub() {
    if (this.project?.githubUrl) {
      window.open(this.project.githubUrl, '_blank');
    }
  }

  openLiveTest() {
    if (this.project?.liveUrl) {
      window.open(this.project.liveUrl, '_blank');
    }
  }
}