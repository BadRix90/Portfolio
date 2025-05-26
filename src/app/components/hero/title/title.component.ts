// title.component.ts
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
  frameText = 'Kay :)';
  handState: 'hidden' | 'waving' | 'rolling' = 'hidden';

  hoveredFrontend: boolean[] = new Array(8).fill(false);
  hoveredDeveloper: boolean[] = new Array(9).fill(false);

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
    // Nur starten wenn keine Animation läuft
    if (this.handState !== 'hidden') {
      return; // Animation läuft bereits, nichts tun
    }
    
    this.pText = "I'm Kay Dietrich";
    this.handState = 'waving';
    
    // Nach 200ms: von waving zu rolling wechseln
    setTimeout(() => {
      this.handState = 'rolling';
      // Nach der Roll-Animation zurück zu hidden
      setTimeout(() => {
        this.handState = 'hidden';
        // Text gleichzeitig mit der Hand zurücksetzen
        this.pText = 'Hello World';
      }, 1500);
    }, 100);
  }

  onPLeave() {
    // Text nur sofort zurücksetzen wenn keine Animation läuft
    if (this.handState === 'hidden') {
      this.pText = 'Hello World';
    }
    // Sonst bleibt der Text bis die Animation fertig ist
  }

  onFrameHover() {
    this.frameText = 'Kay :D';
  }

  onFrameLeave() {
    this.frameText = 'Kay :)';
  }
}