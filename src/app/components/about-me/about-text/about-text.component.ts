import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-text',
  imports: [CommonModule],
  templateUrl: './about-text.component.html',
  styleUrl: './about-text.component.scss'
})
export class AboutTextComponent {
  currentLanguage = 'de';

  // Texte direkt hier - einfach und funktional
  texts = {
    whoIs: {
      de: 'WER IST KAY?',
      en: "WHO'S KAY?"
    },
    aboutMe: {
      de: 'Über mich',
      en: 'About me'
    },
    description: {
      de: 'Hey! Ich bin Kay. Schreibe hier einige Informationen über dich, die IT-bezogen sind. Warum bist du leidenschaftlich beim Programmieren? Was ist deine Inspirationsquelle zur Verbesserung deiner Programmierfähigkeiten? Lernst du aus jeder Herausforderung, während du nach der effizientesten oder elegantesten Lösung suchst?',
      en: "Hey there, I'm Kay! Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills? Do you learn from each challenge as you search for the most efficient or elegant solution?"
    },
    collaboration: {
      de: 'Lass uns zusammenarbeiten und gemeinsam etwas Bemerkenswertes schaffen!',
      en: "Let's collaborate and build something remarkable together!"
    },
    button: {
      de: 'Lass uns reden',
      en: "Let's talk"
    }
  };

  getText(key: string): string {
    return this.texts[key as keyof typeof this.texts][this.currentLanguage as 'de' | 'en'];
  }
}