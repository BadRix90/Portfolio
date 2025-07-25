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
    { key: 'basedIn', background: 'yellow.png', icon: 'location.png', color: 'yellow' },
    { key: 'relocate', background: 'blue.png', icon: 'relocation.png', color: 'blue' },
    { key: 'remote', background: 'orange.png', icon: 'remote.png', color: 'orange' }
  ];

  getText(key: string): string {
    const texts = this.textService.getInfoStickerTexts();
    return (texts as any)[key][this.currentLanguage];
  }
}