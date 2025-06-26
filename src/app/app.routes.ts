import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

export const routes: Routes = [
  { path: 'linkedSignal', component: LinkedSignalComponent },
  { path: '', redirectTo: '/linkedSignal', pathMatch: 'full' },
];
