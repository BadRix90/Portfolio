import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})


export class TitleComponent implements OnInit {
  buttonText = 'Get in Touch';
  pText = 'Hello World';
  frameText = 'Kay :)';
  handState: 'hidden' | 'waving' | 'rolling' = 'hidden';
  isMobileLayout = false;
  @Input() currentLanguage = 'en';

  hoveredFrontend: boolean[] = new Array(8).fill(false);
  hoveredDeveloper: boolean[] = new Array(9).fill(false);

  frontend = 'Frontend'.split('');
  developer = 'DEVELOPER'.split('');


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.checkLayout();
      window.addEventListener('resize', () => this.checkLayout());
    }
  }


  checkLayout(): void {
    if (typeof window !== 'undefined') {
      this.isMobileLayout = window.innerWidth <= 1130;
    }
  }


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
    if (this.handState !== 'hidden') {
      return;
    }

    this.pText = "I'm Kay Dietrich";
    this.handState = 'waving';

    setTimeout(() => {
      this.handState = 'rolling';
      setTimeout(() => {
        this.handState = 'hidden';
        this.pText = 'Hello World';
      }, 1500);
    }, 100);
  }


  onPLeave() {
    if (this.handState === 'hidden') {
      this.pText = 'Hello World';
    }
  }


  onFrameHover() {
    this.frameText = 'Kay :D';
  }


  onFrameLeave() {
    this.frameText = 'Kay :)';
  }
}