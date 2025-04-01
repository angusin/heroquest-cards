import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
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
    path: 'about',
    loadComponent: () =>
      import('./pages/info-about/info-about.component').then(
        m => m.InfoAboutComponent
      ),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/info-privacy/info-privacy.component').then(
        m => m.InfoPrivacyComponent
      ),
  },
  {
    path: 'tos',
    loadComponent: () =>
      import('./pages/info-tos/info-tos.component').then(
        m => m.InfoTosComponent
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/info-pricing/pricing.component').then(
        m => m.PricingComponent
      ),
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: '',
  },
];
