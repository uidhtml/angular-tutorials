import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

export const routes: Routes = [
  { path: 'linked-signal', component: LinkedSignalComponent },
  { path: '', redirectTo: '/linked-signal', pathMatch: 'full' },
];
