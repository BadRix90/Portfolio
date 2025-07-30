import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }

  scrollToContact(): void {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}