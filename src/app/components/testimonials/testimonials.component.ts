// ================================================================
// TESTIMONIALS CHANGE DETECTION FIX
// DATEI: src/app/components/testimonials/testimonials.component.ts
// ================================================================

import { Component, Input, OnInit } from '@angular/core';
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
export class TestimonialsComponent implements OnInit {
  @Input() currentLanguage = 'en';

  hoveredTestimonial: number | null = null;
  hoveredLinkedIn: number | null = null;
  
  // 🔥 FIX: Testimonials als Property statt Getter
  testimonials: Testimonial[] = [];

  constructor(private textService: TextService) { }

  ngOnInit() {
    // 🔥 FIX: Einmal laden, nicht bei jedem Change Detection
    this.testimonials = this.textService.getTestimonialTexts().testimonials;
  }

  // 🔥 TRACKBY FÜR NGFOR
  trackByTestimonial(index: number, testimonial: Testimonial): number {
    return testimonial.id;
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
    this.hoveredLinkedIn = null;
  }

  onLinkedInHover(testimonialId: number): void {
    this.hoveredLinkedIn = testimonialId;
  }

  onLinkedInLeave(): void {
    this.hoveredLinkedIn = null;
  }
  
  resetAllHoverStates(): void {
    this.hoveredTestimonial = null;
    this.hoveredLinkedIn = null;
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