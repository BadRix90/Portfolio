import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}