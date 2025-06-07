import { Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

// In navbar.component.ts
export class NavbarComponent {
  @Input() currentLanguage: string = 'en';
  @Output() languageChange = new EventEmitter<string>();
  
  isMobileMenuOpen = false;

  @HostListener('click', ['$event'])
  onNavbarClick(event: Event) {
    // Nur bei Mobile (unter 870px) den Menu Toggle handhaben
    if (window.innerWidth <= 870) {
      this.toggleMobileMenu();
    }
  }

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
  }
}