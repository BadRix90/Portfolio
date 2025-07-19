import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @Input() currentLanguage: string = 'en';
  @Output() languageChange = new EventEmitter<string>();
  @Output() mobileMenuToggle = new EventEmitter<boolean>();

  isMobileMenuOpen = false;

  constructor(private elRef: ElementRef<HTMLElement>) { }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.languageChange.emit(newLanguage);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateNavbarClass();
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.updateNavbarClass();
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }

  private updateNavbarClass() {
    const navbar = this.elRef.nativeElement.querySelector('.navbar');
    if (this.isMobileMenuOpen) {
      navbar?.classList.add('mobile-menu-open');
    } else {
      navbar?.classList.remove('mobile-menu-open');
    }
  }
}