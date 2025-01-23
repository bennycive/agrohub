import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LandingPageComponent]
})



export class AppComponent {
  title = 'agrohub';
}

