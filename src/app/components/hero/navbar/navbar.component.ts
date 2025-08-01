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

  // TextService injizieren
  constructor(private textService: TextService, private router: Router) { }

  // Neue Methode für Navigation-Texte
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

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }
  navigateToSection(sectionId: string): void {
    this.closeMobileMenu();
    this.router.navigate(['/'], { fragment: sectionId });
  }
}