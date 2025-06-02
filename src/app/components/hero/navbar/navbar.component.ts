import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() currentLanguage = 'en';
  @Output() languageChange = new EventEmitter<string>();

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    console.log('🔵 Navbar: Switching from', this.currentLanguage, 'to', newLanguage);
    
    // Only emit the event, don't update local state
    this.languageChange.emit(newLanguage);
    
    console.log('🔵 Navbar: Event emitted with value:', newLanguage);
  }
}