import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-stack',
  standalone: true,
  imports: [],
  templateUrl: './my-stack.component.html',
  styleUrl: './my-stack.component.scss'
})
export class MyStackComponent {
  @Input() currentLanguage = 'en';

  get stackText() {
    return this.currentLanguage === 'de' ? 'MEIN STACK' : 'MY STACK';
  }

  get descriptionText() {
    return this.currentLanguage === 'de' 
      ? 'Eine kurze Einführung in deine Fähigkeiten. Hebe deine Erfahrung mit verschiedenen Frontend-Technologien hervor und betone deine Offenheit für das Lernen und die Anpassung an neue Technologien.'
      : 'A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies.';
  }
}