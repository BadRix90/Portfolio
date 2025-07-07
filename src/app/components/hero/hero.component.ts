// hero.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SocialHeroComponent } from './social-hero/social-hero.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, SocialHeroComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {
  @Input() currentLanguage = 'en';
  @Output() languageChange = new EventEmitter<string>();
  
  isMobileMenuOpen = false; // ← NEU HINZUGEFÜGT!

  onLanguageChange(language: string) {
    console.log('Hero received language change:', language);
    this.languageChange.emit(language);
    console.log('Hero emitted language change');
  }
  
  // ← NEU: Mobile Menu State empfangen
  onMobileMenuToggle(isOpen: boolean) {
    this.isMobileMenuOpen = isOpen;
    
    // CSS Klasse für Hero Content Hiding
    const heroSection = document.querySelector('.hero');
    if (isOpen) {
      heroSection?.classList.add('menu-open');
    } else {
      heroSection?.classList.remove('menu-open');
    }
  }
}