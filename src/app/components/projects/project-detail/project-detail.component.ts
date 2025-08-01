import { TextService } from '../../../services/text.service';
import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project.interface';
import { ProjectService } from '../../../services/project.service';
import { NavbarComponent } from '../../hero/navbar/navbar.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NavbarComponent],
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

  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' | 'warning' | 'info' = 'info';

  constructor(private projectService: ProjectService, private textService: TextService, private router: Router, private route: ActivatedRoute) { }

  onLanguageChange(lang: string) {
    this.currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

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
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.projectId = id;
        this.loadProject();
      }
    });
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
    this.router.navigate(['/'], { fragment: 'projects' });
  }


  onNextProject() {
    if (this.nextProject) {
      this.router.navigate(['/project', this.nextProject.id]);
    } else {
      this.onGoBack();
    }
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

  navigateToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId });
  }

  openGithub() {
    if (this.project?.githubUrl) {
      window.open(this.project.githubUrl, '_blank');
    }
  }

  openLiveTest() {
    if (!this.project?.liveUrl) {
      return;
    }

    if (this.project.liveUrl === 'coming-soon') {
      this.showToastMessage('DABubble wird bald verfügbar sein! 🚧', 'warning');
      return;
    }

    window.open(this.project.liveUrl, '_blank');
  }

  getTechIcon(techName: string): string {
    return this.projectService.getTechIcon(techName);
  }

  getTechAlt(techName: string): string {
    return this.projectService.getTechAlt(techName);
  }

  showToastMessage(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.hideToast();
    }, 3000);
  }

  hideToast() {
    this.showToast = false;
  }

  isComingSoon(): boolean {
    return this.project?.liveUrl === 'coming-soon';
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
}
export const renderMode = 'client';