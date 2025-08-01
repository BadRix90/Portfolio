import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../contact/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  selectedLanguage = 'en';
  showMainContent = true;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
        this.selectedLanguage = savedLanguage;
      }
    }
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = language;
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedLanguage', language);
    }
  }
}
