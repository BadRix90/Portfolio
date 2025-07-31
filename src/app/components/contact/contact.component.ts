import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FooterComponent } from '../../components/contact/footer/footer.component';
import { TextService } from '../../services/text.service';
import { ValidationService } from '../../services/validation.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() currentLanguage = 'en';
  contactForm: FormGroup;

  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' | 'warning' | 'info' = 'info';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private textService: TextService,
    private validationService: ValidationService,
    private router: Router
  ) {
    this.contactForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, this.validationService.validateMinLength(2)]],
      email: ['', [Validators.required, this.validationService.validateEmail]],
      message: ['', [Validators.required, this.validationService.validateMinLength(10)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  openPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  onFieldBlur(fieldName: string): void {
    const field = this.contactForm.get(fieldName);
    if (field) field.markAsTouched();
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['minLength']) return `${fieldName} is too short`;
      if (field.errors['invalidEmail']) return 'Invalid email format';
    }
    return '';
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendFormData();
    } else {
      this.markAllFieldsAsTouched();
      this.showValidationError();
    }
  }

  private sendFormData(): void {
    const jsonData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.http.post('https://kaydietrich.com/sendMail.php', jsonData, {
      responseType: 'text',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .subscribe({
        next: (res) => {
          this.showToastMessage(this.getText('successMessage'), 'success');
          this.contactForm.reset();
        },
        error: (err) => {
          this.showToastMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        }
      });
  }

  getText(key: string): string {
    const texts = this.textService.getContactTexts();
    const textObj = texts[key as keyof typeof texts];
    return textObj ? textObj[this.currentLanguage as 'de' | 'en'] : '';
  }

  private markAllFieldsAsTouched(): void {
    this.contactForm.markAllAsTouched();
  }

  private showValidationError(): void {
    this.showToastMessage(this.getText('errorMessage'), 'warning');
  }



  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get privacy() { return this.contactForm.get('privacy'); }

  socialState: 'hidden' | 'hovering' | 'rolling' = 'hidden';
  hoveredIcon: string | null = null;

  showToastMessage(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.hideToast();
    }, 4000);
  }

  hideToast() {
    this.showToast = false;
  }

  private startSocialAnimation(): void {
    this.socialState = 'hovering';
    setTimeout(() => this.startRollingAnimation(), 50);
  }

  private startRollingAnimation(): void {
    this.socialState = 'rolling';
    setTimeout(() => this.resetSocialState(), 1200);
  }

  private resetSocialState(): void {
    this.socialState = 'hidden';
    this.hoveredIcon = null;
  }






}