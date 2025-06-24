import { Routes } from '@angular/router';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { HttpResourceApiComponent } from './http-resource-api/http-resource-api.component';

export const routes: Routes = [
  { path: 'httpResourceApi', component: HttpResourceApiComponent },
  { path: 'resourceApi', component: ResourceApiComponent },
  { path: '', redirectTo: '/httpResourceApi', pathMatch: 'full' },
];
