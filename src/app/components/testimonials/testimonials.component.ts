import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
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

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Tobias Lange',
      position: 'Frontend Developer',
      text: 'Karl really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      linkedinUrl: 'https://linkedin.com/in/tobias-lange',
      backgroundImage: 'assets/img/imonials-left.png',
      zIndex: 3
    },
    {
      id: 2,
      name: 'Sarah Miller',
      position: 'Backend Developer', 
      text: 'It was a real pleasure to work with Karl. He knows how to motivate and encourage team members to deliver their best work possible, always adding valuable input to our brainstorm.',
      linkedinUrl: 'https://linkedin.com/in/sarah-miller',
      backgroundImage: 'assets/img/imonials-middle.png',
      zIndex: 2
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Team Colleague at DA',
      text: 'Karl is an outstanding team colleague at DA. His positive attitude and willingness to take on challenges made a significant contribution to our shared goals.',
      linkedinUrl: 'https://linkedin.com/in/michael-chen',
      backgroundImage: 'assets/img/imonials-right.png',
      zIndex: 1
    }
  ];

  hoveredTestimonial: number | null = null;

  onTestimonialHover(testimonialId: number): void {
    this.hoveredTestimonial = testimonialId;
  }

  onTestimonialLeave(): void {
    this.hoveredTestimonial = null;
  }

  getTestimonialZIndex(testimonial: Testimonial): number {
    if (this.hoveredTestimonial === testimonial.id) {
      return 10; // Hovered testimonial gets highest z-index
    }
    return testimonial.zIndex;
  }
}