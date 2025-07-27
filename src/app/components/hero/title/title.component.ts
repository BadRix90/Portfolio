import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../../services/text.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
  frameText = 'Kay :)';
  handState: 'hidden' | 'waving' | 'rolling' = 'hidden';
  isMobileLayout = false;
  currentPText = '';
  @Input() currentLanguage = 'en';

  hoveredFrontend: boolean[] = new Array(8).fill(false);
  hoveredDeveloper: boolean[] = new Array(9).fill(false);

  frontend = 'Frontend'.split('');
  developer = 'DEVELOPER'.split('');

  constructor(private textService: TextService) { }

  get heroTexts() {
    return this.textService.getHeroTexts();
  }

  get buttonText() {
    return this.heroTexts.buttonText[this.currentLanguage as 'de' | 'en'];
  }

  get pText() {
    return this.currentPText || this.heroTexts.helloText[this.currentLanguage as 'de' | 'en'];
  }

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

  onPHover(): void {
    if (this.handState !== 'hidden') return;
    this.updateTextToName();
    this.startWaveAnimation();
  }

  private updateTextToName(): void {
    this.currentPText = this.currentLanguage === 'de' ? 'Ich bin Kay' : "I'm Kay";
  }

  private startWaveAnimation(): void {
    this.handState = 'waving';
    setTimeout(() => this.startRollingAnimation(), 100);
  }

  private startRollingAnimation(): void {
    this.handState = 'rolling';
    setTimeout(() => this.resetToOriginalState(), 1500);
  }

  private resetToOriginalState(): void {
    this.handState = 'hidden';
    this.currentPText = '';
  }

  onPLeave() {
    if (this.handState === 'hidden') {
      this.currentPText = '';
    }
  }

  onFrameHover() {
    this.frameText = 'Kay :D';
  }

  onFrameLeave() {
    this.frameText = 'Kay :)';
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}