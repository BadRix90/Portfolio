import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TextService } from '../../services/text.service';
import { ScrollService } from '../../services/scroll.service';
import { NavbarComponent } from '../hero/navbar/navbar.component';
import { FooterComponent } from '../contact/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {
  currentLanguage = 'en';

  constructor(
    private router: Router,
    private textService: TextService,
    private scrollService: ScrollService
  ) {
    this.loadLanguage();
    this.scrollService.scrollToTop();
  }

  ngOnInit(): void {
    this.scrollService.scrollToTop();
  }

  private loadLanguage(): void {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 
                          localStorage.getItem('language') || 'en';
  }

  private scrollToPageTop(): void {
    this.scrollService.scrollToTop();
  }

  getText(key: string): string {
    const texts = this.textService.getLegalTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  goBack(): void {
    this.router.navigate(['/']);
    setTimeout(() => {
      this.scrollService.scrollToContact();
    });
  }
}