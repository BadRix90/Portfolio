import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';
  selectedLanguage = 'en';
  showMainContent = true;

  constructor(private router: Router) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
        this.selectedLanguage = savedLanguage;
      }
    }
    this.checkRoute();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkRoute();
    });
  }

  private checkRoute() {
    const url = this.router.url;
    console.log('Current URL:', url);
    this.showMainContent = url === '/' || url === '' ||
      (!url.includes('legal-notice') && !url.includes('privacy-policy'));

    console.log('showMainContent:', this.showMainContent);
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = language;
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedLanguage', language);
    }
  }
}