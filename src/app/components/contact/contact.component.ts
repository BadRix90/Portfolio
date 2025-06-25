// src/app/components/contact/contact.component.ts
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

  texts = {
    contactLabel: {
      de: 'KONTAKTIERE MICH',
      en: 'CONTACT ME'
    },
    contactTitle: {
      de: 'Bereit zusammenzuarbeiten?',
      en: 'Ready to work together?'
    },
    contactDescription1: {
      de: 'Ermutige Leute, dich zu kontaktieren und beschreibe, an welcher Rolle du interessiert bist. Zeige Vertrauen in deine Fähigkeit, durch dein Fachwissen und deine Begeisterung einen sinnvollen Beitrag zu einem Team zu leisten.',
      en: 'Encourage people to contact you and describe what role you are interested in. Express confidence in your ability to make a meaningful contribution to a team through your expertise and enthusiasm for improving your skills.'
    },
    contactDescription2: {
      de: 'Zeige Interesse daran, zu einem neuen Projekt beizutragen und hebe dabei den Wert und die Fähigkeiten hervor, die du einbringen kannst.',
      en: 'Show interest in contributing to a new project, while highlighting the value and skills you can bring to the table.'
    },
    nameLabel: {
      de: 'Wie ist dein Name?',
      en: 'What\'s your name?'
    },
    namePlaceholder: {
      de: 'Dein Name steht hier',
      en: 'Your name goes here'
    },
    emailLabel: {
      de: 'Wie ist deine E-Mail?',
      en: 'What\'s your email?'
    },
    emailPlaceholder: {
      de: 'deineemail@email.com',
      en: 'youremail@email.com'
    },
    messageLabel: {
      de: 'Wie kann ich dir helfen?',
      en: 'How can I help you?'
    },
    messagePlaceholder: {
      de: 'Hallo Kay, ich bin interessiert an...',
      en: 'Hello Kay, I am interested in...'
    },
    privacyText: {
      de: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      en: 'I\'ve read the privacy policy and agree to the processing of my data as outlined.'
    },
    privacyLink: {
      de: 'Datenschutzerklärung',
      en: 'privacy policy'
    },
    submitButton: {
      de: 'Senden',
      en: 'Send'
    },
    successMessage: {
      de: 'Vielen Dank für deine Nachricht! Ich melde mich bald bei dir.',
      en: 'Thank you for your message! I will get back to you soon.'
    },
    errorMessage: {
      de: 'Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzerklärung.',
      en: 'Please fill in all required fields and accept the privacy policy.'
    },
    copyrightText: {
      de: '© Kay Dietrich 2025',
      en: '© Kay Dietrich 2025'
    },
    legalNotice: {
      de: 'Legal Notice',
      en: 'Legal Notice'
    }
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  getText(key: string): string {
    return this.texts[key as keyof typeof this.texts][this.currentLanguage as 'de' | 'en'];
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert(this.getText('successMessage'));
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
      alert(this.getText('errorMessage'));
    }
  }

  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get privacy() { return this.contactForm.get('privacy'); }
}