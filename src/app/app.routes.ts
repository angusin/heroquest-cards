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
    path: 'catalogue/detail/:id',
    loadComponent: () =>
      import('./pages/card-detail/card-detail.component').then(
        m => m.CardDetailComponent
      ),
  },
  {
    path: 'builder',
    loadComponent: () =>
      import('./pages/card-builder/card-builder.component').then(
        m => m.CardBuilderComponent
      ),
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: 'catalogue',
  },
];
