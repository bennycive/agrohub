import { FeaturesComponent } from './../features/features.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { TestimonalComponent } from '../testimonal/testimonal.component';
import { FarmtoolComponent } from '../farmtool/farmtool.component';


@Component({
  
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonalComponent,
    FarmtoolComponent
  ],

  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'

})


export class LandingPageComponent {

}
