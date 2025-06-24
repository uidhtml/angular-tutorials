import { Routes } from '@angular/router';
import { ResourceApiComponent } from './resource-api/resource-api.component';

export const routes: Routes = [
  { path: 'resourceApi', component: ResourceApiComponent },
  { path: '', redirectTo: '/resourceApi', pathMatch: 'full' },
];
