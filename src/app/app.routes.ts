import { Routes } from '@angular/router'; // Certifique-se de importar Routes!

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  { path: 'menu', loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
