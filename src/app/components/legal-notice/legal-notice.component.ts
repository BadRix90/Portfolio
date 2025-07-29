import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TextService } from '../../services/text.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  currentLanguage = 'en';

  constructor(
    private router: Router,
    private textService: TextService,
    private route: ActivatedRoute
  ) {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || localStorage.getItem('language') || 'en';
  }

  getText(key: string): string {
    const texts = this.textService.getLegalTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  goBack() {
    this.router.navigate(['/']);
  }
}