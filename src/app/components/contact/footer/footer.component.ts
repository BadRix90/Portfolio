import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TextService } from '../../../services/text.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']  // <-- Korrektur: styleUrls statt styleUrl
})
export class FooterComponent {

  socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/BadRix90',
      icon: 'assets/img/github.webp',
      isExternal: true
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kaydietrich',
      icon: 'assets/img/linkedin.webp',
      isExternal: true
    },
    {
      name: 'Email',
      url: 'mailto:kay@kaydietrich.com',
      icon: 'assets/img/mail.webp',
      isExternal: false
    }
  ];

  hoveredIcon: string | null = null;
  socialState: string = 'hidden';  // <-- wird in getSocialIconState verwendet
  currentLanguage: string = 'de';  // <-- wird in getText() verwendet

  constructor(
    public textService: TextService,
    private router: Router
  ) { }

  getText(key: string): string {
    const texts = this.textService.getContactTexts();
    const textObj = texts[key as keyof typeof texts];
    return textObj ? textObj[this.currentLanguage as 'de' | 'en'] : '';
  }

  openLegalNotice() {
    this.router.navigate(['/legal-notice']);
  }

  openPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  scrollToHero(): void {
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      heroElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  openSocialLink(url: string, isExternal: boolean): void {
    if (isExternal) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  }

  onSocialHover(iconName: string): void {
    if (this.socialState !== 'hidden') return;
    this.hoveredIcon = iconName;
    this.startSocialAnimation();
  }

  onSocialLeave(): void {
    if (this.socialState === 'hidden') {
      this.hoveredIcon = null;
    }
  }

  getSocialIconState(iconName: string): string {
    return this.hoveredIcon === iconName ? this.socialState : 'hidden';
  }

  private startSocialAnimation(): void {
    this.socialState = 'hovering';
    setTimeout(() => this.startRollingAnimation(), 50);
  }

  private startRollingAnimation(): void {
    this.socialState = 'rolling';
    setTimeout(() => this.resetSocialState(), 1200);
  }

  private resetSocialState(): void {
    this.socialState = 'hidden';
    this.hoveredIcon = null;
  }
}
