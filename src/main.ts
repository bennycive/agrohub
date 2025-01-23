import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

 // Add this to load the AOS styles
  
  AOS.init({
    duration: 1000, // animation duration in milliseconds
    once: false, 
    offset: 100, // offset to trigger animation
  });
  