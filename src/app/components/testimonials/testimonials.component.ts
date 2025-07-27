import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../services/text.service';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: {
    de: string;
    en: string;
  };
  linkedinUrl: string;
  backgroundImage: string;
  zIndex: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input() currentLanguage = 'en';

  hoveredTestimonial: number | null = null;

  constructor(private textService: TextService) {}

  get testimonials(): Testimonial[] {
    return this.textService.getTestimonialTexts().testimonials;
  }

  getText(key: string): string {
    const texts = this.textService.getTestimonialTexts();
    return (texts as any)[key][this.currentLanguage];
  }

  getTestimonialText(testimonial: Testimonial): string {
    return testimonial.text[this.currentLanguage as 'de' | 'en'];
  }

  onTestimonialHover(testimonialId: number): void {
    this.hoveredTestimonial = testimonialId;
  }

  onTestimonialLeave(): void {
    this.hoveredTestimonial = null;
  }

  getTestimonialZIndex(testimonial: Testimonial): number {
    if (this.hoveredTestimonial === testimonial.id) {
      return 10;
    }
    return testimonial.zIndex;
  }

  openLinkedInProfile(url: string): void {
  const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
  window.open(formattedUrl, '_blank', 'noopener,noreferrer');
}
}