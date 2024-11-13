import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'ecom', loadChildren: () => import('./ecommerce/ecommerce.module').then(m=>m.EcommerceModule) },
    // { path: 'auth', loadChildren: () => import('./auth-gateway/auth-gateway.module').then(m =>m.AuthGatewayModule )},
    // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];
