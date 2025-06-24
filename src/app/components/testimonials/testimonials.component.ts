// src/app/components/testimonials/testimonials.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  textDe: string; // Deutsche Übersetzung hinzufügen
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

  texts = {
    headerLabel: {
      de: 'IN IHREN WORTEN:',
      en: 'IN THEIR WORDS:'
    },
    testimonialsTitle: {
      de: 'Kollegen-Meinungen',
      en: 'Colleagues\' Thoughts'
    },
    profileText: {
      de: 'Profil',
      en: 'Profile'
    }
  };

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Tobias Lange',
      position: 'Frontend Developer',
      text: 'Karl really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      textDe: 'Karl hat das Team wirklich mit seiner großartigen Organisation und klaren Kommunikation zusammengehalten. Ohne sein Engagement wären wir nicht so weit gekommen.',
      linkedinUrl: 'https://linkedin.com/in/tobias-lange',
      backgroundImage: 'assets/img/imonials-left.png',
      zIndex: 3
    },
    {
      id: 2,
      name: 'Sarah Miller',
      position: 'Backend Developer', 
      text: 'It was a real pleasure to work with Karl. He knows how to motivate and encourage team members to deliver their best work possible, always adding valuable input to our brainstorm.',
      textDe: 'Es war ein wahres Vergnügen, mit Karl zu arbeiten. Er weiß, wie man Teammitglieder motiviert und ermutigt, ihre beste Arbeit zu leisten, und trägt immer wertvollen Input zu unserem Brainstorming bei.',
      linkedinUrl: 'https://linkedin.com/in/sarah-miller',
      backgroundImage: 'assets/img/imonials-middle.png',
      zIndex: 2
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Team Colleague at DA',
      text: 'Karl is an outstanding team colleague at DA. His positive attitude and willingness to take on challenges made a significant contribution to our shared goals.',
      textDe: 'Karl ist ein herausragender Teamkollege bei DA. Seine positive Einstellung und Bereitschaft, Herausforderungen anzunehmen, trugen wesentlich zu unseren gemeinsamen Zielen bei.',
      linkedinUrl: 'https://linkedin.com/in/michael-chen',
      backgroundImage: 'assets/img/imonials-right.png',
      zIndex: 1
    }
  ];

  hoveredTestimonial: number | null = null;

  getText(key: string): string {
    return this.texts[key as keyof typeof this.texts][this.currentLanguage as 'de' | 'en'];
  }

  getTestimonialText(testimonial: Testimonial): string {
    return this.currentLanguage === 'de' ? testimonial.textDe : testimonial.text;
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
}