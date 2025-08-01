import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../../services/text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() currentLanguage: string = 'en';
  @Input() slideDirection: 'horizontal' | 'vertical' = 'vertical';
  @Output() languageChange = new EventEmitter<string>();
  @Output() mobileMenuToggle = new EventEmitter<boolean>();

  isMobileMenuOpen = false;


  constructor(private textService: TextService, private router: Router) { }

  getNavigationText(key: string): string {
    const texts = this.textService.getNavigationTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.languageChange.emit(newLanguage);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }

  onNavigationClick(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMobileMenu();

    if (this.router.url !== '/') {
      this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
        // Nach Navigation zurück zur Hauptseite → scrollen
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }

  navigateToSection(sectionId: string) {
    this.closeMobileMenu();
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}