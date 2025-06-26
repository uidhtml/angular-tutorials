import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { HttpResourceApiComponent } from './http-resource-api/http-resource-api.component';

export const routes: Routes = [
  { path: 'linkedSignal', component: LinkedSignalComponent },
  { path: 'httpResourceAPI', component: HttpResourceApiComponent },
  { path: 'resourceAPI', component: ResourceApiComponent },
  { path: '', redirectTo: '/linkedSignal', pathMatch: 'full' },
];
