import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-stickers',
  imports: [CommonModule],
  templateUrl: './info-stickers.component.html',
  styleUrl: './info-stickers.component.scss'
})
export class InfoStickersComponent {

   @Input() currentLanguage = 'en';

  // Texte direkt hier - einfach und funktional
  texts = {
    basedIn: {
      de: 'Ansässig in Lüneburg',
      en: 'Based in Lüneburg'
    },
    relocate: {
      de: 'Umzug? NEIN!"',
      en: 'relocate? NO!'
    },
    remote: {
      de: 'Offen für Remote-Arbeit',
      en: 'Open to work remote'
    }
  };

  stickers = [
    {
      key: 'basedIn',
      background: 'yellow.png',
      icon: 'location.png',
      color: 'yellow'
    },
    {
      key: 'relocate', 
      background: 'blue.png',
      icon: 'relocation.png',
      color: 'blue'
    },
    {
      key: 'remote',
      background: 'orange.png',
      icon: 'remote.png', 
      color: 'orange'
    }
  ];

  getText(key: string): string {
    return this.texts[key as keyof typeof this.texts][this.currentLanguage as 'de' | 'en'];
  }
}