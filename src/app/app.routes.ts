import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    children: [] 
  },
  { 
    path: 'legal-notice', 
    loadComponent: () => import('./components/legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent)
  },
  { 
    path: 'privacy-policy', 
    loadComponent: () => import('./components/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  }
];