
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { WeatherComponent } from './landing/weather/weather.component';
import { CropsComponent } from './landing/crops/crops.component';


export const routes: Routes = [
  // Landing Page Routes
  { path: '', component: LandingPageComponent }, 
  { path: 'weather', component: WeatherComponent },
  { path: 'crops', component: CropsComponent },
 
  { path: '**', redirectTo: '' },



];
