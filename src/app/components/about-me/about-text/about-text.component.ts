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
      de: 'Hey! Ich bin Kay – ein passionierter Full-Stack-Developer, der 2022 seinen Weg über eine FAIE-Umschulung und die Bundeswehr in die faszinierende Welt der Softwareentwicklung gefunden hat. Was mich täglich antreibt? Die pure Magie, aus wenigen Zeilen Code echte digitale Lösungen zu erschaffen! Aktuell perfektioniere ich meine Skills im Full-Stack-Bereich, wobei mein Fokus auf modernen Frontend-Technologies wie Angular, TypeScript und zeitgemäßen CSS-Frameworks liegt. Als pragmatischer Problem-Solver kombiniere ich strategisches Denken mit hands-on Mentalität – KI und Prompt Engineering sind dabei meine modernen Werkzeuge für effiziente Entwicklung. In Teams übernehme ich gerne die technische Führung bei komplexen Projekten, schätze aber ebenso die kreativen Momente beim fokussierten Solo-Coding.',
      en: "Hey there! I'm Kay – a passionate Full-Stack Developer who discovered the fascinating world of software development in 2022 through a FAIE retraining program and the German Armed Forces. What drives me daily? The pure magic of creating real digital solutions from just a few lines of code! Currently perfecting my skills in Full-Stack development, with my focus on modern frontend technologies like Angular, TypeScript, and contemporary CSS frameworks. As a pragmatic problem solver, I combine strategic thinking with a hands-on mentality – AI and prompt engineering are my modern tools for efficient development. In teams, I enjoy taking technical leadership on complex projects, but equally value the creative moments of focused solo coding."
    },
    collaboration: {
      de: 'Lass uns zusammenarbeiten und gemeinsam innovative digitale Lösungen entwickeln, die einen echten Unterschied machen!',
      en: "Let's collaborate and develop innovative digital solutions together that make a real difference!"
    },
    button: {
      de: 'Lass uns reden',
      en: "Let's talk"
    }
  };

  getText(key: string): string {
    console.log('Getting text for key:', key, 'in language:', this.currentLanguage); // Debug
    return this.texts[key as keyof typeof this.texts][this.currentLanguage as 'de' | 'en'];
  }
}