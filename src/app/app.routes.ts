import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalogue',
    loadComponent: () =>
      import('./pages/card-catalogue/card-catalogue.component').then(
        m => m.CardCatalogueComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./pages/card-detail/card-detail.component').then(
        m => m.CardDetailComponent
      ),
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
