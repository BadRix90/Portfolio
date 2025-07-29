import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TextService } from '../../services/text.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
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