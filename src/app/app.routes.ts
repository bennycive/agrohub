
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { WeatherComponent } from './landing/weather/weather.component';
import { CropsComponent } from './landing/crops/crops.component';
import { ContactsComponent } from './landing/contacts/contacts.component';
import { ServicesComponent } from './landing/services/services.component';
import { AboutComponent } from './landing/about/about.component';
import { TeamComponent } from './landing/team/team.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

export const routes: Routes = [
  // Landing Page Routes

  { path: '', component: LandingPageComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: AboutComponent },
  { path: 'crops', component: CropsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'team', component: TeamComponent},




 // Admin Routes with /dashboard prefix
 {
  path: 'dashboard',  // All admin routes are prefixed by /dashboard
  component: AdminLayoutComponent,
  children: [
    { path: '', component: DashboardComponent },  // /dashboard (default route)

    // { path: 'products', component: ProductsComponent },
    // { path: 'users', component: UsersComponent },
    // { path: 'reports', component: ReportsComponent },

  ],



},




// Redirect any unknown route to the landing page
 { path: '**', redirectTo: '' },

];
