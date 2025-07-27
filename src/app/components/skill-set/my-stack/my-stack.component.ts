import { Component, Input } from '@angular/core';
import { TextService } from '../../../services/text.service';

@Component({
  selector: 'app-my-stack',
  standalone: true,
  imports: [],
  templateUrl: './my-stack.component.html',
  styleUrl: './my-stack.component.scss'
})
export class MyStackComponent {
  @Input() currentLanguage = 'en';

  constructor(private textService: TextService) {}

  get skillTexts() {
    return this.textService.getSkillTexts();
  }

  get stackText() {
    return this.skillTexts.stackLabel[this.currentLanguage as 'de' | 'en'];
  }

  get descriptionText() {
    return this.skillTexts.stackDescription[this.currentLanguage as 'de' | 'en'];
  }
}