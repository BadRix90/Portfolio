// src/app/components/projects/project-detail/project-detail.component.ts

import { TextService } from '../../../services/text.service';
import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project.interface';
import { ProjectService } from '../../../services/project.service';
import { NavbarComponent } from '../../hero/navbar/navbar.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
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

  constructor(
    private projectService: ProjectService, 
    private textService: TextService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadLanguageFromStorage();
    this.subscribeToRoute();
  }

  ngAfterViewInit(): void {
    this.setDynamicUnderlineWidth();
  }

  ngOnChanges(): void {
    this.loadProject();
    setTimeout(() => this.setDynamicUnderlineWidth(), 0);
  }

  private loadLanguageFromStorage(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
        this.currentLanguage = savedLanguage;
      }
    }
  }

  private subscribeToRoute(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.projectId = id;
        this.loadProject();
      }
    });
  }

  private loadProject(): void {
    if (this.projectId) {
      this.project = this.projectService.getProject(this.projectId);
      this.nextProject = this.projectService.getNextProject(this.projectId);
    }
  }

  private setDynamicUnderlineWidth(): void {
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

  onLanguageChange(lang: string): void {
    this.currentLanguage = lang;
    this.saveLanguageToStorage(lang);
  }

  private saveLanguageToStorage(lang: string): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
    }
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

  onGoBack(): void {
    this.router.navigate(['/'], { fragment: 'projects' });
  }

  onNextProject(): void {
    if (this.nextProject) {
      this.router.navigate(['/project', this.nextProject.id]);
    } else {
      this.onGoBack();
    }
  }

  onMobileMenuToggle(isOpen: boolean): void {
    this.isMobileMenuOpen = isOpen;
    this.toggleBodyScroll(isOpen);
    this.toggleMenuClass(isOpen);
  }

  private toggleBodyScroll(isOpen: boolean): void {
    const body = document.body;
    body.style.overflow = isOpen ? 'hidden' : 'auto';
  }

  private toggleMenuClass(isOpen: boolean): void {
    const projectWrapper = document.querySelector('.project-detail-wrapper');
    if (isOpen) {
      projectWrapper?.classList.add('menu-open');
    } else {
      projectWrapper?.classList.remove('menu-open');
    }
  }

  navigateToSection(sectionId: string): void {
    this.router.navigate(['/'], { fragment: sectionId });
  }

  openGithub(): void {
    if (this.project?.githubUrl) {
      window.open(this.project.githubUrl, '_blank');
    }
  }

  openLiveTest(): void {
    if (!this.project?.liveUrl) return;
    
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

  showToastMessage(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast(): void {
    this.showToast = false;
  }

  isComingSoon(): boolean {
    return this.project?.liveUrl === 'coming-soon';
  }
}

export const renderMode = 'client';