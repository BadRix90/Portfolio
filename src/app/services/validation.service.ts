import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  validateEmail(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (!email) return null;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? null : { invalidEmail: true };
  }

  validateMinLength(minLength: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value?.length >= minLength ? null : { minLength: true };
    };
  }

getErrorMessage(fieldName: string, errors: ValidationErrors, language: string): string {
  const messages = this.getErrorMessages(language);
  
  if (!messages) return '';
  
  const fieldMessages = (messages as any)[fieldName];
  if (!fieldMessages) return '';
  
  if (errors['required']) return fieldMessages.required;
  if (errors['minLength']) return fieldMessages.minLength;
  if (errors['invalidEmail']) return fieldMessages.invalidEmail;
  
  return '';
}

private getErrorMessages(language: string): any {
  const allMessages = {
    de: {
      name: { required: 'Name ist erforderlich', minLength: 'Name zu kurz' },
      email: { required: 'E-Mail ist erforderlich', invalidEmail: 'Ungültige E-Mail' },
      message: { required: 'Nachricht ist erforderlich', minLength: 'Nachricht zu kurz' }
    },
    en: {
      name: { required: 'Name is required', minLength: 'Name too short' },
      email: { required: 'Email is required', invalidEmail: 'Invalid email' },
      message: { required: 'Message is required', minLength: 'Message too short' }
    }
  };
  
  return (allMessages as any)[language];
}
}