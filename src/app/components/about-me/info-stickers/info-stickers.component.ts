import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../../services/text.service';

@Component({
  selector: 'app-info-stickers',
  imports: [CommonModule],
  templateUrl: './info-stickers.component.html',
  styleUrl: './info-stickers.component.scss'
})
export class InfoStickersComponent {
  @Input() currentLanguage = 'en';

  constructor(private textService: TextService) {}

  stickers = [
    { key: 'basedIn', background: 'yellow.webp', icon: 'location.webp', color: 'yellow' },
    { key: 'relocate', background: 'blue.webp', icon: 'relocation.webp', color: 'blue' },
    { key: 'remote', background: 'orange.webp', icon: 'remote.webp', color: 'orange' }
  ];

  getText(key: string): string {
    const texts = this.textService.getInfoStickerTexts();
    return (texts as any)[key][this.currentLanguage];
  }
}