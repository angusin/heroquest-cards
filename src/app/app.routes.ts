import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalogue',
    loadComponent: () => import('./pages/card-catalogue/card-catalogue.page'),
  },
  {
    path: 'catalogue/detail/:cardId',
    loadComponent: () => import('./pages/card-detail/card-detail.page'),
  },
  {
    path: 'auth/:formType',
    loadComponent: () => import('./pages/auth/auth.page'),
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: 'catalogue',
  },
];
