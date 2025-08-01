import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent),
    children: []
  },
  {
    path: 'project/:id',
    loadComponent: () => import('./components/projects/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
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
