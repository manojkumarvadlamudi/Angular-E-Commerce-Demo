import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./product-list/product-list.component')
        .then(m => m.ProductListComponent)
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./checkout/checkout.component')
        .then(m => m.CheckoutComponent)
  }
];
