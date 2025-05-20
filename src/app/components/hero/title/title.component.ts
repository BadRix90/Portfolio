import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  buttonText = 'Get in Touch';
  pText = 'Hello World';

  hoveredFrontend: boolean[] = new Array(8).fill(false);   // "Frontend" = 8 Buchstaben
  hoveredDeveloper: boolean[] = new Array(9).fill(false);  // "DEVELOPER" = 9 Buchstaben

  frontend = 'Frontend'.split('');
  developer = 'DEVELOPER'.split('');

  onHover(word: 'frontend' | 'developer', index: number) {
    if (word === 'frontend') this.hoveredFrontend[index] = true;
    else this.hoveredDeveloper[index] = true;
  }

  onLeave(word: 'frontend' | 'developer', index: number) {
    if (word === 'frontend') this.hoveredFrontend[index] = false;
    else this.hoveredDeveloper[index] = false;
  }

  toggleCase(char: string): string {
    if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    }
    return char;
  }

  onPHover() {
    this.pText = "I'm Kay Dietrich";
  }

  onPLeave() {
    this.pText = 'Hello World';
  }
}
