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

onLanguageChange(language: string) {
    console.log('Hero received language change:', language); // Debug
    this.languageChange.emit(language);
    console.log('Hero emitted language change'); // Debug
  }
}