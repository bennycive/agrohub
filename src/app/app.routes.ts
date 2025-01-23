
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


export const routes: Routes = [
  // Landing Page Routes
  { path: '', component: LandingPageComponent }, 
 
  { path: '**', redirectTo: '' },



];
