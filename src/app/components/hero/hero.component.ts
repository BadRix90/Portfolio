import { Component } from '@angular/core';
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
 
}
