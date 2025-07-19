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
  
  isMobileMenuOpen = false;

  onLanguageChange(language: string) {
    console.log('Hero received language change:', language);
    this.languageChange.emit(language);
    console.log('Hero emitted language change');
  }
  
  onMobileMenuToggle(isOpen: boolean) {
    this.isMobileMenuOpen = isOpen;
    
    const body = document.body;
    
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }
}