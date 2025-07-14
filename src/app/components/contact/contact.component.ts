import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  // Modal State
  showLegalNotice = false;
  showPrivacyPolicy = false;

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
      de: 'Ermutige Leute, dich zu kontaktieren und beschreibe, an welcher Rolle du interessiert bist.',
      en: 'Encourage people to contact you and describe what role you are interested in.'
    },
    contactDescription2: {
      de: 'Zeige Interesse daran, zu einem neuen Projekt beizutragen.',
      en: 'Show interest in contributing to a new project.'
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
      de: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
      en: 'I\'ve read the privacy policy and agree to the processing of my data.'
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
      de: 'Vielen Dank für deine Nachricht!',
      en: 'Thank you for your message!'
    },
    errorMessage: {
      de: 'Bitte fülle alle Felder aus.',
      en: 'Please fill in all fields.'
    },
    copyrightText: {
      de: '© Kay Dietrich 2025',
      en: '© Kay Dietrich 2025'
    },
    legalNotice: {
      de: 'Impressum',
      en: 'Legal Notice'
    }
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
      const formData = new FormData();
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('message', this.contactForm.value.message);

      this.http.post('./contact.php', formData, { responseType: 'text' })
        .subscribe({
          next: (res) => {
            console.log('Serverantwort:', res);
            alert(res === 'success' ? 'Nachricht gesendet!' : `Fehler: ${res}`);
          },
          error: (err) => {
            console.error('HTTP-Fehler:', err);
            alert('Serverfehler – bitte später noch einmal.');
          }
        });

    } else {
      this.contactForm.markAllAsTouched();
      alert("Bitte fülle alle Felder korrekt aus.");
    }
  }


  // Modal Functions
  openLegalNotice() {
    this.showLegalNotice = true;
    document.body.style.overflow = 'hidden';
  }

  openPrivacyPolicy() {
    this.showPrivacyPolicy = true;
    document.body.style.overflow = 'hidden';
  }

  closeModals() {
    this.showLegalNotice = false;
    this.showPrivacyPolicy = false;
    document.body.style.overflow = 'auto';
  }

  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get privacy() { return this.contactForm.get('privacy'); }
}
