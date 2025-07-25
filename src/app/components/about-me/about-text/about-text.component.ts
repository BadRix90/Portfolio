import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../../services/text.service';

@Component({
  selector: 'app-about-text',
  imports: [CommonModule],
  templateUrl: './about-text.component.html',
  styleUrl: './about-text.component.scss'
})
export class AboutTextComponent {
  @Input() currentLanguage = 'en';

  constructor(private textService: TextService) {}

  getText(key: string): string {
    const texts = this.textService.getAboutTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}