import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './auth/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'cart',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
