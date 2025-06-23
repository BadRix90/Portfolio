import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() currentLanguage = 'en';

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      
      // Here you would typically send the data to a service
      // Example: this.contactService.sendMessage(this.contactForm.value)
      
      // Show success message or redirect
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to show validation errors
      this.contactForm.markAllAsTouched();
      alert('Please fill in all required fields and accept the privacy policy.');
    }
  }

  // Getter for easier template access
  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  // Individual form control getters for error handling
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get privacy() { return this.contactForm.get('privacy'); }
}