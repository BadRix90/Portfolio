import { TextService } from '../../../services/text.service';
import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
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
export class ProjectDetailComponent implements AfterViewInit {
  @Input() currentLanguage = 'en';
  @Input() projectId: string = '';
  @Output() goBack = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  project: Project | null = null;
  nextProject: Project | null = null;
  isMobileMenuOpen = false;

  constructor(private projectService: ProjectService, private textService: TextService) { }

  getText(key: string): string {
    const texts = this.textService.getProjectDetailTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  getProjectDescription(): string {
  if (!this.project) return '';
  return (this.project.description as any)[this.currentLanguage] || '';
}

getProjectImplementationDetails(): string {
  if (!this.project) return '';
  return (this.project.implementationDetails as any)[this.currentLanguage] || '';
}

  ngAfterViewInit() {
    this.setDynamicUnderlineWidth();
  }

  ngOnInit() {
    this.loadProject();
  }

  ngOnChanges() {
    this.loadProject();
    setTimeout(() => this.setDynamicUnderlineWidth(), 0);
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
      setTimeout(() => this.setDynamicUnderlineWidth(), 0);
    } else {
      this.onGoBack();
    }
  }

  onLanguageChange(language: string) {
    this.languageChange.emit(language);
  }

  onMobileMenuToggle(isOpen: boolean) {
    this.isMobileMenuOpen = isOpen;

    const projectWrapper = document.querySelector('.project-detail-wrapper');
    const body = document.body;

    if (isOpen) {
      projectWrapper?.classList.add('menu-open');
      body.style.overflow = 'hidden';
    } else {
      projectWrapper?.classList.remove('menu-open');
      body.style.overflow = 'auto';
    }
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

  getTechIcon(techName: string): string {
    return this.projectService.getTechIcon(techName);
  }

  getTechAlt(techName: string): string {
    return this.projectService.getTechAlt(techName);
  }

  private setDynamicUnderlineWidth() {
    const titleElement = document.querySelector('.project-main-title');
    const underlineElement = document.querySelector('.animated-underline');

    if (titleElement && underlineElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const computedStyle = window.getComputedStyle(titleElement);

      if (context) {
        context.font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
        const textWidth = context.measureText(titleElement.textContent || '').width;
        (underlineElement as HTMLElement).style.width = `${textWidth}px`;
      }
    }
  }

  get nextButtonText(): string {
    return this.nextProject ? 'Next Project' : 'Go Back';
  }

  get nextButtonIcon(): string {
    return this.nextProject ? 'arrow_forward.png' : 'arrow_back.png';
  }
}