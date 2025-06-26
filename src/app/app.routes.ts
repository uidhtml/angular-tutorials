import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';

export const routes: Routes = [
  { path: 'linked-signal', component: LinkedSignalComponent },
  { path: 'resourceAPI', component: ResourceApiComponent },
  { path: '', redirectTo: '/linked-signal', pathMatch: 'full' },
];
