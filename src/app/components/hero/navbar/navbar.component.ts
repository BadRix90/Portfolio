
import { Component, Input, Output, EventEmitter } from '@angular/core'; // HostListener entfernt!

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

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.languageChange.emit(newLanguage);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // CSS Klasse für Styling hinzufügen/entfernen
    const navbar = document.querySelector('.navbar');
    if (this.isMobileMenuOpen) {
      navbar?.classList.add('mobile-menu-open');
    } else {
      navbar?.classList.remove('mobile-menu-open');
    }

    // Event an Hero Component senden
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}