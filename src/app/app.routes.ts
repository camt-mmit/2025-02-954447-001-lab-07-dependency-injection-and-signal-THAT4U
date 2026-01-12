import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full',
  },

  { path: 'example', loadChildren: () => import('./example/routes') },

  {
    path: '',
    redirectTo: 'assignment',
    pathMatch: 'full',
  },

  { path: 'assignment', loadChildren: () => import('./assignment/routes') },
];
