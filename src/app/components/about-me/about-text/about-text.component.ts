import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-text',
  imports: [CommonModule],
  templateUrl: './about-text.component.html',
  styleUrl: './about-text.component.scss'
})
export class AboutTextComponent {
  @Input() currentLanguage = 'en';

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
      de: 'Hey! Ich bin Kay – ein passionierter Full-Stack-Developer, der 2022 seinen Weg über eine FAIE-Umschulung und die Bundeswehr in die faszinierende Welt der Softwareentwicklung gefunden hat. ',
      en: "Hey there! I'm Kay – a passionate Full-Stack Developer who discovered the fascinating world of software development in 2022 through a FAIE 'retraining program and the German Armed Forces."
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